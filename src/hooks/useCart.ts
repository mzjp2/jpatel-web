import { useCartStore } from "@/store/cartStore";

export function useCart() {
  const store = useCartStore();

  const itemCount = store.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = store.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return {
    ...store,
    itemCount,
    subtotal,
  };
}
