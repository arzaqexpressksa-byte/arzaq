import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Globe, Clock, Send, FileText, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Vision2030Badge } from "./Logo";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  company: z.string().trim().max(120).optional(),
  phone: z.string().trim().max(40).optional(),
  service: z.string().trim().optional(),
  message: z.string().trim().min(1, "Please enter your inquiry details").max(2000),
});

const contactDetails = [
  {
    icon: MapPin,
    label: "Head Office Address",
    value: "Omar Bin Al-Khattab Street, Noor Complex, Dammam, Kingdom of Saudi Arabia",
    href: "https://maps.google.com/?q=Dammam+Saudi+Arabia",
  },
  {
    icon: Phone,
    label: "Phone & WhatsApp",
    value: "+966-536083965 / +966-590316144",
    href: "tel:+966536083965",
  },
  {
    icon: Mail,
    label: "Official Emails",
    value: "sales@arzaqexpressksa.com | info@arzaqexpressksa.com",
    href: "mailto:sales@arzaqexpressksa.com",
  },
  {
    icon: Globe,
    label: "Official Website",
    value: "www.arzaqexpressksa.com",
    href: "https://www.arzaqexpressksa.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Saturday – Thursday, 08:00 AM – 06:00 PM (Emergency 24/7 Support)",
    href: null,
  },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form inputs");
      return;
    }

    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Inquiry Submitted Successfully!", {
        description: "Thank you for reaching out to ARZAQ EXPRESS INDUSTRIAL Est. Our engineering sales team will contact you shortly.",
      });
    }, 800);
  };

  return (
    <Section id="contact" tone="white">
      <SectionHeading
        eyebrow="Contact Us"
        title="Start a Project Conversation With Arzaq Express"
        intro="Contact our engineering and sales department in Dammam for project inquiries, technical specifications, or emergency service requests."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
        {/* Left Column: Official Contact Information */}
        <div className="flex flex-col gap-6">
          <Reveal>
            <Card className="border-border/80 bg-slate-950 text-white shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-amber-500/40 text-amber-400 bg-amber-500/10 font-semibold text-xs">
                    Page 21 Profile
                  </Badge>
                  <Vision2030Badge />
                </div>
                <CardTitle className="text-xl font-bold text-white mt-3">
                  ARZAQ EXPRESS INDUSTRIAL Est.
                </CardTitle>
                <CardDescription className="text-slate-400 text-xs sm:text-sm">
                  Dammam & Jubail, Eastern Province, Kingdom of Saudi Arabia
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-2">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="rounded-xl bg-slate-800 p-2.5 text-amber-400 shrink-0 mt-0.5">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm font-semibold text-white hover:text-amber-400 transition-colors block mt-0.5 break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-xs sm:text-sm font-semibold text-white mt-0.5 break-words">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-2 border-amber-500/40 text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 font-semibold"
                    asChild
                  >
                    <a href="/business/profile.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4" />
                      <span>Download Official Company Profile PDF</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        {/* Right Column: Inquiry Form using shadcn UI components */}
        <Reveal delay={2}>
          <Card className="border-border/80 shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                Send an Industrial Service Inquiry
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Fill out the form below to receive a quotation or schedule a technical call with our engineering team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-foreground">
                      Full Name *
                    </label>
                    <Input id="name" name="name" placeholder="Eng. Ahmed Al-Otaibi" required />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-foreground">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" placeholder="name@company.com" required />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-xs font-semibold text-foreground">
                      Company / Facility Name
                    </label>
                    <Input id="company" name="company" placeholder="Petrochemical Co." />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-foreground">
                      Phone / Mobile Number
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="+966 5X XXX XXXX" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-xs font-semibold text-foreground">
                    Required Service Category
                  </label>
                  <Input
                    id="service"
                    name="service"
                    placeholder="e.g. Mechanical Work, Welding Solution, Motor Winding, Dewatering Pump Rental"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-foreground">
                    Project Scope & Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Please specify project requirements, site location, timeline, and technical specifications..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold gap-2 shadow-lg h-11"
                >
                  <Send className="h-4 w-4" />
                  <span>{sending ? "Submitting Inquiry..." : "Submit Project Inquiry"}</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}