import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { TeamPlaceholderArt, HyoidGraphic } from "@/components/GeoShapes";
import { ButtonLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";
import { knownTeam, teamPlaceholders } from "@/content/team";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Das Team hinter HYO: medizinisch-therapeutische Spezialisierung, unternehmerischer Aufbau und ein klarer Versorgungsanspruch.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <Section surface="mint">
        <Eyebrow>Team</Eyebrow>
        <Headline as="h1" size="xl">
          Das Team hinter HYO
        </Headline>
        <Lead>
          <p>
            HYO verbindet medizinisch-therapeutische Spezialisierung mit unternehmerischem Aufbau,
            strukturierten Prozessen und einem klaren Versorgungsanspruch.
          </p>
        </Lead>
      </Section>

      <Section surface="white">
        <FadeIn>
          <Eyebrow>Gründungsteam</Eyebrow>
          <Headline>Die Gründerinnen und Gründer von HYO</Headline>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {knownTeam.map((member) => (
            <FadeIn key={member.name}>
              <article className="flex h-full flex-col rounded-hyo bg-soft-grey p-6 pt-8">
                <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full bg-mint-light ring-4 ring-mint-brand">
                  <Image
                    src={member.photoBust}
                    alt={member.photoAlt}
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 flex grow flex-col text-center">
                  <h2 className="text-xl font-extrabold">{member.name}</h2>
                  <p className="mt-1 text-sm font-bold text-violet-brand">{member.role}</p>
                  <div className="mt-4 grow space-y-3 text-left text-[0.95rem] leading-relaxed text-ink/80">
                    {member.bio.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      rel="noopener noreferrer"
                      className="mx-auto mt-5 font-semibold text-violet-brand underline decoration-2 underline-offset-4 hover:text-violet-deep"
                    >
                      LinkedIn-Profil
                    </a>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}

        </div>
      </Section>

      {/* Namensherkunft: Warum HYO? */}
      <Section surface="white">
        <FadeIn>
          <div className="grid items-center gap-10 overflow-hidden rounded-hyo bg-soft-grey p-8 sm:p-10 lg:grid-cols-[auto_1fr]">
            <div className="flex h-44 w-56 items-center justify-center rounded-hyo bg-mint-light">
              <HyoidGraphic />
            </div>
            <div>
              <Eyebrow>Warum HYO?</Eyebrow>
              <h2 className="text-2xl font-extrabold sm:text-[1.7rem]">
                Ein Knochen. Ein Prinzip. Ein Name.
              </h2>
              <div className="mt-4 max-w-2xl space-y-3 leading-relaxed text-ink/85">
                <p>
                  HYO leitet sich vom <strong>Os hyoideum</strong> ab – dem Zungenbein. Dieser
                  kleine, U-förmige Knochen ist ein zentraler Dreh- und Angelpunkt für
                  Schlucken, Atmung und Stimme – genau die Funktionen, um die sich unsere
                  Arbeit dreht.
                </p>
                <p>
                  Zugleich steht <strong>Hyo (효)</strong> – aus dem Koreanischen kommend und
                  im Konfuzianismus verwurzelt – als gesellschaftliches Prinzip für die
                  Verantwortung, sich fürsorglich um kranke und ältere Menschen zu kümmern.
                  Beides zusammen beschreibt HYO: Dysphagie. Spezialisiert.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Therapeutisches Team: vier Platzhalterkarten, Coming Soon */}
      <Section surface="mint-light">
        <FadeIn>
          <Eyebrow>Coming Soon</Eyebrow>
          <Headline>Therapeutisches Team</Headline>
          <Lead>
            <p>
              Wir bauen ein hochspezialisiertes therapeutisches Team für Dysphagie-Therapie und
              Trachealkanülen-Management auf. Die Teammitglieder stellen wir hier bis zur
              Eröffnung 2026 vor.
            </p>
          </Lead>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamPlaceholders.map((_, index) => (
            <FadeIn key={`placeholder-${index}`}>
              <article className="flex h-full flex-col rounded-hyo bg-white p-6 pt-8 text-center">
                <div className="mx-auto h-36 w-36 overflow-hidden rounded-full ring-4 ring-violet-light">
                  <TeamPlaceholderArt variant={index + 3} />
                </div>
                <div className="mt-6 flex grow flex-col">
                  <h3 className="text-lg font-extrabold">Wird in Kürze bekannt gegeben</h3>
                  <p className="mt-2 grow leading-relaxed text-ink/75">
                    Weitere therapeutische Expertise für das HYO-Team.
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section surface="violet">
        <FadeIn>
          <Headline onViolet>Vielleicht fehlst noch du.</Headline>
          <Lead onViolet>
            <p>
              Wir bauen ein hochspezialisiertes Team für die ambulante Versorgung von Menschen mit
              Dysphagie und Trachealkanüle auf.
            </p>
          </Lead>
          <div className="on-violet mt-8">
            <ButtonLink href="/karriere" variant="on-violet">
              {cta.openings}
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
