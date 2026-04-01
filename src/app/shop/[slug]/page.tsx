"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShoppingBag, MapPin, ChevronLeft, Star, Info } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";
import ContactLensPowerSelector from "@/components/shop/ContactLensPowerSelector";
import ReservationFlow from "@/components/shop/ReservationFlow";
import { products } from "@/data/products";
import type { ContactLensPower, ProductVariant } from "@/types/product";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0]
  );
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [powers, setPowers] = useState<ContactLensPower[]>([]);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      variantId: selectedVariant.id,
      name: product.name,
      image: product.images[0],
      price: product.price,
      quantity,
      color: selectedVariant.color,
      frameSize: selectedVariant.frameSize,
      contactLensPower: powers[0],
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const inStock = selectedVariant.stock > 0;
  const savePct = product.compareAtPrice
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : 0;

  return (
    <>
      <div className="bg-brand-surface border-b border-brand-border py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-brand-muted">
            <Link href="/shop" className="hover:text-brand-primary transition-colors flex items-center gap-1">
              <ChevronLeft className="h-3 w-3" />
              Shop
            </Link>
            <span>/</span>
            <span className="capitalize">{product.category.replace("-", " ")}</span>
            <span>/</span>
            <span className="text-brand-dark">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-3">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-brand-surface">
                <Image
                  src={product.images[selectedImage] || product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {product.tags.includes("promo") && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="promo">Save {savePct}%</Badge>
                  </div>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`relative h-16 w-16 rounded-lg overflow-hidden shrink-0 border-2 transition-colors ${
                        selectedImage === i ? "border-brand-primary" : "border-brand-border"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <p className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-muted mb-2">
                {product.brand}
              </p>
              <h1 className="text-3xl font-heading font-bold uppercase tracking-tight text-brand-dark mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <span className="text-xs text-brand-muted">4.9 (23 reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-brand-dark">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-lg text-brand-muted line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
              </div>

              <p className="text-brand-muted text-sm leading-relaxed mb-7">
                {product.description}
              </p>

              {/* Variant selection — color/size */}
              {product.variants.some((v) => v.colorHex) && (
                <div className="mb-5">
                  <p className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-dark mb-2">
                    Colour: <span className="text-brand-primary">{selectedVariant.color}</span>
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {product.variants
                      .filter((v, i, arr) => arr.findIndex((x) => x.color === v.color) === i)
                      .map((v) => (
                        <button
                          key={v.id}
                          onClick={() => setSelectedVariant(v)}
                          title={v.color}
                          className={`h-8 w-8 rounded-full border-2 transition-all ${
                            selectedVariant.color === v.color
                              ? "border-brand-primary scale-110"
                              : "border-brand-border hover:border-brand-muted"
                          }`}
                          style={{ backgroundColor: v.colorHex }}
                        />
                      ))}
                  </div>
                </div>
              )}

              {product.variants.some((v) => v.frameSize) && (
                <div className="mb-5">
                  <p className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-dark mb-2">
                    Frame Size: <span className="text-brand-primary">{selectedVariant.frameSize}</span>
                  </p>
                  <div className="flex gap-2">
                    {["XS", "S", "M", "L", "XL"]
                      .filter((size) => product.variants.some((v) => v.frameSize === size))
                      .map((size) => {
                        const v = product.variants.find(
                          (v) =>
                            v.frameSize === size &&
                            (selectedVariant.color ? v.color === selectedVariant.color : true)
                        );
                        if (!v) return null;
                        return (
                          <button
                            key={size}
                            onClick={() => setSelectedVariant(v)}
                            className={`h-9 min-w-[36px] px-3 rounded border text-xs font-semibold transition-colors ${
                              selectedVariant.frameSize === size
                                ? "border-brand-primary bg-brand-primary text-white"
                                : v.stock === 0
                                ? "border-brand-border text-brand-border cursor-not-allowed line-through"
                                : "border-brand-border text-brand-dark hover:border-brand-primary"
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                  </div>
                </div>
              )}

              {/* Contact lens power selector */}
              {product.isContactLens && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-dark">
                      Prescription
                    </p>
                    {powers.length > 0 && (
                      <span className="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded font-semibold">
                        Entered ✓
                      </span>
                    )}
                  </div>
                  <ContactLensPowerSelector onConfirm={setPowers} />
                </div>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-3 mb-6">
                <p className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-dark">
                  Qty
                </p>
                <div className="flex items-center border border-brand-border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-brand-muted hover:text-brand-dark"
                  >
                    −
                  </button>
                  <span className="px-3 text-sm font-medium text-brand-dark">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-brand-muted hover:text-brand-dark"
                  >
                    +
                  </button>
                </div>
                <span
                  className={`text-xs ${inStock ? "text-green-600" : "text-red-500"}`}
                >
                  {inStock
                    ? `${selectedVariant.stock} in stock`
                    : "Out of stock"}
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 mb-8">
                <Button
                  onClick={handleAddToCart}
                  disabled={!inStock || (product.isContactLens && powers.length === 0)}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  <ShoppingBag className="h-4 w-4" />
                  {addedToCart ? "Added to Bag ✓" : "Add to Bag"}
                </Button>
                <Button
                  onClick={() => setReserveOpen(true)}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  <MapPin className="h-4 w-4" />
                  Reserve In-Store (Free · 3 Days)
                </Button>
              </div>

              {/* Info chips */}
              <div className="flex flex-wrap gap-3 text-xs text-brand-muted border-t border-brand-border pt-5">
                <span className="flex items-center gap-1">
                  <Info className="h-3.5 w-3.5" /> Free delivery over Rs 3,000
                </span>
                <span className="flex items-center gap-1">
                  <Info className="h-3.5 w-3.5" /> Free frame adjustments
                </span>
                <span className="flex items-center gap-1">
                  <Info className="h-3.5 w-3.5" /> 14-day returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReservationFlow
        product={product}
        isOpen={reserveOpen}
        onClose={() => setReserveOpen(false)}
      />
    </>
  );
}
