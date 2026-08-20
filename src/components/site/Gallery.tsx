import { useState, useMemo } from "react";
import {
  Image as ImageIcon,
  Maximize2,
  PhoneCall,
  Search,
  CheckCircle2,
  ArrowRight,
  X,
  Filter,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Card, CardContent } from "@/components/ui/card";
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
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import g1 from "@/assets/gallery-01.jpg";
import g2 from "@/assets/gallery-02.jpg";
import g3 from "@/assets/gallery-03.jpg";
import g4 from "@/assets/gallery-04.jpg";

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

import imgAsphaltPaver from "@/assets/equipment/asphalt-paver.jpg";
import imgBoomTruck from "@/assets/equipment/boom-truck.jpg";
import imgConcreteMixer from "@/assets/equipment/concrete-mixer.jpg";
import imgCrane from "@/assets/equipment/crane.jpg";
import imgDumpTruck from "@/assets/equipment/dump-truck.jpg";
import imgExcavator from "@/assets/equipment/excavator.jpg";
import imgForklift from "@/assets/equipment/forklift.jpg";
import imgJackhammerLoader from "@/assets/equipment/jackhammer-loader.jpg";
import imgJcbBackhoe from "@/assets/equipment/jcb-backhoe.jpg";
import imgManlift from "@/assets/equipment/manlift.jpg";
import imgRoadRoller from "@/assets/equipment/road-roller.jpg";
import imgScissorLift from "@/assets/equipment/scissor-lift.jpg";
import imgTelehandler from "@/assets/equipment/telehandler.jpg";
import imgWaterTanker from "@/assets/equipment/water-tanker.jpg";
import imgWheelLoader from "@/assets/equipment/wheel-loader.jpg";

