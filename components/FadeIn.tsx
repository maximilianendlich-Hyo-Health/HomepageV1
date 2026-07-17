"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Sanftes Einblenden beim Scrollen. Bei `prefers-reduced-motion` sofort sichtbar (CSS). */
export function FadeIn({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-init ${visible ? "fade-in" : ""} ${className}`}>
      {children}
    </div>
  );
}
