import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Verrät sonst per Antwort-Header, dass die Seite mit Next.js läuft.
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Bilder und Videos ändern sich selten: lange zwischenspeichern, im Hintergrund erneuern.
        source: "/:path(images|video)/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
