"use client";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* CÔTÉ GAUCHE : LES MÉRITES & STATS */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="font-serif text-5xl md:text-6xl text-gray-900 leading-tight">
              Bien plus qu'un <br /> <span className="text-leelou italic">simple petit pot.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-sans max-w-lg">
              Nous avons repensé l'alimentation infantile au Cameroun en alliant rigueur scientifique et saveurs de nos grand-mères.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: "Bébés épanouis", val: "5000+", desc: "Accompagnés dans leur éveil." },
              { label: "Ingrédients", val: "100%", desc: "Naturels et sans additifs." },
              { label: "Circuit court", val: "24h", desc: "Entre la récolte et la mise en pot." },
              { label: "Super marché", val: "100+", desc: "À Douala et Yaoundé." }
            ].map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="space-y-2 border-l-2 border-leelou-soft pl-6"
              >
                <h4 className="text-4xl font-black text-gray-900 font-sans">{stat.val}</h4>
                <p className="font-bold text-leelou uppercase tracking-widest text-xs">{stat.label}</p>
                <p className="text-sm text-gray-400">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CÔTÉ DROIT : MOSAÏQUE PINTEREST (FORMES TRÈS IRRÉGULIÈRES) */}
        <div className="grid grid-cols-2 gap-4 relative">
          
          {/* IMAGE 1 : BLOB VERTICAL */}
          <motion.div 
            whileHover={{ scale: 1.02, rotate: -2 }}
            className="w-full aspect-[3/4] bg-leelou-soft overflow-hidden"
            style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
          >
            {/* <div className="w-full h-full flex items-center justify-center text-gray-400 italic"> */}
              <img src='/images/baby.jpg' className="w-full h-full" />
            {/* </div> */}
          </motion.div>

          {/* IMAGE 2 : LE ROND ÉTIRÉ (PLUS HAUT) */}
          <motion.div 
            whileHover={{ scale: 1.02, rotate: 2 }}
            className="w-full aspect-square bg-gray-100 mt-12 overflow-hidden"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          >
            <img src='/images/baby-4.jpg' className="w-full h-full" />

          </motion.div>

          {/* IMAGE 3 : LA GOUTTE HORIZONTALE */}
          <motion.div 
            whileHover={{ scale: 1.02, rotate: -3 }}
            className="w-full aspect-square bg-leelou overflow-hidden mt-12"
            style={{ borderRadius: "40% 60% 56% 24% / 20% 84% 16% 80%" }}
          >
             <img src='/images/baby-5.jpg' className="w-full h-full" />

          </motion.div>

          {/* IMAGE 4 : LE BLOB FINAL */}
          <motion.div 
            whileHover={{ scale: 1.02, rotate: -3 }}
            className="w-full aspect-[3/4] bg-leelou-cream border border-leelou-soft overflow-hidden"
            style={{ borderRadius: "77% 23% 76% 24% / 20% 84% 16% 80%" }}
          >
          <img src='/images/baby-3.jpg' className="w-full h-full" />

          </motion.div>

         
        </div>

      </div>
    </section>
  );
}