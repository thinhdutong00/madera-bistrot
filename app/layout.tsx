import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google"; // Importiamo i due pesi
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

// Font per i titoli (quello che hai scelto)
const archivoBlack = Archivo_Black({
  weight: "400", // Archivo Black ha solo il peso 400 (che corrisponde al Black)
  variable: "--font-archivo-black",
  subsets: ["latin"],
});

// Font per il testo normale (opzionale, ma consigliato per coerenza)
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madera Caffè & Bistrot",
  description: "Caffetteria e Cocktail Bar a Carpi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full">
      <body className={`${archivoBlack.variable} ${archivo.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}