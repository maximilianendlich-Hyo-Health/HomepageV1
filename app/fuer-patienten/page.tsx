import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { ButtonLink, TextLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";
import { GeoIcon } from "@/components/GeoShapes";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Für Patienten und Angehörige",
  description:
    "Was Dysphagie bedeutet, wann spezialisierte Unterstützung sinnvoll ist und wie eine Terminanfrage bei HYO abläuft – verständlich erklärt für Betroffene und Angehörige.",
  alternates: { canonical: "/fuer-patienten" },
};

const steps = [
  {
    title: "Anfrage senden",
    text: "Sie hinterlegen Ihr Interesse an einem Termin über unser Formular – für sich selbst oder eine andere Person. Das ist unverbindlich und kostenlos.",
  },
  {
    title: "Vormerkung",
    text: "Wir nehmen Ihre Anfrage in unsere Vormerkliste auf. Eine Anfrage stellt noch keine Terminbestätigung dar und begründet keinen Behandlungsvertrag.",
  },
  {
    title: "Rückmeldung",
    text: "Sobald die Terminvergabe beginnt, informieren wir Sie und klären gemeinsam die nächsten Schritte – etwa die ärztliche Verordnung.",
  },
  {
    title: "Erster Termin",
    text: "Nach der Eröffnung Ende 2026 starten wir mit Anamnese und Diagnostik und entwickeln daraus Ihren individuellen Behandlungsweg.",
  },
];

const documents = [
  "Ärztliche Verordnung (sofern bereits vorhanden)",
  "Entlassungsbrief der Klinik oder Rehabilitation",
  "Ergebnisse bisheriger Schluckdiagnostik (z. B. FEES-Befund)",
  "Aktuelle Kostform- und Flüssigkeitsempfehlung",
  "Informationen zur Trachealkanüle (Kanülentyp, Entblockungsstatus)",
  "Medikationsplan",
];

