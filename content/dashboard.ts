/**
 * Datenmodell des Wissensdashboards.
 *
 * Verbindliche Regeln (siehe Briefing):
 * - Keine erfundenen medizinischen oder epidemiologischen Zahlen.
 * - Zahlen bevorzugt als Spannweiten, wenn die Studienlage heterogen ist.
 * - Jede Kennzahl mit Population, Bezugsjahr, Quelle, Evidenzqualität und Limitationen.
 * - Nicht fachlich geprüfte Kennzahlen bleiben als TODO gekennzeichnet.
 *
 * Alle Einträge unten sind fachlich zu prüfen (lastReviewed = TODO),
 * bevor die Seite live geht.
 */

export type DashboardStatistic = {
  id: string;
  title: string;
  value?: number;
  valueMin?: number;
  valueMax?: number;
  unit: string;
  year: number | string;
  population: string;
  geography: string;
  definition: string;
  sourceTitle: string;
  sourceOrganization: string;
  sourceUrl: string;
  sourceType:
    | "official-statistics"
    | "guideline"
    | "systematic-review"
    | "primary-study"
    | "routine-data"
    | "estimate";
  evidenceLevel: "high" | "moderate" | "limited";
  lastReviewed: string;
  limitations: string;
  topics: ("Dysphagie" | "Tracheostomie" | "Trachealkanüle")[];
  scope: "Deutschland" | "international";
  setting: ("stationär" | "ambulant" | "Pflege" | "Diagnostik" | "Therapie")[];
};

export const evidenceLabels = {
  high: "Hohe Datenqualität",
  moderate: "Mittlere Datenqualität",
  limited: "Begrenzte Datenlage",
} as const;

export const sourceTypeLabels: Record<DashboardStatistic["sourceType"], string> = {
  "official-statistics": "Amtliche Statistik",
  guideline: "Leitlinie",
  "systematic-review": "Systematisches Review",
  "primary-study": "Primärstudie",
  "routine-data": "Routinedaten",
  estimate: "Schätzung",
};

const TODO_REVIEW = "TODO: Zuletzt fachlich geprüft – vor Livegang ergänzen";
const TODO_STAT = "TODO: Epidemiologische Kennzahl nach fachlicher Quellenprüfung ergänzen";

