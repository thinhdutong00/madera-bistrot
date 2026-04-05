import React from 'react';
import Image from 'next/image';
import { MenuItem, MenuItemWithDesc, ApericenaCard } from '@/components/MenuComponents';

export default function CaffetteriaPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 w-full">
      <div className="max-w-[1400px] mx-auto mb-16">
        <h2 className="text-4xl font-black uppercase tracking-tighter italic text-[#642d3a]">
          Bar Caffetteria
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* COLONNA SINISTRA */}
        <div className="flex flex-col">
          <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
            <MenuItem label="Caffè" price="1,30€" />
            <MenuItem label="Caffè Deca" price="1,50€" />
            <MenuItem label="Cappuccino" price="1,50€" />
            {/* ... inserisci gli altri elementi della caffetteria qui ... */}
            <MenuItem label="Grappe" price="5,00€" />
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-black uppercase mb-2 italic text-[#642d3a]">Food</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-6 text-[#642d3a]">
              (A seconda della disponibilità)
            </p>
            <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
              <MenuItem label="Brioches" price="1,50€" />
              <MenuItem label="Fetta di Torta" price="3,00€" />
            </div>
          </div>
        </div>

        {/* COLONNA DESTRA */}
        <div className="flex flex-col h-full">
          <div className="relative flex-grow min-h-[400px] mb-12 rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/panini&croissant.jpg" alt="Atmosfera Madera" fill className="object-cover" priority />
          </div>
          <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
            <MenuItem label="Erbazzone" price="2,50€" />
            <MenuItem label="Toast" price="3,50€" />
            <MenuItem label="Piadina" price="5,00€" />
          </div>
        </div>
      </div>
    </div>
  );
}