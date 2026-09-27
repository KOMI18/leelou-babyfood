"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const IMAGES = [
  { src: "/images/baby-6.jpeg", colSpan: "col-span-12 md:col-span-8", rowSpan: "row-span-2" },
  { src: "/images/baby-7.jpg", colSpan: "col-span-6 md:col-span-4", rowSpan: "row-span-1" },
  { src: "/images/baby-8.jpeg", colSpan: "col-span-6 md:col-span-4", rowSpan: "row-span-1" },
  { src: "/images/baby-4.jpg", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1" },
  { src: "/images/baby-5.jpg", colSpan: "col-span-6 md:col-span-4", rowSpan: "row-span-1" },
  { src: "/images/baby-2.jpg", colSpan: "col-span-6 md:col-span-4", rowSpan: "row-span-1" },
  { src: "/images/baby-6.jpg", colSpan: "col-span-12 md:col-span-12", rowSpan: "row-span-1" },
];

export default function BentoGallery() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Des bébés heureux, des mamans sereines
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Chaque sourire est notre plus belle récompense. Nos petits gourmets grandissent avec l'énergie de notre terroir.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: idx * 0.08, // Stagger effect recommended by Emil
                ease: [0.23, 1, 0.32, 1], // Custom elegant curve
              }}
              className={`relative rounded-3xl overflow-hidden group ${img.colSpan} ${img.rowSpan} bg-gray-100 border border-gray-200/50 shadow-sm`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt="Bébé Leelou Baby Food"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay subtil au hover pour l'interactivité */}
              <div className="absolute inset-0 bg-leelou/0 group-hover:bg-leelou/10 transition-colors duration-300" />
              
              {/* Petit élément décoratif au survol (Ex: Étoiles) */}
              <div className="absolute top-4 right-4 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 delay-100">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                  <Star className="w-4 h-4 text-leelou fill-leelou" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
