import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { Eyebrow, Headline, Lead, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Dysphagie und Tracheostomie in Zahlen",
  description:
    "Interaktives Wissensdashboard: epidemiologische Daten, Risikogruppen, Befunderhebungs- und Versorgungspfade rund um Dysphagie, Tracheostomie und Trachealkanülen – mit transparenten Quellen.",
  alternates: { canonical: "/wissen/dashboard" },
};

export default function DashboardPage() {
  return (
    <>
      <Section surface="violet">
        <nav aria-label="Brotkrumen" className="text-sm">
          <ol className="flex flex-wrap items-center gap-2 text-mint-light">
            <li>
              <Link href="/wissen" className="hover:text-white hover:underline">
                Wissen
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-white">
              Dashboard
            </li>
          </ol>
        </nav>
        <div className="mt-6">
          <Eyebrow onViolet>Wissensdashboard</Eyebrow>
          <Headline as="h1" onViolet size="xl">
            Dysphagie und Tracheostomie in Zahlen
          </Headline>
          <Lead onViolet>
            <p>
              Schluckstörungen und Tracheostomien betreffen Menschen in sehr unterschiedlichen
              Lebenssituationen. Das HYO-Dashboard macht epidemiologische Daten, Risikogruppen,
              Versorgungswege und medizinische Zusammenhänge verständlich und transparent.
            </p>
          </Lead>
          <p className="mt-6 max-w-2xl rounded-hyo bg-white/10 p-4 text-[0.95rem] leading-relaxed text-mint-light">
            Das Dashboard ermöglicht keine Diagnose und gibt keine individuellen
            Therapieempfehlungen. Alle Kennzahlen sind mit Quelle, Population und Datenqualität
            ausgewiesen; Datenlücken werden offen dargestellt. Fachlich geprüft: Corinna Schwarz, fachliche Leitung (Juli 2026).
          </p>
        </div>
      </Section>

      <Section surface="mint-light">
        <Suspense
          fallback={<p className="rounded-hyo bg-white p-6 text-ink/75">Dashboard wird geladen …</p>}
        >
          <Dashboard />
        </Suspense>
      </Section>
    </>
  );
}
