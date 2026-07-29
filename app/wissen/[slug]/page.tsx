import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Buttons";
import { Section } from "@/components/ui/Section";
import { articles, getArticle } from "@/content/wissen";
import { cta, site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/wissen/${article.slug}` },
  };
}

const ctaMap = {
  termin: { label: cta.appointment, href: "/#termin" },
  kooperation: { label: cta.cooperation, href: "/fuer-partner#kooperation-anfragen" },
  kontakt: { label: cta.contact, href: "/kontakt" },
} as const;

export default async function ArtikelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = article.related
    .map((relatedSlug) => getArticle(relatedSlug))
    .filter((entry) => entry !== undefined);
  const articleCta = ctaMap[article.cta];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.summary,
        dateModified: article.updated,
        inLanguage: "de",
        author: { "@type": "Organization", name: "HYO" },
        publisher: { "@type": "Organization", name: "HYO" },
        mainEntityOfPage: `${site.url}/wissen/${article.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: site.url },
          { "@type": "ListItem", position: 2, name: "Wissen", item: `${site.url}/wissen` },
          { "@type": "ListItem", position: 3, name: article.title, item: `${site.url}/wissen/${article.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <Section surface="mint-light">
        <div className="mx-auto max-w-[46rem]">
          <nav aria-label="Brotkrumen" className="text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-ink/70">
              <li>
                <Link href="/" className="hover:text-violet-brand hover:underline">
                  Start
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/wissen" className="hover:text-violet-brand hover:underline">
                  Wissen
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-ink">
                {article.category}
              </li>
            </ol>
          </nav>
          <h1 className="mt-6 text-3xl leading-[1.12] font-extrabold tracking-tight text-balance sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/85">{article.summary}</p>
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink/70">
            <div>
              <dt className="inline font-semibold">Zuletzt aktualisiert: </dt>
              <dd className="inline">{new Date(article.updated).toLocaleDateString("de-DE")}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Autorin: </dt>
              <dd className="inline">{article.reviewedBy}</dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section surface="white">
        <article className="mx-auto max-w-[46rem]">
          {article.sections.map((section) => (
            <section key={section.heading} className="mt-10 first:mt-0">
              <h2 className="text-2xl font-extrabold tracking-tight">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-4 leading-relaxed text-ink/85">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 space-y-2">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-3 leading-relaxed text-ink/85">
                      <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1.5 h-3.5 w-3.5 shrink-0 text-violet-brand">
                        <path d="M3 10a7 7 0 0 1 14 0Z" fill="currentColor" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {article.patientNote && (
            <aside className="mt-10 rounded-hyo bg-mint-light p-6">
              <h2 className="font-extrabold">Hinweis für Patienten und Angehörige</h2>
              <p className="mt-2 leading-relaxed text-ink/85">{article.patientNote}</p>
            </aside>
          )}
          {article.professionalNote && (
            <aside className="mt-6 rounded-hyo bg-violet-light/40 p-6">
              <h2 className="font-extrabold">Hinweis für Fachpersonen</h2>
              <p className="mt-2 leading-relaxed text-ink/85">{article.professionalNote}</p>
            </aside>
          )}

          <section className="mt-10 border-t-2 border-ink/10 pt-8">
            <h2 className="text-sm font-bold tracking-[0.14em] text-violet-brand uppercase">Quellen</h2>
            <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-ink/75">
              {article.sources.map((source) => (
                <li key={source.label}>
                  {source.url ? (
                    <a href={source.url} className="text-violet-brand underline" rel="noopener noreferrer">
                      {source.label}
                    </a>
                  ) : (
                    source.label
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink/60">
              Die Inhalte dienen der allgemeinen Information und ersetzen keine individuelle
              medizinische Untersuchung oder Beratung.
            </p>
          </section>

          <div className="mt-10">
            <ButtonLink href={articleCta.href}>{articleCta.label}</ButtonLink>
          </div>
        </article>
      </Section>

      {related.length > 0 && (
        <Section surface="mint-light">
          <div className="mx-auto max-w-[46rem]">
            <h2 className="text-xl font-extrabold">Weiterführende Artikel</h2>
            <ul className="mt-6 space-y-4">
              {related.map((entry) => (
                <li key={entry.slug}>
                  <Link
                    href={`/wissen/${entry.slug}`}
                    className="group block rounded-hyo bg-warm-white p-6 transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
                  >
                    <p className="text-sm font-bold text-violet-brand">{entry.category}</p>
                    <p className="mt-1 font-extrabold group-hover:text-violet-deep">{entry.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
