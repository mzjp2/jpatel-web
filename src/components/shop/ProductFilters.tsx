"use client";

import { X } from "lucide-react";
import { useProductFilters } from "@/hooks/useProductFilters";
import type { ProductCategory } from "@/types/product";

const categories: { value: ProductCategory; label: string }[] = [
  { value: "frames", label: "Frames" },
  { value: "sunglasses", label: "Sunglasses" },
  { value: "contact-lenses", label: "Contact Lenses" },
  { value: "accessories", label: "Accessories" },
];

const brands = [
  "JP House Brand",
  "Ray-Ban",
  "Oakley",
  "Prada",
  "Silhouette",
  "Johnson & Johnson",
  "CooperVision",
  "Alcon",
];

const tagFilters = [
  { value: "promo", label: "On Sale" },
  { value: "new", label: "New Arrivals" },
  { value: "bestseller", label: "Bestsellers" },
];

export default function ProductFilters() {
  const { filters, setFilter, clearFilters, activeFilterCount } =
    useProductFilters();

  return (
    <div className="space-y-7">
      {/* Active filters */}
      {activeFilterCount > 0 && (
        <div className="flex items-center justify-between">
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-dark">
            Filters ({activeFilterCount})
          </span>
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-xs text-brand-muted hover:text-brand-primary transition-colors"
          >
            <X className="h-3 w-3" />
            Clear all
          </button>
        </div>
      )}

      {/* Category */}
      <div>
        <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.2em] text-brand-muted mb-3">
          Category
        </p>
        <div className="space-y-2">
          {categories.map(({ value, label }) => (
            <button
              key={value}
              onClick={() =>
                setFilter(
                  "category",
                  filters.category === value ? undefined : value
                )
              }
              className={`flex items-center justify-between w-full text-sm transition-colors ${
                filters.category === value
                  ? "text-brand-primary font-semibold"
                  : "text-brand-dark hover:text-brand-primary"
              }`}
            >
              <span>{label}</span>
              {filters.category === value && (
                <X className="h-3.5 w-3.5" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.2em] text-brand-muted mb-3">
          Brand
        </p>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={filters.brand === brand}
                onChange={() =>
                  setFilter("brand", filters.brand === brand ? undefined : brand)
                }
                className="h-4 w-4 rounded border-brand-border text-brand-primary accent-brand-primary"
              />
              <span className="text-sm text-brand-dark group-hover:text-brand-primary transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.2em] text-brand-muted mb-3">
          Collection
        </p>
        <div className="space-y-2">
          {tagFilters.map(({ value, label }) => (
            <button
              key={value}
              onClick={() =>
                setFilter("tags", filters.tags === value ? undefined : value)
              }
              className={`flex items-center justify-between w-full text-sm transition-colors ${
                filters.tags === value
                  ? "text-brand-primary font-semibold"
                  : "text-brand-dark hover:text-brand-primary"
              }`}
            >
              <span>{label}</span>
              {filters.tags === value && <X className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.2em] text-brand-muted mb-3">
          Max Price (MUR)
        </p>
        <div className="space-y-2">
          {[2000, 5000, 10000, 20000].map((max) => (
            <button
              key={max}
              onClick={() =>
                setFilter(
                  "priceMax",
                  filters.priceMax === max ? undefined : max
                )
              }
              className={`flex items-center justify-between w-full text-sm transition-colors ${
                filters.priceMax === max
                  ? "text-brand-primary font-semibold"
                  : "text-brand-dark hover:text-brand-primary"
              }`}
            >
              <span>Under Rs {max.toLocaleString()}</span>
              {filters.priceMax === max && <X className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
