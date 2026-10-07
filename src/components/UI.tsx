import { motion } from "motion/react";
import { ShoppingBag, Search, Menu, Phone, Instagram, Mail, X, Plus, Minus, Trash2, ArrowRight, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { Product } from "../types";

export function AnnouncementBar() {
  return (
    <div className="bg-brand-maroon text-brand-gold py-2 px-4 text-center text-xs sm:text-sm font-medium tracking-widest uppercase">
      🎁 FREE DELIVERY ABOVE ₹2999 🎁
    </div>
  );
}

export function Header({ onCartOpen }: { onCartOpen: () => void }) {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-cream/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Zone 1: Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/src/assets/images/shreeutsav_logo_1791342920873.jpg" 
            alt="ShreeUtsav Logo" 
            className="h-10 w-10 object-contain rounded-full border border-brand-gold/20" 
            referrerPolicy="no-referrer"
          />
          <span className="text-xl md:text-2xl font-serif font-bold text-brand-maroon tracking-tighter group-hover:text-brand-gold transition-colors">
            ShreeUtsav
          </span>
        </Link>

        {/* Zone 2: Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700 uppercase tracking-widest">
          <Link to="/category/Gifts" className="hover:text-brand-maroon transition-colors">Gifts</Link>
          <Link to="/category/Hampers" className="hover:text-brand-maroon transition-colors">Hampers</Link>
          <Link to="/category/Pooja Kits" className="hover:text-brand-maroon transition-colors">Pooja Kits</Link>
          <Link to="/category/Traditional Décor" className="hover:text-brand-maroon transition-colors whitespace-nowrap">Traditional Décor</Link>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 hover:bg-brand-maroon/5 rounded-full transition-colors hidden sm:block">
            <Search className="w-5 h-5 text-stone-700" />
          </button>
          <button 
            onClick={onCartOpen}
            className="p-2 hover:bg-brand-maroon/5 rounded-full transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5 text-stone-700" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-maroon text-brand-gold text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          <button className="lg:hidden p-2 hover:bg-brand-maroon/5 rounded-full transition-colors">
            <Menu className="w-5 h-5 text-stone-700" />
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 mandala-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/src/assets/images/shreeutsav_logo_1791342920873.jpg" 
                alt="ShreeUtsav Logo" 
                className="h-10 w-10 object-contain rounded-full brightness-125" 
                referrerPolicy="no-referrer"
              />
              <span className="text-2xl font-serif font-bold text-brand-gold tracking-tight">
                ShreeUtsav
              </span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400">
              Celebrating Traditions, Gifting Happiness. Your premium destination for traditional Indian gifts, curated hampers, and spiritual décor.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/shreeutsav__" target="_blank" className="p-2 bg-stone-800 rounded-full hover:bg-brand-gold hover:text-stone-900 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:shreeora7@gmail.com" className="p-2 bg-stone-800 rounded-full hover:bg-brand-gold hover:text-stone-900 transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:9919031626" className="p-2 bg-stone-800 rounded-full hover:bg-brand-gold hover:text-stone-900 transition-all">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-brand-gold font-serif text-lg mb-6 uppercase tracking-widest">Collections</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/category/Gifts" className="hover:text-brand-gold transition-colors">Gifts</Link></li>
              <li><Link to="/category/Hampers" className="hover:text-brand-gold transition-colors">Hampers</Link></li>
              <li><Link to="/category/Pooja Kits" className="hover:text-brand-gold transition-colors">Pooja Kits</Link></li>
              <li><Link to="/category/Traditional Décor" className="hover:text-brand-gold transition-colors">Traditional Décor</Link></li>
              <li><Link to="/category/Festive Collections" className="hover:text-brand-gold transition-colors">Festive Special</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-brand-gold font-serif text-lg mb-6 uppercase tracking-widest">Information</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/shipping" className="hover:text-brand-gold transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-brand-gold font-serif text-lg mb-6 uppercase tracking-widest">Get In Touch</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>+91 99190 31626</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold" />
                <span className="break-all">shreeora7@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-brand-gold" />
                <span>@shreeutsav__</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 uppercase tracking-widest font-medium">
          <p>© {currentYear} ShreeUtsav. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>Made with Love for Traditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 relative"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-brand-green text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">New</span>
        )}
        {product.isBestSeller && (
          <span className="bg-brand-gold text-stone-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Best Seller</span>
        )}
      </div>

      {/* Image */}
      <div 
        onClick={() => navigate(`/product/${product.id}`)}
        className="aspect-[4/5] overflow-hidden cursor-pointer bg-brand-cream/30"
      >
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-2">
        <div className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">{product.category}</div>
        <h3 
          onClick={() => navigate(`/product/${product.id}`)}
          className="font-serif font-bold text-stone-800 group-hover:text-brand-maroon transition-colors line-clamp-1 cursor-pointer"
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-brand-maroon font-serif font-bold text-lg">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-stone-400 line-through text-xs italic">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        
        <button 
          onClick={() => addToCart(product)}
          className="w-full py-2 bg-stone-900 text-brand-gold text-xs font-bold uppercase tracking-widest rounded hover:bg-brand-maroon transition-all flex items-center justify-center gap-2 group/btn"
        >
          <ShoppingBag className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
          Add To Cart
        </button>
      </div>
    </motion.div>
  );
}

export function CartDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-[100]" onClick={onClose} />
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-[101] shadow-2xl flex flex-col"
      >
        <div className="p-6 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-brand-maroon" />
            <h2 className="text-xl font-serif font-bold text-brand-maroon">Your Cart ({totalItems})</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-stone-300" />
              </div>
              <div>
                <p className="text-stone-500 font-medium">Your cart is empty</p>
                <button 
                  onClick={onClose}
                  className="mt-4 text-brand-maroon font-bold uppercase tracking-widest text-sm hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-20 h-20 bg-white rounded-lg overflow-hidden border border-stone-100 shrink-0 shadow-sm">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                  <div>
                    <h4 className="font-serif font-bold text-stone-800 line-clamp-1">{item.name}</h4>
                    <p className="text-brand-maroon font-bold text-sm">₹{item.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-stone-200 rounded overflow-hidden">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 px-2 hover:bg-stone-100 text-stone-500"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-bold tabular-nums text-stone-700">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 px-2 hover:bg-stone-100 text-stone-500"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-stone-400 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-stone-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-stone-500 font-medium uppercase tracking-widest text-sm">Subtotal</span>
              <span className="text-xl font-serif font-bold text-stone-800">₹{subtotal.toLocaleString()}</span>
            </div>
            <p className="text-xs text-stone-400 text-center italic">Shipping and taxes calculated at checkout</p>
            <button 
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
              className="w-full py-4 bg-brand-maroon text-brand-gold font-bold uppercase tracking-widest rounded-lg hover:bg-brand-maroon/90 shadow-lg shadow-brand-maroon/20 flex items-center justify-center gap-3 group"
            >
              Checkout Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
}