export const statistics: DashboardStatistic[] = [
  {
    id: "dysphagie-schlaganfall",
    title: "Dysphagie nach Schlaganfall",
    valueMin: 37,
    valueMax: 78,
    unit: "% der untersuchten Patientinnen und Patienten",
    year: 2005,
    population: "Erwachsene in der Akutphase nach Schlaganfall",
    geography: "international",
    definition:
      "Anteil mit nachweisbarer Dysphagie; die Spannweite ergibt sich aus unterschiedlichen Untersuchungsmethoden (Screening, klinische Untersuchung, instrumentelle Diagnostik).",
    sourceTitle: "Martino R et al.: Dysphagia after stroke – incidence, diagnosis, and pulmonary complications",
    sourceOrganization: "Stroke (peer-reviewtes systematisches Review)",
    sourceUrl: "https://doi.org/10.1161/01.STR.0000190056.76543.eb",
    sourceType: "systematic-review",
    evidenceLevel: "moderate",
    lastReviewed: TODO_REVIEW,
    limitations:
      "Internationale Studien sind nur eingeschränkt auf Deutschland übertragbar. Je nach untersuchter Population und Methode werden unterschiedliche Häufigkeiten berichtet.",
    topics: ["Dysphagie"],
    scope: "international",
    setting: ["stationär", "Diagnostik"],
  },
  {
    id: "dysphagie-parkinson",
    title: "Dysphagie bei Parkinson-Syndromen",
    valueMin: 35,
    valueMax: 82,
    unit: "% je nach Erhebungsmethode",
    year: 2012,
    population: "Menschen mit idiopathischem Parkinson-Syndrom",
    geography: "international",
    definition:
      "Subjektiv berichtete Dysphagie (~35 %) gegenüber objektiv gemessener Dysphagie (bis ~82 %) – die Differenz zeigt, dass Schluckstörungen häufig unbemerkt bleiben.",
    sourceTitle: "Kalf JG et al.: Prevalence of oropharyngeal dysphagia in Parkinson's disease – a meta-analysis",
    sourceOrganization: "Parkinsonism & Related Disorders (peer-reviewte Metaanalyse)",
    sourceUrl: "https://doi.org/10.1016/j.parkreldis.2011.11.006",
    sourceType: "systematic-review",
    evidenceLevel: "moderate",
    lastReviewed: TODO_REVIEW,
    limitations:
      "In der Literatur werden unterschiedliche Spannweiten berichtet; die Ergebnisse hängen stark von Krankheitsstadium und Messmethode ab.",
    topics: ["Dysphagie"],
    scope: "international",
    setting: ["ambulant", "Diagnostik"],
  },
  {
    id: "dysphagie-post-extubation",
    title: "Dysphagie nach Intensivbehandlung und Extubation",
    valueMin: 3,
    valueMax: 62,
    unit: "% der untersuchten Patientinnen und Patienten",
    year: 2010,
    population: "Erwachsene nach endotrachealer Intubation auf Intensivstationen",
    geography: "international",
    definition:
      "Berichtete Häufigkeit von Schluckstörungen nach Extubation; die große Spannweite spiegelt heterogene Definitionen, Zeitpunkte und Diagnostikmethoden wider.",
    sourceTitle: "Skoretz SA et al.: The incidence of dysphagia following endotracheal intubation – a systematic review",
    sourceOrganization: "Chest (peer-reviewtes systematisches Review)",
    sourceUrl: "https://doi.org/10.1378/chest.09-1823",
    sourceType: "systematic-review",
    evidenceLevel: "limited",
    lastReviewed: TODO_REVIEW,
    limitations:
      "Sehr heterogene Studienlage. Je nach untersuchter Population, Intubationsdauer und Untersuchungszeitpunkt unterscheiden sich die Ergebnisse erheblich.",
    topics: ["Dysphagie", "Tracheostomie"],
    scope: "international",
    setting: ["stationär", "Diagnostik"],
  },
  {
    id: "dysphagie-hoeheres-lebensalter",
    title: "Dysphagie im höheren Lebensalter",
    unit: "%",
    year: "TODO",
    population: "Selbstständig lebende ältere Menschen bzw. Bewohnerinnen und Bewohner von Pflegeeinrichtungen",
    geography: "international / Deutschland",
    definition: TODO_STAT,
    sourceTitle: TODO_STAT,
    sourceOrganization: "TODO",
    sourceUrl: "",
    sourceType: "estimate",
    evidenceLevel: "limited",
    lastReviewed: TODO_REVIEW,
    limitations:
      "Für Deutschland liegen keine einheitlichen bevölkerungsweiten Daten vor. In der Literatur werden je nach Setting und Erhebungsmethode sehr unterschiedliche Spannweiten berichtet.",
    topics: ["Dysphagie"],
    scope: "international",
    setting: ["Pflege", "ambulant"],
  },
  {
    id: "dysphagie-kopf-hals-tumoren",
    title: "Dysphagie bei Kopf-Hals-Tumorerkrankungen",
    unit: "%",
    year: "TODO",
    population: "Menschen mit Kopf-Hals-Tumoren, vor, während und nach onkologischer Therapie",
    geography: "international",
    definition: TODO_STAT,
    sourceTitle: TODO_STAT,
    sourceOrganization: "TODO",
    sourceUrl: "",
    sourceType: "estimate",
    evidenceLevel: "limited",
    lastReviewed: TODO_REVIEW,
    limitations:
      "Die Häufigkeit hängt stark von Tumorlokalisation, Therapieform und Untersuchungszeitpunkt ab; eine einzelne Gesamtzahl wäre irreführend.",
    topics: ["Dysphagie"],
    scope: "international",
    setting: ["Therapie", "Diagnostik"],
  },
  {
    id: "krankenhausfaelle-dysphagie-deutschland",
    title: "Krankenhausfälle mit Dysphagie-Diagnose (ICD-10 R13) in Deutschland",
    unit: "Behandlungsfälle pro Jahr",
    year: "TODO",
    population: "Vollstationäre Behandlungsfälle in deutschen Krankenhäusern",
    geography: "Deutschland",
    definition: TODO_STAT,
    sourceTitle: "Krankenhausdiagnosestatistik (TODO: Bezugsjahr und Abfrage über GENESIS-Online ergänzen)",
    sourceOrganization: "Statistisches Bundesamt",
    sourceUrl: "https://www-genesis.destatis.de/",
    sourceType: "official-statistics",
    evidenceLevel: "high",
    lastReviewed: TODO_REVIEW,
    limitations:
      "Krankenhausfälle sind nicht mit der Zahl betroffener Personen gleichzusetzen. Die Statistik bildet stationäre Behandlungsfälle ab, nicht die Gesamtzahl der Menschen mit Dysphagie in Deutschland.",
    topics: ["Dysphagie"],
    scope: "Deutschland",
    setting: ["stationär"],
  },
  {
    id: "tracheotomie-prozeduren-deutschland",
    title: "Tracheotomie- und Tracheostomie-Prozeduren (OPS 5-311/5-312) in Deutschland",
    unit: "Prozeduren pro Jahr",
    year: "TODO",
    population: "Vollstationär durchgeführte Prozeduren in deutschen Krankenhäusern",
    geography: "Deutschland",
    definition: TODO_STAT,
    sourceTitle: "Fallpauschalenbezogene Krankenhausstatistik / OPS-Auswertung (TODO: Bezugsjahr ergänzen)",
    sourceOrganization: "Statistisches Bundesamt",
    sourceUrl: "https://www-genesis.destatis.de/",
    sourceType: "official-statistics",
    evidenceLevel: "high",
    lastReviewed: TODO_REVIEW,
    limitations:
      "Prozedurzahlen bilden durchgeführte Eingriffe ab, nicht die Zahl der Menschen, die dauerhaft mit Trachealkanüle leben.",
    topics: ["Tracheostomie", "Trachealkanüle"],
    scope: "Deutschland",
    setting: ["stationär"],
  },
];

