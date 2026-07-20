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
            <li>
              <a
                href={site.linkedInCompany}
                rel="noopener noreferrer"
                className="text-white/90 hover:text-mint-brand hover:underline"
              >
                LinkedIn
              </a>
            </li>
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
              Telefon:{" "}
              <a href={site.contact.phoneHref} className="underline decoration-1 underline-offset-2 hover:text-mint-brand">
                {site.contact.phone}
              </a>
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="underline decoration-1 underline-offset-2 hover:text-mint-brand"
              >
                {site.contact.email}
              </a>
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
