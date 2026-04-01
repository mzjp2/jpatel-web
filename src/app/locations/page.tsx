import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import LocationCard from "@/components/locations/LocationCard";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Our Stores",
  description:
    "Five Jeff Patel Optometrist branches across Mauritius — Quatre-Bornes, Port-Louis, Floreal, Grand Baie, and Vacoas.",
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-primary text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4">
            Find Us
          </p>
          <h1 className="text-5xl font-heading font-bold uppercase text-white leading-tight">
            Our 5 Branches
          </h1>
          <p className="mt-5 text-white/60 max-w-xl mx-auto">
            From Port-Louis to Grand Baie, there&apos;s a Jeff Patel branch close to you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Where to find us"
            title="Locations Across Mauritius"
            subtitle="Walk in anytime during opening hours, or book an appointment for a guaranteed time slot."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick contact */}
      <section className="py-16 bg-brand-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold uppercase text-brand-dark tracking-tight">
              Get In Touch
            </h2>
            <p className="text-brand-muted mt-3">
              Call your nearest branch or book an appointment online.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {locations.map((loc) => (
              <a
                key={loc.id}
                href={`tel:${loc.phone.replace(/\s/g, "")}`}
                className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-brand-border hover:border-brand-primary hover:shadow-md transition-all text-center group"
              >
                <Phone className="h-5 w-5 text-brand-primary" />
                <span className="text-xs font-heading font-semibold uppercase tracking-wide text-brand-dark group-hover:text-brand-primary transition-colors">
                  {loc.name}
                </span>
                <span className="text-xs text-brand-muted">{loc.phone}</span>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="primary" size="lg">
              <Link href="/book">
                <Calendar className="h-4 w-4" />
                Book an Appointment
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
