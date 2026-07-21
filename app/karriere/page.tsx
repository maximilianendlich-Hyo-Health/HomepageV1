import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { ButtonLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";
import type { applicationPositions } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Karriere",
  description:
    "Offene Stellen bei HYO in Berlin: Logopäd:in mit Dysphagie-Spezialisierung, Praktikum und Werkstudium – mit Supervision ab Tag 1.",
  alternates: { canonical: "/karriere" },
};

type Stelle = {
  id: string;
  title: string;
  subtitle: string;
  meta: string;
  intro: string;
  tasks: string[];
  offers: string[];
  brings: string[];
  pdf: string;
  position: (typeof applicationPositions)[number];
  surface: "white" | "mint-light";
};

/** Zusammenfassungen entlang der offiziellen Stellenanzeigen (public/stellen). */
const stellen: Stelle[] = [
  {
    id: "stelle-logopaedie",
    title: "Logopäd:in (m/w/d)",
    subtitle: "Einstieg & Spezialisierung Dysphagie",
    meta: "Vollzeit oder Teilzeit · flexible Arbeitszeiten · Berlin-Friedrichshain · Start Okt/Nov 2026",
    intro:
      "Lerne alles rund um Dysphagie von Grund auf – mit Supervision durch erfahrene Kolleg:innen, klaren Strukturen und einem Team, das fachlich füreinander da ist. Du bist von Anfang an dabei und gestaltest mit.",
    tasks: [
      "Ambulante Dysphagietherapie – supervidiert, schrittweise eigenständig",
      "Klinische Schluckuntersuchungen und Assessments",
      "Einstieg in FEES-Befunderhebung und Trachealkanülenmanagement",
      "Optional: Einsätze bei externen Partnern (Kliniken, außerklinische Einrichtungen)",
      "Beratung von Patient:innen und Angehörigen",
    ],
    offers: [
      "Supervision und Tandem-Arbeit ab Tag 1",
      "Klarer Aufstiegspfad: FEES, Trachealkanülenmanagement, Spezialisierung",
      "Fallbesprechungen und interne Fortbildungen",
      "Transparentes Gehaltsstufenmodell",
      "Deutschlandticket und individuelle Benefits (z. B. Urban Sports)",
      "Flache Hierarchien, kurze Wege",
    ],
    brings: [
      "Abschluss als Logopäd:in (Staatsexamen oder Studium)",
      "Interesse an der Spezialisierung auf Dysphagie",
      "Lust, eine Praxis von Anfang an mitzugestalten",
    ],
    pdf: "/stellen/hyo-stelle-logopaedie.pdf",
    position: "Therapeutin / Therapeut (Logopädie, Sprachtherapie)",
    surface: "white",
  },
  {
    id: "stelle-praktikum",
    title: "Praktikant:in (m/w/d)",
    subtitle: "Hospitationen & Supervisionen im Bereich Dysphagie",
    meta: "Praktikum · Berlin-Friedrichshain · Start Okt/Nov 2026",
    intro:
      "Du willst erste therapeutische Erfahrung und Einblicke in die Arbeit mit Patient:innen mit Schluckstörungen gewinnen? Im Praktikum bei HYO bekommst du direkten Zugang zu Hospitationen und Supervision im Bereich Dysphagie, Trachealkanülen und FEES.",
    tasks: [
      "Deine erforderlichen Hospitationen und Supervisionen im Bereich Schluckstörungen",
      "Supervision durch erfahrene Dysphagie-Expert:innen",
      "Erste Einblicke in FEES und Trachealkanülenmanagement",
      "Regelmäßige Team- und Fallbesprechungen",
      "Supervidierte Therapieableitungen und -planungen",
    ],
    offers: [
      "Enge fachliche Begleitung durch erfahrene Kolleg:innen",
      "Einblicke in Berlins spezialisierte Dysphagie-Praxis",
      "Flexible Zeiten, abgestimmt auf Studium und Ausbildung",
    ],
    brings: [
      "Student:in oder Ausbildung der Logopädie/Sprachtherapie",
      "Interesse an Dysphagie",
      "Zuverlässigkeit",
    ],
    pdf: "/stellen/hyo-stelle-praktikum.pdf",
    position: "Praktikum",
    surface: "mint-light",
  },
  {
    id: "stelle-werkstudium",
    title: "Werkstudent:in (m/w/d)",
    subtitle: "Praktische Erfahrung in Dysphagietherapie & FEES",
    meta: "Flexibel neben dem Studium · Berlin-Friedrichshain · Start Okt/Nov 2026",
    intro:
      "Du studierst Logopädie oder Sprachtherapie und willst neben dem Studium echte klinische Erfahrung sammeln? Bei uns bekommst du von Anfang an praktischen Einblick in die Dysphagietherapie – supervidiert und mit direktem Bezug zu FEES und Trachealkanülenmanagement.",
    tasks: [
      "Hospitationen im Bereich Dysphagie- und Trachealkanülenmanagement und FEES",
      "Erste praktische Erfahrung in der Dysphagietherapie durch supervidierte Therapien",
      "Regelmäßige Team- und Fallbesprechungen",
      "Supervidierte Therapieableitungen und -planungen",
    ],
    offers: [
      "Attraktive Vergütung als Werkstudent:in",
      "Enge Supervision durch erfahrene Dysphagie-Expert:innen",
      "Direkter Einblick in FEES-Befunderhebung und Trachealkanülenmanagement",
      "Flexible Arbeitszeiten, mit dem Studium vereinbar",
    ],
    brings: [
      "Eingeschriebene:r Student:in der Logopädie/Sprachtherapie (o. ä.)",
      "Interesse an klinischer Spezialisierung im Bereich Dysphagie",
      "Zuverlässigkeit und Lust, aktiv mitzuarbeiten",
    ],
    pdf: "/stellen/hyo-stelle-werkstudent.pdf",
    position: "Werkstudentin / Werkstudent",
    surface: "white",
  },
];

