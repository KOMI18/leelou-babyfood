"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ImmersiveBabySectionProps {
  imageSrc: string;
  title?: string;
  subtitle?: string;
}

export default function ImmersiveBabySection({ imageSrc, title, subtitle }: ImmersiveBabySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scale de 0.8 quand ça rentre, à 1.1 quand ça sort
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.1]);
  // Parallax Y subtil
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={containerRef} className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden rounded-[40px] my-16 mx-auto max-w-[96%] shadow-2xl">
      <motion.img
        style={{ scale, y }}
        src={imageSrc}
        alt="Bébé savourant Leelou"
        className="absolute inset-0 w-full h-full object-cover origin-center"
      />
      {title && (
        <>
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-xl max-w-4xl leading-tight"
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="mt-6 text-lg md:text-2xl text-white/90 drop-shadow-md font-medium max-w-2xl"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </>
      )}
    </section>
  );
}
