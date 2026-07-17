import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";
import { evidenceLabels, sourceTypeLabels, statistics } from "@/content/dashboard";

export const metadata: Metadata = {
  title: "Daten und Quellen",
  description:
    "Vollständige Quellenangaben, Definitionen, methodische Hinweise und Einschränkungen aller Kennzahlen des HYO-Wissensdashboards.",
  alternates: { canonical: "/wissen/daten-und-quellen" },
};

export default function DatenUndQuellenPage() {
  return (
    <>
      <Section surface="mint-light">
        <nav aria-label="Brotkrumen" className="text-sm">
          <ol className="flex flex-wrap items-center gap-2 text-ink/70">
            <li>
              <Link href="/wissen" className="hover:text-violet-brand hover:underline">
                Wissen
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-ink">
              Daten und Quellen
            </li>
          </ol>
        </nav>
        <div className="mt-6">
          <Eyebrow>Transparenz</Eyebrow>
          <Headline as="h1" size="xl">
            Daten und Quellen
          </Headline>
          <Lead>
            <p>
              Diese Seite dokumentiert alle im Wissensdashboard verwendeten Kennzahlen: Quelle,
              Bezugsjahr, Population, Definition, Datenqualität und methodische Einschränkungen.
              Krankenhausfälle sind nicht mit der Zahl betroffener Personen gleichzusetzen;
              internationale Studien sind nur eingeschränkt auf Deutschland übertragbar.
            </p>
          </Lead>
          <dl className="mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
            <div className="rounded-hyo bg-warm-white p-5">
              <dt className="text-sm font-bold tracking-wide text-violet-brand uppercase">Stand der Daten</dt>
              <dd className="mt-1 font-semibold">
                {/* automatisch aus jüngstem geprüftem Datensatz */}
                Noch kein fachlich geprüfter Datensatz vorhanden
              </dd>
            </div>
            <div className="rounded-hyo bg-warm-white p-5">
              <dt className="text-sm font-bold tracking-wide text-violet-brand uppercase">
                Zuletzt fachlich geprüft
              </dt>
              <dd className="mt-1 font-semibold">TODO</dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section surface="white">
        <h2 className="text-2xl font-extrabold">Kennzahlen im Einzelnen</h2>
        <div className="mt-8 space-y-6">
          {statistics.map((stat) => (
            <article key={stat.id} className="rounded-hyo bg-soft-grey p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-extrabold">{stat.title}</h3>
                <span className="rounded-hyo bg-violet-light px-2.5 py-1 text-xs font-bold text-ink">
                  {evidenceLabels[stat.evidenceLevel]}
                </span>
              </div>
              <dl className="mt-4 grid gap-x-8 gap-y-2 text-[0.95rem] leading-relaxed sm:grid-cols-2">
                <div>
                  <dt className="inline font-semibold">Wert / Spannweite: </dt>
                  <dd className="inline">
                    {stat.valueMin !== undefined && stat.valueMax !== undefined
                      ? `${stat.valueMin}–${stat.valueMax} ${stat.unit}`
                      : stat.value !== undefined
                        ? `${stat.value} ${stat.unit}`
                        : "TODO: nach fachlicher Quellenprüfung ergänzen"}
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold">Bezugsjahr: </dt>
                  <dd className="inline">{stat.year}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold">Population: </dt>
                  <dd className="inline">{stat.population}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold">Geografischer Bezug: </dt>
                  <dd className="inline">{stat.geography}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="inline font-semibold">Definition: </dt>
                  <dd className="inline">{stat.definition}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="inline font-semibold">Quelle: </dt>
                  <dd className="inline">
                    {stat.sourceTitle} · {stat.sourceOrganization} ·{" "}
                    {sourceTypeLabels[stat.sourceType]}
                    {stat.sourceUrl && (
                      <>
                        {" · "}
                        <a href={stat.sourceUrl} rel="noopener noreferrer" className="text-violet-brand underline">
                          Zur Quelle
                        </a>
                      </>
                    )}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="inline font-semibold">Methodische Einschränkungen: </dt>
                  <dd className="inline">{stat.limitations}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="inline font-semibold">Prüfstatus: </dt>
                  <dd className="inline">{stat.lastReviewed}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-12 max-w-3xl space-y-6">
          <div>
            <h2 className="text-xl font-extrabold">Verwendete Klassifikationen</h2>
            <p className="mt-3 leading-relaxed text-ink/80">
              Für Deutschland-Auswertungen sind folgende Codes vorgesehen: ICD-10 R13 (Dysphagie)
              sowie OPS 5-311 und 5-312 (Tracheotomie-Prozeduren). TODO: konkrete Abfragen und
              Bezugsjahre nach fachlicher Prüfung dokumentieren.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold">Aktualisierungslog</h2>
            <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-ink/80">
              <li>
                {new Date().toLocaleDateString("de-DE")}: Struktur, Datenmodell und erste
                Literatur-Spannweiten angelegt; fachliche Prüfung ausstehend (TODO).
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-extrabold">Verantwortlichkeit</h2>
            <p className="mt-3 leading-relaxed text-ink/80">
              Verantwortlich für die fachliche Prüfung der Inhalte: TODO (wird vor Livegang
              benannt).
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
