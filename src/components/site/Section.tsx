import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className,
  tone = "white",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "white" | "warm" | "stone" | "navy";
}) {
  const tones = {
    white: "bg-background",
    warm: "bg-warm",
    stone: "bg-stone",
    navy: "bg-navy text-white",
  } as const;
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-20 sm:py-28 lg:py-36", tones[tone], className)}
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        <span className={cn("eyebrow", align === "left" && "rule-gold")}>{eyebrow}</span>
      </Reveal>
      <Reveal delay={1}>
        <h2
          className={cn(
            "mt-6 text-[clamp(1.9rem,4.2vw,3.25rem)] leading-[1.08] font-semibold",
            invert ? "text-white" : "text-navy",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={2}>
          <p
            className={cn(
              "mt-6 text-base leading-relaxed sm:text-lg",
              invert ? "text-white/65" : "text-muted-foreground",
            )}
          >
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}