/** Risikogruppen-Modul: Erkrankungen, bei denen Dysphagie häufig berichtet wird. */
export type RiskGroup = {
  condition: string;
  rangeMin?: number;
  rangeMax?: number;
  note: string;
  sourceHint: string;
};

export const riskGroups: RiskGroup[] = [
  {
    condition: "Schlaganfall (Akutphase)",
    rangeMin: 37,
    rangeMax: 78,
    note: "Je nach Untersuchungsmethode; instrumentelle Diagnostik findet mehr Fälle als Screening.",
    sourceHint: "Martino et al. 2005, systematisches Review",
  },
  {
    condition: "Parkinson-Syndrome",
    rangeMin: 35,
    rangeMax: 82,
    note: "Subjektiv berichtete gegenüber objektiv gemessener Dysphagie.",
    sourceHint: "Kalf et al. 2012, Metaanalyse",
  },
  {
    condition: "Nach Intensivbehandlung / Extubation",
    rangeMin: 3,
    rangeMax: 62,
    note: "Sehr heterogene Studienlage; abhängig von Intubationsdauer und Untersuchungszeitpunkt.",
    sourceHint: "Skoretz et al. 2010, systematisches Review",
  },
  {
    condition: "Demenz",
    note: TODO_STAT,
    sourceHint: "TODO: Quelle nach fachlicher Prüfung ergänzen",
  },
  {
    condition: "Multiple Sklerose",
    note: TODO_STAT,
    sourceHint: "TODO: Quelle nach fachlicher Prüfung ergänzen",
  },
  {
    condition: "Amyotrophe Lateralsklerose (ALS)",
    note: "Im Krankheitsverlauf entwickeln die meisten Betroffenen eine Dysphagie; genaue Kennzahl: " + TODO_STAT,
    sourceHint: "TODO: Quelle nach fachlicher Prüfung ergänzen",
  },
  {
    condition: "Kopf-Hals-Tumoren",
    note: TODO_STAT,
    sourceHint: "TODO: Quelle nach fachlicher Prüfung ergänzen",
  },
  {
    condition: "Geriatrische Multimorbidität",
    note: TODO_STAT,
    sourceHint: "TODO: Quelle nach fachlicher Prüfung ergänzen",
  },
];

/** Modul D: Mögliche Folgen und Risiken (sachlich, ohne Zahlenbehauptungen). */
export const consequences: { title: string; text: string }[] = [
  { title: "Aspiration", text: "Nahrung, Flüssigkeit oder Speichel gelangen in die unteren Atemwege." },
  { title: "Aspirationspneumonie", text: "Aspiration kann zur Entstehung von Lungenentzündungen beitragen." },
  { title: "Mangelernährung", text: "Erschwerte Nahrungsaufnahme kann die Energie- und Nährstoffversorgung gefährden." },
  { title: "Dehydratation", text: "Erschwertes Trinken kann zu Flüssigkeitsmangel führen." },
  { title: "Gewichtsverlust", text: "Ungewollter Gewichtsverlust ist ein häufiges Warnzeichen." },
  { title: "Verlängerte Krankenhausaufenthalte", text: "Komplikationen können Behandlungen verlängern." },
  { title: "Reduzierte Lebensqualität", text: "Essen und Trinken sind zentrale Bestandteile von Alltag und Teilhabe." },
  { title: "Eingeschränkte soziale Teilhabe", text: "Gemeinsame Mahlzeiten werden vermieden oder belastend erlebt." },
  { title: "Erhöhte Pflegeabhängigkeit", text: "Unterstützung bei Mahlzeiten und Beobachtung werden notwendig." },
];

