"use client";

import { type ReactNode } from "react";
import CartDrawer from "@/components/shop/CartDrawer";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CartDrawer />
    </>
  );
}
