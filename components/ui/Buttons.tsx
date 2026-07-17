import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "on-violet" | "on-violet-outline";

const base =
  "inline-flex items-center gap-2 rounded-hyo px-6 py-3.5 text-[0.95rem] font-semibold " +
  "transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 " +
  "motion-reduce:hover:translate-y-0";

const variants: Record<Variant, string> = {
  primary: "bg-violet-brand text-white hover:bg-violet-deep",
  secondary:
    "border-2 border-violet-brand bg-transparent text-violet-brand hover:bg-violet-brand hover:text-white",
  "on-violet": "bg-mint-brand text-ink hover:bg-mint-light",
  "on-violet-outline":
    "border-2 border-mint-brand bg-transparent text-mint-light hover:bg-mint-brand hover:text-ink",
};

export function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
    >
      <path
        d="M2 8h11M9 3.5 13.5 8 9 12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  children,
  arrow = true,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  arrow?: boolean;
}) {
  return (
    <Link href={href} className={`group ${base} ${variants[variant]}`}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function SubmitButton({
  children,
  variant = "primary",
  pending,
}: {
  children: ReactNode;
  variant?: Variant;
  pending?: boolean;
}) {
  return (
    <button type="submit" disabled={pending} className={`${base} ${variants[variant]} disabled:opacity-60`}>
      {pending ? "Wird gesendet …" : children}
    </button>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 font-semibold text-violet-brand underline decoration-2 underline-offset-4 hover:text-violet-deep"
    >
      {children}
      <Arrow />
    </Link>
  );
}
