"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { MenuItem, MenuItemWithDesc } from '@/components/MenuComponents';
import GlobalMenu from '@/components/GlobalMenu';

export default function StuzzicheriePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAtFooter, setIsAtFooter] = useState(false);

  // Logica per rilevare il footer e bloccare il menu galleggiante in linea con le altre pagine
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const footerThreshold = 100; 
      
      // Se la fine del contenuto è vicina al fondo della viewport
      if (rect.bottom <= window.innerHeight + footerThreshold) {
        setIsAtFooter(true);
      } else {
        setIsAtFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white pt-12 md:pt-32 pb-40 px-6 w-full">
      
      {/* INTESTAZIONE PAGINA */}
      <div className="max-w-[1400px] mx-auto mb-6 md:mb-16 px-2">
        <h2 className="
          bg-[#642d3a] text-white rounded-xl uppercase font-titoli italic tracking-tighter w-full
          text-4xl text-center py-4 px-2
          md:text-5xl md:text-left md:py-6 md:px-8
        ">
          Stuzzicherie
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        
        {/* COLONNA SINISTRA: IMMAGINE */}
        <div className="flex flex-col h-full">
          <div className="relative flex-grow min-h-[300px] md:min-h-[500px] mb-6 rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/stuzzicherie01.jpg" 
              alt="Gnocco Fritto e Salumi Madera" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden md:block opacity-60">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#642d3a] font-bold">
              Mordi e sorseggia.
            </p>
          </div>
        </div>

        {/* COLONNA DESTRA: I SFIZI */}
        <div className="flex flex-col">
          <div className="space-y-4 pl-4 border-l-2 border-[#642d3a]/20">
            <MenuItemWithDesc 
              label="8 pz gnocco fritto con affettati misti" 
              price="8,00€" 
              desc="3 salame, 2 crudo, 2 mortadella" 
              priceRight={true}
            />
            
            <MenuItemWithDesc 
              label="8 pz gnocco fritto con solo crudo" 
              price="10,00€" 
              desc="8 fette" 
              priceRight={true}
            />
            
            <MenuItem label="4 pz gnocco fritto" price="3,00€" />
            
            <MenuItemWithDesc 
              label="Mix fritto" 
              price="6,00€" 
              desc="Patatine, crocchette di patate, crocchette di pollo, olive ascolane" 
              priceRight={true}
            />
            
            <MenuItem label="Patatine Fritte" price="5,00€" />
            
            <MenuItem label="Tagliere di Formaggi Misti" price="7,00€" />
          </div>

          {/* NOTA INFERIORE */}
          <div className="mt-12">
            <h3 className="text-2xl font-titoli uppercase mb-2 italic text-[#642d3a]">Madera Sfizi</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-6 text-[#642d3a] font-bold">
              Ideali per accompagnare i nostri drink e vini
            </p>
          </div>
        </div>
      </div>

      {/* MENU GALLEGGIANTE CON POSIZIONAMENTO RIBASSATO */}
      <div className={`
        left-1/2 -translate-x-1/2 z-[90] w-full max-w-fit transition-all duration-300
        ${isAtFooter ? 'absolute bottom-6' : 'fixed bottom-4'}
      `}>
        <GlobalMenu />
      </div>

    </div>
  );
}