import type { Product } from "@/types/product";

// NOTE: Replace images with Shopify CDN URLs when integrating with Smart Applications / Shopify
export const products: Product[] = [
  // FRAMES
  {
    id: "p001",
    slug: "jp-classic-tortoise",
    name: "JP Classic Tortoise",
    brand: "JP House Brand",
    category: "frames",
    description:
      "Timeless tortoiseshell acetate frame with a lightweight design perfect for all-day wear. Includes premium anti-reflective lenses.",
    price: 3200,
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80",
    ],
    variants: [
      { id: "p001-tort-m", color: "Tortoise", colorHex: "#8B6914", frameSize: "M", stock: 5 },
      { id: "p001-tort-l", color: "Tortoise", colorHex: "#8B6914", frameSize: "L", stock: 3 },
      { id: "p001-blk-m", color: "Black", colorHex: "#1a1a1a", frameSize: "M", stock: 8 },
      { id: "p001-blk-l", color: "Black", colorHex: "#1a1a1a", frameSize: "L", stock: 4 },
    ],
    tags: ["bestseller", "new"],
    isContactLens: false,
    featured: true,
  },
  {
    id: "p002",
    slug: "ray-ban-rb5154-clubmaster",
    name: "RB5154 Clubmaster",
    brand: "Ray-Ban",
    category: "frames",
    description:
      "Iconic Clubmaster design with a browline silhouette. A Ray-Ban classic reimagined in premium acetate.",
    price: 7800,
    compareAtPrice: 9200,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=800&q=80",
    ],
    variants: [
      { id: "p002-bkg-m", color: "Black/Gold", colorHex: "#1a1a1a", frameSize: "M", stock: 6 },
      { id: "p002-hav-m", color: "Havana", colorHex: "#6B3A2A", frameSize: "M", stock: 4 },
      { id: "p002-hav-l", color: "Havana", colorHex: "#6B3A2A", frameSize: "L", stock: 2 },
    ],
    tags: ["promo"],
    isContactLens: false,
    featured: true,
  },
  {
    id: "p003",
    slug: "oakley-ox8046-pitchman",
    name: "OX8046 Pitchman",
    brand: "Oakley",
    category: "frames",
    description:
      "Sporty yet refined rectangular frame crafted from lightweight O-Matter. Ideal for active lifestyles.",
    price: 8500,
    images: [
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    ],
    variants: [
      { id: "p003-sblk-m", color: "Satin Black", colorHex: "#2d2d2d", frameSize: "M", stock: 5 },
      { id: "p003-sblk-l", color: "Satin Black", colorHex: "#2d2d2d", frameSize: "L", stock: 3 },
      { id: "p003-sblue-m", color: "Satin Blue", colorHex: "#1e3a5f", frameSize: "M", stock: 4 },
    ],
    tags: ["new"],
    isContactLens: false,
  },
  {
    id: "p004",
    slug: "jp-slim-oval-gold",
    name: "JP Slim Oval Gold",
    brand: "JP House Brand",
    category: "frames",
    description:
      "Elegant slim oval metal frame with gold finish. Minimalist design ideal for a sophisticated look.",
    price: 2800,
    images: [
      "https://images.unsplash.com/photo-1582142306909-195724d33ffc?w=800&q=80",
    ],
    variants: [
      { id: "p004-gold-s", color: "Gold", colorHex: "#D4AF37", frameSize: "S", stock: 6 },
      { id: "p004-gold-m", color: "Gold", colorHex: "#D4AF37", frameSize: "M", stock: 8 },
      { id: "p004-rose-s", color: "Rose Gold", colorHex: "#B76E79", frameSize: "S", stock: 4 },
      { id: "p004-rose-m", color: "Rose Gold", colorHex: "#B76E79", frameSize: "M", stock: 5 },
    ],
    tags: ["promo"],
    isContactLens: false,
  },
  {
    id: "p005",
    slug: "silhouette-titan-rimless",
    name: "Titan Rimless Minimal",
    brand: "Silhouette",
    category: "frames",
    description:
      "Ultra-lightweight rimless titanium frame weighing just 1.8g. Barely there comfort with maximum style.",
    price: 14500,
    compareAtPrice: 16000,
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80",
    ],
    variants: [
      { id: "p005-slv-s", color: "Silver", colorHex: "#C0C0C0", frameSize: "S", stock: 2 },
      { id: "p005-slv-m", color: "Silver", colorHex: "#C0C0C0", frameSize: "M", stock: 3 },
      { id: "p005-gld-m", color: "Gold", colorHex: "#D4AF37", frameSize: "M", stock: 2 },
    ],
    tags: ["promo"],
    isContactLens: false,
    featured: true,
  },
  {
    id: "p006",
    slug: "jp-round-vintage-brown",
    name: "JP Round Vintage",
    brand: "JP House Brand",
    category: "frames",
    description:
      "Retro-inspired round acetate frame with a warm brown tint. Perfect for creative personalities.",
    price: 2600,
    images: [
      "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=800&q=80",
    ],
    variants: [
      { id: "p006-brn-xs", color: "Brown", colorHex: "#6B3A2A", frameSize: "XS", stock: 4 },
      { id: "p006-brn-s", color: "Brown", colorHex: "#6B3A2A", frameSize: "S", stock: 6 },
      { id: "p006-blk-xs", color: "Black", colorHex: "#1a1a1a", frameSize: "XS", stock: 5 },
    ],
    tags: [],
    isContactLens: false,
  },

  // SUNGLASSES
  {
    id: "p007",
    slug: "ray-ban-rb3025-aviator",
    name: "RB3025 Aviator Classic",
    brand: "Ray-Ban",
    category: "sunglasses",
    description:
      "The original Aviator, as iconic as ever. Crafted in high-quality metal with crystal lenses and 100% UV protection.",
    price: 9200,
    images: [
      "https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=800&q=80",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80",
    ],
    variants: [
      { id: "p007-sgld-m", color: "Silver/Green", colorHex: "#C0C0C0", frameSize: "M", stock: 8 },
      { id: "p007-gld-m", color: "Gold/Brown", colorHex: "#D4AF37", frameSize: "M", stock: 6 },
      { id: "p007-blk-m", color: "Black/Grey", colorHex: "#1a1a1a", frameSize: "M", stock: 5 },
    ],
    tags: ["bestseller"],
    isContactLens: false,
    featured: true,
  },
  {
    id: "p008",
    slug: "oakley-holbrook-xl",
    name: "Holbrook XL",
    brand: "Oakley",
    category: "sunglasses",
    description:
      "Larger proportions in a keyhole bridge acetate frame. Prizm lenses for enhanced colour and contrast.",
    price: 11500,
    compareAtPrice: 13000,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    ],
    variants: [
      { id: "p008-mblk-l", color: "Matte Black", colorHex: "#333", frameSize: "L", stock: 7 },
      { id: "p008-tort-l", color: "Tortoise", colorHex: "#8B6914", frameSize: "L", stock: 4 },
    ],
    tags: ["promo"],
    isContactLens: false,
  },
  {
    id: "p009",
    slug: "jp-retro-cat-eye",
    name: "JP Retro Cat Eye",
    brand: "JP House Brand",
    category: "sunglasses",
    description:
      "Chic oversized cat-eye silhouette with gradient lenses and UV400 protection. Sun-ready glamour.",
    price: 3500,
    images: [
      "https://images.unsplash.com/photo-1625912514066-15d3a1b6d47b?w=800&q=80",
    ],
    variants: [
      { id: "p009-blkpnk-m", color: "Black/Pink", colorHex: "#1a1a1a", frameSize: "M", stock: 6 },
      { id: "p009-tort-m", color: "Tortoise", colorHex: "#8B6914", frameSize: "M", stock: 5 },
      { id: "p009-wht-m", color: "White", colorHex: "#F5F5F5", frameSize: "M", stock: 3 },
    ],
    tags: ["new"],
    isContactLens: false,
  },
  {
    id: "p010",
    slug: "prada-pr-22ys-wrap",
    name: "PR 22YS Wrap Sport",
    brand: "Prada",
    category: "sunglasses",
    description:
      "Sleek wrap-around sport design from Prada Linea Rossa. Lightweight nylon frame with interchangeable lenses.",
    price: 18500,
    compareAtPrice: 21000,
    images: [
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&q=80",
    ],
    variants: [
      { id: "p010-blk-m", color: "Black", colorHex: "#1a1a1a", frameSize: "M", stock: 3 },
      { id: "p010-grn-m", color: "Dark Green", colorHex: "#1a3d2b", frameSize: "M", stock: 2 },
    ],
    tags: ["promo"],
    isContactLens: false,
    featured: true,
  },
  {
    id: "p011",
    slug: "jp-square-sport",
    name: "JP Square Sport",
    brand: "JP House Brand",
    category: "sunglasses",
    description:
      "Bold square frame with polarised lenses and rubberised grip temples. Built for sport, styled for every day.",
    price: 4200,
    images: [
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=800&q=80",
    ],
    variants: [
      { id: "p011-blkred-m", color: "Black/Red", colorHex: "#1a1a1a", frameSize: "M", stock: 10 },
      { id: "p011-nvy-m", color: "Navy", colorHex: "#1a2a5e", frameSize: "M", stock: 7 },
    ],
    tags: [],
    isContactLens: false,
  },

  // CONTACT LENSES
  {
    id: "p012",
    slug: "acuvue-oasys-1-day",
    name: "Acuvue Oasys 1-Day",
    brand: "Johnson & Johnson",
    category: "contact-lenses",
    description:
      "30-pack daily disposable contact lenses with HydraLuxe technology for exceptional comfort. No cleaning required.",
    price: 1800,
    images: [
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80",
    ],
    variants: [
      { id: "p012-30", color: "30 pack", stock: 20 },
      { id: "p012-90", color: "90 pack", stock: 15 },
    ],
    tags: ["bestseller"],
    isContactLens: true,
    featured: true,
  },
  {
    id: "p013",
    slug: "biofinity-monthly",
    name: "Biofinity Monthly",
    brand: "CooperVision",
    category: "contact-lenses",
    description:
      "Monthly replacement lenses with Aquaform® Technology for naturally moist, breathable wear up to 30 days.",
    price: 1200,
    images: [
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80",
    ],
    variants: [
      { id: "p013-6pk", color: "6 pack", stock: 25 },
    ],
    tags: ["promo"],
    isContactLens: true,
  },
  {
    id: "p014",
    slug: "dailies-total-1",
    name: "Dailies Total1",
    brand: "Alcon",
    category: "contact-lenses",
    description:
      "Water gradient daily lenses with up to 99% water content at the surface — like wearing nothing at all.",
    price: 2200,
    compareAtPrice: 2600,
    images: [
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80",
    ],
    variants: [
      { id: "p014-30", color: "30 pack", stock: 18 },
      { id: "p014-90", color: "90 pack", stock: 10 },
    ],
    tags: ["promo"],
    isContactLens: true,
  },
  {
    id: "p015",
    slug: "acuvue-moist-biweekly",
    name: "Acuvue Moist 2-Weekly",
    brand: "Johnson & Johnson",
    category: "contact-lenses",
    description:
      "2-weekly disposable lenses with LACREON® technology providing long-lasting moisture comfort.",
    price: 900,
    images: [
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80",
    ],
    variants: [
      { id: "p015-6pk", color: "6 pack", stock: 30 },
      { id: "p015-12pk", color: "12 pack", stock: 20 },
    ],
    tags: [],
    isContactLens: true,
  },
  {
    id: "p016",
    slug: "opti-free-solution",
    name: "Opti-Free Puremoist Solution",
    brand: "Alcon",
    category: "contact-lenses",
    description:
      "Multi-purpose disinfecting solution for cleaning, rinsing, and storing soft contact lenses. 300ml.",
    price: 550,
    images: [
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80",
    ],
    variants: [
      { id: "p016-300", color: "300ml", stock: 40 },
      { id: "p016-twin", color: "Twin Pack 2×300ml", stock: 20 },
    ],
    tags: [],
    isContactLens: false,
  },

  // ACCESSORIES
  {
    id: "p017",
    slug: "jp-leather-case-black",
    name: "JP Leather Case",
    brand: "JP House Brand",
    category: "accessories",
    description:
      "Genuine leather protective case with magnetic closure and microfibre lining. Available in black and tan.",
    price: 850,
    images: [
      "https://images.unsplash.com/photo-1584786370818-fb5060f9a9c4?w=800&q=80",
    ],
    variants: [
      { id: "p017-blk", color: "Black", colorHex: "#1a1a1a", stock: 15 },
      { id: "p017-tan", color: "Tan", colorHex: "#C1906B", stock: 12 },
    ],
    tags: [],
    isContactLens: false,
  },
  {
    id: "p018",
    slug: "jp-cleaning-kit",
    name: "JP Lens Cleaning Kit",
    brand: "JP House Brand",
    category: "accessories",
    description:
      "Complete cleaning kit: 30ml spray, ultra-soft microfibre cloth, and lens brush. Travel-sized.",
    price: 420,
    images: [
      "https://images.unsplash.com/photo-1584786370818-fb5060f9a9c4?w=800&q=80",
    ],
    variants: [
      { id: "p018-std", color: "Standard", stock: 30 },
    ],
    tags: ["promo"],
    isContactLens: false,
  },
  {
    id: "p019",
    slug: "jp-anti-fog-wipes",
    name: "JP Anti-Fog Wipes",
    brand: "JP House Brand",
    category: "accessories",
    description:
      "Pre-moistened anti-fog lens wipes. Essential for mask wearers. 30-wipe pack.",
    price: 280,
    images: [
      "https://images.unsplash.com/photo-1584786370818-fb5060f9a9c4?w=800&q=80",
    ],
    variants: [
      { id: "p019-30pk", color: "30 pack", stock: 50 },
      { id: "p019-60pk", color: "60 pack", stock: 30 },
    ],
    tags: [],
    isContactLens: false,
  },
  {
    id: "p020",
    slug: "jp-retainer-chain-gold",
    name: "JP Retainer Chain",
    brand: "JP House Brand",
    category: "accessories",
    description:
      "Elegant eyewear retainer chain in 18K gold-plated stainless steel. Keeps glasses safe and stylish.",
    price: 650,
    images: [
      "https://images.unsplash.com/photo-1584786370818-fb5060f9a9c4?w=800&q=80",
    ],
    variants: [
      { id: "p020-gld", color: "Gold", colorHex: "#D4AF37", stock: 20 },
      { id: "p020-slv", color: "Silver", colorHex: "#C0C0C0", stock: 18 },
    ],
    tags: ["new"],
    isContactLens: false,
  },
  {
    id: "p021",
    slug: "jp-blue-light-frames",
    name: "JP Blue Light Block",
    brand: "JP House Brand",
    category: "frames",
    description:
      "Non-prescription frames with built-in blue light filtering lenses. Reduce eye strain from screens.",
    price: 1800,
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80",
    ],
    variants: [
      { id: "p021-blk-m", color: "Black", colorHex: "#1a1a1a", frameSize: "M", stock: 12 },
      { id: "p021-clr-m", color: "Crystal Clear", colorHex: "#E8E8E8", frameSize: "M", stock: 8 },
    ],
    tags: ["bestseller", "new"],
    isContactLens: false,
  },
  {
    id: "p022",
    slug: "biofinity-toric-monthly",
    name: "Biofinity Toric Monthly",
    brand: "CooperVision",
    category: "contact-lenses",
    description:
      "Monthly toric lenses designed specifically for astigmatism. Stable, comfortable, and clear vision all day.",
    price: 1500,
    compareAtPrice: 1800,
    images: [
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80",
    ],
    variants: [
      { id: "p022-6pk", color: "6 pack", stock: 20 },
    ],
    tags: ["promo"],
    isContactLens: true,
  },
  {
    id: "p023",
    slug: "jp-sunglasses-kids",
    name: "JP Kids Sun Shield",
    brand: "JP House Brand",
    category: "sunglasses",
    description:
      "Flexible, durable rubber frame with polarised UV400 lenses. Designed for ages 4–12.",
    price: 1900,
    images: [
      "https://images.unsplash.com/photo-1625912514066-15d3a1b6d47b?w=800&q=80",
    ],
    variants: [
      { id: "p023-blu-xs", color: "Blue", colorHex: "#1e60c8", frameSize: "XS", stock: 10 },
      { id: "p023-pnk-xs", color: "Pink", colorHex: "#E91E8C", frameSize: "XS", stock: 8 },
      { id: "p023-grn-xs", color: "Green", colorHex: "#2d8a4e", frameSize: "XS", stock: 7 },
    ],
    tags: ["new"],
    isContactLens: false,
  },
  {
    id: "p024",
    slug: "jp-hardshell-sunglass-case",
    name: "JP Hard Shell Sunglass Case",
    brand: "JP House Brand",
    category: "accessories",
    description:
      "Slim hardshell case with spring-loaded hinge. Fits most full-frame sunglasses. Includes cleaning cloth.",
    price: 480,
    images: [
      "https://images.unsplash.com/photo-1584786370818-fb5060f9a9c4?w=800&q=80",
    ],
    variants: [
      { id: "p024-blk", color: "Black", colorHex: "#1a1a1a", stock: 25 },
      { id: "p024-red", color: "Burgundy", colorHex: "#B13131", stock: 20 },
    ],
    tags: [],
    isContactLens: false,
  },
];
