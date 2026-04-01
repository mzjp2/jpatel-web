import type { Metadata } from "next";
import Link from "next/link";
import { Layers, Shield, Sun, Monitor, Zap, ArrowRight, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Lens Technology",
  description:
    "Explore the advanced lens technology available at Jeff Patel Optometrist — from anti-reflective coatings to progressive and photochromic lenses.",
};

const lensTypes = [
  {
    icon: Layers,
    title: "Single Vision Lenses",
    description:
      "The most common lens type, correcting for either distance, intermediate or near vision. Available in standard, mid-index (1.6) and high-index (1.74) materials for thinner, lighter lenses at stronger prescriptions.",
    brands: ["Essilor Orma", "Zeiss Single Vision", "Hoya Nulux"],
  },
  {
    icon: Layers,
    title: "Progressive (Varifocal) Lenses",
    description:
      "Progressive lenses provide a seamless transition from distance to intermediate to near vision in a single lens. Our premium digital freeform progressives are custom-manufactured to your prescription and frame measurements for an optimised visual field.",
    brands: ["Essilor Varilux", "Zeiss Progressive Individual", "Hoya iD MyStyle"],
  },
  {
    icon: Shield,
    title: "Anti-Reflective Coating",
    description:
      "AR coatings eliminate reflections from the lens surface, improving visual clarity, reducing eye strain, and making your eyes more visible to others. Essential for night driving and computer use. Our premium coatings also include anti-smudge and anti-static properties.",
    brands: ["Crizal Forte UV", "Zeiss DuraVision", "Hoya Recharge"],
  },
  {
    icon: Sun,
    title: "Photochromic (Transitions) Lenses",
    description:
      "Photochromic lenses automatically darken outdoors in response to UV light and return to clear indoors. Ideal for people who move between environments frequently. Gen 8 Transitions lenses are the fastest and darkest to date.",
    brands: ["Transitions Gen 8", "Transitions XTRActive", "Hoya Sensity"],
  },
  {
    icon: Monitor,
    title: "Blue Light Filtering",
    description:
      "Our blue light filtering lenses reduce exposure to high-energy visible (HEV) blue light emitted by digital screens. Recommended for anyone spending more than 2 hours per day in front of computers, tablets or smartphones. Available with or without a prescription.",
    brands: ["Crizal Prevencia", "Zeiss DriveSafe", "Hoya Recharge"],
  },
  {
    icon: Zap,
    title: "Polarised Lenses",
    description:
      "Polarised lenses eliminate horizontal glare from reflective surfaces such as water, roads and snow. Essential for driving, water sports and outdoor activities. Available in a range of tints and mirror coatings.",
    brands: ["Maui Jim PolarizedPlus2", "Oakley Prizm", "Ray-Ban G-15"],
  },
];

export default function LensTechnologyPage() {
  return (
    <>
      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-primary text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4">
            Optics & Innovation
          </p>
          <h1 className="text-5xl font-heading font-bold uppercase text-white leading-tight">
            Lens Technology
          </h1>
          <p className="mt-5 text-white/60 max-w-xl mx-auto">
            Understanding your lens options helps you make the best choice for
            your vision, lifestyle and budget.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Lens Range"
            title="Find the Right Lens for You"
            subtitle="We source lenses from the world's leading manufacturers — Essilor, Zeiss, and Hoya — ensuring the highest optical quality for every prescription."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lensTypes.map(({ icon: Icon, title, description, brands }) => (
              <div
                key={title}
                className="p-7 rounded-xl border border-brand-border hover:border-brand-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex p-3 rounded-lg bg-brand-surface mb-5 group-hover:bg-brand-primary/10 transition-colors">
                  <Icon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="font-heading font-bold uppercase tracking-wide text-brand-dark mb-3">
                  {title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-4">
                  {description}
                </p>
                <div className="space-y-1">
                  {brands.map((brand) => (
                    <span
                      key={brand}
                      className="inline-block text-[10px] font-heading font-semibold uppercase tracking-widest text-brand-muted bg-brand-surface px-2 py-1 rounded mr-1 mb-1"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Lens Materials"
            title="Thinner, Lighter, Clearer"
            subtitle="The right lens material depends on your prescription strength and lifestyle. Our lens consultants will recommend the most appropriate option."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { index: "1.50", label: "Standard", note: "Up to ±4.00" },
              { index: "1.60", label: "Mid-Index", note: "±4.00 to ±6.00" },
              { index: "1.67", label: "High-Index", note: "±6.00 to ±8.00" },
              { index: "1.74", label: "Ultra-Thin", note: "±8.00 and above" },
            ].map(({ index, label, note }) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-brand-border text-center">
                <p className="text-2xl font-heading font-bold text-brand-primary">{index}</p>
                <p className="text-sm font-semibold text-brand-dark mt-1">{label}</p>
                <p className="text-xs text-brand-muted mt-1">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-primary text-white text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight mb-4">
            Talk to Our Lens Experts
          </h2>
          <p className="text-white/75 mb-8">
            Not sure which lens is right for you? Book a consultation and our team will guide you through every option.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
              <Link href="/book">
                <Calendar className="h-4 w-4" />
                Book Consultation
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10">
              <Link href="/shop">
                Browse Frames
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
