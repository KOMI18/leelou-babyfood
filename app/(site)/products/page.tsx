"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/app/store/useCart";
import { img } from "framer-motion/client";
// Liste des 7 saveurs avec catégories
const PRODUCTS_DATA = [
  { id: 1, name: "Compote Baobab Corossol", type: "Petit Pot", price: 2200, color: "bg-[#FFF4E0]" , img:"/images/1.png" },
  { id: 2, name: "Trio Corossol Banane Mangue", type: "Petit Pot", price: 2200, color: "bg-[#FDF2F0]"  , img:"/images/2.png"},
  { id: 3, name: "Méli-mélo de Fruits du Soleil", type: "Petit Pot", price: 2200, color: "bg-[#FFF9E5]" , img:"/images/3.png" },
  { id: 4, name: "Yaourt Mangue Vanille", type: "Yaourt", price: 2500, color: "bg-[#F2F9FF]"  , img:"/images/4.png"},
  { id: 5, name: "Yaourt Mangue Baobab", type: "Yaourt", price: 2500, color: "bg-[#F5F5F5]"  , img:"/images/5.png"},
  { id: 6, name: "Yaourt Mangue Pomme", type: "Yaourt", price: 2500, color: "bg-[#F9F2FF]"  , img:"/images/6.png"},
  { id: 7, name: "Yaourt Pomme Poire", type: "Yaourt", price: 2500, color: "bg-[#EBF9F1]"  , img:"/images/7.png"},
];

export default function ProductsPage() {
  const [filter, setFilter] = useState("Tous");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<{id: number, qty: number}[]>([]);
  const { addToCart } = useCart();
  // Logique de filtrage
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(p => {
      const matchesFilter = filter === "Tous" || p.type === filter;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  const addToCartLocal = (id: number) => {
    addToCart(PRODUCTS_DATA.find(p => p.id === id)!);
    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing){
        return prev.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item);
      } 
      return [...prev, { id, qty: 1 }];
    });
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-leelou-cream">
      <div className="container mx-auto px-6">
        
        {/* HEADER DE LA PAGE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <h1 className="font-serif text-5xl text-gray-900">Nos Saveurs</h1>
            <p className="text-gray-500 font-sans">Saines, locales et préparées avec amour.</p>
          </div>
          
          {/* BARRE DE RECHERCHE & FILTRES */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Rechercher une saveur..."
              className="px-6 py-3 rounded-full border border-gray-200 focus:border-leelou outline-none bg-white font-sans w-full sm:w-64"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex bg-white rounded-full p-1 border border-gray-100">
              {["Tous", "Petit Pot", "Yaourt"].map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === t ? "bg-leelou text-white" : "text-gray-500 hover:text-leelou"}`}
                >
                  {t === "Tous" ? "Tous" : t + "s"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* GRILLE DE PRODUITS */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-[40px] p-6 group border border-transparent hover:border-leelou-soft transition-all"
              >
                {/* Image Conteneur Asymétrique */}
                <div className={`${product.color} aspect-square rounded-[30px] rounded-tr-[80px] mb-6 flex items-center justify-center overflow-hidden relative`}>
                  <div className="text-gray-400 font-serif italic text-sm text-center px-4">
                   <img src={product.img} alt={product.name} className="w-full h-full object-contain" />
                  </div>
                  {/* Badge Type */}
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-700">
                    {product.type}
                  </div>
                </div>

                <h3 className="font-serif text-xl text-gray-900 mb-2 h-14 overflow-hidden leading-tight">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mt-6">
                  <span className="text-xl font-bold text-gray-900">{product.price.toLocaleString()} <span className="text-sm font-normal">FCFA</span></span>
                  <button 
                    onClick={() => addToCartLocal(product.id)}
                    className="bg-leelou text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* SI AUCUN RÉSULTAT */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 font-serif text-xl">Désolé, nous n'avons pas encore cette saveur...</p>
          </div>
        )}
      </div>

      {/* FLOAT PANIER POUR LA DÉMO */}
      {cart.length > 0 && (
        <motion.div 
          initial={{ y: 100 }} animate={{ y: 0 }}
          className="fixed bottom-10 right-10 bg-gray-900 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-6 z-50"
        >
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 uppercase font-bold tracking-widest">Votre Panier</span>
            <span className="font-bold">{cart.reduce((acc, curr) => acc + curr.qty, 0)} produits</span>
          </div>
          < Link href="/checkout" className="bg-leelou px-6 py-2 rounded-full font-bold text-sm">
            Commander
          </Link>
        </motion.div>
      )}
    </div>
  );
}