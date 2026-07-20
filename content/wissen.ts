import type { GeoIconName } from "@/components/GeoShapes";

/**
 * Wissensbereich – zunächst als typisierte lokale Inhalte gepflegt.
 * Die Struktur ist so angelegt, dass Artikel später ohne Umbau aus einem CMS
 * (Sanity, Payload, Contentful) oder aus MDX-Dateien geladen werden können.
 */

export type Audience = "Patienten" | "Angehörige" | "Fachpersonen" | "Kliniken" | "Pflegeeinrichtungen";

export type ArticleSection = { heading: string; paragraphs: string[]; list?: string[] };

export type Article = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  audiences: Audience[];
  tags: string[];
  updated: string; // ISO-Datum
  reviewedBy: string; // TODO bis zur fachlichen Freigabe
  featured?: boolean;
  sections: ArticleSection[];
  patientNote?: string;
  professionalNote?: string;
  sources: { label: string; url?: string }[];
  related: string[];
  cta: "termin" | "kooperation" | "kontakt";
};

export const categories: { name: string; icon: GeoIconName; topics: string[] }[] = [
  {
    name: "Dysphagie verstehen",
    icon: "arc-up",
    topics: [
      "Was ist Dysphagie?",
      "Welche Ursachen können Schluckstörungen haben?",
      "Welche Warnzeichen gibt es?",
      "Was ist stille Aspiration?",
      "Welche Risiken entstehen durch Dysphagie?",
      "Welche Rolle spielen Ernährung und Flüssigkeitsaufnahme?",
    ],
  },
  {
    name: "Diagnostik",
    icon: "ring",
    topics: [
      "Wie wird eine Schluckstörung diagnostiziert?",
      "Was ist FEES?",
      "Wie läuft eine FEES-Untersuchung ab?",
      "Was kann instrumentelle Diagnostik zeigen?",
      "Wann ist eine erneute Diagnostik sinnvoll?",
    ],
  },
  {
    name: "Therapie",
    icon: "steps",
    topics: [
      "Wie funktioniert Dysphagie-Therapie?",
      "Welche Therapieziele gibt es?",
      "Welche Rolle spielen Übungen und Kompensationsstrategien?",
      "Wie werden Kostformen angepasst?",
      "Wie wird der Therapieverlauf überprüft?",
    ],
  },
  {
    name: "Trachealkanülen",
    icon: "dot-ring",
    topics: [
      "Was ist eine Trachealkanüle?",
      "Welche Kanülenarten gibt es?",
      "Was bedeutet Trachealkanülen-Management?",
      "Welche Rolle spielen Sprechventile?",
      "Wie läuft eine Dekanülierung ab?",
      "Welche Risiken und Warnzeichen gibt es?",
    ],
  },
  {
    name: "Versorgung nach Entlassung",
    icon: "gate",
    topics: [
      "Was passiert nach dem Klinikaufenthalt?",
      "Welche Unterlagen werden benötigt?",
      "Wie gelingt ein sicherer Übergang?",
      "Welche Rolle haben Angehörige?",
      "Wie arbeiten Klinik, Pflege, Therapie und ärztliche Versorgung zusammen?",
    ],
  },
  {
    name: "Für Fachpersonen",
    icon: "half-split",
    topics: [
      "Strukturierte Übergabe bei Dysphagie",
      "Versorgungspfade nach Entlassung",
      "Kriterien für ambulante Weiterbehandlung",
      "Zusammenarbeit zwischen Klinik und ambulanter Praxis",
      "Dokumentation und Rückmeldung",
      "Fachliche Standards",
    ],
  },
];

const REVIEW_TODO = "TODO: fachliche Prüfung vor Livegang";

