import { Star } from "lucide-react";
import type { Review } from "@/types/review";

interface ReviewCardProps {
  review: Review;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-brand-accent text-brand-accent" : "text-brand-border"
          }`}
        />
      ))}
    </div>
  );
}

const GoogleIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 48 48" fill="none">
    <path d="M44.5 20H24v8h11.9c-1.1 4.2-4.9 7-10 7-5.9 0-10.7-4.8-10.7-10.7S10 14.6 15.9 14.6c2.7 0 5.1 1 6.9 2.6l5.7-5.7C25.3 8.9 20.9 7 16 7 8.3 7 2 13.3 2 21s6.3 14 14 14c8 0 13.7-5.6 13.7-13.5 0-.9-.1-1.7-.2-2.5z" fill="#4285F4" />
    <path d="M6.3 14.7l6.6 4.8c1.7-4.1 5.7-7 10.4-7 2.7 0 5.1 1 6.9 2.6l5.7-5.7C32.9 6.9 28.5 5 23.6 5c-7.3 0-13.6 4.3-16.8 10.2" fill="#34A853" />
    <path d="M23.6 43c4.7 0 8.7-1.6 11.6-4.3l-5.4-4.5c-1.6 1.1-3.7 1.7-6.2 1.7-5 0-9.2-3.4-10.7-8.1L6.3 33c3.2 6.3 9.8 10 17.3 10z" fill="#FBBC05" />
    <path d="M44.5 20H24v8h11.9c-.7 2.6-2.3 4.8-4.5 6.2l5.4 4.5c3.1-2.9 5.2-7.3 5.2-12.7 0-.9-.1-1.7-.2-2.5" fill="#EA4335" />
  </svg>
);

export default function ReviewCard({ review }: ReviewCardProps) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="bg-white rounded-xl p-6 border border-brand-border h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <StarRating rating={review.rating} />
        <div className="flex items-center gap-1 text-xs text-brand-muted">
          <GoogleIcon />
          <span>Google</span>
        </div>
      </div>
      <p className="text-sm text-brand-dark leading-relaxed flex-1 mb-5">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary/10 shrink-0">
          <span className="text-xs font-heading font-bold text-brand-primary">
            {initials}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-dark">{review.name}</p>
          <p className="text-xs text-brand-muted">
            {new Date(review.date).toLocaleDateString("en-MU", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
