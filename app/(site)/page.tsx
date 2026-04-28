"use client";

import { motion } from "framer-motion";
import { BriefcaseMedical, DotIcon, MapPin } from "lucide-react";
import Link from "next/link";
import BenefitsSection from "@/app/components/BenefitSection";

export default function HomePage() {
  return (
    <main className="bg-leelou-cream overflow-hidden">
      {/* SECTION HERO */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="font-serif text-6xl md:text-8xl text-gray-900 leading-[1.1]">
              Le meilleur de <span className="text-leelou">notre terre</span> pour votre trésor.
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-sans">
              Des repas artisanaux, sains et sans additifs, conçus au Cameroun pour l'éveil nutritionnel de vos bébés.
            </p>
            <div className="flex gap-4">
              <Link href="/products" className="bg-leelou text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-leelou-dark transition-colors inline-block">
                Découvrir nos saveurs
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Forme irrégulière (Bulle organique) au lieu d'une box classique */}
            <div className="relative w-full aspect-square bg-leelou-soft rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden border-4 border-white">
                <img src="/images/baby-2.jpg" alt="Logo" className="w-full h-full " />
            </div>

          </motion.div>
        </div>

        {/* Décoration de fond sans ombre */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/50 -z-0 rounded-l-[200px]" />
      </section>

      {/* SECTION MOSAÏQUE ORGANIQUE */}
      <BenefitsSection/>
      {/* SECTION ENGAGEMENTS */}
      <section className="py-24 bg-leelou-cream">
        <div className="container mx-auto px-6 text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="font-serif text-4xl md:text-5xl text-gray-900"
          >
            Pourquoi les parents nous font confiance
          </motion.h2>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { title: "Qualité Pédiatrique", desc: "Recettes élaborées avec des nutritionnistes pour couvrir les besoins de bébé.", color: "bg-white" },
            { title: "Sourcing Local", desc: "Nous achetons directement chez nos agriculteurs à Babadjou, Foumbot et Kribi.", color: "bg-leelou-soft" },
            { title: "Fraîcheur Garantie", desc: "Zéro stock dormant. Nos petits pots sont produits pour être consommés frais.", color: "bg-white" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`${item.color} p-10 rounded-[40px] border border-gray-100 transition-all`}
            >
              <div className="w-12 h-12 bg-leelou rounded-2xl mb-6 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <h3 className="font-serif text-2xl mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* SECTION POINTS DE VENTE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-leelou-soft rounded-[60px] p-12 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-4xl text-gray-900 leading-tight">Retrouvez-nous près de <span className="text-leelou">chez vous</span></h2>
              <p className="text-lg text-gray-600">
                Nos produits sont disponibles dans plus de 100 points de vente dans 10 villes du Cameroun.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-leelou/10 flex items-center justify-center shrink-0"><MapPin size={20} /></div>
                  <div>
                    <p className="font-bold">Supermarchés</p>
                    {/* <p className="text-sm text-gray-500">Spar (Akwa/Bonamoussadi), Super U, Carrefour.</p> */}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-leelou/10 flex items-center justify-center shrink-0"><BriefcaseMedical size={20} /></div>
                  <div>
                    <p className="font-bold">Pharmacies</p>
                    {/* <p className="text-sm text-gray-500">Pharmacie du Centre, Pharmacie de la Côte.</p> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Illustration Map Organique */}
            <div className="relative h-[400px] bg-white rounded-[40px] border-4 border-white overflow-hidden rotate-2">
              {/* Ici on pourrait mettre une Map interactive ou une belle illustration stylisée de Douala/Yaoundé */}
              <div className="flex items-center justify-center h-full text-leelou/20 font-black text-6xl uppercase opacity-20">
                Carte <br/> Cameroun
              </div>
              {/* Points de repère */}
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }} className="absolute top-1/3 left-1/4 w-4 h-4 bg-leelou rounded-full" />
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, delay: 0.5 }} className="absolute top-2/3 right-1/3 w-4 h-4 bg-leelou rounded-full" />
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, delay: 1 }} className="absolute top-1/2 left-1/2 w-4 h-4 bg-leelou rounded-full" />
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, delay: 1.5 }} className="absolute top-1/2 right-1/2 w-4 h-4 bg-leelou rounded-full" />
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, delay: 2 }} className="absolute top-1/3 left-1/3 w-4 h-4 bg-leelou rounded-full" />
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, delay: 2.5 }} className="absolute top-2/3 right-2/3 w-4 h-4 bg-leelou rounded-full" />

              
              
            </div>
          </div>
        </div>
      </section>
      {/* SECTION PROCESSUS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-gray-900 rounded-[60px] p-12 md:p-20 text-white grid md:grid-cols-2 gap-12 items-center relative">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                De la plantation <br/> <span className="text-leelou">à la petite cuillère.</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Chaque ingrédient est rigoureusement sélectionné, lavé, pelé et mixé à basse température pour préserver toutes les vitamines essentielles.
              </p>
              <ul className="space-y-4 pt-4">
                {["Sélection rigoureuse", "Cuisson vapeur douce", "Mise en pot stérile"].map((step) => (
                  <li key={step} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-leelou rounded-full" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-3xl bg-gray-800 overflow-hidden">
              <div className="flex items-center justify-center h-full text-gray-500 italic">
               <video src="/video/video.mp4" autoPlay loop muted className="w-full h-full object-cover" />
               <div className="absolute top-0 left-0 w-full h-full bg-gray-900/40" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION TESTIMONIALS */}
      <section className="py-24 bg-leelou-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl text-gray-900">Ce que disent les mamans</h2>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="bg-white p-12 rounded-[50px] rounded-br-none relative border border-leelou/10"
            >
              <p className="text-2xl font-serif text-gray-700 italic">
                "Enfin une solution locale pour mon fils ! Il adore le yaourt mangue-baobab, et moi je suis rassurée par la composition."
              </p>
              <div className="mt-8">
                <p className="font-bold text-gray-900">Maman de Junior</p>
                <p className="text-leelou text-sm">Yaoundé, Cameroun</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* SECTION CTA FINAL */}
      <section className="py-24 bg-leelou">
        <div className="container mx-auto px-6 text-center space-y-8">
          <h2 className="font-serif text-5xl text-white">Prêt à réveiller les papilles de bébé ?</h2>
          <p className="text-white/80 text-xl max-w-xl mx-auto">
            Commandez vos packs de 7 saveurs dès aujourd'hui et faites-vous livrer à Douala ou Yaoundé.
          </p>
          <Link href="/products" className="inline-block bg-white text-leelou px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform">
            Voir le catalogue
          </Link>
        </div>
      </section>
    </main>
  );
}