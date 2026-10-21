import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { HyoidGraphic } from "@/components/GeoShapes";
import { ButtonLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";
import { knownTeam, therapistTeam, type TeamMember } from "@/content/team";
import { cta } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Team: Logopäd:innen für Dysphagie",
  description:
    "Das Team von HYO: Logopädinnen und Logopäden sowie Gründerteam, spezialisiert auf Dysphagie und Trachealkanülenmanagement in Berlin-Friedrichshain.",
  path: "/team",
});

/** Corinna Schwarz (fachliche Leitung) führt das therapeutische Team an und gehört zum Gründungsteam. */
const leadTherapist = knownTeam.filter((member) => member.name === "Corinna Schwarz");
const founders = knownTeam; // Corinna erscheint bewusst in beiden Bereichen
const therapeuticTeam: TeamMember[] = [...leadTherapist, ...therapistTeam];

function MemberCard({
  member,
  tone,
}: {
  member: TeamMember;
  tone: "white" | "grey";
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-hyo p-6 pt-8 ${tone === "white" ? "bg-white" : "bg-soft-grey"}`}
    >
      <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full bg-mint-light ring-4 ring-mint-brand">
        <Image src={member.photoBust} alt={member.photoAlt} fill sizes="176px" className="object-cover" />
      </div>
      <div className="mt-6 flex grow flex-col text-center">
        <h3 className="text-xl font-extrabold">{member.name}</h3>
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
  );
}

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

      {/* Therapeutisches Team inkl. fachlicher Leitung */}
      <Section surface="white">
        <FadeIn>
          <Eyebrow>Therapie</Eyebrow>
          <Headline>Therapeutisches Team</Headline>
          <Lead>
            <p>
              Spezialisierte Dysphagie-Therapie und Trachealkanülen-Management – von der
              fachlichen Leitung bis zu den behandelnden Logopädinnen und Logopäden.
            </p>
          </Lead>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {therapeuticTeam.map((member) => (
            <FadeIn key={member.name}>
              <MemberCard member={member} tone="grey" />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Gründung und Geschäftsführung */}
      <Section surface="mint-light">
        <FadeIn>
          <Eyebrow>Gründungsteam</Eyebrow>
          <Headline>Aufbau und Geschäftsführung</Headline>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map((member) => (
            <FadeIn key={member.name}>
              <MemberCard member={member} tone="white" />
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
