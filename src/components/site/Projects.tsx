import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Eye, Image as ImageIcon } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import g1 from "@/assets/gallery-01.jpg";
import g2 from "@/assets/gallery-02.jpg";
import g3 from "@/assets/gallery-03.jpg";
import g4 from "@/assets/gallery-04.jpg";

const projects = [
  {
    img: g1,
    title: "Structural Steel Pre-Fabrication & Mechanical Assembly",
    meta: "Dammam Industrial City · Saudi Arabia",
    category: "Mechanical Work",
    span: "lg:col-span-2 lg:row-span-2",
    details: "Fabrication and erection of heavy structural steel frames, piping spools, and stationary vessel supports for industrial plant expansion.",
  },
  {
    img: g2,
    title: "E&I Control Room Panel Fabrication & Testing",
    meta: "Jubail Industrial City · KSA",
    category: "Electrical & Instrumentation",
    span: "",
    details: "Low voltage distribution board assembly, cable glanding, wire termination, and loop testing for power plant facility.",
  },
  {
    img: g3,
    title: "Certified Pipeline Welding & Hydrostatic Testing",
    meta: "Eastern Province · KSA",
    category: "Welding Solution",
    span: "",
    details: "On-site TIG/MIG welding for high-pressure industrial piping networks adhering to ASME Section IX codes.",
  },
  {
    img: g4,
    title: "Heavy Equipment Maintenance & Generator Overhaul",
    meta: "Dammam Facility · KSA",
    category: "Generator & Motor Repair",
    span: "lg:col-span-2",
    details: "Comprehensive overhaul of diesel generator sets, electric motor rewinding, and vibration analysis testing.",
  },
];

export function Projects() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section id="projects" tone="white">
      <SectionHeading
        eyebrow="Projects & Gallery"
        title="Featured Industrial Project Executions"
        intro="A showcase of site operations, steel pre-fabrication, electromechanical installations, and facility maintenance executed by Arzaq Express."
      />

      <div className="mt-14 grid auto-rows-[240px] gap-6 sm:auto-rows-[280px] sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.1} className={p.span}>
            <Card
              onClick={() => setActive(i)}
              className="group relative h-full w-full overflow-hidden border-border/80 text-left cursor-pointer hover:shadow-2xl transition-all duration-300 bg-slate-950"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1200}
                height={912}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />

              <div className="absolute top-4 left-4">
                <Badge className="bg-amber-600/90 hover:bg-amber-600 text-white font-semibold text-xs border-none">
                  {p.category}
                </Badge>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div className="min-w-0">
                  <h3 className="truncate font-display text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-1 truncate text-xs text-slate-300 font-medium">
                    {p.meta}
                  </p>
                </div>
                <div className="rounded-full bg-white/10 p-2.5 text-white backdrop-blur-md group-hover:bg-amber-600 group-hover:text-white transition-colors shrink-0">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Lightbox Modal using shadcn Dialog */}
      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        {active !== null && (
          <DialogContent className="max-w-3xl bg-slate-950 border-slate-800 text-white">
            <DialogHeader>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-amber-500/40 text-amber-400 bg-amber-500/10">
                  {projects[active].category}
                </Badge>
              </div>
              <DialogTitle className="text-xl font-bold text-white mt-1">
                {projects[active].title}
              </DialogTitle>
              <DialogDescription className="text-slate-400 text-xs sm:text-sm">
                {projects[active].meta}
              </DialogDescription>
            </DialogHeader>

            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-900 border border-slate-800 my-2">
              <img
                src={projects[active].img}
                alt={projects[active].title}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {projects[active].details}
            </p>
          </DialogContent>
        )}
      </Dialog>
    </Section>
  );
}