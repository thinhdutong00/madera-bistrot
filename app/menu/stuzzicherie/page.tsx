import React from 'react';
import Image from 'next/image';
import { MenuItem, MenuItemWithDesc, ApericenaCard } from '@/components/MenuComponents';

export default function StuzzicheriePage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 w-full">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1">
          <Image src="/gnocco&salumi.jpg" alt="Stuzzicherie Madera" fill className="object-cover" />
        </div>

        <div className="flex flex-col justify-center order-1 md:order-2">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic text-[#642d3a] mb-12 text-right">
            Stuzzicherie
          </h2>
          <div className="space-y-8 pr-4 border-r-2 border-[#642d3a]/20 text-right">
            <MenuItemWithDesc label="8 pz gnocco fritto con affettati misti" price="8,00€" desc="3 salame, 2 crudo, 2 mortadella" />
            <MenuItemWithDesc label="Mix fritto" price="6,00€" desc="Patatine, crocchette di patate, crocchette di pollo, olive ascolane" />
            <MenuItemWithDesc label="Patatine Fritte" price="5,00€" />
            <MenuItemWithDesc label="Tagliere di Formaggi Misti" price="7,00€" />
          </div>
        </div>
      </div>
    </div>
  );
}