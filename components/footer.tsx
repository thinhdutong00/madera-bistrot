"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const orari = [
    { giorno: "Lunedì", ore: "07–01" },
    { giorno: "Martedì", ore: "07–01" },
    { giorno: "Mercoledì", ore: "07–01" },
    { giorno: "Giovedì", ore: "07–01" },
    { giorno: "Venerdì", ore: "07–03" },
    { giorno: "Sabato", ore: "07–03" },
    { giorno: "Domenica", ore: "08–01" },
  ];

  const linkUtili = [
    { name: "Home", href: "/" },
    { name: "Chi Siamo", href: "/chi-siamo" },
    { name: "Il Menù", href: "/menu" },
    { name: "Apericena", href: "/menu/apericena" },
    { name: "Drink List", href: "/menu/drink" },
    { name: "Contatti", href: "/contatti" },
  ];

  return (
    <footer className="w-full">
      {/* SEZIONE PRINCIPALE BORDEAUX */}
      <div className="bg-[#313131] text-[#ffffff] pt-10 md:pt-12 pb-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr_1.5fr] gap-8 md:gap-12">
          
          {/* 1. ORARI */}
          <div className="space-y-4 md:space-y-5">
            {/* Colore aggiornato a #642d3a con opacity-50 */}
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] border-b border-[#ffefcc]/20 pb-2 text-[#642d3a] opacity-50">
              Orari di Apertura
            </h4>
            <ul className="space-y-1.5 md:space-y-2 text-[12px] font-medium">
              {orari.map((item) => (
                <li key={item.giorno} className="flex justify-between border-b border-[#ffffff]/5 pb-1">
                  <span className="opacity-60">{item.giorno}</span>
                  <span className="font-bold tracking-tighter">{item.ore}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. LINK UTILI */}
          <div className="space-y-4 md:space-y-5">
            {/* Colore aggiornato a #642d3a con opacity-50 */}
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] border-b border-[#ffffff]/20 pb-2 text-[#642d3a] opacity-50">
              Navigazione
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2 md:gap-y-3">
              {linkUtili.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-[12px] md:text-sm font-bold uppercase tracking-widest hover:pl-2 transition-all duration-300 block opacity-80 hover:opacity-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WRAPPER PER MOBILE / DESKTOP CONTATTI + BRANDING */}
          <div className="grid grid-cols-2 lg:grid-cols-2 lg:contents gap-4">
            
            {/* 3. CONTATTI & DOVE SIAMO */}
            <div className="space-y-6 md:space-y-8 lg:pl-4">
              <div className="space-y-1 md:space-y-2">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50 text-[#642d3a]">Contattaci</h4>
                <a href="tel:0597160409" className="text-lg md:text-2xl font-black tracking-tighter hover:text-white transition-colors block italic leading-none">
                  059 716 0409
                </a>
                <a href="tel:3517688658" className="text-lg md:text-2xl font-black tracking-tighter hover:text-white transition-colors block italic leading-none">
                  351 768 8658
                </a>
              </div>
              <div className="space-y-1 md:space-y-2">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50 text-[#642d3a]">Dove Siamo</h4>
                <p className="text-[11px] md:text-sm font-bold leading-tight uppercase tracking-tight">
                  Via Garagnani, 10,<br/> 
                  41012 Carpi (MO)
                </p>
              </div>
            </div>

            {/* 4. BRANDING & PULSANTE CHIAMATA */}
            <div className="flex flex-col items-start lg:items-end justify-between py-2 lg:mt-0">
               <div className="text-left lg:text-right mb-4 lg:mb-0 w-full">
                  <p className="text-2xl lg:text-4xl uppercase tracking-[0.1em] font-black leading-[0.8] italic">
                    Madera<br/>
                    <span className="text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] not-italic opacity-40 block mt-2">Caffetteria & Bistrot</span>
                  </p>
               </div>
               
               <a 
                 href="tel:0597160409" 
                 className="w-full lg:w-auto text-center bg-[#642d3a] text-[#ffffff] px-4 md:px-8 py-3 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] hover:bg-white hover:text-[#642d3a] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2"
               >
                 <span className="text-[14px]">📞</span> Chiama Ora
               </a>
            </div>

          </div>

        </div>
      </div>

      {/* SEZIONE COPYRIGHT - DARK */}
      <div className="bg-[#1a1a1a] py-4 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-2">
          <div className="flex flex-wrap justify-center gap-4 text-[9px] uppercase tracking-[0.2em] font-bold text-[#969696]">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="opacity-20">|</span>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
          <div className="text-[#969696] text-[8px] uppercase tracking-[0.15em] font-medium text-center">
            <p>© 2026 Madera Caffetteria & Cocktail Bar • P.IVA 03831040369 • Powered by Mago Digital</p>
          </div>
        </div>
      </div>
    </footer>
  );
}