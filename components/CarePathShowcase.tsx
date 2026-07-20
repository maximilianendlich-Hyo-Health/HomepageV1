"use client";

import { useEffect, useRef, useState } from "react";
import { GeoIcon, type GeoIconName } from "@/components/GeoShapes";

/**
 * Prominenter Versorgungspfad für die Startseite:
 * große Stationen, verbindende Linie, die sich beim Scrollen aufbaut,
 * gestaffeltes Einblenden und ein sehr dezentes Schweben der Icon-Flächen.
 * Alle Animationen respektieren `prefers-reduced-motion` sowie die
 * Einstellung „Animationen reduzieren“ (siehe globals.css).
 */

const stations: { label: string; icon: GeoIconName; plate: "mint" | "violet" }[] = [
  { label: "Klinik", icon: "gate", plate: "violet" },
  { label: "Entlassung", icon: "arc-down", plate: "mint" },
  { label: "Ambulante spezialisierte Versorgung", icon: "half-split", plate: "violet" },
  { label: "Langfristige Begleitung", icon: "dot-ring", plate: "mint" },
];

export function CarePathShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mt-16">
      {/* Verbindende Linie (Desktop): baut sich von links auf */}
      <div
        aria-hidden="true"
        className="absolute top-14 right-[7%] left-[7%] hidden h-1.5 rounded-full bg-violet-light/40 lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute top-14 right-[7%] left-[7%] hidden h-1.5 origin-left rounded-full bg-violet-brand transition-transform duration-[1400ms] ease-out lg:block"
        style={{ transform: inView ? "scaleX(1)" : "scaleX(0)" }}
      />
      {/* Verbindende Linie (Mobil, vertikal) */}
      <div
        aria-hidden="true"
        className="absolute top-6 bottom-6 left-14 w-1.5 rounded-full bg-violet-light/40 lg:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute top-6 bottom-6 left-14 w-1.5 origin-top rounded-full bg-violet-brand transition-transform duration-[1400ms] ease-out lg:hidden"
        style={{ transform: inView ? "scaleY(1)" : "scaleY(0)" }}
      />

      <ol aria-label="Versorgungspfad" className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
        {stations.map((station, index) => (
          <li
            key={station.label}
            className="group flex items-center gap-6 transition-[opacity,transform] duration-700 ease-out lg:flex-col lg:items-center lg:gap-0 lg:text-center"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(28px)",
              transitionDelay: `${250 + index * 220}ms`,
            }}
          >
            {/* Icon-Fläche mit Nummern-Badge */}
            <div
              className="care-float relative shrink-0 lg:mx-auto"
              style={{ animationDelay: `${index * 0.9}s` }}
            >
              <div
                className={`flex h-28 w-28 items-center justify-center rounded-full ring-4 transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:group-hover:translate-y-0 ${
                  station.plate === "mint"
                    ? "bg-mint-light ring-mint-brand"
                    : "bg-violet-light/35 ring-violet-light"
                }`}
              >
                <GeoIcon name={station.icon} className="h-14 w-14" />
              </div>
              <span
                aria-hidden="true"
                className="absolute -top-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-violet-brand text-base font-extrabold text-white"
              >
                {index + 1}
              </span>
            </div>
            <div className="lg:mt-6">
              <p className="text-sm font-bold tracking-[0.14em] text-violet-brand uppercase">
                Schritt {index + 1}
              </p>
              <p className="mt-1 max-w-[16rem] text-lg leading-snug font-extrabold text-balance lg:mx-auto">
                {station.label}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
