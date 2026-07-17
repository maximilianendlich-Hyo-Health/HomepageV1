import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Buttons";
import { Headline, Lead, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Seite nicht gefunden" };

export default function NotFound() {
  return (
    <Section surface="mint" className="min-h-[60vh]">
      <p className="mb-4 text-sm font-bold tracking-[0.14em] text-violet-brand uppercase">
        Fehler 404
      </p>
      <Headline as="h1" size="xl">
        Diese Seite gibt es nicht.
      </Headline>
      <Lead>
        <p>
          Die aufgerufene Adresse existiert nicht oder wurde verschoben. Über die Startseite
          finden Sie alle Inhalte von HYO.
        </p>
      </Lead>
      <div className="mt-8 flex flex-wrap gap-4">
        <ButtonLink href="/">Zur Startseite</ButtonLink>
        <ButtonLink href="/kontakt" variant="secondary">
          Kontakt aufnehmen
        </ButtonLink>
      </div>
    </Section>
  );
}
