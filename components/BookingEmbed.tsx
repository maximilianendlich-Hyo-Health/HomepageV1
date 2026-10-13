import { booking } from "@/lib/site";

/**
 * Online-Terminbuchung (Anbieter: tinana.de), direkt eingebettet.
 * Hinweis zum Datenschutz: siehe Datenschutzerklärung, Ziffer 6.
 */
export function BookingEmbed() {
  return (
    <iframe
      title="Online-Terminbuchung bei HYO (Anbieter: tinana.de)"
      src={booking.embedUrl}
      width="100%"
      height="640"
      frameBorder="0"
      style={{ borderRadius: 8, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
    />
  );
}
