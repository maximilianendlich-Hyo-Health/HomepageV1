"use client";

import { useEffect, useRef, useState } from "react";

/**
 * „Ansicht anpassen“ – Barrierefreiheits-Einstellungen der HYO-Website.
 *
 * Die Einstellungen sind nach Beeinträchtigung gruppiert (Sehen,
 * Lesen & Konzentration, Motorik, Bewegungsempfindlichkeit), werden als
 * data-Attribute auf <html> angewendet und ausschließlich lokal im Browser
 * gespeichert (localStorage, keine Übertragung an Server oder Dritte).
 *
 * Ein Inline-Skript im Layout wendet gespeicherte Einstellungen bereits vor
 * dem ersten Rendern an, damit nichts flackert.
 */

export const ACC_STORAGE_KEY = "hyo-a11y";

type Settings = {
  text: "standard" | "gross" | "sehr-gross";
  contrast: "standard" | "hoch";
  spacing: "standard" | "erweitert";
  links: "standard" | "hervorgehoben";
  targets: "standard" | "gross";
  motion: "system" | "reduziert";
};

const defaults: Settings = {
  text: "standard",
  contrast: "standard",
  spacing: "standard",
  links: "standard",
  targets: "standard",
  motion: "system",
};

function applySettings(settings: Settings) {
  const root = document.documentElement;
  const map: Record<keyof Settings, string> = {
    text: "data-acc-text",
    contrast: "data-acc-contrast",
    spacing: "data-acc-spacing",
    links: "data-acc-links",
    targets: "data-acc-targets",
    motion: "data-acc-motion",
  };
  (Object.keys(map) as (keyof Settings)[]).forEach((key) => {
    const value = settings[key];
    const isDefault = value === defaults[key];
    if (isDefault) root.removeAttribute(map[key]);
    else root.setAttribute(map[key], value);
  });
}

function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(ACC_STORAGE_KEY);
    if (!raw) return defaults;
    return { ...defaults, ...(JSON.parse(raw) as Partial<Settings>) };
  } catch {
    return defaults;
  }
}

/* --- UI-Bausteine ------------------------------------------------------- */

