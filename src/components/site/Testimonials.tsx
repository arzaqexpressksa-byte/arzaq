import { Star, Quote } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    quote: "ARZAQ EXPRESS delivered exceptional pre-fabrication and welding solutions during our plant maintenance shutdown in Jubail. Their certified welders met strict ASME standards with zero safety incidents.",
    author: "Eng. Fahad Al-Otaibi",
    role: "Plant Maintenance Manager",
    company: "Petrochemical Complex, Jubail",
    initials: "FO",
  },
  {
    quote: "The generator overhaul and motor rewinding services provided by Arzaq Express saved us significant replacement costs. Their team was professional, fast, and delivered right on schedule.",
    author: "Mohammed Al-Ghamdi",
    role: "Operations Director",
    company: "Industrial Manufacturing Facility, Dammam",
    initials: "MG",
  },
  {
    quote: "We relied on Arzaq Express for dewatering pump rentals and FRP piping installation for our site earthworks. Outstanding technical expertise and 24/7 support throughout the project.",
    author: "Tariq H. Al-Mansoori",
    role: "Senior Civil Project Engineer",
    company: "Infrastructure Contracting Co, Khobar",
    initials: "TM",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" tone="stone" className="bg-slate-100/80 dark:bg-slate-900/40">
      <SectionHeading
        eyebrow="Client Trust"
        title="What Industrial Partners Say About Arzaq Express"
        align="center"
        intro="Trusted by project managers, plant directors, and engineering heads across the Eastern Province."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 0.15}>
            <Card className="h-full border-border/80 bg-card hover:border-amber-500/40 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-amber-500/30" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                  <Avatar className="h-10 w-10 border border-amber-500/30 bg-amber-500/10 text-amber-600 font-bold">
                    <AvatarFallback>{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{t.author}</h4>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                    <p className="text-[0.65rem] text-amber-600 dark:text-amber-400 font-semibold">{t.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}