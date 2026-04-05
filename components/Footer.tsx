import React from 'react';

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
      <div className="bg-[#642d3a] text-[#ffefcc] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          
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

          {/* 2. Contatti & Posizione */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-10">
            <div className="space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Contattaci</h4>
              <a 
                href="tel:3517688658" 
                className="text-3xl md:text-4xl font-black tracking-tighter hover:text-white transition-colors block"
              >
                351 768 8658
              </a>
            </div>
            <div className="space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Dove Siamo</h4>
              <p className="text-sm md:text-base font-bold leading-relaxed tracking-tight">
                Via Alcide Garagnani, 10,<br/> 
                41012 Carpi (MO)
              </p>
            </div>
          </div>

          {/* 3. Link Legali & Branding */}
          <div className="flex flex-col justify-between items-center md:items-end space-y-12 md:space-y-0">
            <div className="w-full md:w-auto">
              <a 
                href="/privacy" 
                className="block text-[10px] uppercase tracking-[0.2em] font-black border-2 border-[#ffefcc]/20 px-8 py-4 rounded-full text-center hover:bg-[#ffefcc] hover:text-[#642d3a] transition-all duration-300 active:scale-95"
              >
                Cookie & Privacy Policy
              </a>
            </div>
            
            <div className="text-center md:text-right">
               <p className="text-[11px] uppercase tracking-[0.5em] font-black opacity-30">
                 Madera <br className="md:hidden"/> Caffetteria
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* SEZIONE GRIGIO SCURO (COPYRIGHT) - #1a1a1a */}
      <div className="bg-[#1a1a1a] py-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#888888] text-[9px] md:text-[10px] leading-relaxed uppercase tracking-[0.3em] font-bold text-center">
            Copyright 2026 Madera Caffetteria & Cocktail Bar <br className="md:hidden"/> 
            Carpi (MO) Via L. A. Muratori, 47 CAP 41012 <br/>
            P.IVA 03831040369 - REA MO - 421443 - Powered by <span className="text-white hover:text-[#ffefcc] cursor-help transition-colors">Mago Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}