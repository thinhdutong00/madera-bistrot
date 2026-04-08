"use client";
import React from 'react';
import Image from 'next/image';
import { MenuItem, MenuItemWithDesc } from '@/components/MenuComponents';
import GlobalMenu from '@/components/GlobalMenu';

export default function StuzzicheriePage() {
  return (
    <div className="relative min-h-screen bg-white pt-12 md:pt-32 pb-40 px-6 w-full">
      {/* INTESTAZIONE PAGINA */}
      <div className="max-w-[1400px] mx-auto mb-16 px-2">
        <h2 className="text-4xl font-black uppercase tracking-tighter italic text-[#642d3a]">
          Stuzzicherie
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* COLONNA SINISTRA: IMMAGINE */}
        <div className="flex flex-col h-full">
          <div className="relative flex-grow min-h-[450px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/gnocco&salumi.jpg" 
              alt="Gnocco Fritto e Salumi Madera" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* COLONNA DESTRA: MENU SFIZI COMPLETO */}
        <div className="flex flex-col justify-center">
          <div className="space-y-6 pl-4 border-l-2 border-[#642d3a]/20 max-w-lg">
            
            <MenuItemWithDesc 
              label="8 pz gnocco + affettati ........... 8,00€" 
              price="" 
              desc="3 salame, 2 crudo, 2 mortadella" 
            />
            
            <MenuItemWithDesc 
              label="8 pz gnocco solo crudo ........... 10,00€" 
              price="" 
              desc="8 fette" 
            />
            
            <MenuItem label="4 pz gnocco fritto ...................... 3,00€" price="" />
            
            <MenuItemWithDesc 
              label="Mix fritto ........................................... 6,00€" 
              price="" 
              desc="Patatine, crocchette di pollo, olive ascolane" 
            />
            
            <MenuItem label="Patatine Fritte .............................. 5,00€" price="" />
            
            <MenuItem label="Tagliere Formaggi ....................... 7,00€" price="" />
          </div>

          {/* NOTA AGGIUNTIVA */}
          <div className="mt-12 opacity-60">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#642d3a]">
              Ideali per accompagnare i nostri drink e vini
            </p>
          </div>
        </div>
      </div>

      <GlobalMenu />
    </div>
  );
}