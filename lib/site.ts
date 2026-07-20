/**
 * Zentrale Konstanten der HYO-Website.
 * Alle fehlenden Angaben sind eindeutig mit TODO gekennzeichnet
 * und müssen vor dem Livegang ersetzt werden.
 */

export const site = {
  name: "HYO",
  claim: "Dysphagie. Spezialisiert.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com", // TODO: finale Domain eintragen
  openingNote: "HYO eröffnet 2026 in Berlin.",
  address: {
    building: "HYO im MEDICUM Friedrichshain",
    street: "Matthiasstraße 7",
    zip: "10249",
    city: "Berlin",
    district: "Berlin-Friedrichshain",
  },
  contact: {
    email: "maximilian.endlich@hyo-health.de",
    phone: "+49 151 72887811",
    phoneHref: "tel:+4915172887811",
    primaryContactName: "Corinna Schwarz",
    primaryContactLinkedIn: "https://www.linkedin.com/in/corinna-schwarz/",
  },
  linkedInCompany: "https://de.linkedin.com/company/hyo-health",
  /** Sitz der Gesellschaft und Registerangaben (Impressum, Footer). */
  legal: {
    company: "HYO Health GmbH",
    street: "Rudolfstraße 12",
    zip: "10245",
    city: "Berlin",
    country: "Deutschland",
    representedBy: "Maximilian Endlich und Corinna Schwarz (Geschäftsführer)",
    registerCourt: "Amtsgericht Berlin-Charlottenburg",
    registerNumber: "HRB 288004 B",
  },
} as const;

export const mainNav = [
  { label: "Start", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Für Patienten", href: "/fuer-patienten" },
  { label: "Für Partner", href: "/fuer-partner" },
  { label: "Wissen", href: "/wissen" },
  { label: "Team", href: "/team" },
  { label: "Karriere", href: "/karriere" },
  { label: "Standort", href: "/standort" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const cta = {
  appointment: "Termin anfragen",
  appointmentReserve: "Für Termin vormerken",
  cooperation: "Kooperation anfragen",
  handover: "Patientenübergabe besprechen",
  professionalContact: "Fachlichen Kontakt aufnehmen",
  apply: "Bei HYO bewerben",
  openings: "Offene Möglichkeiten entdecken",
  knowledge: "Zum Wissensbereich",
  contact: "Kontakt aufnehmen",
} as const;

export const mapsRouteUrl =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("MEDICUM Friedrichshain, Matthiasstraße 7, 10249 Berlin");
