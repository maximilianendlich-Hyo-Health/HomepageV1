import { googleTagManagerId } from "@/lib/ads";
import { loadConsent } from "@/lib/consent";

/**
 * Meldet eine erfolgreich abgesendete Rückrufanfrage an den Google Tag Manager.
 *
 * Wird direkt im Formular aufgerufen, nachdem Netlify die Anfrage angenommen hat – also
 * unabhängig davon, auf welcher Seite das Formular steht (Startseite oder /rueckruf).
 * Nur mit Marketing-Einwilligung; ohne GTM-Container passiert nichts
 * (dann übernimmt components/ConversionEvent.tsx auf der Danke-Seite).
 */
export function trackLead() {
  if (typeof window === "undefined" || !googleTagManagerId) return;
  if (!loadConsent().marketing) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "generate_lead", form_name: "rueckruf" });
}
