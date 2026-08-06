import { Target, Eye } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const blocks = [
  {
    icon: Target,
    label: "Our Mission",
    title: "Mission Statement Heading",
    body: "Mission description placeholder. Replace this paragraph with the company mission statement exactly as written in your source material.",
    points: ["Mission point one", "Mission point two", "Mission point three"],
  },
  {
    icon: Eye,
    label: "Our Vision",
    title: "Vision Statement Heading",
    body: "Vision description placeholder. Replace this paragraph with the company vision statement exactly as written in your source material.",
    points: ["Vision point one", "Vision point two", "Vision point three"],
  },
];

export function MissionVision() {
  return (
    <Section id="mission" tone="white">
      <SectionHeading
        eyebrow="Mission & Vision"
        title="Direction, Purpose and Long-Term Intent"
        align="center"
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {blocks.map((b, i) => (
          <Reveal key={b.label} delay={i}>
            <article className="card-premium group h-full p-9 sm:p-12">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-navy/12 transition-colors duration-500 group-hover:border-gold">
                  <b.icon className="h-5 w-5 text-gold" strokeWidth={1.4} />
                </span>
                <span className="eyebrow">{b.label}</span>
              </div>
              <h3 className="mt-8 text-[clamp(1.35rem,2.6vw,1.9rem)] leading-snug font-semibold text-navy">
                {b.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{b.body}</p>
              <ul className="mt-8 space-y-3 border-t border-border pt-7">
                {b.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-charcoal">
                    <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}