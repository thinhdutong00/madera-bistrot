import React from 'react';
import Image from 'next/image';

export default function BarCaffetteria() {
  return (
    <section id="colazione" className="pt-32 pb-20 px-6 w-full bg-white">
      {/* Container Titolo */}
      <div className="max-w-[1400px] mx-auto mb-16">
        <h2 className="text-4xl font-black uppercase tracking-tighter italic text-[#642d3a]">
          Bar Caffetteria
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* COLONNA SINISTRA: CAFFETTERIA & DOLCI */}
        <div className="flex flex-col">
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

          <div className="mt-12">
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

        {/* COLONNA DESTRA: IMMAGINE DINAMICA & SALATI */}
        <div className="flex flex-col h-full">
          {/* L'immagine ora cresce per riempire il vuoto senza deformarsi */}
          <div className="relative flex-grow min-h-[400px] mb-12 rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/barmadera.jpg" 
              alt="Atmosfera Madera" 
              fill 
              className="object-cover"
              priority
            />
          </div>

          {/* Lista Salati */}
          <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
            <MenuItem label="Erbazzone" price="2,50€" />
            <MenuItem label="Toast" price="3,50€" />
            <MenuItem label="Pizza" price="2,80€" />
            <MenuItem label="Piadina" price="5,00€" />
            <MenuItem label="Tramezzino" price="3,50€" />
            <MenuItem label="Panino Grande Farcito" price="3,00€" />
            <MenuItem label="Panino Medio Farcito" price="2,50€" />
            <MenuItem label="Panino Piccolo Farcito" price="2,00€" />
            <MenuItem label="Panino Semidolce" price="2,00€" />
            <MenuItem label="Gnocco Farcito" price="3,00€" />
            <MenuItem label="Filoncino Farcito Integrale ai Cereali" price="4,00€" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuItem({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex justify-between items-end group py-1">
      <span className="font-bold uppercase tracking-wide text-sm text-[#642d3a]">
        {label}
      </span>
      <div className="flex-grow mx-4 border-b border-[#642d3a]/10 mb-1" />
      <span className="font-black italic text-lg text-[#642d3a]">
        {price}
      </span>
    </div>
  );
}