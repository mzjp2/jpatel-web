"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";
import CartItem from "./CartItem";

export default function CartDrawer() {
  const { items, isOpen, closeCart, itemCount, subtotal, clearCart } = useCart();

  const deliveryFee = 150;
  const freeDeliveryThreshold = 3000;
  const total = subtotal + (subtotal >= freeDeliveryThreshold ? 0 : deliveryFee);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <DialogContent side="right" className="flex flex-col">
        <DialogHeader>
          <DialogTitle>
            Your Bag{" "}
            {itemCount > 0 && (
              <span className="text-brand-muted font-normal normal-case text-sm">
                ({itemCount} {itemCount === 1 ? "item" : "items"})
              </span>
            )}
          </DialogTitle>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 py-12 text-center">
            <div className="p-4 rounded-full bg-brand-surface">
              <ShoppingBag className="h-8 w-8 text-brand-muted" />
            </div>
            <div>
              <p className="font-heading font-semibold text-brand-dark uppercase tracking-wide">
                Your bag is empty
              </p>
              <p className="text-sm text-brand-muted mt-1">
                Browse our collection and find your perfect pair.
              </p>
            </div>
            <Button variant="primary" size="sm" asChild onClick={closeCart}>
              <Link href="/shop">Browse Shop</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="border-t border-brand-border px-6 py-5 space-y-3">
              {/* Delivery nudge */}
              {subtotal < freeDeliveryThreshold && (
                <p className="text-xs text-brand-muted text-center">
                  Add{" "}
                  <span className="font-semibold text-brand-primary">
                    {formatPrice(freeDeliveryThreshold - subtotal)}
                  </span>{" "}
                  more for free delivery
                </p>
              )}

              <div className="flex justify-between text-sm text-brand-muted">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-brand-muted">
                <span>Delivery</span>
                <span>
                  {subtotal >= freeDeliveryThreshold
                    ? "Free"
                    : formatPrice(deliveryFee)}
                </span>
              </div>
              <div className="flex justify-between font-heading font-bold text-brand-dark border-t border-brand-border pt-3">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>

              <Button asChild variant="primary" className="w-full" onClick={closeCart}>
                <Link href="/shop/checkout">Proceed to Checkout</Link>
              </Button>
              <button
                onClick={clearCart}
                className="w-full text-xs text-brand-muted hover:text-brand-primary text-center transition-colors py-1"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
