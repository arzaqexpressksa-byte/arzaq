import { ShieldCheck, HardHat, Clock, Award, Cpu, Wrench } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const strengths = [
  {
    icon: Award,
    title: "AWS & ASME Certified Welders",
    desc: "Qualified professional welders experienced in SMAW, TIG, MIG, FCAW, and SAW for high-pressure pipelines and structural steel.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology & Equipment",
    desc: "Deploying state-of-the-art laser alignment tools, motor testing gear, dynamic balancing machines, and fusion welding equipment.",
  },
  {
    icon: HardHat,
    title: "Zero Compromise Safety Culture",
    desc: "Enforcing strict HSE protocols, personal protective equipment (PPE) requirements, and hazard risk assessments on every job site.",
  },
  {
    icon: Clock,
    title: "Rapid Emergency Response",
    desc: "Dedicated mobile repair units for generator breakdowns, dewatering pump deployment, and urgent pipeline leak sealing.",
  },
  {
    icon: Wrench,
    title: "Complete In-House Pre-Fabrication",
    desc: "Off-site workshop pre-fabrication reduces site downtime and guarantees precision fitment before final field installation.",
  },
  {
    icon: ShieldCheck,
    title: "Saudi Vision 2030 Commitment",
    desc: "Actively contributing to national industrial localization (Saudization), regional infrastructure growth, and sustainable engineering.",
  },
];

export function Strengths() {
  return (
    <Section id="strengths" tone="navy" className="bg-slate-950 text-white">
      <div className="blueprint-grid-dark pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative">
        <SectionHeading
          eyebrow="Core Strengths"
          title="Capabilities That Guarantee Project Success"
          intro="What distinguishes ARZAQ EXPRESS Est. as a reliable engineering and contracting partner in KSA."
          invert
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s, i) => (
            <Reveal key={s.title} delay={i % 3}>
              <Card className="h-full border-slate-800 bg-slate-900/80 text-white hover:bg-slate-900 transition-all duration-300 hover:border-amber-500/50 shadow-xl group">
                <CardHeader className="pb-2">
                  <div className="rounded-xl bg-slate-800 p-3 text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors w-fit">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-bold text-white mt-4 group-hover:text-amber-400 transition-colors">
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}