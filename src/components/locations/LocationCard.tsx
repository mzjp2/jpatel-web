import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import type { Location } from "@/types/location";

interface LocationCardProps {
  location: Location;
}

const dayAbbr: Record<string, string> = {
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
  Sunday: "Sun",
};

export default function LocationCard({ location }: LocationCardProps) {
  const todayIndex = new Date().getDay(); // 0 = Sun
  const dayOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = dayOrder[todayIndex];
  const todayHours = location.hours.find((h) => h.day === todayName);

  return (
    <div className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={location.imageUrl}
          alt={location.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {location.mall && (
          <div className="absolute bottom-3 left-3 bg-brand-primary text-white text-xs font-heading font-semibold uppercase tracking-wider px-3 py-1 rounded">
            {location.mall}
          </div>
        )}
      </div>

      <div className="p-6">
        <h2 className="text-xl font-heading font-bold uppercase tracking-wide text-brand-dark mb-4">
          {location.name}
        </h2>

        <div className="space-y-3 mb-5">
          <div className="flex items-start gap-2.5 text-sm text-brand-muted">
            <MapPin className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
            <span>{location.address}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-brand-muted">
            <Phone className="h-4 w-4 text-brand-primary shrink-0" />
            <a
              href={`tel:${location.phone.replace(/\s/g, "")}`}
              className="hover:text-brand-primary transition-colors"
            >
              {location.phone}
            </a>
          </div>
          {todayHours && (
            <div className="flex items-center gap-2.5 text-sm">
              <Clock className="h-4 w-4 text-brand-primary shrink-0" />
              <span className="text-brand-dark font-medium">Today: </span>
              <span className="text-brand-muted">
                {todayHours.closed
                  ? "Closed"
                  : `${todayHours.open} – ${todayHours.close}`}
              </span>
            </div>
          )}
        </div>

        {/* Hours table */}
        <div className="border-t border-brand-border pt-4 mb-5">
          <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.2em] text-brand-muted mb-3">
            Opening Hours
          </p>
          <div className="space-y-1.5">
            {location.hours.map((h) => (
              <div key={h.day} className="flex justify-between text-xs">
                <span
                  className={`font-medium ${h.day === todayName ? "text-brand-primary" : "text-brand-dark"}`}
                >
                  {dayAbbr[h.day]}
                </span>
                <span className="text-brand-muted">
                  {h.closed ? "Closed" : `${h.open} – ${h.close}`}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Link
          href={location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded border border-brand-border text-sm font-heading font-semibold uppercase tracking-wider text-brand-dark hover:border-brand-primary hover:text-brand-primary transition-colors"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          View on Google Maps
        </Link>
      </div>
    </div>
  );
}
