import Link from "next/link";
import { Eye, Glasses, CircleDot, Microscope, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Eye,
    title: "Eye Examinations",
    description:
      "Comprehensive testing using retinal cameras and the latest diagnostic instruments. Full health screening included.",
    href: "/services",
    color: "text-brand-primary",
    bg: "bg-brand-primary/10",
  },
  {
    icon: Glasses,
    title: "Frames & Lenses",
    description:
      "Hundreds of designer and own-brand frames. Progressive, anti-glare, blue-light and photochromic lenses.",
    href: "/lens-technology",
    color: "text-brand-accent",
    bg: "bg-brand-accent/10",
  },
  {
    icon: CircleDot,
    title: "Contact Lenses",
    description:
      "Daily, bi-weekly and monthly options from Acuvue, Alcon and CooperVision. Toric and multifocal available.",
    href: "/contact-lens-technology",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Microscope,
    title: "Advanced Equipment",
    description:
      "State-of-the-art instruments for early detection of glaucoma, macular degeneration and more.",
    href: "/instruments-equipment",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

export default function ServicesTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What we offer"
          title="Complete Eye Care"
          subtitle="From routine check-ups to specialist care, premium eyewear to contact lenses — everything you need, under one roof."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, description, href, color, bg }) => (
            <Link
              key={title}
              href={href}
              className="group p-7 rounded-xl border border-brand-border hover:border-brand-primary hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg ${bg} mb-5`}>
                <Icon className={`h-6 w-6 ${color}`} />
              </div>
              <h3 className="font-heading font-bold text-base uppercase tracking-wide text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-4">
                {description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary uppercase tracking-wider group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
