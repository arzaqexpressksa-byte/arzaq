import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import s1 from "@/assets/service-01.jpg";
import s2 from "@/assets/service-02.jpg";
import s3 from "@/assets/service-03.jpg";
import s4 from "@/assets/service-04.jpg";

const services = [
  { n: "01", img: s1, alt: "Precision machined steel components" },
  { n: "02", img: s2, alt: "Industrial electrical control room" },
  { n: "03", img: s3, alt: "Pipeline installation site" },
  { n: "04", img: s4, alt: "Technician maintaining heavy machinery" },
];

function ServiceRow({
  n,
  img,
  alt,
  reversed,
}: {
  n: string;
  img: string;
  alt: string;
  reversed: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div
        ref={ref}
        className={cn("relative", reversed ? "lg:order-2" : "lg:order-1")}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-stone">
          <motion.img
            style={{ y }}
            src={img}
            alt={alt}
            loading="lazy"
            width={1200}
            height={912}
            className="h-[114%] w-full object-cover"
          />
        </div>
        <span className="pointer-events-none absolute top-5 left-5 bg-background/90 px-3 py-1 font-display text-xs tracking-[0.3em] text-navy">
          {n}
        </span>
      </div>

      <div className={cn(reversed ? "lg:order-1" : "lg:order-2")}>
        <Reveal>
          <span className="eyebrow rule-gold">Service {n}</span>
        </Reveal>
        <Reveal delay={1}>
          <h3 className="mt-6 text-[clamp(1.6rem,3.4vw,2.5rem)] leading-tight font-semibold text-navy">
            Service Title Placeholder
          </h3>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Service description placeholder. Replace with the full description of the service,
            including scope, capability and typical applications.
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {["Bullet point one", "Bullet point two", "Bullet point three", "Bullet point four"].map(
            (b, i) => (
              <Reveal as="li" key={b} delay={i} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
                <span className="text-sm text-charcoal">{b}</span>
              </Reveal>
            ),
          )}
        </ul>
        <Reveal delay={3}>
          <a href="#contact" className="btn-base btn-ghost group mt-10">
            Enquire About This Service
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </div>
  );
}

export function ServiceDetail() {
  return (
    <Section id="service-detail" tone="white">
      <SectionHeading
        eyebrow="Detailed Services"
        title="Engineered Scope, Delivered End to End"
        intro="Section intro placeholder. Introduce the detailed service breakdown presented below."
      />
      <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-32">
        {services.map((s, i) => (
          <ServiceRow key={s.n} {...s} reversed={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}