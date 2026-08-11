import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What core industrial services does ARZAQ EXPRESS INDUSTRIAL Est. specialize in?",
    a: "We provide 16 specialized industrial service categories across mechanical engineering, certified welding & pre-fabrication (SMAW, MIG, TIG, FCAW, SAW), generator repair, forklift fleet maintenance, electric motor winding, FRP/RTR and HDPE piping, civil works, E&I services, industrial materials supply, waterproofing/epoxy coating, asphalt works, de-watering pump rental & sales, and controlled demolition work.",
  },
  {
    q: "Where is Arzaq Express located and what regions do you serve?",
    a: "Our head office is located on Omar Bin Al-Khattab Street, Noor Complex, Dammam, Kingdom of Saudi Arabia. We serve industrial clients in Dammam, Jubail Industrial City, Al-Khobar, Ras Tanura, and throughout the Eastern Province and KSA.",
  },
  {
    q: "Are your welders, engineers, and technicians certified?",
    a: "Yes. All our welding operations are performed by certified professionals adhering strictly to international welding codes (ASME Section IX, AWS D1.1). Our engineering team ensures full compliance with client specifications, Aramco/SABIC requirements, and OSHA safety standards.",
  },
  {
    q: "Do you offer emergency on-site generator repair or de-watering pump rentals?",
    a: "Yes, we maintain prompt emergency response teams for diesel & gas generator breakdowns, as well as high-capacity de-watering pump rentals for construction site drainage, pipeline hydrostatic testing, flood control, and municipal bypass pumping.",
  },
  {
    q: "What types of piping systems do you fabricate and install?",
    a: "We specialize in corrosion-resistant Fiber Reinforced Plastic (FRP), Reinforced Thermosetting Resin (RTR), High-Density Polyethylene (HDPE) fusion jointing, CPVC high-temperature piping, PVC, as well as stainless steel, carbon steel, and alloy pipelines.",
  },
  {
    q: "How can I request a technical commercial quote or download the company profile?",
    a: "You can click 'Company Profile' in the top header or hero section to view and download our official 21-page PDF document. Alternatively, fill out the enquiry form below or contact our sales team directly at sales@arzaqexpressksa.com or +966-536083965 / +966-590316144.",
  },
];

export function Faq() {
  return (
    <Section id="faq" tone="warm" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          intro="Find clear answers regarding our service scope, safety standards, regional presence, and procurement process."
        />

        <Reveal delay={1}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border border-border/80 bg-card rounded-xl px-5 transition-all data-[state=open]:border-amber-500/50 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="py-4 text-left font-display text-base font-bold text-foreground hover:no-underline hover:text-amber-600 dark:hover:text-amber-400">
                  <div className="flex items-center gap-3 pr-2">
                    <HelpCircle className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>{f.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-xs sm:text-sm leading-relaxed text-muted-foreground pt-1">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}