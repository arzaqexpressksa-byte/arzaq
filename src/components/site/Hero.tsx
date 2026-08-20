  import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, FileText, ShieldCheck, CheckCircle2, Building2, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-industrial.jpg";
import { Counter } from "./Counter";
import { Vision2030Badge } from "./Logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const stats = [
  { v: 16, s: "+", l: "Core Industrial Services", l2: "Mechanical, Electrical, Civil & Fabrication" },
  { v: 100, s: "%", l: "Safety & Quality Standard", l2: "Compliant with International Codes" },
  { v: 24, s: "/7", l: "On-Site Support", l2: "Serving Dammam & Across KSA" },
];

export function Hero() {
  const [pdfDialogOpen, setPdfDialogOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-slate-50 text-slate-900">
      {/* Background Hero Image */}
      <img
        src={heroImg}
        alt="Arzaq Express Industrial Plant Facilities in Dammam KSA"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
      />
      
      {/* Light Overlay Gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-50 via-slate-50/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1280px] flex-col justify-between px-4 pt-32 pb-12 sm:px-6 lg:px-8 lg:pt-36 lg:pb-16">
        <div className="max-w-3xl">
          {/* Vision 2030 & Location Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <Vision2030Badge />
            <Badge variant="outline" className="border-white/20 bg-white/5 text-white/90 gap-1.5 py-1 px-3">
              <MapPin className="h-3.5 w-3.5 text-amber-500" />
              <span>Dammam, Eastern Province, Saudi Arabia</span>
            </Badge>
          </motion.div>

          {/* Main Headline: "ARZAQ" in Orange (#F36F21), "EXPRESS Est." in Black (#000000) */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            <span className="text-[#F36F21]">ARZAQ</span>{" "}
            <span className="text-black">EXPRESS</span> <br />
            <span className="text-black">Est.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-5 text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed font-medium"
          >
            Delivering high-quality industrial services across Mechanical Engineering, Civil Construction, 
            Certified Welding & Fabrication, Electrical Systems, Instrumentation, Generator & Motor Overhaul, 
            and Materials Supply. Serving Dammam & Across the Kingdom of Saudi Arabia.
          </motion.p>

          {/* Highlights Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-800 font-semibold"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
              <span>Certified Technical Engineers & Welders</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-amber-600 shrink-0" />
              <span>Oil & Gas, Petrochemical & Power Sectors</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-amber-600 shrink-0" />
              <span>International Standards Compliance</span>
            </div>
          </motion.div>

          {/* CTA Buttons using shadcn Button & Dialog */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button
              size="lg"
              className="bg-[#F36F21] hover:bg-orange-600 text-white font-bold tracking-wide shadow-lg shadow-orange-500/25 gap-2 text-sm sm:text-base px-6 h-12"
              asChild
            >
              <a href="#services">
                <span>Explore 16 Services</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>

            <Dialog open={pdfDialogOpen} onOpenChange={setPdfDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 bg-white text-slate-900 hover:bg-slate-100 font-bold gap-2 text-sm sm:text-base px-6 h-12 shadow-sm"
                >
                  <FileText className="h-4 w-4 text-amber-600" />
                  <span>View Company Profile PDF</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl h-[85vh] p-4 flex flex-col bg-white text-slate-900 border-slate-200">
                <DialogHeader className="mb-2">
                  <DialogTitle className="text-xl font-bold flex items-center gap-2 text-[#F36F21]">
                    <FileText className="h-5 w-5" />
                    ARZAQ EXPRESS Est. — Company Profile
                  </DialogTitle>
                  <DialogDescription className="text-slate-600">
                    Official Company Profile (21 Pages). You can view below or download directly.
                  </DialogDescription>
                </DialogHeader>

                <div className="flex-1 w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                  <iframe
                    src="/business/profile.pdf"
                    title="Arzaq Express Est Profile PDF"
                    className="w-full h-full border-0"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-3">
                  <Button variant="outline" size="sm" onClick={() => setPdfDialogOpen(false)}>
                    Close
                  </Button>
                  <Button size="sm" className="bg-[#F36F21] hover:bg-orange-600 text-white gap-2" asChild>
                    <a href="/business/profile.pdf" download="Arzaq_Express_Industrial_Est_Profile.pdf">
                      <FileText className="h-4 w-4" />
                      <span>Download PDF</span>
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>

        {/* Counter Stats Cards using shadcn Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {stats.map((m) => (
            <Card key={m.l} className="border-slate-200/80 bg-white/90 backdrop-blur-md text-slate-900 shadow-xl">
              <CardContent className="p-5">
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#F36F21]">
                  <Counter to={m.v} suffix={m.s} />
                </div>
                <div className="mt-2 font-bold text-sm text-slate-900">{m.l}</div>
                <div className="text-xs text-slate-600 mt-1 font-medium">{m.l2}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}