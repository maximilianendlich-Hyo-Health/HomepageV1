import { indikationen } from "@/content/indikationen";

/** Drei Spalten (Schlucken, Sprache und Sprechen, Stimme) in Alltagssprache mit Verordnungs-Kürzel. */
export function IndikationenGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {indikationen.map((group) => (
        <div key={group.title} className="rounded-hyo bg-white p-6 sm:p-7">
          <h3 className="text-2xl font-extrabold tracking-tight text-violet-deep">{group.title}</h3>
          <p className="mt-1.5 font-semibold text-ink/80">{group.intro}</p>
          <ul className="mt-5 divide-y divide-ink/10">
            {group.items.map((item) => (
              <li key={item.code + item.title} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-extrabold leading-snug">{item.title}</h4>
                  <span className="mt-0.5 shrink-0 rounded-full bg-mint-light px-2.5 py-0.5 text-xs font-extrabold text-violet-deep">
                    {item.code}
                  </span>
                </div>
                <p className="mt-1.5 leading-relaxed text-ink/80">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
