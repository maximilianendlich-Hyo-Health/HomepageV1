import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { ButtonLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";
import { GeoIcon } from "@/components/GeoShapes";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { cta } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dysphagie-Versorgung für Kliniken und Partner",
  description:
    "HYO unterstützt Kliniken, Entlassmanagement, Pflegeeinrichtungen und Praxen in Berlin bei der ambulanten Weiterversorgung von Menschen mit Dysphagie und Trachealkanüle.",
  path: "/fuer-partner",
});

const targetGroups = [
  "Kliniken und Akutstationen",
  "Neurologische Abteilungen",
  "Intensivstationen",
  "Rehabilitationskliniken",
  "Entlassmanagement",
  "Pflegeeinrichtungen",
  "Ärztliche Praxen",
  "Therapeutische Einrichtungen",
];

const handoverInfo = [
  "Hauptdiagnose und dysphagierelevante Nebendiagnosen",
  "Vorliegende Befundergebnisse (FEES, Videofluoroskopie)",
  "Aktuelle Kostform- und Flüssigkeitsempfehlung",
  "Angaben zu Trachealkanüle, Kanülentyp und Entblockungsstatus",
  "Bisherige therapeutische Maßnahmen und Verlauf",
  "Versorgungskontext und Ansprechpersonen",
];

const cooperationModels = [
  {
    icon: "gate" as const,
    title: "Übernahme nach stationärer Behandlung",
    text: "Strukturierte Übernahme von Patientinnen und Patienten mit Dysphagie oder Trachealkanüle direkt aus Klinik oder Rehabilitation – möglichst bereits vor der Entlassung abgestimmt.",
  },
  {
    icon: "half-split" as const,
    title: "Feste Versorgungspartnerschaft",
    text: "Verlässliche Zusammenarbeit mit definierten Ansprechpersonen, abgestimmten Übergabeprozessen und regelmäßiger Rückmeldung zum Versorgungsverlauf.",
  },
  {
    icon: "ring" as const,
    title: "Befunderhebungs-Kooperation",
    text: "FEES-gestützte Befunderhebung als ergänzendes ambulantes Angebot, etwa zur Verlaufskontrolle nach Entlassung oder zur Vorbereitung von Dekanülierungsentscheidungen.",
  },
  {
    icon: "wave" as const,
    title: "Fachlicher Austausch und Schulung",
    text: "Gemeinsame Fallbesprechungen, fachlicher Austausch und Schulungsangebote für Pflege- und Therapieteams – abgestimmt auf Ihre Einrichtung.",
  },
];

export default function FuerPartnerPage() {
  return (
    <>
      <Section surface="violet">
        <Eyebrow onViolet>Für Kliniken und Versorgungspartner</Eyebrow>
        <Headline as="h1" onViolet size="xl">
          Ein verlässlicher Partner nach der Entlassung.
        </Headline>
        <Lead onViolet>
          <p>
            Nach der stationären Behandlung reißt die spezialisierte Dysphagie-Versorgung häufig
            ab: Ambulante Angebote mit instrumenteller Befunderhebung und Trachealkanülen-Expertise
            sind knapp, Übergaben verlaufen unstrukturiert, Befunde gehen verloren.
          </p>
          <p>
            Genau diese Lücke schließt HYO – mit strukturierter Übernahme, spezialisierter
            Weiterbehandlung und verlässlicher Rückmeldung an alle Beteiligten.
          </p>
        </Lead>
        <div className="on-violet mt-8">
          <ButtonLink href="#kooperation-anfragen" variant="on-violet">
            {cta.cooperation}
          </ButtonLink>
        </div>
      </Section>

      <Section surface="white">
        <FadeIn>
          <Headline>Mit wem wir zusammenarbeiten</Headline>
          <ul className="mt-8 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
            {targetGroups.map((group) => (
              <li key={group} className="flex items-start gap-3 leading-relaxed">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1.5 h-3.5 w-3.5 shrink-0 text-violet-brand">
                  <path d="M3 10a7 7 0 0 1 14 0Z" fill="currentColor" />
                </svg>
                {group}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Section>

      <Section surface="mint-light">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Headline>So gestalten wir Übergaben</Headline>
              <Lead>
                <p>
                  Übergaben funktionieren am besten, wenn sie früh beginnen. Idealerweise nehmen
                  Sie bereits vor der Entlassung Kontakt auf – wir stimmen dann Termine, Verordnung
                  und Informationsfluss gemeinsam ab.
                </p>
                <p>
                  Nach Behandlungsbeginn erhalten Sie eine strukturierte Rückmeldung zu Befunden,
                  Therapiezielen und Verlauf. Änderungen – etwa der Kostform oder des
                  Kanülenmanagements – stimmen wir interdisziplinär ab.
                </p>
              </Lead>
            </div>
            <div className="rounded-hyo bg-warm-white p-7">
              <h3 className="text-sm font-bold tracking-[0.14em] text-violet-brand uppercase">
                Hilfreiche Informationen bei der Übergabe
              </h3>
              <ul className="mt-4 space-y-2.5">
                {handoverInfo.map((info) => (
                  <li key={info} className="flex items-start gap-3 leading-relaxed">
                    <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1.5 h-3.5 w-3.5 shrink-0 text-violet-brand">
                      <path d="M3 10a7 7 0 0 1 14 0Z" fill="currentColor" />
                    </svg>
                    {info}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section surface="white">
        <FadeIn>
          <Headline>Denkbare Kooperationsmodelle</Headline>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {cooperationModels.map((model) => (
            <FadeIn key={model.title}>
              <div className="flex h-full flex-col gap-4 rounded-hyo bg-soft-grey p-7">
                <GeoIcon name={model.icon} />
                <h3 className="text-xl font-extrabold">{model.title}</h3>
                <p className="leading-relaxed text-ink/80">{model.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section surface="mint" id="kooperation-anfragen">
        <FadeIn>
          <Eyebrow>Kooperation</Eyebrow>
          <Headline>Frühzeitig Kontakt aufnehmen.</Headline>
          <Lead>
            <p>
              HYO nimmt den Betrieb am 01.11.2026 auf – Kooperationen stimmen wir bereits jetzt ab. Beschreiben
              Sie kurz Ihre Einrichtung und Ihr Anliegen, wir melden uns für die weitere
              Abstimmung.
            </p>
          </Lead>
        </FadeIn>
        <FadeIn className="mt-10 max-w-3xl">
          <PartnerForm />
        </FadeIn>
      </Section>
    </>
  );
}
