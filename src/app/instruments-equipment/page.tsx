import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Camera, Activity, Eye, Microscope, Gauge, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Instruments & Equipment",
  description:
    "State-of-the-art ophthalmic diagnostic equipment at Jeff Patel Optometrist — retinal cameras, tonometers, slit lamps and more.",
};

const instruments = [
  {
    icon: Camera,
    title: "Retinal Camera",
    description:
      "Our high-resolution retinal cameras capture detailed photographs of the back of your eye at 100x magnification. These images allow our optometrists to screen for and monitor a wide range of ocular and systemic conditions including diabetic retinopathy, glaucoma, macular degeneration, hypertensive retinopathy, and optic nerve disorders — all without dilation drops in most cases.",
    benefit: "Early detection of sight-threatening conditions before symptoms appear.",
    imageUrl: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80",
  },
  {
    icon: Gauge,
    title: "Non-Contact Tonometer",
    description:
      "Tonometry measures the pressure inside your eye (intraocular pressure). Elevated eye pressure is a key risk factor for glaucoma, which can cause irreversible sight loss if undetected. Our non-contact tonometers require no eye drops or physical contact, making the test quick and comfortable for all patients.",
    benefit: "Essential for glaucoma screening — included in every comprehensive exam.",
    imageUrl: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80",
  },
  {
    icon: Microscope,
    title: "Slit Lamp Biomicroscope",
    description:
      "The slit lamp is the cornerstone of a thorough eye examination. This binocular microscope illuminates and magnifies the anterior and posterior segments of the eye, allowing our optometrists to examine the cornea, lens, vitreous, and retina in extraordinary detail. It is used to diagnose conditions including cataracts, corneal abrasions, dry eye, and anterior uveitis.",
    benefit: "Detailed examination of every structure of the eye.",
    imageUrl: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80",
  },
  {
    icon: Activity,
    title: "Auto-Refractor / Keratometer",
    description:
      "Our auto-refractors provide an objective starting point for prescription measurement by analysing how light is refracted by the eye. The keratometer measures the curvature of the cornea — essential for contact lens fitting and detecting conditions like keratoconus. Results are reviewed and refined by the optometrist during the subjective refraction.",
    benefit: "Accurate, objective prescription measurement in seconds.",
    imageUrl: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80",
  },
  {
    icon: Eye,
    title: "Visual Field Analyser",
    description:
      "Visual field testing maps the full extent of your peripheral vision. This is critical for detecting and monitoring glaucoma, neurological conditions, and other disorders that affect the visual pathway. Our perimeters perform automated static threshold testing to the highest clinical standards.",
    benefit: "Detects peripheral vision loss often missed in standard eye tests.",
    imageUrl: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80",
  },
];

export default function InstrumentsEquipmentPage() {
  return (
    <>
      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-primary text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4">
            Technology
          </p>
          <h1 className="text-5xl font-heading font-bold uppercase text-white leading-tight">
            Instruments & Equipment
          </h1>
          <p className="mt-5 text-white/60 max-w-xl mx-auto">
            We invest in the most advanced ophthalmic diagnostic instruments so our
            optometrists can deliver the most thorough eye care possible.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Equipment"
            title="Comprehensive Diagnostics"
            subtitle="Early detection of eye conditions saves sight. Our technology gives our optometrists the best possible tools to protect yours."
          />
          <div className="space-y-16">
            {instruments.map(({ icon: Icon, title, description, benefit, imageUrl }, index) => (
              <div
                key={title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "order-1 lg:order-2" : "order-1"}>
                  <div className="inline-flex p-3 rounded-lg bg-brand-surface mb-5">
                    <Icon className="h-7 w-7 text-brand-primary" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold uppercase text-brand-dark leading-tight mb-5">
                    {title}
                  </h2>
                  <p className="text-brand-muted leading-relaxed mb-5">{description}</p>
                  <div className="p-4 rounded-lg bg-brand-primary/5 border-l-4 border-brand-primary">
                    <p className="text-sm font-semibold text-brand-primary">{benefit}</p>
                  </div>
                </div>
                <div
                  className={`relative rounded-2xl overflow-hidden h-72 bg-brand-surface ${
                    index % 2 === 1 ? "order-2 lg:order-1" : "order-2"
                  }`}
                >
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-primary text-white text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight mb-4">
            Experience Our Technology
          </h2>
          <p className="text-white/75 mb-8">
            Our comprehensive eye examination includes retinal photography and tonometry as standard.
          </p>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
            <Link href="/book">
              <Calendar className="h-4 w-4" />
              Book an Exam
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
