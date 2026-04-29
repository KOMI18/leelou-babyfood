"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function StoryPage() {
  return (
    <main className="pt-32 bg-white font-sans">
      
      {/* 1. L'ÉTINCELLE (2020-2021) */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* <span className="text-leelou font-black uppercase tracking-[0.3em] text-sm">Le Commencement</span> */}
            <h1 className="font-serif text-6xl text-gray-900 leading-tight">D'une cuisine <br/> à une <span className="text-leelou">révolution.</span></h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              En 2019, Naomi Mbakam cherche le meilleur pour sa fille. Face aux rayons remplis de produits importés, ultra-transformés et perdus dans de longs trajets maritimes, une question s'impose : 
            </p>
            <div className="bg-leelou-soft p-8 rounded-[40px] border-l-8 border-leelou relative">
              <Quote className="absolute -top-4 -left-4 text-leelou opacity-20" size={48} />
              <p className="text-2xl font-serif italic text-gray-800">
                "Pourquoi nos bébés ne mangeraient-ils pas la mangue de Njombé ou le baobab du Nord, frais et sans chimie ?"
              </p>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden shadow-none" style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}>
              <img src="/images/naomi.jpg" alt="Naomi dans sa cuisine" className="w-full h-full object-cover" />
            </div>
            {/* Petit badge flottant */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 max-w-[200px]">
              <p className="text-xs font-bold text-gray-400 uppercase">Fait Maison</p>
              <p className="text-sm font-medium">Les premières recettes ont été testées sur sa propre famille.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. L'EXPERTISE : L'INGÉNIEURE DERRIÈRE LA MAMAN */}
      <section className="py-24 bg-gray-900 text-white rounded-[60px] mx-6">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
             <div className="aspect-square bg-white/5 overflow-hidden" style={{ borderRadius: "77% 23% 76% 24% / 20% 84% 16% 80%" }}>
              <video src="/video/video.mp4" autoPlay loop muted className="w-full h-full object-cover" />
             </div>
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="font-serif text-5xl">La rigueur au service de la douceur</h2>
            <p className="text-lg text-gray-400">
              Naomi n'est pas seulement une maman passionnée. Son bagage d'ingénieure lui permet de transformer une intuition en un processus industriel rigoureux.
            </p>
            <div className="space-y-4 pt-4">
              {[
                "Optimisation des cuissons vapeur pour préserver les vitamines.",
                "Tests rigoureux de conservation naturelle sans additifs.",
                "Sourcing direct auprès des petits producteurs locaux."
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-leelou flex items-center justify-center text-[10px] font-bold">✓</div>
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. L'IMPACT : PLUS QU'UNE MARQUE, UNE MISSION */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-serif text-5xl text-gray-900">Une terre, une promesse.</h2>
          <p className="text-gray-500 text-lg">Leelou ne se contente pas de nourrir les bébés, elle soutient l'économie locale.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { 
              city: "Babadjou", 
              produce: "Poires & Pommes", 
              text: "Sélectionnées dans les hauts plateaux de l'Ouest pour leur croquant unique.",
              shape: "40% 60% 70% 30% / 40% 40% 60% 60%" ,
              img:"/images/poire-pomme.jpeg"
            },
            { 
              city: "Foumbot", 
              produce: "Légumes & Fruits", 
              text: "Le grenier du Cameroun nous fournit nos meilleurs ingrédients maraîchers.",
              shape: "70% 30% 30% 70% / 60% 70% 30% 40%" ,
              img:"/images/legume-fruit.jpeg"

            },
            { 
              city: "Njombé", 
              produce: "Mangues & Bananes", 
              text: "Le soleil du littoral offre une sucrosité naturelle sans ajout de sucre.",
              shape: "30% 70% 70% 30% / 30% 30% 70% 70%" ,
              img:"/images/mangue-banane.jpeg"

            }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-6">
              <div 
                className="w-full aspect-square bg-leelou-soft overflow-hidden mx-auto" 
                style={{ borderRadius: item.shape }}
              >
                <div className="w-full h-full flex items-center justify-center text-leelou/30 italic font-serif">
                 <img src={item.img} alt={item.produce} className='w-full h-full object-cover'/>
                </div>
              </div>
              <h4 className="text-2xl font-serif text-gray-900">{item.city}</h4>
              <p className="text-leelou font-bold text-sm tracking-widest uppercase">{item.produce}</p>
              <p className="text-gray-500 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LA RÉCOMPENSE (SUFAWE) */}
      <section className="bg-leelou-cream py-24 rounded-t-[100px]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-serif text-5xl text-gray-900 leading-tight">Une vision <br/> reconnue <span className="text-leelou">mondialement.</span></h2>
            <p className="text-lg text-gray-600">
              En 2025, le projet Leelou a été couronné par le prestigieux prix **SUFAWE** (Support for African Women Entrepreneurs). Cette distinction ne célèbre pas seulement un produit, mais l'impact d'une femme sur la sécurité alimentaire du continent.
            </p>
            <div className="w-32 h-1 bg-leelou rounded-full" />
          </div>
          <div className="bg-white p-12 rounded-[60px] border border-leelou/10 shadow-xl rotate-2">
             <div className="flex flex-col items-center text-center gap-6">
                <div className="w-20 h-20 bg-leelou rounded-full flex items-center justify-center text-white text-3xl font-black">🏆</div>
                <h4 className="text-2xl font-serif">Lauréate 2025</h4>
                <p className="text-gray-400 font-medium">Récompense de l'Excellence et de l'Innovation en Entrepreneuriat Féminin Africain.</p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}