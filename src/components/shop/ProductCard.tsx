"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Heart } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const defaultVariant = product.variants[0];
  const hasPromo = product.tags.includes("promo");
  const isNew = product.tags.includes("new");
  const isBestseller = product.tags.includes("bestseller");

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!defaultVariant) return;
    addItem({
      productId: product.id,
      variantId: defaultVariant.id,
      name: product.name,
      image: product.images[0],
      price: product.price,
      color: defaultVariant.color,
      frameSize: defaultVariant.frameSize,
    });
  };

  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="relative rounded-xl overflow-hidden bg-brand-surface aspect-square mb-3">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {hasPromo && <Badge variant="promo">Sale</Badge>}
          {isNew && !hasPromo && <Badge variant="new">New</Badge>}
          {isBestseller && !isNew && !hasPromo && (
            <Badge variant="bestseller">Bestseller</Badge>
          )}
        </div>

        {/* Quick add overlay */}
        <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleQuickAdd}
            className="w-full py-2.5 bg-brand-dark/90 text-white text-xs font-heading font-semibold uppercase tracking-wider rounded flex items-center justify-center gap-2 hover:bg-brand-primary transition-colors"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Quick Add
          </button>
        </div>

        {/* Wishlist */}
        <button
          className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 text-brand-muted hover:text-brand-primary transition-colors opacity-0 group-hover:opacity-100"
          onClick={(e) => e.preventDefault()}
          aria-label="Save to wishlist"
        >
          <Heart className="h-3.5 w-3.5" />
        </button>
      </div>

      <div>
        <p className="text-[10px] font-heading font-semibold uppercase tracking-wider text-brand-muted mb-1">
          {product.brand}
        </p>
        <h3 className="text-sm font-semibold text-brand-dark group-hover:text-brand-primary transition-colors mb-2">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-base font-bold text-brand-dark">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-brand-muted line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
        {product.variants.length > 1 && (
          <div className="flex gap-1 mt-2">
            {product.variants.slice(0, 4).map((v) =>
              v.colorHex ? (
                <span
                  key={v.id}
                  className="h-3.5 w-3.5 rounded-full border border-brand-border"
                  style={{ backgroundColor: v.colorHex }}
                  title={v.color}
                />
              ) : null
            )}
            {product.variants.length > 4 && (
              <span className="text-[10px] text-brand-muted leading-3.5">
                +{product.variants.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
