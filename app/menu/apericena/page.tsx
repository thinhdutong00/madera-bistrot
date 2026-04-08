"use client";
import React from 'react';
import { ApericenaCard } from '@/components/MenuComponents';
import GlobalMenu from '@/components/GlobalMenu';

export default function ApericenaPage() {
  return (
    <div className="relative min-h-screen bg-white pt-12 md:pt-32 pb-40 px-6 w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20 px-2">
          <h2 className="text-6xl font-black uppercase tracking-tighter italic text-[#642d3a] mb-6">
            Apericena
          </h2>
          <div className="inline-block bg-[#642d3a]/5 px-6 py-3 rounded-full">
             <p className="text-[11px] md:text-sm uppercase tracking-[0.2em] font-black text-[#642d3a]">
               Dalle 18:00 alle 22:30 • Drink Incluso
             </p>
          </div>
        </div>

        {/* Griglia migliorata con gap maggiore */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ApericenaCard 
            image="/apericena-tradizionale.jpg" 
            title="Tradizionale" 
            price="12,00€" 
            desc="Tagliere di affettati misti con gnocco fritto, porzione di patatine e crocchette." 
          />
          <ApericenaCard 
            image="/gnocco&salumi.jpg" 
            title="Madera" 
            price="14,00€" 
            desc="Tagliere di affettati e formaggi misti, crostone, focaccia, olive e salse." 
          />
          <ApericenaCard 
            image="/apericena-vegetariano.jpg" 
            title="Vegetariano" 
            price="16,00€" 
            desc="Burger veg, olive, formaggio, zucchine grigliate, flan di verdure e parmigiana." 
          />
        </div>
      </div>

      <GlobalMenu />
    </div>
  );
}