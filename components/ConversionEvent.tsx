"use client";

import { useEffect } from "react";
import { googleAdsConversionLabel, googleAdsEnabled, googleAdsId, googleTagManagerId } from "@/lib/ads";
import { CONSENT_CHANGED_EVENT, loadConsent } from "@/lib/consent";

const SENT_KEY = "hyo-conversion-sent";

/**
 * Meldet auf der Danke-Seite die Rückrufanfrage an Google – nur mit Marketing-Einwilligung
 * und höchstens einmal pro Sitzung (Neuladen zählt nicht doppelt).
 *
 * - `generate_lead` (empfohlenes Ereignis) wird immer gesendet; die Seite /rueckruf/danke
 *   lässt sich zusätzlich in Google Ads als URL-Conversion hinterlegen.
 * - Mit Ads-ID und Conversion-Label wird außerdem die Ads-Conversion ausgelöst.
 */
export function ConversionEvent() {
  useEffect(() => {
    if (!googleAdsEnabled) return;

    const fire = () => {
      if (!loadConsent().marketing) return;
      // GTM-Modus: ausdrückliches dataLayer-Ereignis (Trigger „Benutzerdefiniertes Ereignis generate_lead“)
      if (googleTagManagerId) {
        if (!window.dataLayer) return;
      } else if (!window.gtag) {
        return;
      }
      try {
        if (window.sessionStorage.getItem(SENT_KEY)) return;
        window.sessionStorage.setItem(SENT_KEY, "1");
      } catch {
        /* Sitzungsspeicher nicht verfügbar – Ereignis trotzdem senden */
      }
      if (googleTagManagerId) {
        // Die Conversion selbst löst das Tag im Container aus (Label dort hinterlegt)
        window.dataLayer.push({ event: "generate_lead", form_name: "rueckruf" });
        return;
      }
      window.gtag!("event", "generate_lead", { form_name: "rueckruf" });
      if (googleAdsId && googleAdsConversionLabel) {
        window.gtag!("event", "conversion", { send_to: `${googleAdsId}/${googleAdsConversionLabel}` });
      }
    };

    // GoogleTag legt gtag beim Consent-Ereignis an; kurz warten, falls beide gleichzeitig starten.
    const timer = window.setTimeout(fire, 300);
    window.addEventListener(CONSENT_CHANGED_EVENT, fire);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(CONSENT_CHANGED_EVENT, fire);
    };
  }, []);
  return null;
}
