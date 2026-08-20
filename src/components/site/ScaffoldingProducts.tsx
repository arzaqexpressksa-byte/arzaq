import { useState, useMemo } from "react";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  Ruler,
  ShieldCheck,
  FileText,
  PhoneCall,
  Box,
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import imgAluTower from "@/assets/scaffolding/aluminium-mobile-tower.jpg";
import imgCuplockSingle from "@/assets/scaffolding/cuplock-mobile-tower-single.jpg";
import imgCuplockDouble from "@/assets/scaffolding/cuplock-mobile-tower-double.jpg";
import imgSteelLadder from "@/assets/scaffolding/steel-ladder.jpg";
import imgBeamLadder from "@/assets/scaffolding/beam-ladder.jpg";
import imgAluLadder from "@/assets/scaffolding/aluminium-ladder.jpg";
import imgSteelBoard from "@/assets/scaffolding/thick-steel-board.jpg";
import imgOshaBoard from "@/assets/scaffolding/lvl-osha-board.jpg";
import imgCasterWheel from "@/assets/scaffolding/caster-wheel.jpg";
import imgCoupler from "@/assets/scaffolding/coupler-en74.jpg";
import imgScaffoldTube from "@/assets/scaffolding/scaffolding-tube.jpg";

export const scaffoldingProducts = [
  {
    id: "aluminium-mobile-tower",
    title: "Aluminium Mobile Tower",
    category: "Mobile Towers",
    img: imgAluTower,
    summary: "Leading mobile tower extension ladder & tiltable tower ladder for rental and sales across Saudi Arabia.",
    description: "We are a leading Manufacturer of various degree mobile tower extension ladder, various degree mobile tower ladder, various degree tower extension ladder, various degree mobile tower ladder for rental, various degree tiltable mobile tower ladder for rental and various degree mobile tower ladder on rental from Saudi Arabia.",
    sizes: "Custom heights & tiltable extension configurations available",
    highlights: [
      "Lightweight High-Grade Aluminium Construction",
      "Heavy Duty Lockable Swivel Casters",
      "Easy Erecting & Relocation",
      "Complies with International Safety Standards",
    ],
  },
  {
    id: "cuplock-mobile-tower-single",
    title: "Cuplock Mobile Tower - Single",
    category: "Mobile Towers",
    img: imgCuplockSingle,
    summary: "International mobile scaffold tower for narrow conditions. Adjustable outriggers for maximum stability at extended heights.",
    description: "The international mobile scaffold tower for conditions where narrowness prevails. The adjustable outriggers allow for multiple adaptions. When fully extracted the outriggers provide conditions in extended heights. When retracted, the tower can easily be moved through alley, doorways etc, or be used for wall side applications.",
    sizes: "Width: 0.80 m | Length: 1.80 m | Heights: 2.0m, 3.0m, 4.0m, 5.0m, 6.0m, 7.0m",
    highlights: [
      "Compact 0.80m Width for Alleyways & Doorways",
      "Fully Extractable Adjustable Outriggers",
      "Smooth Rolling Caster Wheels with Brakes",
      "Wall-Side Access & Narrow Workspace Application",
    ],
  },
  {
    id: "cuplock-mobile-tower-double",
    title: "Cuplock Mobile Tower - Double",
    category: "Mobile Towers",
    img: imgCuplockDouble,
    summary: "Versatile double-width mobile tower solution for hard-to-reach places. Light aluminium frames with integrated ladder.",
    description: "Our aluminium tower offers a solution for those hard to reach places that require safe and convenient access. Simple and easy to erect due to the lightness of aluminium, our frames and accessories are durable, low-maintenance and mobile giving you the versatility to relocate or adjust. This main frame is designed for those who need a ladder in the main frame.",
    sizes: "Width: 1.45 m | Length: 2.45 m | Heights: 2.0m to 20.0m (2m, 3m, 4m, 5m, 6m, 7m, 8m, 9m, 10m, 11m, 12m, 13m, 14m, 15m, 16m, 17m, 18m, 19m, 20m)",
    highlights: [
      "Double Width (1.45m) for Multi-Worker Access",
      "Built-in Ladder within the Main Frame",
      "Relocatable & Adjustable Lightweight Aluminium",
      "Working Heights up to 20.0 Meters",
    ],
  },
  {
    id: "steel-ladder",
    title: "Steel Ladder",
    category: "Ladders",
    img: imgSteelLadder,
    summary: "Modular steel ladders with circular rungs, anti-slip grooved surfaces, rubber end caps, and top fixing hooks.",
    description: "Steel Ladders are of modular design with circular rungs. Steel Ladders are available in 2, 3, 4 & 6 Mtrs length as standard. Non-standard are fitted with hooks for easy fixing. Steel Ladders have additional features, such as anti slip grooved rungs, anti slip rubber end caps and are light in weight too.",
    sizes: "Standard Lengths: 2.0m, 3.0m, 4.0m, 6.0m (Custom with hooks available)",
    highlights: [
      "Modular Heavy-Duty Steel Design",
      "Anti-Slip Grooved Circular Rungs",
      "Anti-Slip Protective Rubber End Caps",
      "Top Hooks for Secure Scaffold Fixing",
    ],
  },
  {
    id: "beam-ladder",
    title: "Beam Ladder",
    category: "Ladders",
    img: imgBeamLadder,
    summary: "High tensile steel ladder beams providing clear spans between scaffold structures. Hot-dip galvanized finish.",
    description: "Ladder beams make for a clear span between scaffolds. They are constructed from high tensile steel and the saddles are welded at each galvanized finish and available in different lengths and weights.",
    sizes: "Multiple span lengths & weight capacities available",
    highlights: [
      "High Tensile Steel Construction",
      "Hot-Dip Galvanized Corrosion Resistance",
      "Creates Clear Spans & Bridges Between Scaffolds",
      "Precision Welded Saddles for Heavy Loads",
    ],
  },
  {
    id: "aluminium-ladder",
    title: "Aluminium Ladder",
    category: "Ladders",
    img: imgAluLadder,
    summary: "Rope-operated 2-piece extension ladder with spring-loaded lock hooks, nylon groove pulley, and non-slip rubber feet.",
    description: "Rope-operated two-piece ladder with comfortable rungs. Level adjustable by Nylon or PVC rope. Spring-Loaded lock hooks to lock level in desired place. Nylon groove pulley for smooth sliding rope. Non-slip heavy duty swell rubber foot riveted to the base of the rails. Special design rubber caps are fixed at the top ends, to provide firm grip against leaning surface.",
    sizes: "Adjustable 2-piece extension heights",
    highlights: [
      "Rope-Operated Level Adjustment (Nylon/PVC)",
      "Spring-Loaded Automatic Lock Hooks",
      "Smooth Sliding Nylon Groove Pulley",
      "Non-Slip Swell Rubber Feet & Top Grip Caps",
    ],
  },
  {
    id: "thick-steel-board",
    title: "Thick Steel Board - 1.8mm",
    category: "Boards & Planks",
    img: imgSteelBoard,
    summary: "Heavy-duty 1.8mm thick steel scaffold board with perforated anti-slip surface. Available in painted and galvanized finishes.",
    description: "Available in painted finishes. Weight – 5.6 kgs/mtr. Manufactured from 1.8mm thick steel plate.",
    sizes: "Thickness: 1.8mm Steel Plate | Weight: 5.6 kg/meter",
    highlights: [
      "1.8mm High-Strength Steel Plate",
      "Perforated Non-Slip Surface Design",
      "Weight: 5.6 kg per meter",
      "Painted & Hot-Dip Galvanized Finish Options",
    ],
  },
  {
    id: "lvl-osha-board",
    title: "LVL OSHA Board",
    category: "Boards & Planks",
    img: imgOshaBoard,
    summary: "Individually proof-laminated scaffold board embossed with OSHA proof stamp. Standard size 225 x 38mm.",
    description: "Each scaffold board is individually proof laminated and embossed with osha proof scaffolding plank is in 225 × 38mm, Customized Size are available.",
    sizes: "Standard Plank Size: 225 × 38mm (Customized sizes available)",
    highlights: [
      "Individually Proof Laminated LVL Timber",
      "Embossed OSHA Compliant Safety Stamp",
      "Standard Dimension: 225mm Width x 38mm Depth",
      "High Bending Strength & Warp Resistance",
    ],
  },
  {
    id: "heavy-duty-caster-wheel",
    title: "Heavy Duty Caster Wheel",
    category: "Accessories",
    img: imgCasterWheel,
    summary: "Precision cast iron core casters with low rolling resistance, floor protective non-marking tires, and brake locks.",
    description: "Avail from us firmly bonded to precision machined cast iron cores Heavy Duty Caster Wheels with low rolling resistance, smooth & noiseless running. These are non-marking and floor protective. These casters possess high abrasion value and good cut resistance and are resistant to tearing. Temperature range they can sustain is -20°C to 85°C.",
    sizes: "Standard Mobile Scaffold Tower Stem & Plate Mounting",
    highlights: [
      "Precision Machined Cast Iron Core",
      "Smooth, Noiseless & Low Rolling Resistance",
      "Non-Marking & Floor Protective Polyurethane/Rubber",
      "Temperature Resilience: -20°C to +85°C",
    ],
  },
  {
    id: "coupler-en74",
    title: "Coupler EN74",
    category: "Accessories",
    img: imgCoupler,
    summary: "Sleeve, double & swivel couplers for O.D 48.3mm scaffolding tubes. Produced according to EN74 European/British standard.",
    description: "Sleeve Coupler is used to connect with O.D48.3mm scaffolding pipes and tubes horizontal, vertically and braces. It is produced according to European and British standard of En74.",
    sizes: "Fits Standard O.D 48.3mm Scaffolding Pipes & Tubes",
    highlights: [
      "EN74 European & British Standard Certified",
      "Drop Forged Steel Construction",
      "For 48.3mm Outer Diameter Pipes",
      "High Load Bearing & Anti-Slip Grip",
    ],
  },
  {
    id: "scaffolding-tube",
    title: "Scaffolding Tube 3.2mm & 4mm",
    category: "Tubes & Pipes",
    img: imgScaffoldTube,
    summary: "Standard O.D 48.3mm steel scaffolding tubes in 3.2mm and 4.0mm wall thickness. Galvanized and black finish.",
    description: "SCAFFOLDING TUBE Scaffolding tube 48.3 3.2 mm EN/BS STANDARD Scaffolding tube 48.3*4.0mm EN/BS STANDARD AB Black tube 48.3*3.2mm.",
    sizes: "O.D: 48.3mm | Wall Thicknesses: 3.2mm & 4.0mm (EN/BS Standard)",
    highlights: [
      "48.3mm Outer Diameter Standard Pipe",
      "Wall Thickness Options: 3.2mm & 4.0mm",
      "EN / BS Certified Structural Steel",
      "Hot-Dip Galvanized & Black Tube Options",
    ],
  },
];

