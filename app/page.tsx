import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { HeroVideo } from "@/components/HeroVideo";
import { CarePathTiles, GeoIcon } from "@/components/GeoShapes";
import { ButtonLink, TextLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { BookingCard } from "@/components/BookingCard";
import { ConsentGatedMap } from "@/components/ConsentGatedMap";
import { dysphagieArea, homeVisitTile, trachealArea } from "@/content/leistungen";
import { articles } from "@/content/wissen";
import { knownTeam, therapistTeam } from "@/content/team";
import { booking, cta } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Schlucktherapie Berlin: Dysphagie & Schluckstörung | HYO",
  description:
    "Spezialisierte Logopädie bei Dysphagie und Schluckstörungen in Berlin-Friedrichshain: Schlucktherapie, Trachealkanülenmanagement, FEES. Termin online buchen.",
  path: "/", absolute: true,
});

const signs = [
  "Husten oder Räuspern beim Essen und Trinken",
  "das Gefühl, dass Nahrung stecken bleibt",
  "eine veränderte, feucht klingende Stimme nach dem Schlucken",
  "verlängerte Mahlzeiten oder Vermeiden bestimmter Speisen",
  "unbeabsichtigter Gewichtsverlust",
  "wiederkehrende Atemwegsinfekte ohne klare Ursache",
];

const steps = [
  {
    title: "Kurzes Telefonat buchen",
    text: "Buchen Sie online einen Termin für ein kurzes Telefonat – ganz einfach und unverbindlich.",
  },
  {
    title: "Persönlich besprechen",
    text: "Im Gespräch besprechen wir alles persönlich mit Ihnen – auch die ärztliche Verordnung – und suchen gemeinsam den passenden Therapeuten oder die passende Therapeutin für Sie aus.",
  },
  {
    title: "Erstuntersuchung",
    text: "Wir starten mit Anamnese und logopädischem Befund und verschaffen uns ein genaues Bild Ihrer Situation.",
  },
  {
    title: "Behandlung und Begleitung",
    text: "Daraus entwickeln wir mit Ihnen und Ihren Angehörigen einen individuellen Behandlungsweg und begleiten Sie Schritt für Schritt – in der Praxis und bei ärztlicher Verordnung auch in Partnereinrichtungen.",
  },
];

