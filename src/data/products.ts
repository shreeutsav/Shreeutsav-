import { Product } from "../types";

export const products: Product[] = [
  {
    id: "h1",
    name: "Royal Rajwada Festive Hamper",
    price: 3499,
    originalPrice: 4500,
    category: "Hampers",
    description: "A grand collection of premium sweets, dry fruits, and artisanal tea, curated for royal gifting.",
    details: [
      "250g Kaju Katli",
      "200g Premium Almonds",
      "Handcrafted Brass Diya",
      "Organic Incense Sticks",
      "Saffron Infused Tea"
    ],
    images: ["/src/assets/images/category_hampers_1791342942628.jpg"],
    isBestSeller: true
  },
  {
    id: "p1",
    name: "Premium Brass Pooja Thali Set",
    price: 1899,
    category: "Pooja Kits",
    description: "An exquisite 7-piece pooja set handcrafted in high-quality brass for your daily rituals.",
    details: [
      "12-inch Brass Thali",
      "Aarti Diya",
      "Incense Holder",
      "Kumkum Bowls (Set of 2)",
      "Traditional Brass Bell",
      "Panchamrut Spoon"
    ],
    images: ["/src/assets/images/category_pooja_kits_1791342953655.jpg"]
  },
  {
    id: "d1",
    name: "Handcrafted Lotus Uruli",
    price: 1299,
    originalPrice: 1599,
    category: "Traditional Décor",
    description: "A stunning lotus-shaped brass vessel for floating flowers and candles to grace your entryway.",
    details: [
      "Material: 100% Solid Brass",
      "Diameter: 10 inches",
      "Rust-resistant coating",
      "Includes 5 floating tea lights"
    ],
    images: ["/src/assets/images/category_decor_1791342963753.jpg"],
    isNew: true
  },
  {
    id: "c1",
    name: "Wedding Special Custom Hamper",
    price: 5999,
    category: "Custom Hampers",
    description: "Personalize your blessings with our bespoke wedding hampers, tailored to your choice.",
    details: [
      "Customizable selection",
      "Premium Gold Foil Box",
      "Personalized message card",
      "Global shipping available"
    ],
    images: ["/src/assets/images/product_custom_hamper_1791342974410.jpg"]
  },
  {
    id: "g1",
    name: "Artisanal Brass Diya Collection",
    price: 899,
    category: "Gifts",
    description: "A set of 5 beautifully carved brass diyas to bring light and prosperity to your home.",
    details: [
      "Intricate floral carvings",
      "Heavy base for stability",
      "Set of 5 individual pieces",
      "Easy to clean and maintain"
    ],
    images: ["/src/assets/images/product_brass_diya_set_1791343138378.jpg"]
  },
  {
    id: "f1",
    name: "Marigold & Mango Leaf Toran",
    price: 499,
    category: "Festive Collections",
    description: "Freshly inspired traditional door hanging to welcome guests with auspicious vibes.",
    details: [
      "Length: 3 feet",
      "High-quality fabric flowers",
      "Washable and reusable",
      "Traditional color palette"
    ],
    images: ["/src/assets/images/product_flower_toran_1791343166208.jpg"]
  },
  {
    id: "g2",
    name: "Luxury Mithai Celebration Box",
    price: 1599,
    originalPrice: 1999,
    category: "Gifts",
    description: "A curated selection of India's finest sweets, made with pure desi ghee and love.",
    details: [
      "Assorted Mithai (500g)",
      "Premium nuts garnish",
      "Vacuum sealed for freshness",
      "Designer gift packaging"
    ],
    images: ["/src/assets/images/product_premium_sweets_box_1791343148770.jpg"]
  }
];
