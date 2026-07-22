"use client";

import { useEffect, useRef, useState } from "react";
import { CONSENT_CHANGED_EVENT, loadConsent, saveConsent } from "@/lib/consent";
import { parkinsonCenters, strokeUnits } from "@/content/strokeUnits";

/**
 * Karte der Stroke Units und Parkinson-Fachzentren in Berlin und Umgebung
 * (Leaflet + OpenStreetMap). Zwei-Klick-Lösung: Kartenkacheln werden erst nach
 * Einwilligung für externe Inhalte geladen (gleiche Kategorie wie die
 * Standortkarte).
 */
export function ConsentGatedStrokeUnitMap() {
  const [allowed, setAllowed] = useState(false);
  const [ready, setReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

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

  useEffect(() => {
    if (!allowed || !containerRef.current || mapRef.current) return;
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current || mapRef.current) return;
      const map = L.map(containerRef.current, { scrollWheelZoom: false }).setView(
        [52.512, 13.405],
        11,
      );
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende',
      }).addTo(map);
      const makeIcon = (background: string, border: string) =>
        L.divIcon({
          className: "",
          html: `<span style="display:block;width:18px;height:18px;border-radius:9999px;background:${background};border:3px solid ${border};box-shadow:0 1px 4px rgba(32,32,42,.35)"></span>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9],
        });
      const strokeIcon = makeIcon("#8281bd", "#daeeea");
      const parkinsonIcon = makeIcon("#20202a", "#c2e3db");
      for (const unit of strokeUnits) {
        L.marker([unit.lat, unit.lng], { icon: strokeIcon })
          .addTo(map)
          .bindPopup(`<strong>${unit.name}</strong><br/>${unit.address}<br/><em>Stroke Unit</em>`);
      }
      for (const center of parkinsonCenters) {
        L.marker([center.lat, center.lng], { icon: parkinsonIcon })
          .addTo(map)
          .bindPopup(`<strong>${center.name}</strong><br/>${center.address}<br/><em>Parkinson-Fachzentrum</em>`);
      }
      const all = [...strokeUnits, ...parkinsonCenters].map(
        (m) => [m.lat, m.lng] as [number, number],
      );
      map.fitBounds(L.latLngBounds(all), { padding: [28, 28] });
      mapRef.current = map;
    })();
    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [allowed]);

  if (ready && allowed) {
    return (
      <div>
        <div className="overflow-hidden rounded-hyo border-2 border-ink/10">
          <div
            ref={containerRef}
            className="h-[440px] w-full"
            aria-label="Karte der Stroke Units und Parkinson-Fachzentren in Berlin und Umgebung"
          />
        </div>
        <p className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/80">
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="h-4 w-4 rounded-full border-[3px] border-mint-light bg-violet-brand" />
            Stroke Unit
          </span>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="h-4 w-4 rounded-full border-[3px] border-mint-brand bg-ink" />
            Parkinson-Fachzentrum
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[440px] flex-col items-center justify-center gap-4 rounded-hyo border-2 border-ink/10 bg-mint-light p-8 text-center">
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-14 w-14">
        <circle cx="24" cy="20" r="12" fill="var(--hyo-light-violet)" />
        <path d="M24 44c6-9 12-15.5 12-24a12 12 0 0 0-24 0c0 8.5 6 15 12 24Z" fill="var(--hyo-violet)" opacity="0.85" />
        <circle cx="24" cy="20" r="5" fill="var(--hyo-light-mint)" />
      </svg>
      <p className="max-w-md leading-relaxed text-ink/85">
        Die interaktive Karte wird mit Kartenmaterial von OpenStreetMap geladen. Dabei wird
        Ihre IP-Adresse an die Server der OpenStreetMap Foundation übermittelt
        (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO). Ihre Auswahl wird gespeichert und ist
        jederzeit über „Cookie-Einstellungen“ widerrufbar. Alle Standorte finden Sie auch in
        der Liste unter der Karte.
      </p>
      <button
        type="button"
        onClick={() => saveConsent(true)}
        className="rounded-hyo bg-violet-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-deep"
      >
        Karte laden
      </button>
    </div>
  );
}
