import React from 'react';
import Image from 'next/image';
import { MenuItemWithDesc } from '@/components/MenuComponents';

export default function ViniPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 w-full">
      {/* INTESTAZIONE */}
      <div className="max-w-[1400px] mx-auto mb-16">
        <h2 className="text-5xl font-black uppercase tracking-tighter italic text-[#642d3a]">
          Carta dei Vini
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* COLONNA SINISTRA: BOLLICINE & BIANCHI */}
        <div>
          {/* BOLLICINE */}
          <div className="mb-16">
            <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-b-2 border-[#642d3a]/10 pb-2">
              Bollicine
            </h3>
            <div className="space-y-6">
              <MenuItemWithDesc label="DORIGATI - Trento Doc Om De Fer" price="7,00€ / 35,00€" desc="Blanc De Blancs 100% Chardonnay" />
              <MenuItemWithDesc label="LE VEDUTE - Franciacorta Docg Brut" price="35,00€" desc="80% Chardonnay 20% Pinot Nero" />
              <MenuItemWithDesc label="BELLAVISTA - Franciacorta Docg Alma Brut" price="50,00€" desc="Grande Cuvée" />
              <MenuItemWithDesc label="FOLLADOR - Valdobbiadene Prosecco Superiore Nani" price="5,00€ / 25,00€" desc="Millestimato Brut" />
              <MenuItemWithDesc label="FOLLADOR - Valdobbiadene Prosecco Superiore Torri" price="6,00€ / 26,00€" desc="Extra Dry" />
            </div>
          </div>

          {/* BIANCHI */}
          <div>
            <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-b-2 border-[#642d3a]/10 pb-2">
              Vini Bianchi
            </h3>
            <div className="space-y-6">
              <MenuItemWithDesc label="VON BLUMEN - Alto Adige Doc Gewürztraminer" price="6,00€ / 25,00€" desc="502 100% Gewürztraminer" />
              <MenuItemWithDesc label="ROENO - Chardonnay Valdadige Doc" price="5,00€ / 20,00€" desc="Le Fratte 100% Chardonnay" />
              <MenuItemWithDesc label="DORIGATI - Trentino Pinot Grigio" price="5,00€ / 22,00€" desc="100% Pinot Grigio" />
              <MenuItemWithDesc label="RONCO DEI TASSI - Venezia Giulia Igp" price="6,00€ / 28,00€" desc="Ribolla Gialla" />
              <MenuItemWithDesc label="ROVEGLIA - Lugana Doc Wighel" price="5,00€ / 25,00€" desc="100% Lugana" />
            </div>
          </div>
        </div>

        {/* COLONNA DESTRA: ROSSI & IMMAGINE */}
        <div className="flex flex-col">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-16">
            <Image 
              src="/sfondobottiglieluce.jpg" 
              alt="Selezione Vini Madera" 
              fill 
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-b-2 border-[#642d3a]/10 pb-2">
              Vini Rossi
            </h3>
            <div className="space-y-6">
              <MenuItemWithDesc label="BALIA DI ZOLA - Sangiovese Superiore Doc" price="5,00€ / 22,00€" desc="Balitore 100% Sangiovese" />
              <MenuItemWithDesc label="CA' RUGATE - Valpolicella Doc Rio Albo" price="5,00€ / 25,00€" desc="45% Corvina - 40% Corvinone - 15% Rondinella" />
              <MenuItemWithDesc label="TENUTA LILLIANO - Chianti Classico Docg" price="5,00€ / 22,00€" desc="90% Sangiovese - 5% Colorino - 5% Merlot" />
              <MenuItemWithDesc label="VON BLUMEN - Alto Adige Lagrein" price="5,00€ / 25,00€" desc="100% Lagrein" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}