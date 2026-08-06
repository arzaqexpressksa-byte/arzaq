import { ArrowUpRight, Cog, Zap, Wrench, Factory, Ruler, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const services = [
  { icon: Cog, title: "Service Title One" },
  { icon: Zap, title: "Service Title Two" },
  { icon: Wrench, title: "Service Title Three" },
  { icon: Factory, title: "Service Title Four" },
  { icon: Ruler, title: "Service Title Five" },
  { icon: ShieldCheck, title: "Service Title Six" },
];

export function ServicesOverview() {
  return (
    <Section id="services" tone="stone">
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <SectionHeading
          eyebrow="Services Overview"
          title="A Complete Industrial Engineering Capability"
          intro="Section intro placeholder. Briefly summarise the breadth of services offered across the region."
        />
        <Reveal delay={2}>
          <a href="#service-detail" className="btn-base btn-ghost">
            View All Services
          </a>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i % 3}>
            <a
              href="#service-detail"
              className="card-premium group flex h-full flex-col justify-between gap-10 p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-navy/12 transition-colors duration-500 group-hover:border-gold">
                  <s.icon className="h-5 w-5 text-navy transition-colors duration-500 group-hover:text-gold" strokeWidth={1.4} />
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Short service description placeholder. One or two lines summarising the offering.
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}