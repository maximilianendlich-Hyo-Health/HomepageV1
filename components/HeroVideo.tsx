import { HeroBackdrop } from "@/components/GeoShapes";

/**
 * Hintergrund des Hero-Bereichs: geometrische HYO-Markenfläche mit farbigem Overlay.
 * Es wird bewusst kein Video geladen (Performance: FCP, LCP, Datenvolumen auf dem Smartphone).
 * Der Dateiname ist aus Kompatibilitätsgründen geblieben.
 */
export function HeroVideo() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <HeroBackdrop />
      {/* Farbiges Overlay auf Basis von HYO Violet zur Sicherung der Lesbarkeit */}
      <div className="absolute inset-0" style={{ background: "rgba(130, 129, 189, 0.72)" }} />
      <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: "linear-gradient(to top, rgba(32, 32, 42, 0.35), transparent)" }} />
    </div>
  );
}
