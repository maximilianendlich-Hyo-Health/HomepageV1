/**
 * Geometrische Bausteine, abgeleitet aus der Formensprache des HYO-Logos:
 * Kreise, Halbkreise, Bögen, Aussparungen und horizontale Teilungen.
 * Das Logo selbst wird hier bewusst nicht nachgebaut.
 */

const V = "var(--hyo-violet)";
const LV = "var(--hyo-light-violet)";
const M = "var(--hyo-mint)";
const LM = "var(--hyo-light-mint)";

export type GeoIconName =
  | "arc-up"
  | "arc-down"
  | "ring"
  | "half-split"
  | "pillar-arc"
  | "quarter"
  | "wave"
  | "dot-ring"
  | "gate"
  | "steps";

/** Service-Icons: ruhige Kompositionen aus Kreis, Bogen und Teilung. */
export function GeoIcon({
  name,
  tone = "violet",
  className = "h-12 w-12",
}: {
  name: GeoIconName;
  tone?: "violet" | "mint";
  className?: string;
}) {
  const a = tone === "violet" ? V : M;
  const b = tone === "violet" ? LV : LM;
  const shapes: Record<GeoIconName, React.ReactNode> = {
    "arc-up": (
      <>
        <path d="M8 40a16 16 0 0 1 32 0Z" fill={a} />
        <rect x="20" y="14" width="8" height="12" fill={b} />
      </>
    ),
    "arc-down": (
      <>
        <path d="M40 12a16 16 0 0 1-32 0Z" fill={a} />
        <circle cx="24" cy="36" r="6" fill={b} />
      </>
    ),
    ring: (
      <>
        <circle cx="24" cy="24" r="16" fill={b} />
        <circle cx="24" cy="24" r="7" fill="none" />
        <path d="M8 24a16 16 0 0 0 32 0Z" fill={a} />
        <circle cx="24" cy="24" r="7" fill={tone === "violet" ? "var(--hyo-warm-white)" : V} />
      </>
    ),
    "half-split": (
      <>
        <path d="M6 24a18 18 0 0 1 36 0Z" fill={b} />
        <path d="M42 24a18 18 0 0 1-36 0Z" fill={a} />
      </>
    ),
    "pillar-arc": (
      <>
        <rect x="8" y="8" width="8" height="32" fill={b} />
        <path d="M16 40a14 14 0 0 1 24 0Z" fill={a} />
      </>
    ),
    quarter: (
      <>
        <path d="M8 40V8h32A32 32 0 0 1 8 40Z" fill={b} />
        <circle cx="16" cy="32" r="7" fill={a} />
      </>
    ),
    wave: (
      <>
        <path d="M4 30a10 10 0 0 1 20 0 10 10 0 0 0 20 0v10H4Z" fill={a} />
        <circle cx="24" cy="12" r="5" fill={b} />
      </>
    ),
    "dot-ring": (
      <>
        <circle cx="24" cy="24" r="16" fill="none" stroke={a} strokeWidth="6" />
        <circle cx="24" cy="8" r="5" fill={b} />
      </>
    ),
    gate: (
      <>
        <path d="M10 40V26a14 14 0 0 1 28 0v14h-8V26a6 6 0 0 0-12 0v14Z" fill={a} />
        <rect x="20" y="34" width="8" height="6" fill={b} />
      </>
    ),
    steps: (
      <>
        <rect x="6" y="30" width="10" height="10" fill={b} />
        <rect x="19" y="20" width="10" height="20" fill={a} />
        <path d="M32 40V22a8 8 0 0 1 8-8v26Z" fill={b} />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      {shapes[name]}
    </svg>
  );
}

/** Versorgungspfad Klinik → Entlassung → ambulante Versorgung → Begleitung. */
export function CarePathGraphic({ onViolet = false }: { onViolet?: boolean }) {
  const stations = [
    { label: "Klinik", icon: "gate" as const },
    { label: "Entlassung", icon: "arc-down" as const },
    { label: "Ambulante spezialisierte Versorgung", icon: "half-split" as const },
    { label: "Langfristige Begleitung", icon: "dot-ring" as const },
  ];
  return (
    <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" aria-label="Versorgungspfad">
      {stations.map((station, index) => (
        <li key={station.label} className="relative">
          <div
            className={`flex h-full flex-col gap-4 rounded-hyo p-6 ${
              onViolet ? "bg-white/10" : "bg-warm-white"
            }`}
          >
            <GeoIcon name={station.icon} tone={onViolet ? "mint" : "violet"} />
            <p className={`text-sm font-bold tracking-wide ${onViolet ? "text-mint-light" : "text-violet-brand"}`}>
              Schritt {index + 1}
            </p>
            <p className={`font-semibold leading-snug ${onViolet ? "text-white" : "text-ink"}`}>
              {station.label}
            </p>
          </div>
          {index < stations.length - 1 && (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className={`absolute top-1/2 -right-5 z-10 hidden h-5 w-5 -translate-y-1/2 lg:block ${
                onViolet ? "text-mint-brand" : "text-violet-brand"
              }`}
            >
              <path d="M4 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
}

/** Team-Platzhalter: geometrische Komposition, keine Silhouetten, keine Gesichter. */
export function TeamPlaceholderArt({ variant }: { variant: number }) {
  const combos = [
    { bg: M, top: LV, bottom: V },
    { bg: LV, top: LM, bottom: M },
    { bg: LM, top: LV, bottom: V },
    { bg: V, top: LM, bottom: M },
  ];
  const c = combos[variant % combos.length];
  return (
    <svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="h-full w-full">
      <rect width="320" height="240" fill={c.bg} />
      <path d="M40 240a80 80 0 0 1 160 0Z" fill={c.bottom} />
      <circle cx="240" cy="90" r="58" fill={c.top} />
      <path d="M298 90a58 58 0 0 1-116 0Z" fill={c.bottom} opacity="0.85" />
      <circle cx="240" cy="90" r="22" fill={c.bg} />
      <rect x="40" y="40" width="26" height="90" fill={c.top} />
    </svg>
  );
}

/** Ruhige Hintergrund-Deko für den Hero und farbige Flächen. */
export function HeroBackdrop() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      <rect width="1440" height="900" fill={V} />
      <path d="M-140 900a460 460 0 0 1 920 0Z" fill={LV} opacity="0.35" />
      <path d="M1420 190a330 330 0 0 1-660 0Z" fill={LV} opacity="0.3" transform="rotate(180 1090 190)" />
      <circle cx="1160" cy="640" r="210" fill={LV} opacity="0.28" />
      <circle cx="1160" cy="640" r="86" fill={V} />
      <rect x="0" y="760" width="1440" height="140" fill="#6a69a6" opacity="0.5" />
    </svg>
  );
}

/** Stilisierte Form des Os hyoideum (Zungenbein): U-förmiger Körper mit den
 *  beiden großen Hörnern – bewusst geometrisch abstrahiert, keine anatomische
 *  Abbildung. */
export function HyoidGraphic({ className = "h-24 w-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 110" aria-hidden="true" className={className}>
      {/* Körper: U-Bogen */}
      <path
        d="M30 34 C30 78, 130 78, 130 34"
        fill="none"
        stroke={V}
        strokeWidth="20"
        strokeLinecap="round"
      />
      {/* Große Hörner (Cornua majora) */}
      <path d="M30 34 L14 14" stroke={LV} strokeWidth="14" strokeLinecap="round" fill="none" />
      <path d="M130 34 L146 14" stroke={LV} strokeWidth="14" strokeLinecap="round" fill="none" />
      {/* Kleine Hörner (Cornua minora) */}
      <circle cx="30" cy="34" r="9" fill={M} />
      <circle cx="130" cy="34" r="9" fill={M} />
    </svg>
  );
}

/** Versorgungspfad als ruhige, großzügige Kacheln (Startseite). */
export function CarePathTiles() {
  const stations: { label: string; icon: GeoIconName; tone: "mint" | "violet" }[] = [
    { label: "Klinik", icon: "gate", tone: "violet" },
    { label: "Entlassung", icon: "arc-down", tone: "mint" },
    { label: "Ambulante spezialisierte Versorgung", icon: "half-split", tone: "violet" },
    { label: "Langfristige Begleitung", icon: "dot-ring", tone: "mint" },
  ];
  return (
    <ol aria-label="Versorgungspfad" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stations.map((station, index) => (
        <li key={station.label} className="h-full">
          <div
            className={`relative flex h-full min-h-56 flex-col overflow-hidden rounded-hyo p-7 transition-transform duration-300 hover:-translate-y-1.5 motion-reduce:hover:translate-y-0 ${
              station.tone === "mint" ? "bg-mint-light" : "bg-violet-light/30"
            }`}
          >
            {/* Große Ziffer als ruhiges Gestaltungselement */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-5 right-3 text-[7rem] leading-none font-extrabold text-violet-brand/12 select-none"
            >
              {index + 1}
            </span>
            <GeoIcon name={station.icon} className="h-14 w-14" />
            <p className="mt-auto pt-8 text-sm font-bold tracking-[0.14em] text-violet-brand uppercase">
              Schritt {index + 1}
            </p>
            <p className="mt-1.5 text-lg leading-snug font-extrabold text-balance">
              {station.label}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Der Schluckvorgang in vier Phasen als ruhige Kacheln (Wissensbereich) –
 *  bewusst ohne anatomische Darstellungen, nur geometrische Markenformen. */
export function SwallowPhaseTiles() {
  const phases: {
    title: string;
    subtitle: string;
    text: string;
    icon: GeoIconName;
    tone: "mint" | "violet";
  }[] = [
    {
      title: "Vorbereiten im Mund",
      subtitle: "Orale Vorbereitungsphase",
      text: "Die Nahrung wird gekaut, mit Speichel vermischt und zu einem gleitfähigen Bissen geformt.",
      icon: "quarter",
      tone: "violet",
    },
    {
      title: "Transport im Mund",
      subtitle: "Orale Phase",
      text: "Die Zunge schiebt den Bissen kontrolliert nach hinten in Richtung Rachen.",
      icon: "arc-down",
      tone: "mint",
    },
    {
      title: "Schluckreflex",
      subtitle: "Pharyngeale Phase",
      text: "Der Schluckreflex wird ausgelöst: Die Atemwege werden geschützt, der Bissen passiert den Rachen.",
      icon: "half-split",
      tone: "violet",
    },
    {
      title: "Weitertransport",
      subtitle: "Ösophageale Phase",
      text: "Die Speiseröhre transportiert den Bissen wellenförmig weiter in den Magen.",
      icon: "wave",
      tone: "mint",
    },
  ];
  return (
    <ol aria-label="Die vier Phasen des Schluckvorgangs" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {phases.map((phase, index) => (
        <li key={phase.title} className="h-full">
          <div
            className={`relative flex h-full min-h-64 flex-col overflow-hidden rounded-hyo p-7 transition-transform duration-300 hover:-translate-y-1.5 motion-reduce:hover:translate-y-0 ${
              phase.tone === "mint" ? "bg-mint-light" : "bg-violet-light/30"
            }`}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-5 right-3 text-[7rem] leading-none font-extrabold text-violet-brand/12 select-none"
            >
              {index + 1}
            </span>
            <GeoIcon name={phase.icon} className="h-14 w-14" />
            <p className="mt-auto pt-8 text-sm font-bold tracking-[0.14em] text-violet-brand uppercase">
              Phase {index + 1} · {phase.subtitle}
            </p>
            <p className="mt-1.5 text-lg leading-snug font-extrabold">{phase.title}</p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/80">{phase.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
