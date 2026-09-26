"use client";

import { motion } from "framer-motion";
import { Quote, ArrowLeft, MapPin } from "lucide-react";
import Link from "next/link";
import { WhatsAppIcon } from "@/app/components/Header";

export default function StoryPage() {
  return (
    <main className="pt-32 pb-20 bg-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-leelou transition-colors font-medium"
        >
          <ArrowLeft size={16} />
          <span>Retour à l&apos;accueil</span>
        </Link>
      </div>

      {/* 1. L'ÉTINCELLE (2019-2021) */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-leelou bg-leelou-soft px-4 py-1.5 rounded-full inline-block">
              Notre Genèse
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              D&apos;une cuisine de maman <br /> à une{" "}
              <span className="text-leelou">fierté nationale.</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              En 2019, Naomi Mbakam cherche le meilleur pour sa fille. Face aux rayons remplis de produits importés, ultra-transformés et ayant voyagé de longues semaines par voie maritime, une question s&apos;impose :
            </p>
            <div className="bg-leelou-soft p-6 sm:p-8 rounded-[32px] border-l-4 border-leelou relative">
              <Quote className="text-leelou opacity-30 mb-2" size={36} />
              <p className="text-xl sm:text-2xl font-medium italic text-gray-800 leading-snug">
                « Pourquoi nos bébés ne mangeraient-ils pas la mangue de Njombé ou le baobab du Nord, frais et sans chimie ? »
              </p>
            </div>
          </motion.div>

          <div className="relative">
            <div
              className="aspect-[3/4] bg-gray-100 overflow-hidden shadow-xl"
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            >
              <img
                src="/images/naomi.jpg"
                alt="Naomi Mbakam dans sa cuisine"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:left-2 bg-white p-5 rounded-3xl shadow-xl border border-gray-100 max-w-[220px]">
              <p className="text-xs font-bold text-leelou uppercase tracking-wider">Fait Maison</p>
              <p className="text-xs text-gray-600 mt-1">
                Les premières recettes ont été concoctées et testées pour sa propre fille.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. L'EXPERTISE : L'INGÉNIEURE DERRIÈRE LA MAMAN */}
      <section className="py-20 bg-gray-900 text-white rounded-[48px] mx-4 sm:mx-6 my-12">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div
              className="aspect-square bg-white/5 overflow-hidden border-2 border-gray-700"
              style={{ borderRadius: "77% 23% 76% 24% / 20% 84% 16% 80%" }}
            >
              <video
                src="/video/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              La rigueur au service de la douceur
            </h2>
            <p className="text-base text-gray-400 leading-relaxed">
              Naomi n&apos;est pas seulement une maman passionnée. Son bagage d&apos;ingénieure lui a permis de convertir une intuition familiale en un procédé artisanal rigoureusement contrôlé.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Optimisation des cuissons vapeur pour préserver les vitamines et minéraux.",
                "Tests stricts de conservation naturelle par pasteurisation douce (6 semaines au frais).",
                "Sourcing direct auprès des petits producteurs agricoles camerounais.",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-leelou flex items-center justify-center text-[10px] font-bold shrink-0">
                    ✓
                  </div>
                  <p className="text-gray-300 text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. L'IMPACT : PLUS QU'UNE MARQUE, UNE MISSION */}
      <section className="py-20 container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Une terre, une promesse.
          </h2>
          <p className="text-gray-600 text-base">
            Leelou soutient l&apos;agriculture durable et l&apos;économie locale au Cameroun.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              city: "Babadjou",
              produce: "Poires & Pommes Croquantes",
              text: "Sélectionnées dans les hauts plateaux de l'Ouest pour leur croquant naturel.",
              shape: "40% 60% 70% 30% / 40% 40% 60% 60%",
              img: "/images/poire-pomme.jpeg",
            },
            {
              city: "Foumbot",
              produce: "Légumes Maraîchers",
              text: "Le grenier maraîcher du Cameroun nous approvisionne chaque semaine en légumes frais.",
              shape: "70% 30% 30% 70% / 60% 70% 30% 40%",
              img: "/images/legume-fruit.jpeg",
            },
            {
              city: "Njombé",
              produce: "Mangues & Bananes Douces",
              text: "Le soleil généreux du Littoral apporte une saveur sucrée sans aucun sucre ajouté.",
              shape: "30% 70% 70% 30% / 30% 30% 70% 70%",
              img: "/images/mangue-banane.jpeg",
            },
          ].map((item, i) => (
            <div key={i} className="text-center space-y-4 bg-leelou-cream p-6 rounded-[32px] border border-gray-100">
              <div
                className="w-full aspect-square bg-leelou-soft overflow-hidden mx-auto shadow-md"
                style={{ borderRadius: item.shape }}
              >
                <img
                  src={item.img}
                  alt={item.produce}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-center gap-1 text-leelou text-xs font-bold uppercase tracking-wider">
                <MapPin size={14} />
                <span>{item.city}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{item.produce}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LA RÉCOMPENSE (SUFAWE) */}
      <section className="bg-leelou-soft/70 py-20 rounded-t-[60px]">
        <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-leelou bg-white px-4 py-1.5 rounded-full inline-block border border-leelou/15">
              Reconnaissance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Une vision couronnée par le Trophée SUFAWE 2025.
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              En 2025, Leelou Baby Food a reçu le prestigieux prix <strong>SUFAWE</strong> (Support for African Women Entrepreneurs). Cette distinction récompense l&apos;excellence agroalimentaire, l&apos;innovation saine et l&apos;impact direct auprès des familles africaines.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/#packs"
                className="btn-press bg-leelou hover:bg-leelou-dark text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-sm"
              >
                Découvrir nos Packs
              </Link>
              <a
                href="https://wa.me/237694342007?text=Bonjour,%20je%20souhaite%20%C3%A9changer%20avec%20l%27%C3%A9quipe%20Leelou%20Baby%20Food"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ea952] text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Nous contacter sur WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-10 sm:p-12 rounded-[48px] border border-leelou/10 shadow-xl text-center space-y-4">
            <div className="w-20 h-20 bg-leelou-soft text-leelou rounded-full flex items-center justify-center text-4xl mx-auto shadow-inner">
              🏆
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Lauréate SUFAWE 2025</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Prix d&apos;Excellence et d&apos;Innovation pour l&apos;Entreprenariat Féminin et la Sécurité Alimentaire Infantile au Cameroun.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}