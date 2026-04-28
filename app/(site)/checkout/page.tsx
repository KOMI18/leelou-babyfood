"use client";

import { useCart } from "@/app/store/useCart";
import { motion } from "framer-motion";
import { ChevronRight, ShoppingBag, MapPin, CreditCard } from "lucide-react";

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-[#fdf7f2] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#f0463c] mb-2">
            Étape finale
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-gray-900 leading-tight">
            Finaliser ma commande
          </h1>
        </motion.div>

        {/* ── Main grid: stacks on mobile, side-by-side on lg ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-start">

          {/* ─── LEFT: Forms (2/3 on lg) ─── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Delivery info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="bg-white rounded-[28px] sm:rounded-[36px] border border-gray-100 p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-[#fff0ef] flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#f0463c]" />
                </div>
                <span className="text-base sm:text-lg font-bold text-gray-900">
                  Informations de livraison
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="col-span-1 p-4 rounded-2xl bg-[#fdf7f2] text-sm text-gray-800
                             border border-transparent focus:border-[#f0463c] focus:outline-none
                             placeholder:text-gray-400 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Téléphone (WhatsApp)"
                  className="col-span-1 p-4 rounded-2xl bg-[#fdf7f2] text-sm text-gray-800
                             border border-transparent focus:border-[#f0463c] focus:outline-none
                             placeholder:text-gray-400 transition-colors"
                />
                <select
                  className="col-span-1 sm:col-span-2 p-4 rounded-2xl bg-[#fdf7f2] text-sm
                             text-gray-700 border border-transparent focus:border-[#f0463c]
                             focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option>Douala (Bépanda, Akwa, Bonamoussadi…)</option>
                  <option>Yaoundé</option>
                  <option>Autre ville</option>
                </select>
              </div>
            </motion.div>

            {/* Payment card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="bg-white rounded-[28px] sm:rounded-[36px] border border-gray-100 p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-[#fff0ef] flex items-center justify-center flex-shrink-0">
                  <CreditCard size={16} className="text-[#f0463c]" />
                </div>
                <span className="text-base sm:text-lg font-bold text-gray-900">
                  Mode de paiement
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <label className="flex-1 flex items-center gap-3 p-4 rounded-2xl border-2
                                  border-[#f0463c] bg-[#fff0ef] cursor-pointer">
                  <span className="w-4 h-4 rounded-full border-[3px] border-[#f0463c] flex-shrink-0" />
                  <span className="font-bold text-sm text-gray-800">
                    Mobile Money / Orange Money
                  </span>
                </label>
                <label className="flex-1 flex items-center gap-3 p-4 rounded-2xl border-2
                                  border-gray-200 bg-white cursor-pointer hover:border-gray-300
                                  transition-colors">
                  <span className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0" />
                  <span className="font-bold text-sm text-gray-500">
                    Paiement à la livraison
                  </span>
                </label>
              </div>
            </motion.div>
          </div>

          {/* ─── RIGHT: Order summary (sticky on lg) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="lg:sticky lg:top-28"
          >
            <div className="bg-gray-900 text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8">

              {/* Summary header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <ShoppingBag size={16} className="text-white" />
                </div>
                <h2 className="text-base sm:text-lg font-serif">Votre panier</h2>
              </div>

              {/* Items list */}
              <div className="space-y-4 mb-6 max-h-[260px] overflow-y-auto pr-1
                              scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
                {cart.length === 0 ? (
                  <p className="text-sm text-gray-400 text-center py-6">
                    Votre panier est vide
                  </p>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-start text-sm
                                 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex-1 min-w-0 pr-4">
                        <p className="font-bold truncate">{item.name}</p>
                        <p className="text-gray-400 text-xs mt-0.5">Qté : {item.qty}</p>
                      </div>
                      <p className="font-bold text-[#f0463c] flex-shrink-0">
                        {(item.price * item.qty).toLocaleString()} FCFA
                      </p>
                    </div>
                  ))
                )}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center text-base font-bold
                              border-t border-white/20 pt-5 mb-7">
                <span>Total</span>
                <span className="text-[#f0463c] text-lg">
                  {totalPrice().toLocaleString()} FCFA
                </span>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => alert("Simulation : Redirection vers le paiement...")}
                className="w-full bg-[#f0463c] hover:bg-[#d43c32] text-white
                           py-4 sm:py-5 rounded-full font-bold text-sm sm:text-base
                           flex items-center justify-center gap-2 transition-colors"
              >
                Payer maintenant
                <ChevronRight size={18} />
              </motion.button>

              {/* Trust line */}
              <p className="text-center text-xs text-gray-500 mt-4 leading-relaxed">
                Paiement 100% sécurisé · Livraison J+1 Douala
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}