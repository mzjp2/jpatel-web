import Link from "next/link";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { locations } from "@/data/locations";

export default function BookingCTA() {
  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-primary text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4">
              Ready to book?
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-white leading-tight mb-5">
              5 Locations
              <br />
              Across Mauritius
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
              Whether you&apos;re in the north, south, east or centre — there&apos;s a Jeff
              Patel branch near you. Book online in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="primary" size="lg">
                <Link href="/book">
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:border-white"
              >
                <Link href="/locations">
                  <MapPin className="h-4 w-4" />
                  Find a Store
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.id}
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl border border-white/10 hover:border-brand-primary/50 hover:bg-white/5 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-brand-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-heading font-semibold text-white text-sm uppercase tracking-wide group-hover:text-brand-primary transition-colors">
                      {loc.name}
                    </p>
                    {loc.mall && (
                      <p className="text-xs text-white/40 mt-0.5">{loc.mall}</p>
                    )}
                    <p className="text-xs text-white/50 mt-1">{loc.phone}</p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-white/20 group-hover:text-brand-primary ml-auto shrink-0 mt-0.5 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
