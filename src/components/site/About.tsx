import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Check } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <Section id="about" tone="white">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div ref={ref} className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-stone">
            <motion.img
              style={{ y }}
              src={aboutImg}
              alt="Engineering team reviewing technical drawings"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-[112%] w-full object-cover"
            />
          </div>
          <div className="absolute -right-3 -bottom-6 hidden rounded-[18px] border border-border bg-background p-6 shadow-[0_24px_48px_-24px_rgba(11,31,51,0.28)] sm:block">
            <div className="font-display text-3xl font-semibold text-navy">1998</div>
            <div className="mt-1 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
              Established
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About the Company"
            title={
              <>
                Company Overview <span className="text-charcoal/45">Heading Placeholder</span>
              </>
            }
            intro="Company description placeholder. Replace this paragraph with the full company introduction covering history, licensing, regional presence and areas of specialisation."
          />
          <Reveal delay={3}>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              Secondary description placeholder. Add a second paragraph here describing operational
              capacity, workforce, certifications and delivery philosophy.
            </p>
          </Reveal>
          <ul className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {[
              "Key Highlight One",
              "Key Highlight Two",
              "Key Highlight Three",
              "Key Highlight Four",
            ].map((item, i) => (
              <Reveal as="li" key={item} delay={i} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
                <span className="text-sm text-charcoal">{item}</span>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={4}>
            <a href="#contact" className="btn-base btn-ghost mt-10">
              Download Company Profile
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}