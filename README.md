# HYO Website

**HYO. Eine neue Ebene in der Versorgung von Menschen mit Schluckstörungen.**

Website der spezialisierten ambulanten Praxis für Dysphagie-Therapie und
Trachealkanülen-Management in Berlin-Friedrichshain. Eröffnung Ende 2026.

Die Seite funktioniert zunächst als professionelle Coming-Soon-Präsenz und enthält
bereits die vollständige spätere Informationsarchitektur: Leistungen, Bereiche für
Patienten und Partner, Wissensbereich mit Dashboard, Team, Karriere, Standort,
Kontakt sowie Termin-, Kooperations- und Bewerbungsformulare.

## Technischer Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS 4 mit zentralen HYO-Design-Tokens (`app/globals.css`)
- Zod für serverseitige Formularvalidierung, Server Actions für die Verarbeitung
- Manrope über `next/font` (wird zur Build-Zeit geladen und ausschließlich von der
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
lib/                  Site-Konstanten, Zod-Schemas, Server Actions, Formularadapter
public/images/        Logo-Varianten, Teamfotos, OG-Bild, Hero-Poster
public/video/         Hero-Video (TODO: Dateien ergänzen, siehe unten)
```

## Umgebungsvariablen

Siehe `.env.example`:

| Variable | Zweck |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Öffentliche Basis-URL (Canonical, Sitemap, OG) |
| `CONTACT_RECIPIENT_EMAIL` | Empfänger der Formular-Anfragen (Standard: corinna.schwarz@hyo-health.de) |
| `RESEND_API_KEY` | E-Mail-Zustellung über Resend (optional in Entwicklung) |

Ohne `RESEND_API_KEY` werden Formulareingaben nur serverseitig protokolliert.
Der Versandweg ist in `lib/adapter.ts` gekapselt und kann dort gegen ein CRM-
oder Praxissystem ausgetauscht werden, ohne die Formulare anzufassen.

## Formulare

Alle drei Formulare (Terminanfrage, Kooperationsanfrage, Bewerbung/Personal)
sind bewusst kurz gehalten, werden serverseitig mit Zod validiert, besitzen
Honeypot-Spamschutz sowie klare Fehler- und Erfolgszustände und erheben nur
zweckgebundene Daten. Freitextfelder weisen darauf hin, keine unnötigen
medizinischen Details zu übermitteln.

Beim Absenden wird der Inhalt als formatierte E-Mail an
**corinna.schwarz@hyo-health.de** zugestellt (Reply-To = Absenderadresse aus dem
Formular). Voraussetzung für den echten Versand ist ein gesetzter
`RESEND_API_KEY`; ohne Schlüssel wird die Anfrage in der Entwicklung nur
serverseitig protokolliert. Ein Lebenslauf-Upload wird bewusst nicht mehr
angeboten – Unterlagen werden nach dem Erstkontakt angefragt (vereinfacht
Datenschutz und Zustellung).

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
statt Scheingenauigkeit, Evidenzkennzeichnung, Limitationen und `TODO`-Markierung
für alle fachlich noch nicht geprüften Kennzahlen.

## Medien austauschen

- **Logo:** `public/images/hyo-logo-violet-on-mint.png` (Original) und daraus
  freigestellt `hyo-logo-violet-transparent.png`. TODO: mintfarbene Variante für
  violette Flächen ergänzen und in `components/Logo.tsx` einbinden.
- **Teamfotos:** `public/images/team/*.jpg` (4:5, 720×900). Beim Austausch gleiche
  Dateinamen verwenden oder Pfade in `content/team.ts` anpassen.
- **Hero-Video:** Dateien nach `public/video/` legen:
  `hero.webm`, `hero.mp4`, `hero-mobile.mp4`; Posterbild
  `public/images/hero-poster.jpg` ersetzen. Bis dahin zeigt der Hero die
  geometrische Markenfläche.
- **Kontaktdaten:** zentral in `lib/site.ts` (`TODO`-Markierungen).

Alle offenen Punkte sind im Code einheitlich mit `TODO` markiert:

```bash
grep -rn "TODO" app components content lib
```

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
   (`NEXT_PUBLIC_SITE_URL`, `CONTACT_RECIPIENT_EMAIL`, `RESEND_API_KEY`)
4. Erstes Deployment prüfen (Netlify-Vorschau-URL `*.netlify.app`)
5. Eigene Domain unter „Domain management“ verbinden; DNS beim Registrar per
   CNAME/ALIAS auf Netlify zeigen lassen (Anzeige in Netlify) oder Netlify DNS
   nutzen
6. HTTPS-Zertifikat (Let's Encrypt) wird von Netlify automatisch ausgestellt
7. `NEXT_PUBLIC_SITE_URL` auf die finale Domain setzen und neu deployen
8. Abschließende Funktionsprüfung (siehe Checkliste)

Deploy Previews: Netlify baut automatisch für jeden Pull Request eine
Vorschau-Umgebung; ein Merge in `main` veröffentlicht die Production-Version.

Die Architektur bleibt portabel: Es werden keine anbieterspezifischen APIs
genutzt.

## Livegang-Checkliste

### Inhalte
- [ ] Finale Teamrollen und Berufsbezeichnungen geprüft und ergänzt
- [ ] Teamtexte freigegeben
- [ ] E-Mail-Adresse und Telefonnummer ergänzt (`lib/site.ts`, Kontaktseite)
- [ ] Öffnungszeiten ergänzt oder Abschnitt entfernt (Standortseite)
- [ ] Rechtliche Firmierung geprüft (Footer, Impressum)
- [ ] Leistungen fachlich geprüft
- [ ] Eröffnungsdatum geprüft
- [ ] Alle `TODO`-Platzhalter identifiziert und ersetzt

### Medien
- [ ] Finale Logo-Varianten eingebunden (inkl. Mint-Variante für violette Flächen)
- [ ] Hero-Video komprimiert bereitgestellt, Posterbild ersetzt
- [ ] Teamfotos freigegeben, Bildrechte dokumentiert
- [ ] Alt-Texte geprüft

### Recht und Datenschutz
- [ ] Impressum vollständig und geprüft
- [ ] Datenschutzerklärung erstellt und geprüft
- [ ] Cookie-/Consent-Lösung geprüft (aktuell keine Tracking-Cookies)
- [ ] Formulare datenschutzrechtlich geprüft, AV-Verträge geschlossen
- [ ] Kartendienst-Einbettung (OpenStreetMap-iframe) datenschutzrechtlich geprüft
- [ ] Medizinischer Informationshinweis vorhanden (Wissensbereich)

### Technik
- [ ] `npm run build` ohne TypeScript-/ESLint-Fehler
- [ ] Keine defekten Links, 404-Seite vorhanden
- [ ] Formulare inkl. E-Mail-Zustellung getestet
- [ ] Mobile Darstellung und Tastaturnavigation getestet
- [ ] Kontraste geprüft (WCAG 2.2 AA)
- [ ] Sitemap (`/sitemap.xml`) und `robots.txt` erreichbar
- [ ] Favicon und OG-Bild geprüft
- [ ] Domain verbunden, HTTPS aktiv

### Veröffentlichung
- [ ] Finales Preview abgenommen
- [ ] Merge in `main`, Production-Deployment kontrolliert
- [ ] Zentrale Seiten manuell geprüft
- [ ] Monitoring nach Livegang

## Lizenz

TODO: Lizenz festlegen. Bis dahin: alle Rechte vorbehalten.
