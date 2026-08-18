import { useState } from "react";
import {
  Wrench,
  Flame,
  Zap,
  Truck,
  Pipette,
  Layers,
  Building2,
  Paintbrush,
  Cpu,
  RotateCw,
  Package,
  Shield,
  Construction,
  Activity,
  Droplets,
  Hammer,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

export const allServices = [
  {
    id: "mechanical",
    icon: Wrench,
    title: "Mechanical Work",
    category: "Engineering",
    summary: "Machinery installation, pump & gearbox overhauling, piping fabrication, alignment, and preventive maintenance across Saudi Arabia.",
    details: [
      "Installation, alignment, and commissioning of heavy industrial machinery",
      "Overhauling of pumps, compressors, blowers, and gearboxes",
      "Piping fabrication, erection, and steel structure installation",
      "Preventive and corrective mechanical maintenance programs",
      "Troubleshooting of complex mechanical systems & rotating equipment",
      "Supply of fittings, flanges, fasteners, and industrial mechanical supplies",
    ],
  },
  {
    id: "welding",
    icon: Flame,
    title: "Welding Solution",
    category: "Fabrication",
    summary: "Certified welding services following international codes (SMAW, MIG, TIG, FCAW, SAW) for structural steel, pipelines, and tanks.",
    details: [
      "Shielded Metal Arc Welding (SMAW)",
      "Gas Metal Arc Welding (GMAW/MIG)",
      "Gas Tungsten Arc Welding (GTAW/TIG)",
      "Flux-Cored Arc Welding (FCAW) & Submerged Arc Welding (SAW)",
      "Structural welding, pipeline welding & pressure vessel fabrication",
      "Custom metal fabrication & emergency on-site welding repairs",
    ],
  },
  {
    id: "generator",
    icon: Zap,
    title: "Generator Repair & Maintenance",
    category: "Power Systems",
    summary: "Complete diesel and gas-powered generator overhaul, electrical diagnostics, emergency repair, and preventive maintenance.",
    details: [
      "Routine preventive maintenance programs for diesel & gas generators",
      "Emergency 24/7 repair services & breakdown response",
      "Engine overhaul, fuel system servicing & component replacement",
      "Electrical diagnostics, AVR calibration & control panel repair",
      "Generator reconditioning, load testing & capacity upgrades",
    ],
  },
  {
    id: "forklift",
    icon: Truck,
    title: "Forklift Repair & Maintenance",
    category: "Equipment",
    summary: "Expert forklift servicing for diesel, electric, and LPG models. Reduces downtime and ensures strict compliance with safety regulations.",
    details: [
      "Preventive maintenance programs tailored to fleet requirements",
      "Diesel, LPG, and electric forklift mechanical repairs",
      "Traction battery servicing, charging system & motor repair",
      "On-site mobile emergency repairs & routine inspection",
      "Safety certification and annual equipment compliance checks",
    ],
  },
  {
    id: "frp-rtr",
    icon: Pipette,
    title: "FRP / RTR Services",
    category: "Piping & Linings",
    summary: "Specialized Fiber Reinforced Plastic (FRP) and Reinforced Thermosetting Resin (RTR) fabrication, piping, and chemical lining.",
    details: [
      "Custom FRP/RTR tank, pipe, and fitting fabrication",
      "Installation of corrosion-resistant FRP/RTR piping systems",
      "Hydrostatic testing, inspection, and defect assessment",
      "Chemical plant & refinery tank lining and coating services",
      "Emergency leak sealing and structural FRP patch repairs",
    ],
  },
  {
    id: "hdpe-piping",
    icon: Layers,
    title: "HDPE / CPVC / PVC Piping",
    category: "Piping & Linings",
    summary: "High-Density Polyethylene (HDPE), CPVC, and PVC piping installation for water treatment, chemical plants, and municipal utilities.",
    details: [
      "High-Density Polyethylene (HDPE) butt fusion & electrofusion welding",
      "Chlorinated Polyvinyl Chloride (CPVC) high-temperature piping systems",
      "PVC water distribution, drainage & industrial fluid handling lines",
      "Corrosion-resistant fluid transmission lines for harsh environments",
    ],
  },
  {
    id: "civil",
    icon: Building2,
    title: "Civil Works",
    category: "Civil & Infrastructure",
    summary: "Site preparation, earthworks, reinforced concrete construction, masonry, roadworks, and industrial infrastructure works.",
    details: [
      "Site preparation, excavation, grading, and earthworks",
      "Reinforced concrete foundations, equipment pads & structural slabs",
      "Industrial infrastructure construction & warehouse facility civil work",
      "Masonry, block work, structural repairs & retaining walls",
      "Roadworks, pavement construction, and asphalt laying",
    ],
  },
  {
    id: "decor",
    icon: Paintbrush,
    title: "Decor Works",
    category: "Civil & Infrastructure",
    summary: "Interior fit-outs, decorative painting, wall finishes, custom carpentry, ceiling/lighting design, and commercial space renovations.",
    details: [
      "Commercial & office interior fit-outs and space planning",
      "Decorative painting, specialty wall finishes & industrial coatings",
      "Custom carpentry, joinery & architectural wood work",
      "Acoustic ceiling installation and integrated LED lighting design",
      "Exterior facade enhancements & commercial building renovations",
    ],
  },
  {
    id: "electrical",
    icon: Cpu,
    title: "Electrical & Instrumentation (E&I)",
    category: "Power Systems",
    summary: "LV & MV power distribution, cable laying, panel fabrication, earthing, instrument calibration, loop checking & control systems.",
    details: [
      "LV & MV power distribution system design and installation",
      "Industrial cable laying, glanding, and termination works",
      "Control panel fabrication, assembly & switchgear installation",
      "Earthing, grounding, and lightning protection systems",
      "Field instrument installation, calibration & loop testing",
      "PLC/DCS control systems integration & signal cabling",
    ],
  },
  {
    id: "motor-winding",
    icon: RotateCw,
    title: "Electric Motor Winding",
    category: "Electrical",
    summary: "Rewinding services for AC/DC, synchronous, high/low voltage, and explosion-proof motors to meet OEM specifications.",
    details: [
      "AC motor (single-phase & three-phase) rewinding & overhaul",
      "DC motor armature & stator rewinding",
      "High-voltage and low-voltage electric motor refurbishing",
      "Explosion-proof and flame-proof motor reconditioning",
      "Precision insulation, varnishing, dynamic balancing & testing",
    ],
  },
  {
    id: "materials",
    icon: Package,
    title: "Industrial Materials Supply",
    category: "Procurement",
    summary: "Reliable procurement of pipes, fittings, valves, fasteners, gaskets, electrical supplies, civil materials, and PPE safety gear.",
    details: [
      "Pipes, tubes, flanges, and high-pressure fittings",
      "Industrial valves (gate, globe, ball, check, butterfly)",
      "Fasteners, bolts, nuts, studs, and heavy hardware",
      "Gaskets, seals, and chemical-resistant joint packing",
      "Electrical & instrumentation cables, trays & fittings",
      "Personal Protective Equipment (PPE) & site safety supplies",
    ],
  },
  {
    id: "waterproofing",
    icon: Shield,
    title: "Waterproofing, Epoxy & Fencing",
    category: "Specialized Services",
    summary: "Structural waterproofing, chemical-resistant epoxy floor coatings, and custom industrial site security fencing.",
    details: [
      "Roof, basement, and foundation membrane waterproofing",
      "Seamless heavy-duty epoxy floor coating for plant facilities",
      "Chemical and impact-resistant floor surface treatments",
      "Custom perimeter security fencing, chain-link & boundary barriers",
    ],
  },
  {
    id: "asphalt",
    icon: Construction,
    title: "Asphalt Works",
    category: "Civil & Infrastructure",
    summary: "Road construction, asphalt resurfacing, overlay, repair patching, driveway/parking lot paving, and thermoplastic road marking.",
    details: [
      "New road construction & industrial access road paving",
      "Asphalt resurfacing, overlay, and structural milling",
      "Pothole repair, crack sealing & asphalt patch work",
      "Parking lot paving, curb construction & drainage integration",
      "Thermoplastic road marking, zebra lines & safety signage",
    ],
  },
  {
    id: "pump-maint",
    icon: Activity,
    title: "Centrifugal Pump Maintenance",
    category: "Mechanical",
    summary: "Complete centrifugal pump overhaul, dynamic impeller balancing, mechanical seal replacement, and laser alignment.",
    details: [
      "Centrifugal pump disassembly, inspection & overhaul",
      "Dynamic balancing of impellers & rotating shafts",
      "Mechanical seal & gland packing replacement",
      "Precision laser shaft alignment & vibration testing",
      "Flow rate and pressure performance certification",
    ],
  },
  {
    id: "dewatering",
    icon: Droplets,
    title: "De-Watering Pump Rental & Sales",
    category: "Equipment",
    summary: "High-capacity dewatering pump rentals and sales for construction sites, flood response, mine drainage, and pipeline flushing.",
    details: [
      "Construction site dewatering pump system supply",
      "Emergency flood control & high-capacity water removal",
      "Mine site drainage & industrial wastewater transfer",
      "Pipeline hydrostatic testing water supply and bypass pumping",
    ],
  },
  {
    id: "demolition",
    icon: Hammer,
    title: "Demolition Work",
    category: "Specialized Services",
    summary: "Safe, controlled structural and industrial demolition, selective interior strip-outs, concrete cutting, and hazardous debris clearance.",
    details: [
      "Structural & industrial building demolition (Abdulwahab Awad Hassan Aaiysh Est.)",
      "Selective interior dismantling for commercial spaces",
      "Heavy concrete breaking, cutting & foundation excavation",
      "Site clearance, debris hauling & compliant eco-disposal",
    ],
  },
];

export function ServicesOverview() {
  const [selectedService, setSelectedService] = useState<typeof allServices[0] | null>(null);

  return (
    <Section id="services" tone="stone" className="bg-slate-100 dark:bg-slate-900/50">
      <SectionHeading
        eyebrow="Services Overview"
        title="Comprehensive Industrial Services Portfolio"
        intro="ARZAQ EXPRESS Est. provides 16 specialized core services tailored to support Saudi Arabia's oil & gas, petrochemical, power, and civil infrastructure sectors."
      />

      {/* Services Grid using shadcn Cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {allServices.map((s, i) => (
          <Reveal key={s.id} delay={(i % 4) * 0.1}>
            <Card className="h-full border-border/70 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-amber-500/10 p-3 text-amber-600 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-[0.65rem] border-amber-500/30 text-amber-600 dark:text-amber-400 font-semibold uppercase">
                    {s.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold text-foreground mt-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {s.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-4">
                <CardDescription className="text-xs sm:text-sm leading-relaxed line-clamp-3 text-muted-foreground">
                  {s.summary}
                </CardDescription>
              </CardContent>

              <CardFooter className="pt-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedService(s)}
                      className="w-full justify-between text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 hover:bg-amber-500/10"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </DialogTrigger>
                  {selectedService && (
                    <DialogContent className="max-w-xl max-h-[85vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-center gap-2">
                          <div className="rounded-lg bg-amber-500/10 p-2 text-amber-600 dark:text-amber-400">
                            <selectedService.icon className="h-5 w-5" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {selectedService.category}
                          </Badge>
                        </div>
                        <DialogTitle className="text-xl font-bold mt-2">
                          {selectedService.title}
                        </DialogTitle>
                        <DialogDescription className="text-sm pt-1">
                          {selectedService.summary}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="space-y-4 py-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                          Scope & Technical Capabilities
                        </h4>
                        <div className="grid gap-2.5">
                          {selectedService.details.map((d, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                              <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <DialogFooter className="flex flex-col sm:flex-row gap-2 pt-2 border-t">
                        <Button
                          className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-semibold"
                          asChild
                        >
                          <a href="#contact">Request Service Quote</a>
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  )}
                </Dialog>
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}