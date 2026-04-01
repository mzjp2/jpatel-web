import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind Jeff Patel Optometrist — Mauritius's premier eye care and eyewear practice, serving the island since 1990.",
};

const values = [
  "Expert optometrists with decades of combined experience",
  "Latest diagnostic technology including retinal cameras",
  "Personalised care — every patient, every time",
  "Wide selection from affordable to luxury designer frames",
  "Free frame repairs and adjustments at all branches",
  "5 convenient locations across Mauritius",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-dark py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&q=80')",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-primary text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4">
            Our Story
          </p>
          <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase text-white leading-tight">
            About Jeff Patel
            <br />
            Optometrist
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-primary text-xs font-heading font-semibold uppercase tracking-[0.25em] mb-4">
                Est. 1990
              </p>
              <h2 className="text-4xl font-heading font-bold uppercase text-brand-dark leading-tight mb-6">
                A Vision for Better
                <br />
                Eye Care in Mauritius
              </h2>
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <p>
                  Jeff Patel Optometrist was founded with a single purpose: to
                  provide world-class eye care and designer eyewear to the people of
                  Mauritius. What started as a single practice in Quatre-Bornes has
                  grown into five branches spanning the island, serving tens of
                  thousands of patients.
                </p>
                <p>
                  We believe that great vision is a fundamental right, not a luxury.
                  That belief drives every aspect of our practice — from the
                  diagnostic equipment we invest in, to the breadth of our eyewear
                  collection, to the way every team member treats every patient.
                </p>
                <p>
                  Today, our team of qualified optometrists and dispensing opticians
                  combine clinical excellence with a genuine passion for helping
                  people see and look their best. We are proud to be Mauritius&apos;s
                  most trusted name in optometry.
                </p>
              </div>
              <div className="mt-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {values.map((v) => (
                    <li key={v} className="flex items-start gap-2.5 text-sm text-brand-dark">
                      <CheckCircle className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80"
                alt="Jeff Patel Optometrist practice"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-brand-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The People Behind the Practice"
            title="Meet Our Team"
            subtitle="Our qualified optometrists and dispensing opticians are passionate about your eye health and finding you the perfect eyewear."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl overflow-hidden border border-brand-border"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-brand-dark uppercase tracking-wide text-sm">
                    {member.name}
                  </h3>
                  <p className="text-xs text-brand-primary mt-1 mb-3">
                    {member.title}
                  </p>
                  {member.qualifications && (
                    <p className="text-xs text-brand-muted mb-3">
                      {member.qualifications.join(" · ")}
                    </p>
                  )}
                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-4">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-primary text-white text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-white/75 mb-8">
            Book an appointment at your nearest branch today.
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
