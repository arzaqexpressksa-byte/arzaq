import { motion } from "motion/react";
import heroImg from "@/assets/hero-industrial.jpg";
import { Counter } from "./Counter";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { v: 250, s: "+", l: "Statistic label placeholder", l2: "second line placeholder" },
  { v: 99, s: ".2%", l: "Statistic label placeholder", l2: "second line placeholder" },
  { v: 20, s: "+", l: "Statistic label placeholder", l2: "second line placeholder" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-navy">
      <img
        src={heroImg}
        alt="Industrial engineering facility"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-navy/55" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-navy via-navy/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-navy/90 to-transparent" />
      <div className="blueprint-grid-dark pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1280px] flex-col justify-between px-5 pt-32 pb-12 sm:px-8 lg:px-12 lg:pt-40 lg:pb-16">
        <div className="max-w-3xl">
          <h1 className="text-[clamp(2.4rem,6.2vw,4.6rem)] leading-[1.05] font-semibold text-white">
            {["Headline placeholder", "for industrial engineering", "and energy solutions"].map(
              (line, i) => (
                <motion.span
                  key={line}
                  className="block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.11, ease }}
                >
                  {line}
                </motion.span>
              ),
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="mt-6 max-w-md text-sm leading-relaxed text-white/70 sm:text-base"
          >
            Supporting paragraph placeholder. One or two short lines describing the company
            positioning and capability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.58, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#services"
              className="btn-base bg-white text-navy hover:bg-gold hover:text-white"
            >
              Explore Services
            </a>
            <a href="#contact" className="btn-base btn-invert">
              Schedule a Call
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease }}
          className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:max-w-3xl"
        >
          {stats.map((m) => (
            <div key={m.l + m.v}>
              <div className="font-display text-[2rem] leading-none font-semibold text-white sm:text-[2.35rem]">
                <Counter to={m.v} suffix={m.s} />
              </div>
              <p className="mt-3 max-w-[16rem] text-[0.78rem] leading-relaxed text-white/60">
                {m.l}
                <br />
                {m.l2}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}