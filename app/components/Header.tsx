"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
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
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY, isOpen]);

  const navLinks = [
    { name: 'Madera', href: '/' },
    { name: 'Chi Siamo', href: '/informazioni' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contatti', href: '/contatti' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-[100] transition-all duration-500 bg-white border-b border-gray-100 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'py-2 shadow-sm' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO - Sinistra su Desktop, Sinistra su Mobile */}
          <Link href="/" className="relative w-32 h-12 md:w-40 md:h-14">
            <Image src="/logo.png" alt="Madera Logo" fill className="object-contain object-left" priority />
          </Link>

          {/* NAV DESKTOP - Al Centro */}
          <nav className="hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-[0.3em] font-bold text-[#1a1a1a]">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#642d3a] transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Placeholder per bilanciare il logo a sinistra su desktop */}
          <div className="hidden md:block w-40"></div>

          {/* HAMBURGER BUTTON - Mobile */}
          <button onClick={toggleMenu} className="md:hidden p-2 text-[#1a1a1a]">
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className="h-0.5 w-full bg-current"></span>
              <span className="h-0.5 w-full bg-current"></span>
              <span className="h-0.5 w-full bg-current"></span>
            </div>
          </button>
        </div>
      </header>

      {/* OVERLAY MOBILE */}
      <div className={`fixed inset-0 z-[150] bg-white transition-transform duration-500 overflow-y-auto ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="p-6 flex flex-col min-h-screen">
          <div className="flex justify-between items-center mb-16">
            <Image src="/logo.png" alt="Logo" width={120} height={50} className="object-contain" />
            <button onClick={toggleMenu} className="p-2">
              <svg className="w-8 h-8" fill="none" stroke="#1a1a1a" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={toggleMenu} className="text-4xl font-black tracking-tighter text-[#1a1a1a] uppercase">
                {link.name}
              </Link>
            ))}
            <div className="pt-10">
              <a href="tel:3517688658" className="inline-block w-full bg-[#642d3a] text-white py-5 rounded-full text-center font-bold uppercase tracking-widest text-sm shadow-xl">
                Riserva un tavolo
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}