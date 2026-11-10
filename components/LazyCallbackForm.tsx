"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const CallbackForm = dynamic(
  () => import("@/components/forms/CallbackForm").then((module) => module.CallbackForm),
  { ssr: false },
);

/**
 * Lädt das Rückruf-Formular (inkl. Validierungsbibliothek) erst kurz bevor es ins Bild
 * kommt. Hält das erste JavaScript der Startseite klein. Der Platzhalter hat feste
 * Mindesthöhe, damit nichts springt.
 */
export function LazyCallbackForm() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "900px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[46rem] sm:min-h-[42rem]">
      {show ? <CallbackForm /> : null}
    </div>
  );
}
