import Link from "next/link";
import Image from "next/image";
import { Tag, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

const promoProducts = products
  .filter((p) => p.tags.includes("promo") && p.compareAtPrice)
  .slice(0, 3);

export default function PromoSection() {
  return (
    <section className="py-20 bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Limited Time"
          title="Current Promotions"
          subtitle="Exclusive discounts on selected frames, sunglasses and contact lenses — updated regularly from our Smart stock system."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {promoProducts.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="group bg-white rounded-xl overflow-hidden border border-brand-border hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden bg-brand-surface">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="promo">Sale</Badge>
                </div>
                {product.compareAtPrice && (
                  <div className="absolute top-3 right-3 bg-brand-primary text-white text-xs font-bold px-2 py-1 rounded">
                    Save{" "}
                    {Math.round(
                      (1 - product.price / product.compareAtPrice) * 100
                    )}
                    %
                  </div>
                )}
              </div>
              <div className="p-5">
                <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">
                  {product.brand}
                </p>
                <h3 className="font-heading font-bold text-brand-dark uppercase tracking-wide mb-3 group-hover:text-brand-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-brand-primary">
                    {formatPrice(product.price)}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-sm text-brand-muted line-through">
                      {formatPrice(product.compareAtPrice)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Full-width promo band */}
        <div className="relative overflow-hidden rounded-2xl bg-brand-primary p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <Tag className="h-10 w-10 text-white/50 shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-tight mb-2">
                Free Eye Test With Every Frame Purchase
              </h3>
              <p className="text-white/75 text-sm leading-relaxed max-w-lg">
                Get a complimentary comprehensive eye examination when you
                purchase any complete pair of glasses. Valid at all 5 branches.
                No booking surcharge.
              </p>
            </div>
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-brand-primary shrink-0"
          >
            <Link href="/shop">
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