export const articles: Article[] = [
  {
    slug: "was-ist-dysphagie",
    title: "Was ist Dysphagie?",
    summary:
      "Dysphagie bezeichnet eine Störung des Schluckens. Der Beitrag erklärt, wie Schlucken funktioniert, woran eine Schluckstörung erkennbar sein kann und wann spezialisierte Unterstützung sinnvoll ist.",
    category: "Dysphagie verstehen",
    audiences: ["Patienten", "Angehörige", "Pflegeeinrichtungen"],
    tags: ["Dysphagie", "Grundlagen", "Warnzeichen"],
    updated: "2026-07-16",
    reviewedBy: REVIEW_TODO,
    featured: true,
    sections: [
      {
        heading: "Schlucken ist ein komplexer Vorgang",
        paragraphs: [
          "Schlucken wirkt selbstverständlich, ist aber ein fein abgestimmter Ablauf, an dem zahlreiche Muskeln und Nerven beteiligt sind. Nahrung und Flüssigkeit werden im Mund vorbereitet, durch den Rachen transportiert und in die Speiseröhre geleitet – während die Atemwege geschützt werden.",
          "Als Dysphagie wird eine Störung dieses Ablaufs bezeichnet. Sie kann einzelne Phasen des Schluckens oder den gesamten Vorgang betreffen und in sehr unterschiedlicher Ausprägung auftreten.",
        ],
      },
      {
        heading: "Mögliche Anzeichen",
        paragraphs: [
          "Eine Schluckstörung zeigt sich nicht immer durch sichtbares Verschlucken. Häufig berichtete Anzeichen sind unter anderem:",
        ],
        list: [
          "Husten oder Räuspern beim Essen und Trinken",
          "das Gefühl, dass Nahrung stecken bleibt",
          "eine veränderte, feucht klingende Stimme nach dem Schlucken",
          "verlängerte Mahlzeiten oder Vermeiden bestimmter Speisen",
          "unbeabsichtigter Gewichtsverlust",
          "wiederkehrende Atemwegsinfekte ohne klare Ursache",
        ],
      },
      {
        heading: "Warum eine Abklärung wichtig ist",
        paragraphs: [
          "Unbehandelt kann eine Dysphagie unter anderem zu Mangelernährung, Flüssigkeitsmangel und Atemwegskomplikationen beitragen und die Lebensqualität deutlich einschränken. Eine strukturierte Diagnostik zeigt, welche Ursachen vorliegen und welche therapeutischen Schritte sinnvoll sind.",
        ],
      },
    ],
    patientNote:
      "Wenn Sie eines oder mehrere dieser Anzeichen bei sich oder einer angehörigen Person beobachten, sprechen Sie Ihre behandelnde Ärztin oder Ihren behandelnden Arzt darauf an. Eine gezielte Abklärung schafft Klarheit.",
    sources: [
      { label: "TODO: Quellenangaben nach fachlicher Prüfung ergänzen (z. B. AWMF-Leitlinie Neurogene Dysphagie)" },
    ],
    related: ["wann-ist-eine-fees-untersuchung-sinnvoll", "uebergang-klinik-ambulante-versorgung"],
    cta: "termin",
  },
  {
    slug: "wann-ist-eine-fees-untersuchung-sinnvoll",
    title: "Wann ist eine FEES-Untersuchung sinnvoll?",
    summary:
      "Die fiberendoskopische Evaluation des Schluckens (FEES) macht sichtbar, was beim Schlucken im Rachen passiert. Der Beitrag erklärt Ablauf, Nutzen und typische Fragestellungen.",
    category: "Diagnostik",
    audiences: ["Patienten", "Angehörige", "Fachpersonen"],
    tags: ["FEES", "Diagnostik", "Aspiration"],
    updated: "2026-07-16",
    reviewedBy: REVIEW_TODO,
    featured: true,
    sections: [
      {
        heading: "Was FEES bedeutet",
        paragraphs: [
          "Bei der fiberendoskopischen Evaluation des Schluckens wird eine dünne flexible Kamera über die Nase eingeführt. So können Schluckvorgänge, Sekret, Rückstände und mögliche Penetration oder Aspiration beurteilt werden.",
          "Die Untersuchung wird in der Regel ohne Narkose durchgeführt und dauert meist nur kurze Zeit. Das individuelle Empfinden kann unterschiedlich sein.",
        ],
      },
      {
        heading: "Typische Fragestellungen",
        paragraphs: ["Eine FEES kann unter anderem dabei helfen, folgende Fragen zu beantworten:"],
        list: [
          "Gelangen Nahrung oder Flüssigkeit in die Atemwege – auch ohne Husten (stille Aspiration)?",
          "Welche Konsistenzen können aktuell sicher geschluckt werden?",
          "Welche Schlucktechniken oder Haltungen unterstützen den Schluckablauf?",
          "Wie verändert sich die Schluckfunktion im Therapieverlauf?",
        ],
      },
      {
        heading: "Einordnung",
        paragraphs: [
          "Ob und wann eine instrumentelle Diagnostik sinnvoll ist, wird individuell und in Abstimmung mit den behandelnden Ärztinnen und Ärzten entschieden. Sie ergänzt die klinische Untersuchung und ersetzt sie nicht.",
        ],
      },
    ],
    professionalNote:
      "Für Zuweisende: Relevante Vorbefunde, aktuelle Diagnosen und Angaben zur bisherigen Kostform erleichtern eine zielgerichtete Untersuchung und Verlaufsbeurteilung.",
    sources: [
      { label: "TODO: Quellenangaben nach fachlicher Prüfung ergänzen (z. B. Positionspapiere zur FEES, Leitlinien)" },
    ],
    related: ["was-ist-dysphagie", "was-bedeutet-trachealkanuelen-management"],
    cta: "termin",
  },
  {
    slug: "was-bedeutet-trachealkanuelen-management",
    title: "Was bedeutet Trachealkanülen-Management?",
    summary:
      "Trachealkanülen-Management umfasst die strukturierte Begleitung von Menschen mit Trachealkanüle – von Cuff-Management und Entblockungsphasen bis zur möglichen Dekanülierung.",
    category: "Trachealkanülen",
    audiences: ["Patienten", "Angehörige", "Pflegeeinrichtungen", "Fachpersonen"],
    tags: ["Trachealkanüle", "Tracheostoma", "Dekanülierung"],
    updated: "2026-07-16",
    reviewedBy: REVIEW_TODO,
    featured: true,
    sections: [
      {
        heading: "Ausgangslage",
        paragraphs: [
          "Eine Trachealkanüle sichert den Atemweg über ein Tracheostoma, eine operativ angelegte Öffnung der Luftröhre. Für die Betroffenen verändert sie Atmung, Stimme, Schlucken und Alltag – und erfordert eine abgestimmte Begleitung durch mehrere Fachdisziplinen.",
        ],
      },
      {
        heading: "Bausteine des Managements",
        paragraphs: ["Zum Trachealkanülen-Management gehören je nach individueller Situation unter anderem:"],
        list: [
          "Cuff-Management und strukturierte Entblockungsphasen",
          "Beurteilung der oberen Atemwege und der Schluckfunktion",
          "Sprechventil-Training zur Unterstützung von Stimme und Kommunikation",
          "Sekretmanagement und Förderung der Hustenfunktion",
          "Schulung von Angehörigen und Pflege",
          "Dokumentation und interdisziplinäre Abstimmung",
        ],
      },
      {
        heading: "Der Weg zur möglichen Dekanülierung",
        paragraphs: [
          "Wenn die medizinischen und funktionellen Voraussetzungen vorliegen, kann schrittweise geprüft werden, ob die Abhängigkeit von der Kanüle reduziert werden kann. Nicht jede Versorgung hat zwingend die Entfernung der Kanüle zum Ziel – entscheidend sind Sicherheit, Lebensqualität und die individuelle medizinische Situation.",
          "Entscheidungen über Kanülentyp, Entblockung und Dekanülierung erfolgen immer in Abstimmung mit den zuständigen Ärztinnen und Ärzten.",
        ],
      },
    ],
    sources: [
      { label: "TODO: Quellenangaben nach fachlicher Prüfung ergänzen (z. B. Empfehlungen der DIGAB, Fachliteratur)" },
    ],
    related: ["wann-ist-eine-fees-untersuchung-sinnvoll", "uebergang-klinik-ambulante-versorgung"],
    cta: "kontakt",
  },
  {
    slug: "uebergang-klinik-ambulante-versorgung",
    title: "Wie gelingt der Übergang von der Klinik in die ambulante Versorgung?",
    summary:
      "Nach der Entlassung entscheidet sich, ob eine begonnene Dysphagie-Behandlung nahtlos weitergeführt wird. Der Beitrag beschreibt, worauf es bei der Übergabe ankommt.",
    category: "Versorgung nach Entlassung",
    audiences: ["Angehörige", "Kliniken", "Pflegeeinrichtungen", "Fachpersonen"],
    tags: ["Entlassmanagement", "Übergabe", "Versorgungspfad"],
    updated: "2026-07-16",
    reviewedBy: REVIEW_TODO,
    featured: true,
    sections: [
      {
        heading: "Die kritische Phase nach der Entlassung",
        paragraphs: [
          "In der Klinik ist die Versorgung engmaschig organisiert. Nach der Entlassung müssen Diagnostik, Therapie, Pflege und ärztliche Betreuung neu koordiniert werden – häufig durch die Betroffenen und ihre Angehörigen selbst. In dieser Phase können Informationen verloren gehen und Behandlungen unterbrochen werden.",
        ],
      },
      {
        heading: "Was eine gute Übergabe ausmacht",
        paragraphs: ["Ein strukturierter Übergang wird erleichtert durch:"],
        list: [
          "eine frühzeitige Anmeldung bei der weiterbehandelnden Praxis – möglichst vor der Entlassung",
          "die Übergabe relevanter Befunde, z. B. Diagnosen, Diagnostikergebnisse und aktuelle Kostformempfehlung",
          "klare Zuständigkeiten zwischen Klinik, Entlassmanagement, Pflege und ambulanter Therapie",
          "eine ärztliche Verordnung für die ambulante Weiterbehandlung",
          "eine Rückmeldung der ambulanten Praxis zum Versorgungsverlauf",
        ],
      },
      {
        heading: "Die Rolle von HYO",
        paragraphs: [
          "HYO ist auf genau diesen Übergang spezialisiert: Wir nehmen Übergaben strukturiert an, führen Diagnostik und Therapie ambulant weiter und melden den Verlauf an die beteiligten Behandlerinnen und Behandler zurück.",
        ],
      },
    ],
    professionalNote:
      "Für Kliniken und Entlassmanagement: HYO nimmt bereits vor der Eröffnung 2026 Kooperationsanfragen entgegen, um Übergabeprozesse frühzeitig abzustimmen.",
    sources: [
      { label: "TODO: Quellenangaben nach fachlicher Prüfung ergänzen (z. B. Rahmenvertrag Entlassmanagement)" },
    ],
    related: ["was-ist-dysphagie", "was-bedeutet-trachealkanuelen-management"],
    cta: "kooperation",
  },
  {
    slug: "stille-aspiration",
    title: "Was ist stille Aspiration?",
    summary:
      "Nicht jede Aspiration löst Husten aus. Der Beitrag erklärt, warum stille Aspiration schwer zu erkennen ist und welche Rolle instrumentelle Diagnostik spielt.",
    category: "Dysphagie verstehen",
    audiences: ["Patienten", "Angehörige", "Pflegeeinrichtungen", "Fachpersonen"],
    tags: ["Aspiration", "Diagnostik", "Warnzeichen"],
    updated: "2026-07-16",
    reviewedBy: REVIEW_TODO,
    sections: [
      {
        heading: "Aspiration ohne Warnsignal",
        paragraphs: [
          "Als Aspiration wird das Eindringen von Nahrung, Flüssigkeit oder Speichel in die unteren Atemwege bezeichnet. Üblicherweise reagiert der Körper darauf mit Husten. Bei einer stillen Aspiration bleibt dieser Schutzreflex aus – die Aspiration ist von außen nicht erkennbar.",
          "Gerade deshalb kann sich eine stille Aspiration hinter unspezifischen Anzeichen verbergen, etwa wiederkehrenden Atemwegsinfekten, Fieber unklarer Ursache oder einer feucht klingenden Stimme.",
        ],
      },
      {
        heading: "Warum instrumentelle Diagnostik hier wichtig ist",
        paragraphs: [
          "Eine stille Aspiration lässt sich klinisch nur eingeschränkt beurteilen. Instrumentelle Verfahren wie die FEES oder die Videofluoroskopie können sichtbar machen, ob und unter welchen Bedingungen aspiriert wird – und welche Konsistenzen oder Strategien die Sicherheit unterstützen.",
        ],
      },
    ],
    patientNote:
      "Der Verdacht auf stille Aspiration sollte immer ärztlich und schlucktherapeutisch abgeklärt werden. Dieser Beitrag ersetzt keine individuelle Untersuchung.",
    sources: [
      { label: "TODO: Quellenangaben nach fachlicher Prüfung ergänzen" },
    ],
    related: ["was-ist-dysphagie", "wann-ist-eine-fees-untersuchung-sinnvoll"],
    cta: "termin",
  },
  {
    slug: "strukturierte-uebergabe-bei-dysphagie",
    title: "Strukturierte Übergabe bei Dysphagie: Was Zuweisende beitragen können",
    summary:
      "Welche Informationen eine ambulante Weiterbehandlung wirklich braucht – ein praxisorientierter Überblick für Kliniken, Entlassmanagement und ärztliche Praxen.",
    category: "Für Fachpersonen",
    audiences: ["Kliniken", "Fachpersonen"],
    tags: ["Übergabe", "Entlassmanagement", "Kooperation"],
    updated: "2026-07-16",
    reviewedBy: REVIEW_TODO,
    sections: [
      {
        heading: "Relevante Informationen für die Weiterbehandlung",
        paragraphs: ["Für eine zielgerichtete ambulante Weiterbehandlung sind insbesondere hilfreich:"],
        list: [
          "Hauptdiagnose und dysphagierelevante Nebendiagnosen",
          "Ergebnisse instrumenteller Diagnostik (FEES, Videofluoroskopie), sofern vorhanden",
          "aktuelle Kostform- und Flüssigkeitsempfehlung",
          "Informationen zu Trachealkanüle, Kanülentyp und Entblockungsstatus",
          "bisherige therapeutische Maßnahmen und Verlauf",
          "Versorgungskontext: häusliches Umfeld, Pflegeeinrichtung, außerklinische Intensivpflege",
        ],
      },
      {
        heading: "Kommunikation und Rückmeldung",
        paragraphs: [
          "Eine strukturierte Übergabe ist keine Einbahnstraße: HYO meldet Befunde, Therapieziele und Verlauf an die zuweisenden Behandlerinnen und Behandler zurück und stimmt Änderungen – etwa der Kostform oder des Kanülenmanagements – interdisziplinär ab.",
        ],
      },
    ],
    sources: [
      { label: "TODO: Quellenangaben nach fachlicher Prüfung ergänzen" },
    ],
    related: ["uebergang-klinik-ambulante-versorgung", "was-bedeutet-trachealkanuelen-management"],
    cta: "kooperation",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export const audiences: Audience[] = ["Patienten", "Angehörige", "Fachpersonen", "Kliniken", "Pflegeeinrichtungen"];
