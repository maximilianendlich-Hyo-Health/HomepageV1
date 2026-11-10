import { site } from "@/lib/site";

/** Feste Handlungsleiste am unteren Rand (nur Smartphone/Tablet) auf der Werbe-Landingpage. */
export function LandingStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 px-3 py-3 shadow-[0_-6px_20px_rgba(0,0,0,0.08)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-[auto_1fr] gap-2">
        <a
          href={site.contact.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-hyo border-2 border-violet-brand px-4 py-3 font-bold text-violet-brand"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
          </svg>
          Anrufen
        </a>
        <a
          href="#formular"
          className="inline-flex items-center justify-center rounded-hyo bg-violet-deep px-4 py-3 font-extrabold text-white"
        >
          Rückruf anfordern
        </a>
      </div>
    </div>
  );
}
