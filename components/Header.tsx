"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { mainNav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Menü bei Seitenwechsel schließen (abgeleiteter Zustand während des Renderns,
  // siehe react.dev "You Might Not Need an Effect")
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Hintergrund-Scroll sperren, solange das mobile Menü offen ist
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-warm-white/95 backdrop-blur">
      <div className="mx-auto flex h-[74px] w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" aria-label="HYO – zur Startseite" className="shrink-0">
          <Logo height={30} priority />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {mainNav.slice(1).map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-[0.95rem] font-semibold transition-colors hover:text-violet-brand ${
                      active ? "text-violet-brand underline decoration-2 underline-offset-8" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-hyo border-2 border-violet-brand text-violet-brand lg:hidden"
        >
          <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            {open ? (
              <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-ink/8 bg-warm-white lg:hidden">
          <nav aria-label="Mobile Navigation" className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
            <ul className="space-y-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-hyo px-3 py-3 text-lg font-semibold text-ink hover:bg-mint-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
