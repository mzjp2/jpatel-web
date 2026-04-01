"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import type { ProductCategory } from "@/types/product";

export interface ProductFilters {
  category?: ProductCategory;
  brand?: string;
  priceMax?: number;
  tags?: string;
  search?: string;
}

export function useProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters: ProductFilters = {
    category: (searchParams.get("category") as ProductCategory) || undefined,
    brand: searchParams.get("brand") || undefined,
    priceMax: searchParams.get("priceMax")
      ? Number(searchParams.get("priceMax"))
      : undefined,
    tags: searchParams.get("tags") || undefined,
    search: searchParams.get("search") || undefined,
  };

  const setFilter = useCallback(
    (key: keyof ProductFilters, value: string | number | undefined) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === undefined || value === "") {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const clearFilters = useCallback(() => {
    router.replace(pathname, { scroll: false });
  }, [router, pathname]);

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  return { filters, setFilter, clearFilters, activeFilterCount };
}
