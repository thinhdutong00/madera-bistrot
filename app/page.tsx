"use client";
import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  
  // Dati per la sezione Menu
  const categorieMenu = [
    { name: 'Colazione', src: '/colazione.jpg', icon: '☕' },
    { name: 'Stuzzicherie', src: '/stuzzicherie.jpg', icon: '🍔' },
    { name: 'Menù dei Drink', src: '/drink.jpg', icon: '🍹' },
    { name: 'Apericena', src: '/apericena.jpg', icon: '🍣' },
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION - Chic & Focus */}
      <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
        {/* Immagine di fondo dinamica */}
        <Image 
          src="/hero01.png" // Usa l'immagine con le tazze del video
          alt="Atmosfera Madera" 
          fill 
          className="object-cover object-center transition-transform duration-[10s] hover:scale-105" 
          priority 
        />
        
        {/* Overlay sfumato premium */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col justify-end pb-24 px-6">
          <div className="space-y-6 max-w-2xl">
            <span className="text-[#ffefcc] uppercase tracking-[0.4em] text-[10px] md:text-xs font-black opacity-90 block">
              Vieni a Trovarci
            </span>
            
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none italic uppercase">
              Madera <br className="hidden md:block"/>
              Caffè & <span className="text-[#ffefcc]">Bistrot.</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 pt-10">
              <a 
                href="#eventi" 
                className="bg-[#ffefcc] text-[#455970] px-10 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] shadow-2xl hover:bg-white hover:scale-105 transition-all duration-300 inline-block active:scale-95"
              >
                Scopri i nostri Eventi
              </a>
              <a 
                href="/menu" 
                className="text-white border-b-2 border-white/20 pb-1.5 font-bold uppercase text-[10px] tracking-[0.3em] hover:border-[#ffefcc] hover:text-[#ffefcc] transition-all"
              >
                Guarda il Menù
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRESENTAZIONE - Bento Style Morbido */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto space-y-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-[#1a1a1a] tracking-tighter leading-none uppercase italic">
              Caffetteria &<br/> Cocktail Bar.
            </h2>
            <p className="text-[#1a1a1a]/70 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
              A pochi passi dalle vie dello shopping e dalla splendida piazza del centro storico di Carpi, si trova madera! Solo chi ha già frequentato questo locale cool ha un’idea chiara di cosa significhi l’energia che l’intero staff emana. L’accoglienza è professionale e simpatica, il servizio accurato e semplificato con un bon ton datato XXI secolo.
            </p>
            <div className="pt-6">
              <a href="/informazioni" className="bg-[#642d3a] text-white px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#642d3a]/10">
                Scopri di più
              </a>
            </div>
          </div>
          {/* Bento Box Immagine */}
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-[40px] md:rounded-[80px] overflow-hidden border-[15px] border-[#1a1a1a]/5 shadow-inner">
             <Image src="/sfondobottiglieluce.jpg" alt="Interno Madera" fill className="object-cover" />
          </div>
        </div>

        {/* Bento Card Secondaria (Eventi) */}
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr,1.2fr] gap-12 bg-[#1a1a1a]/5 rounded-[40px] p-10 md:p-16 items-center">
            <div className="space-y-4 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-tight">Madera Caffè & Bistrot</h3>
                <p className="text-[#1a1a1a]/60 text-sm">Ci trovi in via Alcide Garagnani, 10, Carpi MO</p>
                <div className="pt-6 flex justify-center md:justify-start">
                  <a href="tel:3517688658" className="inline-flex gap-2.5 items-center border-b-2 border-[#642d3a]/20 pb-1.5 font-bold text-[#642d3a] uppercase text-[10px] tracking-[0.2em] hover:text-[#ffefcc]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    PRENOTA UN TAVOLO
                  </a>
                </div>
            </div>
            <div id="eventi" className="relative h-[300px] rounded-[30px] overflow-hidden border-2 border-white/50 group">
                <Image src="/eventi.jpg" alt="Prossimi Eventi" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8 space-y-4">
                    <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter">Madera Caffè & Bistrot</h4>
                    <div className="flex gap-4">
                        <a href="/eventi" className="bg-[#642d3a] text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#1a1a1a] transition-all">
                            Prossimi Eventi
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. MENU SELECTION - Bordeaux Focus (Migliorato) */}
      <section className="bg-[#642d3a] py-28 md:py-36 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Header Sezione */}
          <div className="text-center space-y-4 max-w-xl mx-auto relative">
             {/* Cerchio decorativo sfocato */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#ffefcc]/10 rounded-full blur-[100px] pointer-events-none" />
             
             <span className="text-[#ffefcc] uppercase tracking-[0.4em] text-[10px] md:text-xs font-black opacity-80 block relative z-10">
               Il Nostro Gusto
             </span>
             <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase italic drop-shadow-sm relative z-10">
               Menù - <span className="text-[#ffefcc]">Scopri <br/></span> le nostre proposte.
             </h2>
          </div>

          {/* Grid Menu Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categorieMenu.map((cat, index) => (
              <a 
                key={cat.name} 
                href="/menu" 
                className={`relative aspect-[1/1.3] rounded-[40px] overflow-hidden group shadow-xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-500 delay-[${index * 50}ms]`}
              >
                <Image 
                  src={cat.src} 
                  alt={`Sezione ${cat.name}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Overlay card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5 z-10" />
                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-sm rounded-full py-5 px-6 flex justify-between items-center z-20 group-hover:-translate-y-2 transition-transform shadow-lg">
                  <span className="text-[#642d3a] text-lg md:text-xl font-bold tracking-tight">
                    {cat.name}
                  </span>
                  <span className="text-3xl filter saturate-0 group-hover:saturate-100 transition-all">
                    {cat.icon}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Bottone CTA centrale */}
          <div className="text-center pt-10">
             <a href="/menu" className="bg-[#ffefcc] text-[#455970] px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 inline-block active:scale-95">
               Vedi tutto il Menù
             </a>
          </div>

        </div>
      </section>

      {/* 4. FINAL CTA - Bento Style (Nuova Sezione) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-[#1a1a1a]/5 rounded-[60px] md:rounded-[100px] p-16 md:p-32 text-center relative overflow-hidden group">
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <span className="text-[#642d3a] uppercase tracking-[0.4em] text-[10px] font-black opacity-80 block mb-4">
              Vieni a Trovarci
            </span>
            
            <h2 className="text-4xl md:text-7xl font-black text-[#1a1a1a] tracking-tighter leading-[0.9] uppercase italic drop-shadow-sm">
              Ti Stiamo <span className="text-[#642d3a]">Aspettando.</span>
            </h2>
            
            <p className="text-[#1a1a1a]/70 text-sm md:text-base font-medium max-w-md mx-auto leading-relaxed tracking-wide">
              Situato nel cuore di Carpi, Madera è il luogo perfetto per una sosta di gusto in qualsiasi momento della giornata.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-6">
              <a 
                href="tel:0598752431" 
                className="bg-[#642d3a] text-white px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:bg-[#ffefcc] hover:text-[#1a1a1a] hover:scale-105 transition-all duration-300 inline-block active:scale-95"
              >
                Prenota un Tavolo
              </a>
              
              <a 
                href="tel:0598752431" 
                className="text-[#1a1a1a] border-b-2 border-[#1a1a1a]/20 pb-1 font-bold uppercase text-[10px] tracking-[0.3em] hover:border-[#642d3a] hover:text-[#642d3a] transition-all"
              >
                Vedi dove siamo
              </a>
            </div>
          </div>

          {/* Numero civico decorativo sullo sfondo */}
          <span className="absolute -bottom-10 right-10 text-white font-black text-[15rem] select-none pointer-events-none">
            Madera
          </span>
        </div>
      </section>

    </main>
  );
}