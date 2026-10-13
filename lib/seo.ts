import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Einheitliche Seiten-Metadaten inkl. Canonical, Open Graph und Twitter-Card.
 * Next.js ersetzt `openGraph` je Seite komplett – daher wird es hier pro Seite
 * vollständig gesetzt (Titel, Beschreibung, URL), damit Vorschauen und
 * Suchergebnisse zur jeweiligen Seite passen.
 *
 * @param title     Seitentitel; mit `absolute` ohne Suffix " | HYO Berlin"
 * @param path      Pfad mit führendem Slash ("/leistungen"), "/" für die Startseite
 */
export function pageMetadata({
  title,
  description,
  path,
  absolute = false,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
  type?: "website" | "article";
}): Metadata {
  const fullTitle = absolute ? title : `${title} | HYO Berlin`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "de_DE",
      siteName: "HYO",
      title: fullTitle,
      description,
      url: `${site.url}${path === "/" ? "" : path}`,
      images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "HYO – Dysphagie. Spezialisiert." }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/images/og-image.png"],
    },
  };
}