export const galleryItems = [
  // Industrial Projects
  {
    id: "g1",
    title: "Structural Steel Pre-Fabrication & Mechanical Assembly",
    category: "Industrial Projects",
    location: "Dammam Industrial City · Saudi Arabia",
    img: g1,
    description: "Fabrication and erection of heavy structural steel frames, piping spools, and stationary vessel supports for industrial plant expansion.",
  },
  {
    id: "g2",
    title: "E&I Control Room Panel Fabrication & Testing",
    category: "Industrial Projects",
    location: "Jubail Industrial City · KSA",
    img: g2,
    description: "Low voltage distribution board assembly, cable glanding, wire termination, and loop testing for power plant facility.",
  },
  {
    id: "g3",
    title: "Certified Pipeline Welding & Hydrostatic Testing",
    category: "Industrial Projects",
    location: "Eastern Province · KSA",
    img: g3,
    description: "On-site TIG/MIG welding for high-pressure industrial piping networks adhering to ASME Section IX codes.",
  },
  {
    id: "g4",
    title: "Heavy Equipment Maintenance & Generator Overhaul",
    category: "Industrial Projects",
    location: "Dammam Facility · KSA",
    img: g4,
    description: "Comprehensive overhaul of diesel generator sets, electric motor rewinding, and vibration analysis testing.",
  },

  // Heavy Equipment Fleet
  {
    id: "eq-crane",
    title: "Mobile Hydraulic Truck Crane",
    category: "Heavy Equipment",
    location: "Saudi Arabia Fleet",
    img: imgCrane,
    description: "Heavy mobile hydraulic truck crane designed for high-tonnage lifting operations in refineries and plant erection.",
  },
  {
    id: "eq-excavator",
    title: "Heavy Hydraulic Crawler Excavator",
    category: "Heavy Equipment",
    location: "Saudi Arabia Fleet",
    img: imgExcavator,
    description: "Heavy crawler excavator for deep foundation trenching, site leveling, and rock excavation.",
  },
  {
    id: "eq-paver",
    title: "High Precision Asphalt Paver",
    category: "Heavy Equipment",
    location: "Saudi Arabia Fleet",
    img: imgAsphaltPaver,
    description: "Asphalt paver for road construction, highway surfacing, industrial plant access roads, and parking lots.",
  },
  {
    id: "eq-boom",
    title: "Hydraulic Crane Boom Truck",
    category: "Heavy Equipment",
    location: "Saudi Arabia Fleet",
    img: imgBoomTruck,
    description: "Multi-functional boom truck combining heavy payload flatbed transport with a hydraulic telescopic crane boom.",
  },
  {
    id: "eq-jcb",
    title: "JCB 4x4 Backhoe Loader",
    category: "Heavy Equipment",
    location: "Saudi Arabia Fleet",
    img: imgJcbBackhoe,
    description: "Multi-purpose backhoe loader combining front loading bucket with rear excavator arm for trenching and backfilling.",
  },
  {
    id: "eq-manlift",
    title: "Articulated Boom Manlift",
    category: "Heavy Equipment",
    location: "Saudi Arabia Fleet",
    img: imgManlift,
    description: "High-reach articulated boom manlift for safe aerial access, structural assembly, and facility maintenance.",
  },
  {
    id: "eq-telehandler",
    title: "Telescopic Reach Telehandler",
    category: "Heavy Equipment",
    location: "Saudi Arabia Fleet",
    img: imgTelehandler,
    description: "Heavy-duty 4x4 telehandler for reach lifting, high-level pallet placement, and material distribution.",
  },
  {
    id: "eq-dump",
    title: "Heavy Tipper Dump Truck",
    category: "Heavy Equipment",
    location: "Saudi Arabia Fleet",
    img: imgDumpTruck,
    description: "Robust tipper dump truck for earthmoving excavation, hauling aggregate, sub-base material, and site debris.",
  },

  // Scaffolding & Towers
  {
    id: "sc-alu-tower",
    title: "Aluminium Mobile Extension Tower",
    category: "Scaffolding & Towers",
    location: "Arzaq Express Catalog",
    img: imgAluTower,
    description: "Lightweight mobile tower extension ladder & tiltable tower ladder for safe elevated industrial access.",
  },
  {
    id: "sc-cuplock-single",
    title: "Cuplock Mobile Tower - Single Width",
    category: "Scaffolding & Towers",
    location: "Arzaq Express Catalog",
    img: imgCuplockSingle,
    description: "International mobile scaffold tower with adjustable outriggers for narrow spaces and alleyway access.",
  },
  {
    id: "sc-cuplock-double",
    title: "Cuplock Mobile Tower - Double Width",
    category: "Scaffolding & Towers",
    location: "Arzaq Express Catalog",
    img: imgCuplockDouble,
    description: "Double-width aluminium mobile tower with built-in access ladder for working heights up to 20 meters.",
  },
  {
    id: "sc-steel-ladder",
    title: "Modular Steel Scaffold Ladder",
    category: "Scaffolding & Towers",
    location: "Arzaq Express Catalog",
    img: imgSteelLadder,
    description: "Modular steel ladders with anti-slip grooved rungs, rubber end caps, and top fixing hooks.",
  },
  {
    id: "sc-beam-ladder",
    title: "Galvanized Steel Beam Ladder",
    category: "Scaffolding & Towers",
    location: "Arzaq Express Catalog",
    img: imgBeamLadder,
    description: "High tensile steel ladder beams providing clear spans and bridges between scaffold structures.",
  },
  {
    id: "sc-osha-board",
    title: "OSHA Embossed LVL Scaffold Plank",
    category: "Scaffolding & Towers",
    location: "Arzaq Express Catalog",
    img: imgOshaBoard,
    description: "Proof-laminated LVL scaffold timber planks embossed with OSHA compliance safety stamp.",
  },
  {
    id: "sc-coupler",
    title: "EN74 Certified Drop Forged Couplers",
    category: "Scaffolding & Towers",
    location: "Arzaq Express Catalog",
    img: imgCoupler,
    description: "European/British standard EN74 sleeve, double, and swivel couplers for 48.3mm scaffolding tubes.",
  },
  {
    id: "sc-tube",
    title: "EN/BS Standard Scaffolding Tubes 48.3mm",
    category: "Scaffolding & Towers",
    location: "Arzaq Express Catalog",
    img: imgScaffoldTube,
    description: "Structural steel scaffolding tubes in 3.2mm and 4.0mm wall thickness with hot-dip galvanized finish.",
  },
];

const ITEMS_PER_PAGE = 8;

