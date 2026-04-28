import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit" 
});

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