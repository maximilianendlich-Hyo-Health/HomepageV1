import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { Logo } from "@/components/Logo";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { LandingStickyBar } from "@/components/LandingStickyBar";
import { CallbackForm } from "@/components/forms/CallbackForm";
import { Eyebrow, Headline, Section } from "@/components/ui/Section";
import { IndikationenGrid } from "@/components/IndikationenGrid";
import { knownTeam, therapistTeam } from "@/content/team";
import { googleAdsEnabled } from "@/lib/ads";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

/** Werbe-Landingpage (Google Ads): nicht im Index, nicht in der Sitemap. */
export const metadata: Metadata = {
  ...pageMetadata({
    title: "Logopädie Berlin-Friedrichshain: Termin per Rückruf | HYO",
    description:
      "Termin in der Logopädie gesucht? Wir behandeln Schlucken, Sprache, Sprechen und Stimme in Berlin-Friedrichshain. Name und Nummer genügen, wir rufen Sie zurück.",
    path: "/rueckruf",
    absolute: true,
  }),
  robots: { index: false, follow: true },
};

const trustChips = ["Freie Termine ab sofort", "Termin innerhalb von 24 h nach kurzem Vorgespräch", "GKV · Privat · Selbstzahler"];

const focus = [
  {
    title: "Probleme beim Schlucken",
    text: "Sie verschlucken sich, husten beim Essen oder Trinken oder haben das Gefühl, dass etwas stecken bleibt? Wir finden die Ursache und trainieren sicheres Schlucken.",
  },
  {
    title: "Schluckuntersuchung mit Kamera (FEES)",
    text: "Eine dünne Kamera zeigt durch die Nase, was beim Schlucken wirklich passiert. Die Untersuchung machen wir direkt bei uns in der Praxis.",
  },
  {
    title: "Trachealkanüle",
    text: "Sie oder Ihr Angehöriger haben ein Atemröhrchen am Hals? Wir begleiten Kanülenwechsel, Sprechventil und die Entwöhnung (Weaning).",
  },
];

const steps = [
  { title: "Formular ausfüllen", text: "Name, Telefonnummer und Wunschzeitraum. Das dauert unter einer Minute." },
  { title: "Wir rufen Sie zurück", text: "In einem kurzen Vorgespräch klären wir Ihr Anliegen und die Verordnung." },
  { title: "Termin in der Praxis", text: "Auf Wunsch innerhalb von 24 Stunden, im MEDICUM Friedrichshain." },
];

const faqs = [
  { q: "Was kostet mich die Behandlung?", a: "Wir behandeln gesetzlich und privat Versicherte sowie Selbstzahler. Die Verordnung klären wir gemeinsam mit Ihnen im Vorgespräch." },
  { q: "Brauche ich eine ärztliche Verordnung?", a: "Für die Behandlung auf Kassenkosten ja. Wenn Sie noch keine haben, sagen wir Ihnen am Telefon, was Sie benötigen und wie Sie vorgehen." },
  { q: "Wann erreichen Sie mich?", a: "Wir rufen innerhalb unserer Öffnungszeiten (Montag bis Freitag, 8 bis 18 Uhr) in dem von Ihnen gewählten Zeitraum zurück." },
  { q: "Kann ich auch für eine andere Person anfragen?", a: "Ja. Tragen Sie einfach Ihre Nummer ein, wir klären am Telefon, für wen der Termin gedacht ist." },
];

const team = [knownTeam[0], ...therapistTeam];

