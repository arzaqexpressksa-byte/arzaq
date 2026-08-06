import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const items = [
  { quote: "Testimonial quote placeholder. Replace with a client statement about the quality of delivery, responsiveness and technical capability.", name: "Client Name", role: "Position, Company" },
  { quote: "Testimonial quote placeholder. Replace with a client statement about the quality of delivery, responsiveness and technical capability.", name: "Client Name", role: "Position, Company" },
  { quote: "Testimonial quote placeholder. Replace with a client statement about the quality of delivery, responsiveness and technical capability.", name: "Client Name", role: "Position, Company" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const item = items[i]!;

  return (
    <Section id="testimonials" tone="white">
      <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
        <Reveal>
          <div>
            <span className="eyebrow rule-gold">Testimonials</span>
            <h2 className="mt-6 max-w-xs text-[clamp(1.7rem,3.4vw,2.5rem)] leading-tight font-semibold text-navy">
              What Our Clients Say
            </h2>
            <div className="mt-9 flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
                className="grid h-12 w-12 place-items-center border border-navy/15 text-navy transition-colors hover:border-gold hover:text-gold"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => setI((v) => (v + 1) % items.length)}
                className="grid h-12 w-12 place-items-center border border-navy/15 text-navy transition-colors hover:border-gold hover:text-gold"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="ml-3 font-display text-sm tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="card-premium relative min-h-[19rem] overflow-hidden p-9 sm:p-14">
            <Quote className="h-9 w-9 text-gold/40" strokeWidth={1.2} />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="mt-7"
              >
                <p className="font-display text-[clamp(1.1rem,2.2vw,1.6rem)] leading-snug font-medium text-navy">
                  “{item.quote}”
                </p>
                <footer className="mt-9 border-t border-border pt-6">
                  <div className="font-semibold text-navy">{item.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{item.role}</div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}