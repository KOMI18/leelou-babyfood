import { Ubuntu } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leelou-babyfood.vercel.app"),
  title: "Leelou Baby Food | Petits pots & bouillies artisanaux au Cameroun",
  description: "100% Camerounais, 100% Naturel, Sans Conservateurs. Des p'tits pots & bouillies pour accompagner nos gourmets de 6 à 36 mois dans l'apprentissage du goût.",
  icons: {
    icon: "/favicon.jpeg",
  },
  openGraph: {
    title: "Leelou Baby Food | Le meilleur de notre terre pour votre trésor",
    description: "Des repas et p'tits pots artisanaux sains et sans conservateurs pour bébés, faits au Cameroun.",
    url: "https://leelou-babyfood.vercel.app",
    siteName: "Leelou Baby Food",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${ubuntu.variable} scroll-smooth`}>
      <body className="font-sans bg-white text-gray-800 antialiased selection:bg-leelou/20 selection:text-leelou">
        {children}
      </body>
    </html>
  );
}