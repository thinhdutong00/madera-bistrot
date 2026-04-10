"use client";
import React from 'react';
import Image from 'next/image';
import { GlassWater, Milk as Bottle } from 'lucide-react'; 
import GlobalMenu from '@/components/GlobalMenu';

// Componente per la riga del vino con doppia colonna prezzi
function WineRow({ label, desc, glassPrice, bottlePrice }: { 
  label: string; 
  desc?: string; 
  glassPrice?: string; 
  bottlePrice: string; 
}) {
  return (
    <div className="py-3 border-b border-[#642d3a]/5 last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-grow min-w-0">
          <h4 className="font-bold uppercase tracking-wide text-sm text-[#642d3a] leading-tight mb-1">
            {label}
          </h4>
          {desc && (
            <p className="text-[10px] uppercase tracking-widest opacity-60 text-[#642d3a]">
              {desc}
            </p>
          )}
        </div>

        <div className="flex gap-4 sm:gap-8 text-right shrink-0 items-center pt-1">
          <div className="w-16 sm:w-20">
            <span className="font-black italic text-base text-[#642d3a]">
              {glassPrice ? `${glassPrice}€` : "—"}
            </span>
          </div>
          <div className="w-16 sm:w-20">
            <span className="font-black italic text-base text-[#642d3a]">
              {bottlePrice}€
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Header colonne prezzi con icone
function PriceHeader() {
  return (
    <div className="flex justify-end gap-4 sm:gap-8 mb-4 px-0 opacity-80">
      <div className="w-16 sm:w-20 flex flex-col items-center gap-1">
        <GlassWater size={18} className="text-[#642d3a]" />
        <span className="text-[9px] uppercase font-bold tracking-tighter text-[#642d3a]">Calice</span>
      </div>
      <div className="w-16 sm:w-20 flex flex-col items-center gap-1">
        <Bottle size={18} className="text-[#642d3a]" />
        <span className="text-[9px] uppercase font-bold tracking-tighter text-[#642d3a]">Bottiglia</span>
      </div>
    </div>
  );
}

export default function ViniPage() {
  return (
    <div className="relative min-h-screen bg-white pt-12 md:pt-32 pb-40 px-6 w-full text-[#642d3a]">
      {/* INTESTAZIONE */}
<div className="max-w-[1400px] mx-auto mb-10 md:mb-16 px-2">
  <h2 className="
    /* Sfondo bordeaux e testo bianco sempre */
    bg-[#642d3a] text-white rounded-xl uppercase font-black italic tracking-tighter w-full
    
    /* Mobile: testo centrato e padding */
    text-4xl text-center py-4 px-2
    
    /* Desktop: allineamento a sinistra e padding generoso */
    md:text-5xl md:text-left md:py-6 md:px-8
  ">
    Carta dei Vini
  </h2>
</div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        
        <div className="flex flex-col">
          {/* BOLLICINE */}
          <div className="mb-16 w-full">
            <h3 className="text-2xl font-black uppercase mb-6 italic border-b-2 border-[#642d3a]/10 pb-2">
              Bollicine
            </h3>
            
            {/* Immagine Mobile: aspect-auto e object-contain per vedere tutto */}
            <div className="mb-8 lg:hidden relative w-full rounded-2xl overflow-hidden">
              <img src="/bollicine01.jpg" alt="Bollicine" className="w-full h-auto object-contain shadow-lg rounded-2xl" />
            </div>

            <PriceHeader />
            <div className="space-y-1 w-full">
              <WineRow label="DORIGATI - Trento Doc Om De Fer" glassPrice="7,00" bottlePrice="35,00" desc="Blanc De Blancs 100% Chardonnay" />
              <WineRow label="LE VEDUTE - Franciacorta Docg Brut" bottlePrice="35,00" desc="80% Chardonnay 20% Pinot Nero" />
              <WineRow label="BELLAVISTA - Franciacorta Docg Alma Brut" bottlePrice="50,00" desc="Grande Cuvée" />
              <WineRow label="FOLLADOR - Valdobbiadene Prosecco Nani" glassPrice="5,00" bottlePrice="25,00" desc="Millestimato Brut" />
              <WineRow label="FOLLADOR - Valdobbiadene Prosecco Torri" glassPrice="6,00" bottlePrice="26,00" desc="Extra Dry" />
            </div>
          </div>

          {/* BIANCHI */}
          <div className="w-full">
            <h3 className="text-2xl font-black uppercase mb-6 italic border-b-2 border-[#642d3a]/10 pb-2">
              Vini Bianchi
            </h3>

            <div className="mb-8 lg:hidden relative w-full rounded-2xl overflow-hidden">
              <img src="/vinobianco01.jpg" alt="Bianchi" className="w-full h-auto object-contain shadow-lg rounded-2xl" />
            </div>

            <PriceHeader />
            <div className="space-y-1 w-full">
              <WineRow label="VON BLUMEN - Gewürztraminer Doc" glassPrice="6,00" bottlePrice="25,00" desc="502 100% Gewürztraminer" />
              <WineRow label="ROENO - Chardonnay Valdadige Doc" glassPrice="5,00" bottlePrice="20,00" desc="Le Fratte 100% Chardonnay" />
              <WineRow label="DORIGATI - Trentino Pinot Grigio" glassPrice="5,00" bottlePrice="22,00" desc="100% Pinot Grigio" />
              <WineRow label="RONCO DEI TASSI - Ribolla Gialla" glassPrice="6,00" bottlePrice="28,00" desc="Venezia Giulia Igp" />
              <WineRow label="ROVEGLIA - Lugana Doc Wighel" glassPrice="5,00" bottlePrice="25,00" desc="100% Lugana" />
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full">
          {/* IMMAGINE DESKTOP */}
          <div className="hidden lg:block relative flex-grow min-h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-12">
            <Image src="/pinotgrigio012.png" alt="Selezione" fill className="object-cover" priority />
          </div>

          <div className="w-full">
            <h3 className="text-2xl font-black uppercase mb-6 italic border-b-2 border-[#642d3a]/10 pb-2">
              Vini Rossi
            </h3>

            <div className="mb-8 lg:hidden relative w-full rounded-2xl overflow-hidden">
              <img src="/vinorosso02.jpg" alt="Rossi" className="w-full h-auto object-contain shadow-lg rounded-2xl" />
            </div>

            <PriceHeader />
            <div className="space-y-1 w-full">
              <WineRow label="BALIA DI ZOLA - Sangiovese Superiore" glassPrice="5,00" bottlePrice="22,00" desc="Balitore 100% Sangiovese" />
              <WineRow label="CA' RUGATE - Valpolicella Rio Albo" glassPrice="5,00" bottlePrice="25,00" desc="Corvina, Corvinone, Rondinella" />
              <WineRow label="TENUTA LILLIANO - Chianti Classico" glassPrice="5,00" bottlePrice="22,00" desc="90% Sangiovese - 5% Colorino - 5% Merlot" />
              <WineRow label="VON BLUMEN - Alto Adige Lagrein" glassPrice="5,00" bottlePrice="25,00" desc="100% Lagrein" />
            </div>
          </div>
        </div>
      </div>

      <GlobalMenu />
    </div>
  );
}