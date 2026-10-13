import Image from "next/image";

/**
 * HYO-Logo-Anwendung.
 *
 * Verfügbare Dateien (aus der bereitgestellten Originaldatei abgeleitet,
 * Form und Zweifarbigkeit unverändert):
 * - /images/hyo-logo-violet-transparent.png  → violettes Logo auf hellen Flächen (Header)
 * - /images/hyo-logo-mint-transparent.png    → Mint-Variante für violette Flächen (Footer)
 * - /images/hyo-logo-violet-on-mint.png      → Original: violettes Logo auf Mint
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
      src={onDark ? "/images/hyo-logo-mint-transparent.png" : "/images/hyo-logo-violet-transparent.png"}
      alt="HYO"
      width={width}
      height={height}
      priority={priority}
      className="h-auto"
      style={{ width, height: "auto" }}
    />
  );
  return img;
}
