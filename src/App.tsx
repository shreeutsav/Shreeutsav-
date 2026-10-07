/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AnnouncementBar, Header, Footer, CartDrawer, ProductCard } from "./components/UI";
import { Hero, CategorySection, InstagramSection } from "./components/Sections";
import { ProductDetail, CategoryPage } from "./components/Pages";
import { CheckoutProcess, OrderConfirmed } from "./components/Checkout";
import { products } from "./data/products";
import { ShoppingBag } from "lucide-react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <CategorySection />
      
      {/* Featured Collection */}
      <section className="py-24 bg-brand-cream mandala-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="space-y-4 text-center md:text-left">
              <span className="text-brand-maroon font-serif text-lg tracking-[0.2em] uppercase">Handpicked</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900">Featured Collection</h2>
            </div>
            <button className="px-8 py-4 bg-stone-900 text-brand-gold font-bold uppercase tracking-widest rounded-full hover:bg-brand-maroon transition-all shadow-lg">
              View All Products
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-[2rem] overflow-hidden bg-brand-maroon flex flex-col md:flex-row items-center">
            <div className="flex-1 p-8 md:p-16 space-y-6 text-center md:text-left">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Limited Time Offer</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                Get 20% OFF on your <br className="hidden md:block" /> first purchase!
              </h2>
              <p className="text-brand-gold/80 font-medium">Use Code: WELCOMEUTNAV</p>
              <button className="px-10 py-4 bg-brand-gold text-stone-900 font-bold uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-xl">
                Claim Now
              </button>
            </div>
            <div className="flex-1 h-[300px] md:h-[500px] w-full">
              <img 
                src="/src/assets/images/product_custom_hamper_1791342974410.jpg" 
                alt="Special Offer" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <InstagramSection />
    </main>
  );
}

function LoadingScreen() {
  return (
    <motion.div 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-brand-cream flex flex-col items-center justify-center space-y-8"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <img 
          src="/src/assets/images/shreeutsav_logo_1791342920873.jpg" 
          alt="ShreeUtsav" 
          className="h-24 w-24 object-contain rounded-full border-4 border-brand-gold shadow-2xl"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 rounded-full border-4 border-brand-maroon/20 animate-ping" />
      </motion.div>
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-serif font-bold text-brand-maroon tracking-widest uppercase">ShreeUtsav</h2>
        <p className="text-xs font-bold text-brand-gold uppercase tracking-[0.5em]">Celebrating Traditions...</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className="flex flex-col min-h-screen">
        <AnnouncementBar />
        <Header onCartOpen={() => setIsCartOpen(true)} />
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/checkout" element={<CheckoutProcess />} />
            <Route path="/order-confirmed" element={<OrderConfirmed />} />
          </Routes>
        </div>

        <Footer />

        {/* Mobile Sticky CTA */}
        <div className="lg:hidden fixed bottom-6 right-6 z-40">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="w-14 h-14 bg-brand-maroon text-brand-gold rounded-full shadow-2xl flex items-center justify-center relative border-2 border-brand-gold/30"
          >
            <ShoppingBag className="w-6 h-6" />
          </button>
        </div>
      </div>
    </Router>
  );
}

