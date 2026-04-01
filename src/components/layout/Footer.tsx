import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

const FacebookIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/locations", label: "Our Stores" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/book", label: "Book Appointment" },
];

const serviceLinks = [
  { href: "/lens-technology", label: "Lens Technology" },
  { href: "/contact-lens-technology", label: "Contact Lenses" },
  { href: "/instruments-equipment", label: "Instruments & Equipment" },
  { href: "/shop", label: "Shop Eyewear" },
  { href: "/shop/checkout", label: "Online Checkout" },
];

const branches = [
  { name: "Quatre-Bornes", phone: "+230 454 9000" },
  { name: "Port-Louis", phone: "+230 211 6043" },
  { name: "Floreal (So'Flo)", phone: "+230 606 3535" },
  { name: "Grand Baie", phone: "+230 269 6113" },
  { name: "Vacoas (The Regent)", phone: "+230 469 4276" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <Image
              src="/images/logo.png"
              alt="Jeff Patel Optometrist"
              width={140}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-white/60 leading-relaxed">
              Mauritius&apos;s premier optometry practice. Exceptional eye care
              and designer eyewear across 5 locations since 1990.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-brand-primary transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-brand-primary transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-white/50 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-white/50 mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-white/50 mb-5">
              Our Branches
            </h3>
            <ul className="space-y-3">
              {branches.map((branch) => (
                <li key={branch.name} className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-white/90">
                    {branch.name}
                  </span>
                  <a
                    href={`tel:${branch.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors"
                  >
                    <Phone className="h-3 w-3" />
                    {branch.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Jeff Patel Optometrist. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
