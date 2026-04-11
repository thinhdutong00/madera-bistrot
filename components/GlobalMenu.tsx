"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GlobalMenu() {
  const pathname = usePathname();
  const [isAtFooter, setIsAtFooter] = useState(false);

  const pages = [
    { name: 'Bar & Caffetteria', href: '/menu/caffetteria' },
    { name: 'Stuzzicherie', href: '/menu/stuzzicherie' },
    { name: 'Apericena', href: '/menu/apericena' },
    { name: 'Drink', href: '/menu/drink' },
    { name: 'Vini', href: '/menu/vini' },
    { name: 'Birre', href: '/menu/birre' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Cerchiamo il tag <footer> nel DOM
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      
      // Se la parte superiore del footer entra nella vista
      // il menu passa da fixed ad absolute per non sovrapporsi graficamente al footer
      if (footerRect.top <= window.innerHeight) {
        setIsAtFooter(true);
      } else {
        setIsAtFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Eseguiamo un controllo immediato al caricamento
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentIndex = pages.findIndex(p => p.href === pathname);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;
  
  const prevPage = pages[(safeIndex - 1 + pages.length) % pages.length];
  const nextPage = pages[(safeIndex + 1) % pages.length];

  return (
    <div 
      className={`left-1/2 -translate-x-1/2 z-[100] flex items-center bg-[#642d3a]/95 backdrop-blur-md text-[#ffefcc] px-8 py-1.5 rounded-full shadow-2xl border border-[#ffefcc]/20 min-w-[320px] justify-between transition-all duration-300 ${
        /* Posizionamento ribassato: bottom-4 quando scorre, bottom-6 quando tocca il footer */
        isAtFooter ? 'absolute bottom-6' : 'fixed bottom-4'
      }`}
    >
      <Link 
        href={prevPage.href}
        className="text-xl font-black p-2 hover:scale-125 transition-transform"
      >
        &lt;
      </Link>
      
      <span className="text-[11px] font-black uppercase italic tracking-[0.2em] text-center flex-1 mx-4">
        {pages[safeIndex].name}
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