"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MenuItem, MenuItemWithDesc } from '@/components/MenuComponents';
import Image from 'next/image';

export default function DrinkPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAtFooter, setIsAtFooter] = useState(false);

  // Configurazione categorie per il menu galleggiante
  const categories = [
    { name: 'Signature', id: 'signature' },
    { name: 'Gintoneria', id: 'gintoneria' },
    { name: 'Iced Tea Family', id: 'iced-tea' },
    { name: 'Cocktail', id: 'cocktail' },
    { name: 'Spritz Family', id: 'spritz' },
    { name: 'Sour', id: 'sour' },
    { name: 'Mule', id: 'mule' },
    { name: 'Pestati', id: 'pestati' },
    { name: 'Whiskey', id: 'whiskey' },
    { name: 'Vodka', id: 'vodka' },
    { name: 'Rum', id: 'rum' },
    { name: 'Liquori', id: 'liquori' },
    { name: 'Analcolici', id: 'analcolici' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Logica per fermare il menu prima del footer
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const footerThreshold = 120; // Distanza dal fondo desiderata
      
      // Se la fine del contenitore è vicina al fondo della finestra, blocca il menu
      if (rect.bottom <= window.innerHeight + footerThreshold) {
        setIsAtFooter(true);
      } else {
        setIsAtFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (direction: 'next' | 'prev') => {
    // Se siamo all'inizio e andiamo indietro, o alla fine e andiamo avanti, 
    // non facciamo nulla qui perché useremo i Link (vedi sotto nel JSX)
    if (direction === 'prev' && currentIndex === 0) return;
    if (direction === 'next' && currentIndex === categories.length - 1) return;

    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    setCurrentIndex(newIndex);
    const element = document.getElementById(categories[newIndex].id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white pt-12 md:pt-32 pb-40 px-4 md:px-8 w-full">
      
      {/* MENU GALLEGGIANTE ANCOR - Navigazione Inter-pagina */}
      <div className={`left-1/2 -translate-x-1/2 z-[90] flex items-center bg-[#642d3a]/95 backdrop-blur-md text-[#ffefcc] px-8 py-1.5 rounded-full shadow-2xl border border-[#ffefcc]/20 min-w-[320px] justify-between transition-all duration-300 ${
        isAtFooter ? 'absolute bottom-10' : 'fixed bottom-8'
      }`}>
        
        {/* Pulsante Sinistro: Se primo elemento vai a Apericena, altrimenti scrolla */}
        {currentIndex === 0 ? (
          <Link href="/menu/apericena" className="text-xl font-black p-2 hover:scale-125 transition-transform">
            &lt;
          </Link>
        ) : (
          <button onClick={() => navigate('prev')} className="text-xl font-black p-2 hover:scale-125 transition-transform">
            &lt;
          </button>
        )}
        
        <span className="text-[11px] tracking-[0.2em] font-black uppercase italic text-center flex-1 mx-4">
          {categories[currentIndex].name}
        </span>

        {/* Pulsante Destro: Se ultimo elemento vai a Vini, altrimenti scrolla */}
        {currentIndex === categories.length - 1 ? (
          <Link href="/menu/vini" className="text-xl font-black p-2 hover:scale-125 transition-transform">
            &gt;
          </Link>
        ) : (
          <button onClick={() => navigate('next')} className="text-2xl font-black p-2 hover:scale-125 transition-transform">
            &gt;
          </button>
        )}
      </div>

      {/* INTESTAZIONE PAGINA */}
<div className="max-w-[1400px] mx-auto mb-16 px-2">
  <h2 className="
    /* Sfondo bordeaux e testo bianco sempre */
    bg-[#642d3a] text-white rounded-xl uppercase font-black italic tracking-tighter w-full
    
    /* Mobile: testo centrato e padding */
    text-4xl text-center py-4 px-2
    
    /* Desktop: allineamento a sinistra e padding generoso */
    md:text-5xl md:text-left md:py-6 md:px-8
  ">
    Drink List
  </h2>
</div>

      {/* Contenitore Principale */}
      <div className="max-w-[1100px] mx-auto space-y-24">
        
        <section id="signature">
          <h3 className="text-2xl font-black uppercase mb-10 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Signature</h3>
          <div className="block lg:hidden w-full aspect-square relative rounded-3xl overflow-hidden shadow-xl mb-8">
  <Image 
    src="/signature01.jpg" 
    alt="Descrizione categoria" 
    fill 
    className="object-cover"
  />
</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            <MenuItemWithDesc label="Cosmopoli-Thain" price="10,00€" desc="Vodka, cointreau, lime, cranberry, kaffir lime, lemongrass" priceRight />
            <MenuItemWithDesc label="Wild Turkey" price="10,00€" desc="Wild turkey 101, miele, limone, ginger beer" priceRight />
            <MenuItemWithDesc label="Balsamic" price="10,00€" desc="Gin, fragola, limone, zucchero, aceto balsamico" priceRight />
            <MenuItemWithDesc label="Ginn-Ebro" price="10,00€" desc="Gin, liquore al pino, rosmarino, limone, zucchero" priceRight />
            <MenuItemWithDesc label="Basito" price="10,00€" desc="Gin, basilico, lime, zucchero, soda" priceRight />
            <MenuItemWithDesc label="Zio Tobia" price="10,00€" desc="Rye whiskey, cynar, cherry brandy" priceRight />
            <MenuItemWithDesc label="Ginetto" price="10,00€" desc="Gin, mela verde, cetriolo, lime, zucchero" priceRight />
            <MenuItemWithDesc label="Don Vito" price="10,00€" desc="Bourbon, amaretto di saronno, limone, zucchero" priceRight />
            <MenuItemWithDesc label="Ciapel" price="10,00€" desc="Bourbon, peach tree, limone, zucchero" priceRight />
            <MenuItemWithDesc label="Italian Mule" price="10,00€" desc="Vermouth rosso, lime, ginger beer" priceRight />
            <MenuItemWithDesc label="Tiki-Taka" price="12,00€" desc="Mix di Rum, lime, orzata, pompelmo, ananas" priceRight />
            <MenuItemWithDesc label="Passion" price="10,00€" desc="Vodka, passion fruit, lime, zucchero" priceRight />
            <MenuItemWithDesc label="Zenzy" price="10,00€" desc="Vodka, zenzero fresco, lime, zucchero" priceRight />
            <MenuItemWithDesc label="Paloma Madera" price="10,00€" desc="Tequila, agave, lime, soda al pompelmo rosa" priceRight />
            <MenuItemWithDesc label="Samba" price="10,00€" desc="Cachaca, mela verde, lime, zucchero" priceRight />
            <MenuItemWithDesc label="Smokey Negroni" price="12,00€" desc="Gin, Campari, Vermouth rosso, Mezcal" priceRight />
            <MenuItemWithDesc label="Garden Gin" price="10,00€" desc="Gin, sambuco, menta, cetriolo, lime, soda" priceRight />
          </div>
        </section>

        <section id="gintoneria">
          <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Gintoneria</h3>
          <div className="block lg:hidden w-full aspect-square relative rounded-3xl overflow-hidden shadow-xl mb-8">
  <Image 
    src="/ginmadera01.jpg" 
    alt="Descrizione categoria" 
    fill 
    className="object-cover"
  />
</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-3">
            <MenuItem label="Beefeater" price="8,00€" />
            <MenuItem label="Bombay Sapphire" price="8,00€" />
            <MenuItem label="Tanqueray" price="8,00€" />
            <MenuItem label="Ondina" price="10,00€" />
            <MenuItem label="Malfy (Classico/arancia/limone/pompelmo)" price="10,00€" />
            <MenuItem label="Plymouth" price="10,00€" />
            <MenuItem label="Fifty pounds" price="10,00€" />
            <MenuItem label="Tanqueray 10" price="10,00€" />
            <MenuItem label="Poppe gin" price="10,00€" />
            <MenuItem label="Filos" price="10,00€" />
            <MenuItem label="Elephant" price="10,00€" />
            <MenuItem label="Mare" price="10,00€" />
            <MenuItem label="Monkey" price="12,00€" />
            <MenuItem label="Hendrick's" price="12,00€" />
            <MenuItem label="Roku" price="12,00€" />
            <MenuItem label="Gin premium" price="12,00€" />
          </div>
        </section>

        <section id="iced-tea" className="pb-20">
          <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Iced Tea Family</h3>
          <div className="block lg:hidden w-full aspect-square relative rounded-3xl overflow-hidden shadow-xl mb-8">
  <Image 
    src="/icedteafamily02.jpg" 
    alt="Descrizione categoria" 
    fill 
    className="object-cover"
  />
</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MenuItemWithDesc label="Analcolico alla frutta" price="5,00€" desc="Mix di succhi stagionali, granatina, soda" priceRight />
            <MenuItemWithDesc label="Virgin Mojito" price="6,00€" desc="Lime, zucchero di canna, menta, ginger ale" priceRight />
          </div>
        </section>

        <section id="cocktail">
          <h3 className="text-2xl font-black uppercase mb-10 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Cocktail</h3>
          <div className="block lg:hidden w-full aspect-square relative rounded-3xl overflow-hidden shadow-xl mb-8">
  <Image 
    src="/drinkmenta.jpg" 
    alt="Descrizione categoria" 
    fill 
    className="object-cover"
  />
</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6">
            <MenuItemWithDesc label="Americano" price="7,00€" desc="Vermouth rosso, Campari, soda" priceRight />
            <MenuItemWithDesc label="Negroni" price="7,00€" desc="Gin, Vermouth rosso, Campari" priceRight />
            <MenuItemWithDesc label="Negroni Sbagliato" price="7,00€" desc="Prosecco, Vermouth rosso, Campari" priceRight />
            <MenuItemWithDesc label="Mito" price="7,00€" desc="Vermouth rosso, Campari" priceRight />
            <MenuItemWithDesc label="Garibaldi" price="7,00€" desc="Campari, spremuta d'arancia" priceRight />
            <MenuItemWithDesc label="Cardinale" price="7,00€" desc="Gin, Vermouth dry, Campari" priceRight />
            <MenuItemWithDesc label="Boulevardier" price="8,00€" desc="Bourbon, Vermouth rosso, Campari" priceRight />
            <MenuItemWithDesc label="Martini Cocktail" price="9,00€" desc="Gin, Vermouth dry" priceRight />
            <MenuItemWithDesc label="Vesper Martini" price="10,00€" desc="Gin, Vodka, Lillet Blanc" priceRight />
            <MenuItemWithDesc label="Espresso Martini" price="8,00€" desc="Vodka, liquore caffè, espresso, zucchero" priceRight />
            <MenuItemWithDesc label="Cosmopolitan" price="8,00€" desc="Vodka, triple sec, lime, cranberry" priceRight />
            <MenuItemWithDesc label="Manhattan" price="9,00€" desc="Rye whiskey, Vermouth rosso, angostura" priceRight />
            <MenuItemWithDesc label="Old Fashioned" price="9,00€" desc="Bourbon, zucchero, angostura, soda" priceRight />
            <MenuItemWithDesc label="Daiquiri" price="7,00€" desc="Rum bianco, lime, zucchero" priceRight />
            <MenuItemWithDesc label="Margarita" price="8,00€" desc="Tequila, triple sec, lime" priceRight />
            <MenuItemWithDesc label="Tommy's Margarita" price="9,00€" desc="Tequila, lime, sciroppo d'agave" priceRight />
            <MenuItemWithDesc label="Tequila Sunrise" price="7,00€" desc="Tequila, arancia, granatina" priceRight />
            <MenuItemWithDesc label="Paloma" price="8,00€" desc="Tequila, lime, soda al pompelmo" priceRight />
            <MenuItemWithDesc label="Black Russian" price="7,00€" desc="Vodka, liquore al caffè" priceRight />
            <MenuItemWithDesc label="White Russian" price="8,00€" desc="Vodka, liquore al caffè, panna" priceRight />
            <MenuItemWithDesc label="Bloody Mary" price="9,00€" desc="Vodka, pomodoro, spezie" priceRight />
            <MenuItemWithDesc label="Aviation" price="10,00€" desc="Gin, maraschino, crème de violette, limone" priceRight />
            <MenuItemWithDesc label="Clover Club" price="9,00€" desc="Gin, sciroppo di lampone, limone, albume" priceRight />
            <MenuItemWithDesc label="Last Word" price="10,00€" desc="Gin, chartreuse verde, maraschino, lime" priceRight />
            <MenuItemWithDesc label="Pisco Sour" price="10,00€" desc="Pisco, limone, zucchero, albume, angostura" priceRight />
            <MenuItemWithDesc label="Sidecar" price="10,00€" desc="Cognac, triple sec, limone" priceRight />
            <MenuItemWithDesc label="French 75" price="9,00€" desc="Gin, limone, zucchero, Prosecco" priceRight />
            <MenuItemWithDesc label="Gimlet" price="7,00€" desc="Gin, lime cordial" priceRight />
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            <section id="spritz">
              <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Spritz Family</h3>
              <div className="block lg:hidden w-full aspect-square relative rounded-3xl overflow-hidden shadow-xl mb-8">
  <Image 
    src="/spritz01.jpg" 
    alt="Descrizione categoria" 
    fill 
    className="object-cover"
  />
</div>
              <div className="space-y-4">
                <MenuItemWithDesc label="Spritz" price="5,00€" desc="Prosecco, bitter, soda" priceRight />
                <MenuItemWithDesc label="Hugo" price="6,00€" desc="Sambuco, prosecco, menta" priceRight />
                <MenuItemWithDesc label="Cynar Spritz" price="6,00€" desc="Cynar, prosecco, soda" priceRight />
              </div>
            </section>
            <section id="sour">
              <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Sour</h3>
              <div className="block lg:hidden w-full aspect-square relative rounded-3xl overflow-hidden shadow-xl mb-8">
  <Image 
    src="/gintoneria02.jpg" 
    alt="Descrizione categoria" 
    fill 
    className="object-cover"
  />
</div>
              <div className="space-y-4">
                <MenuItemWithDesc label="Vodka Sour" price="8,00€" desc="Vodka, limone, zucchero" priceRight />
                <MenuItemWithDesc label="Whiskey Sour" price="9,00€" desc="Bourbon, limone, zucchero" priceRight />
                <MenuItemWithDesc label="Amaretto Sour" price="8,00€" desc="Amaretto, limone, zucchero" priceRight />
              </div>
            </section>
            <section id="mule">
              <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Mule</h3>
              <div className="block lg:hidden w-full aspect-square relative rounded-3xl overflow-hidden shadow-xl mb-8">
  <Image 
    src="/hero01.png" 
    alt="Descrizione categoria" 
    fill 
    className="object-cover"
  />
</div>
              <div className="space-y-4">
                <MenuItemWithDesc label="Moscow Mule" price="7,00€" desc="Vodka, lime, ginger beer" priceRight />
                <MenuItemWithDesc label="London Mule" price="7,00€" desc="Gin, lime, ginger beer" priceRight />
                <MenuItemWithDesc label="Dark n Stormy" price="8,00€" desc="Rum scuro, lime, ginger beer" priceRight />
              </div>
            </section>
            <section id="pestati">
              <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Pestati</h3>
              <div className="block lg:hidden w-full aspect-square relative rounded-3xl overflow-hidden shadow-xl mb-8">
  <Image 
    src="/pestati01.jpg" 
    alt="Descrizione categoria" 
    fill 
    className="object-cover"
  />
</div>
              <div className="space-y-4">
                <MenuItemWithDesc label="Mojito" price="8,00€" desc="Rum bianco, menta, lime, zucchero di canna, soda" priceRight />
                <MenuItemWithDesc label="Mojito Madera" price="8,00€" desc="Rum bianco, lime, menta, fragola, cocco, zucchero di canna, soda " priceRight />
                <MenuItemWithDesc label="Caipirinha" price="8,00€" desc="Cachaça, lime, zucchero di canna, soda" priceRight />
                <MenuItemWithDesc label="Caipiroska" price="8,00€" desc="Vodka, lime, zucchero di canna, soda" priceRight />
                <MenuItemWithDesc label="Piscis" price="8,00€" desc="Rum bianco, lime pestato, zucchero di canna, menta, blu curaçao, soda" priceRight />
                <MenuItemWithDesc label="Punch cubano" price="8,00€" desc="Rum scuro, zucchero di canna, lime pestato, coca cola" priceRight />
              </div>
            </section>
        </div>

        <section className="pt-16 border-t border-gray-100">
          <h3 className="text-4xl font-black uppercase mb-16 italic text-[#642d3a] text-center tracking-tighter">I Nostri Distillati</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <div id="whiskey">
              <h4 className="text-xl font-black uppercase mb-6 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Whiskey</h4>
              <div className="space-y-2">
                <MenuItem label="Ballantine's" price="8,00€" />
                <MenuItem label="Jack Daniel's" price="8,00€" />
                <MenuItem label="Wild Turkey" price="8,00€" />
                <MenuItem label="Jack Daniel's Miele" price="8,00€" />
                <MenuItem label="Drambuie" price="8,00€" />
                <MenuItem label="Laphroaig" price="8,00€" />
                <MenuItem label="Lagavulin" price="8,00€" />
              </div>
            </div>
            <div id="vodka">
              <h4 className="text-xl font-black uppercase mb-6 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Vodka</h4>
              <div className="space-y-2">
                <MenuItem label="Absolut" price="8,00€" />
                <MenuItem label="Beluga" price="10,00€" />
                <MenuItem label="Belvedere" price="10,00€" />
                <MenuItem label="Snow Leopard" price="11,00€" />
              </div>
            </div>
            <div id="rum">
              <h4 className="text-xl font-black uppercase mb-6 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Rum</h4>
              <div className="space-y-2">
                <MenuItem label="Havana 7" price="8,00€" />
                <MenuItem label="Don Papa" price="9,00€" />
                <MenuItem label="Diplomatico" price="10,00€" />
                <MenuItem label="Zacapa 23" price="10,00€" />
              </div>
            </div>
            <div id="liquori">
              <h4 className="text-xl font-black uppercase mb-6 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Liquori</h4>
              <div className="space-y-2">
                <MenuItem label="Amari" price="4,00€" />
                <MenuItem label="Grappe" price="5,00€" />
              </div>
            </div>
          </div>
        </section>

        <section id="analcolici" className="pb-20">
          <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Analcolici</h3>
          <div className="block lg:hidden w-full aspect-square relative rounded-3xl overflow-hidden shadow-xl mb-8">
  <Image 
    src="/analcolico01.jpg" 
    alt="Descrizione categoria" 
    fill 
    className="object-cover"
  />
</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <MenuItemWithDesc label="SWEET DREAM" price="7,00€" desc="Succo di arancia, succo di ananas, fragola, soda al limone, succo di limone fresco" priceRight />
            <MenuItemWithDesc label="CRODINO LOVERS" price="7,00€" desc="Succo di lime fresco, melograno, Crodino, soda aromatizzata al pompelmo" priceRight />
            <MenuItemWithDesc label="PASSION SUNSET" price="7,00€" desc="Succo di arancia, melograno, maracuja, soda al limone, succo di lime fresco" priceRight />
          </div>
        </section>
        
      </div>
    </div>
  );
}