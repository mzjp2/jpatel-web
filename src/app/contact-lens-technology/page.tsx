import type { Metadata } from "next";
import Link from "next/link";
import { CircleDot, Clock, RefreshCw, Droplets, Eye, Calendar, ShoppingBag } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Lens Technology",
  description:
    "Everything you need to know about contact lenses — daily, bi-weekly, monthly and specialty lenses available at Jeff Patel Optometrist.",
};

const lensCategories = [
  {
    icon: Clock,
    title: "Daily Disposable",
    tagline: "Fresh every day",
    description:
      "Worn once and discarded. No cleaning required. Ideal for occasional wear, sports, travel, or anyone with allergies. The healthiest option as there is no protein build-up.",
    brands: ["Acuvue Oasys 1-Day", "Dailies Total1", "Biotrue ONEday"],
    pros: ["No cleaning solutions needed", "Lowest infection risk", "Great for occasional wear"],
  },
  {
    icon: RefreshCw,
    title: "Bi-Weekly Disposable",
    tagline: "Replace every 2 weeks",
    description:
      "Worn for up to two weeks with nightly cleaning and storage in solution. A balance between daily convenience and monthly economy.",
    brands: ["Acuvue Oasys 2-Weekly", "Biofinity 2-Week", "Air Optix Plus HydraGlyde"],
    pros: ["Cost-effective for regular wear", "High oxygen transmission", "Available for most prescriptions"],
  },
  {
    icon: Droplets,
    title: "Monthly Disposable",
    tagline: "Replace every 30 days",
    description:
      "Worn for up to 30 days with daily cleaning and overnight storage in multipurpose solution. The most economical option for full-time lens wearers.",
    brands: ["Biofinity Monthly", "Air Optix Aqua", "PureVision 2 HD"],
    pros: ["Most economical per wear", "High oxygen transmission", "Extended wear options"],
  },
  {
    icon: Eye,
    title: "Specialty Lenses",
    tagline: "For complex prescriptions",
    description:
      "Toric lenses for astigmatism, multifocal lenses for presbyopia, and custom lenses for irregular corneas. Our optometrists specialise in fitting challenging prescriptions.",
    brands: ["Biofinity Toric", "Acuvue Oasys Multifocal", "CooperVision Clariti"],
    pros: ["Corrects astigmatism (toric)", "Near and distance vision (multifocal)", "Custom powers available"],
  },
];

export default function ContactLensTechnologyPage() {
  return (
    <>
      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-primary text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4">
            Contacts
          </p>
          <h1 className="text-5xl font-heading font-bold uppercase text-white leading-tight">
            Contact Lens Technology
          </h1>
          <p className="mt-5 text-white/60 max-w-xl mx-auto">
            Modern contact lenses are more comfortable and healthier than ever.
            Here&apos;s everything you need to know.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Types of Contact Lenses"
            title="Choose Your Wear Schedule"
            subtitle="The right contact lens depends on your prescription, lifestyle and how often you want to wear them."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lensCategories.map(({ icon: Icon, title, tagline, description, brands, pros }) => (
              <div
                key={title}
                className="p-7 rounded-xl border border-brand-border hover:border-brand-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-brand-surface group-hover:bg-brand-primary/10 transition-colors">
                    <Icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold uppercase tracking-wide text-brand-dark text-sm">
                      {title}
                    </h3>
                    <p className="text-xs text-brand-primary">{tagline}</p>
                  </div>
                </div>
                <p className="text-sm text-brand-muted leading-relaxed mb-5">
                  {description}
                </p>
                <div className="mb-5">
                  <p className="text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                    Benefits
                  </p>
                  <ul className="space-y-1.5">
                    {pros.map((pro) => (
                      <li key={pro} className="flex items-center gap-2 text-xs text-brand-muted">
                        <CircleDot className="h-3 w-3 text-brand-primary shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                    Popular Brands
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {brands.map((brand) => (
                      <span
                        key={brand}
                        className="text-[10px] font-heading font-semibold uppercase tracking-widest text-brand-muted bg-brand-surface px-2 py-1 rounded"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="New to contact lenses?"
            title="Getting Started is Easy"
            subtitle="Book a contact lens fitting appointment. Our optometrists will assess your eyes, recommend the right lenses, and teach you how to insert and remove them safely."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              { step: "01", title: "Fitting Appointment", text: "A 60-minute appointment with our optometrist to assess your suitability and measure your eyes." },
              { step: "02", title: "Trial Lenses", text: "Take home a pair of trial lenses to wear for 1–2 weeks. We want you to be confident before committing." },
              { step: "03", title: "Follow-Up & Order", text: "Return for a brief follow-up, confirm the fit is perfect, and place your first order at a discounted price." },
            ].map(({ step, title, text }) => (
              <div key={step} className="bg-white rounded-xl p-6 border border-brand-border">
                <p className="text-4xl font-heading font-bold text-brand-primary/20 mb-3">{step}</p>
                <h3 className="font-heading font-bold uppercase tracking-wide text-brand-dark text-sm mb-2">{title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-primary text-white text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight mb-4">
            Try Contact Lenses Today
          </h2>
          <p className="text-white/75 mb-8">
            Book a fitting or order online if you already have a valid prescription.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
              <Link href="/book">
                <Calendar className="h-4 w-4" />
                Book Fitting
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10">
              <Link href="/shop?category=contact-lenses">
                <ShoppingBag className="h-4 w-4" />
                Shop Contact Lenses
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
