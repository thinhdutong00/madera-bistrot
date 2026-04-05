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
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          
          {/* 1. Orari di Apertura */}
          <div className="w-full lg:w-auto min-w-[220px] space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] border-b border-[#ffefcc]/20 pb-2">
              Orari di Apertura
            </h4>
            <ul className="space-y-2 text-[12px] font-medium opacity-90">
              {orari.map((item) => (
                <li key={item.giorno} className="flex justify-between border-b border-[#ffefcc]/5 pb-1">
                  <span className="opacity-70">{item.giorno}</span>
                  <span className="font-bold tracking-tighter">{item.ore}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Contatti & Dove Siamo */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Contattaci</h4>
              <a href="tel:3517688658" className="text-2xl md:text-3xl font-black tracking-tighter hover:text-white transition-colors">
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

          {/* 3. Immagine - Dimensioni controllate per evitare buchi laterali */}
          <div className="relative w-full lg:w-[320px] h-[200px] overflow-hidden rounded-xl shadow-xl border border-[#ffefcc]/10">
            <Image 
              src="/barmadera.jpg" 
              alt="Interno Madera" 
              fill 
              className="object-cover"
            />
          </div>

          {/* 4. Branding Madera */}
          <div className="lg:text-right self-center lg:self-center">
             <p className="text-[24px] lg:text-[32px] uppercase tracking-[0.2em] font-black leading-[0.8] italic">
               Madera<br/>
               <span className="text-[12px] tracking-[0.6em] not-italic opacity-40 block mt-1">Caffetteria</span>
               <span className="text-[12px] tracking-[0.6em] not-italic opacity-40 block">& Bistrot</span>
             </p>
          </div>

        </div>
      </div>

      {/* SEZIONE GRIGIO SCURO */}
      <div className="bg-[#1a1a1a] py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
          <div className="flex space-x-6 text-[10px] uppercase tracking-[0.2em] font-bold text-[#666]">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="opacity-20">|</span>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
          <p className="text-[#444] text-[9px] uppercase tracking-[0.15em] font-medium text-center">
            Copyright 2026 Madera Caffetteria & Cocktail Bar - Carpi (MO) Via L. A. Muratori, 47 CAP 41012 <br/>
            P.IVA 03831040369 - Powered by <span className="text-[#666] font-bold">Mago Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}