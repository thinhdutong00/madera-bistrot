"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GlobalMenu() {
  const pathname = usePathname();

  const pages = [
    { name: 'Bar & Caffetteria', href: '/menu/caffetteria' },
    { name: 'Stuzzicherie', href: '/menu/stuzzicherie' },
    { name: 'Apericena', href: '/menu/apericena' },
    { name: 'Drink', href: '/menu/drink' },
    { name: 'Vini', href: '/menu/vini' },
    { name: 'Birre', href: '/menu/birre' },
  ];

  // Trova l'indice della pagina attuale
  const currentIndex = pages.findIndex(p => p.href === pathname);
  
  // Calcola i link precedente e successivo
  const prevPage = pages[(currentIndex - 1 + pages.length) % pages.length];
  const nextPage = pages[(currentIndex + 1) % pages.length];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center bg-[#642d3a]/80 backdrop-blur-md text-[#ffefcc] px-8 py-1.5 rounded-full shadow-2xl border border-[#ffefcc]/20 min-w-[320px] justify-between transition-all duration-300">
      <Link 
        href={prevPage.href}
        className="text-xl font-black p-2 hover:scale-125 transition-transform"
      >
        &lt;
      </Link>
      
      <span className="text-[11px] font-black uppercase italic tracking-[0.2em] text-center flex-1 mx-4">
        {pages[currentIndex === -1 ? 0 : currentIndex].name}
      </span>

      <Link 
        href={nextPage.href}
        className="text-xl font-black p-2 hover:scale-125 transition-transform"
      >
        &gt;
      </Link>
    </div>
  );
}