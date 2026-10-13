"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  CONSENT_CHANGED_EVENT,
  OPEN_CONSENT_EVENT,
  loadConsent,
  saveConsent,
} from "@/lib/consent";

/**
 * Cookie- bzw. Einwilligungsbanner.
 *
 * - erscheint beim ersten Besuch, solange keine Entscheidung gespeichert ist
 * - „Alle akzeptieren“, „Nur notwendige“ und eine Detailansicht mit
 *   Kategorien-Schaltern
 * - kann jederzeit über „Cookie-Einstellungen“ (Footer und
 *   Datenschutzerklärung) erneut geöffnet werden
 * - Auswahl wird ausschließlich lokal gespeichert (siehe lib/consent.ts)
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState(false);
  const [externalMedia, setExternalMedia] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Initialen Zustand asynchron übernehmen (vermeidet kaskadierende
    // Renderings durch synchrones setState im Effekt).
    const frame = requestAnimationFrame(() => {
      const consent = loadConsent();
      setExternalMedia(consent.externalMedia);
      if (!consent.decided) setVisible(true);
    });

    const onOpen = () => {
      const current = loadConsent();
      setExternalMedia(current.externalMedia);
      setDetails(true);
      setVisible(true);
    };
    const onChanged = () => {
      const current = loadConsent();
      setExternalMedia(current.externalMedia);
      // Entscheidung wurde getroffen (z. B. über „Buchungstool laden“) –
      // Banner schließen, damit er den Inhalt nicht überdeckt.
      if (current.decided) {
        setVisible(false);
        setDetails(false);
      }
    };
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen);
    window.addEventListener(CONSENT_CHANGED_EVENT, onChanged);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener(OPEN_CONSENT_EVENT, onOpen);
      window.removeEventListener(CONSENT_CHANGED_EVENT, onChanged);
    };
  }, []);

  useEffect(() => {
    if (visible) headingRef.current?.focus();
  }, [visible, details]);

  if (!visible) return null;

  const close = () => {
    setVisible(false);
    setDetails(false);
  };

  const acceptAll = () => {
    saveConsent(true);
    close();
  };
  const acceptNecessary = () => {
    saveConsent(false);
    close();
  };
  const saveSelection = () => {
    saveConsent(externalMedia);
    close();
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-heading"
      className="fixed inset-x-0 bottom-0 z-[80] border-t-4 border-violet-brand bg-white shadow-[0_-8px_30px_rgba(32,32,42,0.15)]"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
        <h2
          id="consent-heading"
          ref={headingRef}
          tabIndex={-1}
          className="text-lg font-extrabold outline-none"
        >
          Datenschutz-Einstellungen
        </h2>

        {!details ? (
          <>
            <p className="mt-2 max-w-3xl text-[0.95rem] leading-relaxed text-ink/85">
              Diese Website verwendet keine Analyse-, Tracking- oder Marketing-Cookies.
              Technisch notwendige Speicherungen (z.&nbsp;B. Ihre Barrierefreiheits-Einstellungen
              und diese Auswahl) erfolgen ausschließlich lokal in Ihrem Browser. Nur die Kartendarstellung und die
              VBB-Fahrplanauskunft auf der Standortseite laden externe Inhalte (OpenStreetMap
              bzw. VBB-Fahrinfo, letztere verwendet sogenannte Tracker) – dafür bitten wir um
              Ihre Einwilligung. Die Online-Terminbuchung auf der Startseite wird direkt
              eingebunden (siehe Datenschutzerklärung, Ziffer 6). Details finden Sie in der{" "}
              <Link
                href="/datenschutz"
                className="font-semibold text-violet-brand underline decoration-2 underline-offset-4"
              >
                Datenschutzerklärung
              </Link>{" "}
              und im{" "}
              <Link
                href="/impressum"
                className="font-semibold text-violet-brand underline decoration-2 underline-offset-4"
              >
                Impressum
              </Link>
              .
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-hyo bg-violet-brand px-5 py-3 font-semibold text-white transition-colors hover:bg-violet-deep"
              >
                Alle akzeptieren
              </button>
              <button
                type="button"
                onClick={acceptNecessary}
                className="rounded-hyo border-2 border-violet-brand px-5 py-2.5 font-semibold text-violet-brand transition-colors hover:bg-violet-brand hover:text-white"
              >
                Nur notwendige
              </button>
              <button
                type="button"
                onClick={() => setDetails(true)}
                className="px-2 py-2 font-semibold text-violet-brand underline decoration-2 underline-offset-4 hover:text-violet-deep"
              >
                Einstellungen anpassen
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <section className="rounded-hyo bg-mint-light p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-extrabold">Technisch notwendig</h3>
                  <span className="rounded-hyo bg-violet-brand px-2.5 py-1 text-xs font-bold text-white">
                    Immer aktiv
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  Lokale Speicherung Ihrer Barrierefreiheits-Einstellungen („Ansicht anpassen“)
                  und dieser Einwilligungsauswahl (localStorage, §&nbsp;25 Abs.&nbsp;2 Nr.&nbsp;2
                  TDDDG). Es werden keine Daten an uns oder Dritte übertragen.
                </p>
              </section>

              <section className="rounded-hyo bg-soft-grey p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-extrabold">
                    <label htmlFor="consent-external" className="cursor-pointer">
                      Externe Inhalte (OpenStreetMap, VBB-Fahrinfo)
                    </label>
                  </h3>
                  <button
                    id="consent-external"
                    type="button"
                    role="switch"
                    aria-checked={externalMedia}
                    onClick={() => setExternalMedia((value) => !value)}
                    className={`relative h-7 w-12 shrink-0 rounded-full border-2 transition-colors ${
                      externalMedia
                        ? "border-violet-brand bg-violet-brand"
                        : "border-medium-grey bg-white"
                    }`}
                  >
                    <span className="sr-only">
                      Externe Inhalte {externalMedia ? "deaktivieren" : "aktivieren"}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`absolute top-0.5 h-5 w-5 rounded-full shadow transition-[left] ${
                        externalMedia ? "left-[1.45rem] bg-white" : "left-0.5 bg-medium-grey"
                      }`}
                    />
                  </button>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  Lädt auf der Standortseite die interaktive Karte der OpenStreetMap
                  Foundation sowie die Fahrplanauskunft „VBB-Fahrinfo“ des Verkehrsverbunds
                  Berlin-Brandenburg. Dabei wird Ihre IP-Adresse an die jeweiligen Server
                  übermittelt; VBB-Fahrinfo verwendet sogenannte Tracker
                  (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO, §&nbsp;25 Abs.&nbsp;1 TDDDG).
                  Ohne Einwilligung zeigen wir Vorschauen ohne externe Verbindung.
                </p>
              </section>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={saveSelection}
                className="rounded-hyo bg-violet-brand px-5 py-3 font-semibold text-white transition-colors hover:bg-violet-deep"
              >
                Auswahl speichern
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-hyo border-2 border-violet-brand px-5 py-2.5 font-semibold text-violet-brand transition-colors hover:bg-violet-brand hover:text-white"
              >
                Alle akzeptieren
              </button>
              <button
                type="button"
                onClick={() => setDetails(false)}
                className="px-2 py-2 font-semibold text-violet-brand underline decoration-2 underline-offset-4 hover:text-violet-deep"
              >
                Zurück
              </button>
            </div>
          </>
        )}

        <p className="mt-4 text-xs text-medium-grey">
          Sie können Ihre Auswahl jederzeit über „Cookie-Einstellungen“ im Footer ändern oder
          widerrufen.
        </p>
      </div>
    </div>
  );
}
