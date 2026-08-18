import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CheckCircle2, ArrowRight, ShieldAlert, Sparkles, Wrench, Flame, Zap, Pipette } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import s1 from "@/assets/service-01.jpg";
import s2 from "@/assets/service-02.jpg";
import s3 from "@/assets/service-03.jpg";
import s4 from "@/assets/service-04.jpg";

const serviceHighlights = [
  {
    n: "01",
    id: "mechanical-engineering",
    icon: Wrench,
    title: "Mechanical Works & Structural Pre-Fabrication",
    img: s1,
    alt: "Precision industrial mechanical engineering and steel pre-fabrication",
    badge: "Structural & Pre-Fabrication",
    intro: "We specialize in the supply of fittings, flanges, fasteners, and heavy industrial mechanical products. Our mechanical engineering services span pre-fabrication, erection of steel structures, piping, tanks, silos, and installation of stationary and rotating equipment throughout Saudi Arabia.",
    bullets: [
      "Machinery installation, precision laser alignment & commissioning",
      "Overhauling of pumps, heavy compressors & industrial gearboxes",
      "Pre-fabrication & installation of steel structures, tanks & silos",
      "Preventive maintenance, troubleshooting & emergency repairs",
    ],
  },
  {
    n: "02",
    id: "certified-welding",
    icon: Flame,
    title: "Certified Welding & Fabrication Solutions",
    img: s2,
    alt: "Professional welder performing MIG/TIG structural welding",
    badge: "AWS & ASME Certified",
    intro: "At ARZAQ EXPRESS Est., our welding services are executed by certified professionals following international welding codes and standards (AWS, ASME), ensuring total safety, durability, and structural integrity in demanding oil & gas and petrochemical environments.",
    bullets: [
      "Shielded Metal Arc (SMAW) & Gas Metal Arc (GMAW/MIG)",
      "Gas Tungsten Arc (GTAW/TIG) & Flux-Cored Arc (FCAW)",
      "Structural welding, pipeline welding & pressure vessels",
      "Carbon steel, stainless steel, aluminum & alloy fabrication",
    ],
  },
  {
    n: "03",
    id: "generator-motor-repair",
    icon: Zap,
    title: "Generator & Electric Motor Winding Overhaul",
    img: s3,
    alt: "Electric motor rewinding technician servicing industrial generator control panel",
    badge: "Power & Motor Overhaul",
    intro: "Uninterrupted power systems are critical for industrial operations. We offer complete maintenance solutions for diesel and gas generators of all makes, alongside expert AC/DC electric motor rewinding and insulation to meet or exceed OEM specifications.",
    bullets: [
      "Routine preventive maintenance & emergency power restoration",
      "Engine overhaul, AVR diagnostics & electrical repairs",
      "AC/DC motor winding removal, cleaning, rewiring & insulation",
      "Explosion-proof & high-voltage motor reconditioning & testing",
    ],
  },
  {
    n: "04",
    id: "frp-rtr-hdpe",
    icon: Pipette,
    title: "FRP / RTR & HDPE Piping Solutions",
    img: s4,
    alt: "Technicians inspecting FRP and RTR industrial piping systems",
    badge: "Specialized Industrial Piping",
    intro: "Specialized Fiber Reinforced Plastic (FRP), Reinforced Thermosetting Resin (RTR), HDPE, and CPVC piping services designed for harsh chemical, marine, and water treatment environments requiring extreme chemical resistance and long service life.",
    bullets: [
      "Custom FRP/RTR piping system design, fabrication & installation",
      "HDPE butt fusion & electrofusion jointing for water & chemical lines",
      "CPVC high-temperature & high-pressure acid piping lines",
      "Chemical tank lining, hydrostatic testing & coating inspection",
    ],
  },
];

function DetailedRow({
  n,
  title,
  img,
  alt,
  badge,
  intro,
  bullets,
  reversed,
  icon: Icon,
}: (typeof serviceHighlights)[0] & { reversed: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div ref={ref} className={cn("relative", reversed ? "lg:order-2" : "lg:order-1")}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone shadow-xl border border-border">
          <motion.img
            style={{ y }}
            src={img}
            alt={alt}
            loading="lazy"
            width={1200}
            height={912}
            className="h-[112%] w-full object-cover"
          />
        </div>
        <Badge
          className="absolute top-4 left-4 bg-slate-950/80 text-amber-400 border border-amber-500/30 backdrop-blur-md text-xs font-bold px-3 py-1"
        >
          {n} · {badge}
        </Badge>
      </div>

      <div className={cn(reversed ? "lg:order-1" : "lg:order-2")}>
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <div className="rounded-lg bg-amber-500/10 p-2 text-amber-600 dark:text-amber-400">
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold tracking-widest text-amber-600 dark:text-amber-400 uppercase">
              Core Specialty {n}
            </span>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-snug">
            {title}
          </h3>
        </Reveal>

        <Reveal delay={2}>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {intro}
          </p>
        </Reveal>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {bullets.map((b, i) => (
            <Reveal key={b} delay={i * 0.1}>
              <Card className="border-border/60 bg-accent/20 p-3 shadow-none">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-foreground leading-snug">{b}</span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3} className="mt-8">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold gap-2" asChild>
            <a href="#contact">
              <span>Enquire About {title.split("&")[0]}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
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
        title="Engineered Solutions, Executed End to End"
        intro="Explore our primary industrial capabilities in detail. Every service is backed by experienced engineers, strict quality control, and commitment to international standards."
      />

      <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
        {serviceHighlights.map((s, i) => (
          <DetailedRow key={s.n} {...s} reversed={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}