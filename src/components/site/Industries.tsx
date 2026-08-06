import { Fuel, Droplets, Building2, Ship, Zap, Boxes } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const industries = [
  { icon: Fuel, name: "Industry One" },
  { icon: Droplets, name: "Industry Two" },
  { icon: Building2, name: "Industry Three" },
  { icon: Ship, name: "Industry Four" },
  { icon: Zap, name: "Industry Five" },
  { icon: Boxes, name: "Industry Six" },
];

export function Industries() {
  return (
    <Section id="industries" tone="warm">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Sectors Across the Gulf Region"
        align="center"
        intro="Section intro placeholder. Describe the industries and markets the company supports."
      />
      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, i) => (
          <Reveal key={ind.name} delay={i % 3}>
            <div className="group flex h-full items-center gap-5 bg-background p-8 transition-colors duration-500 hover:bg-stone">
              <span className="grid h-12 w-12 shrink-0 place-items-center border border-navy/12 transition-colors duration-500 group-hover:border-gold">
                <ind.icon className="h-5 w-5 text-navy transition-colors duration-500 group-hover:text-gold" strokeWidth={1.4} />
              </span>
              <div className="min-w-0">
                <h3 className="truncate font-display text-base font-semibold text-navy">{ind.name}</h3>
                <p className="mt-1 truncate text-sm text-muted-foreground">Industry description</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}