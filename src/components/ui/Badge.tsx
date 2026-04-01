import { cn } from "@/lib/cn";

type BadgeVariant = "promo" | "new" | "bestseller" | "default";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  promo: "bg-brand-accent text-white",
  new: "bg-brand-primary text-white",
  bestseller: "bg-brand-dark text-white",
  default: "bg-brand-surface text-brand-dark",
};

export function Badge({ variant = "default", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-[10px] font-heading font-semibold uppercase tracking-widest rounded",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
