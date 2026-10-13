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
      "Als Klinische Linguistin verfügt sie über mehr als zehn Jahre klinische Erfahrung in den Bereichen Neurologie, Intensivmedizin und Weaning. Sie ist klinische Expertin für Dysphagie sowie erfahrene Trainerin für FEES und Trachealkanülen-Management.",
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
      "Peter ist Mitgründer von HYO. Als Arzt und Unternehmer bringt er jahrelange Erfahrung im Aufbau hochwertiger Therapiekonzepte mit und kennt die Perspektiven zahlreicher Akteure im Gesundheitswesen – von Kliniken und Versicherungen bis zu Medizintechnik.",
      "Bei HYO unterstützt er die strategische Entwicklung und messbare Qualität.",
    ],
  },
];

/** Therapeutisches Team (Reihenfolge wie auf der Team-Seite). */
export const therapistTeam: TeamMember[] = [
  {
    name: "Maike Hawighorst",
    role: "Logopädin",
    photo: "/images/team/maike-hawighorst.jpg",
    photoBust: "/images/team/maike-hawighorst-bust.jpg",
    photoAlt: "Porträt von Maike Hawighorst",
    bio: [
      "Maike ist Logopädin und bringt mehr als sechs Jahre klinische Erfahrung mit.",
      "Ihre Schwerpunkte sind Parkinson und Forschung.",
    ],
  },
  {
    name: "Christoph Voigt",
    role: "Logopäde",
    photo: "/images/team/christoph-voigt.jpg",
    photoBust: "/images/team/christoph-voigt-bust.jpg",
    photoAlt: "Porträt von Christoph Voigt",
    bio: [
      "Christoph ist Logopäde mit mehr als zehn Jahren Erfahrung in Klinik und ambulanter Praxis.",
      "Seine Schwerpunkte liegen bei neurologischen und HNO-spezifischen Störungsbildern, der manuellen Schlucktherapie und kindlichen Schluckstörungen sowie der Dysphagietherapie.",
    ],
  },
  {
    name: "Evelyn Köppe",
    role: "Logopädin",
    photo: "/images/team/evelyn-koeppe.jpg",
    photoBust: "/images/team/evelyn-koeppe-bust.jpg",
    photoAlt: "Porträt von Evelyn Köppe",
    bio: [
      "Evelyn ist Logopädin mit rund 20 Jahren Berufserfahrung im klinischen und ambulanten Bereich.",
      "Ihre Schwerpunkte liegen auf Neurologie und Geriatrie, insbesondere auf Fazialisparesen, sowie auf der manuellen Schlucktherapie.",
    ],
  },
];
