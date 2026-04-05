import React from 'react';
import Image from 'next/image';
import { MenuItem, MenuItemWithDesc } from '@/components/MenuComponents';

export default function StuzzicheriePage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 w-full">
      {/* INTESTAZIONE PAGINA */}
      <div className="max-w-[1400px] mx-auto mb-16">
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
          <div className="space-y-6 pl-4 border-l-2 border-[#642d3a]/20">
            {/* Voci da IMG_9953 */}
            <MenuItemWithDesc 
              label="8 pz gnocco fritto con affettati misti" 
              price="8,00€" 
              desc="3 salame, 2 crudo, 2 mortadella" 
            />
            
            <MenuItemWithDesc 
              label="8 pz gnocco fritto con solo crudo" 
              price="10,00€" 
              desc="8 fette" 
            />
            
            <MenuItem label="4 pz gnocco fritto" price="3,00€" />
            
            <MenuItemWithDesc 
              label="Mix fritto" 
              price="6,00€" 
              desc="Patatine, crocchette di patate, crocchette di pollo, olive ascolane" 
            />
            
            {/* Voci da IMG_9954 */}
            <MenuItem label="Patatine Fritte" price="5,00€" />
            
            <MenuItem label="Tagliere di Formaggi Misti" price="7,00€" />
          </div>

          {/* NOTA AGGIUNTIVA */}
          <div className="mt-12 opacity-60">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#642d3a]">
              Ideali per accompagnare i nostri drink e vini
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}