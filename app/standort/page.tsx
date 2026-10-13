import type { Metadata } from "next";
import { ConsentGatedMap } from "@/components/ConsentGatedMap";
import { ConsentGatedTransitWidget } from "@/components/ConsentGatedTransitWidget";
import { FadeIn } from "@/components/FadeIn";
import { GeoIcon } from "@/components/GeoShapes";
import { ButtonLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";
import { mapsRouteUrl, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Anfahrt: Logopädie in Friedrichshain",
  description:
    "HYO im MEDICUM Friedrichshain, Matthiasstraße 7, 10249 Berlin: Anfahrt mit Tram und Bus, Parken und Barrierefreiheit der Praxis für Schlucktherapie.",
  path: "/standort",
});

const travelInfo = [
  {
    title: "Öffentliche Verkehrsmittel",
    icon: "gate" as const,
    text: "Die nahegelegene Straßenbahnhaltestelle „Klinikum im Friedrichshain“ wird von den Linien M5, M6 und M8 bedient. Ihre Verbindung finden Sie direkt über die Fahrplanauskunft oben.",
  },
  {
    title: "Parkmöglichkeiten",
    icon: "ring" as const,
    text: "Hinweise zum Parken in der Umgebung geben wir Ihnen gern im persönlichen Gespräch. Wir empfehlen die Anreise mit Tram oder Bus.",
  },
  {
    title: "Barrierefreiheit",
    icon: "half-split" as const,
    text: "Der Zugang zu Haus 2 sowie zu einzelnen Praxen wird als rollstuhlgerecht angegeben. Details und Empfehlungen finden Sie unten im Abschnitt „Barrierefreie Erreichbarkeit“.",
  },
  {
    title: "MEDICUM Friedrichshain",
    icon: "dot-ring" as const,
    text: "HYO wird Teil des MEDICUM Friedrichshain, eines Standorts mit medizinischen Praxen und Gesundheitsangeboten unter einem Dach.",
  },
];

export default function StandortPage() {
  return (
    <>
      <Section surface="mint">
        <Eyebrow>Standort</Eyebrow>
        <Headline as="h1" size="xl">
          HYO in Berlin-Friedrichshain
        </Headline>
        <Lead>
          <p>
            {site.address.building}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </p>
        </Lead>
        <div className="mt-8">
          <ButtonLink href={mapsRouteUrl}>Route planen</ButtonLink>
        </div>
      </Section>

      <Section surface="white">
        <div className="grid items-start gap-8 lg:grid-cols-[3fr_2fr]">
          <FadeIn>
            <h2 className="text-xl font-extrabold">Karte</h2>
            <div className="mt-4">
              {/* Zwei-Klick-Lösung: Karte lädt erst nach Einwilligung (Cookie-Banner) */}
              <ConsentGatedMap />
            </div>
          </FadeIn>
          <FadeIn>
            <h2 className="text-xl font-extrabold">Anreise mit Bus und Bahn</h2>
            <div className="mt-4">
              {/* Zwei-Klick-Lösung: VBB-Fahrinfo lädt erst nach Einwilligung */}
              <ConsentGatedTransitWidget />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section surface="mint-light">
        <div className="grid gap-6 sm:grid-cols-2">
          {travelInfo.map((info) => (
            <FadeIn key={info.title}>
              <article className="h-full rounded-hyo bg-white p-7">
                <GeoIcon name={info.icon} />
                <h2 className="mt-4 text-xl font-extrabold">{info.title}</h2>
                <p className="mt-2 leading-relaxed text-ink/80">{info.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section surface="mint" id="barrierefreie-erreichbarkeit">
        <FadeIn>
          <Eyebrow>Anreise für alle</Eyebrow>
          <Headline>Barrierefreie Erreichbarkeit</Headline>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-ink/85">
            <p>
              Uns bei HYO ist wichtig, dass Patientinnen und Patienten das MEDICUM
              Friedrichshain in der Matthiasstraße 7 möglichst unkompliziert erreichen können.
            </p>
            <p>
              Der Zugang zu Haus 2 sowie zu einzelnen Praxen wird als rollstuhlgerecht
              angegeben. Da sich im Gebäude mehrere Praxen auf unterschiedlichen Etagen
              befinden, können die konkreten Bedingungen jedoch je nach Zielpraxis variieren.
            </p>
            <p>
              Wir empfehlen Patientinnen und Patienten mit Rollstuhl, Rollator, Kinderwagen
              oder eingeschränkter Mobilität, sich vor dem Termin direkt mit der jeweiligen
              Praxis abzustimmen. So lassen sich Fragen zum stufenlosen Zugang, zu Aufzügen,
              Türbreiten, barrierefreien Sanitäranlagen sowie geeigneten Park- und
              Ausstiegsmöglichkeiten vorab klären.
            </p>
            <p>
              Die nahegelegene Straßenbahnhaltestelle „Klinikum im Friedrichshain“ wird von
              den Linien M5, M6 und M8 bedient. Für die Planung einer barrierearmen Anreise
              empfehlen wir die aktuellen Verbindungsauskünfte von BVG und VBB. Dort können
              auch mögliche Aufzugsstörungen und weitere Einschränkungen berücksichtigt
              werden.
            </p>
            <p>
              Zu taktilen Leitsystemen, induktiven Höranlagen, kontrastreicher Beschilderung
              oder Informationen in Leichter Sprache liegen derzeit keine einheitlichen
              Angaben für das gesamte Ärztehaus vor. Bei besonderen Anforderungen empfehlen
              wir daher eine vorherige Rücksprache mit der behandelnden Praxis.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section surface="white">
        <FadeIn>
          <Headline size="md">Öffnungszeiten</Headline>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink/80">
            {/* TODO: Öffnungszeiten vor Livegang ergänzen oder Abschnitt entfernen */}
            HYO nimmt den Betrieb am 01.11.2026 auf. Termine buchen Sie online – Zeiten
            und Ablauf besprechen wir persönlich mit Ihnen.
          </p>
        </FadeIn>
      </Section>
    </>
  );
}
