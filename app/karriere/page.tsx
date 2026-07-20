import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { GeoIcon } from "@/components/GeoShapes";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { ButtonLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Karriere",
  description:
    "Baue mit uns eine neue Form der Versorgung auf: Praktikum und Werkstudierenden-Stellen beim Aufbau von HYO in Berlin.",
  alternates: { canonical: "/karriere" },
};

const internTasks = [
  "Unterstützung beim Praxisaufbau",
  "Recherchen zu Versorgung und Gesundheitswesen",
  "Unterstützung bei Kommunikation und Content",
  "Mitarbeit an organisatorischen Projekten",
  "Vorbereitung von Prozessen und Dokumentationen",
  "Unterstützung bei Kooperationen",
];

const workingStudentTasks = [
  "Praxismanagement",
  "Prozessentwicklung",
  "Digitalisierung",
  "Projektmanagement",
  "Kommunikation und Marketing",
  "Unterstützung im operativen Aufbau",
  "Kooperation mit Kliniken und Versorgungspartnern",
];

const requirements = [
  "Strukturierte und selbstständige Arbeitsweise",
  "Hohe Zuverlässigkeit",
  "Interesse an Gesundheitsversorgung, Therapie, Medizin oder Unternehmertum",
  "Freude am Aufbau neuer Strukturen",
  "Sehr gute Deutschkenntnisse",
  "Hohe Lernbereitschaft",
  "Verantwortungsbewusster Umgang mit sensiblen Informationen",
];

export default function KarrierePage() {
  return (
    <>
      <Section surface="violet">
        <Eyebrow onViolet>Karriere</Eyebrow>
        <Headline as="h1" size="xl" onViolet>
          Baue mit uns eine neue Form der Versorgung auf.
        </Headline>
        <Lead onViolet>
          <p>
            HYO befindet sich im Aufbau. Wir suchen Menschen, die nicht nur bestehende Abläufe
            übernehmen, sondern gemeinsam mit uns eine spezialisierte ambulante Versorgung
            entwickeln möchten.
          </p>
        </Lead>
      </Section>

      <Section surface="white">
        {/* Ankerpersonen: Therapeutinnen und Therapeuten */}
        <FadeIn>
          <div className="on-violet relative overflow-hidden rounded-hyo bg-violet-brand p-8 text-white sm:p-12">
            <svg viewBox="0 0 160 160" aria-hidden="true" className="absolute -top-10 -right-10 h-44 w-44 opacity-40">
              <circle cx="80" cy="80" r="72" fill="none" stroke="var(--hyo-mint)" strokeWidth="18" />
            </svg>
            <h2 className="relative max-w-2xl text-3xl leading-[1.12] font-extrabold text-balance sm:text-4xl">
              Therapeutinnen und Therapeuten mit Interesse an Dysphagie &amp; Tracheostomie
            </h2>
            <div className="relative mt-5 max-w-2xl space-y-3 leading-relaxed text-mint-light">
              <p>
                Du bist Logopädin, Logopäde oder akademische Sprachtherapeutin bzw.
                akademischer Sprachtherapeut und möchtest dich konsequent auf Dysphagie,
                FEES-gestützte Diagnostik und Trachealkanülen-Management spezialisieren?
              </p>
              <p>
                Dann bist du bei HYO die zentrale Person: Unser Versorgungskonzept steht und
                fällt mit spezialisierten Therapeutinnen und Therapeuten. Du arbeitest
                fokussiert an einem Störungsbild, in enger interdisziplinärer Abstimmung und
                mit strukturierten Prozessen – und baust die Versorgung von Anfang an mit auf.
              </p>
            </div>
            <div className="relative mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="#bewerben" variant="on-violet">
                Jetzt bewerben
              </ButtonLink>
              <ButtonLink href="/kontakt" variant="on-violet-outline">
                Erst unverbindlich austauschen
              </ButtonLink>
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <article className="h-full rounded-hyo bg-mint-light p-8">
              <GeoIcon name="arc-up" />
              <h2 className="mt-5 text-2xl font-extrabold">Praktikum</h2>
              <p className="mt-2 text-ink/80">Mögliche Aufgaben:</p>
              <ul className="mt-4 space-y-2 leading-relaxed text-ink/85">
                {internTasks.map((task) => (
                  <li key={task} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-violet-brand" />
                    {task}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
          <FadeIn>
            <article className="h-full rounded-hyo bg-violet-light/40 p-8">
              <GeoIcon name="steps" />
              <h2 className="mt-5 text-2xl font-extrabold">Werkstudentin oder Werkstudent</h2>
              <p className="mt-2 text-ink/80">Mögliche Aufgaben:</p>
              <ul className="mt-4 space-y-2 leading-relaxed text-ink/85">
                {workingStudentTasks.map((task) => (
                  <li key={task} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-violet-brand" />
                    {task}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        </div>
      </Section>

      <Section surface="mint">
        <FadeIn>
          <Headline>Was du mitbringen solltest</Headline>
          <ul className="mt-8 grid gap-x-10 gap-y-3 leading-relaxed sm:grid-cols-2">
            {requirements.map((requirement) => (
              <li key={requirement} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-violet-brand" />
                {requirement}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Section>

      <Section surface="mint-light" id="bewerben">
        <FadeIn>
          <Eyebrow>Bewerbung</Eyebrow>
          <Headline>Bei HYO bewerben</Headline>
          <Lead>
            <p>
              Erzähl uns kurz, wer du bist und was dich am Aufbau von HYO interessiert. Wir melden
              uns zeitnah bei dir.
            </p>
          </Lead>
        </FadeIn>
        <div className="mt-10 max-w-2xl">
          <ApplicationForm />
        </div>
      </Section>
    </>
  );
}
