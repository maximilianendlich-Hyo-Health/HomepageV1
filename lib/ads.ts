/**
 * Google-Tag (Messung für Google Ads und ggf. Google Analytics).
 *
 * Das Tag lädt ausschließlich nach ausdrücklicher Einwilligung der Besucher:innen
 * (Kategorie „Marketing“ im Cookie-Banner, siehe components/GoogleTag.tsx).
 *
 * Konfiguration (alles optional, per Netlify-Umgebungsvariable überschreibbar):
 * NEXT_PUBLIC_GOOGLE_TAG_ID                   Google-Tag-ID, z. B. G-HSGX78DD1W
 * NEXT_PUBLIC_GOOGLE_ADS_ID                   Ads-Konto-ID, z. B. AW-1234567890 (nur für Conversion-Label)
 * NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL     Conversion-Label der Ads-Conversion (optional)
 *
 * Ohne Tag-ID und Ads-ID ist alles inaktiv: kein Skript, keine Banner-Kategorie
 * „Marketing“, keine Änderung an der Datenschutzerklärung.
 */
const DEFAULT_TAG_ID = "G-HSGX78DD1W";

const clean = (value: string | undefined) => (value ?? "").trim();

const rawTag = clean(process.env.NEXT_PUBLIC_GOOGLE_TAG_ID) || DEFAULT_TAG_ID;
const rawAds = clean(process.env.NEXT_PUBLIC_GOOGLE_ADS_ID);
const rawLabel = clean(process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL);

export const googleTagId = /^G-[A-Z0-9]{6,}$/.test(rawTag) ? rawTag : "";
export const googleAdsId = /^AW-\d{6,}$/.test(rawAds) ? rawAds : "";
export const googleAdsConversionLabel = /^[\w-]{6,}$/.test(rawLabel) ? rawLabel : "";

/** Alle Ziele, die das Google-Tag konfiguriert (Tag-ID zuerst, sie lädt das Skript). */
export const googleTagTargets = [googleTagId, googleAdsId].filter(Boolean);
export const googleAdsEnabled = googleTagTargets.length > 0;