const ITEMS_PER_PAGE = 6;

export function ScaffoldingProducts() {
  const [selectedProduct, setSelectedProduct] = useState<typeof scaffoldingProducts[0] | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    return scaffoldingProducts.filter((p) => {
      const matchesTab =
        activeTab === "all" || p.category.toLowerCase().includes(activeTab.toLowerCase());
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const section = document.getElementById("scaffolding");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Section id="scaffolding" tone="stone" className="bg-slate-900 text-white py-12 sm:py-20">
      <SectionHeading
        eyebrow="Equipment & Products"
        title="Scaffolding, Towers & Ladders"
        intro="ARZAQ EXPRESS INDUSTRIAL Est. supplies certified aluminium mobile towers, cuplock systems, steel ladders, OSHA planks, EN74 couplers, and scaffolding accessories across Saudi Arabia."
        invert
      />

      {/* Mobile Scrollable Filter Tabs & Search Bar */}
      <div className="mt-8 sm:mt-10 flex flex-col gap-4 items-center w-full">
        <Tabs
          defaultValue="all"
          onValueChange={(val) => {
            setActiveTab(val);
            setCurrentPage(1);
          }}
          className="w-full max-w-3xl"
        >
          {/* Horizontal Scrollable Tabs on Mobile */}
          <div className="overflow-x-auto pb-1 w-full flex justify-start sm:justify-center">
            <TabsList className="flex w-max sm:w-full bg-slate-950 p-1.5 border border-slate-800 rounded-xl gap-1">
              <TabsTrigger value="all" className="text-xs font-bold px-3 py-2 rounded-lg shrink-0 data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                All ({scaffoldingProducts.length})
              </TabsTrigger>
              <TabsTrigger value="tower" className="text-xs font-bold px-3 py-2 rounded-lg shrink-0 data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Mobile Towers
              </TabsTrigger>
              <TabsTrigger value="ladder" className="text-xs font-bold px-3 py-2 rounded-lg shrink-0 data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Ladders
              </TabsTrigger>
              <TabsTrigger value="board" className="text-xs font-bold px-3 py-2 rounded-lg shrink-0 data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Boards & Planks
              </TabsTrigger>
              <TabsTrigger value="accessories" className="text-xs font-bold px-3 py-2 rounded-lg shrink-0 data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Couplers & Parts
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 w-full max-w-3xl">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search scaffolding catalog..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-9 pr-8 bg-slate-950 border-slate-800 text-white placeholder:text-slate-400 text-sm h-11 sm:h-10 rounded-xl"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="text-xs text-slate-400 text-right sm:text-left px-1">
            Showing <span className="text-amber-400 font-bold">{paginatedProducts.length}</span> of{" "}
            <span className="text-white font-bold">{filteredProducts.length}</span> Items
          </div>
        </div>
      </div>

      {/* Responsive Cards Grid */}
      <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedProducts.map((product, i) => (
          <Reveal key={product.id} delay={(i % 3) * 0.1}>
            <Card className="h-full border-slate-800 bg-slate-950 text-white hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl group flex flex-col justify-between overflow-hidden rounded-2xl">
              {/* Product Photo Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white p-3 flex items-center justify-center border-b border-slate-800">
                <img
                  src={product.img}
                  alt={product.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-2.5 left-2.5 bg-slate-950/90 text-amber-400 border border-amber-500/30 text-[0.65rem] uppercase tracking-wider font-bold">
                  {product.category}
                </Badge>
              </div>

              <CardHeader className="pb-2 pt-4 px-5">
                <CardTitle className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-xs text-slate-300 line-clamp-3 leading-relaxed mt-1">
                  {product.summary}
                </CardDescription>
              </CardHeader>

              <CardContent className="py-2 px-5">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                  <Ruler className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{product.sizes}</span>
                </div>
              </CardContent>

              <CardFooter className="pt-2 pb-4 px-5">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProduct(product)}
                      className="w-full justify-between border-slate-800 bg-slate-900 text-slate-200 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-colors text-xs font-semibold h-11 sm:h-9 rounded-xl"
                    >
                      <span>View Specifications</span>
                      <Maximize2 className="h-3.5 w-3.5" />
                    </Button>
                  </DialogTrigger>

                  {selectedProduct && (
                    <DialogContent className="max-w-[92vw] sm:max-w-2xl max-h-[85vh] overflow-y-auto bg-slate-950 border-slate-800 text-white p-4 sm:p-6 rounded-2xl">
                      <DialogHeader className="text-left">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="border-amber-500/40 text-amber-400 bg-amber-500/10 text-xs font-bold">
                            {selectedProduct.category}
                          </Badge>
                          <span className="text-xs text-slate-400">Arzaq Express Catalog</span>
                        </div>
                        <DialogTitle className="text-lg sm:text-2xl font-bold text-amber-400 mt-2">
                          {selectedProduct.title}
                        </DialogTitle>
                        <DialogDescription className="text-slate-300 text-xs sm:text-sm">
                          Official Equipment & Scaffolding Specifications
                        </DialogDescription>
                      </DialogHeader>

                      {/* Product Photo inside Modal */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white p-4 sm:p-6 border border-slate-800 my-2 flex items-center justify-center">
                        <img
                          src={selectedProduct.img}
                          alt={selectedProduct.title}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      {/* Description */}
                      <div className="space-y-3 py-2">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                            Product Description
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900 p-3 rounded-lg border border-slate-800">
                            {selectedProduct.description}
                          </p>
                        </div>

                        {/* Dimensions & Sizes */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                            Available Sizes & Technical Dimensions
                          </h4>
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/30">
                            <Ruler className="h-4 w-4 text-amber-400 shrink-0" />
                            <span className="font-semibold leading-snug">{selectedProduct.sizes}</span>
                          </div>
                        </div>

                        {/* Feature Highlights */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                            Key Product Features
                          </h4>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {selectedProduct.highlights.map((h, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 bg-slate-900 p-2.5 rounded-md border border-slate-800">
                                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                                <span className="leading-snug">{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <DialogFooter className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-slate-800">
                        <Button
                          className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-bold gap-2 h-11 sm:h-10 rounded-xl"
                          asChild
                        >
                          <a href="#contact">
                            <PhoneCall className="h-4 w-4" />
                            <span>Request Quote for {selectedProduct.title}</span>
                          </a>
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

      {/* Touch-Friendly Grid Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 sm:mt-12 overflow-x-auto py-2">
          <Pagination>
            <PaginationContent className="gap-1 sm:gap-2">
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-40 text-slate-500 h-10 px-3 text-xs" : "cursor-pointer text-white hover:text-amber-400 h-10 px-3 text-xs"}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNum = index + 1;
                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      isActive={currentPage === pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={
                        currentPage === pageNum
                          ? "cursor-pointer font-bold bg-amber-600 text-white border-amber-600 h-10 w-10 text-xs rounded-lg"
                          : "cursor-pointer text-slate-300 hover:text-white hover:bg-slate-800 border-slate-800 h-10 w-10 text-xs rounded-lg"
                      }
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-40 text-slate-500 h-10 px-3 text-xs" : "cursor-pointer text-white hover:text-amber-400 h-10 px-3 text-xs"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </Section>
  );
}
