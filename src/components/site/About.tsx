import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CheckCircle2, Shield, Wrench, Users, Trophy, Award, FileText } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Wrench,
    title: "Multi-Disciplinary Engineering",
    desc: "Mechanical, Civil, Certified Welding, Electrical & Instrumentation under one roof.",
  },
  {
    icon: Shield,
    title: "Uncompromising Safety",
    desc: "Strict adherence to international safety codes, OSHA guidelines, and Aramco/SABIC standards.",
  },
  {
    icon: Users,
    title: "Customer-Centric Focus",
    desc: "Collaborative tailor-made solutions designed to extend equipment life & optimize efficiency.",
  },
  {
    icon: Trophy,
    title: "Skilled Technical Workforce",
    desc: "Deploying certified engineers and expert technicians equipped with modern technology.",
  },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <Section id="about" tone="white">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column: Image & Feature Badge */}
        <div ref={ref} className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone shadow-xl border border-border">
            <motion.img
              style={{ y }}
              src={aboutImg}
              alt="Arzaq Express Industrial Engineering Team in Dammam KSA"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-[112%] w-full object-cover"
            />
          </div>

          <Card className="absolute -right-4 -bottom-6 hidden sm:block max-w-xs shadow-2xl border-amber-500/30 bg-slate-950 text-white">
            <CardHeader className="pb-2">
              <Badge className="w-fit bg-amber-600 hover:bg-amber-700 text-white gap-1 text-[0.65rem] uppercase tracking-wider">
                <Award className="h-3 w-3" />
                Trusted Partner
              </Badge>
              <CardTitle className="text-lg font-bold text-amber-400 mt-1">
                ARZAQ EXPRESS Est.
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-slate-300">
              Delivering specialized industrial services across Dammam, Jubail, and the Kingdom of Saudi Arabia.
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Text Content */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About Company"
            title="Leading Industrial Services Partner in Dammam & Across Saudi Arabia"
            intro="At ARZAQ EXPRESS Est., located in Dammam, we are recognized for delivering a wide range of high-quality industrial services designed to meet the demanding needs of modern industries."
          />

          <Reveal delay={2}>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              Our areas of expertise span across mechanical engineering, civil construction, welding and fabrication, 
              electrical systems, and instrumentation services. We serve clients from various sectors, including oil and gas, 
              petrochemicals, power plants, manufacturing units, and infrastructure projects.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              Our reputation is built on a solid foundation of quality, safety, and innovation. Every project we undertake 
              reflects our commitment to excellence. We adhere to strict international standards, utilize advanced technology 
              and equipment, and deploy a highly skilled workforce to ensure every job is done right the first time.
            </p>
          </Reveal>

          {/* Highlights Grid using shadcn Cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i % 2}>
                <Card className="h-full border-border/60 bg-accent/20 hover:bg-accent/40 transition-colors shadow-sm">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="rounded-md bg-amber-500/10 p-2 text-amber-600 dark:text-amber-400 shrink-0">
                      <h.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{h.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{h.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={4} className="mt-8 flex flex-wrap gap-4">
            <Button
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold gap-2 shadow"
              asChild
            >
              <a href="/business/profile.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" />
                <span>Download Official Profile PDF</span>
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Our Team</a>
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}