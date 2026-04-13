"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Coffee, Utensils, GlassWater } from 'lucide-react';
import GlobalMenu from '@/components/GlobalMenu';

export default function InformazioniPage() {
  return (
    <main className="min-h-screen bg-[#ffefcc]/10">
      
      {/* HERO SECTION - Titolo e Intro */}
      <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-[#642d3a] font-black text-xs uppercase tracking-[0.4em] mb-4 block">L'essenza di Carpi</span>
              <h1 className="text-6xl md:text-9xl font-titoli italic text-[#642d3a] leading-[0.85] tracking-tighter">
                Madera <br />
                <span className="opacity-40">Caffè & Bistrot.</span>
              </h1>
            </div>
            <div className="pb-4">
              <p className="text-slate-500 font-medium max-w-xs leading-relaxed">
                Un luogo dove il tempo rallenta, tra l'aroma del caffè appena macinato e l'energia di un aperitivo tra amici.
              </p>
            </div>
          </div>
        </div>
        
        {/* Cerchio decorativo */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#642d3a]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      </section>

      {/* GRID IMMAGINI E TESTO */}
      <section className="px-6 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            
            {/* Immagine Principale */}
            <div className="md:col-span-7 relative h-[400px] md:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/bar-interior.jpg" // Sostituisci con una foto del locale
                alt="Interno Madera"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Testo Descrittivo */}
            <div className="md:col-span-5 space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-5xl font-titoli text-[#642d3a] italic leading-tight">
                  Più di un bar, <br /> una casa fuori casa.
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Nato nel cuore di Carpi, Madera è il risultato di una passione per l'ospitalità autentica. Abbiamo creato uno spazio dove la qualità delle materie prime incontra un design ricercato, senza mai perdere l'anima accogliente del bistrot di quartiere.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Dalle colazioni gourmet con piccola pasticceria artigianale, ai pranzi veloci ma curati, fino alle nostre celebri serate dedicate alla mixology.
                </p>
              </div>

              {/* Mini Icone Valori */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-[#642d3a]/10">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#642d3a] rounded-lg text-white"><Coffee size={18} /></div>
                  <div>
                    <h4 className="font-bold text-[#642d3a] text-sm uppercase">Qualità</h4>
                    <p className="text-xs text-slate-500">Miscele selezionate</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#642d3a] rounded-lg text-white"><Utensils size={18} /></div>
                  <div>
                    <h4 className="font-bold text-[#642d3a] text-sm uppercase">Cucina</h4>
                    <p className="text-xs text-slate-500">Ingredienti freschi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE FILOSOFIA - Full Width Color */}
      <section className="bg-[#642d3a] py-24 px-6 rounded-[4rem] mx-4 mb-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Star className="mx-auto text-[#ffefcc]" size={40} fill="currentColor" />
          <h2 className="text-4xl md:text-7xl font-titoli italic text-[#ffefcc] leading-none">
            "L'aperitivo è un rito, <br /> noi lo rendiamo arte."
          </h2>
          <div className="h-1 w-24 bg-[#ffefcc]/30 mx-auto"></div>
          <p className="text-[#ffefcc]/80 text-xl font-light max-w-2xl mx-auto italic">
            Ogni cocktail, ogni calice di vino e ogni stuzzicheria è pensata per raccontare un'emozione.
          </p>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="px-6 pb-40">
        <div className="max-w-[1400px] mx-auto bg-white border border-[#642d3a]/10 rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center shadow-sm">
          <h2 className="text-4xl md:text-6xl font-titoli text-[#642d3a] italic mb-8">Vuoi riservare un tavolo?</h2>
          <Link 
            href="/contatti" 
            className="group flex items-center gap-4 bg-[#642d3a] text-[#ffefcc] px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl"
          >
            Contattaci Ora <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* MENU GALLEGGIANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-6">
        <GlobalMenu />
      </div>

    </main>
  );
}