import * as React from "react";
import { cn } from "@/lib/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-dark"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-11 w-full rounded border bg-white px-3 text-sm text-brand-dark placeholder:text-brand-muted",
            "focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent",
            "transition-colors duration-200",
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-brand-border hover:border-brand-muted",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-600">{error}</p>}
        {hint && !error && <p className="text-xs text-brand-muted">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
