import type { GeoIconName } from "@/components/GeoShapes";

export type ServiceDetail = {
  slug: string;
  title: string;
  headline: string;
  text: string;
  items: string[];
  note?: string;
  icon: GeoIconName;
  /** Kachel-Inhalte für die Startseite (kurze, patientennahe Ansprache). */
  teaserHeadline: string;
  teaser: string;
};

export type ServiceArea = {
  id: "dysphagietherapie" | "trachealkanuelenmanagement";
  title: string;
  subline: string;
  intro: string;
  /** Optionaler patientennaher Einleitungstext für die Startseite. */
  homeIntro?: string;
  services: ServiceDetail[];
};

export const dysphagieArea: ServiceArea = {
  id: "dysphagietherapie",
  title: "Dysphagietherapie",
  subline: "Befunderhebung, funktionelles Training und sichere Strategien für den Alltag.",
  intro:
    "Schluckstörungen können Essen, Trinken, Atmung und Lebensqualität erheblich beeinflussen. Wir untersuchen die individuellen Ursachen und entwickeln eine Therapie, die medizinische Sicherheit und persönliche Ziele miteinander verbindet.",
  services: [
    {
      slug: "diagnostik-und-fees",
      teaserHeadline: "Sicher feststellen, wo das Problem liegt.",
      teaser: "Mit einer klinischen Untersuchung und der modernen FEES-Endoskopie (Schluckdiagnostik per Minikamera) machen wir Ihren Schluckakt auf dem Monitor sichtbar. So finden wir schnell und in der Regel gut verträglich heraus, welche Nahrungsmittel für Sie sicher sind.",
      title: "Befunderhebung & FEES",
      headline: "Verstehen, was beim Schlucken passiert.",
      text: "Eine sorgfältige Befunderhebung bildet die Grundlage jeder Therapie. Wir untersuchen die Schluckfunktion klinisch und setzen, wenn medizinisch angezeigt, die fiberendoskopische Evaluation des Schluckens ein. Bei der FEES wird eine dünne flexible Kamera über die Nase eingeführt. So können unter anderem Sekret, Rückstände sowie mögliche Penetration oder Aspiration beurteilt werden.",
      items: [
        "Klinische Anamnese",
        "Klinische Schluckuntersuchung",
        "Instrumentelle Befunderhebung",
        "Beurteilung verschiedener Konsistenzen",
        "Ableitung individueller Therapieziele",
        "Verlaufskontrolle",
      ],
      icon: "ring",
    },
    {
      slug: "funktionelles-training",
      teaserHeadline: "Die Schluckmuskulatur gezielt stärken.",
      teaser: "Durch gezielte Übungen mobilisieren und kräftigen wir die Muskeln von Zunge, Lippen, Kiefer und Rachen. Zudem stimulieren wir die Sensibilität im Mundraum, um den natürlichen Schluckreflex wieder zu aktivieren.",
      title: "Funktionelles Training",
      headline: "Schluckfunktionen gezielt trainieren.",
      text: "Je nach Befund trainieren wir Beweglichkeit, Kraft, Koordination und Sensibilität der am Schlucken beteiligten Strukturen. Die Übungen werden individuell ausgewählt und regelmäßig an den Therapieverlauf angepasst.",
      items: [
        "Zungenbeweglichkeit und Zungenkraft",
        "Lippen- und Kieferschluss",
        "Kehlkopfhebung",
        "Pharyngeale Funktionen",
        "Atem-Schluck-Koordination",
        "Sensorische Stimulation",
        "Funktionelle Übungen",
        "Individuelle Übungsprogramme",
      ],
      icon: "steps",
    },
    {
      slug: "schlucktechniken-und-strategien",
      teaserHeadline: "Sicher schlucken durch die richtige Technik.",
      teaser: "Wir zeigen Ihnen effektive Haltungs- und Schlucktechniken (z. B. das Chin-Tuck-Manöver), mit denen Sie Ihre Atemwege beim Essen und Trinken aktiv schützen und das Risiko, sich zu verschlucken, deutlich verringern können.",
      title: "Schlucktechniken & Strategien",
      headline: "Mehr Sicherheit durch passende Strategien.",
      text: "Bestimmte Haltungen, Schlucktechniken und kompensatorische Maßnahmen können den Schluckablauf bei ausgewählten Befunden unterstützen. Welche Strategie geeignet ist, hängt von der individuellen Befunderhebung ab.",
      items: [
        "Haltungsanpassungen",
        "Angepasste Bolusgröße",
        "Schluckmanöver",
        "Atem-Schluck-Koordination",
        "Tempo und Pausengestaltung",
        "Individuelle Sicherheitsstrategien",
      ],
      note: "Techniken wie eine Kinnsenkung können bei bestimmten Befunden hilfreich sein, sind aber nicht für jede Schluckstörung geeignet und sollten diagnostisch begründet eingesetzt werden.",
      icon: "arc-up",
    },
    {
      slug: "kost-und-ernaehrungsanpassung",
      teaserHeadline: "Genussvoll essen – ohne Angst.",
      teaser: "Wir beraten Sie und Ihre Angehörigen zur optimalen Zubereitung von Speisen, zur sicheren Anpassung von Konsistenzen und zum richtigen Andicken von Flüssigkeiten, damit das Essen schmackhaft und sicher bleibt.",
      title: "Kost- & Ernährungsanpassung",
      headline: "Sicher essen und trinken, ohne Genuss aus dem Blick zu verlieren.",
      text: "Wenn erforderlich, beraten wir zu geeigneten Konsistenzen, Portionsgrößen, Essgeschwindigkeit und zur Zubereitung von Speisen und Getränken. Anpassungen werden am individuellen Befund und an den persönlichen Bedürfnissen orientiert.",
      items: [
        "Konsistenzanpassung",
        "Sichere Zubereitung",
        "Andicken von Flüssigkeiten",
        "Ess- und Trinkhilfen",
        "Portionsgrößen",
        "Positionierung",
        "Abstimmung mit Ernährungsmedizin und Pflege",
        "Regelmäßige Überprüfung",
      ],
      note: "Angedickte Flüssigkeiten sind nicht für jede Person automatisch die beste Lösung. Entscheidungen sollten individuell diagnostisch begründet und regelmäßig überprüft werden.",
      icon: "half-split",
    },
    {
      slug: "angehoerigen-und-pflegeberatung",
      teaserHeadline: "Gemeinsam für mehr Sicherheit im Alltag.",
      teaser: "Wir schulen Ihr Umfeld: Wir zeigen Partnern und Pflegekräften, worauf beim Anreichen von Essen zu achten ist, wie die optimale Sitzposition aussieht und wie man Warnzeichen sofort erkennt.",
      title: "Angehörigen- & Pflegeberatung",
      headline: "Sicherheit entsteht im Alltag gemeinsam.",
      text: "Wir beziehen Angehörige, Pflegepersonen und weitere Beteiligte in die Therapie ein. Gemeinsam klären wir, wie Mahlzeiten sicher gestaltet, Warnzeichen erkannt und therapeutische Empfehlungen im Alltag umgesetzt werden können.",
      items: [
        "Sichere Sitzposition",
        "Essensbegleitung",
        "Angemessenes Anreichen",
        "Mundpflege",
        "Erkennen von Warnzeichen",
        "Umsetzung individueller Empfehlungen",
        "Kommunikation im Versorgungsteam",
        "Umgang mit Unsicherheiten",
      ],
      icon: "wave",
    },
  ],
};

