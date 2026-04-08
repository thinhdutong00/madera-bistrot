"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
const isMenuPage = pathname?.startsWith('/menu');
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    const controlHeader = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY > lastScrollY && window.scrollY > 150) {
        if (!isOpen) setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
      document.body.style.overflow = 'unset';
    };
  }, [lastScrollY, isOpen]);

  const menuSubLinks = [
    { name: 'Bar Caffetteria', href: '/menu/caffetteria' },
    { name: 'Stuzzicherie', href: '/menu/stuzzicherie' },
    { name: 'Apericena', href: '/menu/apericena' },
    { name: 'Drink & Cocktail', href: '/menu/drink' },
    { name: 'Carta dei Vini', href: '/menu/vini' },
    { name: 'Birre', href: '/menu/birre' },
  ];

  const navLinks = [
    { name: 'Madera', href: '/' },
    { name: 'Chi Siamo', href: '/informazioni' },
    { name: 'Menu', href: '/menu', submenu: menuSubLinks },
    { name: 'Contatti', href: '/contatti' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 bg-white border-b border-gray-100 ${
  isVisible ? 'translate-y-0' : '-translate-y-full'
} ${isScrolled ? 'py-2 shadow-sm' : 'py-4'} ${
  isMenuPage ? 'hidden md:flex' : 'flex'
}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
          
          {/* LOGO */}
          <Link href="/" className="relative w-32 h-12 md:w-40 md:h-14 flex items-center">
            <Image 
              src="/logo.png" 
              alt="Madera Logo" 
              fill 
              className="object-contain object-left" 
              priority 
            />
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center space-x-10 text-[11px] uppercase tracking-[0.3em] font-bold text-[#1a1a1a]">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-4">
                <Link 
                  href={link.href} 
                  className="hover:text-[#642d3a] transition-colors relative"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#642d3a] transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* DROPDOWN DESKTOP */}
                {link.submenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white shadow-xl border border-gray-50 rounded-2xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-2">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-6 py-2 text-[10px] tracking-[0.2em] hover:bg-gray-50 hover:text-[#642d3a] transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA DESKTOP */}
          <div className="hidden md:flex items-center justify-end md:w-40 lg:w-56">
            <a 
              href="tel:3517688658" 
              className="bg-[#642d3a] text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.15em] hover:bg-[#1a1a1a] hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              Riserva un tavolo
            </a>
          </div>

          {/* HAMBURGER BUTTON */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 text-[#1a1a1a] z-[210] focus:outline-none"
            aria-label="Menu"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* OVERLAY MOBILE - SCORREVOLE */}
      <div 
        className={`fixed inset-0 z-[150] bg-white transition-transform duration-500 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-8 flex flex-col min-h-screen">
          <div className="flex justify-between items-center mb-12">
            <Image 
              src="/logo.png" 
              alt="Logo Madera" 
              width={120} 
              height={50} 
              className="object-contain" 
            />
            <button 
              onClick={toggleMenu} 
              className="p-2 text-[#1a1a1a]"
              aria-label="Chiudi menu"
            >
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <Link 
                  href={link.href} 
                  onClick={toggleMenu} 
                  className="text-4xl font-black tracking-tighter text-[#1a1a1a] uppercase active:text-[#642d3a] transition-colors"
                >
                  {link.name}
                </Link>
                
                {/* SOTTOMENU MOBILE */}
                {link.submenu && (
                  <div className="mt-4 ml-2 flex flex-col space-y-3 border-l-2 border-[#642d3a]/20 pl-4">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={toggleMenu}
                        className="text-sm font-bold uppercase tracking-widest text-[#642d3a]/70 active:text-[#642d3a]"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-8">
              <a 
                href="tel:3517688658" 
                className="inline-block w-full bg-[#642d3a] text-white py-5 rounded-full text-center font-bold uppercase tracking-[0.2em] text-xs shadow-xl active:scale-95 transition-all"
              >
                Riserva un tavolo
              </a>
            </div>
          </nav>

          <div className="mt-auto pt-16">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
              Via Alcide Garagnani, 10, <br/> 41012 Carpi MO
            </p>
          </div>
        </div>
      </div>
    </>
  );
}