/** Modul E: Diagnostikpfad. */
export const diagnosticPath = [
  { step: "Anamnese", detail: "Beschwerden, Vorgeschichte, Medikation und Alltagssituation werden erfasst." },
  { step: "Klinisches Screening", detail: "Kurze standardisierte Verfahren geben erste Hinweise auf ein Aspirationsrisiko." },
  { step: "Klinische Schluckuntersuchung", detail: "Strukturen und Schluckablauf werden ohne Instrumente untersucht." },
  { step: "Instrumentelle Diagnostik", detail: "Bei Bedarf wird der Schluckvorgang direkt sichtbar gemacht." },
  { step: "FEES", detail: "Eine dünne flexible Kamera über die Nase zeigt Sekret, Rückstände, Penetration und Aspiration." },
  { step: "Videofluoroskopie", detail: "Röntgenbasierte Darstellung des gesamten Schluckablaufs, in radiologischen Einrichtungen." },
  { step: "Therapieplanung", detail: "Aus den Befunden werden individuelle Ziele und Maßnahmen abgeleitet." },
  { step: "Verlaufskontrolle", detail: "Diagnostik wird wiederholt, um Fortschritte und Anpassungen zu prüfen." },
] as const;

/** Modul F: Tracheostomie verstehen – Begriffe für die animierte, abstrahierte Darstellung. */
export const tracheostomyTerms = [
  { term: "Tracheotomie", detail: "Operative Anlage einer Öffnung der Luftröhre (Luftröhrenschnitt)." },
  { term: "Tracheostoma", detail: "Die entstandene Öffnung zwischen Halsoberfläche und Luftröhre." },
  { term: "Trachealkanüle", detail: "Kanüle, die das Tracheostoma offen hält und den Atemweg sichert." },
  { term: "Geblockt / entblockt", detail: "Zustand des Cuffs: gefüllt (geblockt) oder entleert (entblockt)." },
  { term: "Cuff", detail: "Blockbare Manschette an der Kanüle, die die Luftröhre abdichten kann." },
  { term: "Sprechventil", detail: "Einwegventil, das die Ausatmung über den Kehlkopf leiten kann und Stimme ermöglichen kann." },
  { term: "Dekanülierung", detail: "Entfernung der Trachealkanüle nach interdisziplinärer Prüfung der Voraussetzungen." },
  { term: "Kanülen-Weaning", detail: "Strukturierte, schrittweise Reduktion der Kanülenabhängigkeit." },
  { term: "Sekretmanagement", detail: "Strategien für Sekretkontrolle, Husten und freie Atemwege." },
] as const;