export const trachealArea: ServiceArea = {
  id: "trachealkanuelenmanagement",
  title: "Tracheostoma und Trachealkanülenmanagement",
  subline: "Sicherer Umgang, bessere Kommunikation und ein strukturierter Weg zur möglichen Dekanülierung.",
  homeIntro:
    "Dieses Spezialgebiet richtet sich an Patientinnen und Patienten, die aufgrund schwerer neurologischer oder onkologischer Erkrankungen über einen Luftröhrenschnitt (Tracheostoma) atmen. Unser Ziel ist der sichere Umgang mit der Kanüle und – wo immer möglich – der Weg zurück zur normalen Atmung und Stimme.",
  intro:
    "Menschen mit Tracheostoma benötigen eine abgestimmte und spezialisierte Begleitung. Wir arbeiten an Atemwegssicherheit, Kommunikation, Sekretmanagement und Schluckfunktion. Wo medizinisch möglich, unterstützen wir schrittweise den Weg zur Dekanülierung.",
  services: [
    {
      slug: "trachealkanuelenmanagement",
      teaserHeadline: "Sicherheit im Umgang mit der Kanüle.",
      teaser: "Wir begleiten Sie im Alltag mit der Kanüle. Dazu gehört das kontrollierte Entblocken (Cuff-Management) unter Schutz des Schluckaktes sowie die Auswahl und Anpassung des optimalen Kanülentyps in Absprache mit Ihren Ärztinnen und Ärzten.",
      title: "Trachealkanülenmanagement",
      headline: "Sicherheit im Umgang mit der Kanüle.",
      text: "Wir beurteilen gemeinsam mit den beteiligten Fachdisziplinen, wie die Trachealkanüle im Alltag sicher eingesetzt werden kann. Dazu gehören unter anderem Cuff-Management, Entblockungsphasen, Schluckfunktion, Atmung und die Eignung des verwendeten Kanülensystems.",
      items: [
        "Cuff-Management",
        "Strukturierte Entblockungsphasen",
        "Beurteilung der oberen Atemwege",
        "Abstimmung des Kanülentyps",
        "Beobachtung der Schluckfunktion",
        "Schulung von Angehörigen und Pflege",
        "Dokumentation",
        "Interdisziplinäre Abstimmung",
      ],
      note: "Änderungen am Kanülentyp und medizinische Entscheidungen erfolgen in Abstimmung mit den zuständigen Ärztinnen und Ärzten sowie den weiteren beteiligten Fachpersonen.",
      icon: "dot-ring",
    },
    {
      slug: "sprechventil-training",
      teaserHeadline: "Zurück zur eigenen Stimme.",
      teaser: "Mit einer Trachealkanüle ist das Sprechen oft blockiert. Wir trainieren mit Ihnen den Einsatz von Sprechventilen (z. B. Passy-Muir). So lenken wir den Luftstrom wieder über die Stimmbänder, damit Sie sich wieder klar mitteilen können.",
      title: "Sprechventil-Training",
      headline: "Kommunikation und physiologischen Luftstrom fördern.",
      text: "Ein Sprechventil kann bei geeigneten Voraussetzungen den Ausatemstrom wieder über Kehlkopf, Rachen, Mund und Nase führen. Dies kann Stimme, Kommunikation, Sensibilität und weitere Funktionen unterstützen.",
      items: [
        "Prüfung der Voraussetzungen",
        "Schrittweise Belastungssteigerung",
        "Beobachtung von Atmung und Sauerstoffsättigung",
        "Stimm- und Kommunikationsanbahnung",
        "Einbindung in Alltag und Pflege",
        "Interdisziplinäre Rückmeldung",
      ],
      icon: "arc-down",
    },
    {
      slug: "kanuelen-weaning-und-dekanuelierung",
      teaserHeadline: "Schritt für Schritt zurück zur freien Atmung.",
      teaser: "Wo medizinisch möglich, ist das langfristige Ziel die Dekanülierung (Entfernung der Kanüle). Wir trainieren systematisch die Belastbarkeit Ihrer Atmung, die Kraft Ihrer Atemhilfsmuskulatur und die Schutzreflexe, bis ein sicherer Verschluss des Stomas geprüft werden kann.",
      title: "Kanülen-Entwöhnung (Weaning)",
      headline: "Schrittweise prüfen, was wieder möglich ist.",
      text: "Wenn die medizinischen und funktionellen Voraussetzungen vorliegen, begleiten wir den strukturierten Weg zur Reduktion der Kanülenabhängigkeit. Dazu können längere Entblockungsphasen, Sprechventil-Nutzung, Verschlussversuche und die Prüfung relevanter Schutzfunktionen gehören.",
      items: [
        "Atemwegsbeurteilung",
        "Entblockungsmanagement",
        "Sprechventilphasen",
        "Verschlussphasen",
        "Sekretkontrolle",
        "Hustenfunktion",
        "Schluckfunktion",
        "Belastbarkeit",
        "Interdisziplinäre Entscheidung zur Dekanülierung",
      ],
      icon: "steps",
    },
    {
      slug: "sekretmanagement-und-hustenfunktion",
      teaserHeadline: "Freie Atemwege und effektiver Schutz.",
      teaser: "Wir erarbeiten mit Ihnen Techniken zur Sekretlösung und trainieren einen kräftigen, effektiven Hustenstoß. Das kann den Absaugbedarf verringern, das Aspirationsrisiko senken und Ihr Wohlbefinden steigern.",
      title: "Sekretmanagement & Hustenschutz",
      headline: "Freie Atemwege und wirksame Schutzmechanismen unterstützen.",
      text: "Sekretmenge, Sekretkonsistenz, Hustenfunktion und Absaugbedarf beeinflussen die Sicherheit und Lebensqualität von Menschen mit Trachealkanüle. Wir erarbeiten gemeinsam geeignete Strategien und stimmen sie mit Pflege, Medizin und Physiotherapie ab.",
      items: [
        "Sekretwahrnehmung",
        "Effektiver Husten",
        "Atem-Schluck-Koordination",
        "Mund- und Tracheostomapflege",
        "Absaugmanagement in Abstimmung mit der Pflege",
        "Positionierung",
        "Flüssigkeitsmanagement nach medizinischer Freigabe",
        "Beobachtung von Warnzeichen",
      ],
      icon: "wave",
    },
    {
      slug: "interdisziplinaere-kooperation",
      teaserHeadline: "Das gesamte Netzwerk Hand in Hand.",
      teaser: "Die Versorgung eines Tracheostomas erfordert Teamarbeit. Wir stimmen uns eng mit Ihren behandelnden Ärztinnen und Ärzten, dem Pflegepersonal, Intensivpflegediensten und Sanitätshäusern ab.",
      title: "Interdisziplinäre Kooperation",
      headline: "Komplexe Versorgung braucht ein abgestimmtes Team.",
      text: "Trachealkanülenversorgung ist Teamarbeit. Wir stimmen Befunderhebung, Therapieziele und Alltagsempfehlungen eng mit den behandelnden Ärztinnen und Ärzten, Pflegepersonen, Physiotherapie, Atmungstherapie, Intensivpflegediensten, Kliniken und Hilfsmittelversorgern ab.",
      items: [
        "Hausärztliche Versorgung, HNO, Phoniatrie",
        "Pneumologie, Neurologie, Intensivmedizin",
        "Pflege und außerklinische Intensivpflege",
        "Physiotherapie und Atmungstherapie",
        "Ernährungsmedizin",
        "Hilfsmittelversorgung und Sanitätshäuser",
        "Kliniken und Rehabilitationseinrichtungen",
      ],
      icon: "gate",
    },
  ],
};

