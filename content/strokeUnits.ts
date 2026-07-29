/**
 * Fachversorgung in Berlin und Umgebung (Stand Juli 2026).
 *
 * Stroke Units: Zertifizierung Deutsche Schlaganfall-Gesellschaft (DSG).
 * Parkinson-Fachzentren: Einrichtungen mit Parkinson-Komplexbehandlung bzw.
 * Fachklinik-/Zentrums-Status (u. a. dPV, Parkinsonzentrum Berlin-Brandenburg).
 * Standorte per OpenStreetMap-Geokodierung. Angaben ohne Gewähr – maßgeblich
 * sind die aktuellen Verzeichnisse der Fachgesellschaften.
 * Autorin: Corinna Schwarz.
 */
export type StrokeUnit = {
  name: string;
  address: string;
  lat: number;
  lng: number;
};

export const strokeUnits: StrokeUnit[] = [
  {
    name: "Charité – Campus Mitte",
    address: "Charitéplatz 1, 10117 Berlin",
    lat: 52.52585,
    lng: 13.37776,
  },
  {
    name: "Charité – Campus Virchow-Klinikum",
    address: "Augustenburger Platz 1, 13353 Berlin",
    lat: 52.54223,
    lng: 13.34735,
  },
  {
    name: "Charité – Campus Benjamin Franklin",
    address: "Hindenburgdamm 30, 12203 Berlin",
    lat: 52.44191,
    lng: 13.32054,
  },
  {
    name: "Vivantes Klinikum im Friedrichshain",
    address: "Landsberger Allee 49, 10249 Berlin",
    lat: 52.52586,
    lng: 13.44063,
  },
  {
    name: "Vivantes Klinikum Neukölln",
    address: "Rudower Straße 48, 12351 Berlin",
    lat: 52.43807,
    lng: 13.46126,
  },
  {
    name: "Vivantes Auguste-Viktoria-Klinikum",
    address: "Rubensstraße 125, 12157 Berlin",
    lat: 52.46431,
    lng: 13.34614,
  },
  {
    name: "Vivantes Humboldt-Klinikum",
    address: "Am Nordgraben 2, 13509 Berlin",
    lat: 52.59018,
    lng: 13.30476,
  },
  {
    name: "Vivantes Klinikum Spandau",
    address: "Neue Bergstraße 6, 13585 Berlin",
    lat: 52.5497,
    lng: 13.20691,
  },
  {
    name: "Jüdisches Krankenhaus Berlin",
    address: "Heinz-Galinski-Straße 1, 13347 Berlin",
    lat: 52.55538,
    lng: 13.37021,
  },
  {
    name: "BG Klinikum Unfallkrankenhaus Berlin (ukb)",
    address: "Warener Straße 7, 12683 Berlin",
    lat: 52.51917,
    lng: 13.56832,
  },
  {
    name: "DRK Kliniken Berlin Köpenick",
    address: "Salvador-Allende-Straße 2-8, 12559 Berlin",
    lat: 52.43899,
    lng: 13.59448,
  },
  {
    name: "Park-Klinik Weißensee",
    address: "Schönstraße 80, 13086 Berlin",
    lat: 52.55492,
    lng: 13.45185,
  },
  {
    name: "Sana Klinikum Lichtenberg",
    address: "Fanningerstraße 32, 10365 Berlin",
    lat: 52.51328,
    lng: 13.4959,
  },
  {
    name: "Bundeswehrkrankenhaus Berlin",
    address: "Scharnhorststraße 13, 10115 Berlin",
    lat: 52.53484,
    lng: 13.37114,
  },
  {
    name: "St. Joseph Krankenhaus Berlin-Tempelhof",
    address: "Wüsthoffstraße 15, 12101 Berlin",
    lat: 52.47814,
    lng: 13.37295,
  },
];

/** Fachzentren für Parkinson (Auswahl mit belegter Spezialisierung; wird laufend ergänzt). */
export const parkinsonCenters: StrokeUnit[] = [
  {
    name: "Charité – Hochschulambulanz für Bewegungsstörungen (Campus Mitte)",
    address: "Charitéplatz 1, 10117 Berlin",
    lat: 52.52585,
    lng: 13.37776,
  },
  {
    name: "Jüdisches Krankenhaus Berlin – Parkinson-Komplexbehandlung",
    address: "Heinz-Galinski-Straße 1, 13347 Berlin",
    lat: 52.55538,
    lng: 13.37021,
  },
  {
    name: "Kliniken im Theodor-Wenzel-Werk (TWW) – Parkinson-Komplexbehandlung",
    address: "Potsdamer Chaussee 69, 14129 Berlin",
    lat: 52.42263,
    lng: 13.20526,
  },
  {
    name: "Neurologisches Fachkrankenhaus für Bewegungsstörungen/Parkinson Beelitz (Parkinsonzentrum Berlin-Brandenburg)",
    address: "Paracelsusring 6a, 14547 Beelitz-Heilstätten",
    lat: 52.26744,
    lng: 12.92372,
  },
];
