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
    sm: "h-9 sm:h-10",
    md: "h-11 sm:h-13 lg:h-14",
    lg: "h-14 sm:h-16 lg:h-20",
  };

  return (
    <div className={cn("inline-flex items-center gap-3 select-none", className)}>
      {/* AE Circular Emblem Icon */}
      <img
        src={logoEmblem}
        alt="ARZAQ EXPRESS INDUSTRIAL Est. Emblem"
        className={cn("w-auto object-contain shrink-0 transition-all duration-300 drop-shadow-sm", sizeClasses[size])}
      />

      {/* Brand Text — Shown on Big Devices (sm and up), Hidden on Small Devices (mobile) */}
      <div className="hidden sm:flex flex-col justify-center">
        <div className="flex items-center gap-1 leading-none">
          <span
            className={cn(
              "font-display font-extrabold tracking-wider uppercase text-sm sm:text-base lg:text-lg",
              isDark ? "text-white" : "text-[#0C2340]"
            )}
          >
            ARZAQ <span className="text-[#F36F21]">EXPRESS</span>
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1 mt-1">
            <span className="h-0.5 w-2.5 bg-[#F36F21] rounded-full" />
            <span
              className={cn(
                "font-display text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.2em] uppercase leading-none",
                isDark ? "text-white/80" : "text-[#0C2340]/90"
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
    <div className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold select-none", className)}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
      </span>
      <span>we are part of <strong className="font-bold tracking-wide">VISION 2030</strong> KSA</span>
    </div>
  );
}
