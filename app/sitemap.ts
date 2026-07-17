import type { MetadataRoute } from "next";
import { articles } from "@/content/wissen";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/leistungen",
    "/fuer-patienten",
    "/fuer-partner",
    "/wissen",
    "/wissen/dashboard",
    "/wissen/daten-und-quellen",
    "/team",
    "/karriere",
    "/standort",
    "/kontakt",
    "/barrierefreiheit",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${site.url}/wissen/${article.slug}`,
    lastModified: new Date(article.updated),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
