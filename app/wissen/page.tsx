import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ConsentGatedStrokeUnitMap } from "@/components/ConsentGatedStrokeUnitMap";
import { KnowledgeExplorer } from "@/components/KnowledgeExplorer";
import { GeoIcon } from "@/components/GeoShapes";
import { ButtonLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";
import { parkinsonCenters, strokeUnits } from "@/content/strokeUnits";
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
      {/* Erklärvideo: Der Schluckvorgang */}
      {/* Dysphagie in Berlin: Daten, Fakten und Stroke-Unit-Karte */}
      <Section surface="mint-light" id="dysphagie-in-berlin">
        <FadeIn>
          <Eyebrow>Daten und Fakten</Eyebrow>
          <Headline>Dysphagie in Berlin</Headline>
          <Lead>
            <p>
              Der Schlaganfall zählt zu den häufigsten Ursachen einer Dysphagie: In der
              Akutphase entwickeln 37–78&nbsp;% der Betroffenen eine Schluckstörung
              (Martino et al. 2005). Auch bei Morbus Parkinson ist Schlucken zentral: Im
              Krankheitsverlauf sind 35–82&nbsp;% betroffen (Kalf et al. 2012). Für die
              Akutversorgung verfügt Berlin über <strong>15 zertifizierte Stroke Units</strong>{" "}
              sowie mehrere <strong>Fachzentren für Parkinson</strong> in Berlin und Umgebung.
              Nach der Entlassung setzt HYO an: mit spezialisierter ambulanter
              Weiterversorgung in Berlin-Friedrichshain.
            </p>
          </Lead>
        </FadeIn>
        <FadeIn className="mt-10">
          <h3 className="text-xl font-extrabold">Stroke Units und Parkinson-Fachzentren im Überblick</h3>
          <div className="mt-4">
            <ConsentGatedStrokeUnitMap />
          </div>
        </FadeIn>
        <FadeIn className="mt-8">
          <ul className="grid gap-x-10 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {strokeUnits.map((unit) => (
              <li key={unit.name} className="flex gap-3 text-[0.95rem] leading-relaxed">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-brand" />
                <span>
                  <strong>{unit.name}</strong>
                  <br />
                  <span className="text-ink/70">{unit.address}</span>
                </span>
              </li>
            ))}
          </ul>
          <h4 className="mt-10 text-lg font-extrabold">Fachzentren für Parkinson</h4>
          <ul className="mt-4 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
            {parkinsonCenters.map((center) => (
              <li key={center.name} className="flex gap-3 text-[0.95rem] leading-relaxed">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ink" />
                <span>
                  <strong>{center.name}</strong>
                  <br />
                  <span className="text-ink/70">{center.address}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-medium-grey">
            Stand: Juli 2026, Angaben ohne Gewähr. Stroke Units: Zertifizierung Deutsche
            Schlaganfall-Gesellschaft (DSG). Parkinson: Einrichtungen mit
            Parkinson-Komplexbehandlung bzw. Fachklinik-/Zentrums-Status (Auswahl, wird
            laufend ergänzt); maßgeblich sind die aktuellen Verzeichnisse der
            Fachgesellschaften.
            Berlin-spezifische epidemiologische Kennzahlen zur Dysphagie ergänzen wir laufend
            (Coming Soon) – belegte Spannweiten finden Sie im{" "}
            <Link href="/wissen/dashboard" className="font-semibold text-violet-brand underline decoration-2 underline-offset-4">
              Daten-Dashboard
            </Link>
            .
          </p>
        </FadeIn>
      </Section>

      <Section surface="white">
        <FadeIn>
          <Eyebrow>Einfach erklärt</Eyebrow>
          <Headline>Der Schluckvorgang in vier Phasen</Headline>
          <Lead>
            <p>
              Was passiert eigentlich beim Schlucken – und wo kann es haken? Unser kurzes
              Erklärvideo zeigt die vier Phasen des Schluckvorgangs in gut einer halben Minute.
            </p>
          </Lead>
          <div className="mt-8 max-w-3xl overflow-hidden rounded-hyo border-2 border-ink/10 bg-ink">
            {/* Nutzergesteuertes Video: kein Autoplay, mit Bedienelementen */}
            <video
              controls
              preload="metadata"
              playsInline
              poster="/images/schluckvorgang-poster.jpg"
              className="aspect-video w-full"
            >
              <source src="/video/schluckvorgang.mp4" type="video/mp4" />
              Ihr Browser kann dieses Video nicht abspielen.
            </video>
          </div>
          <p className="mt-3 max-w-3xl text-sm text-medium-grey">
            Hinweis: Das Video vermittelt allgemeine Informationen und ersetzt keine
            individuelle Untersuchung oder Beratung.
            {/* TODO: Untertitel (VTT) für Barrierefreiheit ergänzen */}
          </p>
        </FadeIn>
      </Section>

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
