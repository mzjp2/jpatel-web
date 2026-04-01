"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-dark">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-brand-dark/75" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-accent text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-5"
          >
            Mauritius&apos;s Premier Optometrist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold uppercase text-white leading-[1.05] tracking-tight mb-6"
          >
            See Clearly.
            <br />
            <span className="text-brand-primary">Look Brilliant.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg"
          >
            Expert eye care, designer eyewear, and advanced lens technology.
            Five branches across Mauritius — because great vision is for everyone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button asChild variant="primary" size="lg">
              <Link href="/book">
                <Calendar className="h-4 w-4" />
                Book an Eye Test
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-dark">
              <Link href="/shop">
                <ShoppingBag className="h-4 w-4" />
                Shop Eyewear
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-sm"
        >
          {[
            { value: "5", label: "Locations" },
            { value: "30+", label: "Years Experience" },
            { value: "50k+", label: "Happy Patients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-heading font-bold text-white">
                {stat.value}
              </p>
              <p className="text-xs text-white/50 uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowRight className="h-5 w-5 text-white/40 rotate-90 animate-bounce" />
      </motion.div>
    </section>
  );
}
