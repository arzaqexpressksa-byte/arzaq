import { Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "Services",
    links: ["Service One", "Service Two", "Service Three", "Service Four", "Service Five"],
  },
  {
    title: "Quick Links",
    links: ["Home", "About", "Core Values", "Projects", "Contact"],
  },
];

const socials = [Linkedin, Twitter, Facebook, Instagram];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="blueprint-grid-dark pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center border border-white/20">
                <span className="h-3.5 w-3.5 rotate-45 border border-gold" />
              </span>
              <span>
                <span className="block font-display text-[0.95rem] leading-tight font-bold text-white">
                  COMPANY NAME
                </span>
                <span className="block text-[0.6rem] tracking-[0.24em] text-white/45 uppercase">
                  Industrial Est.
                </span>
              </span>
            </div>
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/55">
              Company summary placeholder. Add a short closing description of the company for the
              footer.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social profile"
                  className="grid h-10 w-10 place-items-center border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[0.65rem] tracking-[0.22em] text-gold uppercase">{col.title}</h3>
              <ul className="mt-6 space-y-3.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[0.65rem] tracking-[0.22em] text-gold uppercase">Contact</h3>
            <ul className="mt-6 space-y-4 text-sm text-white/60">
              <li>Address Placeholder, Street, City, Country</li>
              <li>+000 0000 0000</li>
              <li>email@placeholder.com</li>
            </ul>
            <a href="#contact" className="btn-base btn-invert group mt-8 h-11 w-full px-5 text-[0.7rem]">
              Request a Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-[0.75rem] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}