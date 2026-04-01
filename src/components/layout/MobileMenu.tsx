"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    children: [
      { href: "/services", label: "All Services" },
      { href: "/lens-technology", label: "Lens Technology" },
      { href: "/contact-lens-technology", label: "Contact Lens Technology" },
      { href: "/instruments-equipment", label: "Instruments & Equipment" },
    ],
  },
  { href: "/shop", label: "Shop" },
  { href: "/locations", label: "Our Stores" },
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between border-b border-brand-border px-6 py-5">
              <span className="font-heading font-bold text-brand-primary uppercase tracking-widest text-sm">
                Menu
              </span>
              <button
                onClick={onClose}
                className="rounded p-1 text-brand-muted hover:text-brand-dark transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
              {navLinks.map((item) =>
                "children" in item ? (
                  <div key={item.label} className="space-y-1">
                    <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.2em] text-brand-muted pt-4 pb-1">
                      {item.label}
                    </p>
                    {(item.children ?? []).map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className={`block py-2 px-3 rounded text-sm font-medium transition-colors ${
                          pathname === child.href
                            ? "text-brand-primary bg-brand-surface"
                            : "text-brand-dark hover:text-brand-primary hover:bg-brand-surface"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`block py-2.5 px-3 rounded font-heading font-semibold uppercase tracking-wide text-sm transition-colors ${
                      pathname === item.href
                        ? "text-brand-primary bg-brand-surface"
                        : "text-brand-dark hover:text-brand-primary hover:bg-brand-surface"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="border-t border-brand-border px-6 py-6 space-y-3">
              <Button asChild variant="primary" className="w-full">
                <Link href="/book" onClick={onClose}>
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Link>
              </Button>
              <div className="flex items-center gap-2 text-xs text-brand-muted">
                <Phone className="h-3.5 w-3.5 shrink-0" />
                <span>+230 454 9000 (Quatre-Bornes)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-muted">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <Link
                  href="/locations"
                  onClick={onClose}
                  className="hover:text-brand-primary transition-colors"
                >
                  5 locations across Mauritius
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
