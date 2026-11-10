"use client";

import { googleAdsEnabled } from "@/lib/ads";

/**
 * Einwilligungsverwaltung (Consent) der HYO-Website.
 *
 * Kategorien:
 * - necessary: technisch notwendig (Barrierefreiheits-Einstellungen,
 *   Speicherung der Einwilligung selbst) – immer aktiv, § 25 Abs. 2 Nr. 2 TDDDG.
 * - externalMedia: externe Inhalte (OpenStreetMap-Karte, VBB-Fahrinfo) –
 *   einwilligungspflichtig, Art. 6 Abs. 1 lit. a DSGVO / § 25 Abs. 1 TDDDG.
 *
 * - marketing: Google-Ads-Conversion-Messung – nur wenn das Tag über Umgebungs-
 *   variablen aktiviert ist (lib/ads.ts); sonst werden keine Marketing-Cookies gesetzt.
 * Die Auswahl wird ausschließlich lokal im Browser gespeichert (localStorage).
 */

export type ConsentSettings = {
  necessary: true;
  externalMedia: boolean;
  marketing: boolean;
  decided: boolean;
  timestamp: string;
  version: number;
};

export const CONSENT_KEY = "hyo-consent";
/** Erhöhen, wenn sich der Umfang der Einwilligung ändert (Banner wird erneut angezeigt). */
export const CONSENT_VERSION = googleAdsEnabled ? 3 : 2;
export const OPEN_CONSENT_EVENT = "hyo:open-consent";
export const CONSENT_CHANGED_EVENT = "hyo:consent-changed";

export const defaultConsent: ConsentSettings = {
  necessary: true,
  externalMedia: false,
  marketing: false,
  decided: false,
  timestamp: "",
  version: CONSENT_VERSION,
};

export function loadConsent(): ConsentSettings {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return defaultConsent;
    const parsed = JSON.parse(raw) as Partial<ConsentSettings>;
    if (parsed.version !== CONSENT_VERSION) return defaultConsent;
    return { ...defaultConsent, ...parsed, necessary: true };
  } catch {
    return defaultConsent;
  }
}

/** Speichert die Auswahl; nicht genannte Kategorien behalten ihren bisherigen Wert. */
export function saveConsent(choice: { externalMedia?: boolean; marketing?: boolean }): ConsentSettings {
  const current = loadConsent();
  const next: ConsentSettings = {
    necessary: true,
    externalMedia: choice.externalMedia ?? current.externalMedia,
    marketing: googleAdsEnabled ? (choice.marketing ?? current.marketing) : false,
    decided: true,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(next));
  } catch {
    /* Speicherung nicht möglich – Auswahl gilt für diese Sitzung */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: next }));
  return next;
}

export function openConsentSettings() {
  window.dispatchEvent(new CustomEvent(OPEN_CONSENT_EVENT));
}
