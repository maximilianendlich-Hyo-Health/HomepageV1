# HYO Website

**HYO. Eine neue Ebene in der Versorgung von Menschen mit Schluckstörungen.**

Website der spezialisierten ambulanten Praxis für Dysphagie-Therapie und
Trachealkanülen-Management in Berlin-Friedrichshain (MEDICUM Friedrichshain,
Matthiasstraße 7). Live unter https://hyo-health.de, Betriebsstart am 01.11.2026.

Die Seite besteht aus einer patientenorientierten Startseite (Landingpage mit
Terminbuchung) sowie Leistungen, Bereichen für Patienten und Partner,
Wissensbereich mit Dashboard, Team, Karriere, Standort, Kontakt und Kooperations-
und Bewerbungsformularen.

## Technischer Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS 4 mit zentralen HYO-Design-Tokens (`app/globals.css`)
- Netlify Forms für die Formularverarbeitung, Zod für die Validierung
- Quicksand über `next/font` (wird zur Build-Zeit geladen und ausschließlich von der
  eigenen Domain ausgeliefert – keine Anfragen an Google zur Laufzeit)
- ESLint, GitHub Actions CI

## Schnellstart

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
npm run start
```

## Projektstruktur

```
app/                  Seiten (App Router), Sitemap, robots, Icons
components/           Header, Footer, Hero, Barrierefreiheits-Panel, Geometrie
components/ui/        Buttons, Section-/Typografie-Bausteine
components/forms/     Termin-, Kooperations- und Bewerbungsformular
components/dashboard/ Wissensdashboard (Client-Komponente)
content/              Inhalte: Leistungen, Wissen, Team, Dashboard-Daten
lib/                  Site-Konstanten, SEO-Helfer, Consent, Zod-Schemas, Formularadapter
public/images/        Logo-Varianten, Teamfotos, OG-Bild, Hero-Poster
public/video/         Erklärvideo Schluckvorgang (Hero-Video optional, bei Bedarf anlegen)
```

## Umgebungsvariablen

Siehe `.env.example`:

| Variable | Zweck |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Öffentliche Basis-URL (Canonical, Sitemap, OG) |

## Formulare

Alle drei Formulare (Terminanfrage, Kooperationsanfrage, Bewerbung/Personal)
laufen über **Netlify Forms**: Die statische Definitionsdatei
`public/__forms.html` registriert die Formulare beim Deploy, die
React-Formulare senden ihre Daten URL-codiert (inkl. `form-name`) an diesen
Pfad. Eingaben werden vor dem Absenden clientseitig mit Zod validiert
(`lib/schemas.ts`), ein Honeypot-Feld (`netlify-honeypot="website"`) filtert
Spam zusätzlich zu Netlifys eigener Spam-Erkennung.

Submissions erscheinen im Netlify-Dashboard unter **Forms**. E-Mail-
Benachrichtigungen an corinna.schwarz@hyo-health.de dort einrichten:
„Site configuration → Notifications → Form submission notifications“.

Wichtig bei Feldänderungen: Neue oder umbenannte Felder immer auch in
`public/__forms.html` nachziehen, sonst verwirft Netlify die Werte.
Hinweis: Lokal (ohne Netlify) werden POSTs an `/__forms.html` nicht
angenommen – der Versand funktioniert erst im Netlify-Deploy bzw. mit
`netlify dev`. Im kostenlosen Netlify-Tarif sind Submissions limitiert.

## Terminbuchung

Die Online-Terminbuchung läuft über **Doctolib**
(`https://www.doctolib.de/praxis/berlin/hyo-health`). Sie ist nur verlinkt, nicht
eingebunden: Alle „Termin buchen“-Buttons öffnen die Doctolib-Seite in einem neuen
Fenster, auf der Website werden keine Inhalte von Doctolib geladen. Die URL steht
zentral in `lib/site.ts` (`booking.url`); die Buchungs-Kachel im Hero ist
`components/BookingCard.tsx`. Die Datenschutzerklärung (Ziffer 6) beschreibt die
Verlinkung.

## Datenschutz und Consent

- Keine Analyse-, Tracking- oder Marketing-Cookies.
- Externe Inhalte (OpenStreetMap-Karte, VBB-Fahrplanauskunft) werden erst nach
  Einwilligung geladen (Cookie-Banner bzw. Zwei-Klick-Lösung,
  `lib/consent.ts`, `components/CookieBanner.tsx`, `components/ConsentGated*.tsx`).
  Ändert sich der Umfang der Einwilligung, `CONSENT_VERSION` in `lib/consent.ts`
  erhöhen.
- Rechtstexte: `app/impressum/page.tsx`, `app/datenschutz/page.tsx`.

