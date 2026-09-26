import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import { WhatsAppIcon } from "./Header";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-100 pt-16 pb-12 font-sans overflow-hidden">
      {/* Filigrane Logo */}
      <div className="absolute top-1/2 left-1/2 pointer-events-none opacity-10 -translate-x-1/2 -translate-y-1/2 grayscale z-0 flex items-center justify-center w-full h-full">
        <img src="/logo/leelou.png" alt="" className="w-[800px] md:w-[1200px] lg:w-[1500px] max-w-none object-contain" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-14">
          
          {/* Colonne Marque */}
          <div className="md:col-span-5 space-y-5">
            <Link href="#hero" className="inline-block">
              <img src="/logo/leelou.png" alt="Leelou Baby Food" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              La première marque camerounaise de repas et petits pots infantiles artisanaux, 100% naturels et sans aucun conservateur pour les gourmets de 6 à 36 mois.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/237694342007?text=Bonjour,%20je%20souhaite%20des%20renseignements%20sur%20Leelou%20Baby%20Food"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center btn-press"
                aria-label="Contacter sur WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
              </a>
              <a
                href="https://www.facebook.com/LeelouBabyFood"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors flex items-center justify-center btn-press"
                aria-label="Facebook"
              >
                <SiFacebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/naomimbakam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-[#E4405F] hover:text-white transition-colors flex items-center justify-center btn-press"
                aria-label="Instagram"
              >
                <SiInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Colonne Navigation Rapide */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-gray-900 mb-4 text-base">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><Link href="#packs" className="hover:text-leelou transition-colors">Nos Packs &amp; Offres</Link></li>
              <li><Link href="#points-de-vente" className="hover:text-leelou transition-colors">Points de Vente</Link></li>
              <li><Link href="#recettes" className="hover:text-leelou transition-colors">Nos Recettes</Link></li>
              <li><Link href="#pourquoi-leelou" className="hover:text-leelou transition-colors">Qualité &amp; Pasteurisation</Link></li>
              <li><Link href="#faq" className="hover:text-leelou transition-colors">Questions fréquentes (FAQ)</Link></li>
              <li><Link href="#histoire" className="hover:text-leelou transition-colors">Notre Histoire</Link></li>
            </ul>
          </div>

          {/* Colonne Contact & Réassurance */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-gray-900 mb-4 text-base">Service Parents</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-leelou shrink-0 mt-0.5" />
                <span>Atelier & Distribution : Bépanda, Douala, Cameroun</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-leelou shrink-0" />
                <a href="tel:+237694342007" className="hover:text-leelou transition-colors font-medium">
                  +237 6 94 34 20 07
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-leelou shrink-0" />
                <a href="mailto:contact@leelou-babyfood.shop" className="hover:text-leelou transition-colors">
                  contact@leelou-babyfood.shop
                </a>
              </li>
            </ul>


          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Leelou Baby Food. Tous droits réservés.</p>
          <p className="text-gray-400">
            Fait avec amour au Cameroun pour l&apos;éveil nutritionnel de bébé.
          </p>
        </div>
      </div>
    </footer>
  );
}