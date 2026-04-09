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
      <div className="bg-[#642d3a] text-[#ffefcc] pt-16 pb-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* 1. ORARI */}
          <div className="space-y-5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] border-b border-[#ffefcc]/20 pb-2">
              Orari di Apertura
            </h4>
            <ul className="space-y-2 text-[12px] font-medium">
              {orari.map((item) => (
                <li key={item.giorno} className="flex justify-between border-b border-[#ffefcc]/5 pb-1">
                  <span className="opacity-60">{item.giorno}</span>
                  <span className="font-bold tracking-tighter">{item.ore}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. LINK UTILI */}
          <div className="space-y-5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] border-b border-[#ffefcc]/20 pb-2">
              Navigazione
            </h4>
            <ul className="space-y-3">
              {linkUtili.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm font-bold uppercase tracking-widest hover:pl-2 transition-all duration-300 block opacity-80 hover:opacity-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTATTI & DOVE SIAMO */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Contattaci</h4>
              <a href="tel:3517688658" className="text-2xl font-black tracking-tighter hover:text-white transition-colors block italic">
                351 768 8658
              </a>
            </div>
            <div className="space-y-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Dove Siamo</h4>
              <p className="text-sm font-bold leading-tight uppercase tracking-tight">
                Via Alcide Garagnani, 10,<br/> 
                41012 Carpi (MO)
              </p>
            </div>
          </div>

          {/* 4. BRANDING & ACTION */}
          <div className="flex flex-col items-start lg:items-end justify-between py-2">
             <div className="text-left lg:text-right mb-8 lg:mb-0">
                <p className="text-3xl lg:text-4xl uppercase tracking-[0.1em] font-black leading-[0.8] italic">
                  Madera<br/>
                  <span className="text-[10px] tracking-[0.5em] not-italic opacity-40 block mt-2">Caffetteria & Bistrot</span>
                </p>
             </div>
             
             <Link 
               href="/riserva-un-tavolo" 
               className="w-full lg:w-auto text-center bg-[#ffefcc] text-[#642d3a] px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl active:scale-95"
             >
               Riserva un tavolo
             </Link>
          </div>

        </div>
      </div>

      {/* SEZIONE COPYRIGHT - DARK (RISTRETTA) */}
      <div className="bg-[#1a1a1a] py-4 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-2">
          
          <div className="flex flex-wrap justify-center gap-4 text-[9px] uppercase tracking-[0.2em] font-bold text-[#555555]">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="opacity-20">|</span>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>

          <div className="text-[#333333] text-[8px] uppercase tracking-[0.15em] font-medium text-center">
            <p>
              © 2026 Madera Caffetteria & Cocktail Bar • P.IVA 03831040369 • Powered by <span className="text-[#555555]">Mago Digital</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}