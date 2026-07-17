"use server";

import { deliverSubmission, type FormSubmission } from "@/lib/adapter";
import {
  appointmentSchema,
  applicationSchema,
  partnerSchema,
  type FormState,
} from "@/lib/schemas";
import type { ZodError, ZodType } from "zod";

/** Wandelt Zod-Fehler in ein flaches Feld→Meldung-Objekt um. */
function toFieldErrors(error: ZodError): Record<string, string> {
  const fieldErrors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!fieldErrors[key]) fieldErrors[key] = issue.message;
  }
  return fieldErrors;
}

/** Einfacher Spam-Schutz: unsichtbares Honeypot-Feld muss leer bleiben. */
function isSpam(formData: FormData): boolean {
  return String(formData.get("website") ?? "") !== "";
}

async function handle<T>(
  formData: FormData,
  schema: ZodType<T>,
  kind: FormSubmission["kind"],
  raw: Record<string, unknown>,
  successMessage: string,
): Promise<FormState> {
  if (isSpam(formData)) {
    // Spam wird still verworfen, ohne Rückschluss auf den Schutzmechanismus.
    return { status: "success", message: successMessage };
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Bitte prüfen Sie die markierten Felder.",
      fieldErrors: toFieldErrors(parsed.error),
    };
  }

  const delivered = await deliverSubmission({ kind, data: parsed.data as Record<string, unknown> });
  if (!delivered) {
    return {
      status: "error",
      message:
        "Ihre Anfrage konnte gerade nicht übermittelt werden. Bitte versuchen Sie es später erneut.",
    };
  }
  return { status: "success", message: successMessage };
}

export async function submitAppointment(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  return handle(
    formData,
    appointmentSchema,
    "terminanfrage",
    {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      requestFor: formData.get("requestFor"),
      topic: formData.get("topic"),
      message: formData.get("message"),
      consentPrivacy: formData.get("consentPrivacy") ?? "",
    },
    "Vielen Dank. Ihre Anfrage ist bei uns eingegangen. Wir informieren Sie, sobald die Terminvergabe bei HYO beginnt.",
  );
}

export async function submitPartner(_prev: FormState, formData: FormData): Promise<FormState> {
  return handle(
    formData,
    partnerSchema,
    "kooperationsanfrage",
    {
      organization: formData.get("organization"),
      organizationType: formData.get("organizationType"),
      contactName: formData.get("contactName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interest: formData.get("interest"),
      message: formData.get("message"),
      consentPrivacy: formData.get("consentPrivacy") ?? "",
    },
    "Vielen Dank für Ihre Anfrage. Wir melden uns zeitnah für die weitere Abstimmung.",
  );
}

export async function submitApplication(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  return handle(
    formData,
    applicationSchema,
    "bewerbung",
    {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      position: formData.get("position"),
      startDate: formData.get("startDate"),
      message: formData.get("message"),
      consentPrivacy: formData.get("consentPrivacy") ?? "",
    },
    "Vielen Dank für Ihre Bewerbung. Wir melden uns bei Ihnen.",
  );
}