const faqs = [
  {
    q: "Was ist eine Schluckstörung (Dysphagie)?",
    a: "Dysphagie ist der medizinische Begriff für eine Schluckstörung: Essen, Trinken oder das Schlucken von Speichel fällt schwer. Ursachen können unter anderem ein Schlaganfall, neurologische Erkrankungen, Intensivbehandlungen oder Operationen im Kopf-Hals-Bereich sein. Eine gezielte Abklärung und Schlucktherapie durch spezialisierte Logopädinnen und Logopäden schafft Klarheit.",
  },
  {
    q: "Was bedeutet Trachealkanülenmanagement?",
    a: "Trachealkanülenmanagement ist die strukturierte Begleitung von Menschen mit Trachealkanüle – von der sicheren Versorgung im Alltag über Cuff-Management und Entblockungsphasen bis zur möglichen Dekanülierung, wo dies medizinisch möglich ist.",
  },
  {
    q: "Wann startet HYO und wie komme ich zu einem Termin?",
    a: "HYO nimmt den Betrieb am 01.11.2026 auf. Sie können ab sofort online über unsere Terminbuchung einen Termin für ein kurzes Telefonat buchen. In diesem Gespräch besprechen wir alles persönlich mit Ihnen und suchen den passenden Therapeuten oder die passende Therapeutin aus. Am 18.11.2026 findet unser Tag der offenen Praxis statt.",
  },
  {
    q: "Wer kann zu HYO kommen?",
    a: "Wir behandeln gesetzlich und privat Versicherte sowie Selbstzahler. Wir sprechen Deutsch und Englisch.",
  },
  {
    q: "Brauche ich eine ärztliche Verordnung?",
    a: "Für die Behandlung ist in der Regel eine ärztliche Verordnung erforderlich. Wie Sie dabei vorgehen und welche Unterlagen hilfreich sind, klären wir gemeinsam mit Ihnen.",
  },
  {
    q: "Werden Angehörige einbezogen?",
    a: "Ja. Wir beziehen Angehörige und Pflegepersonen aktiv in die Therapie ein – sprechen Sie uns gerne darauf an.",
  },
  {
    q: "Behandelt HYO auch in Pflegeeinrichtungen?",
    a: "Bei ärztlicher Verordnung behandeln wir auch direkt in unseren Partnereinrichtungen – etwa Senioren- und Pflegeeinrichtungen. Hausbesuche bieten wir nicht an.",
  },
  {
    q: "Wo finde ich HYO in Berlin?",
    a: "HYO befindet sich im MEDICUM Friedrichshain, Matthiasstraße 7, 10249 Berlin-Friedrichshain. Die Anfahrt, die nahegelegene Tram-Haltestelle und Hinweise zur Barrierefreiheit finden Sie auf der Standortseite.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const landingTeam = [knownTeam[0], ...therapistTeam, knownTeam[1], knownTeam[2]];

const featuredArticles = articles.filter((article) => article.featured).slice(0, 2);

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* Hero */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden px-5 text-white sm:px-8 lg:min-h-[600px]">
        <HeroVideo />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_460px]">
          <div className="min-w-0">
            <p className="mb-5 text-sm font-bold tracking-[0.16em] text-mint-brand uppercase">
              Berlin-Friedrichshain · Start am 01.11.2026
            </p>
            <h1 className="text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.2rem] xl:text-[3.6rem]">
              Dysphagie. Spezialisiert.
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold text-mint-light">
              Spezialisierte ambulante Logopädie bei Schluckstörungen (Dysphagie) und
              Trachealkanülen – für Patientinnen, Patienten und ihre Angehörigen in Berlin.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
              HYO nimmt den Betrieb am 01.11.2026 im MEDICUM Friedrichshain auf. Buchen Sie
              ab sofort online ein kurzes Telefonat – wir besprechen alles persönlich mit
              Ihnen.
            </p>
            <p className="mt-5 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-hyo bg-white/15 px-4 py-2 text-base font-semibold">
              <span className="rounded-full bg-mint-brand px-3 py-0.5 text-sm font-bold text-ink">
                18.11.2026
              </span>
              Tag der offenen Praxis
            </p>
            <p className="mt-6 text-sm font-semibold tracking-wide text-mint-light/85">
              Gesetzlich und privat Versicherte · Selbstzahler ·{" "}
              <span aria-hidden="true">🇩🇪</span> DE · <span aria-hidden="true">🇬🇧</span> EN
            </p>
            <div className="on-violet mt-4 flex flex-wrap items-center gap-4">
              <ButtonLink href="/fuer-partner#kooperation-anfragen" variant="on-violet-outline">
                {cta.cooperation}
              </ButtonLink>
            </div>
          </div>
          <BookingCard />
        </div>
      </section>

      {/* Anzeichen: Wann sollten Sie sich melden? */}
      <Section surface="white" id="anzeichen">
        <FadeIn>
          <Eyebrow>Wann Sie sich melden sollten</Eyebrow>
          <Headline>Schluckprobleme ernst nehmen.</Headline>
          <Lead>
            <p>
              Eine Schluckstörung zeigt sich nicht immer durch sichtbares Verschlucken.
              Häufig berichtete Anzeichen sind unter anderem:
            </p>
          </Lead>
          <ul className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {signs.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-hyo bg-soft-grey p-5">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-violet-brand">
                  <path d="M3 10a7 7 0 0 1 14 0Z" fill="currentColor" />
                </svg>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl leading-relaxed text-ink/85">
            Wenn Sie eines oder mehrere dieser Anzeichen bei sich oder einer angehörigen Person
            beobachten, sprechen Sie Ihre behandelnde Ärztin oder Ihren behandelnden Arzt darauf
            an. Eine gezielte Abklärung schafft Klarheit.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <ButtonLink href={booking.url}>{cta.appointmentBook}</ButtonLink>
            <TextLink href="/wissen/was-ist-dysphagie">Was ist Dysphagie?</TextLink>
          </div>
        </FadeIn>
      </Section>

      {/* Ablauf für Patientinnen und Patienten */}
      <Section surface="mint-light" id="ablauf">
        <FadeIn>
          <Eyebrow>So läuft es ab</Eyebrow>
          <Headline>In vier Schritten zur Schlucktherapie in Berlin.</Headline>
        </FadeIn>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <FadeIn className="h-full">
                <div className="h-full rounded-hyo bg-white p-6">
                  <p className="text-3xl font-extrabold text-violet-brand">{index + 1}</p>
                  <h3 className="mt-3 text-lg font-extrabold">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/80">{step.text}</p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
        <FadeIn className="mt-10">
          <TextLink href="/fuer-patienten">Alle Informationen für Patient:innen und Angehörige</TextLink>
        </FadeIn>

        {/* Wo Sie uns finden */}
        <div id="standort" className="mt-20 scroll-mt-24 border-t border-ink/10 pt-16">
          <div className="grid items-start gap-10 lg:grid-cols-[2fr_3fr]">
            <FadeIn>
              <Eyebrow>Standort</Eyebrow>
              <h2 className="text-3xl leading-[1.12] font-extrabold sm:text-4xl">So finden Sie uns in Berlin-Friedrichshain.</h2>
              <address className="mt-5 text-lg leading-relaxed text-ink/90 not-italic">
                <strong>HYO im MEDICUM Friedrichshain</strong>
                <br />
                Matthiasstraße 7
                <br />
                10249 Berlin
              </address>
              <p className="mt-4 leading-relaxed text-ink/80">
                Mit der Tram: Die Haltestelle „Klinikum im Friedrichshain“ wird von den Linien
                M5, M6 und M8 bedient.
              </p>
              <div className="mt-7">
                <ButtonLink href="/standort" variant="secondary">
                  Anfahrt und Erreichbarkeit
                </ButtonLink>
              </div>
            </FadeIn>
            <FadeIn>
              <ConsentGatedMap />
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Leistungsspektrum: zwei Themenbereiche */}
      <Section surface="white" id="leistungsspektrum">
        <FadeIn>
          <Eyebrow>Unser Leistungsspektrum</Eyebrow>
          <Headline>Spezialisierte Therapie. Klar gegliedert. Persönlich begleitet.</Headline>
          <Lead>
            <p>
              Unser Angebot gliedert sich in zwei eng miteinander verbundene Fachbereiche: die
              spezialisierte Behandlung von Schluckstörungen und das Management von Tracheostoma
              und Trachealkanülen. Gemeinsam mit Betroffenen, Angehörigen, Pflege und behandelnden
              Ärztinnen und Ärzten entwickeln wir einen strukturierten und alltagstauglichen
              Behandlungsweg.
            </p>
          </Lead>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Themenbereich Dysphagietherapie */}
          <FadeIn className="h-full min-w-0">
            <div className="relative flex h-full flex-col overflow-hidden rounded-hyo bg-mint-brand p-8 sm:p-10">
              <svg viewBox="0 0 200 100" aria-hidden="true" className="absolute -top-1 right-0 h-28 w-56 opacity-60">
                <path d="M200 100a100 100 0 0 0-200 0Z" fill="var(--hyo-light-mint)" transform="rotate(180 100 50)" />
              </svg>
              <h3 className="relative text-2xl font-extrabold break-words hyphens-auto sm:text-3xl">Dysphagietherapie</h3>
              <p className="relative mt-3 font-semibold text-violet-deep">{dysphagieArea.subline}</p>
              <p className="relative mt-4 grow leading-relaxed text-ink/85">{dysphagieArea.intro}</p>
              <div className="relative mt-8">
                <ButtonLink href="/leistungen#dysphagietherapie">Dysphagietherapie entdecken</ButtonLink>
              </div>
            </div>
          </FadeIn>

          {/* Themenbereich Tracheostoma */}
          <FadeIn className="h-full min-w-0">
            <div className="on-violet relative flex h-full flex-col overflow-hidden rounded-hyo bg-violet-brand p-8 text-white sm:p-10">
              <svg viewBox="0 0 160 160" aria-hidden="true" className="absolute -top-8 -right-8 h-40 w-40 opacity-50">
                <circle cx="80" cy="80" r="72" fill="none" stroke="var(--hyo-mint)" strokeWidth="18" />
              </svg>
              <h3 className="relative text-2xl font-extrabold break-words hyphens-auto sm:text-3xl">
                Tracheostoma und Trachealkanülen&shy;management
              </h3>
              <p className="relative mt-3 font-semibold text-mint-brand">{trachealArea.subline}</p>
              <p className="relative mt-4 grow leading-relaxed text-mint-light">{trachealArea.homeIntro ?? trachealArea.intro}</p>
              <div className="relative mt-8">
                <ButtonLink href="/leistungen#trachealkanuelenmanagement" variant="on-violet">
                  Trachealkanülen-Angebot entdecken
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Servicekacheln: fünf Leistungen pro Themengebiet */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {[dysphagieArea, trachealArea].map((area) => (
            <FadeIn key={area.id}>
              <h4 className="text-sm font-bold tracking-[0.14em] text-violet-brand uppercase">{area.title}</h4>
              <ul className="mt-5 grid gap-4">
                {area.services.map((service) => (
                  <li key={service.slug} className="h-full">
                    <Link
                      href={`/leistungen#${service.slug}`}
                      className="group flex h-full flex-col rounded-hyo bg-soft-grey p-6 transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-mint-light motion-reduce:hover:translate-y-0"
                    >
                      <div className="flex items-center gap-4">
                        <GeoIcon name={service.icon} className="h-10 w-10 shrink-0" />
                        <span className="text-lg font-extrabold">{service.title}</span>
                      </div>
                      <p className="mt-4 font-bold text-violet-deep">{service.teaserHeadline}</p>
                      <p className="mt-1.5 grow text-[0.95rem] leading-relaxed text-ink/80">
                        {service.teaser}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 font-semibold text-violet-brand">
                        Mehr erfahren
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                        >
                          <path
                            d="M2 8h11M9 3.5 13.5 8 9 12.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>

      </Section>

      {/* Team */}
      <Section surface="mint-light" id="team">
        <FadeIn>
          <Eyebrow>Team</Eyebrow>
          <Headline>Das Team, das Sie begleitet.</Headline>
        </FadeIn>
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {landingTeam.map((member) => (
            <li key={member.name}>
              <FadeIn>
                <div className="text-center">
                  <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-white ring-4 ring-white">
                    <Image
                      src={member.photoBust}
                      alt={member.photoAlt}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-extrabold">{member.name}</h3>
                  <p className="mt-1 text-sm leading-snug text-ink/75">{member.role}</p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>
        <FadeIn className="mt-10">
          <ButtonLink href="/team" variant="secondary">
            Team kennenlernen
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Häufige Fragen */}
      <Section surface="white" id="faq">
        <FadeIn>
          <Eyebrow>Häufige Fragen</Eyebrow>
          <Headline>Fragen zu Schlucktherapie und Terminbuchung.</Headline>
        </FadeIn>
        <FadeIn className="mt-10 max-w-3xl">
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-hyo bg-soft-grey p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold">
                  {item.q}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 shrink-0 text-violet-brand transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                  >
                    <path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="mt-3 leading-relaxed text-ink/85">{item.a}</p>
              </details>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Abschnitt 7: Wissen-Teaser */}
      <Section surface="mint-light">
        <FadeIn>
          <Eyebrow>Wissen</Eyebrow>
          <Headline>Wissen, das Versorgung besser macht.</Headline>
          <Lead>
            <p>
              Im HYO-Wissensbereich erklären wir medizinische Zusammenhänge, Versorgungswege und
              praktische Fragen rund um Dysphagie, Trachealkanülen und die ambulante
              Weiterversorgung.
            </p>
          </Lead>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featuredArticles.map((article) => (
            <FadeIn key={article.slug}>
              <Link
                href={`/wissen/${article.slug}`}
                className="group flex h-full flex-col rounded-hyo bg-warm-white p-7 transition-transform duration-200 hover:-translate-y-1 motion-reduce:hover:translate-y-0"
              >
                <p className="text-sm font-bold text-violet-brand">{article.category}</p>
                <h3 className="mt-2 text-xl font-extrabold group-hover:text-violet-deep">{article.title}</h3>
                <p className="mt-3 grow leading-relaxed text-ink/75">{article.summary}</p>
                <span className="mt-5 font-semibold text-violet-brand">Mehr erfahren →</span>
              </Link>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10">
          <ButtonLink href="/wissen">{cta.knowledge}</ButtonLink>
        </FadeIn>
      </Section>

      {/* Für Kliniken und Partner (nachgeordnet) */}
      <Section id="positionierung" surface="grey">
        <FadeIn>
          <Eyebrow>Für Kliniken und Partner</Eyebrow>
          <Headline>Versorgung darf nicht an der Kliniktür enden.</Headline>
          <Lead>
            <p>
              In enger Kooperation mit Kliniken, Entlassmanagement, Pflegeeinrichtungen und
              behandelnden Ärztinnen und Ärzten schließen wir die Lücke zwischen stationärer
              Behandlung und ambulanter Weiterversorgung – mit strukturierter Übergabe,
              verlässlicher Kommunikation und spezialisierter Weiterbehandlung.
            </p>
          </Lead>
          <CarePathTiles />
          <ul className="mt-10 grid max-w-3xl gap-x-10 gap-y-2.5 sm:grid-cols-2">
            {[
              "Übernahme nach stationärer Behandlung",
              "Strukturierte Übergabe relevanter Befunde",
              "FEES-gestützte Befunderhebung",
              "Rückmeldung zum Versorgungsverlauf",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-violet-brand">
                  <path d="M3 10a7 7 0 0 1 14 0Z" fill="currentColor" />
                </svg>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
        {/* Vor Ort in Partnereinrichtungen – gilt für beide Themengebiete */}
        <FadeIn className="mt-10">
          <div className="relative overflow-hidden rounded-hyo bg-mint-light p-8 sm:p-10">
            <svg viewBox="0 0 200 100" aria-hidden="true" className="absolute right-0 bottom-0 h-24 w-48 opacity-60">
              <path d="M200 100a100 100 0 0 0-200 0Z" fill="var(--hyo-mint)" />
            </svg>
            <p className="relative text-sm font-bold tracking-[0.14em] text-violet-brand uppercase">
              {homeVisitTile.note}
            </p>
            <div className="relative mt-4 flex items-center gap-4">
              <GeoIcon name={homeVisitTile.icon} className="h-10 w-10 shrink-0" />
              <h4 className="text-xl font-extrabold sm:text-2xl">{homeVisitTile.title}</h4>
            </div>
            <p className="relative mt-4 font-bold text-violet-deep">{homeVisitTile.teaserHeadline}</p>
            <p className="relative mt-1.5 max-w-3xl leading-relaxed text-ink/85">{homeVisitTile.teaser}</p>
            <div className="relative mt-7 flex flex-wrap items-center gap-5">
              <ButtonLink href="/fuer-partner#kooperation-anfragen">Kooperation anfragen</ButtonLink>
              <TextLink href="/kontakt">Voraussetzungen besprechen</TextLink>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Abschnitt 9: persönliche Anfrage (Terminbuchung steht oben im Hero-Bereich) */}
      <Section surface="mint" id="anfrage">
        <FadeIn>
          <Eyebrow>Anfrage</Eyebrow>
          <Headline>Lieber persönlich anfragen?</Headline>
          <Lead>
            <p>
              Termine buchen Sie direkt online (siehe oben). Wenn Sie lieber eine Anfrage
              hinterlegen möchten, nutzen Sie das Formular – wir melden uns bei Ihnen.
            </p>
          </Lead>
        </FadeIn>
        <FadeIn className="mt-10 max-w-3xl">
          <AppointmentForm />
        </FadeIn>
      </Section>

    </>
  );
}
