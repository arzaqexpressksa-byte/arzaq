import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { ShieldCheck, Award, HardHat, Compass, Clock, MapPin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const items = [
  {
    icon: ShieldCheck,
    title: "Strict Safety & Quality Standards",
    body: "We adhere to international codes and standards in every project, enforcing rigorous safety protocols for personnel and equipment.",
  },
  {
    icon: Award,
    title: "Certified Technical Workforce",
    body: "Our team consists of certified welding professionals, electromechanical engineers, and trained technicians committed to execution excellence.",
  },
  {
    icon: HardHat,
    title: "Turnkey Multi-Disciplinary Solutions",
    body: "From civil foundation work to complex E&I panel fabrication and motor winding, we manage the entire project lifecycle.",
  },
  {
    icon: Compass,
    title: "Customer-Centric Approach",
    body: "We work closely with clients to understand specific challenges, offering tailor-made solutions that extend equipment life.",
  },
  {
    icon: Clock,
    title: "Minimizing Downtime",
    body: "Prompt emergency response, on-site repair capabilities, and preventive maintenance programs ensure maximum operational uptime.",
  },
  {
    icon: MapPin,
    title: "Dammam & Jubail Regional Presence",
    body: "Strategically located in the Eastern Province, we serve major industrial hubs, oil refineries, and petrochemical plants across KSA.",
  },
];

export function WhyChooseUs() {
  return (
    <Section id="why" tone="warm" className="bg-slate-50 dark:bg-slate-900/40">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Why Leading Industrial Operators Partner With Arzaq Express"
        intro="Our reputation is built on a solid foundation of quality, safety, innovation, and dependable technical execution."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i % 3}>
            <Card className="h-full border-border/80 bg-card hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="pb-2">
                <div className="rounded-xl bg-amber-500/10 p-3 text-amber-600 dark:text-amber-400 w-fit group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <item.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground mt-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}