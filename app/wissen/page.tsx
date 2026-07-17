import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { KnowledgeExplorer } from "@/components/KnowledgeExplorer";
import { GeoIcon } from "@/components/GeoShapes";
import { ButtonLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";
import { articles, categories } from "@/content/wissen";

export const metadata: Metadata = {
  title: { absolute: "Wissen zu Dysphagie und Trachealkanülen | HYO Berlin" },
  description:
    "Fachlich geprüfte Informationen zu Dysphagie, FEES, Trachealkanülen, Therapie und ambulanter Versorgung nach der Klinikentlassung.",
  alternates: { canonical: "/wissen" },
};

export default function WissenPage() {
  return (
    <>
      <Section surface="mint-light">
        <Eyebrow>Wissen</Eyebrow>
        <Headline as="h1" size="xl">
          Wissen, das Versorgung besser macht.
        </Headline>
        <Lead>
          <p>
            Im HYO-Wissensbereich erklären wir medizinische Zusammenhänge, Versorgungswege und
            praktische Fragen rund um Dysphagie, Trachealkanülen und die ambulante
            Weiterversorgung – für Patientinnen und Patienten, Angehörige, Fachpersonen und
            Versorgungspartner.
          </p>
        </Lead>
        <p className="mt-6 max-w-2xl rounded-hyo border-l-4 border-violet-brand bg-white/70 p-4 text-[0.95rem] leading-relaxed">
          Die Inhalte dienen der allgemeinen Information und ersetzen keine individuelle
          medizinische Untersuchung oder Beratung.
        </p>
      </Section>

      {/* Dashboard-Teaser */}
      <Section surface="violet">
        <FadeIn>
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Eyebrow onViolet>Interaktives Dashboard</Eyebrow>
              <Headline onViolet>Dysphagie und Tracheostomie in Zahlen</Headline>
              <Lead onViolet>
                <p>
                  Epidemiologische Daten, Risikogruppen, Versorgungswege und medizinische
                  Zusammenhänge – verständlich visualisiert, mit transparenten Quellen und
                  offen ausgewiesenen Datenlücken.
                </p>
              </Lead>
              <div className="on-violet mt-7">
                <ButtonLink href="/wissen/dashboard" variant="on-violet">
                  Zum Dashboard
                </ButtonLink>
              </div>
            </div>
            <svg viewBox="0 0 300 200" aria-hidden="true" className="hidden w-full max-w-sm lg:block">
              <rect x="20" y="120" width="40" height="60" rx="4" fill="var(--hyo-light-violet)" />
              <rect x="75" y="80" width="40" height="100" rx="4" fill="var(--hyo-mint)" />
              <rect x="130" y="50" width="40" height="130" rx="4" fill="var(--hyo-light-mint)" />
              <path d="M200 180a55 55 0 0 1 110 0Z" fill="var(--hyo-mint)" opacity="0.9" />
              <circle cx="255" cy="60" r="34" fill="var(--hyo-light-violet)" />
              <circle cx="255" cy="60" r="13" fill="var(--hyo-violet)" />
            </svg>
          </div>
        </FadeIn>
      </Section>

      {/* Kategorien */}
      <Section surface="white">
        <FadeIn>
          <Headline>Themengebiete</Headline>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const count = articles.filter((article) => article.category === category.name).length;
            return (
              <FadeIn key={category.name}>
                <div className="flex h-full flex-col gap-4 rounded-hyo bg-mint-light p-7">
                  <GeoIcon name={category.icon} />
                  <h3 className="text-xl font-extrabold">{category.name}</h3>
                  <ul className="grow space-y-1.5 text-[0.95rem] leading-relaxed text-ink/75">
                    {category.topics.slice(0, 4).map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold text-violet-deep">
                    {count > 0
                      ? `${count} ${count === 1 ? "Beitrag" : "Beiträge"} verfügbar · weitere in Vorbereitung`
                      : "Beiträge in Vorbereitung"}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Artikelübersicht mit Suche und Filtern */}
      <Section surface="mint-light" id="artikel">
        <FadeIn>
          <Headline>Alle Beiträge</Headline>
        </FadeIn>
        <div className="mt-8">
          <KnowledgeExplorer />
        </div>
      </Section>

      <Section surface="white">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-hyo bg-soft-grey p-8">
            <div>
              <h2 className="text-xl font-extrabold">Daten und Quellen</h2>
              <p className="mt-2 max-w-xl leading-relaxed text-ink/75">
                Alle im Dashboard verwendeten Kennzahlen mit Quellen, Bezugsjahren, Definitionen
                und methodischen Einschränkungen.
              </p>
            </div>
            <Link
              href="/wissen/daten-und-quellen"
              className="font-semibold text-violet-brand underline decoration-2 underline-offset-4 hover:text-violet-deep"
            >
              Zur Quellenübersicht →
            </Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
