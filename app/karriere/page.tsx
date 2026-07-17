import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { GeoIcon } from "@/components/GeoShapes";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
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
        <div className="grid gap-6 lg:grid-cols-2">
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
