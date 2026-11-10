"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { isLandingPath } from "@/lib/landing";

/** Blendet Seitenrahmen (z. B. Footer) auf Werbe-Landingpages aus. */
export function HideOnLanding({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (isLandingPath(pathname)) return null;
  return <>{children}</>;
}
