export type TeamMember = {
  name: string;
  role: string;
  linkedIn?: string;
  bio: string[];
  photo: string;
  /** Quadratischer Büsten-Ausschnitt für runde Darstellung. */
  photoBust: string;
  photoAlt: string;
  placeholder?: false;
};

export type TeamPlaceholder = {
  placeholder: true;
};

export const knownTeam: TeamMember[] = [
  {
    name: "Corinna Schwarz",
    role: "Mitgründerin, Co-Geschäftsführerin & fachliche Leitung",
    photo: "/images/team/corinna-schwarz.jpg",
    photoBust: "/images/team/corinna-schwarz-bust.jpg",
    photoAlt: "Porträt von Corinna Schwarz",
    linkedIn: "https://www.linkedin.com/in/corinna-schwarz/",
    bio: [
      "Corinna ist Mitgründerin von HYO und verantwortet die fachliche Ausrichtung der spezialisierten Versorgung von Menschen mit Schluckstörungen und Trachealkanülen.",
      "Als Logopädin verfügt sie über mehr als zehn Jahre klinische Erfahrung in den Bereichen Neurologie, Intensivmedizin und Weaning. Sie ist klinische Expertin für Dysphagie sowie erfahrene Trainerin für FEES und Trachealkanülen-Management.",
    ],
  },
  {
    name: "Maximilian Endlich",
    role: "Mitgründer und Co-Geschäftsführer",
    photo: "/images/team/maximilian-endlich.jpg",
    photoBust: "/images/team/maximilian-endlich-bust.jpg",
    photoAlt: "Porträt von Maximilian Endlich",
    linkedIn: "https://www.linkedin.com/in/maximilian-endlich/",
    bio: [
      "Maximilian ist Mitgründer und Co-Geschäftsführer von HYO. Er verantwortet die strategische Ausrichtung, den Aufbau effizienter Versorgungsprozesse sowie die Digitalisierung des Unternehmens.",
      "Als Gesundheits- und Krankenpfleger, Pflegewissenschaftler und Unternehmer verfügt er über mehr als zehn Jahre Erfahrung im Unternehmensaufbau in der Versorgung kritisch kranker Patientinnen und Patienten.",
    ],
  },
  {
    name: "Peter Bristot",
    role: "Mitgründer",
    photo: "/images/team/peter-bristot.jpg",
    photoBust: "/images/team/peter-bristot-bust.jpg",
    photoAlt: "Porträt von Peter Bristot",
    linkedIn: "https://www.linkedin.com/in/pbristot/",
    bio: [
      "Peter ist Mitgründer von HYO. Als Arzt und Unternehmer bringt er jahrelange Erfahrung im Aufbau hochwertiger Therapiekonzepte mit und kennt die Perspektiven zahlreicher Akteure im Gesundheitswesen – von Kliniken und Versicherungen bis zu Medizintechnik und regulatorischen Institutionen, mit internationalem Schwerpunkt auf Europa.",
      "Bei HYO unterstützt er die strategische Entwicklung und den Aufbau nachhaltiger Geschäftsmodelle. Sein Anspruch: wirtschaftliche Tragfähigkeit mit einer messbaren Verbesserung der Versorgung verbinden.",
    ],
  },
];

/** Vier gleichwertige Platzhalterkarten – keine erfundenen Personen. */
export const teamPlaceholders: TeamPlaceholder[] = [
  { placeholder: true },
  { placeholder: true },
  { placeholder: true },
  { placeholder: true },
];
