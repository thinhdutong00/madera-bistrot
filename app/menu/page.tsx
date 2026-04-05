import React from 'react';
import Image from 'next/image';

export default function BarCaffetteria() {
  return (
    <section id="colazione" className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-[#ffefcc]">
      <div>
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 italic text-[#642d3a]">
          Bar Caffetteria
        </h2>
        
        {/* LISTA CAFFETTERIA */}
        <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
          <MenuItem label="Caffè" price="1,30€" />
          <MenuItem label="Caffè Deca" price="1,50€" />
          <MenuItem label="Caffè Corretto" price="2,00€" />
          <MenuItem label="Cappuccino" price="1,50€" />
          <MenuItem label="Cappuccino Deca" price="2,00€" />
          <MenuItem label="Caffè Marocchino" price="1,80€" />
          <MenuItem label="Cappuccino di Soia" price="2,00€" />
          <MenuItem label="Latte Macchiato" price="2,00€" />
          <MenuItem label="Macchiatone" price="1,50€" />
          <MenuItem label="Ginseng Piccolo" price="1,50€" />
          <MenuItem label="Ginseng Grande" price="1,80€" />
          <MenuItem label="Spremuta Arancia" price="4,50€" />
          <MenuItem label="Orzo Piccolo" price="1,30€" />
          <MenuItem label="Orzo Grande" price="1,50€" />
          <MenuItem label="Caffè Shakerato" price="3,50€" />
          <MenuItem label="Succhi di Frutta" price="3,50€" />
          <MenuItem label="Acqua Naturale/Frizzante 1/2 L" price="1,00€" />
          <MenuItem label="Bicchiere di Acqua" price="0,50€" />
          <MenuItem label="Thè Caldo" price="3,50€" />
          <MenuItem label="Tisana" price="5,00€" />
          <MenuItem label="Cioccolata Calda" price="5,00€" />
          <MenuItem label="Cioccolata Calda con Panna" price="6,50€" />
          <MenuItem label="Bibite in Bottiglia" price="4,00€" />
          <MenuItem label="Red Bull / Crodino / Bitter" price="3,50€" />
          <MenuItem label="Amari" price="4,00€" />
          <MenuItem label="Grappe" price="5,00€" />
        </div>

        {/* SOTTOSEZIONE FOOD */}
        <div className="mt-16">
          <h3 className="text-2xl font-black uppercase mb-2 italic text-[#642d3a]">Food</h3>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-6 text-[#642d3a]">
            (A seconda della disponibilità)
          </p>
          <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
            <MenuItem label="Brioches" price="1,50€" />
            <MenuItem label="Brioches Piccola" price="1,00€" />
            <MenuItem label="Biscottoni al Cioccolato" price="1,50€" />
            <MenuItem label="Fetta di Torta" price="3,00€" />
          </div>
        </div>
      </div>

      {/* IMMAGINE LATERALE */}
      <div className="sticky top-24">
        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.01]">
          <Image 
            src="/barmadera.jpg" 
            alt="Caffè e Specialità Madera" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#642d3a]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

// Componente per le singole voci del menu
function MenuItem({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex justify-between items-end group py-1">
      <span className="font-bold uppercase tracking-wide text-sm text-[#642d3a] group-hover:translate-x-1 transition-transform">
        {label}
      </span>
      <div className="flex-grow mx-4 border-b border-[#642d3a]/10 mb-1" />
      <span className="font-black italic text-lg text-[#642d3a]">
        {price}
      </span>
    </div>
  );
}