import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/Buttons";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

/**
 * Bestätigungsseite nach dem Absenden. Diese URL ist die Conversion-Seite
 * (z. B. für Google Ads, sobald Tracking mit Einwilligung eingerichtet ist).
 */
export const metadata: Metadata = {
  ...pageMetadata({
    title: "Danke für Ihre Anfrage | HYO",
    description: "Ihre Rückrufanfrage ist bei HYO eingegangen.",
    path: "/rueckruf/danke",
    absolute: true,
  }),
  robots: { index: false, follow: false },
};

export default function RueckrufDankePage() {
  return (
    <div data-lp className="flex min-h-screen flex-col bg-mint-light">
      <div className="bg-warm-white px-5 py-3 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Logo height={34} />
        </div>
      </div>
      <main className="flex flex-1 items-center px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-xl rounded-hyo bg-white p-8 text-center shadow-xl sm:p-10">
          <svg aria-hidden="true" viewBox="0 0 20 20" className="mx-auto h-14 w-14 text-violet-brand">
            <circle cx="10" cy="10" r="10" fill="currentColor" />
            <path d="m5.5 10.5 3 3 6-6.5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight">Vielen Dank, wir rufen Sie zurück.</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">
            Ihre Anfrage ist bei uns eingegangen. Wir melden uns in dem von Ihnen gewählten Zeitraum,
            Montag bis Freitag zwischen 8 und 18 Uhr.
          </p>
          <p className="mt-4 leading-relaxed text-ink/85">
            Es eilt? Rufen Sie uns direkt an:{" "}
            <a href={site.contact.phoneHref} className="font-extrabold text-violet-deep underline decoration-2 underline-offset-4">
              0151 72887811
            </a>
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/" variant="secondary" arrow={false}>
              Zur Startseite
            </ButtonLink>
          </div>
        </div>
      </main>
    </div>
  );
}
