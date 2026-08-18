import { FileText, Phone, Mail, MapPin, ArrowUp, ArrowUpRight } from "lucide-react";
import { Logo, Vision2030Badge } from "./Logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const serviceLinks = [
  { label: "Mechanical Work", href: "#services" },
  { label: "Welding Solution", href: "#services" },
  { label: "Generator Maintenance", href: "#services" },
  { label: "Forklift Servicing", href: "#services" },
  { label: "FRP / RTR Piping", href: "#services" },
  { label: "Civil Works", href: "#services" },
  { label: "Electrical & Instrumentation", href: "#services" },
  { label: "Electric Motor Winding", href: "#services" },
  { label: "Demolition Work", href: "#services" },
];

const companyLinks = [
  { label: "Home", href: "#home" },
  { label: "About Company", href: "#about" },
  { label: "Core Values", href: "#values" },
  { label: "Mission & Vision", href: "#mission" },
  { label: "Featured Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="blueprint-grid-dark pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Column 1: Logo, Vision 2030, Description */}
          <div className="space-y-6">
            <Logo variant="dark" size="md" />

            <div className="pt-1">
              <Vision2030Badge />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              At ARZAQ EXPRESS Est., located in Dammam, we are recognized for delivering a wide range of high-quality industrial services in mechanical engineering, civil construction, welding & fabrication, electrical systems, and instrumentation across Saudi Arabia.
            </p>

            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-amber-500/40 text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 font-semibold text-xs"
                asChild
              >
                <a href="/business/profile.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  <span>Download Company Profile PDF</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-5">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {companyLinks.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{c.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-5">
              Head Office
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Omar Bin Al-Khattab Street, Noor Complex, Dammam, Kingdom of Saudi Arabia</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="flex items-center gap-1.5 flex-wrap">
                  <a href="tel:+966590316144" className="hover:text-amber-400 transition-colors">
                    +966-590316144
                  </a>
                  <span>/</span>
                  <a href="tel:+966536083965" className="hover:text-amber-400 transition-colors">
                    +966-536083965
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <a href="mailto:sales@arzaqexpressksa.com" className="hover:text-amber-400 transition-colors">
                  sales@arzaqexpressksa.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Button
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs gap-2 uppercase tracking-wider"
                asChild
              >
                <a href="#contact">
                  <span>Request Quote</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-slate-800" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ARZAQ EXPRESS Est. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Vision 2030 Saudi Arabia Partner</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}