## SEO

Seiten-Metadaten (Titel, Beschreibung, Canonical, Open Graph, Twitter-Card) werden
über `pageMetadata()` in `lib/seo.ts` gesetzt. Strukturierte Daten
(MedicalClinic, WebSite) liegen im Root-Layout, FAQ-Markup auf der Startseite,
Artikel- und Breadcrumb-Markup auf den Wissensartikeln. Sitemap und `robots.txt`
werden aus `app/sitemap.ts` und `app/robots.ts` erzeugt; neue Seiten dort in
`staticRoutes` ergänzen.

## Barrierefreiheit

- Orientierung an WCAG 2.2 AA, sichtbare Fokuszustände, Skip-Link,
  Tastaturbedienbarkeit, `prefers-reduced-motion`
- „Ansicht anpassen“-Panel mit Einstellungen nach Beeinträchtigung
  (Sehen, Lesen & Konzentration, Motorik, Bewegungsempfindlichkeit);
  Speicherung ausschließlich lokal im Browser

## Wissensbereich und Dashboard

Artikel liegen als typisierte Inhalte in `content/wissen.ts` und können später
ohne Umbau aus einem CMS (Sanity, Payload, Contentful) oder MDX geladen werden.
Das Dashboard (`content/dashboard.ts`) trennt Daten strikt von der UI und folgt
den Daten- und Quellenregeln des Briefings: keine erfundenen Zahlen, Spannweiten
statt Scheingenauigkeit, Evidenzkennzeichnung und Limitationen.

## Medien austauschen

- **Logo:** `public/images/hyo-logo-violet-on-mint.png` (Original) und daraus
  abgeleitet `hyo-logo-violet-transparent.png` (Header, helle Flächen) sowie
  `hyo-logo-mint-transparent.png` (Footer, violette Flächen). Die Auswahl erfolgt
  in `components/Logo.tsx`.
- **Teamfotos:** `public/images/team/*.jpg` (4:5, 720×900). Beim Austausch gleiche
  Dateinamen verwenden oder Pfade in `content/team.ts` anpassen.
- **Hero-Video:** Dateien nach `public/video/` legen:
  `hero.webm`, `hero.mp4`, `hero-mobile.mp4`; Posterbild
  `public/images/hero-poster.jpg` ersetzen. Bis dahin zeigt der Hero die
  geometrische Markenfläche.
- **Kontaktdaten, Adresse, Buchungs-Link:** zentral in `lib/site.ts`.

## GitHub-Workflow

```bash
git init
git add .
git commit -m "Initial HYO website"
git branch -M main
git remote add origin <GITHUB_REPOSITORY_URL>
git push -u origin main
```

- `main` ist der Production-Branch
- Feature-Arbeit über separate Branches, Pull Requests erzeugen Preview-Deployments
- Merge in `main` veröffentlicht die Production-Version
- optional `develop` als Staging-Branch

Die CI (`.github/workflows/ci.yml`) führt bei Pushes und Pull Requests
`npm ci`, `lint`, `typecheck` und `build` aus.

## Deployment auf Netlify

Die Konfiguration liegt in `netlify.toml` (Build-Befehl, Node 22, offizielle
Next.js-Runtime von Netlify inkl. SSR, Server Actions und Bild-Optimierung).

1. Bei Netlify anmelden → „Add new site“ → „Import an existing project“
2. GitHub-Repository auswählen; Build-Einstellungen werden aus `netlify.toml`
   übernommen (Command `npm run build`, Publish `.next`)
3. Umgebungsvariablen aus `.env.example` unter
   „Site configuration → Environment variables“ hinterlegen
   (`NEXT_PUBLIC_SITE_URL`)
4. Erstes Deployment prüfen (Netlify-Vorschau-URL `*.netlify.app`)
5. Eigene Domain unter „Domain management“ verbinden; DNS beim Registrar per
   CNAME/ALIAS auf Netlify zeigen lassen (Anzeige in Netlify) oder Netlify DNS
   nutzen
6. HTTPS-Zertifikat (Let's Encrypt) wird von Netlify automatisch ausgestellt
7. `NEXT_PUBLIC_SITE_URL` auf die finale Domain setzen und neu deployen
8. Abschließende Funktionsprüfung der zentralen Seiten und Formulare

Deploy Previews: Netlify baut automatisch für jeden Pull Request eine
Vorschau-Umgebung; ein Merge in `main` veröffentlicht die Production-Version.

Die Architektur bleibt portabel: Es werden keine anbieterspezifischen APIs
genutzt.

## Lizenz

Alle Rechte vorbehalten, HYO Health GmbH.
