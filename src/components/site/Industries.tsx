import { Fuel, Flame, Zap, Factory, Building2, Ship } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const industries = [
  {
    icon: Fuel,
    name: "Oil & Gas Sector",
    desc: "Pipeline welding, vessel fabrication, valve supply, E&I control, and stationary equipment maintenance.",
  },
  {
    icon: Flame,
    name: "Petrochemical Plants",
    desc: "Corrosion-resistant FRP/RTR piping, chemical-resistant epoxy coatings, pump & gearbox overhauls.",
  },
  {
    icon: Zap,
    name: "Power Generation & Energy",
    desc: "Generator repair, electric motor rewinding, MV/LV power distribution, earthing & backup systems.",
  },
  {
    icon: Factory,
    name: "Manufacturing Facilities",
    desc: "Machinery alignment & commissioning, forklift fleet servicing, custom pre-fabrication, site civil work.",
  },
  {
    icon: Building2,
    name: "Infrastructure & Construction",
    desc: "Site preparation, concrete foundations, asphalt paving, road marking, demolition & site clearance.",
  },
  {
    icon: Ship,
    name: "Marine & Municipal Projects",
    desc: "De-watering pump rentals, municipal wastewater bypass, marine grade piping, perimeter fencing.",
  },
];

export function Industries() {
  return (
    <Section id="industries" tone="warm" className="bg-slate-100/70 dark:bg-slate-900/60">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Key Sectors Powered by Arzaq Express Solutions"
        align="center"
        intro="We serve clients across critical industrial sectors in Dammam, Jubail, and throughout Saudi Arabia."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, i) => (
          <Reveal key={ind.name} delay={i % 3}>
            <Card className="h-full border-border/80 bg-card hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="rounded-xl bg-amber-500/10 p-3 text-amber-600 dark:text-amber-400 shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <ind.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}