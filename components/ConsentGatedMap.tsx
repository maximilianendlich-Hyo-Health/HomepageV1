"use client";

import { useEffect, useState } from "react";
import { CONSENT_CHANGED_EVENT, loadConsent, saveConsent } from "@/lib/consent";

/**
 * Zwei-Klick-Lösung für die OpenStreetMap-Einbettung:
 * Die Karte wird erst geladen, wenn die Einwilligung für externe Inhalte
 * vorliegt (Cookie-Banner oder Klick auf „Karte laden“).
 */
export function ConsentGatedMap() {
  const [allowed, setAllowed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Initialen Zustand asynchron übernehmen (vermeidet kaskadierende
    // Renderings durch synchrones setState im Effekt).
    const frame = requestAnimationFrame(() => {
      setAllowed(loadConsent().externalMedia);
      setReady(true);
    });
    const onChanged = () => setAllowed(loadConsent().externalMedia);
    window.addEventListener(CONSENT_CHANGED_EVENT, onChanged);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener(CONSENT_CHANGED_EVENT, onChanged);
    };
  }, []);

  if (ready && allowed) {
    return (
      <>
        <div className="overflow-hidden rounded-hyo border-2 border-ink/10">
          <iframe
            title="Karte: HYO im MEDICUM Friedrichshain, Matthiasstraße 7, 10249 Berlin"
            src="https://www.openstreetmap.org/export/embed.html?bbox=13.4329%2C52.5188%2C13.4489%2C52.5268&layer=mapnik&marker=52.52278%2C13.44090"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
        <p className="mt-3 text-sm text-medium-grey">
          Kartendaten: OpenStreetMap-Mitwirkende.
        </p>
      </>
    );
  }

  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-hyo border-2 border-ink/10 bg-mint-light p-8 text-center">
      {/* Geometrische Kartenvorschau ohne externe Verbindung */}
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-14 w-14">
        <circle cx="24" cy="20" r="12" fill="var(--hyo-light-violet)" />
        <path d="M24 44c6-9 12-15.5 12-24a12 12 0 0 0-24 0c0 8.5 6 15 12 24Z" fill="var(--hyo-violet)" opacity="0.85" />
        <circle cx="24" cy="20" r="5" fill="var(--hyo-light-mint)" />
      </svg>
      <p className="max-w-md leading-relaxed text-ink/85">
        Die interaktive Karte wird von OpenStreetMap geladen. Dabei wird Ihre IP-Adresse an
        die Server der OpenStreetMap Foundation übermittelt. Mit Klick auf „Karte laden“
        willigen Sie ein (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO); Ihre Auswahl wird
        gespeichert und kann jederzeit über „Cookie-Einstellungen“ widerrufen werden.
      </p>
      <button
        type="button"
        onClick={() => saveConsent(true)}
        className="rounded-hyo bg-violet-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-deep"
      >
        Karte laden
      </button>
      <a
        href="/datenschutz#cookies"
        className="text-sm font-semibold text-violet-brand underline decoration-2 underline-offset-4 hover:text-violet-deep"
      >
        Mehr in der Datenschutzerklärung
      </a>
    </div>
  );
}
