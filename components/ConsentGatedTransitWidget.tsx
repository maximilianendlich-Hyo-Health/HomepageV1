"use client";

import { useEffect, useState } from "react";
import { CONSENT_CHANGED_EVENT, loadConsent, saveConsent } from "@/lib/consent";

const VBB_SCRIPT_SRC =
  "https://fahrinfo.vbb.de/webapp/staticfiles/hafas-widget-core.1.0.0.js?language=de_DE";

/**
 * Fahrplanauskunft „VBB-Fahrinfo“ (HAFAS-Widget) als Zwei-Klick-Lösung.
 *
 * Wichtig: Laut VBB verwendet die Anwendung sogenannte Tracker
 * (https://www.vbb.de/datenschutz/). Das externe Skript wird deshalb erst
 * geladen, nachdem die Einwilligung für externe Inhalte vorliegt
 * (Cookie-Banner oder Klick auf „Fahrplanauskunft laden“) – nicht global im
 * Header. Ziel der Fahrt ist fest die Praxisadresse.
 */
export function ConsentGatedTransitWidget() {
  const [allowed, setAllowed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
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

  // Skript erst nach Einwilligung einbinden; ein neu erzeugtes Script-Element
  // wird auch bei wiederholtem Einbinden ausgeführt und initialisiert das
  // Widget im bereits gerenderten Container.
  useEffect(() => {
    if (!allowed) return;
    const script = document.createElement("script");
    script.src = VBB_SCRIPT_SRC;
    script.async = true;
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [allowed]);

  if (ready && allowed) {
    return (
      <div className="rounded-hyo border-2 border-ink/10 bg-white p-4">
        <div
          data-hfs-widget="true"
          data-hfs-widget-cfg-colorscheme="light"
          data-hfs-widget-tp="true"
          data-hfs-widget-tp-displaymode="query"
          data-hfs-widget-tp-autosearch="true"
          data-hfs-widget-tp-arr="Matthiasstraße 7, 10249 Berlin-Friedrichshain"
        />
        <p className="mt-3 text-xs leading-relaxed text-medium-grey">
          Fahrplanauskunft: VBB-Fahrinfo (Verkehrsverbund Berlin-Brandenburg). Die Anwendung
          verwendet sogenannte Tracker, siehe{" "}
          <a
            href="https://www.vbb.de/datenschutz/"
            rel="noopener noreferrer"
            className="font-semibold text-violet-brand underline decoration-2 underline-offset-2"
          >
            VBB-Datenschutzhinweise
          </a>
          . Widerruf jederzeit über „Cookie-Einstellungen“.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 rounded-hyo border-2 border-ink/10 bg-mint-light p-8 text-center">
      {/* Geometrisches ÖPNV-Symbol ohne externe Verbindung */}
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-14 w-14">
        <rect x="10" y="6" width="28" height="30" rx="6" fill="var(--hyo-violet)" opacity="0.85" />
        <rect x="15" y="12" width="18" height="10" rx="2" fill="var(--hyo-light-mint)" />
        <circle cx="17.5" cy="29" r="2.6" fill="var(--hyo-light-mint)" />
        <circle cx="30.5" cy="29" r="2.6" fill="var(--hyo-light-mint)" />
        <path d="M15 42l3-6m15 6-3-6" stroke="var(--hyo-light-violet)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <p className="max-w-md text-sm leading-relaxed text-ink/85">
        Die Fahrplanauskunft „VBB-Fahrinfo“ wird vom Verkehrsverbund Berlin-Brandenburg
        bereitgestellt und verwendet sogenannte Tracker (siehe{" "}
        <a
          href="https://www.vbb.de/datenschutz/"
          rel="noopener noreferrer"
          className="font-semibold text-violet-brand underline decoration-2 underline-offset-2"
        >
          VBB-Datenschutzhinweise
        </a>
        ). Mit Klick auf „Fahrplanauskunft laden“ willigen Sie in das Laden externer Inhalte
        ein; Ihre Auswahl wird gespeichert und ist jederzeit widerrufbar.
      </p>
      <button
        type="button"
        onClick={() => saveConsent(true)}
        className="rounded-hyo bg-violet-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-deep"
      >
        Fahrplanauskunft laden
      </button>
    </div>
  );
}
