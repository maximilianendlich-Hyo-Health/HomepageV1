"use client";

import { useEffect } from "react";
import { googleAdsEnabled, googleTagTargets } from "@/lib/ads";
import { CONSENT_CHANGED_EVENT, loadConsent } from "@/lib/consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let loaded = false;

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    // gtag.js erwartet das arguments-Objekt, kein Array
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
  }
}

function deleteGoogleCookies() {
  const hostParts = window.location.hostname.split(".");
  const domains = [window.location.hostname, "." + hostParts.slice(-2).join(".")];
  for (const raw of document.cookie.split(";")) {
    const name = raw.split("=")[0].trim();
    if (!/^(_gcl_|_ga|FPLC)/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

function apply() {
  const marketing = loadConsent().marketing;
  ensureGtag();
  if (marketing && !loaded) {
    loaded = true;
    window.gtag!("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
    window.gtag!("js", new Date());
    window.gtag!("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
    for (const target of googleTagTargets) window.gtag!("config", target);
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(googleTagTargets[0])}`;
    document.head.appendChild(script);
  } else if (!marketing && loaded) {
    window.gtag!("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    deleteGoogleCookies();
  }
}

/**
 * Lädt das Google-Ads-Tag erst nach Einwilligung (Kategorie „Marketing“) und
 * schaltet es bei Widerruf wieder ab. Ohne Konfiguration (lib/ads.ts) rendert
 * die Komponente nichts und lädt nichts.
 */
export function GoogleTag() {
  useEffect(() => {
    if (!googleAdsEnabled) return;
    apply();
    window.addEventListener(CONSENT_CHANGED_EVENT, apply);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, apply);
  }, []);
  return null;
}
