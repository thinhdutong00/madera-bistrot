import React from 'react';
import { MenuItem, MenuItemWithDesc, ApericenaCard } from '@/components/MenuComponents';

export default function ApericenaPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter italic text-[#642d3a] mb-4">
            Apericena
          </h2>
          <p className="text-sm uppercase tracking-[0.2em] font-bold text-[#642d3a] opacity-70 underline decoration-1 underline-offset-4 max-w-2xl mx-auto">
            Dalle 18:00 alle 22:30. Incluso puoi scegliere un analcolico, calice di vino, spritz o birra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ApericenaCard image="/apericena-tradizionale.jpg" title="Tradizionale" price="12,00€" desc="Tagliere di affettati misti con gnocco fritto, porzione di patatine e crocchette." />
          <ApericenaCard image="/apericena-madera.jpg" title="Madera" price="14,00€" desc="Tagliere di affettati e formaggi misti, crostone, focaccia, olive e salse." />
          <ApericenaCard image="/apericena-vegetariano.jpg" title="Vegetariano" price="16,00€" desc="Burger veg, olive, formaggio, zucchine grigliate, flan di verdure e parmigiana." />
        </div>
      </div>
    </div>
  );
}