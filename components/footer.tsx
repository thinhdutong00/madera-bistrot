import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const orari = [
    { giorno: "Domenica", ore: "08–01" },
    { giorno: "Lunedì", ore: "07–01" },
    { giorno: "Martedì", ore: "07–01" },
    { giorno: "Mercoledì", ore: "07–01" },
    { giorno: "Giovedì", ore: "07–01" },
    { giorno: "Venerdì", ore: "07–03" },
    { giorno: "Sabato", ore: "07–03" },
  ];

  return (
    <footer className="w-full">
      {/* SEZIONE BORDEAUX - #642d3a */}
      <div className="bg-[#642d3a] text-[#ffefcc] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* 1. Orari di Apertura */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] border-b border-[#ffefcc]/20 pb-4">
              Orari di Apertura
            </h4>
            <ul className="space-y-3 text-[13px] font-medium opacity-90">
              {orari.map((item) => (
                <li key={item.giorno} className="flex justify-between border-b border-[#ffefcc]/5 pb-1">
                  <span className="opacity-70">{item.giorno}</span>
                  <span className="font-bold tracking-tighter">{item.ore}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Contatti & Posizione + IMMAGINE (Colonna Centrale) */}
          <div className="flex flex-row items-center justify-between gap-6">
            <div className="flex flex-col space-y-10 text-left">
              <div className="space-y-3">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Contattaci</h4>
                <a 
                  href="tel:3517688658" 
                  className="text-2xl md:text-3xl font-black tracking-tighter hover:text-white transition-colors block"
                >
                  351 768 8658
                </a>
              </div>
              <div className="space-y-3">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Dove Siamo</h4>
                <p className="text-sm font-bold leading-relaxed tracking-tight">
                  Via Alcide Garagnani, 10,<br/> 
                  41012 Carpi (MO)
                </p>
              </div>
            </div>

            {/* Immagine di fianco ai contatti */}
            <div className="relative flex-shrink-0 w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-2xl shadow-2xl border border-[#ffefcc]/10">
              <Image 
                src="/panini&croissant.jpg" 
                alt="Panini e Croissant Madera" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* 3. Branding (A destra, pulito) */}
          <div className="flex flex-col justify-center items-center md:items-end">
            <div className="text-center md:text-right">
               <p className="text-[11px] uppercase tracking-[0.5em] font-black opacity-30 leading-loose">
                 Madera <br className="hidden md:block"/> Caffetteria <br className="hidden md:block"/> & Bistrot
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* SEZIONE GRIGIO MEDIO-SCURO - #2a2a2a */}
      <div className="bg-[#2a2a2a] py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
          <div className="flex space-x-6 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-[#aaaaaa]">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="opacity-20">|</span>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>

          <p className="text-[#999999] text-[8px] md:text-[9px] leading-relaxed uppercase tracking-[0.2em] font-medium text-center max-w-3xl">
            Copyright 2026 Madera Caffetteria & Cocktail Bar - Carpi (MO) Via L. A. Muratori, 47 CAP 41012 <br className="hidden md:block"/>
            P.IVA 03831040369 - REA MO - 421443 - Powered by <span className="text-white/80 font-bold">Mago Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}