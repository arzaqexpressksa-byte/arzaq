import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const values = [
  { n: "01", title: "Value One", body: "Value description placeholder." },
  { n: "02", title: "Value Two", body: "Value description placeholder." },
  { n: "03", title: "Value Three", body: "Value description placeholder." },
  { n: "04", title: "Value Four", body: "Value description placeholder." },
  { n: "05", title: "Value Five", body: "Value description placeholder." },
  { n: "06", title: "Value Six", body: "Value description placeholder." },
];

export function CoreValues() {
  return (
    <Section id="values" tone="navy" className="overflow-hidden">
      <div className="blueprint-grid-dark pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative">
        <SectionHeading
          eyebrow="Core Values"
          title="The Principles Behind Every Project"
          intro="Section intro placeholder. Introduce the values that define how the organisation operates."
          invert
        />
        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.n} delay={i % 3}>
              <div className="group h-full bg-navy p-8 transition-colors duration-500 hover:bg-white/[0.04] sm:p-10">
                <span className="font-display text-xs tracking-[0.3em] text-gold">{v.n}</span>
                <h3 className="mt-6 text-xl font-semibold text-white">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{v.body}</p>
                <span className="mt-7 block h-px w-9 bg-gold transition-all duration-500 group-hover:w-20" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}