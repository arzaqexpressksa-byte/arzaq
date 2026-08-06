import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Gauge, Award } from "lucide-react";
import heroImg from "@/assets/hero-industrial.jpg";
import { Counter } from "./Counter";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-warm pt-28 pb-16 lg:pt-32 lg:pb-0">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-navy/[0.07] lg:block" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
        <div className="scan-line h-px w-full bg-gold/40" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-14 px-5 sm:px-8 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-12">
        <div className="max-w-2xl py-6 lg:py-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="eyebrow rule-gold"
          >
            Tagline Placeholder
          </motion.span>

          <h1 className="mt-7 text-[clamp(2.35rem,6.6vw,4.75rem)] leading-[1.02] font-semibold text-navy">
            {["Headline Placeholder", "for an Industrial", "Engineering Leader"].map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.11, ease }}
              >
                {i === 2 ? <span className="text-charcoal/55">{line}</span> : line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Supporting paragraph placeholder. Two to three lines describing the company positioning,
            regional reach and engineering capability. Replace this text with your own content.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.58, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#services" className="btn-base btn-solid group">
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-base btn-ghost">
              Talk to an Engineer
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-navy/10 pt-9 sm:grid-cols-3"
          >
            {[
              { v: 25, s: "+", l: "Years of Operation" },
              { v: 480, s: "+", l: "Projects Delivered" },
              { v: 99, s: "%", l: "Client Retention" },
            ].map((m) => (
              <div key={m.l}>
                <div className="font-display text-[2rem] leading-none font-semibold text-navy sm:text-[2.4rem]">
                  <Counter to={m.v} suffix={m.s} />
                </div>
                <div className="mt-2 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {m.l}
                </div>
              </div>
            ))}
          </motion.div>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.72rem] tracking-[0.14em] text-muted-foreground uppercase">
            {[
              { icon: ShieldCheck, t: "ISO Certified" },
              { icon: Gauge, t: "HSE Compliant" },
              { icon: Award, t: "Approved Vendor" },
            ].map(({ icon: Icon, t }) => (
              <span key={t} className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                {t}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease }}
          className="relative pb-16 lg:pb-0"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px] bg-navy sm:aspect-[5/4] lg:aspect-[4/5]">
            <img
              src={heroImg}
              alt="Industrial engineering facility at dusk"
              width={1280}
              height={1600}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-navy/25" />
            <div className="blueprint-grid-dark pointer-events-none absolute inset-0 opacity-40" />
          </div>

          <div className="pointer-events-none absolute -top-4 -right-3 hidden h-24 w-24 border-t border-r border-gold/60 sm:block" />
          <div className="pointer-events-none absolute -bottom-4 -left-3 hidden h-24 w-24 border-b border-l border-gold/60 sm:block lg:-bottom-8" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="absolute bottom-4 -left-1 w-[min(17rem,86%)] rounded-[18px] border border-white/60 bg-white/85 p-5 shadow-[0_24px_48px_-24px_rgba(11,31,51,0.35)] backdrop-blur-md sm:-left-6 lg:bottom-12"
          >
            <div className="eyebrow">Statistic Card</div>
            <div className="mt-3 font-display text-3xl font-semibold text-navy">
              <Counter to={1200} suffix="+" />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Metric label placeholder</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease }}
            className="absolute top-6 -right-1 hidden w-[13.5rem] rounded-[18px] border border-white/60 bg-white/85 p-5 shadow-[0_24px_48px_-24px_rgba(11,31,51,0.35)] backdrop-blur-md sm:block sm:-right-6"
          >
            <div className="eyebrow">Uptime</div>
            <div className="mt-3 font-display text-3xl font-semibold text-navy">
              <Counter to={99} suffix=".8%" />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Metric label placeholder</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}