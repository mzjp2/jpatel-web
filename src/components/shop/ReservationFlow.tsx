"use client";

import { useState } from "react";
import { CheckCircle, MapPin, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { locations } from "@/data/locations";
import type { Product } from "@/types/product";

interface ReservationFlowProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationFlow({ product, isOpen, onClose }: ReservationFlowProps) {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const reservationRef = crypto.randomUUID().slice(0, 8).toUpperCase();

  const handleConfirm = () => {
    if (!selectedLocation) return;
    setConfirmed(true);
  };

  const handleClose = () => {
    setConfirmed(false);
    setSelectedLocation(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Reserve In-Store</DialogTitle>
        </DialogHeader>

        <div className="p-6">
          {!confirmed ? (
            <div className="space-y-5">
              <p className="text-sm text-brand-muted leading-relaxed">
                Reserve <strong className="text-brand-dark">{product.name}</strong> at
                your nearest branch. We&apos;ll hold it for <strong>3 days</strong> — free of charge.
              </p>

              <div>
                <p className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-dark mb-3">
                  Choose a Branch
                </p>
                <div className="space-y-2">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedLocation(loc.id)}
                      className={`w-full flex items-start gap-3 p-3.5 rounded-lg border text-left transition-colors ${
                        selectedLocation === loc.id
                          ? "border-brand-primary bg-brand-primary/5"
                          : "border-brand-border hover:border-brand-primary/50"
                      }`}
                    >
                      <MapPin className={`h-4 w-4 mt-0.5 shrink-0 ${selectedLocation === loc.id ? "text-brand-primary" : "text-brand-muted"}`} />
                      <div>
                        <p className="text-sm font-semibold text-brand-dark">{loc.name}</p>
                        <p className="text-xs text-brand-muted">{loc.address}</p>
                        <p className="text-xs text-brand-muted">{loc.phone}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
                <Clock className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800">
                  Reservations are held for <strong>3 days</strong>. After this period, the item is automatically returned to stock.
                </p>
              </div>

              <Button
                onClick={handleConfirm}
                disabled={!selectedLocation}
                variant="primary"
                className="w-full"
              >
                Confirm Reservation
              </Button>
            </div>
          ) : (
            <div className="text-center py-4 space-y-5">
              <div className="flex justify-center">
                <div className="rounded-full bg-green-100 p-4">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold uppercase text-brand-dark tracking-wide mb-1">
                  Reserved!
                </h3>
                <p className="text-brand-muted text-sm">
                  Your item is being held at{" "}
                  <strong className="text-brand-dark">
                    {locations.find((l) => l.id === selectedLocation)?.name}
                  </strong>{" "}
                  for 3 days.
                </p>
              </div>
              <div className="bg-brand-surface rounded-lg p-4">
                <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">Reference Number</p>
                <p className="text-2xl font-heading font-bold text-brand-primary tracking-widest">
                  {reservationRef}
                </p>
                <p className="text-xs text-brand-muted mt-2">
                  Show this code when you arrive in-store.
                </p>
              </div>
              <Button onClick={handleClose} variant="outline" className="w-full">
                Done
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
