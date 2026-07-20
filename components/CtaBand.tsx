import { ButtonLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";
import { cta } from "@/lib/site";

/**
 * Globale Call-to-Action-Sektion.
 * Wird über das Layout auf allen Seiten oberhalb des Footers eingebunden und
 * ersetzt die beiden Buttons in der Hauptnavigation.
 */
export function CtaBand() {
  return (
    <Section surface="violet">
      <Eyebrow onViolet>Coming Soon · Berlin-Friedrichshain</Eyebrow>
      <Headline onViolet>Bereit für den nächsten Schritt?</Headline>
      <Lead onViolet>
        <p>
          Hinterlegen Sie unverbindlich Ihr Interesse an einem Termin – wir informieren Sie,
          sobald die Terminvergabe beginnt. Kliniken und Versorgungspartner können
          Übergabeprozesse bereits jetzt mit uns abstimmen.
        </p>
      </Lead>
      <div className="on-violet mt-9 flex flex-wrap items-center gap-4">
        <ButtonLink href="/#termin" variant="on-violet">
          {cta.appointment}
        </ButtonLink>
        <ButtonLink href="/fuer-partner#kooperation-anfragen" variant="on-violet-outline">
          {cta.cooperation}
        </ButtonLink>
      </div>
      <p className="mt-6 text-sm text-mint-light/90">
        HYO eröffnet 2026. Eine Anfrage stellt noch keine Terminbestätigung dar.
      </p>
    </Section>
  );
}
