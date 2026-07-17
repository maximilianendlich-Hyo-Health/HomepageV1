import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { ButtonLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zu HYO: getrennte Kontaktwege für Patientinnen und Patienten, Angehörige, Kliniken, Pflegeeinrichtungen, Kooperationen und Bewerbungen.",
  alternates: { canonical: "/kontakt" },
};

const contactPaths = [
  {
    title: "Patientenanfragen und Angehörige",
    text: "Sie möchten Ihr Interesse an einem Termin hinterlegen oder haben Fragen zur Vormerkung?",
    href: "/#termin",
    label: "Termin anfragen",
  },
  {
    title: "Kliniken und Entlassmanagement",
    text: "Sie möchten eine Patientenübergabe besprechen oder Übergabeprozesse frühzeitig abstimmen?",
    href: "/fuer-partner#kooperation-anfragen",
    label: "Patientenübergabe besprechen",
  },
  {
    title: "Pflegeeinrichtungen und ärztliche Praxen",
    text: "Sie möchten mit HYO kooperieren oder fachliche Fragen zur ambulanten Weiterversorgung klären?",
    href: "/fuer-partner#kooperation-anfragen",
    label: "Kooperation anfragen",
  },
  {
    title: "Bewerbungen",
    text: "Sie möchten den Aufbau von HYO als Praktikantin, Praktikant oder Werkstudierende mitgestalten?",
    href: "/karriere#bewerben",
    label: "Bei HYO bewerben",
  },
  {
    title: "Allgemeine Anfragen",
    text: "Für alle weiteren Anliegen erreichen Sie uns über die untenstehenden Kontaktdaten.",
    href: "#kontaktdaten",
    label: "Kontaktdaten ansehen",
  },
];

export default function KontaktPage() {
  return (
    <>
      <Section surface="mint">
        <Eyebrow>Kontakt</Eyebrow>
        <Headline as="h1" size="xl">
          Kontakt zu HYO
        </Headline>
        <Lead>
          <p>
            Sie möchten einen Termin anfragen? Schreiben Sie uns. Für Kliniken, Pflege und
            Bewerbungen gibt es eigene Kontaktwege – so landet Ihr Anliegen direkt an der
            richtigen Stelle.
          </p>
        </Lead>
      </Section>

      <Section surface="white">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactPaths.map((path) => (
            <FadeIn key={path.title}>
              <article className="flex h-full flex-col rounded-hyo bg-soft-grey p-7">
                <h2 className="text-xl font-extrabold">{path.title}</h2>
                <p className="mt-2 grow leading-relaxed text-ink/80">{path.text}</p>
                <div className="mt-6">
                  <ButtonLink href={path.href} variant="secondary">
                    {path.label}
                  </ButtonLink>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section surface="mint-light" id="kontaktdaten">
        <FadeIn>
          <div className="grid items-start gap-10 lg:grid-cols-[auto_1fr]">
            <div className="relative aspect-[4/5] w-56 overflow-hidden rounded-hyo bg-mint-brand">
              <Image
                src="/images/team/corinna-schwarz.jpg"
                alt="Porträt von Corinna Schwarz"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
            <div>
              <Headline size="md">Ihre Ansprechpartnerin</Headline>
              <p className="mt-4 text-xl font-extrabold">{site.contact.primaryContactName}</p>
              <p className="mt-1 text-medium-grey">
                Mitgründerin, Co-Geschäftsführerin &amp; fachliche Leitung
              </p>
              <dl className="mt-6 space-y-3 leading-relaxed">
                <div>
                  <dt className="font-bold">E-Mail</dt>
                  <dd>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="font-semibold text-violet-brand underline decoration-2 underline-offset-4 hover:text-violet-deep"
                    >
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Telefon</dt>
                  <dd>
                    <a
                      href={site.contact.phoneHref}
                      className="font-semibold text-violet-brand underline decoration-2 underline-offset-4 hover:text-violet-deep"
                    >
                      {site.contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">LinkedIn</dt>
                  <dd>
                    <a
                      href={site.contact.primaryContactLinkedIn}
                      rel="noopener noreferrer"
                      className="font-semibold text-violet-brand underline decoration-2 underline-offset-4 hover:text-violet-deep"
                    >
                      Profil von Corinna Schwarz
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Adresse</dt>
                  <dd className="text-ink/80">
                    {site.address.building}, {site.address.street}, {site.address.zip}{" "}
                    {site.address.city}
                  </dd>
                </div>
              </dl>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-medium-grey">
                Hinweis: Kontaktformulare und Nachrichten sind nicht für akute medizinische
                Notfälle geeignet. Wenden Sie sich im Notfall an den Notruf 112 oder den
                ärztlichen Bereitschaftsdienst 116 117.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
