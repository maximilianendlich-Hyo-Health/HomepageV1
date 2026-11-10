import type { ReactNode } from "react";

/**
 * Sanftes Einblenden beim Scrollen – rein per CSS (scroll-driven animation, siehe
 * `.fade-init` in globals.css). Ohne JavaScript, ohne State und ohne Beobachter pro
 * Element; Browser ohne Unterstützung zeigen den Inhalt sofort an.
 */
export function FadeIn({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`fade-init ${className}`}>{children}</div>;
}
