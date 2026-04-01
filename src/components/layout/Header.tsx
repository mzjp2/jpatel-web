"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import { useCart } from "@/hooks/useCart";

const navItems = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    children: [
      { href: "/services", label: "All Services" },
      { href: "/lens-technology", label: "Lens Technology" },
      { href: "/contact-lens-technology", label: "Contact Lenses" },
      { href: "/instruments-equipment", label: "Instruments" },
    ],
  },
  { href: "/shop", label: "Shop" },
  { href: "/locations", label: "Stores" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-30 w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm py-3" : "bg-white border-b border-brand-border py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo.png"
                alt="Jeff Patel Optometrist"
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                "children" in item ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-xs font-heading font-semibold uppercase tracking-wider text-brand-dark hover:text-brand-primary transition-colors">
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg border border-brand-border shadow-xl py-1.5">
                        {(item.children ?? []).map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              pathname === child.href
                                ? "text-brand-primary font-medium bg-brand-surface"
                                : "text-brand-dark hover:text-brand-primary hover:bg-brand-surface"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-xs font-heading font-semibold uppercase tracking-wider transition-colors ${
                      pathname === item.href
                        ? "text-brand-primary border-b-2 border-brand-primary"
                        : "text-brand-dark hover:text-brand-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Cart */}
              <button
                onClick={openCart}
                className="relative p-2 text-brand-dark hover:text-brand-primary transition-colors"
                aria-label="Open cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-primary text-[10px] font-bold text-white">
                    {itemCount > 9 ? "9+" : itemCount}
                  </span>
                )}
              </button>

              {/* Book CTA — desktop only */}
              <Button asChild variant="primary" size="sm" className="hidden md:inline-flex">
                <Link href="/book">
                  <Calendar className="h-3.5 w-3.5" />
                  Book Now
                </Link>
              </Button>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-brand-dark hover:text-brand-primary transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