/** Modul G: Versorgungspfad von der Klinik in den Alltag. */
export const carePathStations = [
  {
    station: "Akutereignis oder Erkrankung",
    professions: "Notfall- und Akutmedizin",
    needs: "Schnelle Diagnose und Stabilisierung",
    risk: "Dysphagie wird in der Akutphase nicht immer systematisch erfasst.",
    hyo: "—",
  },
  {
    station: "Klinik oder Intensivstation",
    professions: "Ärztliche Teams, Pflege, Therapie",
    needs: "Screening, Diagnostik, Ernährungssicherung",
    risk: "Befunde werden nicht immer strukturiert für die Weiterversorgung dokumentiert.",
    hyo: "Frühzeitige Kontaktaufnahme für die spätere Übernahme möglich.",
  },
  {
    station: "Diagnostik",
    professions: "HNO, Phoniatrie, Neurologie, Schlucktherapie",
    needs: "Instrumentelle Beurteilung (z. B. FEES)",
    risk: "Ergebnisse erreichen die nachversorgenden Stellen nicht immer vollständig.",
    hyo: "HYO nutzt vorhandene Befunde und führt Diagnostik ambulant weiter.",
  },
  {
    station: "Tracheotomie oder Akuttherapie",
    professions: "Intensivmedizin, Chirurgie, Pflege",
    needs: "Atemwegssicherung, Kanülenversorgung",
    risk: "Der weitere Weg der Kanülenversorgung bleibt für Betroffene oft unklar.",
    hyo: "Strukturierte Planung des ambulanten Kanülenmanagements.",
  },
  {
    station: "Rehabilitation",
    professions: "Reha-Medizin, Therapie, Pflege",
    needs: "Intensive Therapie, Belastungsaufbau",
    risk: "Nach der Reha entsteht häufig eine Versorgungslücke.",
    hyo: "Nahtlose Terminplanung für die Zeit nach der Reha.",
  },
  {
    station: "Entlassmanagement",
    professions: "Sozialdienst, Entlassmanagement, Kostenträger",
    needs: "Verordnungen, Hilfsmittel, Anschlussversorgung",
    risk: "Zuständigkeiten und Fristen sind für Angehörige schwer zu überblicken.",
    hyo: "Fester Ansprechpartner für strukturierte Übergaben.",
  },
  {
    station: "Ambulante Therapie",
    professions: "Spezialisierte Schlucktherapie, ärztliche Praxen",
    needs: "Verordnung, Befunde, Therapieziele",
    risk: "Spezialisierte ambulante Angebote sind knapp.",
    hyo: "Kernleistung von HYO: spezialisierte Dysphagie- und Kanülenversorgung.",
  },
  {
    station: "Pflege oder häusliches Umfeld",
    professions: "Pflegedienste, Angehörige, Hausärztliche Versorgung",
    needs: "Schulung, sichere Mahlzeiten, Beobachtung",
    risk: "Empfehlungen werden im Alltag ohne Begleitung schwer umsetzbar.",
    hyo: "Hausbesuche und Schulung vor Ort, wenn verordnet und möglich.",
  },
  {
    station: "Verlaufskontrolle",
    professions: "Therapie, ärztliche Versorgung",
    needs: "Wiederholte Diagnostik, Anpassung der Maßnahmen",
    risk: "Ohne Verlaufskontrolle bleiben Verbesserungen ungenutzt.",
    hyo: "Strukturierte Re-Evaluation, z. B. mit FEES.",
  },
  {
    station: "Mögliche Dekanülierung",
    professions: "Interdisziplinäres Team",
    needs: "Prüfung von Schutzfunktionen, Atemweg, Belastbarkeit",
    risk: "Ohne strukturierten Prozess bleiben Kanülen länger als nötig.",
    hyo: "Begleitung des Weaning-Prozesses in ärztlicher Abstimmung.",
  },
] as const;

/** Modul H: Mythen und Fakten. */
export const myths: { claim: string; verdict: string; explanation: string; source: string }[] = [
  {
    claim: "Wer sich nicht verschluckt, hat keine Dysphagie.",
    verdict: "Mythos",
    explanation:
      "Eine Dysphagie kann auch ohne sichtbares Verschlucken bestehen – etwa bei stiller Aspiration, bei der der Hustenreflex ausbleibt. Unauffällige Mahlzeiten schließen eine Schluckstörung nicht aus.",
    source: "TODO: Quelle nach fachlicher Prüfung ergänzen",
  },
  {
    claim: "Eine stille Aspiration verursacht immer Husten.",
    verdict: "Mythos",
    explanation:
      "Das Gegenteil kennzeichnet die stille Aspiration: Material gelangt in die Atemwege, ohne dass Husten ausgelöst wird. Genau deshalb ist sie klinisch schwer zu erkennen.",
    source: "TODO: Quelle nach fachlicher Prüfung ergänzen",
  },
  {
    claim: "Mit einer Trachealkanüle kann man grundsätzlich nicht sprechen.",
    verdict: "Mythos",
    explanation:
      "Bei geeigneten Voraussetzungen können Entblockung und ein Sprechventil den Ausatemstrom über den Kehlkopf leiten und Stimme ermöglichen. Ob das möglich ist, wird individuell und interdisziplinär geprüft.",
    source: "TODO: Quelle nach fachlicher Prüfung ergänzen",
  },
  {
    claim: "Eine Dysphagie betrifft nur ältere Menschen.",
    verdict: "Mythos",
    explanation:
      "Schluckstörungen treten in allen Altersgruppen auf – etwa nach Schlaganfall, Schädel-Hirn-Trauma, bei neurologischen Erkrankungen, nach Intensivbehandlung oder bei Tumorerkrankungen.",
    source: "TODO: Quelle nach fachlicher Prüfung ergänzen",
  },
  {
    claim: "Angedickte Flüssigkeiten sind für alle Betroffenen automatisch sicherer.",
    verdict: "Mythos",
    explanation:
      "Andicken kann bei bestimmten Befunden unterstützen, ist aber nicht pauschal die beste Lösung. Die Entscheidung sollte diagnostisch begründet und regelmäßig überprüft werden.",
    source: "TODO: Quelle nach fachlicher Prüfung ergänzen",
  },
  {
    claim: "Eine Trachealkanüle bleibt immer dauerhaft.",
    verdict: "Mythos",
    explanation:
      "Wenn die medizinischen und funktionellen Voraussetzungen vorliegen, kann eine Dekanülierung strukturiert geprüft werden. Zugleich gilt: Nicht jede Versorgung hat zwingend die Entfernung der Kanüle zum Ziel.",
    source: "TODO: Quelle nach fachlicher Prüfung ergänzen",
  },
];

