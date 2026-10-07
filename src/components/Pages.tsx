import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../hooks/useCart";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, ArrowLeft, Plus, Minus, ShieldCheck, Truck, RefreshCcw, Star } from "lucide-react";
import { ProductCard } from "./UI";

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <p className="text-xl font-serif text-stone-500">Product not found</p>
    </div>
  );

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-brand-cream min-h-screen pb-20">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-stone-500 font-bold uppercase tracking-widest text-xs mb-8 hover:text-brand-maroon transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-xl border border-stone-100"
            >
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img: string, idx: number) => (
                <div key={idx} className="aspect-square rounded-xl overflow-hidden bg-white border border-stone-200 cursor-pointer hover:border-brand-maroon transition-all">
                  <img src={img} alt={`${product.name} thumbnail`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-brand-maroon font-bold uppercase tracking-[0.2em] text-xs">{product.category}</span>
                <div className="flex items-center gap-1 text-brand-gold">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-brand-gold" />)}
                  <span className="text-stone-400 text-[10px] ml-2 font-bold">(48 Reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">{product.name}</h1>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-serif font-bold text-brand-maroon">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-stone-400 line-through text-lg italic">₹{product.originalPrice.toLocaleString()}</span>
                )}
                {product.originalPrice && (
                  <span className="bg-brand-gold/10 text-brand-gold text-xs font-bold px-2 py-1 rounded">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed text-lg">
              {product.description}
            </p>

            <div className="space-y-6 pt-4 border-t border-stone-100">
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-white">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 px-4 hover:bg-stone-50 text-stone-500 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 text-lg font-bold tabular-nums text-stone-800">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 px-4 hover:bg-stone-50 text-stone-500 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button 
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 py-4 bg-brand-maroon text-brand-gold font-bold uppercase tracking-widest rounded-lg hover:bg-stone-900 transition-all shadow-lg shadow-brand-maroon/20 flex items-center justify-center gap-3 group"
                >
                  <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </button>
              </div>
              <button 
                onClick={() => {
                  addToCart(product, quantity);
                  navigate("/checkout");
                }}
                className="w-full py-4 bg-white text-stone-900 border-2 border-stone-900 font-bold uppercase tracking-widest rounded-lg hover:bg-stone-900 hover:text-brand-gold transition-all"
              >
                Buy It Now
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {[
                { icon: Truck, title: "Free Delivery", sub: "Above ₹2999" },
                { icon: ShieldCheck, title: "Premium Quality", sub: "100% Authentic" },
                { icon: RefreshCcw, title: "Easy Returns", sub: "Within 7 Days" },
              ].map((f, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-white border border-stone-100">
                  <f.icon className="w-6 h-6 text-brand-maroon" />
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-stone-900">{f.title}</p>
                    <p className="text-[10px] text-stone-500">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="pt-10">
              <div className="flex border-b border-stone-200 mb-6 overflow-x-auto no-scrollbar">
                {["description", "details", "shipping"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] relative transition-colors ${activeTab === tab ? "text-brand-maroon" : "text-stone-400 hover:text-stone-600"}`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-maroon" />
                    )}
                  </button>
                ))}
              </div>
              <div className="min-h-[100px] text-stone-600 leading-relaxed text-sm">
                <AnimatePresence mode="wait">
                  {activeTab === "description" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {product.description}
                    </motion.div>
                  )}
                  {activeTab === "details" && (
                    <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="list-disc pl-5 space-y-2">
                      {product.details.map((d: string, i: number) => <li key={i}>{d}</li>)}
                    </motion.ul>
                  )}
                  {activeTab === "shipping" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Orders are processed within 24-48 hours. Delivery typically takes 3-7 business days across India. Free shipping on all orders above ₹2999.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 space-y-12">
            <div className="text-center space-y-4">
              <span className="text-brand-maroon font-serif text-lg tracking-[0.2em] uppercase">You May Also Like</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900">Related Products</h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function CategoryPage() {
  const { name } = useParams();
  const categoryProducts = products.filter(p => p.category === name || !name);

  return (
    <div className="bg-brand-cream min-h-screen pb-20">
      <div className="h-[30vh] sm:h-[40vh] relative flex items-center justify-center overflow-hidden">
        <img 
          src={name === "Hampers" ? "/src/assets/images/banner_festive_gifts_1791343099205.jpg" : "/src/assets/images/banner_traditional_decor_1791343124460.jpg"} 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Category Banner"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/60" />
        <div className="relative z-10 text-center space-y-4 px-4">
          <span className="text-brand-gold font-serif text-lg tracking-[0.2em] uppercase">Collection</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">{name || "All Collections"}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Filters (Desktop) */}
          <aside className="hidden md:block w-64 space-y-12">
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-maroon border-b border-stone-200 pb-4">Categories</h4>
              <ul className="space-y-4 text-sm font-medium text-stone-600">
                {["Gifts", "Hampers", "Pooja Kits", "Traditional Décor", "Festive Collections", "Custom Hampers"].map(c => (
                  <li key={c}>
                    <button className={`hover:text-brand-maroon transition-colors ${name === c ? "text-brand-maroon font-bold" : ""}`}>
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center justify-between border-b border-stone-200 pb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Showing {categoryProducts.length} Products</span>
              <select className="bg-transparent text-xs font-bold uppercase tracking-widest outline-none cursor-pointer">
                <option>Sort By: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>

            {categoryProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProducts.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-xl font-serif text-stone-500">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
