import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const faqs = Array.from({ length: 6 }, (_, i) => ({
  q: `Frequently Asked Question ${i + 1}`,
  a: "Answer placeholder. Replace with the full answer text covering scope, timelines, compliance or commercial terms as relevant.",
}));

export function Faq() {
  return (
    <Section id="faq" tone="warm">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to Common Enquiries"
          intro="Section intro placeholder. Add a short lead-in for the questions below."
        />
        <Reveal delay={1}>
          <Accordion type="single" collapsible className="w-full border-t border-border">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="gap-6 py-6 text-left font-display text-base font-semibold text-navy hover:no-underline data-[state=open]:text-gold sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-7 text-sm leading-relaxed text-muted-foreground sm:text-base">
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