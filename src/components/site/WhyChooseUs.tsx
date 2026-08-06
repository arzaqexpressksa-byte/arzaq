<<<<<<<
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Compass, HardHat, LineChart, Layers, Clock, Lock } from "lucide-react";

const items = [
  { icon: Compass, title: "Reason Title One", body: "Reason description placeholder. Replace with your own supporting sentence." },
  { icon: HardHat, title: "Reason Title Two", body: "Reason description placeholder. Replace with your own supporting sentence." },
  { icon: LineChart, title: "Reason Title Three", body: "Reason description placeholder. Replace with your own supporting sentence." },
  { icon: Layers, title: "Reason Title Four", body: "Reason description placeholder. Replace with your own supporting sentence." },
  { icon: Clock, title: "Reason Title Five", body: "Reason description placeholder. Replace with your own supporting sentence." },
  { icon: Lock, title: "Reason Title Six", body: "Reason description placeholder. Replace with your own supporting sentence." },
];

export function WhyChooseUs() {
  return (
    <Section id="why" tone="warm">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Why Leading Operators Select Us"
        intro="Section intro placeholder. Summarise the differentiators that make the company the preferred partner."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i % 3}>
            <article className="card-premium group h-full p-8">
              <span className="grid h-12 w-12 place-items-center border border-navy/12 transition-colors duration-500 group-hover:border-gold">
                <item.icon className="h-5 w-5 text-navy transition-colors duration-500 group-hover:text-gold" strokeWidth={1.4} />
              </span>
              <h3 className="mt-7 text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}