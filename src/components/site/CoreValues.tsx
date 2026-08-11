import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { ShieldCheck, HeartHandshake, HardHat, Scale, Lightbulb, Users2, ClockCheck, Leaf } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const values = [
  {
    n: "01",
    icon: ShieldCheck,
    title: "Quality Excellence",
    body: "We are committed to delivering services and solutions that meet the highest standards of quality and performance.",
  },
  {
    n: "02",
    icon: HeartHandshake,
    title: "Customer Focus",
    body: "Our clients are at the center of everything we do. We listen, understand, and tailor our services to meet their specific needs.",
  },
  {
    n: "03",
    icon: HardHat,
    title: "Safety First",
    body: "We maintain strict safety protocols to protect our team, our clients, and the environment in every project we undertake.",
  },
  {
    n: "04",
    icon: Scale,
    title: "Integrity & Transparency",
    body: "We operate with honesty, accountability, and clear communication, building trust with our clients and partners.",
  },
  {
    n: "05",
    icon: Lightbulb,
    title: "Innovation & Technology",
    body: "We embrace modern technologies and innovative techniques to improve efficiency and stay ahead in the industrial sector.",
  },
  {
    n: "06",
    icon: Users2,
    title: "Teamwork & Collaboration",
    body: "We believe in the power of collaboration—working together internally and with our clients to achieve shared success.",
  },
  {
    n: "07",
    icon: ClockCheck,
    title: "Reliability & Commitment",
    body: "We stand by our promises and ensure timely delivery, consistent performance, and dependable support.",
  },
  {
    n: "08",
    icon: Leaf,
    title: "Sustainability & Responsibility",
    body: "We are committed to responsible practices that support environmental protection and sustainable growth.",
  },
];

export function CoreValues() {
  return (
    <Section id="values" tone="navy" className="overflow-hidden bg-slate-950 text-white">
      <div className="blueprint-grid-dark pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative">
        <SectionHeading
          eyebrow="Core Values"
          title="The Principles Driving Our Engineering Excellence"
          intro="Our core values guide every decision, project execution, and client interaction at ARZAQ EXPRESS INDUSTRIAL Est."
          invert
        />

        {/* 8 Core Values Grid using shadcn Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.n} delay={i % 4}>
              <Card className="h-full border-slate-800 bg-slate-900/80 text-white hover:bg-slate-900 transition-all duration-300 hover:border-amber-500/50 shadow-xl group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-amber-500/40 text-amber-400 bg-amber-500/10 font-bold text-xs">
                      {v.n}
                    </Badge>
                    <div className="rounded-full bg-slate-800 p-2.5 text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <v.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-white mt-3 group-hover:text-amber-400 transition-colors">
                    {v.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {v.body}
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