export default function FuerPatientenPage() {
  return (
    <>
      <Section surface="mint">
        <Eyebrow>Für Patienten und Angehörige</Eyebrow>
        <Headline as="h1" size="xl">
          Spezialisierte Unterstützung bei Schluckstörungen und Trachealkanülen.
        </Headline>
        <Lead>
          <p>
            Eine Dysphagie oder Trachealkanüle betrifft nicht nur die Nahrungsaufnahme. Sie
            beeinflusst Sicherheit, Kommunikation, Selbstständigkeit und Lebensqualität. Auf dieser
            Seite erklären wir, was das bedeutet – und wie HYO Sie unterstützen kann.
          </p>
        </Lead>
        <div className="mt-8">
          <ButtonLink href="/#termin">{cta.appointment}</ButtonLink>
        </div>
      </Section>

      <Section surface="white">
        <FadeIn>
          <Headline>Was bedeutet Dysphagie?</Headline>
          <Lead>
            <p>
              Dysphagie ist der medizinische Begriff für eine Schluckstörung. Schlucken ist ein
              fein abgestimmter Ablauf aus vielen Muskeln und Nerven – gerät er aus dem
              Gleichgewicht, können Essen, Trinken und sogar das Schlucken von Speichel schwerfallen.
            </p>
            <p>
              Häufige Ursachen sind Schlaganfälle, neurologische Erkrankungen wie Parkinson oder
              Multiple Sklerose, Intensivbehandlungen, Operationen im Kopf-Hals-Bereich oder
              Tumorerkrankungen. Eine Dysphagie kann in jedem Alter auftreten.
            </p>
          </Lead>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "arc-up" as const,
              title: "Mögliche Auswirkungen",
              text: "Verschlucken, Husten beim Essen, das Gefühl von Steckenbleiben, längere Mahlzeiten, Gewichtsverlust oder wiederkehrende Atemwegsinfekte.",
            },
            {
              icon: "half-split" as const,
              title: "Warum das ernst zu nehmen ist",
              text: "Unbehandelt kann eine Dysphagie zu Mangelernährung, Flüssigkeitsmangel und Lungenentzündungen beitragen – und die Teilhabe am Alltag einschränken.",
            },
            {
              icon: "ring" as const,
              title: "Wann Unterstützung sinnvoll ist",
              text: "Wenn Sie oder Ihre Angehörigen solche Anzeichen bemerken, lohnt sich eine gezielte Abklärung – sprechen Sie Ihre Ärztin oder Ihren Arzt darauf an.",
            },
          ].map((card) => (
            <FadeIn key={card.title}>
              <div className="flex h-full flex-col gap-4 rounded-hyo bg-mint-light p-7">
                <GeoIcon name={card.icon} />
                <h3 className="text-xl font-extrabold">{card.title}</h3>
                <p className="leading-relaxed text-ink/80">{card.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section surface="violet">
        <FadeIn>
          <Headline onViolet>Leben mit Trachealkanüle</Headline>
          <Lead onViolet>
            <p>
              Eine Trachealkanüle sichert den Atemweg über ein Tracheostoma – eine kleine Öffnung
              der Luftröhre. Sie verändert Atmung, Stimme und Schlucken und wirft im Alltag viele
              Fragen auf: Wie funktioniert Kommunikation? Was ist beim Essen zu beachten? Wann kann
              die Kanüle möglicherweise wieder entfernt werden?
            </p>
            <p>
              HYO begleitet Menschen mit Trachealkanüle strukturiert und in enger Abstimmung mit
              den behandelnden Ärztinnen und Ärzten, der Pflege und den Angehörigen – von der
              sicheren Versorgung im Alltag bis zum schrittweisen Weg einer möglichen
              Dekanülierung, wo dies medizinisch möglich ist.
            </p>
          </Lead>
          <div className="on-violet mt-8">
            <ButtonLink href="/leistungen#trachealkanuelenmanagement" variant="on-violet">
              Mehr zum Trachealkanülen-Angebot
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      <Section surface="mint-light">
        <FadeIn>
          <Headline>So läuft Ihre Terminanfrage ab</Headline>
        </FadeIn>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn key={step.title}>
              <li className="h-full rounded-hyo bg-warm-white p-6">
                <p className="text-3xl font-extrabold text-violet-brand">{index + 1}</p>
                <h3 className="mt-3 font-extrabold">{step.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/80">{step.text}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
        <FadeIn className="mt-10">
          <p className="max-w-2xl leading-relaxed text-ink/80">
            HYO eröffnet Ende 2026 im MEDICUM Friedrichshain. Mit Ihrer Vormerkung sichern Sie sich
            eine frühzeitige Information, sobald die Terminvergabe beginnt.
          </p>
        </FadeIn>
      </Section>

      <Section surface="white">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Headline>Welche Unterlagen später hilfreich sind</Headline>
              <Lead>
                <p>
                  Für den ersten Termin müssen Sie nichts vorbereiten. Wenn vorhanden, erleichtern
                  diese Unterlagen später den Einstieg – Sie können sie zum Termin mitbringen:
                </p>
              </Lead>
            </div>
            <ul className="space-y-2.5 rounded-hyo bg-soft-grey p-7">
              {documents.map((document) => (
                <li key={document} className="flex items-start gap-3 leading-relaxed">
                  <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1.5 h-3.5 w-3.5 shrink-0 text-violet-brand">
                    <path d="M3 10a7 7 0 0 1 14 0Z" fill="currentColor" />
                  </svg>
                  {document}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>

      <Section surface="mint">
        <FadeIn>
          <Headline>Interesse an einem Termin bei HYO?</Headline>
          <Lead>
            <p>
              Hinterlegen Sie Ihr Interesse unverbindlich. Wir informieren Sie, sobald die
              Terminvergabe beginnt.
            </p>
          </Lead>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href="/#termin">{cta.appointment}</ButtonLink>
            <TextLink href="/wissen">{cta.knowledge}</TextLink>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
