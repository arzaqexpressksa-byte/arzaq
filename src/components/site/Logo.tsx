import { cn } from "@/lib/utils";
import logoEmblem from "@/assets/logo-emblem.png";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "auto";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  className,
  variant = "auto",
  showTagline = true,
  size = "md",
}: LogoProps) {
  const isDark = variant === "dark";

  const sizeClasses = {
    sm: "h-8 sm:h-9",
    md: "h-10 sm:h-12 lg:h-13",
    lg: "h-12 sm:h-14 lg:h-16",
  };

  return (
    <div className={cn("inline-flex items-center gap-3 select-none group", className)}>
      {/* AE Circular Emblem Icon with White Circular Backing so it pops out clearly */}
      <div className="relative flex items-center justify-center rounded-full bg-white p-1 shadow-md border border-amber-500/30 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <img
          src={logoEmblem}
          alt="ARZAQ EXPRESS INDUSTRIAL Est. Emblem"
          className={cn("w-auto object-contain shrink-0", sizeClasses[size])}
        />
      </div>

      {/* Brand Text — "ARZAQ" in Orange, "EXPRESS" in Black / Dark */}
      <div className="hidden sm:flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none font-display font-extrabold tracking-wider uppercase text-base sm:text-lg lg:text-xl">
          <span className="text-[#F36F21]">ARZAQ</span>
          <span className={cn(isDark ? "text-white" : "text-slate-900")}>EXPRESS</span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1 mt-1">
            <span className="h-0.5 w-2.5 bg-[#F36F21] rounded-full" />
            <span
              className={cn(
                "font-display text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.2em] uppercase leading-none",
                isDark ? "text-slate-300" : "text-slate-700"
              )}
            >
              INDUSTRIAL Est.
            </span>
            <span className="h-0.5 w-2.5 bg-[#F36F21] rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
}

export function Vision2030Badge({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold select-none shadow-sm", className)}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
      </span>
      <span>we are part of <strong className="font-bold tracking-wide text-amber-600 dark:text-amber-400">VISION 2030</strong> KSA</span>
    </div>
  );
}
