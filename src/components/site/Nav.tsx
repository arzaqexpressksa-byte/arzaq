import { useEffect, useState } from "react";
import { Menu, Phone, FileText, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo, Vision2030Badge } from "./Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// EXACT 3 NAVLINKS + SECTIONS
const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Scaffolding & Towers", href: "#scaffolding" },
  { label: "Heavy Equipment", href: "#equipment" },
  { label: "Contact us", href: "#contact" },
];

export function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className}
    >
      <path
        fill="#25D366"
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"
      />
      <path
        fill="#FFFFFF"
        d="M223.9 413.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
      />
    </svg>
  );
}

// Single Floating WhatsApp Icon Button (No full text)
export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/966536083965?text=Hello%20Arzaq%20Express,%20I%20would%20like%20to%20inquire%20about%20your%20industrial%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp (+966 53 608 3965)"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 hover:scale-110 hover:bg-[#20ba59] focus:outline-none ring-4 ring-emerald-400/30"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b shadow-sm backdrop-blur-md",
          scrolled
            ? "border-slate-200 bg-white/95 py-2.5 shadow-md"
            : "border-slate-200/80 bg-white/90 py-3.5"
        )}
      >
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo with Light Background */}
          <a href="#home" className="group focus:outline-none">
            <Logo variant="light" size="md" />
          </a>

          {/* Navlinks */}
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-bold text-slate-800 transition-colors px-2 py-1 rounded-md hover:text-amber-600"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Side: Display Phone Number & Single WhatsApp Icon */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Phone Number Display */}
            <a
              href="tel:+966536083965"
              className="flex items-center gap-2 text-xs sm:text-sm font-bold transition-colors px-3.5 py-1.5 rounded-full border border-slate-300 text-slate-900 hover:text-amber-600 bg-slate-50 hover:bg-slate-100 shadow-sm"
            >
              <Phone className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
              <span>+966 53 608 3965</span>
            </a>

            {/* Single WhatsApp Icon Button (No full text) */}
            <a
              href="https://wa.me/966536083965?text=Hello%20Arzaq%20Express,%20I%20would%20like%20to%20inquire%20about%20your%20industrial%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp (+966 53 608 3965)"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform duration-200 hover:scale-110 hover:bg-[#20ba59]"
            >
              <WhatsAppIcon className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile Bar: Phone link, Single WhatsApp Icon & Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+966536083965"
              className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-full border border-slate-300 text-slate-900 bg-slate-50 shadow-sm md:hidden"
            >
              <Phone className="h-3 w-3 text-amber-500" />
              <span>Call</span>
            </a>

            {/* Mobile Single WhatsApp Icon */}
            <a
              href="https://wa.me/966536083965?text=Hello%20Arzaq%20Express,%20I%20would%20like%20to%20inquire%20about%20your%20industrial%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md md:hidden"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 border-slate-300 text-slate-900 bg-slate-50"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 bg-white text-slate-900">
                <SheetHeader className="text-left mb-6">
                  <SheetTitle>
                    <Logo size="sm" showTagline={true} variant="light" />
                  </SheetTitle>
                  <div className="pt-2">
                    <Vision2030Badge />
                  </div>
                </SheetHeader>

                {/* Navlinks for Mobile */}
                <div className="flex flex-col gap-2 py-4">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-bold text-slate-900 transition-colors hover:bg-slate-100"
                    >
                      <span>{l.label}</span>
                      <ChevronRight className="h-4 w-4 text-amber-500" />
                    </a>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  {/* Phone Call Link */}
                  <Button
                    variant="outline"
                    className="w-full gap-2 justify-center font-bold text-xs uppercase border-slate-300 text-slate-900"
                    asChild
                  >
                    <a href="tel:+966536083965">
                      <Phone className="h-4 w-4 text-amber-500" />
                      <span>Call: +966 53 608 3965</span>
                    </a>
                  </Button>

                  {/* Single WhatsApp Icon Row Link for Mobile Drawer */}
                  <Button
                    className="w-full gap-2 justify-center bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase shadow"
                    asChild
                  >
                    <a
                      href="https://wa.me/966536083965?text=Hello%20Arzaq%20Express,%20I%20would%20like%20to%20inquire%20about%20your%20industrial%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      <span>WhatsApp Direct Chat</span>
                    </a>
                  </Button>

                  <Button
                    variant="secondary"
                    className="w-full gap-2 justify-center font-semibold text-xs"
                    asChild
                  >
                    <a
                      href="/business/profile.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      <FileText className="h-4 w-4 text-amber-500" />
                      <span>Company Profile PDF</span>
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Single Floating WhatsApp Icon Button at Bottom Right */}
      <FloatingWhatsAppButton />
    </>
  );
}