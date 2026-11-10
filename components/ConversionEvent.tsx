"use client";

import { useEffect } from "react";
import { googleAdsConversionLabel, googleAdsEnabled, googleAdsId } from "@/lib/ads";
import { CONSENT_CHANGED_EVENT, loadConsent } from "@/lib/consent";

const SENT_KEY = "hyo-conversion-sent";

/**
 * Löst auf der Danke-Seite die Google-Ads-Conversion aus – nur mit Marketing-Einwilligung
 * und höchstens einmal pro Sitzung (Neuladen zählt nicht doppelt).
 */
export function ConversionEvent() {
  useEffect(() => {
    if (!googleAdsEnabled || !googleAdsConversionLabel) return;

    const fire = () => {
      if (!loadConsent().marketing || !window.gtag) return;
      try {
        if (window.sessionStorage.getItem(SENT_KEY)) return;
        window.sessionStorage.setItem(SENT_KEY, "1");
      } catch {
        /* Sitzungsspeicher nicht verfügbar – Conversion trotzdem senden */
      }
      window.gtag("event", "conversion", { send_to: `${googleAdsId}/${googleAdsConversionLabel}` });
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
