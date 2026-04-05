import React from 'react';
import Image from 'next/image';
import { MenuItemWithDesc } from '@/components/MenuComponents';

export default function DrinkPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 w-full">
      <div className="max-w-[1400px] mx-auto mb-16 text-right">
        <h2 className="text-5xl font-black uppercase tracking-tighter italic text-[#642d3a]">
          Drink & Cocktail
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1">
          <Image 
            src="/2bicchieri.jpg" 
            alt="Cocktail Madera" 
            fill 
            className="object-cover"
          />
        </div>

        <div className="flex flex-col order-1 md:order-2">
          <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] text-right">I Grandi Classici</h3>
          <div className="space-y-6 pr-4 border-r-2 border-[#642d3a]/20">
            <MenuItemWithDesc 
              label="Spritz" 
              price="6,00€" 
              desc="Aperol, Campari, Select o Cyanar"
            />
            <MenuItemWithDesc 
              label="Negroni" 
              price="8,00€" 
              desc="Gin, Campari, Vermouth Rosso"
            />
            <MenuItemWithDesc 
              label="Gin Tonic Premium" 
              price="10,00€" 
              desc="Selezione di Gin Premium con Tonica Dry"
            />
            <MenuItemWithDesc 
              label="Moscow Mule" 
              price="8,00€" 
              desc="Vodka, Lime, Ginger Beer"
            />
            <MenuItemWithDesc 
              label="Mojito" 
              price="8,00€" 
              desc="Rum Bianco, Menta, Lime, Zucchero di Canna"
            />
            <MenuItemWithDesc 
              label="Analcolico della Casa" 
              price="6,00€" 
              desc="Mix di frutta fresca e soda"
            />
          </div>
        </div>
      </div>
    </div>
  );
}