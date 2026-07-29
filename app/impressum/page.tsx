import type { Metadata } from "next";
import { Headline, Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der HYO Health GmbH.",
  robots: { index: false },
  alternates: { canonical: "/impressum" },
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-xl font-extrabold">{title}</h2>
      <div className="mt-3 max-w-2xl space-y-3 leading-relaxed text-ink/85">{children}</div>
    </section>
  );
}

export default function ImpressumPage() {
  return (
    <Section surface="white">
      <Headline as="h1" size="lg">
        Impressum
      </Headline>

      <div className="mt-10">
        <Block title="Angaben gemäß § 5 DDG">
          <p>
            {site.legal.company}
            <br />
            {site.legal.street}
            <br />
            {site.legal.zip} {site.legal.city}
            <br />
            {site.legal.country}
          </p>
          <p>
            <strong>Praxisstandort (in Vorbereitung, Eröffnung 2026):</strong>
            <br />
            {site.address.building}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </p>
        </Block>

        <Block title="Vertreten durch">
          <p>{site.legal.representedBy}</p>
        </Block>

        <Block title="Kontakt">
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
        </Block>

        <Block title="Registereintrag">
          <p>
            Eintragung im Handelsregister
            <br />
            Registergericht: {site.legal.registerCourt}
            <br />
            Registernummer: {site.legal.registerNumber}
          </p>
        </Block>

        <Block title="Steuernummer">
          <p>Steuernummer: {site.legal.taxNumber}</p>
        </Block>

        <Block title="Umsatzsteuer-Identifikationsnummer">
          {/* TODO: USt-IdNr. gemäß § 27a UStG ergänzen, sobald vorhanden */}
          <p>Wird nach Erteilung ergänzt.</p>
        </Block>

        <Block title="Berufsrechtliche Angaben">
          {/* TODO: Vor Aufnahme des Praxisbetriebs ergänzen: gesetzliche
              Berufsbezeichnungen der therapeutisch tätigen Personen,
              verleihender Staat, zuständige Aufsichtsbehörde sowie
              einschlägige berufsrechtliche Regelungen. */}
          <p>
            HYO befindet sich im Aufbau; der Praxisbetrieb ist noch nicht aufgenommen. Die
            berufsrechtlichen Angaben zu den therapeutisch tätigen Personen (gesetzliche
            Berufsbezeichnung, verleihender Staat, zuständige Aufsichtsbehörde und
            berufsrechtliche Regelungen) werden vor Aufnahme des Praxisbetriebs an dieser
            Stelle veröffentlicht.
          </p>
        </Block>

        <Block title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
          <p>
            Maximilian Endlich und Corinna Schwarz
            <br />
            {site.legal.street}, {site.legal.zip} {site.legal.city}
          </p>
        </Block>

        <Block title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
          <p>
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
          </p>
        </Block>

        <Block title="Haftung für Inhalte">
          <p>
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
            umgehend entfernen.
          </p>
        </Block>

        <Block title="Haftung für Links">
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige
            Inhalte waren nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </Block>

        <Block title="Urheberrecht">
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
            Gebrauch gestattet.
          </p>
        </Block>

        <Block title="Medizinischer Hinweis">
          <p>
            Die Inhalte dieser Website dienen der allgemeinen Information und ersetzen keine
            individuelle medizinische Untersuchung, Diagnose oder Beratung. Diese Website ist
            nicht für medizinische Notfälle geeignet. Wenden Sie sich im Notfall an den Notruf
            112 oder den ärztlichen Bereitschaftsdienst 116 117.
          </p>
        </Block>
      </div>
    </Section>
  );
}
