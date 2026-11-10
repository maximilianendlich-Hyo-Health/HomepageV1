/**
 * Landingpages für Werbung (Google Ads): laufen ohne Hauptnavigation, Footer und
 * globales CTA-Band, damit Besucher:innen nicht vom Formular abgelenkt werden.
 */
export const LANDING_PREFIX = "/rueckruf";

export function isLandingPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  return pathname === LANDING_PREFIX || pathname.startsWith(`${LANDING_PREFIX}/`);
}
