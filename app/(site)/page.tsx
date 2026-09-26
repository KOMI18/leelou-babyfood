"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const StoreMap = dynamic(() => import("@/app/components/StoreMap"), { ssr: false });
import TestimonialsMarquee from "@/app/components/TestimonialsMarquee";
import {
  Sparkles,
  ShieldCheck,
  WheatOff,
  Sprout,
  HeartHandshake,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Phone,
  Store,
  Quote,
  Apple,
  Soup,
  Baby,
  Milk,
} from "lucide-react";
import { WhatsAppIcon } from "@/app/components/Header";
import ImmersiveBabySection from "@/app/components/ImmersiveBabySection";

/* =========================================================================
   1. DONNÉES STRUCTURÉES (MODIFIABLES FACILEMENT)
   ========================================================================= */

// Données des Packs et Offres principales
const PACKS_DATA = [
  {
    id: "pack-decouverte",
    title: "Pack Découverte",
    subtitle: "Pour ses premiers pas",
    price: "6 800 FCFA",
    unit: "",
    isPopular: false,
    badgeText: "Idéal Test",
    description:
      "Une petite sélection variée pour faire tester nos recettes à votre bébé avant d'en recommander.",
    bonus: "Livraison rapide sous 24h",
    features: [
      "Assortiment de petits pots mixés",
      "Purées mono-saveurs 100% locales",
      "Sans aucun conservateur chimique",
      "Adapté dès 6 mois",
    ],
    waMessage:
      "Bonjour Leelou Baby Food, je souhaite commander le Pack Découverte à 6 800 FCFA.",
    buttonStyle: "bg-leelou hover:bg-leelou-dark text-white",
  },
  {
    id: "pack-gouters",
    title: "Pack Goûters",
    subtitle: "Douceur fruitée",
    price: "8 900 FCFA",
    unit: "",
    isPopular: false,
    badgeText: "Vitaminé",
    description:
      "Un assortiment riche en vitamines. Parfait pour la pause de l'après-midi.",
    bonus: "100% Fruits de saison locaux",
    features: [
      "Compotes de fruits (mangue, ananas, papaye...)",
      "Yaourts brassés naturels pour bébés",
      "Méli-mélo gourmand sans sucre ajouté",
      "Conservation garantie au frais",
    ],
    waMessage:
      "Bonjour Leelou Baby Food, je souhaite commander le Pack Goûters à 8 900 FCFA.",
    buttonStyle: "bg-leelou hover:bg-leelou-dark text-white",
  },
  {
    id: "pack-midi",
    title: "Pack Midi",
    subtitle: "La semaine complète",
    price: "12 000 FCFA",
    unit: "",
    isPopular: false,
    badgeText: "En Promo",
    description:
      "7 petits pots déjeuners complets (au lieu de 12 600 FCFA) pour assurer les repas de toute la semaine.",
    bonus: "Protéines et légumes équilibrés",
    features: [
      "7 pots de déjeuners salés (Viande, Poulet, Poisson)",
      "Textures progressives (lisse, grumeleux, morceaux)",
      "Légumes et féculents du terroir camerounais",
      "Pasteurisation douce naturelle",
    ],
    waMessage:
      "Bonjour Leelou Baby Food, je souhaite commander le Pack Midi de 7 pots en promotion à 12 000 FCFA.",
    buttonStyle: "bg-leelou hover:bg-leelou-dark text-white",
  },
  {
    id: "pack-starter",
    title: "Pack Starter \"Mi'Idima\"",
    subtitle: "Le favori des mamans",
    price: "19 900 FCFA",
    unit: "",
    isPopular: true,
    badgeText: "Coup de Cœur",
    description:
      "Le combo parfait pour les premières cuillerées. L'incontournable pour démarrer la diversification.",
    bonus: "Personnalisation au prénom de bébé offerte !",
    features: [
      "18 petits pots assortis (fruits, légumes, déjeuners)",
      "1 Guide pédiatrique de diversification offert",
      "Étiquettes personnalisées au prénom de votre trésor",
      "Jusqu'à 6 semaines de conservation",
    ],
    waMessage:
      "Bonjour Leelou Baby Food, je souhaite commander le Pack Starter Mi'Idima à 19 900 FCFA avec personnalisation !",
    buttonStyle: "bg-gray-900 hover:bg-gray-800 text-white",
  }
];

