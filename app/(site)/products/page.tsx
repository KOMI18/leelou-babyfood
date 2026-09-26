"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { WhatsAppIcon } from "@/app/components/Header";
import { ArrowLeft, Search, Sparkles } from "lucide-react";

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Compote Baobab Corossol",
    type: "Petit Pot",
    price: 2200,
    color: "bg-[#FFF4E0]",
    img: "/images/1.png",
    desc: "L'acidulé bienfaisant du baobab associé à la douceur réconfortante du corossol sauvage.",
  },
  {
    id: 2,
    name: "Trio Corossol Banane Mangue",
    type: "Petit Pot",
    price: 2200,
    color: "bg-[#FDF2F0]",
    img: "/images/2.png",
    desc: "Un mariage solaire gorgé de vitamines pour une explosion de douceur en bouche.",
  },
  {
    id: 3,
    name: "Méli-mélo de Fruits du Soleil",
    type: "Petit Pot",
    price: 2200,
    color: "bg-[#FFF9E5]",
    img: "/images/3.png",
    desc: "Cocktail onctueux de fruits tropicaux camerounais gorgés de nutriments essentiels.",
  },
  {
    id: 4,
    name: "Yaourt Mangue Vanille",
    type: "Yaourt",
    price: 2500,
    color: "bg-[#F2F9FF]",
    img: "/images/4.png",
    desc: "Ferments lactiques doux, purée de mangue de Njombé et vraie gousse de vanille.",
  },
  {
    id: 5,
    name: "Yaourt Mangue Baobab",
    type: "Yaourt",
    price: 2500,
    color: "bg-[#F5F5F5]",
    img: "/images/5.png",
    desc: "Équilibre délicat entre calcium, probiotiques bienfaiteurs et super-aliment baobab.",
  },
  {
    id: 6,
    name: "Yaourt Mangue Pomme",
    type: "Yaourt",
    price: 2500,
    color: "bg-[#F9F2FF]",
    img: "/images/6.png",
    desc: "Pommes fraîches des hauts plateaux de Babadjou et mangues douces de la côte.",
  },
  {
    id: 7,
    name: "Yaourt Pomme Poire",
    type: "Yaourt",
    price: 2500,
    color: "bg-[#EBF9F1]",
    img: "/images/7.png",
    desc: "Le grand classique de la diversification dans une texture crémeuse inimitable.",
  },
];

export default function ProductsPage() {
  const [filter, setFilter] = useState("Tous");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      const matchesFilter = filter === "Tous" || p.type === filter;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-leelou-cream font-sans">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* FIL D'ARIANE / RETOUR ACCUEIL */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-leelou transition-colors font-medium"
          >
            <ArrowLeft size={16} />
            <span>Retour à l&apos;accueil</span>
          </Link>
        </div>

        {/* HEADER DE LA PAGE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-leelou bg-leelou-soft px-4 py-1.5 rounded-full inline-block">
              Catalogue Artisanal
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Nos Saveurs Artisanales
            </h1>
            <p className="text-gray-600 font-normal max-w-lg text-sm sm:text-base">
              100% Camerounais, sans conservateurs ni sucre ajouté. Commandez directement vos pots favoris sur WhatsApp.
            </p>
          </div>

          {/* BARRE DE RECHERCHE & FILTRES */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une saveur..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:border-leelou outline-none bg-white text-sm"
              />
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            <div className="flex bg-white rounded-full p-1 border border-gray-200">
              {["Tous", "Petit Pot", "Yaourt"].map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`btn-press px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    filter === t
                      ? "bg-leelou text-white shadow-xs"
                      : "text-gray-600 hover:text-leelou"
                  }`}
                >
                  {t === "Tous" ? "Toutes saveurs" : t + "s"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* GRILLE DE PRODUITS */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white rounded-[32px] p-6 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  {/* Visuel Produit */}
                  <div
                    className={`${product.color} aspect-square rounded-[26px] mb-5 flex items-center justify-center p-4 relative overflow-hidden`}
                  >
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-700">
                      {product.type}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-gray-900 mb-1 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                    {product.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price.toLocaleString()} <span className="text-xs font-normal text-gray-500">FCFA</span>
                  </span>

                  <a
                    href={`https://wa.me/237694342007?text=${encodeURIComponent(
                      `Bonjour Leelou Baby Food, je souhaite commander : ${product.name} (${product.price} FCFA)`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press bg-[#25D366] hover:bg-[#1ea952] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-xs"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                    <span>Commander</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* SI AUCUN RÉSULTAT */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 mt-8">
            <p className="text-gray-500 text-base">
              Aucune saveur ne correspond à votre recherche &quot;{search}&quot;.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setFilter("Tous");
              }}
              className="mt-4 text-sm font-bold text-leelou hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* BANDEAU PACK STARTER RAPPEL */}
        <div className="mt-16 bg-gradient-to-r from-leelou-soft to-orange-50/60 p-8 sm:p-10 rounded-[36px] border border-leelou/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-leelou flex items-center justify-center md:justify-start gap-1">
              <Sparkles size={14} />
              Offre Recommandée
            </span>
            <h3 className="text-2xl font-bold text-gray-900">
              Découvrez le Pack Starter (18 pots personnalisés)
            </h3>
            <p className="text-sm text-gray-600 max-w-xl">
              Le combo complet à 19 900 FCFA avec guide de diversification et étiquettes personnalisées au prénom de bébé.
            </p>
          </div>
          <Link
            href="/#packs"
            className="btn-press shrink-0 bg-leelou hover:bg-leelou-dark text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-sm"
          >
            Découvrir le Pack Starter
          </Link>
        </div>

      </div>
    </div>
  );
}