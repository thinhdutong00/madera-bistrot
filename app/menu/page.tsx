"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const menuSections = [
  { id: 1, title: 'Birre', href: '/menu/birre', image: '/2bicchieri.jpg' },
  { id: 2, title: 'Vini', href: '/menu/vini', image: '/sfondobottiglieluce.jpg' },
  { id: 3, title: 'Drink', href: '/menu/drink', image: '/barmadera.jpg' },
  { id: 4, title: 'Apericena', href: '/menu/apericena', image: '/apericena-tradizionale.jpg' },
  { id: 5, title: 'Stuzzicherie', href: '/menu/stuzzicherie', image: '/gnocco&salumi.jpg' },
  { id: 6, title: 'Bar & Caffetteria', href: '/menu/caffetteria', image: '/panini&croissant.jpg' },
];

export default function MenuHubPage() {
  const [cards, setCards] = useState(menuSections);

  const removeCard = (id: number) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
    // Reset automatico quando finiscono le card per non lasciare la pagina vuota
    if (cards.length === 1) {
      setTimeout(() => setCards(menuSections), 400);
    }
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center pt-20 overflow-hidden">
      
      {/* TESTO INTRODUTTIVO */}
      <div className="text-center mb-12 z-10">
        <h1 className="text-5xl font-black uppercase italic text-[#642d3a] tracking-tighter mb-2">
          Il Menù
        </h1>
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#642d3a]/40">
          Sfoglia le card o clicca per entrare
        </p>
      </div>

      {/* STACK DI CARD */}
      <div className="relative w-[320px] h-[450px] md:w-[380px] md:h-[520px]">
        <AnimatePresence>
          {cards.map((card, index) => {
            const isTop = index === cards.length - 1;
            return (
              <motion.div
                key={card.id}
                style={{ zIndex: index }}
                className="absolute inset-0"
                drag={isTop ? "x" : false} // Trascina solo in orizzontale
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) > 100) removeCard(card.id);
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ 
                  scale: 1 - (cards.length - 1 - index) * 0.04, 
                  y: (cards.length - 1 - index) * -12,
                  opacity: 1 
                }}
                exit={{ 
                  x: 500, 
                  rotate: 45, 
                  opacity: 0,
                  transition: { duration: 0.4 } 
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white bg-white">
                  {/* IMMAGINE */}
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill 
                    className="object-cover"
                    priority={isTop}
                  />
                  
                  {/* OVERLAY GRADIENTE */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#642d3a] via-transparent to-transparent opacity-80" />
                  
                  {/* INFO CARD */}
                  <div className="absolute bottom-8 left-0 right-0 text-center px-6">
                    <h3 className="text-3xl font-black text-[#ffefcc] uppercase italic tracking-tighter mb-4">
                      {card.title}
                    </h3>
                    <Link 
                      href={card.href}
                      className="inline-block bg-[#ffefcc] text-[#642d3a] px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-all"
                    >
                      Apri Sezione
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* DECORAZIONE SFONDO */}
      <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-[#642d3a]/5 rounded-full blur-3xl" />
    </div>
  );
}