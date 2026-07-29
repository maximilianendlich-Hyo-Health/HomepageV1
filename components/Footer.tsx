import Link from "next/link";
import { Logo } from "@/components/Logo";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { cta, site } from "@/lib/site";

const footerNav = [
  { label: cta.appointment, href: "/#termin" },
  { label: cta.cooperation, href: "/fuer-partner#kooperation-anfragen" },
  { label: "Wissen", href: "/wissen" },
  { label: "Team", href: "/team" },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/kontakt" },
];

const legalNav = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Barrierefreiheit", href: "/barrierefreiheit" },
];

export function Footer() {
  return (
    <footer className="on-violet bg-violet-brand text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo height={30} onDark />
          <p className="mt-6 max-w-sm text-lg leading-relaxed font-semibold text-mint-light">
            {site.claim}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-white/85">
            {site.address.building}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </p>
          <ul className="mt-6 flex items-center gap-3" aria-label="HYO in sozialen Netzwerken">
            <li>
              <a
                href={site.linkedInCompany}
                rel="noopener noreferrer"
                aria-label="HYO auf LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-mint-brand hover:text-ink"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                rel="noopener noreferrer"
                aria-label="HYO auf Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-mint-brand hover:text-ink"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.2" />
                  <circle cx="12" cy="12" r="4.4" />
                  <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer-Navigation">
          <h2 className="text-sm font-bold tracking-[0.14em] text-mint-brand uppercase">HYO</h2>
          <ul className="mt-4 space-y-2.5">
            {footerNav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-white/90 hover:text-mint-brand hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}

          </ul>
        </nav>

        <nav aria-label="Rechtliches">
          <h2 className="text-sm font-bold tracking-[0.14em] text-mint-brand uppercase">Rechtliches</h2>
          <ul className="mt-4 space-y-2.5">
            {legalNav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-white/90 hover:text-mint-brand hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsButton />
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 text-sm leading-relaxed sm:px-8 md:grid-cols-3">
          <div>
            <h2 className="text-xs font-bold tracking-[0.14em] text-mint-brand uppercase">
              Sitz der Gesellschaft
            </h2>
            <p className="mt-3 text-white/85">
              {site.legal.company}
              <br />
              {site.legal.street}
              <br />
              {site.legal.zip} {site.legal.city}
              <br />
              {site.legal.country}
            </p>
          </div>
          <div>
            <h2 className="text-xs font-bold tracking-[0.14em] text-mint-brand uppercase">
              Vertreten durch
            </h2>
            <p className="mt-3 text-white/85">{site.legal.representedBy}</p>
            <h2 className="mt-5 text-xs font-bold tracking-[0.14em] text-mint-brand uppercase">
              Kontakt
            </h2>
            <p className="mt-3 text-white/85">
              <Link
                href="/kontakt"
                className="underline decoration-1 underline-offset-2 hover:text-mint-brand"
              >
                Zur Kontaktseite
              </Link>
            </p>
          </div>
          <div>
            <h2 className="text-xs font-bold tracking-[0.14em] text-mint-brand uppercase">
              Registereintrag
            </h2>
            <p className="mt-3 text-white/85">
              Eintragung im Handelsregister
              <br />
              Registergericht: {site.legal.registerCourt}
              <br />
              Registernummer: {site.legal.registerNumber}
              <br />
              Steuernummer: {site.legal.taxNumber}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-sm text-white/80 sm:px-8">
          <p>Eröffnung 2026 · Berlin-Friedrichshain</p>
          <p>© {new Date().getFullYear()} {site.legal.company}</p>
        </div>
      </div>
    </footer>
  );
}
