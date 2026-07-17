import type { Metadata } from "next";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { Headline, Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der HYO Health GmbH.",
  robots: { index: false },
  alternates: { canonical: "/datenschutz" },
};

/*
 * Hinweis für die Redaktion (nicht sichtbar):
 * Diese Datenschutzerklärung ist auf die tatsächlich eingesetzte Technik
 * dieser Website zugeschnitten (keine Analyse-/Marketing-Cookies, lokale
 * Schriften, Formulare mit optionalem E-Mail-Versand über Resend,
 * einwilligungsbasierte OpenStreetMap-Einbettung mit Cookie-Banner,
 * lokale Speicherung der Barrierefreiheits-Einstellungen). TODO vor Livegang: durch eine datenschutzrechtlich
 * qualifizierte Stelle prüfen lassen und Hosting-Anbieter, AV-Verträge
 * sowie ggf. Datenschutzbeauftragte:n konkret benennen.
 */

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-xl font-extrabold">{title}</h2>
      <div className="mt-3 max-w-2xl space-y-3 leading-relaxed text-ink/85">{children}</div>
    </section>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h3 className="font-extrabold">{title}</h3>
      <div className="mt-2 space-y-3">{children}</div>
    </div>
  );
}

export default function DatenschutzPage() {
  return (
    <>
      <Section surface="white">
        <Headline as="h1" size="lg">
          Datenschutzerklärung
        </Headline>

        <div className="mt-10">
          <Block title="1. Verantwortlicher">
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p>
              {site.legal.company}
              <br />
              {site.legal.street}
              <br />
              {site.legal.zip} {site.legal.city}, {site.legal.country}
              <br />
              Vertreten durch: {site.legal.representedBy}
            </p>
            <p>
              Telefon:{" "}
              <a href={site.contact.phoneHref} className="font-semibold text-violet-brand underline decoration-2 underline-offset-4">
                {site.contact.phone}
              </a>
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="font-semibold text-violet-brand underline decoration-2 underline-offset-4"
              >
                {site.contact.email}
              </a>
            </p>
            <p>
              Ein Datenschutzbeauftragter ist derzeit nicht benannt, da die gesetzlichen
              Voraussetzungen für eine Benennungspflicht aktuell nicht vorliegen.
              {/* TODO: Prüfen, sobald Praxisbetrieb mit umfangreicher Verarbeitung von
                  Gesundheitsdaten aufgenommen wird (Art. 37 DSGVO, § 38 BDSG). */}
            </p>
          </Block>

          <Block title="2. Allgemeine Hinweise">
            <p>
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer
              funktionsfähigen Website sowie zur Bearbeitung Ihrer Anfragen erforderlich ist.
              Diese Website verwendet keine Analyse-, Tracking- oder Marketing-Cookies und
              bindet keine Werbedienste ein.
            </p>
            <p>
              Rechtsgrundlagen der Verarbeitung sind insbesondere Art. 6 Abs. 1 lit. a DSGVO
              (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO (Vertrag und vorvertragliche
              Maßnahmen) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Soweit Sie
              uns freiwillig Gesundheitsdaten mitteilen, verarbeiten wir diese ausschließlich
              auf Grundlage Ihrer ausdrücklichen Einwilligung nach Art. 9 Abs. 2 lit. a DSGVO.
            </p>
          </Block>

          <Block title="3. Hosting und Server-Logfiles">
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet.
              {/* TODO: Hosting-Anbieter (Netlify, Inc., San Francisco, USA) konkret benennen, AV-Vertrag
                  nach Art. 28 DSGVO schließen und ggf. Hinweise zu Drittlandübermittlung
                  (EU-Standardvertragsklauseln / Data Privacy Framework) ergänzen. */}
              Beim Aufruf der Website verarbeitet der Hosting-Anbieter automatisch
              Informationen in sogenannten Server-Logfiles, die Ihr Browser übermittelt:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seite bzw. Datei</li>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser
              berechtigtes Interesse liegt in der technisch fehlerfreien Darstellung, der
              Stabilität und der Sicherheit der Website. Eine Zusammenführung dieser Daten mit
              anderen Datenquellen findet nicht statt.
            </p>
          </Block>

          <Block title="4. Formulare">
            <p>
              Auf dieser Website können Sie drei Formulare nutzen. Die Übermittlung erfolgt
              jeweils verschlüsselt (TLS). Wir erheben nur die Angaben, die zur Bearbeitung
              Ihres Anliegens erforderlich sind; optionale Felder sind als solche
              gekennzeichnet. Bitte übermitteln Sie in Freitextfeldern keine unnötigen
              medizinischen Details oder Dokumente.
            </p>
            <Sub title="a) Terminanfrage / Vormerkung">
              <p>
                Verarbeitete Daten: Vor- und Nachname, E-Mail-Adresse, optional Telefonnummer,
                Angabe, für wen die Anfrage erfolgt, Ihr Anliegen sowie optional eine kurze
                Nachricht. Zweck: Vormerkung für die Terminvergabe und Kontaktaufnahme nach
                Beginn der Terminvergabe. Rechtsgrundlagen: Art. 6 Abs. 1 lit. b DSGVO
                (vorvertragliche Maßnahmen) sowie Ihre Einwilligung nach Art. 6 Abs. 1 lit. a
                und – für freiwillig mitgeteilte Gesundheitsdaten – Art. 9 Abs. 2 lit. a DSGVO.
              </p>
            </Sub>
            <Sub title="b) Kooperationsanfrage">
              <p>
                Verarbeitete Daten: Einrichtung, Einrichtungsart, Ansprechperson,
                E-Mail-Adresse, optional Telefonnummer, Anliegen und Nachricht. Zweck:
                Bearbeitung von Kooperations- und Übergabeanfragen. Rechtsgrundlage: Art. 6
                Abs. 1 lit. b DSGVO.
              </p>
            </Sub>
            <Sub title="c) Bewerbung">
              <p>
                Verarbeitete Daten: Name, E-Mail-Adresse, optional Telefonnummer, gewünschte
                Position, möglicher Startzeitpunkt, Motivation, optional LinkedIn-Profil und
                Lebenslauf. Zweck: Durchführung des Bewerbungsverfahrens. Rechtsgrundlagen:
                Art. 6 Abs. 1 lit. b DSGVO und § 26 BDSG. Bewerbungsdaten werden nach
                Abschluss des Verfahrens gelöscht, spätestens nach sechs Monaten, sofern keine
                gesetzlichen Aufbewahrungspflichten bestehen oder Sie in eine längere
                Speicherung eingewilligt haben.
              </p>
            </Sub>
            <Sub title="Zustellung der Formulardaten">
              <p>
                Zur Zustellung der Formulareingaben per E-Mail setzen wir den technischen
                Dienstleister Resend (Resend, Inc.) im Rahmen einer Auftragsverarbeitung ein.
                {/* TODO: AV-Vertrag mit Resend prüfen/schließen; Hinweise zur
                    Drittlandübermittlung (USA, Standardvertragsklauseln) ergänzen. */}{" "}
                Ihre Angaben werden ausschließlich für die Bearbeitung Ihres Anliegens
                verwendet und nicht zu Werbezwecken weitergegeben.
              </p>
            </Sub>
            <Sub title="Speicherdauer">
              <p>
                Wir speichern Anfragen nur so lange, wie es für die Bearbeitung erforderlich
                ist oder gesetzliche Aufbewahrungspflichten bestehen. Vormerkungen für die
                Terminvergabe löschen wir, wenn Sie dies verlangen oder der Zweck entfällt.
              </p>
            </Sub>
          </Block>

          <Block title="5. Schriften">
            <p>
              Diese Website verwendet die Schriftart Manrope. Die Schriftdateien werden
              ausschließlich von unserem eigenen Server ausgeliefert. Es findet keine
              Verbindung zu Servern von Google oder anderen Drittanbietern statt.
            </p>
          </Block>

          <Block title="6. Externe Inhalte: Kartendarstellung (OpenStreetMap) und Fahrplanauskunft (VBB-Fahrinfo)">
            <p>
              Auf der Standortseite binden wir eine Karte des Dienstes OpenStreetMap ein
              (OpenStreetMap Foundation, St John&apos;s Innovation Centre, Cowley Road, Cambridge,
              CB4 0WS, Vereinigtes Königreich). Die Karte wird erst geladen, nachdem Sie über
              den Einwilligungsbanner oder die Schaltfläche „Karte laden“ eingewilligt haben
              (Zwei-Klick-Lösung). Erst dann wird Ihre IP-Adresse an die Server der
              OpenStreetMap Foundation übermittelt. Rechtsgrundlagen sind Ihre Einwilligung
              nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Sie können die
              Einwilligung jederzeit mit Wirkung für die Zukunft über „Cookie-Einstellungen“
              im Footer widerrufen. Für das Vereinigte Königreich besteht ein
              Angemessenheitsbeschluss der EU-Kommission. Weitere Informationen finden Sie in
              der Datenschutzerklärung von OpenStreetMap:{" "}
              <a
                href="https://osmfoundation.org/wiki/Privacy_Policy"
                rel="noopener noreferrer"
                className="font-semibold text-violet-brand underline decoration-2 underline-offset-4"
              >
                osmfoundation.org/wiki/Privacy_Policy
              </a>
              .
            </p>
            <p>
              <strong>Hinweis zum Datenschutz – Fahrplanauskunft „VBB-Fahrinfo“:</strong>{" "}
              Auf der Standortseite binden wir zusätzlich die Fahrplanauskunft „VBB-Fahrinfo“
              als Widget ein (Verkehrsverbund Berlin-Brandenburg GmbH, Hardenbergplatz 2,
              10623 Berlin). Diese Anwendung verwendet sogenannte Tracker. Näheres finden Sie
              in den Datenschutzhinweisen des VBB:{" "}
              <a
                href="https://www.vbb.de/datenschutz/"
                rel="noopener noreferrer"
                className="font-semibold text-violet-brand underline decoration-2 underline-offset-4"
              >
                www.vbb.de/datenschutz
              </a>
              . Auch dieses Widget wird erst geladen, nachdem Sie über den Einwilligungsbanner
              oder die Schaltfläche „Fahrplanauskunft laden“ eingewilligt haben; erst dann
              wird das externe Skript des VBB eingebunden und Ihre IP-Adresse an dessen Server
              übermittelt. Rechtsgrundlagen sind Ihre Einwilligung nach Art. 6 Abs. 1 lit. a
              DSGVO und § 25 Abs. 1 TDDDG; der Widerruf ist jederzeit über
              „Cookie-Einstellungen“ möglich.
            </p>
          </Block>

          <Block title="7. Lokale Speicherung (Barrierefreiheits-Einstellungen)">
            <p>
              Wenn Sie über „Ansicht anpassen“ Darstellungseinstellungen vornehmen
              (z. B. Schriftgröße, Kontrast, reduzierte Bewegung), werden diese
              ausschließlich lokal in Ihrem Browser gespeichert (localStorage). Es werden
              keine Daten an uns oder Dritte übertragen. Sie können die Einstellungen
              jederzeit im Panel zurücksetzen oder über die Browserdaten löschen. Die
              Speicherung ist für die Bereitstellung dieser ausdrücklich von Ihnen gewünschten
              Funktion erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG).
            </p>
          </Block>

          <Block title="8. Cookies und Einwilligungsverwaltung">
            <p>
              Diese Website setzt keine Analyse-, Tracking- oder Marketing-Cookies ein. Beim
              ersten Besuch informiert ein Einwilligungsbanner über die eingesetzten
              Speicherungen und Dienste. Es bestehen zwei Kategorien:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Technisch notwendig (immer aktiv):</strong> lokale Speicherung Ihrer
                Barrierefreiheits-Einstellungen (Ziffer 7) sowie Ihrer Einwilligungsauswahl
                selbst (localStorage, § 25 Abs. 2 Nr. 2 TDDDG). Es werden keine Daten an uns
                oder Dritte übertragen.
              </li>
              <li>
                <strong>Externe Inhalte (einwilligungspflichtig):</strong> das Laden der
                OpenStreetMap-Karte sowie der Fahrplanauskunft „VBB-Fahrinfo“ auf der
                Standortseite (Ziffer 6; VBB-Fahrinfo verwendet sogenannte Tracker),
                Rechtsgrundlagen Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
              </li>
            </ul>
            <p>
              Ihre Auswahl wird ausschließlich lokal in Ihrem Browser gespeichert
              (Schlüssel „hyo-consent“) und nicht an uns übertragen. Sie können Ihre
              Entscheidung jederzeit über „Cookie-Einstellungen“ im Footer oder am Ende
              dieser Seite ändern oder widerrufen; der Widerruf berührt die Rechtmäßigkeit
              der bis dahin erfolgten Verarbeitung nicht.
              {/* TODO: Bei Einführung weiterer einwilligungspflichtiger Dienste
                  (z. B. Analyse) Kategorien im Banner ergänzen. */}
            </p>
          </Block>

          <Block title="9. Verlinkung auf LinkedIn">
            <p>
              Wir verlinken auf unser Unternehmensprofil bei LinkedIn. Es handelt sich um
              einen einfachen Link ohne eingebettete Plugins; beim Besuch unserer Website
              werden keine Daten an LinkedIn übertragen. Erst wenn Sie dem Link folgen, gelten
              die Datenschutzbestimmungen der LinkedIn Ireland Unlimited Company.
            </p>
          </Block>

          <Block title="10. Ihre Rechte">
            <p>Ihnen stehen als betroffener Person folgende Rechte zu:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Auskunft über die verarbeiteten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)</li>
              <li>
                Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3
                DSGVO)
              </li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die oben genannten
              Kontaktdaten.
            </p>
          </Block>

          <Block title="11. Beschwerderecht bei der Aufsichtsbehörde">
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren
              (Art. 77 DSGVO). Zuständig für uns ist die Berliner Beauftragte für Datenschutz
              und Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin,{" "}
              <a
                href="https://www.datenschutz-berlin.de"
                rel="noopener noreferrer"
                className="font-semibold text-violet-brand underline decoration-2 underline-offset-4"
              >
                www.datenschutz-berlin.de
              </a>
              .
            </p>
          </Block>

          <Block title="12. Datensicherheit">
            <p>
              Diese Website nutzt eine TLS-Verschlüsselung. Wir treffen darüber hinaus
              technische und organisatorische Maßnahmen, um Ihre Daten gegen Verlust,
              Zerstörung, Zugriff, Veränderung und Verbreitung durch unbefugte Personen zu
              schützen.
            </p>
          </Block>

          <Block title="13. Aktualität dieser Datenschutzerklärung">
            <p>
              Stand: Juli 2026. Wir passen diese Datenschutzerklärung an, sobald sich die
              Rechtslage oder die auf dieser Website eingesetzten Dienste ändern – etwa mit
              Aufnahme des Praxisbetriebs Ende 2026.
            </p>
          </Block>
        </div>
      </Section>

      <Section surface="mint-light" id="cookies">
        <Headline size="md">Cookie-Einstellungen</Headline>
        <div className="mt-4 max-w-2xl space-y-3 leading-relaxed text-ink/85">
          <p>
            Hier können Sie Ihre Einwilligung für externe Inhalte (OpenStreetMap-Karte)
            jederzeit erteilen, ändern oder widerrufen. Analyse-, Tracking- oder
            Marketing-Cookies setzen wir nicht ein. Ihre Barrierefreiheits-Einstellungen
            werden unabhängig davon lokal gespeichert und können über „Ansicht anpassen“
            zurückgesetzt werden.
          </p>
        </div>
        <div className="mt-6">
          <CookieSettingsButton className="rounded-hyo border-2 border-violet-brand px-5 py-2.5 font-semibold text-violet-brand transition-colors hover:bg-violet-brand hover:text-white">
            Cookie-Einstellungen öffnen
          </CookieSettingsButton>
        </div>
      </Section>
    </>
  );
}
