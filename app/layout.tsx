import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Header } from "@/components/Header";
import { CookieBanner } from "@/components/CookieBanner";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import { booking, site } from "@/lib/site";
import "leaflet/dist/leaflet.css";
import "./globals.css";

/**
 * Quicksand wird über next/font zur Build-Zeit heruntergeladen und
 * ausschließlich von der eigenen Domain ausgeliefert (keine Anfragen
 * an Google-Server zur Laufzeit – datenschutzkonforme lokale Einbindung).
 * Quicksand bietet die Schnitte 300–700; Überschriften mit font-extrabold/
 * font-black nutzen automatisch den kräftigsten verfügbaren Schnitt (700).
 */
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Schlucktherapie Berlin: Dysphagie & Schluckstörung | HYO",
    template: "%s | HYO Berlin",
  },
  description:
    "Spezialisierte Logopädie bei Dysphagie und Schluckstörungen in Berlin-Friedrichshain: Schlucktherapie, Trachealkanülenmanagement, FEES. Termin online buchen.",
  applicationName: "HYO",
  keywords: [
    "Dysphagie",
    "Schluckstörung",
    "Schlucktherapie",
    "Dysphagietherapie",
    "Trachealkanülenmanagement",
    "Trachealkanüle",
    "FEES",
    "Logopädie Berlin",
    "Logopädie Friedrichshain",
    "Schluckstörung Berlin",
  ],
  authors: [{ name: site.legal.company }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "HYO",
    title: "Schlucktherapie Berlin: Dysphagie & Schluckstörung | HYO",
    description:
      "Spezialisierte Logopädie bei Dysphagie und Schluckstörungen in Berlin-Friedrichshain: Schlucktherapie, Trachealkanülenmanagement, FEES. Termin online buchen.",
    url: site.url,
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "HYO – Dysphagie. Spezialisiert." }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.png"] },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

/**
 * Strukturierte Daten: Organisation, Praxis (MedicalClinic) und Website.
 * Es werden nur belegte Angaben ausgezeichnet (keine Öffnungszeiten, Preise
 * oder Bewertungen). Juristische Endprüfung vor Livegang siehe README-Checkliste.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalClinic", "MedicalBusiness"],
      "@id": `${site.url}/#praxis`,
      name: "HYO – Praxis für Dysphagie und Trachealkanülenmanagement",
      alternateName: "HYO",
      legalName: site.legal.company,
      url: site.url,
      logo: `${site.url}/images/hyo-logo-violet-on-mint.png`,
      image: `${site.url}/images/og-image.png`,
      telephone: site.contact.phone,
      email: site.contact.email,
      sameAs: [site.linkedInCompany, site.instagram],
      description:
        "Spezialisierte ambulante Praxis für Dysphagie-Therapie (Schlucktherapie), Trachealkanülenmanagement und FEES-gestützte Befunderhebung in Berlin-Friedrichshain.",
      slogan: site.claim,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        postalCode: site.address.zip,
        addressLocality: site.address.city,
        addressRegion: "Berlin",
        addressCountry: "DE",
      },
      geo: { "@type": "GeoCoordinates", latitude: 52.52278, longitude: 13.4409 },
      areaServed: { "@type": "City", name: "Berlin" },
      availableLanguage: ["de", "en"],
      knowsAbout: [
        "Dysphagie",
        "Schluckstörungen",
        "Schlucktherapie",
        "Trachealkanülenmanagement",
        "FEES",
        "Logopädie",
      ],
      availableService: [
        { "@type": "MedicalTherapy", name: "Dysphagietherapie (Schlucktherapie)" },
        { "@type": "MedicalTherapy", name: "Trachealkanülenmanagement" },
        { "@type": "MedicalProcedure", name: "FEES-gestützte Befunderhebung" },
      ],
      potentialAction: {
        "@type": "ReserveAction",
        name: "Termin buchen",
        target: booking.url,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "HYO",
      inLanguage: "de",
      publisher: { "@id": `${site.url}/#praxis` },
    },
  ],
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
    <html lang="de" className={quicksand.variable} suppressHydrationWarning>
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