export function Gallery() {
  const [activeItem, setActiveItem] = useState<typeof galleryItems[0] | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesTab =
        activeTab === "all" || item.category.toLowerCase().includes(activeTab.toLowerCase());
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const section = document.getElementById("gallery");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Section id="gallery" tone="white" className="bg-slate-50 text-slate-900 py-12 sm:py-20 border-t border-slate-200">
      <SectionHeading
        eyebrow="Media & Photo Gallery"
        title="Industrial Works & Equipment Gallery"
        intro="Explore our official photo gallery showcasing site operations, heavy machinery fleet, scaffolding systems, certified welding, and plant engineering projects."
      />

      {/* Filter Tabs & Search Bar */}
      <div className="mt-8 sm:mt-10 flex flex-col gap-4 items-center w-full">
        <Tabs
          defaultValue="all"
          onValueChange={(val) => {
            setActiveTab(val);
            setCurrentPage(1);
          }}
          className="w-full max-w-4xl"
        >
          <div className="overflow-x-auto pb-1 w-full flex justify-start sm:justify-center">
            <TabsList className="flex w-max sm:w-full bg-white p-1.5 border border-slate-300 rounded-xl gap-1 shadow-sm">
              <TabsTrigger value="all" className="text-xs font-bold px-3.5 py-2 rounded-lg shrink-0 data-[state=active]:bg-[#F36F21] data-[state=active]:text-white">
                All Photos ({galleryItems.length})
              </TabsTrigger>
              <TabsTrigger value="projects" className="text-xs font-bold px-3.5 py-2 rounded-lg shrink-0 data-[state=active]:bg-[#F36F21] data-[state=active]:text-white">
                Industrial Projects
              </TabsTrigger>
              <TabsTrigger value="equipment" className="text-xs font-bold px-3.5 py-2 rounded-lg shrink-0 data-[state=active]:bg-[#F36F21] data-[state=active]:text-white">
                Heavy Equipment
              </TabsTrigger>
              <TabsTrigger value="scaffolding" className="text-xs font-bold px-3.5 py-2 rounded-lg shrink-0 data-[state=active]:bg-[#F36F21] data-[state=active]:text-white">
                Scaffolding & Towers
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 w-full max-w-4xl">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search gallery photos..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-9 pr-8 bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm h-11 sm:h-10 rounded-xl shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="text-xs font-semibold text-slate-600 text-right sm:text-left px-1">
            Showing <span className="text-[#F36F21] font-bold">{paginatedItems.length}</span> of{" "}
            <span className="text-slate-900 font-bold">{filteredItems.length}</span> Showcase Photos
          </div>
        </div>
      </div>

      {/* Gallery Photo Grid */}
      <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {paginatedItems.map((item, i) => (
          <Reveal key={item.id} delay={(i % 4) * 0.1}>
            <Card
              onClick={() => setActiveItem(item)}
              className="group relative h-full w-full overflow-hidden border-slate-200 bg-slate-900 text-left cursor-pointer hover:shadow-2xl transition-all duration-300 rounded-2xl flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white p-2 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-2.5 left-2.5 bg-slate-950/90 text-amber-400 border border-amber-500/30 text-[0.65rem] uppercase tracking-wider font-bold">
                  {item.category}
                </Badge>
                <div className="absolute top-2.5 right-2.5 rounded-full bg-slate-950/70 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>

              {/* Title & Caption */}
              <div className="p-4 bg-slate-950 text-white flex-1 flex flex-col justify-between border-t border-slate-800">
                <div>
                  <h3 className="font-bold text-sm text-white group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 truncate font-medium">
                    {item.location}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-amber-400 font-semibold">
                  <span>Click to view full photo</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* On-Page Grid Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 sm:mt-12 overflow-x-auto py-2">
          <Pagination>
            <PaginationContent className="gap-1 sm:gap-2">
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-40 text-slate-400 h-10 px-3 text-xs" : "cursor-pointer text-slate-800 hover:text-amber-600 h-10 px-3 text-xs"}
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
                          ? "cursor-pointer font-bold bg-[#F36F21] text-white border-[#F36F21] h-10 w-10 text-xs rounded-lg"
                          : "cursor-pointer text-slate-700 hover:text-slate-900 hover:bg-slate-200 border-slate-300 h-10 w-10 text-xs rounded-lg"
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
                  className={currentPage === totalPages ? "pointer-events-none opacity-40 text-slate-400 h-10 px-3 text-xs" : "cursor-pointer text-slate-800 hover:text-amber-600 h-10 px-3 text-xs"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

      {/* Lightbox Photo Preview Modal */}
      <Dialog open={activeItem !== null} onOpenChange={(open) => !open && setActiveItem(null)}>
        {activeItem && (
          <DialogContent className="max-w-[92vw] sm:max-w-3xl max-h-[88vh] overflow-y-auto bg-slate-950 border-slate-800 text-white p-4 sm:p-6 rounded-2xl">
            <DialogHeader className="text-left">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-amber-500/40 text-amber-400 bg-amber-500/10 text-xs font-bold">
                  {activeItem.category}
                </Badge>
                <span className="text-xs text-slate-400">{activeItem.location}</span>
              </div>
              <DialogTitle className="text-lg sm:text-2xl font-bold text-amber-400 mt-1">
                {activeItem.title}
              </DialogTitle>
              <DialogDescription className="text-slate-300 text-xs sm:text-sm">
                ARZAQ EXPRESS INDUSTRIAL Est. Official Media Showcase
              </DialogDescription>
            </DialogHeader>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white p-3 sm:p-6 border border-slate-800 my-2 flex items-center justify-center">
              <img
                src={activeItem.img}
                alt={activeItem.title}
                className="h-full w-full object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900 p-3.5 rounded-xl border border-slate-800">
              {activeItem.description}
            </p>

            <DialogFooter className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-slate-800">
              <Button
                className="w-full sm:w-auto bg-[#F36F21] hover:bg-orange-600 text-white font-bold gap-2 h-11 sm:h-10 rounded-xl"
                asChild
              >
                <a href="#contact">
                  <PhoneCall className="h-4 w-4" />
                  <span>Inquire / Request Quote</span>
                </a>
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </Section>
  );
}
