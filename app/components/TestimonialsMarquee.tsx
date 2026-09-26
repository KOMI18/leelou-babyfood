"use client";

import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Maman de Léo (8 mois)",
    text: "Maman comblée ! Les purées sont exactement comme à la maison. Mon bébé réclame son pot à la patate douce tous les jours, un vrai soulagement.",
    color: "bg-leelou text-white",
    starColor: "text-white",
    rotation: "-rotate-3",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 2,
    name: "Christelle T.",
    role: "Maman de Mia (14 mois)",
    text: "Enfin une vraie solution saine au Cameroun. J'utilise les packs pour la semaine et c'est un gain de temps incroyable. Surtout, c'est 100% naturel.",
    color: "bg-white text-gray-900 shadow-xl shadow-gray-200/50",
    starColor: "text-leelou",
    rotation: "rotate-2",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Amina B.",
    role: "Maman de Yanis (6 mois)",
    text: "Les bouillies lactées sont excellentes. Mon fils avait du mal avec la diversification, mais la texture veloutée de Leelou est passée toute seule !",
    color: "bg-leelou-soft text-gray-900 border border-leelou/10",
    starColor: "text-leelou",
    rotation: "-rotate-2",
    avatar: "https://i.pravatar.cc/150?img=43",
  },
  {
    id: 4,
    name: "Ndolo E.",
    role: "Maman de Kessy (11 mois)",
    text: "Le service client sur WhatsApp est top ! Elles m'ont conseillé le Pack Starter et c'est le meilleur investissement pour la santé de ma fille.",
    color: "bg-gray-900 text-white",
    starColor: "text-amber-400",
    rotation: "rotate-3",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 5,
    name: "Yvette P.",
    role: "Maman de Chloe (2 ans)",
    text: "Une vraie fierté de consommer local avec une qualité aussi premium. Les compotes mangue-ananas sont un véritable délice, même moi j'en pique !",
    color: "bg-amber-100 text-gray-900",
    starColor: "text-amber-500",
    rotation: "-rotate-3",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
];

export default function TestimonialsMarquee() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <style>{`
        @keyframes marquee-cards {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-cards {
          animation: marquee-cards 50s linear infinite;
        }
        .animate-marquee-cards:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="container mx-auto px-4 sm:px-6 mb-12 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Ce que les mamans en pensent
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Des milliers de parents au Cameroun font confiance à Leelou Baby Food pour l&apos;alimentation de leurs bébés.
        </p>
      </div>

      {/* Masques de dégradé pour adoucir les bords */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee-cards py-8 items-center cursor-grab active:cursor-grabbing">
        {[...Array(2)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex gap-6 sm:gap-8 px-3 sm:px-4 shrink-0">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className={`w-[320px] sm:w-[380px] shrink-0 p-8 rounded-[32px] flex flex-col justify-between gap-6 transition-transform hover:scale-105 duration-300 ${t.color} ${t.rotation}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className={`fill-current ${t.starColor}`} />
                    ))}
                  </div>
                  <div className="relative">
                    <Quote size={32} className="absolute -top-3 -left-2 opacity-10" />
                    <p className="text-sm sm:text-base font-medium leading-relaxed relative z-10">
                      &quot;{t.text}&quot;
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/20" />
                  <div>
                    <h4 className="font-bold text-sm leading-tight">{t.name}</h4>
                    <p className="text-xs opacity-80">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
