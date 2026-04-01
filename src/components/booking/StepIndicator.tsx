import { Check } from "lucide-react";

const steps = [
  { n: 1, label: "Location" },
  { n: 2, label: "Date & Time" },
  { n: 3, label: "Your Details" },
  { n: 4, label: "Confirm" },
];

interface StepIndicatorProps {
  current: number;
}

export default function StepIndicator({ current }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center mb-10">
      {steps.map(({ n, label }, i) => (
        <div key={n} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                n < current
                  ? "bg-brand-primary text-white"
                  : n === current
                  ? "bg-brand-primary text-white ring-4 ring-brand-primary/20"
                  : "bg-brand-surface border-2 border-brand-border text-brand-muted"
              }`}
            >
              {n < current ? <Check className="h-4 w-4" /> : n}
            </div>
            <span
              className={`mt-1.5 text-[10px] font-heading font-semibold uppercase tracking-wider ${
                n <= current ? "text-brand-primary" : "text-brand-muted"
              }`}
            >
              {label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`h-0.5 w-16 sm:w-24 mx-2 mb-4 transition-colors ${
                n < current ? "bg-brand-primary" : "bg-brand-border"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
