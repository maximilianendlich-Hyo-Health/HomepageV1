/**
 * Google-Ads-Tag (Conversion-Messung).
 *
 * Wird ausschließlich über Umgebungsvariablen aktiviert (Netlify: Site configuration →
 * Environment variables) und lädt erst nach ausdrücklicher Einwilligung der Besucher:innen
 * (Kategorie „Marketing“ im Cookie-Banner). Ohne Variablen ist alles inaktiv: kein Skript,
 * keine zusätzliche Banner-Kategorie, keine Änderung an der Datenschutzerklärung.
 *
 * NEXT_PUBLIC_GOOGLE_ADS_ID                   z. B. AW-1234567890
 * NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL     z. B. AbC-D_efG-h12345678 (optional, für die Danke-Seite)
 */
const rawId = (process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "").trim();
const rawLabel = (process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "").trim();

export const googleAdsId = /^AW-\d{6,}$/.test(rawId) ? rawId : "";
export const googleAdsConversionLabel = /^[\w-]{6,}$/.test(rawLabel) ? rawLabel : "";
export const googleAdsEnabled = googleAdsId !== "";
