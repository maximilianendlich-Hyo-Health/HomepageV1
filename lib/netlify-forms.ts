"use client";

import type { ZodType } from "zod";
import type { FormState } from "@/lib/schemas";

/**
 * Übermittlung an Netlify Forms.
 *
 * Ablauf: FormData einsammeln → clientseitig mit Zod validieren →
 * URL-codiert (inkl. "form-name") per POST an /__forms.html senden.
 * Netlify fängt den POST ab und speichert die Submission; die
 * Formulardefinitionen für die Erkennung liegen in public/__forms.html.
 */
export async function submitToNetlifyForm<T>(
  formName: "terminanfrage" | "kooperationsanfrage" | "bewerbung",
  formData: FormData,
  schema: ZodType<T>,
  successMessage: string,
): Promise<FormState> {
  // Honeypot: gefüllt = Spam → still "erfolgreich" beantworten
  if (String(formData.get("website") ?? "") !== "") {
    return { status: "success", message: successMessage };
  }

  const raw: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") raw[key] = value;
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Bitte prüfen Sie die markierten Felder.",
      fieldErrors,
    };
  }

  try {
    const body = new URLSearchParams({ "form-name": formName });
    for (const [key, value] of Object.entries(parsed.data as Record<string, unknown>)) {
      if (value !== undefined && value !== null) body.append(key, String(value));
    }
    const response = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return { status: "success", message: successMessage };
  } catch {
    return {
      status: "error",
      message:
        "Ihre Anfrage konnte gerade nicht übermittelt werden. Bitte versuchen Sie es später erneut.",
    };
  }
}
