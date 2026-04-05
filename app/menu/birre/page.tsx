import React from 'react';
import Image from 'next/image';
import { MenuItem } from '@/components/MenuComponents';

export default function BirrePage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 w-full">
      {/* INTESTAZIONE PAGINA */}
      <div className="max-w-[1400px] mx-auto mb-16">
        <h2 className="text-5xl font-black uppercase tracking-tighter italic text-[#642d3a]">
          Birre
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* COLONNA SINISTRA: BIRRE ALLA SPINA */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a]">
            Birre alla Spina (Pils e Ipa)
          </h3>
          <div className="space-y-4 pl-4 border-l-2 border-[#642d3a]/20">
            <MenuItem label="Piccola (30 cl.)" price="4,50€" />
            <MenuItem label="Media (40 cl.)" price="5,00€" />
            <MenuItem label="Grande (50 cl.)" price="6,00€" />
          </div>

          <div className="mt-16 h-[350px] relative rounded-3xl overflow-hidden shadow-xl hidden md:block">
            <Image 
              src="/barmadera.jpg" 
              alt="Atmosfera Madera" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* COLONNA DESTRA: BIRRE IN BOTTIGLIA */}
        <div className="flex flex-col">
          <div className="h-[300px] relative rounded-3xl overflow-hidden shadow-xl mb-12">
            <Image 
              src="/2bicchieri.jpg" 
              alt="Selezione Birre" 
              fill 
              className="object-cover"
            />
          </div>

          <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a]">
            In Bottiglia
          </h3>
          <div className="space-y-4 pl-4 border-l-2 border-[#642d3a]/20">
            <MenuItem label="CERES (33 cl.)" price="4,00€" />
            <MenuItem label="BECK'S (33 cl.)" price="4,00€" />
            <MenuItem label="CORONA (33 cl.)" price="4,00€" />
          </div>
        </div>

      </div>
    </div>
  );
}