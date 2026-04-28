import { i } from "framer-motion/client";
import {  Mail, MapPin, Phone, } from "lucide-react";
import Link from "next/link";
import { SiFacebook, SiInstagram } from '@icons-pack/react-simple-icons';
export default function Footer() {

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Colonne Marque */}
          <div className="space-y-6">
            <img src="/logo/leelou.png" alt="Logo Leelou" className="w-32" />
            <p className="text-gray-500 leading-relaxed">
              La première marque camerounaise de nutrition infantile artisanale et saine.
            </p>
            <div className="flex gap-6">
                <a href="https://www.facebook.com/LeelouBabyFood" className="text-gray-400 hover:text-leelou transition-colors">
                    <SiFacebook size={20} />
                </a>
                <a href="https://www.instagram.com/naomimbakam" className="text-gray-400 hover:text-leelou transition-colors">
                    <SiInstagram size={20} />
                </a>
               
                </div>
          </div>

          {/* Colonne Liens */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="/products" className="hover:text-leelou">Nos Produits</Link></li>
              <li><Link href="/#process" className="hover:text-leelou">Production</Link></li>
              <li><Link href="/admin" className="hover:text-leelou">Espace Admin</Link></li>
            </ul>
          </div>

          {/* Colonne Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="flex gap-2"> <MapPin/> Bépanda, Douala, Cameroun</li>
              <li className="flex gap-2"><Phone/> +237 6 94 34 20 07</li>
              <li className="flex gap-2"><Mail/> contact@leelou-babyfood.shop</li>
            </ul>
          </div>

          {/* Colonne Newsletter / Récompense */}
          <div className="bg-leelou-cream p-8 rounded-[40px] space-y-4">
            <h4 className="font-serif text-xl text-gray-900 italic">"Une maman rassurée, un bébé en santé."</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Lauréat Trophée Sufawe 2025</p>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-10 flex flex-col md:row justify-between items-center gap-4 text-gray-400 text-xs">
          <p>© 2026 Leelou Baby Food. Conçu par Parfait kom.</p>
          <div className="flex gap-6">
            <span>Politique de confidentialité</span>
            <span>CGV</span>
          </div>
        </div>
      </div>
    </footer>
  );
}