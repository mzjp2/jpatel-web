"use client";

import { useState } from "react";
import Link from "next/link";
import { SlidersHorizontal, X, Tag } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ProductCard from "@/components/shop/ProductCard";
import ProductFilters from "@/components/shop/ProductFilters";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/Dialog";
import { Badge } from "@/components/ui/Badge";
import { products } from "@/data/products";
import { useProductFilters } from "@/hooks/useProductFilters";
import { formatPrice } from "@/lib/utils";

const ITEMS_PER_PAGE = 12;

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "new", label: "Newest" },
];

export default function ShopPage() {
  const { filters, activeFilterCount, clearFilters } = useProductFilters();
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);

  // Filter
  let filtered = products.filter((p) => {
    if (filters.category && p.category !== filters.category) return false;
    if (filters.brand && p.brand !== filters.brand) return false;
    if (filters.priceMax && p.price > filters.priceMax) return false;
    if (filters.tags && !p.tags.includes(filters.tags)) return false;
    if (filters.search && !p.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  // Sort
  filtered = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "new") return a.tags.includes("new") ? -1 : 1;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  const total = filtered.length;
  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = paginated.length < total;

  // Promo products for banner
  const promoProducts = products.filter((p) => p.tags.includes("promo") && p.compareAtPrice).slice(0, 4);

  return (
    <>
      <section className="bg-brand-dark py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-primary text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4">
            Eyewear Collection
          </p>
          <h1 className="text-5xl font-heading font-bold uppercase text-white leading-tight">
            Shop
          </h1>
          <p className="mt-4 text-white/50 text-sm">
            Frames · Sunglasses · Contact Lenses · Accessories
          </p>
        </div>
      </section>

      {/* Promo Section */}
      {promoProducts.length > 0 && !filters.category && !filters.tags && (
        <section className="py-12 bg-brand-surface border-b border-brand-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-brand-accent" />
                <h2 className="font-heading font-bold uppercase tracking-wide text-brand-dark">
                  Current Promotions
                </h2>
              </div>
              <Link
                href="/shop?tags=promo"
                className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-primary hover:text-brand-primary-dark"
              >
                View all
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {promoProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/shop/${p.slug}`}
                  className="flex items-center gap-2 bg-white rounded-lg border border-brand-border p-3 hover:border-brand-accent/50 transition-colors group"
                >
                  <Badge variant="promo">
                    -{Math.round((1 - p.price / p.compareAtPrice!) * 100)}%
                  </Badge>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-brand-dark truncate group-hover:text-brand-primary">
                      {p.name}
                    </p>
                    <p className="text-xs text-brand-primary font-bold">
                      {formatPrice(p.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border border-brand-border rounded-lg text-sm font-medium text-brand-dark hover:border-brand-primary transition-colors"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-brand-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-xs text-brand-muted hover:text-brand-primary transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                  Clear filters
                </button>
              )}
              <span className="text-sm text-brand-muted">
                {total} product{total !== 1 ? "s" : ""}
              </span>
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-10 rounded border border-brand-border px-3 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-8">
            {/* Desktop filters sidebar */}
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-24">
                <ProductFilters />
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              {paginated.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-brand-muted text-lg mb-4">No products found.</p>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-brand-primary hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {paginated.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                  {hasMore && (
                    <div className="text-center mt-12">
                      <button
                        onClick={() => setPage((p) => p + 1)}
                        className="px-8 py-3 border border-brand-border rounded-lg text-sm font-heading font-semibold uppercase tracking-wider text-brand-dark hover:border-brand-primary hover:text-brand-primary transition-colors"
                      >
                        Load More ({total - paginated.length} remaining)
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filters dialog */}
      <Dialog open={filtersOpen} onOpenChange={setFiltersOpen}>
        <DialogContent side="left">
          <DialogHeader>
            <DialogTitle>Filters</DialogTitle>
          </DialogHeader>
          <div className="p-6 overflow-y-auto">
            <ProductFilters />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
