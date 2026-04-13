"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  ChevronRight, 
  ArrowLeft,
  Coffee
} from 'lucide-react';

export default function ContattiPage() {
  // Utilizziamo il link fornito per l'integrazione della mappa
  const [mapUrl] = useState("https://maps.app.goo.gl/oGU83mh5zBuj4Sut8");
  const [isHoursOpen, setIsHoursOpen] = useState(true);

  const sede = { 
    n: 'Madera caffè & bistrot', 
    a: 'Via Alcide Garagnani, 10, 41012 Carpi MO',
    linkGoogle: "https://www.google.com/maps/place/Madera+caff%C3%A8+%26+bistrot/@44.7781656,10.8806783,17z/data=!4m15!1m8!3m7!1s0x477ff2cb150e2113:0x8dba234bd7cf8dc3!2sMadera+caff%C3%A8+%26+bistrot!8m2!3d44.7781656!4d10.8832532!10e2!16s%2Fg%2F11cs2419hx!3m5!1s0x477ff2cb150e2113:0x8dba234bd7cf8dc3!8m2!3d44.7781656!4d10.8832532!16s%2Fg%2F11cs2419hx?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* SPAZIATURA SUPERIORE */}
      <div className="w-full h-32 lg:h-48 bg-white flex items-end pb-8 px-6 md:px-12 lg:px-24">
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-[#642d3a] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-[#642d3a] font-black uppercase tracking-[0.3em] text-[10px]">Contatti</span>
        </nav>
      </div>

      <section id="dove-siamo" className="relative z-10 bg-white flex flex-col lg:flex-row min-h-[calc(100vh-12rem)] w-full overflow-hidden">
        
        {/* LATO TESTI E DETTAGLI */}
        <div className="lg:w-2/5 w-full p-6 md:p-16 lg:p-24 flex flex-col justify-center bg-gradient-to-br from-white to-[#ffefcc]/20 relative overflow-hidden">
          {/* Elemento decorativo di sfondo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#642d3a]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 w-full">
            <span className="text-[#642d3a] font-black text-xs uppercase tracking-[0.3em] mb-4 block">Vieni a trovarci</span>
            <h2 className="text-5xl md:text-8xl font-titoli italic text-[#642d3a] leading-[0.95] tracking-tighter mb-8">
              Il Nostro <br className="hidden md:block" /> 
              <span className="text-[#642d3a]/60">Locale.</span>
            </h2>
            <p className="text-slate-500 font-medium mb-12 max-w-sm">Dalla colazione all'aperitivo, ti aspettiamo nel cuore di Carpi.</p>
            
            <div className="space-y-4 w-full">
              {/* Card Indirizzo */}
              <a 
                href={sede.linkGoogle}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center gap-4 p-5 rounded-[2rem] transition-all duration-500 border bg-[#642d3a] text-white shadow-xl border-[#642d3a] hover:scale-[1.02]"
              >
                <div className="p-3 rounded-2xl shrink-0 bg-[#ffefcc] text-[#642d3a]">
                  <MapPin size={22} />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="font-black text-base leading-none mb-1 truncate">{sede.n}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest truncate text-[#ffefcc]">{sede.a}</p>
                </div>
              </a>
            </div>

            {/* FISARMONICA ORARI */}
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm w-full">
              <button 
                onClick={() => setIsHoursOpen(!isHoursOpen)}
                className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
                type="button"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#642d3a]/10 rounded-xl flex items-center justify-center text-[#642d3a]">
                    <Clock size={20} />
                  </div>
                  <span className="font-black text-[#642d3a] text-sm uppercase tracking-widest">Orari Madera</span>
                </div>
                <div className={`transition-transform duration-300 ${isHoursOpen ? 'rotate-180' : ''}`}>
                  <ChevronRight size={20} className="text-slate-400 rotate-90" />
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${isHoursOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-5 pt-0 space-y-3 border-t border-slate-50">
                  {[
                    { d: 'Lunedì', o: '07:00 – 01:00' },
                    { d: 'Martedì', o: '07:00 – 01:00' },
                    { d: 'Mercoledì', o: '07:00 – 01:00' },
                    { d: 'Giovedì', o: '07:00 – 01:00' },
                    { d: 'Venerdì', o: '07:00 – 03:00' },
                    { d: 'Sabato', o: '07:00 – 03:00' },
                    { d: 'Domenica', o: '08:00 – 01:00' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center gap-4">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter shrink-0">{item.d}</span>
                      <span className={`text-xs font-black ${item.o === 'Chiuso' ? 'text-red-400' : 'text-[#642d3a]'} text-right`}>{item.o}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#642d3a] font-bold transition-all text-sm uppercase tracking-widest">
                <ArrowLeft size={16} /> Home
              </Link>
              <div className="h-4 w-px bg-slate-200"></div>
              <span className="flex items-center gap-2 text-[#642d3a] font-black text-[10px] uppercase tracking-widest">
                <Coffee size={14} /> Break & Fun
              </span>
            </div>
          </div>
        </div>

        {/* LATO MAPPA - Pulito da filtri per massimizzare la compatibilità */}
        <div className="lg:w-3/5 w-full h-[500px] lg:h-auto min-h-[500px] relative bg-slate-100">
          <iframe 
            src={mapUrl} 
            title="Mappa Madera Bar"
            className="w-full h-full" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}