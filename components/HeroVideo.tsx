import { existsSync } from "node:fs";
import { join } from "node:path";
import { HeroBackdrop } from "@/components/GeoShapes";

/**
 * Hintergrundvideo des Hero-Bereichs.
 *
 * TODO: Finale Videodateien bereitstellen:
 *   /public/video/hero.webm         (Desktop, komprimiert)
 *   /public/video/hero.mp4          (Fallback, komprimiert)
 *   /public/video/hero-mobile.mp4   (mobile optimierte Quelle)
 *   /public/images/hero-poster.jpg  (Posterbild – Platzhalter vorhanden)
 *
 * Solange keine Videodateien vorliegen, zeigt der Browser das Posterbild
 * bzw. die geometrische Markenfläche. Bei `prefers-reduced-motion`
 * wird das Video per CSS ausgeblendet (siehe globals.css, .hero-video).
 */
export function HeroVideo() {
  // Zur Build-Zeit prüfen, ob Videodateien vorliegen. Solange keine Dateien
  // vorhanden sind, wird nur die Markenfläche gezeigt (keine 404-Requests).
  // Nach dem Ablegen der Dateien in /public/video genügt ein neuer Build.
  const videoDir = join(process.cwd(), "public", "video");
  const hasVideo =
    existsSync(join(videoDir, "hero.mp4")) || existsSync(join(videoDir, "hero.webm"));

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <HeroBackdrop />
      {hasVideo && (
        <video
          className="hero-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
        >
          <source src="/video/hero.webm" type="video/webm" media="(min-width: 768px)" />
          <source src="/video/hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      )}
      {/* Farbiges Overlay auf Basis von HYO Violet zur Sicherung der Lesbarkeit */}
      <div className="absolute inset-0" style={{ background: "rgba(130, 129, 189, 0.72)" }} />
      <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: "linear-gradient(to top, rgba(32, 32, 42, 0.35), transparent)" }} />
    </div>
  );
}
