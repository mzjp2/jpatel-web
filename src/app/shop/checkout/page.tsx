"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ShieldCheck, Truck, Store, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";
import { locations } from "@/data/locations";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">("pickup");
  const [ordered, setOrdered] = useState(false);
  const [loading, setLoading] = useState(false);

  const deliveryFee = deliveryMethod === "delivery" ? 150 : 0;
  const total = subtotal + deliveryFee;
  const orderRef = Math.random().toString(36).slice(2, 10).toUpperCase();

  const handleOrder = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setOrdered(true);
    clearCart();
  };

  if (ordered) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-brand-surface">
        <div className="text-center max-w-md mx-auto px-4 py-16">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-green-100 p-5">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-heading font-bold uppercase text-brand-dark tracking-tight mb-3">
            Order Confirmed!
          </h1>
          <p className="text-brand-muted mb-6">
            Thank you for your order. You will receive an SMS confirmation shortly.
          </p>
          <div className="bg-white rounded-xl border border-brand-border p-5 mb-8">
            <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">Order Reference</p>
            <p className="text-2xl font-heading font-bold text-brand-primary tracking-widest">
              JP-{orderRef}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button asChild variant="primary">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-brand-muted text-lg mb-4">Your cart is empty.</p>
          <Button asChild variant="primary">
            <Link href="/shop">Browse Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-brand-surface border-b border-brand-border py-3">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/shop"
            className="flex items-center gap-1 text-xs text-brand-muted hover:text-brand-primary transition-colors"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Continue Shopping
          </Link>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-heading font-bold uppercase text-brand-dark tracking-tight mb-10">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact */}
              <div className="bg-brand-surface rounded-xl p-6 space-y-4">
                <h2 className="font-heading font-bold uppercase tracking-wide text-brand-dark text-sm border-b border-brand-border pb-3">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="First Name" placeholder="Jean" required />
                  <Input label="Last Name" placeholder="Dupont" required />
                  <Input label="Email" type="email" placeholder="jean@example.com" required />
                  <Input label="Phone" type="tel" placeholder="+230 5XX XXXX" required />
                </div>
              </div>

              {/* Delivery method */}
              <div className="bg-brand-surface rounded-xl p-6 space-y-4">
                <h2 className="font-heading font-bold uppercase tracking-wide text-brand-dark text-sm border-b border-brand-border pb-3">
                  Delivery Method
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setDeliveryMethod("pickup")}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 text-left transition-colors ${
                      deliveryMethod === "pickup"
                        ? "border-brand-primary bg-brand-primary/5"
                        : "border-brand-border hover:border-brand-muted"
                    }`}
                  >
                    <Store className={`h-5 w-5 shrink-0 ${deliveryMethod === "pickup" ? "text-brand-primary" : "text-brand-muted"}`} />
                    <div>
                      <p className="text-sm font-semibold text-brand-dark">In-Store Pickup</p>
                      <p className="text-xs text-green-600 font-semibold">Free</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setDeliveryMethod("delivery")}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 text-left transition-colors ${
                      deliveryMethod === "delivery"
                        ? "border-brand-primary bg-brand-primary/5"
                        : "border-brand-border hover:border-brand-muted"
                    }`}
                  >
                    <Truck className={`h-5 w-5 shrink-0 ${deliveryMethod === "delivery" ? "text-brand-primary" : "text-brand-muted"}`} />
                    <div>
                      <p className="text-sm font-semibold text-brand-dark">Home Delivery</p>
                      <p className="text-xs text-brand-muted">{formatPrice(150)} flat fee</p>
                    </div>
                  </button>
                </div>

                {deliveryMethod === "pickup" && (
                  <div>
                    <label className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-dark block mb-2">
                      Select Branch
                    </label>
                    <select className="w-full h-11 rounded border border-brand-border px-3 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary">
                      {locations.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                          {loc.name} — {loc.address}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {deliveryMethod === "delivery" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <Input label="Street Address" placeholder="123 Royal Road" />
                    </div>
                    <Input label="City / Town" placeholder="Quatre-Bornes" />
                    <Input label="District" placeholder="Plaines Wilhems" />
                  </div>
                )}
              </div>

              {/* Payment — Blink placeholder */}
              <div className="bg-brand-surface rounded-xl p-6 space-y-4">
                <h2 className="font-heading font-bold uppercase tracking-wide text-brand-dark text-sm border-b border-brand-border pb-3">
                  Payment
                </h2>
                <div className="border-2 border-dashed border-brand-border rounded-xl p-8 text-center">
                  <div className="inline-flex items-center gap-2 bg-white border border-brand-border rounded-lg px-4 py-2 mb-4">
                    <ShieldCheck className="h-5 w-5 text-brand-primary" />
                    <span className="text-sm font-semibold text-brand-dark">Blink</span>
                    <span className="text-xs text-brand-muted">Secure Payment</span>
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    Payment is processed securely through the{" "}
                    <strong className="text-brand-dark">Blink</strong> portal.
                    <br />
                    You will be redirected to complete payment after order confirmation.
                  </p>
                  <div className="flex justify-center gap-3 mt-4">
                    {["VISA", "MC", "MAESTRO"].map((card) => (
                      <span
                        key={card}
                        className="px-3 py-1 bg-white border border-brand-border rounded text-[10px] font-bold text-brand-muted tracking-wider"
                      >
                        {card}
                      </span>
                    ))}
                  </div>
                </div>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-brand-border accent-brand-primary"
                  />
                  <span className="text-xs text-brand-muted">
                    I agree to the{" "}
                    <Link href="/terms-conditions" className="text-brand-primary hover:underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="text-brand-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>
            </div>

            {/* Right: order summary */}
            <div>
              <div className="bg-brand-surface rounded-xl border border-brand-border p-6 sticky top-24">
                <h2 className="font-heading font-bold uppercase tracking-wide text-brand-dark text-sm mb-5">
                  Order Summary
                </h2>
                <div className="space-y-3 mb-5">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative h-14 w-14 rounded-md overflow-hidden bg-white shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-brand-dark line-clamp-1">
                          {item.name}
                        </p>
                        <p className="text-xs text-brand-muted">Qty: {item.quantity}</p>
                        <p className="text-xs font-semibold text-brand-dark">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-brand-border pt-4 space-y-2 text-sm">
                  <div className="flex justify-between text-brand-muted">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-brand-muted">
                    <span>Delivery</span>
                    <span className={deliveryMethod === "pickup" ? "text-green-600 font-semibold" : ""}>
                      {deliveryMethod === "pickup" ? "Free" : formatPrice(deliveryFee)}
                    </span>
                  </div>
                  <div className="flex justify-between font-heading font-bold text-brand-dark border-t border-brand-border pt-3">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
                <Button
                  onClick={handleOrder}
                  loading={loading}
                  variant="primary"
                  className="w-full mt-5"
                  size="lg"
                >
                  {loading ? "Processing..." : `Place Order · ${formatPrice(total)}`}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
