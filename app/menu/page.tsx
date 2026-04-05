import React from 'react';
import Image from 'next/image';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. SEZIONE BAR CAFFETTERIA */}
      <section id="colazione" className="pt-32 pb-20 px-6 w-full">
        <div className="max-w-[1400px] mx-auto mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic text-[#642d3a]">
            Bar Caffetteria
          </h2>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* COLONNA SINISTRA: CAFFETTERIA & DOLCI */}
          <div className="flex flex-col">
            <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
              <MenuItem label="Caffè" price="1,30€" />
              <MenuItem label="Caffè Deca" price="1,50€" />
              <MenuItem label="Caffè Corretto" price="2,00€" />
              <MenuItem label="Cappuccino" price="1,50€" />
              <MenuItem label="Cappuccino Deca" price="2,00€" />
              <MenuItem label="Caffè Marocchino" price="1,80€" />
              <MenuItem label="Cappuccino di Soia" price="2,00€" />
              <MenuItem label="Latte Macchiato" price="2,00€" />
              <MenuItem label="Macchiatone" price="1,50€" />
              <MenuItem label="Ginseng Piccolo" price="1,50€" />
              <MenuItem label="Ginseng Grande" price="1,80€" />
              <MenuItem label="Spremuta Arancia" price="4,50€" />
              <MenuItem label="Orzo Piccolo" price="1,30€" />
              <MenuItem label="Orzo Grande" price="1,50€" />
              <MenuItem label="Caffè Shakerato" price="3,50€" />
              <MenuItem label="Succhi di Frutta" price="3,50€" />
              <MenuItem label="Acqua Naturale/Frizzante 1/2 L" price="1,00€" />
              <MenuItem label="Bicchiere di Acqua" price="0,50€" />
              <MenuItem label="Thè Caldo" price="3,50€" />
              <MenuItem label="Tisana" price="5,00€" />
              <MenuItem label="Cioccolata Calda" price="5,00€" />
              <MenuItem label="Cioccolata Calda con Panna" price="6,50€" />
              <MenuItem label="Bibite in Bottiglia" price="4,00€" />
              <MenuItem label="Red Bull / Crodino / Bitter" price="3,50€" />
              <MenuItem label="Amari" price="4,00€" />
              <MenuItem label="Grappe" price="5,00€" />
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-black uppercase mb-2 italic text-[#642d3a]">Food</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-6 text-[#642d3a]">
                (A seconda della disponibilità)
              </p>
              <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
                <MenuItem label="Brioches" price="1,50€" />
                <MenuItem label="Brioches Piccola" price="1,00€" />
                <MenuItem label="Biscottoni al Cioccolato" price="1,50€" />
                <MenuItem label="Fetta di Torta" price="3,00€" />
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA: IMMAGINE & SALATI */}
          <div className="flex flex-col h-full">
            <div className="relative flex-grow min-h-[400px] mb-12 rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/panini&croissant.jpg" 
                alt="Atmosfera Madera" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
              <MenuItem label="Erbazzone" price="2,50€" />
              <MenuItem label="Toast" price="3,50€" />
              <MenuItem label="Pizza" price="2,80€" />
              <MenuItem label="Piadina" price="5,00€" />
              <MenuItem label="Tramezzino" price="3,50€" />
              <MenuItem label="Panino Grande Farcito" price="3,00€" />
              <MenuItem label="Panino Medio Farcito" price="2,50€" />
              <MenuItem label="Panino Piccolo Farcito" price="2,00€" />
              <MenuItem label="Panino Semidolce" price="2,00€" />
              <MenuItem label="Gnocco Farcito" price="3,00€" />
              <MenuItem label="Filoncino Farcito Integrale ai Cereali" price="4,00€" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEZIONE STUZZICHERIE & SFIZI */}
      <section id="stuzzicherie" className="py-20 px-6 w-full">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image 
              src="/gnocco&salumi.jpg" 
              alt="Stuzzicherie Madera" 
              fill 
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center order-1 md:order-2">
            <h2 className="text-4xl font-black uppercase tracking-tighter italic text-[#642d3a] mb-12 text-right">
              Stuzzicherie
            </h2>
            
            <div className="space-y-8 pr-4 border-r-2 border-[#642d3a]/20">
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
              <MenuItemWithDesc 
                label="4 pz gnocco fritto" 
                price="3,00€" 
              />
              <MenuItemWithDesc 
                label="Mix fritto" 
                price="6,00€" 
                desc="Patatine, crocchette di patate, crocchette di pollo, olive ascolane"
              />
              <MenuItemWithDesc 
                label="Patatine Fritte" 
                price="5,00€" 
              />
              <MenuItemWithDesc 
                label="Tagliere di Formaggi Misti" 
                price="7,00€" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEZIONE APERICENA */}
      <section id="apericena" className="py-24 px-6 w-full bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter italic text-[#642d3a] mb-4">
              Apericena
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#642d3a] opacity-70 underline decoration-1 underline-offset-4">
              Incluso alla scelta puoi scegliere un analcolico, calice di vino, spritz o birra (dalle 18:00 alle 22:30)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ApericenaCard 
              image="/apericena-tradizionale.jpg" 
              title="Tradizionale"
              price="12,00€"
              desc="Tagliere di affettati misti con gnocco fritto, porzione di patatine, crocchette di pollo e crocchette di patate."
            />
            <ApericenaCard 
              image="/apericena-madera.jpg"
              title="Madera"
              price="14,00€"
              desc="Tagliere di affettati e formaggi misti, crostone e focaccia, olive, salsa di miele e aceto balsamico."
            />
            <ApericenaCard 
              image="/apericena-vegetariano.jpg"
              title="Vegetariano"
              price="16,00€"
              desc="Burger vegetariano, olive, formaggio, uovo sodo, zucchine grigliate, flan di verdure, peperoni arrostiti, parmigiana di melanzane stick."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// COMPONENTI DI SUPPORTO

function MenuItem({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex justify-between items-end group py-1">
      <span className="font-bold uppercase tracking-wide text-sm text-[#642d3a]">
        {label}
      </span>
      <div className="flex-grow mx-4 border-b border-[#642d3a]/10 mb-1" />
      <span className="font-black italic text-lg text-[#642d3a]">
        {price}
      </span>
    </div>
  );
}

function MenuItemWithDesc({ label, price, desc }: { label: string; price: string; desc?: string }) {
  return (
    <div className="group py-2 text-right">
      <div className="flex justify-between items-end gap-4">
        <span className="font-black italic text-lg text-[#642d3a] order-1">
          {price}
        </span>
        <div className="flex-grow mb-1 border-b border-[#642d3a]/10 order-2" />
        <span className="font-bold uppercase tracking-wide text-sm text-[#642d3a] order-3">
          {label}
        </span>
      </div>
      {desc && (
        <p className="text-[10px] uppercase tracking-widest opacity-60 text-[#642d3a] mt-1">
          {desc}
        </p>
      )}
    </div>
  );
}

function ApericenaCard({ image, title, price, desc }: { image: string; title: string; price: string; desc: string }) {
  return (
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#642d3a]/5">
      <div className="relative h-64 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-8 flex flex-col h-full text-center">
        <div className="flex justify-center items-baseline gap-2 mb-4">
          <h3 className="text-2xl font-black uppercase italic text-[#642d3a]">{title}</h3>
          <span className="text-xl font-bold text-[#642d3a] opacity-80">— {price}</span>
        </div>
        <p className="text-sm leading-relaxed text-[#642d3a] opacity-70 uppercase tracking-wider font-medium">
          {desc}
        </p>
      </div>
    </div>
  );
}