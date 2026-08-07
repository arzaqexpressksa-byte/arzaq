import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Core Values", href: "#values" },
  { label: "Mission & Vision", href: "#mission" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "border-border bg-background/90 shadow-[0_1px_24px_-12px_rgba(11,31,51,0.35)] backdrop-blur-xl"
          : "border-white/10 bg-navy/20 backdrop-blur-[2px]",
      )}
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:px-12">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span
            className={cn(
              "grid h-10 w-10 shrink-0 place-items-center border",
              scrolled ? "border-navy/15" : "border-white/25",
            )}
          >
            <span className="h-3.5 w-3.5 rotate-45 border border-gold" />
          </span>
          <span className="min-w-0">
            <span
              className={cn(
                "block truncate font-display text-[0.95rem] leading-tight font-bold tracking-[0.04em]",
                scrolled ? "text-navy" : "text-white",
              )}
            >
              COMPANY NAME
            </span>
            <span
              className={cn(
                "block truncate text-[0.6rem] tracking-[0.24em] uppercase",
                scrolled ? "text-muted-foreground" : "text-white/60",
              )}
            >
              Industrial Est.
            </span>
          </span>
        </a>

        <nav className="hidden justify-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "relative py-1 text-[0.8rem] font-medium tracking-wide transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100",
                scrolled ? "text-charcoal/75 hover:text-navy" : "text-white/80 hover:text-white",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <a
            href="#contact"
            className={cn(
              "btn-base hidden h-11 px-6 text-[0.7rem] sm:inline-flex",
              scrolled ? "btn-solid" : "bg-white text-navy hover:bg-gold hover:text-white",
            )}
          >
            Request a Quote
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-11 w-11 shrink-0 place-items-center border transition-colors hover:border-gold hover:text-gold lg:hidden",
              scrolled ? "border-navy/15 text-navy" : "border-white/25 text-white",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-border bg-background lg:hidden"
          >
            <nav className="mx-auto flex max-w-[1280px] flex-col px-5 py-4 sm:px-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-border/70 py-4 font-display text-lg font-medium text-navy last:border-0"
                >
                  {l.label}
                  <ArrowUpRight className="h-4 w-4 text-gold" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-base btn-solid mt-5 mb-2 w-full"
              >
                Request a Quote
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}