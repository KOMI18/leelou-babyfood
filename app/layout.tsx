import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

import type { Metadata } from "next";
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit" 
});
export const metadata: Metadata = {
  title: "Leelou Baby food",
  description: "Le meilleur petit pot au Cameroun",
  icons: {
    icon: '/favicon.jpeg', 
  },
  openGraph: {
    title: "Leelou Baby food",
    description: "Le meilleur de notre terre pour votre trésor",
    url: "https://leelou-babyfood.vercel.app",
    siteName: "Leelou Baby food",
    images: [
      {
        url: "/favicon.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="font-sans bg-leelou-cream antialiased">
       <div className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <main className="flex-grow">
          {children}
        </main>
        {/* <Footer /> */}
    </div>
      </body>
    </html>
  );
}