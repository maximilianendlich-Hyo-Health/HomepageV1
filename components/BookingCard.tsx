import Link from "next/link";
import { booking, callbackHref, cta } from "@/lib/site";

/**
 * Buchungs-Kachel im Hero: reiner Link zur Rückruf-Terminbuchung bei Doctolib.
 * Es wird nichts von Doctolib eingebunden oder geladen (siehe Datenschutz, Ziffer 6).
 * Das Kalender-Symbol ist eine eigene, neutrale Grafik und kein Doctolib-Logo.
 * Wenn ein offizielles Doctolib-Siegel/Logo vorliegt, kann es hier eingesetzt werden.
 */
export function BookingCard() {
  return (
    <div id="termin" className="scroll-mt-24 rounded-hyo bg-warm-white p-8 text-ink shadow-[0_2px_10px_rgba(0,0,0,0.1)] sm:p-10">
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-14 w-14 text-violet-brand">
        <rect x="6" y="10" width="36" height="32" rx="6" fill="currentColor" opacity="0.18" />
        <rect x="6" y="10" width="36" height="10" rx="5" fill="currentColor" />
        <rect x="14" y="5" width="4" height="10" rx="2" fill="currentColor" />
        <rect x="30" y="5" width="4" height="10" rx="2" fill="currentColor" />
        <path
          d="M16.5 31.5l5 5 10-11"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h2 className="mt-6 text-2xl font-extrabold">Jetzt Rückruf vereinbaren</h2>
      <p className="mt-3 leading-relaxed text-ink/80">
        Wir haben eröffnet und nehmen neue Patientinnen und Patienten auf. Wählen Sie über
        Doctolib Tag und Uhrzeit für Ihren Rückruf oder lassen Sie sich ohne Terminwahl
        zurückrufen.
      </p>
      <a
        href={booking.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-7 flex w-full items-center justify-center gap-3 rounded-hyo bg-violet-deep px-6 py-5 text-xl font-extrabold text-white shadow-[0_6px_18px_rgba(106,105,166,0.45)] ring-4 ring-violet-brand/25 transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-ink hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-violet-deep motion-reduce:hover:translate-y-0"
      >
        {cta.appointmentBook}
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
        >
          <path
            d="M2 8h11M9 3.5 13.5 8 9 12.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <p className="mt-3 text-center text-sm text-ink/65">
        Sie werden zu Doctolib weitergeleitet (neues Fenster).
      </p>
      <p className="mt-6 text-center text-sm font-bold tracking-wide text-ink/60 uppercase">oder</p>
      <Link
        href={callbackHref}
        className="mt-3 flex w-full items-center justify-center rounded-hyo border-2 border-violet-deep px-6 py-4 text-lg font-extrabold text-violet-deep transition-colors duration-200 hover:bg-violet-deep hover:text-white"
      >
        {cta.callback}
      </Link>
      <p className="mt-3 text-center text-sm text-ink/65">Ohne Terminwahl: Name und Nummer genügen, wir rufen Sie zurück.</p>
    </div>
  );
}
