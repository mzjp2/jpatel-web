import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eye, Glasses, CircleDot, Scan, Wrench, Microscope, ArrowRight, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Information & Services",
  description:
    "Comprehensive eye care services at Jeff Patel Optometrist — eye examinations, lens fitting, contact lenses, frame repairs and more.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Eye,
  Glasses,
  CircleDot,
  Scan,
  Wrench,
  Microscope,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-primary text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4">
            What we offer
          </p>
          <h1 className="text-5xl font-heading font-bold uppercase text-white leading-tight">
            Information & Services
          </h1>
          <p className="mt-5 text-white/60 max-w-xl mx-auto">
            Everything you need to see clearly and look great, delivered by
            Mauritius&apos;s most trusted optometry team.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Eye;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                    <div className="inline-flex p-3 rounded-lg bg-brand-surface mb-5">
                      <Icon className="h-7 w-7 text-brand-primary" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold uppercase text-brand-dark leading-tight mb-5">
                      {service.title}
                    </h2>
                    <p className="text-brand-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                    {service.href !== "/services" && (
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-heading font-semibold uppercase tracking-wider text-brand-primary hover:gap-3 transition-all"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                  <div
                    className={`relative rounded-2xl overflow-hidden h-72 ${
                      isEven ? "order-2" : "order-2 lg:order-1"
                    }`}
                  >
                    {service.imageUrl ? (
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="h-full bg-brand-surface flex items-center justify-center">
                        <Icon className="h-20 w-20 text-brand-border" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-primary text-white text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight mb-4">
            Book Your Eye Test Today
          </h2>
          <p className="text-white/75 mb-8">
            Regular eye examinations are essential for your long-term eye health.
          </p>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
            <Link href="/book">
              <Calendar className="h-4 w-4" />
              Book Now
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
