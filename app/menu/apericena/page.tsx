"use client";
import React from 'react';
import Image from 'next/image';
import GlobalMenu from '@/components/GlobalMenu';

export default function ApericenaPage() {
  const opzioni = [
    {
      image: "/apericena-tradizionale.jpg",
      title: "Tradizionale",
      price: "12,00€",
      desc: "Tagliere di affettati misti con gnocco fritto, porzione di patatine e crocchette."
    },
    {
      image: "/gnocco&salumi.jpg",
      title: "Madera",
      price: "14,00€",
      desc: "Tagliere di affettati e formaggi misti, crostone, focaccia, olive e salse."
    },
    {
      image: "/apericena-vegetariano.jpg",
      title: "Vegetariano",
      price: "16,00€",
      desc: "Burger veg, olive, formaggio, zucchine grigliate, flan di verdure e parmigiana."
    }
  ];

  return (
    <div className="relative min-h-screen bg-white pt-12 md:pt-32 pb-40 px-6 w-full">
      <div className="max-w-[1400px] mx-auto">
        
        {/* INTESTAZIONE */}
<div className="max-w-[1400px] mx-auto mb-8 md:mb-16 px-2">
  <h2 className="
    /* Sfondo bordeaux e testo bianco sempre */
    bg-[#642d3a] text-white rounded-xl uppercase font-black italic tracking-tighter w-full
    
    /* Mobile: testo centrato e padding */
    text-4xl text-center py-4 px-2
    
    /* Desktop: allineamento a sinistra e padding maggiore */
    md:text-5xl md:text-left md:py-6 md:px-8
  ">
    Apericena
  </h2>
  
  {/* Aggiunto mt-6 su mobile e mt-8 su desktop per staccarlo dal banner */}
  <p className="mt-6 md:mt-8 text-[11px] md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold text-[#642d3a] opacity-70 underline decoration-1 underline-offset-4 max-w-2xl mx-auto md:ml-0 leading-relaxed text-center md:text-left">
  Dalle 18:00 alle 22:30. Incluso puoi scegliere un analcolico, calice di vino, spritz o birra.
</p>
</div>

        {/* GRIGLIA CARD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {opzioni.map((item, index) => (
            <div key={index} className="flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              
              {/* IMMAGINE 
                  Modificato: aspect-square su mobile per non occupare troppa altezza, aspect-[4/5] su desktop 
              */}
              <div className="relative aspect-square md:aspect-[4/5] w-full">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>

              {/* TESTO */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-black uppercase italic text-[#642d3a] tracking-tighter">
                    {item.title}
                  </h3>
                  <span className="text-[#642d3a] font-black text-sm">{item.price}</span>
                </div>
                <p className="text-[12px] leading-snug text-gray-600 font-medium">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      <GlobalMenu />
    </div>
  );
}