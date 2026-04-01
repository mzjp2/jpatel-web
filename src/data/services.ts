export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  href: string;
  featured: boolean;
  imageUrl?: string;
}

export const services: Service[] = [
  {
    id: "eye-examination",
    title: "Comprehensive Eye Examination",
    shortDescription: "Full vision assessment using the latest diagnostic equipment.",
    description:
      "Our comprehensive eye examination goes far beyond a simple vision test. Using state-of-the-art equipment including our retinal camera (capable of 100x magnification), we screen for glaucoma, macular degeneration, diabetic retinopathy, cataracts, and more. Each exam includes visual acuity testing, refraction, eye pressure measurement, and a detailed examination of the retina. We recommend examinations every 1–2 years.",
    icon: "Eye",
    href: "/services",
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80",
  },
  {
    id: "lens-technology",
    title: "Advanced Lens Technology",
    shortDescription: "Premium single-vision, progressive and specialty lenses.",
    description:
      "From entry-level single-vision to premium digital freeform progressives, we offer a full range of lens options. Our lens consultants will guide you through anti-reflective coatings, blue light filtering, photochromic (transitions), polarised, and high-index thin lenses. We source from world-leading manufacturers including Essilor, Zeiss, and Hoya.",
    icon: "Glasses",
    href: "/lens-technology",
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80",
  },
  {
    id: "contact-lenses",
    title: "Contact Lens Fitting",
    shortDescription: "Daily, bi-weekly, monthly and specialty contact lenses.",
    description:
      "Our contact lens service starts with a thorough fitting assessment to determine the ideal lens type, material, and parameters for your eyes. We stock daily, bi-weekly, and monthly lenses from Acuvue, Alcon, and CooperVision, including toric lenses for astigmatism and multifocal lenses for presbyopia. If your prescription isn't in stock, we can place a custom order.",
    icon: "CircleDot",
    href: "/contact-lens-technology",
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80",
  },
  {
    id: "frame-fitting",
    title: "Frame & Lens Fitting",
    shortDescription: "Expert fitting to ensure comfort, clarity and style.",
    description:
      "Proper frame fitting is essential for both visual performance and comfort. Our trained dispensing opticians take precise measurements including pupillary distance, vertex distance, and pantoscopic tilt to ensure your lenses are perfectly positioned. We offer adjustments at any time after purchase — just walk in to any branch.",
    icon: "Scan",
    href: "/services",
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80",
  },
  {
    id: "frame-repair",
    title: "Free Frame Repairs",
    shortDescription: "Complimentary repairs while you wait at any branch.",
    description:
      "Broken screw? Bent temple? Scratched nose pad? Our technicians provide free minor repairs while you wait. We carry a large inventory of spare nose pads, screws, and temple tips compatible with most frame brands. For more complex repairs, we will assess and provide an honest recommendation.",
    icon: "Wrench",
    href: "/services",
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80",
  },
  {
    id: "instruments",
    title: "Instruments & Equipment",
    shortDescription: "Cutting-edge diagnostic technology for your eye health.",
    description:
      "We invest in the latest ophthalmic instruments to provide the most thorough eye care possible. Our equipment includes digital retinal cameras, non-contact tonometers (for glaucoma screening), auto-refractors, slit lamps, and visual field analysers. This diagnostic capability allows us to detect and monitor a wide range of ocular and systemic conditions early.",
    icon: "Microscope",
    href: "/instruments-equipment",
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80",
  },
];
