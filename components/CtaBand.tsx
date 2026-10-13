"use client";

import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";
import { booking, cta } from "@/lib/site";

/**
 * Globale Call-to-Action-Sektion.
 * Wird über das Layout auf allen Seiten oberhalb des Footers eingebunden und
 * ersetzt die beiden Buttons in der Hauptnavigation.
 */
/** Seiten, auf denen das globale CTA-Band nicht erscheinen soll. */
const EXCLUDED_PATHS = ["/team"];

export function CtaBand() {
  const pathname = usePathname();
  if (EXCLUDED_PATHS.includes(pathname)) return null;

  return (
    <Section surface="violet">
      <Eyebrow onViolet>Berlin-Friedrichshain · Start am 01.11.2026</Eyebrow>
      <Headline onViolet>Bereit für den nächsten Schritt?</Headline>
      <Lead onViolet>
        <p>
          Buchen Sie Ihren Termin online – ab sofort möglich. Kliniken und Versorgungspartner
          können Übergabeprozesse bereits jetzt mit uns abstimmen.
        </p>
      </Lead>
      <div className="on-violet mt-9 flex flex-wrap items-center gap-4">
        <ButtonLink href={booking.url} variant="on-violet">
          {cta.appointmentBook}
        </ButtonLink>
        <ButtonLink href="/fuer-partner#kooperation-anfragen" variant="on-violet-outline">
          {cta.cooperation}
        </ButtonLink>
      </div>
      <p className="mt-6 text-sm text-mint-light/90">
        HYO nimmt den Betrieb am 01.11.2026 auf.
      </p>
    </Section>
  );
}
