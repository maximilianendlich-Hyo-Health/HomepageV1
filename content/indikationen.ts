/**
 * Behandlungsspektrum (Indikationen) in Alltagssprache.
 * Die Kürzel entsprechen den Diagnosegruppen der Heilmittelverordnung (Muster 13).
 */
export type Indikation = { code: string; title: string; text: string };
export type IndikationsGruppe = { title: string; intro: string; items: Indikation[] };

export const indikationen: IndikationsGruppe[] = [
  {
    title: "Schlucken",
    intro: "Wenn Essen, Trinken oder Speichel Probleme machen.",
    items: [
      { code: "SC", title: "Schluckstörung", text: "Verschlucken, Husten oder Räuspern beim Essen und Trinken. Für Erwachsene sowie Kinder und Jugendliche." },
      { code: "SCZ", title: "Schwierigkeiten im Mund beim Schlucken", text: "Kauen fällt schwer, Essen lässt sich im Mund schlecht bewegen oder bleibt hängen. Für Erwachsene sowie Kinder und Jugendliche." },
      { code: "OFZ", title: "Zunge, Lippen und Wangen arbeiten nicht richtig mit", text: "Zum Beispiel, wenn der Mund nicht richtig schließt oder die Zunge beim Schlucken falsch arbeitet." },
    ],
  },
  {
    title: "Sprache und Sprechen",
    intro: "Wenn Worte fehlen oder das Sprechen undeutlich wird.",
    items: [
      { code: "SP5", title: "Sprachstörung (Aphasie)", text: "Nach einem Schlaganfall oder einer Hirnverletzung fällt es schwer, Wörter zu finden, Sätze zu bilden oder andere zu verstehen." },
      { code: "SP6", title: "Verwaschenes, leises oder undeutliches Sprechen (Dysarthrie)", text: "Die Sprechmuskeln sind geschwächt oder gestört, etwa bei Parkinson, ALS, MS oder nach einem Schlaganfall." },
      { code: "SP6", title: "Sprechbewegungen gelingen nicht (Sprechapraxie)", text: "Sie wissen, was Sie sagen wollen, aber der Mund findet nicht die richtigen Bewegungen." },
      { code: "SP6", title: "Gesichtslähmung (Fazialisparese)", text: "Eine Gesichtshälfte hängt oder bewegt sich nicht richtig. Das kann Sprechen, Essen und Trinken erschweren." },
      { code: "SPZ", title: "Sprechen ist durch Mund und Gesicht beeinträchtigt", text: "Das Sprechen klingt undeutlich, weil Lippen, Zunge oder Kiefer nicht richtig zusammenspielen." },
    ],
  },
  {
    title: "Stimme",
    intro: "Wenn die Stimme heiser, schwach oder weg ist.",
    items: [
      { code: "ST1", title: "Stimmprobleme mit körperlicher Ursache", text: "Zum Beispiel nach einer Operation, bei einer Stimmlippenlähmung oder bei Veränderungen an den Stimmlippen." },
      { code: "ST2", title: "Stimmprobleme durch Überlastung", text: "Die Stimme ist heiser, schwach oder ermüdet schnell, ohne dass etwas Körperliches gefunden wird." },
      { code: "ST3", title: "Stimme ist plötzlich weg", text: "Die Stimme versagt ganz (tonlos), obwohl die Stimmlippen gesund sind." },
      { code: "ST4", title: "Heisere oder brüchige Stimme ohne körperlichen Befund", text: "Die Stimme klingt anders, ohne dass eine körperliche Ursache vorliegt." },
      { code: "SF", title: "Näseln", text: "Die Stimme klingt zu nasal, oder Luft entweicht beim Sprechen durch die Nase (Rhinophonie)." },
    ],
  },
];
