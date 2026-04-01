"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";
import type { CartItem as CartItemType } from "@/types/product";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-3 py-4 border-b border-brand-border last:border-0">
      <div className="relative h-18 w-18 shrink-0 rounded-md overflow-hidden bg-brand-surface">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="72px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-brand-dark line-clamp-1">{item.name}</p>
        {item.color && (
          <p className="text-xs text-brand-muted mt-0.5">{item.color}</p>
        )}
        {item.contactLensPower && (
          <p className="text-xs text-brand-muted mt-0.5">
            SPH {item.contactLensPower.sph}
            {item.contactLensPower.cyl && ` / CYL ${item.contactLensPower.cyl}`}
          </p>
        )}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border border-brand-border rounded">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1.5 text-brand-muted hover:text-brand-dark transition-colors"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="px-2.5 text-sm font-medium text-brand-dark">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1.5 text-brand-muted hover:text-brand-dark transition-colors"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-brand-dark">
              {formatPrice(item.price * item.quantity)}
            </span>
            <button
              onClick={() => removeItem(item.id)}
              className="p-1 text-brand-muted hover:text-red-500 transition-colors"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
