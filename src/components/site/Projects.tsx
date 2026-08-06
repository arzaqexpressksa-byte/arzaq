import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import g1 from "@/assets/gallery-01.jpg";
import g2 from "@/assets/gallery-02.jpg";
import g3 from "@/assets/gallery-03.jpg";
import g4 from "@/assets/gallery-04.jpg";

const projects = [
  { img: g1, title: "Project Title One", meta: "Location · Year", span: "lg:col-span-2 lg:row-span-2" },
  { img: g2, title: "Project Title Two", meta: "Location · Year", span: "" },
  { img: g3, title: "Project Title Three", meta: "Location · Year", span: "" },
  { img: g4, title: "Project Title Four", meta: "Location · Year", span: "lg:col-span-2" },
];

export function Projects() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section id="projects" tone="white">
      <SectionHeading
        eyebrow="Projects & Gallery"
        title="Selected Works and Site Documentation"
        intro="Section intro placeholder. Introduce the project portfolio and delivery record."
      />

      <div className="mt-14 grid auto-rows-[220px] gap-4 sm:auto-rows-[260px] sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i % 3} className={p.span}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative h-full w-full overflow-hidden rounded-[18px] border border-border text-left"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1200}
                height={912}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              />
              <span className="absolute inset-0 bg-navy/45 transition-colors duration-500 group-hover:bg-navy/25" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <span className="min-w-0">
                  <span className="block truncate font-display text-lg font-semibold text-white">
                    {p.title}
                  </span>
                  <span className="mt-1 block text-[0.7rem] tracking-[0.16em] text-white/65 uppercase">
                    {p.meta}
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-white transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-5 right-5 grid h-11 w-11 place-items-center border border-white/25 text-white transition-colors hover:border-gold hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={projects[active].img}
              alt={projects[active].title}
              className="max-h-[82vh] w-auto max-w-full rounded-[18px] object-contain"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}