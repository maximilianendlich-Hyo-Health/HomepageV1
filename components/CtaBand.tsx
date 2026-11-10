"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/Buttons";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";
import { isLandingPath } from "@/lib/landing";
import { booking, callbackHref, cta } from "@/lib/site";

/**
 * Globale Call-to-Action-Sektion.
 * Wird über das Layout auf allen Seiten oberhalb des Footers eingebunden und
 * ersetzt die beiden Buttons in der Hauptnavigation.
 */
/** Seiten, auf denen das globale CTA-Band nicht erscheinen soll. */
const EXCLUDED_PATHS = ["/", "/team"];

export function CtaBand() {
  const pathname = usePathname();
  if (EXCLUDED_PATHS.includes(pathname) || isLandingPath(pathname)) return null;

  return (
    <Section surface="violet">
      <Eyebrow onViolet>Wir haben eröffnet · Berlin-Friedrichshain</Eyebrow>
      <Headline onViolet>Bereit für den nächsten Schritt?</Headline>
      <Lead onViolet>
        <p>
          Wir nehmen neue Patientinnen und Patienten auf. Wählen Sie über Doctolib Ihren
          Rückruftermin oder fordern Sie einen Rückruf an. Kliniken und Versorgungspartner
          stimmen Übergabeprozesse gern mit uns ab.
        </p>
      </Lead>
      <div className="on-violet mt-9 flex flex-wrap items-center gap-4">
        <ButtonLink href={booking.url} variant="on-violet">
          {cta.appointmentBook}
        </ButtonLink>
        <ButtonLink href={callbackHref} variant="on-violet-outline">
          {cta.callback}
        </ButtonLink>
      </div>
      <p className="mt-6 text-sm text-mint-light/90">
        Für Kliniken und Pflege:{" "}
        <Link
          href="/fuer-partner#kooperation-anfragen"
          prefetch={false}
          className="font-semibold text-white underline decoration-2 underline-offset-4"
        >
          {cta.cooperation}
        </Link>
      </p>
    </Section>
  );
}
