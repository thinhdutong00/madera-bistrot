"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const menuSections = [
  { id: 1, title: 'Bar & Caffetteria', href: '/menu/caffetteria', image: '/panini&croissant.jpg' },
  { id: 2, title: 'Stuzzicherie', href: '/menu/stuzzicherie', image: '/gnocco&salumi.jpg' },
  { id: 3, title: 'Apericena', href: '/menu/apericena', image: '/apericena-tradizionale.jpg' },
  { id: 4, title: 'Drink', href: '/menu/drink', image: '/barmadera.jpg' },
  { id: 5, title: 'Vini', href: '/menu/vini', image: '/sfondobottiglieluce.jpg' },
  { id: 6, title: 'Birre', href: '/menu/birre', image: '/2bicchieri.jpg' },
];

export default function MenuHubPage() {
  const [index, setIndex] = useState(0);

  // Logica ciclo infinito
  const nextCard = () => setIndex((prev) => (prev + 1) % menuSections.length);
  const prevCard = () => setIndex((prev) => (prev - 1 + menuSections.length) % menuSections.length);

  // Funzione per ottenere le 3 card visibili su desktop
  const getVisibleCards = () => {
    const prev = (index - 1 + menuSections.length) % menuSections.length;
    const next = (index + 1) % menuSections.length;
    return [
      { ...menuSections[prev], position: 'left' },
      { ...menuSections[index], position: 'center' },
      { ...menuSections[next], position: 'right' }
    ];
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center pt-4 md:pt-32 overflow-hidden">
      
      <div className="text-center mb-4 md:mb-16 z-10 px-6">
        <h1 className="text-5xl font-black uppercase italic text-[#642d3a] tracking-tighter mb-2">
          Il Menù
        </h1>
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#642d3a]/40">
          Sfoglia le sezioni del Madera
        </p>
      </div>

      <div className="relative w-full max-w-6xl flex items-center justify-center px-4">
        
        {/* FRECCIA SINISTRA (Solo Desktop) */}
        <button 
          onClick={prevCard}
          className="hidden md:flex absolute left-4 z-[100] bg-[#642d3a] text-[#ffefcc] w-12 h-12 rounded-full items-center justify-center font-black shadow-xl hover:scale-110 transition-transform"
        >
          &lt;
        </button>

        {/* CONTENITORE CARD */}
        <div className="relative w-[300px] h-[450px] md:w-full md:h-[550px] flex items-center justify-center">
          <AnimatePresence mode='popLayout'>
            {getVisibleCards().map((card, i) => (
              <motion.div
                key={`${card.id}-${card.position}`}
                initial={{ opacity: 0, x: card.position === 'left' ? -100 : card.position === 'right' ? 100 : 0, scale: 0.8 }}
                animate={{ 
                  opacity: card.position === 'center' ? 1 : 0.4,
                  x: card.position === 'left' ? -350 : card.position === 'right' ? 350 : 0,
                  scale: card.position === 'center' ? 1 : 0.85,
                  rotateY: card.position === 'left' ? 15 : card.position === 'right' ? -15 : 0,
                  zIndex: card.position === 'center' ? 50 : 10
                }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 50) prevCard();
                  if (info.offset.x < -50) nextCard();
                }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className={`absolute w-[300px] h-[450px] md:w-[380px] md:h-[520px] 
                  ${card.position !== 'center' ? 'hidden md:block cursor-pointer' : 'block cursor-grab active:cursor-grabbing'}
                `}
                onClick={() => card.position !== 'center' && (card.position === 'left' ? prevCard() : nextCard())}
              >
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white bg-white">
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill 
                    className="object-cover pointer-events-none"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#642d3a] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-8 left-0 right-0 text-center px-6">
                    <h3 className="text-3xl font-black text-[#ffefcc] uppercase italic tracking-tighter mb-4">
                      {card.title}
                    </h3>
                    {card.position === 'center' && (
                      <Link 
                        href={card.href}
                        className="inline-block bg-[#ffefcc] text-[#642d3a] px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-lg"
                      >
                        Apri Sezione
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* FRECCIA DESTRA (Solo Desktop) */}
        <button 
          onClick={nextCard}
          className="hidden md:flex absolute right-4 z-[100] bg-[#642d3a] text-[#ffefcc] w-12 h-12 rounded-full items-center justify-center font-black shadow-xl hover:scale-110 transition-transform"
        >
          &gt;
        </button>
      </div>

      {/* PUNTINI DI NAVIGAZIONE (Mobile) */}
      <div className="flex gap-2 mt-8 md:hidden">
        {menuSections.map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-[#642d3a] w-6' : 'bg-[#642d3a]/20'}`}
          />
        ))}
      </div>

    </div>
  );
}