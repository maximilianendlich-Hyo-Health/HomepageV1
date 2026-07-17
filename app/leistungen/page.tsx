import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { GeoIcon } from "@/components/GeoShapes";
import { ButtonLink, TextLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section, type Surface } from "@/components/ui/Section";
import { serviceAreas, type ServiceDetail } from "@/content/leistungen";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Dysphagietherapie, Trachealkanülen-Management, FEES-gestützte Diagnostik und Versorgung nach der Klinikentlassung – das Leistungsspektrum von HYO in Berlin.",
  alternates: { canonical: "/leistungen" },
};

function ServiceBlock({ service, surface }: { service: ServiceDetail; surface: Surface }) {
  return (
    <Section surface={surface} id={service.slug}>
      <FadeIn>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div>
            <div className="flex items-center gap-4">
              <GeoIcon name={service.icon} />
              <Eyebrow>{service.title}</Eyebrow>
            </div>
            <Headline size="lg">{service.headline}</Headline>
            <Lead>
              <p>{service.text}</p>
            </Lead>
            {service.note && (
              <p className="mt-6 max-w-2xl rounded-hyo border-l-4 border-violet-brand bg-white/70 p-4 text-[0.95rem] leading-relaxed">
                {service.note}
              </p>
            )}
            <div className="mt-8">
              <ButtonLink href="/#termin">{cta.appointment}</ButtonLink>
            </div>
          </div>
          <div className="rounded-hyo bg-white/80 p-7">
            <h3 className="text-sm font-bold tracking-[0.14em] text-violet-brand uppercase">Inhalte</h3>
            <ul className="mt-4 space-y-2.5">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-relaxed">
                  <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1.5 h-3.5 w-3.5 shrink-0 text-violet-brand">
                    <path d="M3 10a7 7 0 0 1 14 0Z" fill="currentColor" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export default function LeistungenPage() {
  const surfacesByArea: Surface[][] = [
    ["white", "mint-light", "white", "mint-light", "white"],
    ["mint-light", "white", "mint-light", "white", "mint-light"],
  ];

  return (
    <>
      <Section surface="violet">
        <Eyebrow onViolet>Leistungen</Eyebrow>
        <Headline as="h1" onViolet size="xl">
          Spezialisierte Therapie. Klar gegliedert. Persönlich begleitet.
        </Headline>
        <Lead onViolet>
          <p>
            Unser Angebot gliedert sich in zwei eng miteinander verbundene Fachbereiche: die
            spezialisierte Behandlung von Schluckstörungen und das Management von Tracheostoma und
            Trachealkanülen. Auf dieser Seite finden Sie alle Leistungen im Detail.
          </p>
        </Lead>
        <nav aria-label="Leistungsbereiche" className="on-violet mt-8 flex flex-wrap gap-4">
          <ButtonLink href="#dysphagietherapie" variant="on-violet">
            Dysphagietherapie
          </ButtonLink>
          <ButtonLink href="#trachealkanuelenmanagement" variant="on-violet-outline">
            Trachealkanülenmanagement
          </ButtonLink>
        </nav>
      </Section>

      {serviceAreas.map((area, areaIndex) => (
        <div key={area.id}>
          <Section surface={areaIndex === 0 ? "mint" : "violet-light"} id={area.id}>
            <FadeIn>
              <Eyebrow>Fachbereich {areaIndex + 1}</Eyebrow>
              <Headline size="lg">{area.title}</Headline>
              <p className="mt-3 max-w-2xl text-lg font-semibold text-violet-deep">{area.subline}</p>
              <Lead>
                <p>{area.intro}</p>
              </Lead>
              <p className="mt-6 text-sm text-ink/70">
                Für wen: Patientinnen und Patienten, Angehörige, Pflege sowie zuweisende Kliniken
                und Praxen. Der konkrete Ablauf richtet sich nach ärztlicher Verordnung, Befund und
                individuellen Zielen.
              </p>
            </FadeIn>
          </Section>
          {area.services.map((service, serviceIndex) => (
            <ServiceBlock
              key={service.slug}
              service={service}
              surface={surfacesByArea[areaIndex][serviceIndex]}
            />
          ))}
        </div>
      ))}

      {/* Hausbesuche und Pflegeeinrichtungen */}
      <Section surface="mint" id="hausbesuche">
        <FadeIn>
          <Eyebrow>Therapie vor Ort</Eyebrow>
          <Headline>Hausbesuche und Behandlung in Pflegeeinrichtungen</Headline>
          <Lead>
            <p>
              Wenn ein Besuch in der Praxis medizinisch oder organisatorisch nicht möglich ist,
              kann die Therapie bei entsprechender ärztlicher Verordnung auch im häuslichen Umfeld
              oder in einer Pflegeeinrichtung stattfinden. Welche Leistungen vor Ort möglich und
              sinnvoll sind, klären wir individuell.
            </p>
          </Lead>
          <ul className="mt-8 grid max-w-3xl gap-x-10 gap-y-2.5 sm:grid-cols-2">
            {[
              "Hausbesuche",
              "Senioren- und Pflegeeinrichtungen",
              "Einrichtungen der außerklinischen Intensivpflege",
              "Abstimmung mit Pflege und Angehörigen",
              "Therapie im konkreten Lebensumfeld",
              "Schulung vor Ort",
              "Prüfung räumlicher und organisatorischer Voraussetzungen",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 leading-relaxed">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1.5 h-3.5 w-3.5 shrink-0 text-violet-brand">
                  <path d="M3 10a7 7 0 0 1 14 0Z" fill="currentColor" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl rounded-hyo border-l-4 border-violet-brand bg-white/70 p-4 text-[0.95rem] leading-relaxed">
            Der mögliche Umfang von Diagnostik und Therapie hängt von der ärztlichen Verordnung,
            der individuellen Situation, den räumlichen Voraussetzungen und den geltenden
            fachlichen und rechtlichen Rahmenbedingungen ab.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href="/#termin">Hausbesuch anfragen</ButtonLink>
            <TextLink href="/kontakt">Voraussetzungen besprechen</TextLink>
          </div>
        </FadeIn>
      </Section>

      <Section surface="violet">
        <FadeIn>
          <Headline onViolet>Sie möchten klären, welches Angebot zu Ihrer Situation passt?</Headline>
          <Lead onViolet>
            <p>
              Beschreiben Sie uns kurz Ihr Anliegen. Wir prüfen, ob und wie HYO Sie nach der
              Eröffnung unterstützen kann.
            </p>
          </Lead>
          <div className="on-violet mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/#termin" variant="on-violet">
              {cta.appointment}
            </ButtonLink>
            <ButtonLink href="/fuer-partner#kooperation-anfragen" variant="on-violet-outline">
              {cta.cooperation}
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm text-mint-light">
            HYO eröffnet Ende 2026. Eine Anfrage stellt noch keine Terminbestätigung dar.
          </p>
        </FadeIn>
      </Section>
    </>
  );
}
