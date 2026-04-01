import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviews } from "@/data/reviews";

const featured = reviews.slice(0, 3);

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

export default function TestimonialsTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What our patients say"
          title="5-Star Reviews"
          subtitle="Don't just take our word for it. Here's what our patients across Mauritius have to say."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-xl bg-brand-surface border border-brand-border"
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 text-sm text-brand-dark leading-relaxed line-clamp-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-brand-dark">{review.name}</p>
                  <p className="text-xs text-brand-muted">
                    {new Date(review.date).toLocaleDateString("en-MU", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <span className="text-[10px] text-brand-muted uppercase tracking-wider flex items-center gap-1">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M44.5 20H24v8h11.9c-1.1 4.2-4.9 7-10 7-5.9 0-10.7-4.8-10.7-10.7S10 14.6 15.9 14.6c2.7 0 5.1 1 6.9 2.6l5.7-5.7C25.3 8.9 20.9 7 16 7 8.3 7 2 13.3 2 21s6.3 14 14 14c8 0 13.7-5.6 13.7-13.5 0-.9-.1-1.7-.2-2.5z"
                      fill="#4285F4"
                    />
                    <path
                      d="M6.3 14.7l6.6 4.8c1.7-4.1 5.7-7 10.4-7 2.7 0 5.1 1 6.9 2.6l5.7-5.7C32.9 6.9 28.5 5 23.6 5c-7.3 0-13.6 4.3-16.8 10.2"
                      fill="#34A853"
                    />
                    <path
                      d="M23.6 43c4.7 0 8.7-1.6 11.6-4.3l-5.4-4.5c-1.6 1.1-3.7 1.7-6.2 1.7-5 0-9.2-3.4-10.7-8.1L6.3 33c3.2 6.3 9.8 10 17.3 10z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M44.5 20H24v8h11.9c-.7 2.6-2.3 4.8-4.5 6.2l5.4 4.5c3.1-2.9 5.2-7.3 5.2-12.7 0-.9-.1-1.7-.2-2.5"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-sm font-heading font-semibold uppercase tracking-wider text-brand-primary hover:text-brand-primary-dark transition-colors"
          >
            Read all reviews
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
