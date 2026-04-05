import React from 'react';
import Image from 'next/image';
import { Coffee, Pizza, GlassWater, Beer } from 'lucide-react'; // Installa lucide-react

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#ffefcc] text-[#642d3a] font-sans pb-24">
      
      {/* 1. SEZIONE COLAZIONE / CAFFETTERIA */}
      <section id="colazione" className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">Bar Caffetteria</h2>
          <div className="space-y-2 border-l-2 border-[#642d3a]/20 pl-6">
            <MenuItem label="Caffè" price="1,30€" />
            <MenuItem label="Caffè Deca" price="1,50€" />
            <MenuItem label="Caffè Corretto" price="2,00€" />
            <MenuItem label="Cappuccino" price="1,50€" />
            <MenuItem label="Cappuccino Deca" price="2,00€" />
            <MenuItem label="Caffè Marocchino" price="1,80€" />
            <MenuItem label="Cappuccino di Soia" price="2,00€" />
            <MenuItem label="Latte Macchiato" price="2,00€" />
            <MenuItem label="Macchiatone" price="1,50€" />
            <MenuItem label="Ginseng Piccolo" price="1,50€" />
            <MenuItem label="Ginseng Grande" price="2,00€" />
            <MenuItem label="Spremuta Arancia" price="4,50€" />
            <MenuItem label="Tè Caldo / Tisana" price="3,50€" />
            <MenuItem label="Cioccolata Calda" price="5,00€" />
            <MenuItem label="Cioccolata con Panna" price="6,50€" />
            <div className="pt-6">
              <h3 className="text-xl font-black uppercase mb-4 italic">Food (Dalla Vetrina)</h3>
              <MenuItem label="Brioches" price="1,50€" />
              <MenuItem label="Brioches Piccola" price="1,00€" />
              <MenuItem label="Biscottoni al Cioccolato" price="1,50€" />
              <MenuItem label="Fetta di Torta" price="3,00€" />
            </div>
          </div>
        </div>
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <Image src="/vetrina-dolci.jpg" alt="Colazione Madera" fill className="object-cover" />
        </div>
      </section>

      {/* 2. SEZIONE STUZZICHERIE (SFONDO SCURO) */}
      <section id="stuzzicherie" className="bg-[#642d3a] text-[#ffefcc] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden order-last md:order-first">
            <Image src="/gnocco-fritto.jpg" alt="Stuzzicherie" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Stuzzicherie</h2>
            <div className="space-y-4">
              <MenuItem label="8 pz Gnocco fritto con affettati misti" price="8,00€" sub="3 salumi, 2 crudo, 2 mortadella" dark />
              <MenuItem label="8 pz Gnocco fritto con solo crudo" price="10,00€" sub="8 fette" dark />
              <MenuItem label="4 pz Gnocco fritto" price="3,00€" dark />
              <MenuItem label="Mix Fritto" price="6,00€" sub="Patatine, crocchette, pollo, olive ascolane" dark />
              <MenuItem label="Tagliere di Formaggi Misti" price="7,00€" dark />
              <div className="pt-4 border-t border-[#ffefcc]/20">
                <MenuItem label="Erbazzone" price="2,50€" dark />
                <MenuItem label="Toast / Pizza" price="3,50€" dark />
                <MenuItem label="Tramezzino" price="3,50€" dark />
                <MenuItem label="Panino Semidolce" price="2,00€" dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEZIONE APERICENA (SFONDO CHIARO) */}
      <section id="apericena" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter">Apericena</h2>
          <p className="opacity-70 mt-2 uppercase tracking-widest text-xs font-bold">Incluso alla scelta: Analcolico, Calice di Vino, Spritz o Birra</p>
          <p className="text-[10px] opacity-50 uppercase mt-1">(Dalle 18:00 alle 22:30)</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ApericenaCard 
            title="Tradizionale" 
            price="12,00€" 
            desc="Tagliere di affettati misti con gnocco fritto, porzione di patatine, crocchette di pollo e crocchette di patate" 
          />
          <ApericenaCard 
            title="Madera" 
            price="14,00€" 
            desc="Tagliere di affettati e formaggi misti, crostini e focaccia, olive, salse di miele e aceto balsamico" 
          />
          <ApericenaCard 
            title="Vegetariano" 
            price="16,00€" 
            desc="Burger vegetariano, verdure grigliate, flan di verdure, pecorino, parmigiana di melanzane" 
          />
        </div>
      </section>

      {/* 4. SEZIONE COCKTAIL (SFONDO SCURO) */}
      <section id="drink" className="bg-[#642d3a] text-[#ffefcc] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-2 text-center">Menù dei Drink & Cocktail</h2>
          <p className="text-center opacity-60 mb-16 uppercase tracking-[0.3em] text-[10px]">Signature & Grandi Classici</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8">
            <MenuItem label="Coco Blue Sky" price="8,00€" sub="Rum, blue curacao, cocco, panna" dark />
            <MenuItem label="Violette Spritz" price="6,00€" sub="Liquore alla violetta, prosecco, soda" dark />
            <MenuItem label="Witch Negroni" price="8,00€" sub="Vermouth rosso, bitter campari, liquore alle erbe" dark />
            <MenuItem label="Pornostar Madera" price="10,00€" sub="Vodka vaniglia, liquore maracuja, succo lime" dark />
            <MenuItem label="Liquid Marijuana" price="12,00€" sub="Rum, vodka, blue curacao, succo ananas" dark />
            <MenuItem label="Mojito" price="8,00€" sub="Rum bianco, menta, zucchero di canna, lime" dark />
            <MenuItem label="Spritz Aperol / Campari" price="6,00€" dark />
            <MenuItem label="Gin Tonic / Lemon" price="9,00€" dark />
          </div>
        </div>
      </section>

      {/* 5. MENU GALLEGGIANTE (STICKY NAV) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#642d3a] border border-[#ffefcc]/20 px-6 py-4 rounded-full shadow-2xl flex items-center gap-8 backdrop-blur-md">
        <NavIcon icon={<Coffee size={20}/>} label="Colazione" href="#colazione" />
        <NavIcon icon={<Pizza size={20}/>} label="Stuzzicherie" href="#stuzzicherie" />
        <NavIcon icon={<GlassWater size={20}/>} label="Apericena" href="#apericena" />
        <NavIcon icon={<Beer size={20}/>} label="Drink" href="#drink" />
      </div>

    </div>
  );
}

// COMPONENTI DI SUPPORTO PER IL CODICE PULITO
function MenuItem({ label, price, sub, dark = false }: any) {
  return (
    <div className="flex flex-col mb-4">
      <div className="flex justify-between items-end border-b border-current/10 pb-1">
        <span className="font-bold uppercase tracking-wide text-sm">{label}</span>
        <span className="font-black italic text-lg">{price}</span>
      </div>
      {sub && <span className={`text-[10px] mt-1 uppercase tracking-widest opacity-50`}>{sub}</span>}
    </div>
  );
}

function ApericenaCard({ title, price, desc }: any) {
  return (
    <div className="bg-[#642d3a] text-[#ffefcc] p-8 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-transform">
      <div>
        <h3 className="text-2xl font-black uppercase italic mb-2 tracking-tighter">{title}</h3>
        <p className="text-xs opacity-70 leading-relaxed font-medium">{desc}</p>
      </div>
      <div className="mt-8 text-3xl font-black italic">{price}</div>
    </div>
  );
}

function NavIcon({ icon, label, href }: any) {
  return (
    <a href={href} className="text-[#ffefcc] flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity group">
      {icon}
      <span className="text-[8px] uppercase font-black tracking-widest group-hover:block hidden">{label}</span>
    </a>
  );
}