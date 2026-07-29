"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  carePathStations,
  consequences,
  diagnosticPath,
  evidenceLabels,
  glossary,
  myths,
  riskGroups,
  sourceTypeLabels,
  statistics,
  tracheostomyTerms,
  type DashboardStatistic,
} from "@/content/dashboard";

/* ------------------------------------------------------------------ */
/* Hilfen                                                              */
/* ------------------------------------------------------------------ */

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    document.documentElement.getAttribute("data-acc-motion") === "reduziert"
  );
}

/** Animierte Zahl beim Eintritt in den Viewport. */
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(prefersReducedMotion() ? value : 0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (prefersReducedMotion()) {
      // Ohne Animation direkt den Zielwert anzeigen (asynchron, um
      // kaskadierende Renderings im Effekt zu vermeiden).
      const frame = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const duration = 900;
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function EvidenceBadge({ level }: { level: DashboardStatistic["evidenceLevel"] }) {
  const styles = {
    high: "bg-violet-brand text-white",
    moderate: "bg-violet-light text-ink",
    limited: "bg-soft-grey text-ink border border-ink/20",
  } as const;
  return (
    <span className={`inline-block rounded-hyo px-2.5 py-1 text-xs font-bold ${styles[level]}`}>
      {evidenceLabels[level]}
    </span>
  );
}

function SourcesDisclosure({ stats }: { stats: DashboardStatistic[] }) {
  return (
    <details className="mt-8 rounded-hyo bg-white/70 p-5">
      <summary className="cursor-pointer font-semibold text-violet-deep">
        Quellen und methodische Hinweise dieser Sektion
      </summary>
      <ul className="mt-4 space-y-4 text-sm leading-relaxed text-ink/80">
        {stats.map((stat) => (
          <li key={stat.id}>
            <p className="font-semibold text-ink">{stat.title}</p>
            <p>
              {stat.sourceTitle} · {stat.sourceOrganization} ({stat.year}) ·{" "}
              {sourceTypeLabels[stat.sourceType]}
            </p>
            <p>Einschränkung: {stat.limitations}</p>
            <p>{stat.lastReviewed}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <Link href="/wissen/daten-und-quellen" className="font-semibold text-violet-brand underline">
          Vollständige Quellenübersicht
        </Link>
      </p>
    </details>
  );
}

function ModuleHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <header className="max-w-3xl">
      <p className="mb-3 text-sm font-bold tracking-[0.14em] text-violet-brand uppercase">{eyebrow}</p>
      <h2 className="text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">{title}</h2>
      {children && <div className="mt-4 space-y-3 leading-relaxed text-ink/80">{children}</div>}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Filter (über URL-Parameter teilbar)                                 */
/* ------------------------------------------------------------------ */

type Filters = { topic: string; scope: string; evidence: string };

const topicOptions = ["Alle", "Dysphagie", "Tracheostomie", "Trachealkanüle"];
const scopeOptions = ["Alle", "Deutschland", "international"];
const evidenceOptions = ["Alle", "high", "moderate", "limited"];

function FilterBar({ filters, onChange }: { filters: Filters; onChange: (next: Filters) => void }) {
  const [open, setOpen] = useState(false);

  const group = (
    label: string,
    key: keyof Filters,
    options: string[],
    formatLabel: (value: string) => string,
  ) => (
    <fieldset>
      <legend className="mb-2 text-sm font-bold tracking-[0.12em] text-violet-brand uppercase">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = filters[key] === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => onChange({ ...filters, [key]: option })}
              className={`rounded-hyo border-2 px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                active
                  ? "border-violet-brand bg-violet-brand text-white"
                  : "border-violet-brand/40 bg-white text-violet-deep hover:border-violet-brand"
              }`}
            >
              {formatLabel(option)}
            </button>
          );
        })}
      </div>
    </fieldset>
  );

  const content = (
    <div className="space-y-5">
      {group("Thema", "topic", topicOptions, (value) => value)}
      {group("Geografischer Bezug", "scope", scopeOptions, (value) => value)}
      {group("Datenqualität", "evidence", evidenceOptions, (value) =>
        value === "Alle" ? "Alle" : evidenceLabels[value as keyof typeof evidenceLabels],
      )}
    </div>
  );

  return (
    <div className="rounded-hyo bg-white p-5 sm:p-6">
      {/* Mobil: Filter als aufklappbarer Bereich (Drawer) */}
      <div className="sm:hidden">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="w-full rounded-hyo border-2 border-violet-brand px-4 py-2.5 font-semibold text-violet-brand"
        >
          Filter {open ? "ausblenden" : "anzeigen"}
        </button>
        {open && <div className="mt-5">{content}</div>}
      </div>
      <div className="hidden sm:block">{content}</div>
      <p className="mt-4 text-xs text-ink/60">
        Die Filterauswahl wird in der Adresszeile gespeichert und kann als Link geteilt werden.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Module                                                              */
/* ------------------------------------------------------------------ */

function StatCard({ stat }: { stat: DashboardStatistic }) {
  const hasRange = stat.valueMin !== undefined && stat.valueMax !== undefined;
  const hasValue = stat.value !== undefined;
  return (
    <article className="flex h-full flex-col rounded-hyo bg-white p-6">
      <h3 className="font-extrabold leading-snug">{stat.title}</h3>
      <p className="mt-4 text-4xl font-extrabold text-violet-brand" aria-hidden={!hasRange && !hasValue}>
        {hasRange ? (
          <>
            <AnimatedNumber value={stat.valueMin!} />
            –
            <AnimatedNumber value={stat.valueMax!} suffix=" %" />
          </>
        ) : hasValue ? (
          <AnimatedNumber value={stat.value!} />
        ) : (
          <span className="text-xl leading-snug text-medium-grey">Coming Soon</span>
        )}
      </p>
      {(hasRange || hasValue) && <p className="mt-1 text-sm text-ink/70">{stat.unit}</p>}
      <p className="mt-4 grow text-[0.95rem] leading-relaxed text-ink/80">{stat.definition}</p>
      <dl className="mt-4 space-y-1 text-sm text-ink/70">
        <div>
          <dt className="inline font-semibold">Population: </dt>
          <dd className="inline">{stat.population}</dd>
        </div>
        <div>
          <dt className="inline font-semibold">Bezug: </dt>
          <dd className="inline">
            {stat.geography}, {stat.year}
          </dd>
        </div>
        <div>
          <dt className="inline font-semibold">Quelle: </dt>
          <dd className="inline">
            {stat.sourceUrl ? (
              <a href={stat.sourceUrl} rel="noopener noreferrer" className="text-violet-brand underline">
                {stat.sourceOrganization}
              </a>
            ) : (
              stat.sourceOrganization
            )}
          </dd>
        </div>
      </dl>
      <div className="mt-4">
        <EvidenceBadge level={stat.evidenceLevel} />
      </div>
    </article>
  );
}

function RiskBars() {
  const max = 100;
  return (
    <div className="mt-8 space-y-5" role="img" aria-label="Berichtete Spannweiten der Dysphagie-Häufigkeit nach Erkrankungsgruppen, in Prozent der untersuchten Personen">
      {riskGroups.map((group) => (
        <div key={group.condition}>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-semibold">{group.condition}</p>
            <p className="text-sm font-bold text-violet-deep">
              {group.rangeMin !== undefined && group.rangeMax !== undefined
                ? `${group.rangeMin}–${group.rangeMax} %`
                : "Coming Soon"}
            </p>
          </div>
          <div className="mt-1.5 h-4 rounded-hyo bg-white">
            {group.rangeMin !== undefined && group.rangeMax !== undefined ? (
              <div
                className="h-4 rounded-hyo bg-violet-brand transition-[width,margin] duration-700"
                style={{
                  marginLeft: `${(group.rangeMin / max) * 100}%`,
                  width: `${((group.rangeMax - group.rangeMin) / max) * 100}%`,
                }}
              />
            ) : (
              <div className="h-4 rounded-hyo border-2 border-dashed border-ink/20" />
            )}
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
            {group.note} <span className="font-semibold">Quelle: {group.sourceHint}</span>
          </p>
        </div>
      ))}
      <p className="text-sm text-ink/70">
        Achse: 0–100 % der jeweils untersuchten Population. In der Literatur werden je nach
        Population und Methode unterschiedliche Spannweiten berichtet; internationale Studien sind
        nur eingeschränkt auf Deutschland übertragbar.
      </p>
    </div>
  );
}

function DiagnosticPathModule() {
  const [active, setActive] = useState(0);
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      <ol className="space-y-2" aria-label="Befunderhebungpfad">
        {diagnosticPath.map((entry, index) => (
          <li key={entry.step}>
            <button
              type="button"
              onClick={() => setActive(index)}
              aria-expanded={active === index}
              className={`flex w-full items-center gap-3 rounded-hyo px-4 py-3 text-left font-semibold transition-colors ${
                active === index ? "bg-violet-brand text-white" : "bg-white text-ink hover:bg-violet-light/40"
              }`}
            >
              <span
                className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${
                  active === index ? "bg-mint-brand text-ink" : "bg-mint-light text-violet-deep"
                }`}
              >
                {index + 1}
              </span>
              {entry.step}
            </button>
          </li>
        ))}
      </ol>
      <div className="rounded-hyo bg-white p-7" aria-live="polite">
        <h3 className="text-xl font-extrabold">{diagnosticPath[active].step}</h3>
        <p className="mt-3 leading-relaxed text-ink/85">{diagnosticPath[active].detail}</p>
        {diagnosticPath[active].step === "FEES" && (
          <div className="mt-5 space-y-3 rounded-hyo bg-mint-light p-5 text-[0.95rem] leading-relaxed">
            <p>
              Bei der fiberendoskopischen Evaluation des Schluckens wird eine dünne flexible Kamera
              über die Nase eingeführt. So können Schluckvorgänge, Sekret, Rückstände und mögliche
              Penetration oder Aspiration beurteilt werden.
            </p>
            <p>
              Die Untersuchung wird in der Regel ohne Narkose durchgeführt und dauert meist nur
              kurze Zeit. Das individuelle Empfinden kann unterschiedlich sein.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/** Abstrahierte, ruhige Darstellung von Tracheostoma und Kanüle – keine realistische OP-Grafik. */
function TracheostomyModule() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      <div className="rounded-hyo bg-white p-6">
        <svg viewBox="0 0 240 300" aria-hidden="true" className="mx-auto w-full max-w-[240px]">
          {/* Kopf/Hals als abstrahierte Formen */}
          <path d="M120 20a54 54 0 0 1 54 54v30a54 54 0 0 1-108 0V74a54 54 0 0 1 54-54Z" fill="var(--hyo-light-mint)" />
          <rect x="88" y="128" width="64" height="150" rx="26" fill="var(--hyo-mint)" />
          {/* Luftröhre */}
          <rect x="110" y="120" width="20" height="150" rx="10" fill="var(--hyo-light-violet)" />
          {/* Tracheostoma + Kanüle */}
          <circle cx="120" cy="205" r="14" fill="var(--hyo-warm-white)" stroke="var(--hyo-violet)" strokeWidth="4" />
          <path d="M120 205h44" stroke="var(--hyo-violet)" strokeWidth="10" strokeLinecap="round" />
          {/* Cuff */}
          <ellipse cx="120" cy="232" rx="15" ry="9" fill="var(--hyo-violet)" opacity="0.55" />
          {/* Luftstrom über Kehlkopf (Sprechventil-Prinzip) */}
          <path d="M120 190v-58" stroke="var(--hyo-violet)" strokeWidth="4" strokeDasharray="2 7" strokeLinecap="round" />
        </svg>
        <p className="mt-3 text-center text-xs text-ink/60">
          Abstrahierte Darstellung – nicht anatomisch maßstabsgetreu.
        </p>
      </div>
      <div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Begriffe rund um Tracheostomie">
          {tracheostomyTerms.map((entry, index) => (
            <button
              key={entry.term}
              type="button"
              role="tab"
              aria-selected={selected === index}
              onClick={() => setSelected(index)}
              className={`rounded-hyo border-2 px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                selected === index
                  ? "border-violet-brand bg-violet-brand text-white"
                  : "border-violet-brand/40 bg-white text-violet-deep hover:border-violet-brand"
              }`}
            >
              {entry.term}
            </button>
          ))}
        </div>
        <div className="mt-5 rounded-hyo bg-white p-6" role="tabpanel" aria-live="polite">
          <h3 className="text-xl font-extrabold">{tracheostomyTerms[selected].term}</h3>
          <p className="mt-3 leading-relaxed text-ink/85">{tracheostomyTerms[selected].detail}</p>
        </div>
      </div>
    </div>
  );
}

function CarePathModule() {
  const [open, setOpen] = useState(0);
  return (
    <ol className="mt-8 space-y-3" aria-label="Versorgungspfad von der Klinik in den Alltag">
      {carePathStations.map((station, index) => {
        const expanded = open === index;
        return (
          <li key={station.station} className="rounded-hyo bg-white">
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
            >
              <span className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint-brand text-sm font-extrabold text-ink">
                  {index + 1}
                </span>
                {station.station}
              </span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={`h-5 w-5 shrink-0 text-violet-brand transition-transform ${expanded ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {expanded && (
              <dl className="grid gap-4 border-t-2 border-mint-light px-5 py-5 text-[0.95rem] leading-relaxed sm:grid-cols-2">
                <div>
                  <dt className="font-bold text-violet-deep">Beteiligte Berufsgruppen</dt>
                  <dd className="mt-1 text-ink/85">{station.professions}</dd>
                </div>
                <div>
                  <dt className="font-bold text-violet-deep">Typische Informationsbedarfe</dt>
                  <dd className="mt-1 text-ink/85">{station.needs}</dd>
                </div>
                <div>
                  <dt className="font-bold text-violet-deep">Mögliches Übergaberisiko</dt>
                  <dd className="mt-1 text-ink/85">{station.risk}</dd>
                </div>
                <div>
                  <dt className="font-bold text-violet-deep">Rolle von HYO</dt>
                  <dd className="mt-1 text-ink/85">{station.hyo}</dd>
                </div>
              </dl>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function MythsModule() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {myths.map((myth, index) => {
        const isRevealed = revealed.has(index);
        return (
          <div key={myth.claim} className="flex h-full flex-col rounded-hyo bg-white p-6">
            <p className="grow font-semibold leading-relaxed">„{myth.claim}“</p>
            {isRevealed ? (
              <div className="mt-4 border-t-2 border-mint-light pt-4">
                <p className="inline-block rounded-hyo bg-violet-brand px-2.5 py-1 text-xs font-bold text-white">
                  {myth.verdict}
                </p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/85">{myth.explanation}</p>
                <p className="mt-3 text-xs text-ink/60">
                  {myth.source} · Ob eine Aussage im Einzelfall zutrifft, klärt die individuelle Befunderhebung.
                </p>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setRevealed((previous) => new Set(previous).add(index))}
                className="mt-4 self-start rounded-hyo border-2 border-violet-brand px-4 py-2 text-sm font-semibold text-violet-brand transition-colors hover:bg-violet-brand hover:text-white"
              >
                Mythos oder Fakt?
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

function GlossaryModule() {
  const [topic, setTopic] = useState<string>("Alle");
  const topics = ["Alle", "Dysphagie", "Befunderhebung", "Tracheostomie"];
  const entries = glossary.filter((entry) => topic === "Alle" || entry.topic === topic);
  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2">
        {topics.map((entry) => (
          <button
            key={entry}
            type="button"
            aria-pressed={topic === entry}
            onClick={() => setTopic(entry)}
            className={`rounded-hyo border-2 px-3.5 py-1.5 text-sm font-semibold transition-colors ${
              topic === entry
                ? "border-violet-brand bg-violet-brand text-white"
                : "border-violet-brand/40 bg-white text-violet-deep hover:border-violet-brand"
            }`}
          >
            {entry}
          </button>
        ))}
      </div>
      <dl className="mt-6 grid gap-4 md:grid-cols-2">
        {entries.map((entry) => (
          <div key={entry.term} className="rounded-hyo bg-white p-5">
            <dt className="font-extrabold">{entry.term}</dt>
            <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-ink/85">{entry.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Dashboard                                                           */
/* ------------------------------------------------------------------ */

export function Dashboard() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const filters: Filters = {
    topic: searchParams.get("thema") ?? "Alle",
    scope: searchParams.get("bezug") ?? "Alle",
    evidence: searchParams.get("qualitaet") ?? "Alle",
  };

  function updateFilters(next: Filters) {
    const params = new URLSearchParams();
    if (next.topic !== "Alle") params.set("thema", next.topic);
    if (next.scope !== "Alle") params.set("bezug", next.scope);
    if (next.evidence !== "Alle") params.set("qualitaet", next.evidence);
    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
  }

  const filteredStats = useMemo(
    () =>
      statistics.filter((stat) => {
        if (filters.topic !== "Alle" && !stat.topics.includes(filters.topic as never)) return false;
        if (filters.scope !== "Alle" && stat.scope !== filters.scope) return false;
        if (filters.evidence !== "Alle" && stat.evidenceLevel !== filters.evidence) return false;
        return true;
      }),
    [filters.topic, filters.scope, filters.evidence],
  );

  const overviewStats = filteredStats.filter((stat) => stat.scope === "international");
  const germanyStats = filteredStats.filter((stat) => stat.scope === "Deutschland");

  return (
    <div className="space-y-16">
      <FilterBar filters={filters} onChange={updateFilters} />

      {/* Modul A: Überblick */}
      <section aria-labelledby="modul-a">
        <ModuleHeading eyebrow="Modul A · Überblick" title="Wie häufig sind Schluckstörungen?">
          <p>
            Für Deutschland liegen keine einheitlichen bevölkerungsweiten Daten vor. Die folgenden
            Kennzahlen beziehen sich jeweils auf konkrete Populationen und werden bevorzugt als
            Spannweiten dargestellt, weil die Studienlage heterogen ist.
          </p>
        </ModuleHeading>
        {overviewStats.length === 0 ? (
          <p className="mt-8 rounded-hyo bg-white p-6 text-ink/75">
            Keine Kennzahl entspricht der aktuellen Filterauswahl.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {overviewStats.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        )}
        <SourcesDisclosure stats={overviewStats.length ? overviewStats : statistics.filter((s) => s.scope === "international")} />
      </section>

      {/* Modul B: Deutschland */}
      <section aria-labelledby="modul-b">
        <ModuleHeading eyebrow="Modul B · Deutschland" title="Dysphagie und Tracheostomie in Deutschland">
          <p>
            Die Krankenhausdiagnosestatistik bildet stationäre Behandlungsfälle ab. Sie zeigt nicht
            automatisch, wie viele unterschiedliche Menschen in Deutschland insgesamt mit Dysphagie
            leben.
          </p>
        </ModuleHeading>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {(germanyStats.length ? germanyStats : statistics.filter((s) => s.scope === "Deutschland")).map(
            (stat) => (
              <StatCard key={stat.id} stat={stat} />
            ),
          )}
        </div>
        <p className="mt-6 rounded-hyo border-l-4 border-violet-brand bg-white p-5 text-[0.95rem] leading-relaxed">
          Zeitverlauf, Alters- und Geschlechterverteilung sowie regionale Auswertungen nach
          Bundesland werden ergänzt, sobald die zugrunde liegenden Abfragen (GENESIS-Online,
          ICD-10 R13, OPS 5-311/5-312) vorliegen. Weitere epidemiologische
          Kennzahlen ergänzen wir laufend (Coming Soon).
        </p>
        <SourcesDisclosure stats={statistics.filter((s) => s.scope === "Deutschland")} />
      </section>

      {/* Modul C: Risikogruppen */}
      <section aria-labelledby="modul-c">
        <ModuleHeading
          eyebrow="Modul C · Risikogruppen"
          title="Bei welchen Erkrankungen treten Schluckstörungen häufig auf?"
        >
          <p>
            Die Balken zeigen berichtete Spannweiten aus der Fachliteratur – keine exakten
            Einzelwerte. Je nach untersuchter Population und Untersuchungsmethode unterscheiden sich
            die Ergebnisse erheblich.
          </p>
        </ModuleHeading>
        <RiskBars />
      </section>

      {/* Modul D: Folgen und Risiken */}
      <section aria-labelledby="modul-d">
        <ModuleHeading eyebrow="Modul D · Relevanz" title="Warum Dysphagie relevant ist">
          <p>
            Eine unbehandelte Dysphagie kann Gesundheit, Selbstständigkeit und Teilhabe
            beeinträchtigen. Die folgenden Punkte beschreiben mögliche Folgen – ob und in welchem
            Ausmaß sie eintreten, ist individuell sehr unterschiedlich.
          </p>
        </ModuleHeading>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {consequences.map((entry) => (
            <li key={entry.title} className="rounded-hyo bg-white p-5">
              <p className="font-extrabold">{entry.title}</p>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink/80">{entry.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Modul E: Befunderhebung */}
      <section aria-labelledby="modul-e">
        <ModuleHeading eyebrow="Modul E · Befunderhebung" title="Wie wird Dysphagie erkannt?">
          <p>Wählen Sie einen Schritt aus, um ihn genauer kennenzulernen.</p>
        </ModuleHeading>
        <DiagnosticPathModule />
      </section>

      {/* Modul F: Tracheostomie */}
      <section aria-labelledby="modul-f">
        <ModuleHeading eyebrow="Modul F · Tracheostomie" title="Tracheostomie und Trachealkanüle verstehen">
          <p>
            Eine abstrahierte Darstellung zentraler Begriffe – bewusst ohne realistische
            Operationsbilder.
          </p>
        </ModuleHeading>
        <TracheostomyModule />
      </section>

      {/* Modul G: Versorgungspfad */}
      <section aria-labelledby="modul-g">
        <ModuleHeading eyebrow="Modul G · Versorgungspfad" title="Von der Klinik zurück in den Alltag">
          <p>
            An jeder Station sind andere Berufsgruppen beteiligt – und an jedem Übergang können
            Informationen verloren gehen. Klappen Sie die Stationen auf, um Details zu sehen.
          </p>
        </ModuleHeading>
        <CarePathModule />
      </section>

      {/* Modul H: Mythen und Fakten */}
      <section aria-labelledby="modul-h">
        <ModuleHeading eyebrow="Modul H · Mythen und Fakten" title="Mythos oder Fakt?">
          <p>Sechs häufige Aussagen – tippen Sie auf eine Karte, um die Einordnung zu sehen.</p>
        </ModuleHeading>
        <MythsModule />
      </section>

      {/* Modul I: Glossar */}
      <section aria-labelledby="modul-i">
        <ModuleHeading eyebrow="Modul I · Glossar" title="Zentrale Begriffe kurz erklärt" />
        <GlossaryModule />
      </section>
    </div>
  );
}