export default function RueckrufPage() {
  return (
    <div data-lp className="pb-20 lg:pb-0">
      {/* Schlanke Kopfzeile ohne Navigation */}
      <div className="border-b border-ink/10 bg-warm-white px-5 py-3 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Logo height={34} priority />
          <a href={site.contact.phoneHref} className="inline-flex items-center gap-2 font-bold text-violet-deep">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
            </svg>
            <span className="hidden sm:inline">Lieber anrufen:</span> 0151 72887811
          </a>
        </div>
      </div>

      {/* Hero mit Formular */}
      <section className="bg-violet-brand px-5 py-10 text-white sm:px-8 md:py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-14">
          <div className="min-w-0 lg:pt-6">
            <Eyebrow onViolet>Logopädie in Berlin-Friedrichshain</Eyebrow>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl">
              Termin in der Logopädie gesucht? Wir rufen Sie zurück.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-mint-light">
              Wir behandeln Schlucken, Sprache, Sprechen und Stimme. Besonders spezialisiert sind wir
              auf Schluckstörungen und Trachealkanülen, mit Schluckuntersuchung (FEES) direkt in
              der Praxis.
            </p>
            <ul className="mt-6 space-y-3">
              {trustChips.map((chip) => (
                <li key={chip} className="flex items-start gap-3 font-semibold">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-6 w-6 shrink-0 text-mint-brand">
                    <circle cx="10" cy="10" r="10" fill="currentColor" />
                    <path d="m5.5 10.5 3 3 6-6.5" fill="none" stroke="#4b4a8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {chip}
                </li>
              ))}
            </ul>
            <p className="mt-8 hidden text-mint-light lg:block">
              Lieber direkt sprechen? Mo–Fr 8–18 Uhr:{" "}
              <a href={site.contact.phoneHref} className="font-extrabold text-white underline decoration-2 underline-offset-4">
                0151 72887811
              </a>
            </p>
          </div>
          <CallbackForm />
        </div>
      </section>

      {/* Schwerpunkt */}
      <Section surface="white">
        <FadeIn>
          <Eyebrow>Unser Schwerpunkt</Eyebrow>
          <Headline>Schlucken ist unser Fachgebiet.</Headline>
        </FadeIn>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {focus.map((item) => (
            <li key={item.title} className="rounded-hyo bg-soft-grey p-6">
              <h3 className="text-xl font-extrabold leading-snug">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/85">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Gesamtes Spektrum */}
      <Section surface="mint-light" id="spektrum">
        <FadeIn>
          <Eyebrow>Das ganze Spektrum</Eyebrow>
          <Headline>Wobei wir Ihnen helfen.</Headline>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/85">
            Neben dem Schlucken behandeln wir Sprache, Sprechen und Stimme. Die Kürzel (z.&nbsp;B.
            SC oder ST1) stehen auf Ihrer Heilmittelverordnung. Sie müssen sie aber nicht kennen:
            Wir klären alles am Telefon.
          </p>
        </FadeIn>
        <div className="mt-10">
          <IndikationenGrid />
        </div>
        <div className="mt-10 flex flex-col items-start gap-4 rounded-hyo bg-violet-brand p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-xl text-lg font-bold leading-snug">
            Nicht sicher, ob Ihr Anliegen dabei ist? Rufen wir Sie an, dann klären wir es in
            wenigen Minuten.
          </p>
          <a
            href="#formular"
            className="inline-flex shrink-0 rounded-hyo bg-mint-brand px-7 py-4 text-lg font-extrabold text-ink hover:bg-mint-light"
          >
            Rückruf anfordern
          </a>
        </div>
      </Section>

      {/* So geht's */}
      <Section surface="white">
        <FadeIn>
          <Eyebrow>So einfach geht&apos;s</Eyebrow>
          <Headline>In drei Schritten zum Termin.</Headline>
        </FadeIn>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-hyo bg-soft-grey p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-brand text-lg font-extrabold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-xl font-extrabold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/85">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <a
            href="#formular"
            className="inline-flex rounded-hyo bg-violet-deep px-7 py-4 text-lg font-extrabold text-white hover:bg-violet-brand"
          >
            Jetzt Rückruf anfordern
          </a>
        </div>
      </Section>

      {/* Team */}
      <Section surface="mint-light">
        <FadeIn>
          <Eyebrow>Ihr Team</Eyebrow>
          <Headline>Wer Sie bei HYO begleitet.</Headline>
        </FadeIn>
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {team.map((member) => (
            <li key={member.name} className="text-center">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-white ring-4 ring-mint-brand">
                <Image src={member.photoBust} alt={member.photoAlt} fill sizes="128px" className="object-cover" />
              </div>
              <h3 className="mt-4 font-extrabold leading-tight">{member.name}</h3>
              <p className="mt-1 text-sm leading-snug text-ink/75">{member.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section surface="white">
        <FadeIn>
          <Eyebrow>Häufige Fragen</Eyebrow>
          <Headline>Kurz beantwortet.</Headline>
        </FadeIn>
        <div className="mt-10 max-w-3xl space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-hyo bg-soft-grey p-5">
              <summary className="cursor-pointer list-none font-extrabold">{item.q}</summary>
              <p className="mt-3 leading-relaxed text-ink/85">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Abschluss */}
      <section className="bg-violet-brand px-5 py-16 text-center text-white sm:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Wir melden uns bei Ihnen.
          </h2>
          <p className="mt-4 text-lg text-mint-light">Ein Formular, eine Nummer, ein Rückruf.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#formular" className="inline-flex rounded-hyo bg-mint-brand px-7 py-4 text-lg font-extrabold text-ink hover:bg-mint-light">
              Rückruf anfordern
            </a>
            <a href={site.contact.phoneHref} className="inline-flex rounded-hyo border-2 border-mint-brand px-7 py-4 text-lg font-bold text-mint-light hover:bg-mint-brand hover:text-ink">
              0151 72887811
            </a>
          </div>
        </div>
      </section>

      {/* Minimaler Footer */}
      <footer className="bg-soft-grey px-5 py-8 text-sm sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="leading-relaxed">
            <strong>{site.legal.company}</strong> · {site.address.building}, {site.address.street}, 2. OG ·{" "}
            {site.address.zip} {site.address.city} · Mo–Fr 8–18 Uhr
          </p>
          <nav aria-label="Rechtliches" className="flex gap-5 font-semibold">
            <a href="/impressum" className="underline underline-offset-4">Impressum</a>
            <a href="/datenschutz" className="underline underline-offset-4">Datenschutz</a>
            {googleAdsEnabled && <CookieSettingsButton />}
          </nav>
        </div>
      </footer>

      <LandingStickyBar />
    </div>
  );
}
