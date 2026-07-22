import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { CookieBanner } from "@/components/CookieBanner";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import { site } from "@/lib/site";
import "leaflet/dist/leaflet.css";
import "./globals.css";

/**
 * Manrope wird über next/font zur Build-Zeit heruntergeladen und
 * ausschließlich von der eigenen Domain ausgeliefert (keine Anfragen
 * an Google-Server zur Laufzeit – datenschutzkonforme lokale Einbindung).
 */
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dysphagie. Spezialisiert.",
    template: "%s | HYO Berlin",
  },
  description:
    "HYO ist eine spezialisierte ambulante Praxis für Dysphagie-Therapie, Trachealkanülen-Management und FEES-gestützte Befunderhebung in Berlin-Friedrichshain. Eröffnung 2026.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "HYO",
    title: "Dysphagie. Spezialisiert.",
    description:
      "Spezialisierte ambulante Praxis für Dysphagie-Therapie, Trachealkanülen-Management und FEES-gestützte Befunderhebung in Berlin-Friedrichshain. Eröffnung 2026.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "HYO" }],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

/**
 * Strukturierte Daten: MedicalBusiness-Markup.
 * Juristische Endprüfung vor Livegang siehe README-Checkliste.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "HYO",
  legalName: site.legal.company,
  telephone: site.contact.phone,
  email: site.contact.email,
  sameAs: [site.linkedInCompany],
  description:
    "Spezialisierte ambulante Praxis für Dysphagie-Therapie und Trachealkanülen-Management in Berlin.",
  url: site.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: "DE",
  },
};

/**
 * Wendet lokal gespeicherte Barrierefreiheits-Einstellungen bereits vor dem
 * ersten Rendern an (verhindert Aufblitzen der Standarddarstellung).
 * Muss zum Schlüssel/Verhalten in components/AccessibilityPanel.tsx passen.
 */
const accInitScript = `
(function(){try{var s=JSON.parse(localStorage.getItem("hyo-a11y")||"{}");
var d={text:"standard",contrast:"standard",spacing:"standard",links:"standard",targets:"standard",motion:"system"};
var m={text:"data-acc-text",contrast:"data-acc-contrast",spacing:"data-acc-spacing",links:"data-acc-links",targets:"data-acc-targets",motion:"data-acc-motion"};
for(var k in m){if(s[k]&&s[k]!==d[k]){document.documentElement.setAttribute(m[k],s[k]);}}}catch(e){}})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={manrope.variable} suppressHydrationWarning>
      <body className="font-sans">
        <script dangerouslySetInnerHTML={{ __html: accInitScript }} />
        <a href="#hauptinhalt" className="skip-link">
          Zum Inhalt springen
        </a>
        <Header />
        <main id="hauptinhalt">
          {children}
          <CtaBand />
        </main>
        <AccessibilityPanel />
        <CookieBanner />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
