export type ProductCategory =
  | "frames"
  | "sunglasses"
  | "contact-lenses"
  | "accessories";

export type FrameSize = "XS" | "S" | "M" | "L" | "XL";

export interface ProductVariant {
  id: string;
  color?: string;
  colorHex?: string;
  frameSize?: FrameSize;
  stock: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  variants: ProductVariant[];
  tags: string[];
  isContactLens: boolean;
  featured?: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  color?: string;
  frameSize?: string;
  contactLensPower?: ContactLensPower;
}

export interface ContactLensPower {
  sph: string;
  cyl?: string;
  axis?: string;
  add?: string;
  eye: "left" | "right" | "both";
}
