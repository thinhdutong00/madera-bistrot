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
      {/* SEZIONE BORDEAUX */}
      <div className="bg-[#642d3a] text-[#ffefcc] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Orari */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] border-b border-[#ffefcc]/20 pb-4">Orari di Apertura</h4>
            <ul className="space-y-2 text-sm font-medium opacity-90">
              {orari.map((item) => (
                <li key={item.giorno} className="flex justify-between border-b border-[#ffefcc]/5 py-1">
                  <span>{item.giorno}</span>
                  <span className="font-bold">{item.ore}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti & Posizione */}
          <div className="space-y-8 flex flex-col justify-center text-center md:text-left">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-60">Contattaci</h4>
              <a href="tel:3517688658" className="text-3xl md:text-4xl font-black tracking-tighter hover:opacity-70 transition-opacity">
                351 768 8658
              </a>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-2 opacity-60">Posizione</h4>
              <p className="text-sm font-medium leading-relaxed">
                Via Alcide Garagnani, 10,<br/> 41012 Carpi (MO)
              </p>
            </div>
          </div>

          {/* Link Utili */}
          <div className="flex flex-col justify-between items-center md:items-end">
            <div className="space-y-4 w-full md:w-auto">
              <a href="/privacy" className="block text-[10px] uppercase tracking-widest font-bold border border-[#ffefcc]/20 px-6 py-3 rounded-full text-center hover:bg-[#ffefcc] hover:text-[#642d3a] transition-all">
                Cookie & Privacy Policy
              </a>
            </div>
            <div className="mt-10 md:mt-0">
               <p className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40">Madera Caffetteria</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEZIONE GRIGIO SCURO (COPYRIGHT) */}
      <div className="bg-[#1a1a1a] py-8 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#888888] text-[9px] md:text-[10px] leading-relaxed uppercase tracking-widest font-medium">
            Copyright 2026 Madera Caffetteria & Cocktail Bar - Carpi (MO) Via L. A. Muratori, 47 CAP 41012 <br className="hidden md:block"/>
            P.IVA 03831040369 - REA MO - 421443 - Powered by <span className="text-white font-bold">Mago Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}