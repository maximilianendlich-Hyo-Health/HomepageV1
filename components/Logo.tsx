import Image from "next/image";

/**
 * HYO-Logo-Anwendung.
 *
 * Verfügbare Dateien (aus der bereitgestellten Originaldatei abgeleitet,
 * Logo unverändert – lediglich der Mint-Hintergrund wurde freigestellt):
 * - /images/hyo-logo-violet-transparent.png  → violettes Logo auf hellen Flächen
 * - /images/hyo-logo-violet-on-mint.png      → Original: violettes Logo auf Mint
 *
 * TODO: Mintfarbene Logo-Variante (für violette Flächen) als Datei ergänzen.
 * Bis dahin wird das Logo auf violetten Flächen auf einer Mint-Kachel gezeigt –
 * das entspricht der freigegebenen Anwendung „Violett auf Mint“.
 */
export function Logo({
  height = 34,
  onDark = false,
  priority = false,
}: {
  height?: number;
  onDark?: boolean;
  priority?: boolean;
}) {
  const width = Math.round(height * 2.49);
  const img = (
    <Image
      src="/images/hyo-logo-violet-transparent.png"
      alt="HYO"
      width={width}
      height={height}
      priority={priority}
      className="h-auto"
      style={{ width, height: "auto" }}
    />
  );
  if (!onDark) return img;
  return (
    <span className="inline-flex rounded-hyo bg-mint-brand px-4 py-3" aria-hidden={false}>
      {img}
    </span>
  );
}