// Chiffres clés de réassurance
const STATS_DATA = [
  { value: "+10 000", label: "Bébés nourris", sublabel: "avec le sourire au Cameroun" },
  { value: "+40", label: "Points de vente", sublabel: "supermarchés & magasins bio" },
  { value: "+30", label: "Pharmacies partenaires", sublabel: "référencé par les pédiatres" },
  { value: "7", label: "Régions desservies", sublabel: "livraison rapide et sécurisée" },
];

// Piliers de réassurance
const REASSURANCE_BADGES = [
  {
    icon: ShieldCheck,
    title: "Sans Conservateurs",
    description: "Conservation naturelle par pasteurisation douce à la vapeur.",
  },
  {
    icon: WheatOff,
    title: "Sans Gluten",
    description: "Céréales camerounaises naturellement digestes et saines.",
  },
  {
    icon: Sprout,
    title: "Enrichi au Soja",
    description: "Apport végétal naturel en protéines et acides aminés essentiels.",
  },
  {
    icon: HeartHandshake,
    title: "Ingrédients Locaux",
    description: "Récoltés en circuit direct à Babadjou, Foumbot et Njombé.",
  },
];

// Gammes de recettes artisanales (univers riche & évolutif)
const RECIPE_CATEGORIES = [
  {
    id: "compotes",
    name: "Compotes 100% Fruits de Saison",
    age: "Dès 6 mois",
    icon: Apple,
    summary:
      "Mangues de Njombé, Baobab sauvage, Corossol fondant, Poires & Pommes de Babadjou, Papayes, Bananes douces...",
    desc: "Cueillis à maturité parfaite sous le soleil camerounais. Zéro sucre ajouté, zéro eau ajoutée, 100% pur fruit gorgé de vitamines.",
    img: "/images/1.png",
    color: "bg-[#FFF4E0]",
  },
  {
    id: "dejeuners",
    name: "Déjeuners Mijotés & Petits Plats",
    age: "De 6 à 36 mois",
    icon: Soup,
    summary:
      "Légumes maraîchers de Foumbot (courges, carottes, épinards), patates douces, protéines animales fraîches et saines...",
    desc: "Textures adaptées à chaque étape de la diversification : velouté lisse pour les débuts, puis mouliné gourmand et petits morceaux fondants.",
    img: "/images/3.png",
    color: "bg-[#FFF9E5]",
  },
  {
    id: "bouillies",
    name: "Bouillies Céréalières Complètes",
    age: "Dès 6 mois",
    icon: Baby,
    summary:
      "Riz de terroir, maïs blanc sélectionné, sorgho nutritif et tapioca. Parfums chocolat pur, coco ou banane.",
    desc: "Naturellement sans gluten et riches en minéraux essentiels, nos farines et bouillies assurent une satiété douce et une excellente digestion.",
    img: "/images/2.png",
    color: "bg-[#FDF2F0]",
  },
  {
    id: "yaourts",
    name: "Yaourts Onctueux Fermiers",
    age: "Dès 8 mois",
    icon: Milk,
    summary:
      "Ferments lactiques doux, purée de mangue, baobab, gousses de vanille naturelle, pomme-poire...",
    desc: "L'allié idéal du microbiote de bébé. Une texture crémeuse pour le goûter ou le dessert, sans arômes artificiels.",
    img: "/images/4.png",
    color: "bg-[#F2F9FF]",
  },
];