/** Modul I: Glossar. */
export const glossary: { term: string; definition: string; topic: "Dysphagie" | "Diagnostik" | "Tracheostomie" }[] = [
  { term: "Dysphagie", definition: "Störung des Schluckens, die einzelne Phasen oder den gesamten Schluckvorgang betreffen kann.", topic: "Dysphagie" },
  { term: "Aspiration", definition: "Eindringen von Nahrung, Flüssigkeit oder Speichel in die unteren Atemwege.", topic: "Dysphagie" },
  { term: "Penetration", definition: "Eindringen von Material in den Kehlkopfeingang oberhalb der Stimmlippen.", topic: "Dysphagie" },
  { term: "Stille Aspiration", definition: "Aspiration ohne Husten oder andere sichtbare Schutzreaktionen.", topic: "Dysphagie" },
  { term: "Bolus", definition: "Die vorbereitete Nahrungs- oder Flüssigkeitsportion, die geschluckt wird.", topic: "Dysphagie" },
  { term: "Residuen", definition: "Rückstände von Nahrung oder Flüssigkeit, die nach dem Schlucken im Rachen verbleiben.", topic: "Dysphagie" },
  { term: "FEES", definition: "Fiberendoskopische Evaluation des Schluckens: endoskopische Untersuchung des Schluckvorgangs über die Nase.", topic: "Diagnostik" },
  { term: "Videofluoroskopie", definition: "Röntgenbasierte, bewegte Darstellung des Schluckablaufs.", topic: "Diagnostik" },
  { term: "Tracheotomie", definition: "Operative Anlage einer Öffnung der Luftröhre.", topic: "Tracheostomie" },
  { term: "Tracheostoma", definition: "Die angelegte Öffnung zwischen Halsoberfläche und Luftröhre.", topic: "Tracheostomie" },
  { term: "Trachealkanüle", definition: "Kanüle, die das Tracheostoma offen hält und den Atemweg sichert.", topic: "Tracheostomie" },
  { term: "Cuff", definition: "Blockbare Manschette an der Trachealkanüle, die die Luftröhre abdichten kann.", topic: "Tracheostomie" },
  { term: "Sprechventil", definition: "Einwegventil, das die Ausatmung über Kehlkopf, Rachen, Mund und Nase leiten kann.", topic: "Tracheostomie" },
  { term: "Dekanülierung", definition: "Entfernung der Trachealkanüle nach interdisziplinärer Prüfung.", topic: "Tracheostomie" },
  { term: "Weaning", definition: "Schrittweise Entwöhnung, z. B. von Beatmung oder Trachealkanüle.", topic: "Tracheostomie" },
  { term: "Sekretmanagement", definition: "Maßnahmen zur Kontrolle von Sekret und zur Unterstützung freier Atemwege.", topic: "Tracheostomie" },
  { term: "Kanülenwechsel", definition: "Der geplante Austausch der Trachealkanüle durch geschultes Personal.", topic: "Tracheostomie" },
  { term: "Schluckreflex", definition: "Automatisch ausgelöster Ablauf, der den Bolus sicher in die Speiseröhre transportiert.", topic: "Dysphagie" },
  { term: "Schutzreflexe", definition: "Reflexe wie Husten und Räuspern, die die Atemwege schützen.", topic: "Dysphagie" },
];
