"use client";

import { openConsentSettings } from "@/lib/consent";

/** Öffnet die Cookie-/Einwilligungseinstellungen erneut (Footer, Datenschutzseite). */
export function CookieSettingsButton({
  className = "text-white/90 hover:text-mint-brand hover:underline",
  children = "Cookie-Einstellungen",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button type="button" onClick={openConsentSettings} className={`text-left ${className}`}>
      {children}
    </button>
  );
}