// Points de Vente Physiques (Douala, Yaoundé et autres villes)
const STORES_DATA = [
  {
    name: "Pharmacie du Centre",
    city: "Douala",
    district: "Akwa",
    type: "Pharmacie",
    address: "Boulevard de la Liberté, face Direction Orange",
    phone: "+237 2 33 42 15 20",
    lat: 4.048,
    lng: 9.702,
  },
  {
    name: "Supermarché Carrefour Market",
    city: "Douala",
    district: "Douala Grand Mall & Bonamoussadi",
    type: "Supermarché",
    address: "Aéroport International & Boulevard de la République",
    phone: "+237 6 90 00 24 00",
    lat: 4.088,
    lng: 9.754,
  },
  {
    name: "Pharmacie de la Côte",
    city: "Douala",
    district: "Bonamoussadi",
    type: "Pharmacie",
    address: "Rond-point Maetur, Bonamoussadi",
    phone: "+237 2 33 47 88 12",
    lat: 4.095,
    lng: 9.760,
  },
  {
    name: "Spar Supermarché",
    city: "Douala",
    district: "Akwa & Bonabéri",
    type: "Supermarché",
    address: "Rue Pau, Akwa / Entrée Bocom Bonabéri",
    phone: "+237 6 94 00 11 22",
    lat: 4.072,
    lng: 9.670,
  },
  {
    name: "Pharmacie de Bastos",
    city: "Yaoundé",
    district: "Bastos",
    type: "Pharmacie",
    address: "Quartier Bastos, face Ambassade de Grèce",
    phone: "+237 2 22 20 30 40",
    lat: 3.882,
    lng: 11.511,
  },
  {
    name: "Super U Yaoundé",
    city: "Yaoundé",
    district: "Hippodrome",
    type: "Supermarché",
    address: "Avenue Monseigneur Vogt, Centre Commercial",
    phone: "+237 2 22 23 11 00",
    lat: 3.866,
    lng: 11.517,
  },
  {
    name: "Pharmacie Française",
    city: "Yaoundé",
    district: "Centre-ville",
    type: "Pharmacie",
    address: "Près de la Poste Centrale, Yaoundé",
    phone: "+237 2 22 22 05 18",
    lat: 3.865,
    lng: 11.516,
  },
  {
    name: "Santa Lucia Supermarché",
    city: "Yaoundé",
    district: "Mokolo & Ngousso",
    type: "Supermarché",
    address: "Carrefour Mokolo / Face Hôpital Général Ngousso",
    phone: "+237 6 98 12 34 56",
    lat: 3.868,
    lng: 11.498,
  },
  {
    name: "Pharmacies & Magasins Partenaires",
    city: "Autres villes & Régions",
    district: "Bafoussam, Kribi, Garoua...",
    type: "Pharmacie",
    address: "Points relais et livraison express dans les 7 régions",
    phone: "+237 6 94 34 20 07",
    lat: null,
    lng: null,
  },
  {
    name: "Réseau National & Expédition Express",
    city: "Autres villes & Régions",
    district: "Toutes villes du Cameroun",
    type: "Supermarché",
    address: "Envoi sécurisé en glacière isotherme sous 24h à 48h",
    phone: "+237 6 94 34 20 07",
    lat: null,
    lng: null,
  },
];

