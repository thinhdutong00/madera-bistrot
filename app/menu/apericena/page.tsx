"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import GlobalMenu from '@/components/GlobalMenu';

export default function ApericenaPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const opzioni = [
    {
      image: "/apericena-tradizionale.jpg",
      title: "Tradizionale",
      price: "12,00€",
      desc: "Tagliere di affettati misti con gnocco fritto, porzione di patatine, crocchette di pollo e crocchette di patate."
    },
    {
      image: "/taglieremateraapericena.jpg",
      title: "Madera",
      price: "14,00€",
      desc: "Tagliere di affettati e formaggi misti, crostone e focaccia, olive, salse di miele e aceto balsamico."
    },
    {
      image: "/apericena-vegetariano01.jpg",
      title: "Vegetariano",
      price: "16,00€",
      desc: "Burger vegetariano, olive, formaggio, uovo sodo, zucchine grigliate, flan di verdure, peperoni arrostiti, parmigiana di melanzane stick."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Soglia calibrata per l'ancoraggio al footer
      const footerThreshold = 100;
      if (rect.bottom <= window.innerHeight + footerThreshold) {
        setIsAtFooter(true);
      } else {
        setIsAtFooter(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white pt-12 md:pt-32 pb-40 px-6 w-full">
      <div className="max-w-[1400px] mx-auto">
        
        {/* INTESTAZIONE */}
        <div className="max-w-[1400px] mx-auto mb-8 md:mb-16 px-2">
          <h2 className="bg-[#642d3a] text-white rounded-xl uppercase font-titoli italic tracking-tighter w-full text-4xl text-center py-4 px-2 md:text-5xl md:text-left md:py-6 md:px-8">
            Apericena
          </h2>
          <p className="mt-6 md:mt-8 text-[11px] md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold text-[#642d3a] opacity-70 underline decoration-1 underline-offset-4 max-w-2xl mx-auto md:ml-0 leading-relaxed text-center md:text-left">
            Dalle 18:00 alle 22:30. Incluso puoi scegliere un analcolico, calice di vino, spritz o birra.
          </p>
        </div>

        {/* GRIGLIA CARD GIREVOLI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {opzioni.map((item, index) => (
            <div 
              key={index} 
              onClick={() => handleCardClick(index)}
              className="group [perspective:1000px] h-[550px] md:h-[600px] cursor-pointer"
            >
              <div className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] 
                ${flippedIndex === index ? '[transform:rotateY(180deg)]' : ''} 
                md:group-hover:[transform:rotateY(180deg)]`}
              >
                
                {/* PARTE DAVANTI (FRONT) */}
                <div className="absolute inset-0 flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 [backface-visibility:hidden]">
                  
                  {/* IMMAGINE: 3/4 dell'altezza */}
                  <div className="relative basis-3/4 w-full">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* TESTO: 1/4 dell'altezza - Centrato e ordinato */}
                  <div className="basis-1/4 p-6 flex flex-col justify-center"> 
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-2xl font-titoli uppercase italic text-[#642d3a] tracking-tighter leading-none">
                        {item.title}
                      </h3>
                      <span className="text-[#642d3a] font-black text-lg">{item.price}</span>
                    </div>
                  </div>
                </div>

                {/* PARTE DIETRO (BACK) */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-[#642d3a] p-8 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-titoli uppercase italic mb-6 border-b border-[#ffefcc]/30 pb-2 text-[#ffefcc]">
                    Ingredienti
                  </h3>
                  <p className="text-lg leading-relaxed font-black uppercase tracking-tight">
                    {item.desc}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest mt-8 text-[#ffefcc]/50 font-bold md:hidden">Tocca per tornare</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Menu: Posizionato perfettamente in basso al centro */}
      <div className={`left-1/2 -translate-x-1/2 z-[90] w-full max-w-fit transition-all duration-300 ${isAtFooter ? 'absolute bottom-4' : 'fixed bottom-2'}`}>
        <GlobalMenu />
      </div>
    </div>
  );
}