import { Target, Eye, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const blocks = [
  {
    icon: Target,
    label: "Our Mission",
    title: "Delivering Technical Excellence & Safety",
    body: "To deliver exceptional industrial services in mechanical, civil, welding, electrical, and instrumentation sectors by combining technical expertise, quality workmanship, and a strong commitment to safety and client satisfaction. We strive to be a trusted partner to our clients by providing innovative, reliable, and cost-effective solutions that enhance productivity and operational efficiency.",
    points: [
      "Technical Expertise & Workmanship",
      "Uncompromising Safety Commitment",
      "Cost-Effective Operational Efficiency",
    ],
  },
  {
    icon: Eye,
    label: "Our Vision",
    title: "Leading Industrial Service Provider in KSA",
    body: "To become a leading industrial service provider in Jubail and across the region, recognized for our excellence in execution, uncompromising quality, and dedication to innovation and sustainability. We aim to continually grow by building long-term relationships with clients and contributing positively to the industries and communities we serve.",
    points: [
      "Regional Leadership in Jubail & Eastern Province",
      "Innovation & Sustainable Practices",
      "Long-Term Strategic Partnerships",
    ],
  },
];

export function MissionVision() {
  return (
    <Section id="mission" tone="white">
      <SectionHeading
        eyebrow="Mission & Vision"
        title="Our Strategic Purpose and Regional Vision"
        align="center"
        intro="Guiding ARZAQ EXPRESS Est. toward operational excellence and sustainable contribution to Saudi Arabia's industrial expansion."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {blocks.map((b, i) => (
          <Reveal key={b.label} delay={i * 0.2}>
            <Card className="h-full border-border/80 shadow-lg hover:shadow-xl transition-all hover:border-amber-500/40 bg-gradient-to-b from-card to-accent/10">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-amber-500/10 p-3 text-amber-600 dark:text-amber-400">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-bold uppercase tracking-wider text-xs">
                    {b.label}
                  </Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mt-4">
                  {b.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {b.body}
                </p>
                <Separator className="bg-border/60" />
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    Key Commitments
                  </h4>
                  <ul className="space-y-2">
                    {b.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}