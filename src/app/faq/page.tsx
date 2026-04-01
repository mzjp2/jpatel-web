"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";

const categories = [
  { id: "all", label: "All" },
  { id: "general", label: "General" },
  { id: "eye-tests", label: "Eye Tests" },
  { id: "contact-lenses", label: "Contact Lenses" },
  { id: "frames", label: "Frames" },
  { id: "delivery", label: "Delivery" },
] as const;

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((f) => f.category === activeCategory);

  return (
    <>
      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-primary text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4">
            Help Centre
          </p>
          <h1 className="text-5xl font-heading font-bold uppercase text-white leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 text-white/60 max-w-xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Call us at any branch or send us a message.
          </p>
        </div>
      </section>

      <section className="py-20 bg-brand-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`px-4 py-2 rounded-full text-xs font-heading font-semibold uppercase tracking-wider transition-colors ${
                  activeCategory === id
                    ? "bg-brand-primary text-white"
                    : "bg-white border border-brand-border text-brand-dark hover:border-brand-primary hover:text-brand-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <Accordion type="multiple" className="bg-white rounded-xl border border-brand-border px-6">
            {filtered.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-brand-muted mb-6">
              Still have questions? We&apos;re happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="primary">
                <Link href="/book">
                  <Calendar className="h-4 w-4" />
                  Book an Appointment
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/locations">Find a Branch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
