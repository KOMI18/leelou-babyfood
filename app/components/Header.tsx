"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useCart } from "../store/useCart";
import { Menu, ShoppingCart, X } from "lucide-react";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  const total = useCart((state) => state.totalItems());
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <header className="fixed top-0 w-full z-[60] bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <img src="/logo/leelou.png" alt="Leelou Logo" className="h-12" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-600">
          <Link href="/" className="hover:text-leelou">Accueil</Link>
          <Link href="/products" className="hover:text-leelou">Boutique</Link>
          <Link href="/checkout" className="hover:text-leelou">Commande</Link>
          <Link href="/story" className="hover:text-leelou">Notre Histoire</Link>

        </nav>

        <div className="flex items-center gap-4">
          <Link href="/checkout" className="relative p-2">
            <ShoppingCart size={24} className="text-gray-700" />
            {total > 0 && (
              <span className="absolute top-0 right-0 bg-leelou text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {total}
              </span>
            )}
          </Link>
          
          {/* Burger Menu Mobile */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-medium">Accueil</Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className="text-xl font-medium">Boutique</Link>
            <Link href="/checkout" onClick={() => setIsOpen(false)} className="text-xl font-medium text-leelou">Mon Panier</Link>
            <Link href="/story" className="hover:text-leelou">Notre Histoire</Link>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </motion.header>
  );
}