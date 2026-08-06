import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const stats = [
  { v: 25, s: "+", l: "Statistic Label One" },
  { v: 480, s: "+", l: "Statistic Label Two" },
  { v: 150, s: "+", l: "Statistic Label Three" },
  { v: 12, s: "", l: "Statistic Label Four" },
];

const steps = [
  { n: "01", t: "Process Step One", d: "Step description placeholder." },
  { n: "02", t: "Process Step Two", d: "Step description placeholder." },
  { n: "03", t: "Process Step Three", d: "Step description placeholder." },
  { n: "04", t: "Process Step Four", d: "Step description placeholder." },
  { n: "05", t: "Process Step Five", d: "Step description placeholder." },
];

export function Strengths() {
  return (
    <>
      <Section id="strengths" tone="navy" className="overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="blueprint-grid-dark pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((st, i) => (
            <Reveal key={st.l} delay={i}>
              <div className="border-l border-white/15 pl-6">
                <div className="font-display text-[clamp(2.2rem,5vw,3.25rem)] leading-none font-semibold text-white">
                  <Counter to={st.v} suffix={st.s} />
                </div>
                <div className="mt-3 text-[0.7rem] tracking-[0.18em] text-white/50 uppercase">
                  {st.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="process" tone="stone">
        <SectionHeading
          eyebrow="Company Strengths"
          title="A Disciplined Delivery Process"
          intro="Section intro placeholder. Describe the delivery methodology from enquiry through to handover."
        />
        <ol className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i % 5} className="h-full">
              <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-warm">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rotate-45 bg-gold" />
                  <span className="h-px flex-1 bg-border transition-colors duration-500 group-hover:bg-gold/50" />
                </div>
                <span className="mt-6 block font-display text-xs tracking-[0.3em] text-gold">{s.n}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-navy">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}