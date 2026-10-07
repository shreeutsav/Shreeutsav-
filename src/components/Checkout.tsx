import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle, ShoppingBag, ArrowLeft, ArrowRight, Truck, CreditCard, User, MapPin } from "lucide-react";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { OrderDetails } from "../types";

export function CheckoutProcess() {
  const { cart, subtotal, shippingCharge, total, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<OrderDetails>({
    customerName: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      nextStep();
    } else {
      // Simulate order placement
      const orderId = Math.floor(100000 + Math.random() * 900000);
      navigate(`/order-confirmed?id=${orderId}`, { state: { formData, cart, total } });
      clearCart();
    }
  };

  if (cart.length === 0 && step !== 4) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <ShoppingBag className="w-16 h-16 text-stone-300 mb-6" />
        <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">Your cart is empty</h2>
        <button 
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-brand-maroon text-brand-gold font-bold uppercase tracking-widest rounded"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
          {[
            { id: 1, label: "Customer Details", icon: User },
            { id: 2, label: "Delivery Address", icon: MapPin },
            { id: 3, label: "Review & Payment", icon: CreditCard },
          ].map((s) => (
            <div 
              key={s.id}
              className={`flex items-center gap-3 shrink-0 px-4 py-2 rounded-full border transition-all ${step === s.id ? "bg-brand-maroon border-brand-maroon text-brand-gold shadow-lg" : step > s.id ? "bg-brand-green border-brand-green text-white" : "bg-white border-stone-200 text-stone-400"}`}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {step > s.id ? <CheckCircle className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">{s.label}</span>
              {s.id < 3 && <div className="w-8 h-px bg-current opacity-20" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-stone-100 space-y-8">
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-stone-800 border-b border-stone-100 pb-4">Customer Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Full Name</label>
                      <input 
                        required
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-brand-cream/50 border border-stone-200 rounded-lg focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon outline-none transition-all"
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Mobile Number</label>
                      <input 
                        required
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-brand-cream/50 border border-stone-200 rounded-lg focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon outline-none transition-all"
                        placeholder="e.g. 9919031626"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Email Address</label>
                      <input 
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-brand-cream/50 border border-stone-200 rounded-lg focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon outline-none transition-all"
                        placeholder="e.g. rahul@example.com"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-stone-800 border-b border-stone-100 pb-4">Delivery Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Full Address</label>
                      <textarea 
                        required
                        rows={3}
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-brand-cream/50 border border-stone-200 rounded-lg focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon outline-none transition-all"
                        placeholder="House No, Street, Landmark"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-500">City</label>
                      <input 
                        required
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-brand-cream/50 border border-stone-200 rounded-lg focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon outline-none transition-all"
                        placeholder="e.g. Mumbai"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-500">State</label>
                      <input 
                        required
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-brand-cream/50 border border-stone-200 rounded-lg focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon outline-none transition-all"
                        placeholder="e.g. Maharashtra"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Pincode</label>
                      <input 
                        required
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-brand-cream/50 border border-stone-200 rounded-lg focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon outline-none transition-all"
                        placeholder="e.g. 400001"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <h3 className="text-2xl font-serif font-bold text-stone-800 border-b border-stone-100 pb-4">Review & Payment</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-brand-cream/50 p-6 rounded-xl border border-stone-100">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-brand-maroon">Delivery To</h4>
                      <p className="text-stone-800 font-bold">{formData.customerName}</p>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        {formData.address}, {formData.city}, {formData.state} - {formData.pincode}
                      </p>
                      <p className="text-sm text-stone-600">{formData.mobile}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-brand-maroon">Payment Method</h4>
                      <div className="flex items-center gap-3 p-4 bg-white border border-brand-maroon rounded-lg">
                        <div className="w-10 h-10 bg-brand-maroon/10 rounded-full flex items-center justify-center">
                          <Truck className="w-5 h-5 text-brand-maroon" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-stone-800">Cash on Delivery</p>
                          <p className="text-xs text-stone-500">Pay securely at your doorstep</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-maroon/5 p-6 rounded-xl border border-brand-maroon/10 flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                    <div>
                      <p className="text-stone-800 font-bold mb-1">Guaranteed Satisfaction</p>
                      <p className="text-sm text-stone-600">Your order is protected by our return policy. We ensure premium quality for every traditional gift.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="pt-8 border-t border-stone-100 flex items-center justify-between">
                {step > 1 ? (
                  <button 
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 text-stone-500 font-bold uppercase tracking-widest text-sm hover:text-brand-maroon transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}
                <button 
                  type="submit"
                  className="px-10 py-4 bg-brand-maroon text-brand-gold font-bold uppercase tracking-widest rounded-lg hover:bg-brand-maroon/90 shadow-lg shadow-brand-maroon/20 flex items-center gap-3 group"
                >
                  {step === 3 ? "Place Order" : "Continue"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary Side */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 space-y-6 sticky top-24">
              <h3 className="text-lg font-serif font-bold text-stone-800 uppercase tracking-widest border-b border-stone-100 pb-4">Order Summary</h3>
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-brand-cream/50 rounded-lg overflow-hidden shrink-0">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-stone-800 line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-stone-500">Qty: {item.quantity}</p>
                      <p className="text-sm font-bold text-brand-maroon">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-stone-100">
                <div className="flex justify-between text-sm text-stone-600">
                  <span>Subtotal</span>
                  <span className="tabular-nums">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-stone-600">
                  <span>Delivery Charges</span>
                  <span className={`tabular-nums ${shippingCharge === 0 ? "text-brand-green font-bold" : ""}`}>
                    {shippingCharge === 0 ? "FREE" : `₹${shippingCharge.toLocaleString()}`}
                  </span>
                </div>
                {shippingCharge > 0 && (
                  <p className="text-[10px] text-brand-maroon bg-brand-maroon/5 p-2 rounded text-center">
                    Add ₹{(2999 - subtotal).toLocaleString()} more for FREE delivery!
                  </p>
                )}
                <div className="flex justify-between text-lg font-serif font-bold text-stone-900 pt-4 border-t border-stone-100">
                  <span>Total Amount</span>
                  <span className="tabular-nums">₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OrderConfirmed() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const orderId = searchParams.get("id");

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-brand-cream mandala-pattern">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100 text-center space-y-8"
      >
        <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10 text-brand-green" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900">Order Confirmed!</h1>
          <p className="text-stone-500 font-medium tracking-widest uppercase text-sm">Order ID: #{orderId}</p>
        </div>

        <div className="space-y-4">
          <p className="text-stone-600 leading-relaxed">
            Thank you for choosing <span className="text-brand-maroon font-bold">ShreeUtsav</span>. We are preparing your celebration with the utmost care. You will receive a confirmation email and SMS with tracking details shortly.
          </p>
          <div className="h-px w-24 bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button 
            onClick={() => navigate("/")}
            className="w-full py-4 bg-stone-900 text-brand-gold font-bold uppercase tracking-widest rounded-xl hover:bg-brand-maroon transition-all shadow-lg"
          >
            Continue Shopping
          </button>
          <button 
            className="w-full py-4 bg-white text-brand-maroon border border-brand-maroon font-bold uppercase tracking-widest rounded-xl hover:bg-brand-maroon hover:text-white transition-all"
          >
            Track Order
          </button>
        </div>
      </motion.div>
    </div>
  );
}
