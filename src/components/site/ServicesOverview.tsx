import { useState, useMemo } from "react";
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
  Search,
  X,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
      "Structural & industrial building demolition & plant dismantling",
      "Selective interior dismantling for commercial spaces",
      "Heavy concrete breaking, cutting & foundation excavation",
      "Site clearance, debris hauling & compliant eco-disposal",
    ],
  },
];

const ITEMS_PER_PAGE = 6;

export function ServicesOverview() {
  const [selectedService, setSelectedService] = useState<typeof allServices[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredServices = useMemo(() => {
    return allServices.filter(
      (s) =>
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const paginatedServices = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredServices.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredServices, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const section = document.getElementById("services");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Section id="services" tone="stone" className="bg-slate-100 dark:bg-slate-900/50 py-12 sm:py-20">
      <SectionHeading
        eyebrow="Services Overview"
        title="Comprehensive Industrial Services Portfolio"
        intro="ARZAQ EXPRESS Est. provides 16 specialized core services tailored to support Saudi Arabia's oil & gas, petrochemical, power, and civil infrastructure sectors."
      />

      {/* Touch-Friendly Mobile Search & Info */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 max-w-4xl mx-auto">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search 16 industrial services..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-9 pr-8 bg-background border-border text-sm h-11 sm:h-10 rounded-xl"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                setCurrentPage(1);
              }}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="text-xs font-semibold text-muted-foreground text-right sm:text-left px-1">
          Showing <span className="text-amber-600 dark:text-amber-400 font-bold">{paginatedServices.length}</span> of{" "}
          <span className="text-foreground font-bold">{filteredServices.length}</span> Services
        </div>
      </div>

      {/* Services Responsive Grid */}
      <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedServices.map((s, i) => (
          <Reveal key={s.id} delay={(i % 3) * 0.1}>
            <Card className="h-full border-border/70 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between bg-card rounded-2xl">
              <CardHeader className="pb-2 pt-5 px-5">
                <div className="flex items-center justify-between gap-2">
                  <div className="rounded-xl bg-amber-500/10 p-2.5 text-amber-600 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <Badge variant="outline" className="text-[0.65rem] border-amber-500/30 text-amber-600 dark:text-amber-400 font-semibold uppercase shrink-0">
                    {s.category}
                  </Badge>
                </div>
                <CardTitle className="text-base sm:text-lg font-bold text-foreground mt-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                  {s.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-3 px-5">
                <CardDescription className="text-xs sm:text-sm leading-relaxed line-clamp-3 text-muted-foreground">
                  {s.summary}
                </CardDescription>
              </CardContent>

              <CardFooter className="pt-0 pb-4 px-5">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedService(s)}
                      className="w-full justify-between text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 hover:bg-amber-500/10 h-11 sm:h-9 rounded-xl"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  {selectedService && (
                    <DialogContent className="max-w-[92vw] sm:max-w-xl max-h-[85vh] overflow-y-auto p-4 sm:p-6 rounded-2xl">
                      <DialogHeader className="text-left">
                        <div className="flex items-center gap-2">
                          <div className="rounded-lg bg-amber-500/10 p-2 text-amber-600 dark:text-amber-400">
                            <selectedService.icon className="h-5 w-5" />
                          </div>
                          <Badge variant="secondary" className="text-xs font-semibold">
                            {selectedService.category}
                          </Badge>
                        </div>
                        <DialogTitle className="text-lg sm:text-xl font-bold mt-2">
                          {selectedService.title}
                        </DialogTitle>
                        <DialogDescription className="text-xs sm:text-sm pt-1">
                          {selectedService.summary}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="space-y-3 py-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                          Scope & Technical Capabilities
                        </h4>
                        <div className="grid gap-2">
                          {selectedService.details.map((d, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground bg-muted/40 p-2.5 rounded-lg">
                              <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                              <span className="leading-snug">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <DialogFooter className="flex flex-col sm:flex-row gap-2 pt-3 border-t">
                        <Button
                          className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-bold h-11 sm:h-10 rounded-xl"
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

      {/* On-Page Touch-Friendly Grid Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 sm:mt-12 overflow-x-auto py-2">
          <Pagination>
            <PaginationContent className="gap-1 sm:gap-2">
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-40 h-10 px-3 text-xs" : "cursor-pointer h-10 px-3 text-xs"}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNum = index + 1;
                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      isActive={currentPage === pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className="cursor-pointer font-bold h-10 w-10 text-xs rounded-lg"
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-40 h-10 px-3 text-xs" : "cursor-pointer h-10 px-3 text-xs"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </Section>
  );
}