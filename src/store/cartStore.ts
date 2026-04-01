import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, ContactLensPower } from "@/types/product";

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "id" | "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (incoming) => {
        const id = [
          incoming.productId,
          incoming.variantId,
          incoming.contactLensPower
            ? JSON.stringify(incoming.contactLensPower)
            : "",
        ]
          .filter(Boolean)
          .join("-");

        const existing = get().items.find((i) => i.id === id);
        if (existing) {
          set((s) => ({
            items: s.items.map((i) =>
              i.id === id
                ? { ...i, quantity: i.quantity + (incoming.quantity ?? 1) }
                : i
            ),
            isOpen: true,
          }));
        } else {
          set((s) => ({
            items: [...s.items, { ...incoming, id, quantity: incoming.quantity ?? 1 }],
            isOpen: true,
          }));
        }
      },

      removeItem: (id) =>
        set((s) => ({ items: s.items.filter((i) => i.id !== id) })),

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set((s) => ({
          items: s.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
        }));
      },

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
    }),
    {
      name: "jp-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
