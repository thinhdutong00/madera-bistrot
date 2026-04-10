"use client";
import React from 'react';
import { MenuItem } from '@/components/MenuComponents';
import GlobalMenu from '@/components/GlobalMenu';

export default function BirrePage() {
  return (
    <div className="relative min-h-screen bg-white pt-12 md:pt-32 pb-40 px-6 w-full">
      
      {/* INTESTAZIONE PAGINA */}
      <div className="max-w-[1400px] mx-auto mb-16 px-2">
        <h2 className="bg-[#642d3a] text-white rounded-xl uppercase font-titoli italic tracking-tighter w-full text-4xl text-center py-4 px-2 md:text-5xl md:text-left md:py-6 md:px-8">
          Birre
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* COLONNA SINISTRA: BIRRE ALLA SPINA */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-titoli font-black uppercase mb-8 italic text-[#642d3a]">
            Birre alla Spina (Pils e Ipa)
          </h3>

          <div className="space-y-4 pl-4 border-l-2 border-[#642d3a]/20">
            <MenuItem label="Piccola (30 cl.)" price="4,50€" />
            <MenuItem label="Media (40 cl.)" price="5,00€" />
            <MenuItem label="Grande (50 cl.)" price="6,00€" />
          </div>
        </div>

        {/* COLONNA DESTRA: BIRRE IN BOTTIGLIA */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-titoli font-black uppercase mb-8 italic text-[#642d3a]">
            In Bottiglia
          </h3>

          <div className="space-y-4 pl-4 border-l-2 border-[#642d3a]/20">
            <MenuItem label="CERES (33 cl.)" price="4,00€" />
            <MenuItem label="BECK'S (33 cl.)" price="4,00€" />
            <MenuItem label="CORONA (33 cl.)" price="4,00€" />
          </div>
        </div>

      </div>

      {/* Il menu gestirà automaticamente il link successivo verso Caffetteria */}
      <GlobalMenu />
    </div>
  );
}