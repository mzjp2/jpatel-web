import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "text-xs font-heading font-semibold uppercase tracking-[0.25em] mb-3",
            light ? "text-white/60" : "text-brand-primary"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight leading-tight",
          light ? "text-white" : "text-brand-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed max-w-2xl",
            align === "center" ? "mx-auto" : "",
            light ? "text-white/75" : "text-brand-muted"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-5 h-0.5 w-12",
          align === "center" ? "mx-auto" : "",
          light ? "bg-white/30" : "bg-brand-primary"
        )}
      />
    </div>
  );
}