// Foire Aux Questions
const FAQ_DATA = [
  {
    question: "Comment conservez-vous les pots sans produits chimiques ?",
    answer:
      "Grâce à la pasteurisation (une méthode douce de conservation par la chaleur), nos pots se conservent au frigo pendant 6 semaines sans aucun ajout chimique ni conservateur de synthèse. Dès l'ouverture, nous recommandons de consommer le pot sous 48h.",
  },
  {
    question: "Vos produits contiennent-ils du gluten ?",
    answer:
      "Non, nos bouillies et repas sont préparés exclusivement à partir de céréales cultivées au Cameroun naturellement sans gluten (riz, maïs blanc sélectionné, sorgho, tapioca). Ils conviennent parfaitement aux ventres délicats des bébés.",
  },
  {
    question: "À partir de quel âge puis-je donner Leelou à mon bébé ?",
    answer:
      "Nos produits accompagnent l'éveil nutritionnel et la diversification alimentaire dès l'âge de 6 mois, et jusqu'à 36 mois. Nos textures sont rigoureusement adaptées : lisses pour démarrer, puis moulinées et petits morceaux fondants au fil des mois.",
  },
  {
    question: "Comment se déroule la commande et la livraison à domicile ?",
    answer:
      "C'est ultra-simple : cliquez sur n'importe quel bouton 'Commander via WhatsApp'. Notre équipe prend directement en charge votre commande et organise la livraison chez vous ou le retrait au point de vente le plus proche.",
  },
  {
    question: "Puis-je personnaliser les étiquettes pour le Pack Starter ?",
    answer:
      "Oui, absolument ! Le bonus personnalisation est offert dans le Pack Starter. Il vous suffit d'indiquer le prénom de votre bébé lors de votre échange WhatsApp, et nous apposons son prénom sur ses petits pots personnalisés.",
  },
];


