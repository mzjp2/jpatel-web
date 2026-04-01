import type { Metadata } from "next";
import Link from "next/link";
import { Star, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import ReviewCard from "@/components/reviews/ReviewCard";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read what our patients across Mauritius say about Jeff Patel Optometrist. Over 50,000 happy patients served.",
};

const avgRating =
  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

export default function ReviewsPage() {
  const fiveStars = reviews.filter((r) => r.rating === 5).length;
  const fourStars = reviews.filter((r) => r.rating === 4).length;

  return (
    <>
      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <p className="text-brand-primary text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4">
                Patient Feedback
              </p>
              <h1 className="text-5xl font-heading font-bold uppercase text-white leading-tight">
                Customer Reviews
              </h1>
              <p className="mt-4 text-white/60 max-w-md">
                Real reviews from real patients, pulled directly from our Google
                Business profiles across all 5 branches.
              </p>
              <p className="mt-3 text-xs text-white/30 italic">
                Note: When live, these will be fetched from the Google Places API.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 text-center shrink-0 min-w-[200px]">
              <p className="text-6xl font-heading font-bold text-white">
                {avgRating.toFixed(1)}
              </p>
              <div className="flex justify-center gap-1 my-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.round(avgRating)
                        ? "fill-brand-accent text-brand-accent"
                        : "text-white/20"
                    }`}
                  />
                ))}
              </div>
              <p className="text-white/60 text-sm">{reviews.length} reviews</p>
              <p className="text-white/40 text-xs mt-1">on Google</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Rating breakdown */}
          <div className="bg-white rounded-xl border border-brand-border p-6 mb-12 max-w-sm mx-auto">
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-brand-muted mb-4 text-center">
              Rating Breakdown
            </p>
            {[5, 4, 3, 2, 1].map((star) => {
              const count = reviews.filter((r) => r.rating === star).length;
              const pct = (count / reviews.length) * 100;
              return (
                <div key={star} className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-brand-dark w-4">{star}</span>
                  <Star className="h-3.5 w-3.5 fill-brand-accent text-brand-accent shrink-0" />
                  <div className="flex-1 h-2 bg-brand-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-accent rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-brand-muted w-4">{count}</span>
                </div>
              );
            })}
          </div>

          <SectionHeading
            label={`${reviews.length} verified reviews`}
            title="What Our Patients Say"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-primary text-white text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight mb-4">
            Experience It Yourself
          </h2>
          <p className="text-white/75 mb-8">
            Join thousands of satisfied patients. Book your eye test today.
          </p>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
            <Link href="/book">
              <Calendar className="h-4 w-4" />
              Book an Appointment
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
