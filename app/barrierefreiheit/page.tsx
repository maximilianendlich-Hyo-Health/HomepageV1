import type { Metadata } from "next";
import { Headline, Lead, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Barrierefreiheit",
  description:
    "Erklärung zur Barrierefreiheit der HYO-Website und Übersicht der individuellen Anpassungsmöglichkeiten.",
  alternates: { canonical: "/barrierefreiheit" },
};

export default function BarrierefreiheitPage() {
  return (
    <>
      <Section surface="mint">
        <Headline as="h1" size="lg">
          Barrierefreiheit
        </Headline>
        <Lead>
          <p>
            Wir möchten, dass alle Menschen unsere Inhalte gut nutzen können – unabhängig von
            Sehvermögen, Motorik, Konzentration oder verwendeten Hilfsmitteln. Die Website
            orientiert sich an den Anforderungen der WCAG 2.2 (Stufe AA).
          </p>
        </Lead>
      </Section>
      <Section surface="white">
        <Headline size="md">Ansicht anpassen</Headline>
        <Lead>
          <p>
            Über die Schaltfläche „Ansicht anpassen“ am linken unteren Bildschirmrand können Sie
            die Darstellung an Ihre Bedürfnisse anpassen – gegliedert nach Art der
            Beeinträchtigung:
          </p>
        </Lead>
        <ul className="mt-6 max-w-2xl space-y-3 leading-relaxed text-ink/85">
          <li>
            <strong>Sehen:</strong> Schriftgröße in drei Stufen, hoher Kontrast und deutlich
            hervorgehobene Links.
          </li>
          <li>
            <strong>Lesen &amp; Konzentration:</strong> erweiterte Zeilen- und Zeichenabstände
            sowie kürzere Zeilen für ein ruhigeres Schriftbild.
          </li>
          <li>
            <strong>Motorik &amp; Bedienung:</strong> größere Schaltflächen, Links und
            Formularfelder für eine leichtere Bedienung.
          </li>
          <li>
            <strong>Bewegungsempfindlichkeit:</strong> Reduzierung von Video und Animationen –
            zusätzlich respektiert die Website automatisch die Systemeinstellung
            „Bewegung reduzieren“.
          </li>
        </ul>
        <Lead>
          <p>
            Ihre Auswahl wird ausschließlich lokal in Ihrem Browser gespeichert. Die Website ist
            vollständig per Tastatur bedienbar und verwendet sichtbare Fokusmarkierungen.
          </p>
          <p>
            Informationen zur barrierefreien Erreichbarkeit unseres Standorts – Zugang,
            Aufzüge, ÖPNV-Anbindung und Empfehlungen für die Anreise – finden Sie auf der{" "}
            <a href="/standort#barrierefreie-erreichbarkeit" className="font-semibold text-violet-brand underline decoration-2 underline-offset-4">
              Standortseite
            </a>
            .
          </p>
          <p>
            Sie sind auf eine Barriere gestoßen? Wir freuen uns über Ihre Rückmeldung über die{" "}
            <a href="/kontakt" className="font-semibold text-violet-brand underline decoration-2 underline-offset-4">
              Kontaktseite
            </a>
            . {/* TODO: dedizierte Feedback-Adresse für Barrieren ergänzen */}
          </p>
        </Lead>
      </Section>
    </>
  );
}
