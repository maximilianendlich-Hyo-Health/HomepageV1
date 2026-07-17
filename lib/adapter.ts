/**
 * Formularadapter: Zustellung der Anfragen per E-Mail.
 *
 * Empfängerin: corinna.schwarz@hyo-health.de (überschreibbar über die
 * Umgebungsvariable CONTACT_RECIPIENT_EMAIL).
 *
 * Versand über die Resend-REST-API, sobald RESEND_API_KEY gesetzt ist.
 * Ohne API-Schlüssel (lokale Entwicklung) wird die Anfrage nur serverseitig
 * protokolliert. Für andere Systeme (CRM, Praxissoftware) nur diese Datei
 * anpassen.
 */

export type FormSubmission = {
  kind: "terminanfrage" | "kooperationsanfrage" | "bewerbung";
  data: Record<string, unknown>;
};

const DEFAULT_RECIPIENT = "corinna.schwarz@hyo-health.de";

const SUBJECTS: Record<FormSubmission["kind"], string> = {
  terminanfrage: "Neue Terminanfrage über die HYO-Website",
  kooperationsanfrage: "Neue Kooperationsanfrage über die HYO-Website",
  bewerbung: "Neue Bewerbung über die HYO-Website",
};

/** Deutsche Feldbezeichnungen für die E-Mail. */
const FIELD_LABELS: Record<string, string> = {
  firstName: "Vorname",
  lastName: "Nachname",
  name: "Name",
  email: "E-Mail-Adresse",
  phone: "Telefonnummer",
  requestFor: "Anfrage",
  topic: "Anliegen",
  message: "Nachricht",
  organization: "Einrichtung",
  organizationType: "Einrichtungsart",
  contactName: "Ansprechperson",
  interest: "Anliegen",
  position: "Gewünschte Position",
  startDate: "Möglicher Startzeitpunkt",
  consentPrivacy: "Zustimmung zur Datenschutzerklärung",
};

function formatBody(submission: FormSubmission): string {
  const lines = Object.entries(submission.data)
    .filter(([, value]) => value !== "" && value !== undefined && value !== null)
    .map(([key, value]) => {
      const label = FIELD_LABELS[key] ?? key;
      const rendered =
        key === "consentPrivacy" ? "erteilt" : Array.isArray(value) ? value.join(", ") : String(value);
      return `${label}: ${rendered}`;
    });
  return [
    `${SUBJECTS[submission.kind]}`,
    `Eingegangen am: ${new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" })}`,
    "",
    ...lines,
  ].join("\n");
}

export async function deliverSubmission(submission: FormSubmission): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || DEFAULT_RECIPIENT;
  const body = formatBody(submission);

  if (!apiKey) {
    // Entwicklungsmodus: kein Versanddienst konfiguriert.
    console.info(`[HYO Formular · ${submission.kind} · an ${recipient}]\n${body}`);
    return true;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "HYO Website <onboarding@resend.dev>", // TODO: verifizierte Absenderadresse @hyo-health.de eintragen
      to: [recipient],
      reply_to: typeof submission.data.email === "string" ? submission.data.email : undefined,
      subject: SUBJECTS[submission.kind],
      text: body,
    }),
  });

  if (!response.ok) {
    console.error("[HYO Formular] Zustellung fehlgeschlagen:", response.status, await response.text());
    return false;
  }
  return true;
}