function BulletList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold tracking-[0.12em] text-violet-brand uppercase">{title}</h3>
      <ul className="mt-3 space-y-2 leading-relaxed text-ink/85">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-violet-brand" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

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
        <div className="mt-8 flex flex-wrap gap-3">
          {stellen.map((stelle) => (
            <a
              key={stelle.id}
              href={`#${stelle.id}`}
              className="rounded-full bg-white/10 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-mint-brand hover:text-ink"
            >
              {stelle.title}
            </a>
          ))}
        </div>
      </Section>

      <Section surface="mint">
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
                FEES-gestützte Befunderhebung und Trachealkanülen-Management spezialisieren?
              </p>
              <p>
                Dann bist du bei HYO die zentrale Person: Unser Versorgungskonzept steht und
                fällt mit spezialisierten Therapeutinnen und Therapeuten. Du arbeitest
                fokussiert an einem Störungsbild, in enger interdisziplinärer Abstimmung und
                mit strukturierten Prozessen – und baust die Versorgung von Anfang an mit auf.
              </p>
            </div>
            <div className="relative mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="#stelle-logopaedie" variant="on-violet">
                Zur Stelle Logopäd:in
              </ButtonLink>
              <ButtonLink href="/kontakt" variant="on-violet-outline">
                Erst unverbindlich austauschen
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>

      {stellen.map((stelle) => (
        <Section key={stelle.id} surface={stelle.surface} id={stelle.id}>
          <FadeIn>
            <Eyebrow>Wir suchen dich</Eyebrow>
            <Headline>{stelle.title}</Headline>
            <p className="mt-2 text-xl font-bold text-violet-brand">{stelle.subtitle}</p>
            <p className="mt-2 text-sm font-semibold tracking-wide text-medium-grey">
              {stelle.meta}
            </p>
            <Lead>
              <p>{stelle.intro}</p>
            </Lead>
            <p className="mt-5">
              <a
                href={stelle.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-violet-brand underline decoration-2 underline-offset-4 hover:text-violet-deep"
              >
                Stellenanzeige als PDF ansehen
              </a>
            </p>
          </FadeIn>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.05fr_1fr]">
            <FadeIn className="space-y-8">
              <BulletList title="Dein Aufgabenbereich" items={stelle.tasks} />
              <BulletList title="Das bekommst du von uns" items={stelle.offers} />
              <BulletList title="Was du mitbringst" items={stelle.brings} />
            </FadeIn>
            <FadeIn>
              <h3 className="mb-4 text-lg font-extrabold">
                Direkt bewerben: {stelle.title}
              </h3>
              <ApplicationForm position={stelle.position} />
            </FadeIn>
          </div>
        </Section>
      ))}

      <Section surface="mint-light" id="bewerben">
        <FadeIn>
          <Eyebrow>Initiativbewerbung</Eyebrow>
          <Headline>Keine passende Stelle dabei?</Headline>
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
