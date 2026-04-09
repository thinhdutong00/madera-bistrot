"use client";
import React from 'react';
import Image from 'next/image';
import { MenuItemWithDesc } from '@/components/MenuComponents';
import GlobalMenu from '@/components/GlobalMenu';

export default function ViniPage() {
  return (
    <div className="relative min-h-screen bg-white pt-12 md:pt-32 pb-40 px-6 w-full">
      {/* INTESTAZIONE */}
      <div className="max-w-[1400px] mx-auto mb-10 md:mb-16 px-2">
        <h2 className="text-5xl font-black uppercase tracking-tighter italic text-[#642d3a]">
          Carta dei Vini
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        
        {/* COLONNA SINISTRA: BOLLICINE & BIANCHI */}
        <div className="flex flex-col justify-between">
          
          {/* BOLLICINE */}
          <div className="mb-12 lg:mb-16 w-full">
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a] border-b-2 border-[#642d3a]/10 pb-2">
              Bollicine
            </h3>
            
            <div className="mb-8 lg:hidden relative h-[220px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/apericena-tradizionale.jpg" alt="Bollicine Madera" fill className="object-cover" />
            </div>

            {/* w-full assicura che lo spazio per il justify-between sia massimo */}
            <div className="space-y-6 w-full">
              <MenuItemWithDesc label="DORIGATI - Trento Doc Om De Fer" price="7,00€ / 35,00€" desc="Blanc De Blancs 100% Chardonnay" priceRight={true} />
              <MenuItemWithDesc label="LE VEDUTE - Franciacorta Docg Brut" price="35,00€" desc="80% Chardonnay 20% Pinot Nero" priceRight={true} />
              <MenuItemWithDesc label="BELLAVISTA - Franciacorta Docg Alma Brut" price="50,00€" desc="Grande Cuvée" priceRight={true} />
              <MenuItemWithDesc label="FOLLADOR - Valdobbiadene Prosecco Superiore Nani" price="5,00€ / 25,00€" desc="Millestimato Brut" priceRight={true} />
              <MenuItemWithDesc label="FOLLADOR - Valdobbiadene Prosecco Superiore Torri" price="6,00€ / 26,00€" desc="Extra Dry" priceRight={true} />
            </div>
          </div>

          {/* BIANCHI */}
          <div className="lg:mb-0 w-full">
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a] border-b-2 border-[#642d3a]/10 pb-2">
              Vini Bianchi
            </h3>

            <div className="mb-8 lg:hidden relative h-[220px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/sfondobottiglieluce.jpg" alt="Vini Bianchi Madera" fill className="object-cover" />
            </div>

            <div className="space-y-6 w-full">
              <MenuItemWithDesc label="VON BLUMEN - Alto Adige Doc Gewürztraminer" price="6,00€ / 25,00€" desc="502 100% Gewürztraminer" priceRight={true} />
              <MenuItemWithDesc label="ROENO - Chardonnay Valdadige Doc" price="5,00€ / 20,00€" desc="Le Fratte 100% Chardonnay" priceRight={true} />
              <MenuItemWithDesc label="DORIGATI - Trentino Pinot Grigio" price="5,00€ / 22,00€" desc="100% Pinot Grigio" priceRight={true} />
              <MenuItemWithDesc label="RONCO DEI TASSI - Venezia Giulia Igp" price="6,00€ / 28,00€" desc="Ribolla Gialla" priceRight={true} />
              <MenuItemWithDesc label="ROVEGLIA - Lugana Doc Wighel" price="5,00€ / 25,00€" desc="100% Lugana" priceRight={true} />
            </div>
          </div>
        </div>

        {/* COLONNA DESTRA: IMMAGINE & ROSSI */}
        <div className="flex flex-col h-full">
          <div className="hidden lg:block relative flex-grow min-h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-12">
            <Image 
              src="/vinorosso01.png" 
              alt="Selezione Vini Madera" 
              fill 
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-auto w-full">
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a] border-b-2 border-[#642d3a]/10 pb-2">
              Vini Rossi
            </h3>

            <div className="mb-8 lg:hidden relative h-[220px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/apericena-vegetariano.jpg" alt="Vini Rossi Madera" fill className="object-cover" />
            </div>

            <div className="space-y-6 w-full">
              <MenuItemWithDesc label="BALIA DI ZOLA - Sangiovese Superiore Doc" price="5,00€ / 22,00€" desc="Balitore 100% Sangiovese" priceRight={true} />
              <MenuItemWithDesc label="CA' RUGATE - Valpolicella Doc Rio Albo" price="5,00€ / 25,00€" desc="45% Corvina - 40% Corvinone - 15% Rondinella" priceRight={true} />
              <MenuItemWithDesc label="TENUTA LILLIANO - Chianti Classico Docg" price="5,00€ / 22,00€" desc="90% Sangiovese - 5% Colorino - 5% Merlot" priceRight={true} />
              <MenuItemWithDesc label="VON BLUMEN - Alto Adige Lagrein" price="5,00€ / 25,00€" desc="100% Lagrein" priceRight={true} />
            </div>
          </div>
        </div>

      </div>

      <GlobalMenu />
    </div>
  );
}