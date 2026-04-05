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
      <div className="bg-[#642d3a] text-[#ffefcc] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
          
          {/* 1. Orari */}
          <div className="w-full lg:w-auto min-w-fit space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] border-b border-[#ffefcc]/20 pb-2">
              Orari di Apertura
            </h4>
            <ul className="space-y-1.5 text-[12px] font-medium opacity-90">
              {orari.map((item) => (
                <li key={item.giorno} className="flex justify-between gap-8 border-b border-[#ffefcc]/5 pb-1">
                  <span className="opacity-70">{item.giorno}</span>
                  <span className="font-bold tracking-tighter">{item.ore}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Contatti & Dove Siamo */}
          <div className="flex flex-col space-y-6 lg:mx-4">
            <div className="space-y-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Contattaci</h4>
              <a href="tel:3517688658" className="text-2xl font-black tracking-tighter hover:text-white transition-colors block">
                351 768 8658
              </a>
            </div>
            <div className="space-y-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Dove Siamo</h4>
              <p className="text-sm font-bold leading-tight">
                Via Alcide Garagnani, 10,<br/> 
                41012 Carpi (MO)
              </p>
            </div>
          </div>

          {/* 3. Immagine */}
          <div className="relative w-full max-w-[340px] aspect-[16/10] overflow-hidden rounded-xl shadow-2xl border border-[#ffefcc]/10">
            <Image 
              src="/barmadera.jpg" 
              alt="Interno Madera" 
              fill 
              className="object-cover"
            />
          </div>

          {/* 4. Branding + Pulsante Riserva */}
          <div className="flex flex-col items-center lg:items-end gap-6 min-w-fit">
             <div className="text-center lg:text-right">
                <p className="text-[22px] lg:text-[26px] uppercase tracking-[0.2em] font-black leading-[0.9] italic">
                  Madera<br/>
                  <span className="text-[11px] tracking-[0.4em] not-italic opacity-40 block mt-1">Caffetteria</span>
                  <span className="text-[11px] tracking-[0.4em] not-italic opacity-40 block">& Bistrot</span>
                </p>
             </div>
             
             <Link 
               href="/riserva-un-tavolo" 
               className="bg-[#ffefcc] text-[#642d3a] px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-lg active:scale-95"
             >
               Riserva un tavolo
             </Link>
          </div>

        </div>
      </div>

      {/* SEZIONE GRIGIO MEDIO-SCURO */}
      <div className="bg-[#2a2a2a] py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
          <div className="flex space-x-6 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-[#aaaaaa]">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="opacity-20">|</span>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
          <p className="text-[#999999] text-[8px] md:text-[9px] leading-relaxed uppercase tracking-[0.2em] font-medium text-center">
            Copyright 2026 Madera Caffetteria & Cocktail Bar - Carpi (MO) Via L. A. Muratori, 47 CAP 41012 <br/>
            P.IVA 03831040369 - REA MO - 421443 - Powered by <span className="text-white/80 font-bold">Mago Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}