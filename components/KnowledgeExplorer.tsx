"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { GeoIcon } from "@/components/GeoShapes";
import { articles, audiences, categories, type Audience } from "@/content/wissen";

/** Filterbare Artikelübersicht des Wissensbereichs. */
export function KnowledgeExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [audience, setAudience] = useState<Audience | null>(null);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return articles.filter((article) => {
      if (category && article.category !== category) return false;
      if (audience && !article.audiences.includes(audience)) return false;
      if (!normalized) return true;
      const haystack = [article.title, article.summary, article.category, ...article.tags]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query, category, audience]);

  const chipClass = (active: boolean) =>
    `rounded-hyo border-2 px-3.5 py-1.5 text-sm font-semibold transition-colors ${
      active
        ? "border-violet-brand bg-violet-brand text-white"
        : "border-violet-brand/40 bg-white text-violet-deep hover:border-violet-brand"
    }`;

  return (
    <div>
      {/* Suche */}
      <div className="max-w-xl">
        <label htmlFor="wissen-suche" className="mb-1.5 block font-semibold">
          Wissensbereich durchsuchen
        </label>
        <input
          id="wissen-suche"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="z. B. FEES, Aspiration, Trachealkanüle …"
          className="w-full rounded-hyo border-2 border-ink/15 bg-white px-4 py-3 placeholder:text-medium-grey focus:border-violet-brand"
        />
      </div>

      {/* Themenfilter */}
      <fieldset className="mt-6">
        <legend className="mb-2 text-sm font-bold tracking-[0.14em] text-violet-brand uppercase">
          Thema
        </legend>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => setCategory(null)} className={chipClass(category === null)} aria-pressed={category === null}>
            Alle Themen
          </button>
          {categories.map((entry) => (
            <button
              key={entry.name}
              type="button"
              onClick={() => setCategory(category === entry.name ? null : entry.name)}
              className={chipClass(category === entry.name)}
              aria-pressed={category === entry.name}
            >
              {entry.name}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Zielgruppenfilter */}
      <fieldset className="mt-5">
        <legend className="mb-2 text-sm font-bold tracking-[0.14em] text-violet-brand uppercase">
          Zielgruppe
        </legend>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => setAudience(null)} className={chipClass(audience === null)} aria-pressed={audience === null}>
            Alle
          </button>
          {audiences.map((entry) => (
            <button
              key={entry}
              type="button"
              onClick={() => setAudience(audience === entry ? null : entry)}
              className={chipClass(audience === entry)}
              aria-pressed={audience === entry}
            >
              {entry}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Ergebnisse */}
      <p className="mt-8 text-sm text-ink/70" role="status" aria-live="polite">
        {filtered.length === 1 ? "1 Beitrag gefunden" : `${filtered.length} Beiträge gefunden`}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-4 max-w-xl rounded-hyo bg-warm-white p-7">
          <p className="font-semibold">Kein Beitrag zu dieser Kombination gefunden.</p>
          <p className="mt-2 leading-relaxed text-ink/75">
            Setzen Sie die Filter zurück oder versuchen Sie einen anderen Suchbegriff. Der
            Wissensbereich wird laufend erweitert.
          </p>
        </div>
      ) : (
        <ul className="mt-4 grid gap-6 md:grid-cols-2">
          {filtered.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/wissen/${article.slug}`}
                className="group flex h-full flex-col rounded-hyo bg-warm-white p-7 transition-transform duration-200 hover:-translate-y-1 motion-reduce:hover:translate-y-0"
              >
                <div className="flex items-center gap-3">
                  <GeoIcon
                    name={categories.find((entry) => entry.name === article.category)?.icon ?? "ring"}
                    className="h-9 w-9"
                  />
                  <p className="text-sm font-bold text-violet-brand">{article.category}</p>
                </div>
                <h3 className="mt-3 text-xl font-extrabold group-hover:text-violet-deep">{article.title}</h3>
                <p className="mt-3 grow leading-relaxed text-ink/75">{article.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span key={tag} className="rounded-hyo bg-mint-light px-2.5 py-1 text-xs font-semibold text-ink/80">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-ink/60">
                  Aktualisiert am {new Date(article.updated).toLocaleDateString("de-DE")}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