function OptionGroup<K extends keyof Settings>({
  legend,
  name,
  value,
  options,
  onChange,
}: {
  legend: string;
  name: K;
  value: Settings[K];
  options: { value: Settings[K]; label: string }[];
  onChange: (name: K, value: Settings[K]) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-2 font-semibold">{legend}</legend>
      <div className="flex flex-wrap gap-2" role="radiogroup">
        {options.map((option) => {
          const active = option.value === value;
          return (
            <button
              key={String(option.value)}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(name, option.value)}
              className={`rounded-hyo border-2 px-4 py-2 text-sm font-semibold transition-colors ${
                active
                  ? "border-violet-brand bg-violet-brand text-white"
                  : "border-ink/20 bg-white text-ink hover:border-violet-brand"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function Group({ title, hint, children }: { title: string; hint: string; children: React.ReactNode }) {
  return (
    <section className="rounded-hyo bg-mint-light p-5">
      <h3 className="text-lg font-extrabold">{title}</h3>
      <p className="mt-1 mb-4 text-sm text-ink/75">{hint}</p>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

/* --- Hauptkomponente ----------------------------------------------------- */

export function AccessibilityPanel() {
  // Lazy-Initialisierung: liest gespeicherte Einstellungen einmalig beim
  // ersten Client-Render (auf dem Server gelten die Standardwerte; das
  // sichtbare UI unterscheidet sich dadurch nicht, da der Dialog zu ist).
  const [settings, setSettings] = useState<Settings>(() =>
    typeof window === "undefined" ? defaults : loadSettings(),
  );
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Gespeicherte Einstellungen nach der Hydration anwenden: React setzt die
  // Attribute auf <html> beim Hydrieren zurück, daher hier erneut anwenden
  // (asynchron, um kaskadierende Renderings zu vermeiden).
  useEffect(() => {
    const frame = requestAnimationFrame(() => applySettings(loadSettings()));
    return () => cancelAnimationFrame(frame);
  }, []);

  function update<K extends keyof Settings>(key: K, value: Settings[K]) {
    const next = { ...settings, [key]: value };
    setSettings(next);
    applySettings(next);
    try {
      localStorage.setItem(ACC_STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* Speicherung nicht möglich – Einstellungen gelten für diese Sitzung */
    }
  }

  function reset() {
    setSettings(defaults);
    applySettings(defaults);
    try {
      localStorage.removeItem(ACC_STORAGE_KEY);
    } catch {
      /* ignorieren */
    }
  }

  const changedCount = (Object.keys(defaults) as (keyof Settings)[]).filter(
    (key) => settings[key] !== defaults[key],
  ).length;

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-hyo bg-violet-brand px-4 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-violet-deep sm:right-6 sm:bottom-6"
        aria-haspopup="dialog"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <circle cx="12" cy="4.5" r="2.2" fill="currentColor" />
          <path
            d="M4.5 8.3c2.6.7 5 1 7.5 1s4.9-.3 7.5-1M12 9.3v4.2m0 0-3 6.5m3-6.5 3 6.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Ansicht anpassen
        {changedCount > 0 && (
          <span className="rounded-hyo bg-mint-brand px-1.5 text-xs font-bold text-ink" aria-label={`${changedCount} aktive Anpassungen`}>
            {changedCount}
          </span>
        )}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="acc-panel-title"
        className="m-auto w-[min(94vw,40rem)] rounded-hyo bg-warm-white p-0 text-ink backdrop:bg-[rgba(32,32,42,0.55)]"
        onClick={(event) => {
          // Klick auf den Backdrop schließt den Dialog
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="acc-panel-title" className="text-2xl font-extrabold">
                Ansicht anpassen
              </h2>
              <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-ink/80">
                Passen Sie die Darstellung an Ihre Bedürfnisse an. Ihre Auswahl wird nur auf diesem
                Gerät gespeichert und nicht an uns übertragen.
              </p>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-hyo border-2 border-violet-brand text-violet-brand hover:bg-violet-brand hover:text-white"
            >
              <span className="sr-only">Einstellungen schließen</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="mt-6 space-y-5">
            <Group
              title="Sehen"
              hint="Für Menschen mit Sehbeeinträchtigung oder bei kleinen Bildschirmen."
            >
              <OptionGroup
                legend="Textgröße"
                name="text"
                value={settings.text}
                onChange={update}
                options={[
                  { value: "standard", label: "Standard" },
                  { value: "gross", label: "Groß" },
                  { value: "sehr-gross", label: "Sehr groß" },
                ]}
              />
              <OptionGroup
                legend="Kontrast"
                name="contrast"
                value={settings.contrast}
                onChange={update}
                options={[
                  { value: "standard", label: "Standard" },
                  { value: "hoch", label: "Hoher Kontrast" },
                ]}
              />
            </Group>

            <Group
              title="Lesen und Konzentration"
              hint="Erleichtert das Lesen, z. B. bei Leseschwäche, Aphasie oder Konzentrationsschwierigkeiten."
            >
              <OptionGroup
                legend="Zeilen- und Zeichenabstand"
                name="spacing"
                value={settings.spacing}
                onChange={update}
                options={[
                  { value: "standard", label: "Standard" },
                  { value: "erweitert", label: "Erweitert" },
                ]}
              />
              <OptionGroup
                legend="Links"
                name="links"
                value={settings.links}
                onChange={update}
                options={[
                  { value: "standard", label: "Standard" },
                  { value: "hervorgehoben", label: "Immer unterstrichen" },
                ]}
              />
            </Group>

            <Group
              title="Motorik"
              hint="Größere Schaltflächen und Eingabefelder erleichtern die Bedienung, z. B. bei Tremor oder eingeschränkter Feinmotorik."
            >
              <OptionGroup
                legend="Bedienelemente"
                name="targets"
                value={settings.targets}
                onChange={update}
                options={[
                  { value: "standard", label: "Standard" },
                  { value: "gross", label: "Größer" },
                ]}
              />
            </Group>

            <Group
              title="Bewegungsempfindlichkeit"
              hint="Reduziert Animationen und blendet das Hintergrundvideo aus, z. B. bei Schwindel oder vestibulären Beschwerden."
            >
              <OptionGroup
                legend="Animationen"
                name="motion"
                value={settings.motion}
                onChange={update}
                options={[
                  { value: "system", label: "Systemeinstellung" },
                  { value: "reduziert", label: "Reduzieren" },
                ]}
              />
            </Group>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t-2 border-ink/10 pt-5">
            <button
              type="button"
              onClick={reset}
              className="rounded-hyo border-2 border-violet-brand px-4 py-2 text-sm font-semibold text-violet-brand hover:bg-violet-brand hover:text-white"
            >
              Alles zurücksetzen
            </button>
            <p className="text-sm text-ink/70">
              Die Seite unterstützt außerdem Tastaturbedienung und Systemeinstellungen wie{" "}
              <span className="whitespace-nowrap">„Bewegung reduzieren“</span>.
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