/* =========================================================================
   2. COMPOSANT PRINCIPAL
   ========================================================================= */

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [storeFilter, setStoreFilter] = useState<string>("Tous");
  const [cityFilter, setCityFilter] = useState<string>("Tous");

  const filteredStores = STORES_DATA.filter((s) => {
    const matchType = storeFilter === "Tous" || s.type === storeFilter;
    const matchCity = cityFilter === "Tous" || s.city === cityFilter;
    return matchType && matchCity;
  });

  return (
    <main className="font-sans bg-leelou-cream text-gray-800 overflow-hidden">
      
      {/* ===================================================================
          A. SECTION HERO (Sans éléments flottants ni mini-titres)
          =================================================================== */}
      <section
        id="hero"
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:min-h-[85vh] flex items-center overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Colonne Texte */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-7 space-y-6 md:space-y-8"
            >
              {/* Titre principal */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.18] tracking-tight">
                Des p&apos;tits pots &amp; bouillies pour accompagner nos gourmets dans{" "}
                <span className="text-leelou relative inline-block">
                  l&apos;apprentissage du goût.
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-leelou/30 -z-10"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 9.5C80 2.5 220 2.5 297.5 9.5"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Sous-titre */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl font-normal">
                100% Camerounais, 100% Naturel, Sans Conservateurs. Conçus avec
                amour et rigueur pédiatrique pour les bébés de{" "}
                <strong className="text-gray-900 font-semibold">6 à 36 mois</strong>.
              </p>

              {/* CTAs principaux */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="#packs"
                  className="btn-press inline-flex items-center justify-center gap-2 bg-leelou hover:bg-leelou-dark text-white font-medium text-base px-8 py-4 rounded-full shadow-md shadow-leelou/20 transition-all text-center"
                >
                  <span>Découvrir nos Packs</span>
                </Link>

                <Link
                  href="#points-de-vente"
                  className="btn-press inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-medium text-base px-8 py-4 rounded-full border border-gray-200 shadow-xs transition-all text-center"
                >
                  <MapPin size={18} className="text-leelou" />
                  <span>Où nous trouver ?</span>
                </Link>
              </div>


            </motion.div>

            {/* Colonne Image Organique Pure (Sans aucun élément flottant) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-[420px] aspect-square rounded-[36%_64%_52%_48%_/_44%_48%_52%_56%] overflow-hidden border-8 border-white shadow-2xl bg-leelou-soft">
                <img
                  src="/images/baby-2.jpg"
                  alt="Bébé souriant savourant les repas Leelou Baby Food"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Décoration douce de fond */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-leelou/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* ===================================================================
          B. BANDEAU CHIFFRES CLÉS & RÉASSURANCE (MARQUEE)
          =================================================================== */}
      <section className="py-8 bg-white border-y border-gray-100 overflow-hidden relative">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Dégradés sur les bords pour l'effet de fondu */}
        <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8 shrink-0">
              {/* Chiffres Clés */}
              {STATS_DATA.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-leelou tracking-tight">
                    {stat.value}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900 leading-tight">
                      {stat.label}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {stat.sublabel}
                    </span>
                  </div>
                </div>
              ))}

              {/* Point pour séparer */}
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />

              {/* Badges de réassurance */}
              {REASSURANCE_BADGES.map((badge, idx) => (
                <div key={badge.title} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-leelou-cream flex items-center justify-center shrink-0">
                    <badge.icon size={20} className="text-leelou" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900 leading-tight">
                      {badge.title}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {badge.description}
                    </span>
                  </div>
                </div>
              ))}

              {/* Point final pour séparer de la boucle suivante */}
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================================
          C. LA SECTION "NOS PACKS & OFFRES" (LE COEUR DU SITE)
          =================================================================== */}
      <section id="packs" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6">
          
          {/* Header de section */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Des formules adaptées au rythme de chaque famille
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-normal">
              Commandez directement sur WhatsApp en un clic. Nos conseillères vous guident selon l&apos;âge et les besoins nutritionnels de votre bébé.
            </p>
          </div>

          {/* Grille des 4 Packs */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
            {PACKS_DATA.map((pack, idx) => (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.23, 1, 0.32, 1] }}
                className={`relative flex flex-col justify-between rounded-[36px] p-7 sm:p-8 bg-white border-2 ${
                  pack.isPopular
                    ? "border-leelou shadow-xl shadow-leelou/10 scale-100 lg:-translate-y-2"
                    : "border-gray-100 shadow-md"
                }`}
              >
                {/* Badge en haut */}
                {pack.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-leelou text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <span>{pack.badgeText}</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Titre & Sous-titre */}
                  <div>
                    {!pack.isPopular && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1 inline-block">
                        {pack.badgeText}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900">
                      {pack.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {pack.subtitle}
                    </p>
                  </div>

                  {/* Prix */}
                  <div className="py-2 border-y border-gray-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-gray-900">
                        {pack.price}
                      </span>
                      {pack.unit && (
                        <span className="text-xs font-medium text-gray-500">
                          {pack.unit}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {pack.description}
                  </p>

                  {/* Liste des Avantages */}
                  <ul className="space-y-2.5 pt-2">
                    {pack.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <span className="text-leelou font-black">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bouton d'action WhatsApp */}
                <div className="pt-8 mt-auto">
                  <a
                    href={`https://wa.me/237694342007?text=${encodeURIComponent(pack.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-press w-full py-4 px-5 rounded-full font-semibold text-sm flex items-center justify-center gap-2.5 shadow-sm transition-all text-center ${pack.buttonStyle}`}
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                    <span>Commander via WhatsApp</span>
                  </a>
                  <p className="text-[11px] text-center text-gray-400 mt-2">
                    Réponse immédiate de notre équipe
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMMERSIVE IMAGE 1 */}
      <ImmersiveBabySection 
        imageSrc="/images/baby-3.jpg" 
        title="Le goût des bonnes choses" 
        subtitle="Dès la première cuillère, un sourire qui ne trompe pas." 
      />

      {/* ===================================================================
          E. SECTION "OÙ NOUS TROUVER ?" (DIRECTEMENT EN DESSOUS DES PACKS)
          =================================================================== */}
      <section id="points-de-vente" className="py-24 bg-leelou-soft/60 border-t border-leelou/10">
        <div className="container mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Où trouver nos p&apos;tits pots ?
            </h2>
            {/* Phrase rassurante obligatoire */}
            <p className="text-base sm:text-lg text-gray-700 font-medium">
              Présent dans plus de 30 pharmacies et 40 supermarchés de référence pour la santé de votre bébé.
            </p>
            <p className="text-sm text-gray-500">
              Disponible à Douala, Yaoundé et dans nos points de vente partenaires à travers le Cameroun. Expédition express dans les 7 régions.
            </p>
          </div>

          {/* Filtres Type & Ville */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <div className="flex bg-white rounded-full p-1 border border-gray-200 shadow-xs">
              {["Tous", "Pharmacie", "Supermarché"].map((type) => (
                <button
                  key={type}
                  onClick={() => setStoreFilter(type)}
                  className={`btn-press px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    storeFilter === type
                      ? "bg-leelou text-white shadow-xs"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {type === "Tous" ? "Tous les lieux" : type + "s"}
                </button>
              ))}
            </div>

            <div className="flex bg-white rounded-full p-1 border border-gray-200 shadow-xs">
              {["Tous", "Douala", "Yaoundé", "Autres villes & Régions"].map((city) => (
                <button
                  key={city}
                  onClick={() => setCityFilter(city)}
                  className={`btn-press px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    cityFilter === city
                      ? "bg-gray-900 text-white shadow-xs"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {city === "Tous" ? "Toutes les zones" : city}
                </button>
              ))}
            </div>
          </div>

          {/* Layout Carte + Liste */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Carte interactive */}
            <div className="lg:col-span-7 h-[400px] lg:h-[600px] lg:sticky lg:top-24">
              <StoreMap stores={filteredStores} cityFilter={cityFilter} />
            </div>

            {/* Liste scrollable des magasins */}
            <div className="lg:col-span-5 flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2 pb-4">
              <AnimatePresence mode="popLayout">
                {filteredStores.map((store) => (
                  <motion.div
                    layout
                    key={store.name + store.district}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                            store.type === "Pharmacie"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          {store.type}
                        </span>
                        <span className="text-xs font-semibold text-gray-500">
                          {store.city}
                        </span>
                      </div>

                      <h4 className="font-bold text-gray-900 text-base leading-snug">
                        {store.name}
                      </h4>

                      <div className="space-y-1.5 text-xs text-gray-500">
                        <p className="flex items-start gap-1.5">
                          <MapPin size={14} className="text-leelou shrink-0 mt-0.5" />
                          <span>{store.address}</span>
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-50 flex items-center justify-between text-xs">
                      <span className="text-gray-400 font-medium">
                        {store.district}
                      </span>
                      <a
                        href={`tel:${store.phone}`}
                        className="text-leelou hover:underline font-semibold flex items-center gap-1"
                      >
                        <Phone size={12} />
                        <span>Appeler</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Bandeau d'assistance magasins */}
          <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="font-bold text-gray-900 text-lg">
                Vous recherchez le point de vente le plus proche de chez vous ?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Notre équipe vous oriente immédiatement vers la pharmacie ou le supermarché partenaire le plus proche, ou organise votre expédition.
              </p>
            </div>
            <a
              href="https://wa.me/237694342007?text=Bonjour,%20je%20cherche%20un%20point%20de%20vente%20ou%20une%20livraison%20dans%20ma%20ville"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ea952] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Demander sur WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {false && (
        <>
          {/* ===================================================================
              VARIÉTÉ DES RECETTES & SAVEURS (Richesse et diversité)
              =================================================================== */}
          <section id="recettes" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div className="space-y-3 max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                    Une infinité de recettes au rythme des saisons
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Chez Leelou, la carte ne se résume pas à quelques saveurs fixes : nos petits pots, déjeuners et bouillies évoluent constamment selon les récoltes des terroirs camerounais pour enrichir le palais de bébé.
                  </p>
                </div>

                <a
                  href="https://wa.me/237694342007?text=Bonjour,%20je%20souhaite%20d%C3%A9couvrir%20toutes%20les%20saveurs%20et%20recettes%20du%20moment%20Leelou%20Baby%20Food"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ea952] text-white font-medium text-sm px-6 py-3.5 rounded-full shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Découvrir la carte du moment</span>
                </a>
              </div>

              {/* Les 4 Grandes Familles Culinaires */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {RECIPE_CATEGORIES.map((cat, idx) => (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.23, 1, 0.32, 1] }}
                    className="bg-leelou-cream/60 rounded-[36px] p-8 border border-gray-100 flex flex-col sm:flex-row gap-6 items-center justify-between"
                  >
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white text-leelou flex items-center justify-center shadow-xs">
                          <cat.icon size={24} />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-leelou">{cat.age}</span>
                          <h3 className="font-bold text-xl text-gray-900">{cat.name}</h3>
                        </div>
                      </div>

                      <p className="text-xs text-gray-500 leading-relaxed font-medium">
                        {cat.summary}
                      </p>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>

                    <div className={`${cat.color} w-32 h-32 sm:w-40 sm:h-40 rounded-[28px] p-3 flex items-center justify-center shrink-0`}>
                      <img
                        src={cat.img}
                        alt={cat.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bandeau invitation WhatsApp pour la sélection personnalisée */}
              <div className="mt-12 bg-gradient-to-r from-leelou-soft via-white to-amber-50/40 p-8 sm:p-10 rounded-[36px] border border-leelou/15 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Envie de composer un assortiment sur-mesure ?
                  </h3>
                  <p className="text-sm text-gray-600 max-w-xl">
                    Partagez l&apos;âge et les préférences de votre trésor à nos conseillères sur WhatsApp. Nous préparons un panier frais adapté à son stade de diversification.
                  </p>
                </div>
                <a
                  href="https://wa.me/237694342007?text=Bonjour,%20je%20souhaite%20composer%20un%20assortiment%20sur-mesure%20pour%20mon%20b%C3%A9b%C3%A9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press shrink-0 bg-leelou hover:bg-leelou-dark text-white font-bold text-sm px-8 py-4 rounded-full shadow-sm flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Composer avec une conseillère</span>
                </a>
              </div>

            </div>
          </section>
        </>
      )}

      {/* ===================================================================
          PROCESSUS & QUALITÉ (PASTEURISATION DOUCE & VIDÉO)
          =================================================================== */}
      <section id="pourquoi-leelou" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Texte */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                De la plantation <br />
                <span className="text-leelou">à la petite cuillère.</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
                Pourquoi pasteuriser au lieu d&apos;utiliser des conservateurs ?
                Parce que la pasteurisation douce préserve les vitamines et la saveur pure du fruit, tout en assurant une sécurité bactériologique irréprochable pour bébé.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    step: "1. Sélection rigoureuse",
                    desc: "Fruits et légumes cueillis à maturité auprès de nos producteurs partenaires.",
                  },
                  {
                    step: "2. Cuisson vapeur douce",
                    desc: "Température maîtrisée pour sauvegarder le magnésium, le fer et la vitamine C.",
                  },
                  {
                    step: "3. Pasteurisation & Mise en pot stérile",
                    desc: "Zéro conservateur chimique. 6 semaines de fraîcheur naturelle au réfrigérateur.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-leelou text-white font-bold text-xs flex items-center justify-center shrink-0 mt-1">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{item.step}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vidéo de production */}
            <div className="lg:col-span-6">
              <div className="relative aspect-video rounded-[36px] overflow-hidden bg-gray-800 border-4 border-gray-700 shadow-2xl">
                <video
                  src="/video/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white/90 bg-gray-900/80 backdrop-blur-xs p-3 rounded-2xl flex items-center justify-between">
                  <span>Atelier Leelou Baby Food • Douala</span>
                  <span className="text-emerald-400 font-semibold">100% Hygiène Contrôlée</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================================
          STORYTELLING & TERROIRS CAMEROUNAIS
          =================================================================== */}
      <section id="histoire" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Portrait Naomi */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] max-w-[420px] mx-auto rounded-[32px] overflow-hidden shadow-xl">
                <img
                  src="/images/naomi.jpg"
                  alt="Naomi Mbakam, ingénieure et fondatrice de Leelou Baby Food"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 p-4 rounded-2xl bg-leelou-cream border border-gray-100 text-center max-w-[320px] mx-auto">
                <p className="text-sm font-bold text-gray-900">
                  Naomie Mbakam
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Ingénieure, maman &amp; Fondatrice de Leelou Baby Food • Lauréate Sufawe 2025
                </p>
              </div>
            </div>

            {/* Texte Histoire */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                D&apos;une cuisine de maman <br /> à une fierté nationale.
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                En 2019, face aux rayons saturés de petits pots industriels importés, ayant voyagé des semaines en mer avec force conservateurs, Naomi Mbakam se pose une question évidente :
              </p>
              
              <div className="bg-leelou-soft p-6 sm:p-8 rounded-[32px] border-l-4 border-leelou space-y-2">
                <Quote className="text-leelou opacity-40 mb-1" size={28} />
                <p className="text-lg sm:text-xl font-medium text-gray-900 italic">
                  « Pourquoi nos bébés ne grandiraient-ils pas avec les mangues de Njombé, les pommes de Babadjou et les légumes frais de notre terre, sains et sans chimie ? »
                </p>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                Alliant son expertise rigoureuse d&apos;ingénieure et son amour maternel, Naomi a mis au point des procédés de fabrication et de pasteurisation douce pour offrir le meilleur aux bébés africains.
              </p>
            </div>
          </div>



        </div>
      </section>

      {/* ===================================================================
          D. FOIRE AUX QUESTIONS (FAQ) - ACCORDÉON INTERACTIF
          =================================================================== */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Questions Fréquemment Posées
            </h2>
            <p className="text-base text-gray-600 font-normal">
              Tout ce que les mamans souhaitent savoir sur la conservation, la composition et l&apos;âge recommandé.
            </p>
          </div>

          {/* Accordéon interactif */}
          <div className="space-y-4">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-100 rounded-3xl overflow-hidden bg-leelou-cream/40 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-leelou transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg">{item.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-100"
                    >
                      <ChevronDown size={18} className="text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1] },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm text-gray-600 leading-relaxed border-t border-gray-100/60 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* IMMERSIVE IMAGE 2 */}
      <ImmersiveBabySection 
        imageSrc="/images/baby-5.jpg" 
        title="100% Naturel. 100% Fier." 
        subtitle="Parce que nos bébés méritent l'excellence de notre terroir." 
      />

      <TestimonialsMarquee />

      {/* ===================================================================
          CTA FINAL & RÉASSURANCE
          =================================================================== */}
      <section className="py-24 bg-leelou text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center space-y-8 relative z-10 max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            Prêt à réveiller les papilles de votre petit gourmet ?
          </h2>
          <p className="text-white/85 text-base sm:text-xl font-normal leading-relaxed">
            Commandez votre Pack Starter dès aujourd&apos;hui et offrez à votre enfant le meilleur des produits frais du Cameroun.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/237694342007?text=Bonjour,%20je%20souhaite%20commander%20un%20pack%20Leelou%20Baby%20Food"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-leelou hover:bg-gray-50 text-base font-bold px-9 py-4 rounded-full shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5 fill-leelou" />
              <span>Commander sur WhatsApp</span>
            </a>

            <Link
              href="#points-de-vente"
              className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-leelou-dark/40 hover:bg-leelou-dark/60 text-white text-base font-medium px-8 py-4 rounded-full border border-white/20"
            >
              <Store size={18} />
              <span>Trouver un magasin</span>
            </Link>
          </div>
        </div>

        {/* Décoration douce de fond */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* ===================================================================
          BOUTON FLOTTANT WHATSAPP (ACCESSIBILITÉ & CONVERSION MOBILE)
          =================================================================== */}
      <aside aria-label="Bouton de contact WhatsApp">
        <a
          href="https://wa.me/237694342007?text=Bonjour%20Leelou%20Baby%20Food%2C%20j%27aimerais%20des%20conseils%20sur%20les%20repas%20de%20mon%20b%C3%A9b%C3%A9"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#1ea952] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group transition-all"
          aria-label="Discuter avec Leelou sur WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 fill-white" />
          <span className="hidden md:inline font-semibold text-sm pr-1">
            Besoin d&apos;un conseil ?
          </span>
        </a>
      </aside>

    </main>
  );
}