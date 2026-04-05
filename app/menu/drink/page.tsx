import React from 'react';
import Image from 'next/image';
import { MenuItem } from '@/components/MenuComponents';

export default function DrinkPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 w-full">
      {/* INTESTAZIONE */}
      <div className="max-w-[1400px] mx-auto mb-16">
        <h2 className="text-5xl font-black uppercase tracking-tighter italic text-[#642d3a]">
          Drink
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* COLONNA SINISTRA */}
        <div className="space-y-12">
          {/* APERITIVI */}
          <div>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Aperitivi</h3>
            <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
              <MenuItem label="Spritz Aperol / Campari / Select" price="5,00€" />
              <MenuItem label="Hugo" price="6,00€" />
              <MenuItem label="Americano" price="7,00€" />
              <MenuItem label="Negroni" price="7,00€" />
              <MenuItem label="Negroni Sbagliato" price="7,00€" />
              <MenuItem label="Mito" price="7,00€" />
              <MenuItem label="Garibaldi" price="7,00€" />
              <MenuItem label="Cardinale" price="7,00€" />
              <MenuItem label="Boulevardier" price="8,00€" />
            </div>
          </div>

          {/* PESTATI & MULE */}
          <div>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Pestati & Mule</h3>
            <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
              <MenuItem label="Mojito" price="7,00€" />
              <MenuItem label="Caipirinha" price="7,00€" />
              <MenuItem label="Caipiroska (Vari gusti)" price="7,00€" />
              <MenuItem label="Moscow Mule" price="7,00€" />
              <MenuItem label="London Mule" price="7,00€" />
              <MenuItem label="Mexican Mule" price="8,00€" />
            </div>
          </div>

          {/* ANALCOLICI */}
          <div>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Analcolici</h3>
            <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
              <MenuItem label="Analcolico alla frutta" price="5,00€" />
              <MenuItem label="Virgin Mojito" price="6,00€" />
              <MenuItem label="Shirley Temple" price="6,00€" />
            </div>
          </div>
        </div>

        {/* COLONNA DESTRA */}
        <div className="space-y-12">
          {/* COCKTAIL INTERNAZIONALI */}
          <div>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Internazionali</h3>
            <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
              <MenuItem label="Gin Tonic / Lemon" price="7,00€" />
              <MenuItem label="Vodka Tonic / Lemon" price="7,00€" />
              <MenuItem label="Black / White Russian" price="7,00€" />
              <MenuItem label="London Fog" price="8,00€" />
              <MenuItem label="Tequila Sunrise" price="7,00€" />
              <MenuItem label="Paloma" price="8,00€" />
              <MenuItem label="Daiquiri" price="7,00€" />
              <MenuItem label="Margarita" price="8,00€" />
              <MenuItem label="Tommy's Margarita" price="9,00€" />
              <MenuItem label="Espresso Martini" price="8,00€" />
              <MenuItem label="Cosmopolitan" price="8,00€" />
              <MenuItem label="Manhattan" price="9,00€" />
              <MenuItem label="Old Fashioned" price="9,00€" />
            </div>
          </div>

          {/* SOUR */}
          <div>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Sour</h3>
            <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
              <MenuItem label="Vodka Sour" price="8,00€" />
              <MenuItem label="Gin Sour" price="8,00€" />
              <MenuItem label="Whisky Sour" price="9,00€" />
              <MenuItem label="Midori Sour" price="8,00€" />
            </div>
          </div>

          {/* IMMAGINE DI DECORAZIONE */}
          <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/dj.jpg" 
              alt="Madera Nightlife" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}