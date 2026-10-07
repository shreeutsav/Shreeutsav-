export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  category: "Gifts" | "Hampers" | "Pooja Kits" | "Traditional Décor" | "Festive Collections" | "Custom Hampers";
  images: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderDetails {
  customerName: string;
  mobile: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}
