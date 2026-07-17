import type { ReactNode } from "react";

export type Surface = "white" | "mint" | "mint-light" | "violet" | "violet-light" | "grey";

const surfaces: Record<Surface, string> = {
  white: "bg-warm-white text-ink",
  mint: "bg-mint-brand text-ink",
  "mint-light": "bg-mint-light text-ink",
  violet: "bg-violet-brand text-white on-violet",
  "violet-light": "bg-violet-light text-ink",
  grey: "bg-soft-grey text-ink",
};

export function Section({
  surface = "white",
  id,
  children,
  className = "",
}: {
  surface?: Surface;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`${surfaces[surface]} px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, onViolet = false }: { children: ReactNode; onViolet?: boolean }) {
  return (
    <p
      className={`mb-4 text-sm font-bold tracking-[0.14em] uppercase ${
        onViolet ? "text-mint-brand" : "text-violet-brand"
      }`}
    >
      {children}
    </p>
  );
}

export function Headline({
  children,
  as: Tag = "h2",
  onViolet = false,
  size = "lg",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  onViolet?: boolean;
  size?: "xl" | "lg" | "md";
}) {
  const sizes = {
    xl: "text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08]",
    lg: "text-3xl sm:text-4xl leading-[1.12]",
    md: "text-2xl sm:text-[1.7rem] leading-[1.2]",
  };
  return (
    <Tag
      className={`max-w-3xl font-extrabold tracking-tight text-balance ${sizes[size]} ${
        onViolet ? "text-white" : "text-ink"
      }`}
    >
      {children}
    </Tag>
  );
}

export function Lead({ children, onViolet = false }: { children: ReactNode; onViolet?: boolean }) {
  return (
    <div
      className={`mt-6 max-w-2xl space-y-4 text-lg leading-relaxed ${
        onViolet ? "text-mint-light" : "text-ink/85"
      }`}
    >
      {children}
    </div>
  );
}
