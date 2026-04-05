import React from 'react';
import Image from 'next/image';
import { MenuItem } from '@/components/MenuComponents';

export default function ViniPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 w-full">
      <div className="max-w-[1400px] mx-auto mb-16">
        <h2 className="text-5xl font-black uppercase tracking-tighter italic text-[#642d3a]">
          Carta dei Vini
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col">
          <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Bollicine & Bianchi</h3>
          <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
            <MenuItem label="Prosecco DOCG (Calice)" price="5,00€" />
            <MenuItem label="Franciacorta (Bottiglia)" price="35,00€" />
            <MenuItem label="Gewürztraminer" price="24,00€" />
            <MenuItem label="Chardonnay" price="20,00€" />
          </div>

          <h3 className="text-2xl font-black uppercase mb-6 mt-12 italic text-[#642d3a]">Rossi</h3>
          <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
            <MenuItem label="Lambrusco Grasparossa" price="16,00€" />
            <MenuItem label="Sangiovese Superiore" price="18,00€" />
            <MenuItem label="Chianti Classico" price="22,00€" />
            <MenuItem label="Valpolicella Ripasso" price="28,00€" />
          </div>
        </div>

        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src="/sfondobottiglieluce.jpg" 
            alt="Selezione Vini Madera" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}