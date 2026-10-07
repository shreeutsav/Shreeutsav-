import { motion } from "motion/react";
import { ArrowRight, Instagram, Play } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative h-[80vh] sm:h-[90vh] flex items-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hero_festive_traditional_1791343138378.jpg" 
          alt="Festive Traditional" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <img 
              src="/src/assets/images/shreeutsav_logo_1791342920873.jpg" 
              alt="Logo" 
              className="h-16 w-16 md:h-20 md:w-20 object-contain rounded-full shadow-2xl border-2 border-brand-gold"
              referrerPolicy="no-referrer"
            />
            <div className="h-0.5 w-12 bg-brand-gold" />
            <span className="text-brand-gold font-serif text-lg tracking-[0.2em] uppercase">Premium Gifting</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
            Celebrating <span className="text-brand-gold">Traditions</span>,<br />Gifting Happiness
          </h1>

          <p className="text-lg md:text-xl text-stone-200 font-medium max-w-lg leading-relaxed">
            Gifts • Hampers • Pooja Kits • Traditional Décor
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              to="/category/Gifts" 
              className="px-8 py-4 bg-brand-maroon text-brand-gold font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:text-brand-maroon transition-all shadow-xl shadow-brand-maroon/20 flex items-center gap-3 group"
            >
              Shop Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold uppercase tracking-widest rounded-lg hover:bg-white/20 transition-all flex items-center gap-3 group">
              Explore Collection
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 z-10 hidden lg:block">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20"
        >
          <Play className="w-6 h-6 text-brand-gold fill-brand-gold" />
        </motion.div>
      </div>
    </section>
  );
}

export function CategorySection() {
  const categories = [
    { name: "Gifts", icon: "🎁", image: "/src/assets/images/banner_festive_gifts_1791343099205.jpg" },
    { name: "Hampers", icon: "🎀", image: "/src/assets/images/category_hampers_1791342942628.jpg" },
    { name: "Pooja Kits", icon: "🪔", image: "/src/assets/images/category_pooja_kits_1791342953655.jpg" },
    { name: "Traditional Décor", icon: "🏡", image: "/src/assets/images/category_decor_1791342963753.jpg" },
    { name: "Festive Collections", icon: "🎉", image: "/src/assets/images/banner_traditional_decor_1791343124460.jpg" },
    { name: "Custom Hampers", icon: "💝", image: "/src/assets/images/product_custom_hamper_1791342974410.jpg" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="text-brand-maroon font-serif text-lg tracking-[0.2em] uppercase">Curated For You</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900">Explore Our Categories</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                <span className="text-4xl">{cat.icon}</span>
                <h3 className="text-2xl font-serif font-bold text-white tracking-tight">{cat.name}</h3>
                <Link 
                  to={`/category/${cat.name}`}
                  className="px-6 py-2 bg-brand-gold text-stone-900 text-xs font-bold uppercase tracking-widest rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section className="py-20 bg-brand-cream border-t border-stone-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 text-brand-maroon">
              <Instagram className="w-6 h-6" />
              <span className="font-serif text-lg tracking-[0.2em] uppercase">@shreeutsav__</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900">Follow Our Journey</h2>
          </div>
          <a 
            href="https://instagram.com/shreeutsav__" 
            target="_blank"
            className="px-8 py-4 bg-white text-stone-900 font-bold uppercase tracking-widest rounded-full hover:bg-brand-gold transition-all shadow-md flex items-center gap-3 group"
          >
            Follow Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-xl overflow-hidden shadow-sm relative group"
            >
              <img 
                src={idx === 1 ? "/src/assets/images/instagram_card_1_1791342986281.jpg" : "/src/assets/images/category_decor_1791342963753.jpg"} 
                alt={`Instagram post ${idx}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