export const serviceAreas = [dysphagieArea, trachealArea];

/** Sechs Schwerpunkte-Module der Startseite. */
export const focusModules: { title: string; text: string; icon: GeoIconName }[] = [
  {
    title: "Dysphagie-Therapie",
    text: "Spezialisierte ambulante Therapie für Menschen mit Schluckstörungen, orientiert an individuellen funktionellen Zielen und medizinischen Befunden.",
    icon: "arc-up",
  },
  {
    title: "Trachealkanülen-Management",
    text: "Strukturierte Begleitung von Menschen mit Trachealkanüle sowie Unterstützung bei Versorgung, Therapie und Dekanülierungsprozessen.",
    icon: "dot-ring",
  },
  {
    title: "FEES-gestützte Befunderhebung",
    text: "Instrumentelle Befunderhebung zur fundierten Beurteilung der Schluckfunktion und zur gezielten Steuerung therapeutischer Maßnahmen.",
    icon: "ring",
  },
  {
    title: "Versorgung nach Entlassung",
    text: "Nahtlose Weiterführung der Versorgung nach einem Klinikaufenthalt oder einer stationären Rehabilitation.",
    icon: "gate",
  },
  {
    title: "Kooperation mit Kliniken und Pflege",
    text: "Enge Abstimmung mit Kliniken, Pflegeeinrichtungen, ärztlichen Praxen, Therapeutinnen und Therapeuten sowie dem Entlassmanagement.",
    icon: "half-split",
  },
  {
    title: "Strukturierte Versorgungsprozesse",
    text: "Klare Abläufe, dokumentierte Behandlungspfade und koordinierte Kommunikation zwischen allen Beteiligten.",
    icon: "steps",
  },
];

/** Kachel „Vor Ort in Partnereinrichtungen“ – gilt für beide Themengebiete. */
export const homeVisitTile = {
  title: "Vor Ort in Partnereinrichtungen",
  teaserHeadline: "Therapie direkt in der Einrichtung.",
  teaser:
    "Wenn der Weg in unsere Praxis zu beschwerlich ist, kommen wir in unsere Partnereinrichtungen: Bei entsprechender ärztlicher Verordnung führen wir Befunderhebung und Therapie direkt in kooperierenden Senioren- und Pflegeeinrichtungen sowie Einrichtungen der außerklinischen Intensivpflege durch.",
  note: "Für beide Themengebiete",
  icon: "gate" as GeoIconName,
};
