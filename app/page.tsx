import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { HeroVideo } from "@/components/HeroVideo";
import { CarePathTiles, GeoIcon } from "@/components/GeoShapes";
import { ButtonLink, TextLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { dysphagieArea, homeVisitTile, trachealArea } from "@/content/leistungen";
import { articles } from "@/content/wissen";
import { knownTeam } from "@/content/team";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Dysphagie. Spezialisiert." },
  description:
    "HYO ist eine spezialisierte ambulante Praxis für Dysphagie-Therapie, Trachealkanülen-Management und FEES-gestützte Befunderhebung in Berlin-Friedrichshain. Eröffnung 2026.",
  alternates: { canonical: "/" },
};

const featuredArticles = articles.filter((article) => article.featured).slice(0, 2);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[86svh] items-center overflow-hidden text-white">
        <HeroVideo />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <p className="mb-5 text-sm font-bold tracking-[0.16em] text-mint-brand uppercase">
            Coming Soon · Berlin-Friedrichshain
          </p>
          <h1 className="max-w-3xl text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.6rem]">
            Dysphagie. Spezialisiert.
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-semibold text-mint-light">
            Spezialisierte ambulante Therapie bei Schluckstörungen und Trachealkanülen – für
            Patientinnen, Patienten und ihre Angehörigen in Berlin.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            HYO eröffnet 2026 im MEDICUM Friedrichshain. Bereits jetzt können Sie Ihr Interesse
            an einem Termin hinterlegen.
          </p>
          <p className="mt-7 text-sm font-semibold tracking-wide text-mint-light/85">
            Gesetzlich und privat Versicherte · Selbstzahler ·{" "}
            <span aria-hidden="true">🇩🇪</span> DE · <span aria-hidden="true">🇬🇧</span> EN
          </p>
          <div className="on-violet mt-4 flex flex-wrap items-center gap-4">
            <ButtonLink href="#termin" variant="on-violet">
              {cta.appointment}
            </ButtonLink>
            <ButtonLink href="/fuer-partner#kooperation-anfragen" variant="on-violet-outline">
              {cta.cooperation}
            </ButtonLink>
          </div>
        </div>
        <a
          href="#fuer-patienten"
          aria-label="Nach unten scrollen"
          className="scroll-hint absolute bottom-6 left-1/2 -translate-x-1/2 text-mint-light"
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
            <path d="M6 10l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      {/* Für Patientinnen, Patienten und Angehörige */}
      <Section id="fuer-patienten" surface="mint">
        <FadeIn>
          <Eyebrow>Für Patientinnen, Patienten und Angehörige</Eyebrow>
          <Headline size="xl">Schlucken ist Leben.</Headline>
          <Lead>
            <p>
              Eine Schluckstörung oder Trachealkanüle verändert den Alltag – beim Essen und
              Trinken, beim Sprechen, in der Sicherheit und im Miteinander. Bei HYO finden Sie
              und Ihre Angehörigen eine spezialisierte Anlaufstelle, die zuhört, sorgfältig
              untersucht und Sie Schritt für Schritt begleitet.
            </p>
            <p>
              Wir erklären verständlich, was hinter den Beschwerden steckt, beziehen Angehörige
              und Pflege aktiv ein und behandeln bei ärztlicher Verordnung auch direkt in
              unseren Partnereinrichtungen – etwa Senioren- und Pflegeeinrichtungen.
            </p>
          </Lead>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="#termin">{cta.appointment}</ButtonLink>
            <TextLink href="/fuer-patienten">Mehr für Patienten und Angehörige</TextLink>
            <TextLink href="/wissen">Wissen verständlich erklärt</TextLink>
          </div>
        </FadeIn>
      </Section>

      {/* Positionierung */}
      <Section id="positionierung" surface="white">
        <FadeIn>
          <Eyebrow>Positionierung</Eyebrow>
          <Headline>Versorgung darf nicht an der Kliniktür enden.</Headline>
          <Lead>
            <p>
              HYO ist eine spezialisierte ambulante Praxis für Dysphagie-Therapie und
              Trachealkanülen-Management mit Standort in Berlin. Wir verstehen uns nicht als
              klassische logopädische Praxis, sondern als aktiver Stakeholder im Versorgungssystem.
            </p>
            <p>
              In enger Kooperation mit Kliniken, Entlassmanagement, Pflegeeinrichtungen und
              behandelnden Ärztinnen und Ärzten schließen wir die Lücke zwischen stationärer
              Behandlung und ambulanter Weiterversorgung.
            </p>
          </Lead>
          <CarePathTiles />
        </FadeIn>
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

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Themenbereich Dysphagietherapie */}
          <FadeIn className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-hyo bg-mint-brand p-8 sm:p-10">
              <svg viewBox="0 0 200 100" aria-hidden="true" className="absolute -top-1 right-0 h-28 w-56 opacity-60">
                <path d="M200 100a100 100 0 0 0-200 0Z" fill="var(--hyo-light-mint)" transform="rotate(180 100 50)" />
              </svg>
              <h3 className="relative text-2xl font-extrabold sm:text-3xl">Dysphagietherapie</h3>
              <p className="relative mt-3 font-semibold text-violet-deep">{dysphagieArea.subline}</p>
              <p className="relative mt-4 grow leading-relaxed text-ink/85">{dysphagieArea.intro}</p>
              <div className="relative mt-8">
                <ButtonLink href="/leistungen#dysphagietherapie">Dysphagietherapie entdecken</ButtonLink>
              </div>
            </div>
          </FadeIn>

          {/* Themenbereich Tracheostoma */}
          <FadeIn className="h-full">
            <div className="on-violet relative flex h-full flex-col overflow-hidden rounded-hyo bg-violet-brand p-8 text-white sm:p-10">
              <svg viewBox="0 0 160 160" aria-hidden="true" className="absolute -top-8 -right-8 h-40 w-40 opacity-50">
                <circle cx="80" cy="80" r="72" fill="none" stroke="var(--hyo-mint)" strokeWidth="18" />
              </svg>
              <h3 className="relative text-2xl font-extrabold sm:text-3xl">
                Tracheostoma und Trachealkanülenmanagement
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

        {/* Vor Ort in Partnereinrichtungen – gilt für beide Themengebiete */}
        <FadeIn className="mt-8">
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

      {/* Abschnitt 5: Für Kliniken und Partner */}
      <Section surface="white">
        <FadeIn>
          <Eyebrow>Für Kliniken und Partner</Eyebrow>
          <Headline>Ein verlässlicher Partner nach der Entlassung</Headline>
          <Lead>
            <p>
              HYO unterstützt Kliniken, Entlassmanagement, Pflegeeinrichtungen und behandelnde
              Ärztinnen und Ärzte bei der ambulanten Weiterversorgung – mit strukturierter
              Übergabe, verlässlicher Kommunikation und spezialisierter Weiterbehandlung.
            </p>
          </Lead>
          <ul className="mt-8 grid max-w-3xl gap-x-10 gap-y-2.5 sm:grid-cols-2">
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
          <div className="mt-8">
            <ButtonLink href="/fuer-partner#kooperation-anfragen">{cta.cooperation}</ButtonLink>
          </div>
        </FadeIn>
      </Section>

      {/* Abschnitt 6: Eröffnung */}
      <Section surface="violet">
        <FadeIn>
          <Eyebrow onViolet>Eröffnung</Eyebrow>
          <Headline onViolet>HYO startet 2026 in Berlin.</Headline>
          <Lead onViolet>
            <p>
              Aktuell entstehen die räumlichen, organisatorischen und medizinischen Strukturen für
              unsere spezialisierte ambulante Versorgung. Bis zur Eröffnung informieren wir hier
              über den weiteren Aufbau, die Terminvergabe und neue Kooperationsmöglichkeiten.
            </p>
          </Lead>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Aufbau der Praxis und Versorgungsstrukturen",
              "Aufbau des spezialisierten Teams",
              "Start der Terminvergabe und Patientenaufnahme",
              "Eröffnung 2026",
            ].map((step, index) => (
              <li key={step} className="rounded-hyo bg-white/10 p-6">
                <p className="text-3xl font-extrabold text-mint-brand">{index + 1}</p>
                <p className="mt-3 font-semibold leading-snug text-white">{step}</p>
              </li>
            ))}
          </ol>
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

      {/* Abschnitt 8: Team-Teaser */}
      <Section surface="white">
        <FadeIn>
          <Eyebrow>Team</Eyebrow>
          <Headline>Das Team hinter HYO</Headline>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {knownTeam.map((member) => (
            <FadeIn key={member.name}>
              <div className="h-full overflow-hidden rounded-hyo bg-soft-grey">
                <div className="relative aspect-[4/5] overflow-hidden bg-mint-light">
                  <Image
                    src={member.photo}
                    alt={member.photoAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold">{member.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/75">{member.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
          <FadeIn>
            <div className="flex h-full flex-col justify-between rounded-hyo bg-violet-light p-6">
              <p className="text-lg font-extrabold">Weitere Expertise für das HYO-Team.</p>
              <p className="mt-2 text-ink/80">Wird in Kürze bekannt gegeben.</p>
            </div>
          </FadeIn>
        </div>
        <FadeIn className="mt-10">
          <ButtonLink href="/team" variant="secondary">
            Team kennenlernen
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Abschnitt 9: Terminanfrage */}
      <Section surface="mint" id="termin">
        <FadeIn>
          <Eyebrow>Terminanfrage</Eyebrow>
          <Headline>Interesse an einem Termin bei HYO?</Headline>
          <Lead>
            <p>
              HYO eröffnet 2026. Bereits jetzt können Sie Ihr Interesse an einem Termin
              unverbindlich hinterlegen. Wir informieren Sie, sobald die Terminvergabe beginnt.
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
