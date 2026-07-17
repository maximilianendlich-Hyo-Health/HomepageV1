import { z } from "zod";

/** Serverseitige Validierung aller Formulare (bewusst kurze Formulare). */

const consent = z
  .string()
  .refine((v) => v === "on", "Bitte stimmen Sie der Datenschutzerklärung zu.");

const email = z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse an.");
const optionalPhone = z.string().trim().max(40).optional().or(z.literal(""));

export const appointmentTopics = [
  "Dysphagie",
  "Trachealkanüle",
  "Versorgung nach Klinikentlassung",
  "Diagnostik",
  "Sonstiges Anliegen",
] as const;

export const appointmentSchema = z.object({
  firstName: z.string().trim().min(1, "Bitte geben Sie Ihren Vornamen an."),
  lastName: z.string().trim().min(1, "Bitte geben Sie Ihren Nachnamen an."),
  email,
  phone: optionalPhone,
  requestFor: z.enum(["für mich selbst", "für eine andere Person"], {
    message: "Bitte wählen Sie aus, für wen Sie anfragen.",
  }),
  topic: z.enum(appointmentTopics, { message: "Bitte wählen Sie Ihr Anliegen." }),
  message: z.string().trim().max(1500, "Bitte kürzen Sie Ihre Nachricht.").optional().or(z.literal("")),
  consentPrivacy: consent,
});

export const partnerOrganizationTypes = [
  "Klinik",
  "Entlassmanagement",
  "Pflegeeinrichtung",
  "Ärztliche Praxis",
  "Therapeutische Einrichtung",
  "Sonstige",
] as const;

export const partnerInterests = [
  "Kooperation anfragen",
  "Patientenübergabe besprechen",
  "Fachlicher Austausch",
  "Sonstiges",
] as const;

export const partnerSchema = z.object({
  organization: z.string().trim().min(1, "Bitte geben Sie Ihre Einrichtung an."),
  organizationType: z.enum(partnerOrganizationTypes, {
    message: "Bitte wählen Sie eine Einrichtungsart.",
  }),
  contactName: z.string().trim().min(1, "Bitte geben Sie eine Ansprechperson an."),
  email,
  phone: optionalPhone,
  interest: z.enum(partnerInterests, { message: "Bitte wählen Sie ein Anliegen." }),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  consentPrivacy: consent,
});

export const applicationPositions = [
  "Therapeutin / Therapeut (Logopädie, Sprachtherapie)",
  "Praktikum",
  "Werkstudentin / Werkstudent",
  "Initiativbewerbung",
] as const;

export const applicationSchema = z.object({
  name: z.string().trim().min(1, "Bitte geben Sie Ihren Namen an."),
  email,
  phone: optionalPhone,
  position: z.enum(applicationPositions, { message: "Bitte wählen Sie eine Position." }),
  startDate: z.string().trim().max(100).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, "Bitte schreiben Sie uns eine kurze Nachricht.")
    .max(2000, "Bitte kürzen Sie Ihre Nachricht."),
  consentPrivacy: consent,
});

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export const initialFormState: FormState = { status: "idle" };
