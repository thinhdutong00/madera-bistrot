import React from 'react';
import Image from 'next/image';
import { Coffee, Pizza, GlassWater, Beer } from 'lucide-react';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#ffefcc] text-[#642d3a] font-sans pb-32">
      
      {/* 1. SEZIONE COLAZIONE & CAFFETTERIA */}
      <section id="colazione" className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">Bar Caffetteria</h2>
          <div className="space-y-1 pl-4 border-l border-[#642d3a]/20">
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
            <MenuItem label="Bicchiere di Soia" price="1,50€" />
            <MenuItem label="Orzo Piccolo" price="1,30€" />
            <MenuItem label="Orzo Grande" price="1,50€" />
            <MenuItem label="Caffè Shakerato" price="3,50€" />
            <MenuItem label="Succhi di Frutta" price="3,50€" />
            <MenuItem label="Acqua Nat/Frizz 1/2 L" price="1,00€" />
            <MenuItem label="Bicchiere di Acqua" price="0,50€" />
            <MenuItem label="Thè Caldo" price="3,50€" />
            <MenuItem label="Tisana" price="5,00€" />
            <MenuItem label="Cioccolata Calda" price="5,00€" />
            <MenuItem label="Cioccolata con Panna" price="6,50€" />
            <MenuItem label="Bibite in Bottiglia" price="3,50€" />
            <MenuItem label="Red Bull / Crodino / Bitter" price="4,00€" />
            <MenuItem label="Amari" price="4,00€" />
            <MenuItem label="Grappe" price="5,00€" />
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-black uppercase mb-6 italic">Food</h3>
            <p className="text-[10px] uppercase tracking-widest opacity-60 mb-4">(A seconda della disponibilità)</p>
            <div className="space-y-1 pl-4 border-l border-[#642d3a]/20">
              <MenuItem label="Brioches" price="1,50€" />
              <MenuItem label="Brioches Piccola" price="1,00€" />
              <MenuItem label="Biscottoni al Cioccolato" price="1,50€" />
              <MenuItem label="Fetta di Torta" price="3,00€" />
            </div>
          </div>
        </div>
        <div className="sticky top-24 space-y-6">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/barmadera.jpg" alt="Caffetteria" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 2. SEZIONE STUZZICHERIE (SFONDO SCURO) */}
      <section id="stuzzicherie" className="bg-[#642d3a] text-[#ffefcc] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-last md:order-first">
            <Image src="/gnocco&salumi.jpg" alt="Stuzzicherie" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-8">Stuzzicherie</h2>
            <div className="space-y-6">
              <MenuItem label="8 pz Gnocco fritto con affettati misti" price="8,00€" sub="3 salumi, 2 crudo, 2 mortadella" dark />
              <MenuItem label="8 pz Gnocco fritto con solo crudo" price="10,00€" sub="8 fette" dark />
              <MenuItem label="4 pz Gnocco fritto" price="3,00€" dark />
              <MenuItem label="Mix Fritto" price="6,00€" sub="Patatine, crocchette di patate, crocchette di pollo, olive ascolane" dark />
              <MenuItem label="Patatine Fritte" price="5,00€" dark />
              <MenuItem label="Tagliere di Formaggi Misti" price="7,00€" dark />
              
              <div className="grid grid-cols-1 gap-x-8 pt-8 border-t border-[#ffefcc]/20">
                <MenuItem label="Erbazzone" price="2,50€" dark />
                <MenuItem label="Toast" price="3,50€" dark />
                <MenuItem label="Pizza" price="3,50€" dark />
                <MenuItem label="Piadina" price="5,00€" dark />
                <MenuItem label="Tramezzino" price="3,50€" dark />
                <MenuItem label="Panino Grande Farcito" price="7,50€" dark />
                <MenuItem label="Panino Medio Farcito" price="3,00€" dark />
                <MenuItem label="Panino Piccolo Farcito" price="2,00€" dark />
                <MenuItem label="Panino Semidolce" price="2,00€" dark />
                <MenuItem label="Gnocco Farcito" price="3,00€" dark />
                <MenuItem label="Filoncino Farcito Integrale ai Cereali" price="4,00€" dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEZIONE APERICENA */}
      <section id="apericena" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter">Apericena</h2>
          <div className="inline-block border-b border-[#642d3a] pb-2 mt-4">
            <p className="text-sm font-bold uppercase tracking-widest">Incluso alla scelta: Analcolico, Calice di Vino, Spritz o Birra alla spina</p>
          </div>
          <p className="text-[10px] opacity-60 uppercase mt-4 font-black tracking-[0.3em]">(Dalle 18:00 alle 22:30)</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ApericenaCard title="Tradizionale" price="12,00€" desc="Tagliere di affettati misti con gnocco fritto, porzione di patatine, crocchette di pollo e crocchette di patate" />
          <ApericenaCard title="Madera" price="14,00€" desc="Tagliere di affettati e formaggi misti, crostini e focaccia, olive, salse di miele e aceto balsamico" />
          <ApericenaCard title="Vegetariano" price="16,00€" desc="Burger vegetariano, olive, formaggio, uovo sodo, zucchine grigliate, flan di verdure, peperoni arrostiti, parmigiana di melanzane" />
        </div>
      </section>

      {/* 4. SEZIONE DRINK & COCKTAIL (SFONDO SCURO) */}
      <section id="drink" className="bg-[#642d3a] text-[#ffefcc] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">Menù dei Drink</h2>
            <h3 className="text-2xl font-light uppercase tracking-[0.4em] opacity-40">Signature</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            <MenuItem label="Coco Blue Sky" price="8,00€" sub="Rum aromatizzato al cocco, blue curacao, panna" dark />
            <MenuItem label="Tropical Spritz" price="6,00€" sub="Aperol, maracuja, prosecco, soda" dark />
            <MenuItem label="Violette Spritz" price="6,00€" sub="Liquore alla violetta, prosecco, soda" dark />
            <MenuItem label="Witch Negroni" price="8,00€" sub="Vermouth rosso, bitter campari, liquore alle erbe" dark />
            <MenuItem label="Lemon Cheesecake" price="9,00€" sub="Limoncello, liquore all'amaretto, succo di limone fresco, zucchero liquido, panna" dark />
            <MenuItem label="Cookies" price="9,00€" sub="Liquore al caffè, crema di whiskey, cioccolato, un caffè espresso" dark />
            <MenuItem label="Pornostar Madera" price="9,00€" sub="Vodka vaniglia, liquore maracuja, lime, zucchero, maracuja fresco" dark />
            <MenuItem label="Mojito Piña Colada" price="9,00€" sub="Lime pestato, zucchero di canna, rum aromatizzato al cocco, menta fresca, succo di ananas" dark />
            <MenuItem label="Maderinha" price="9,00€" sub="Cachaça brasiliana, liquore alla ciliegia, lime pestato, zucchero di canna, melograno, soda" dark />
            <MenuItem label="Suerte" price="9,00€" sub="Rum scuro Havanna 7yr, sciroppo di fragola, fragole, bitter angostura, soda aromatizzata allo zenzero" dark />
            <MenuItem label="Old Mule" price="9,00€" sub="Liquore al melone, liquore alle erbe, succo di limone fresco, soda aromatizzata allo zenzero" dark />
            <MenuItem label="Klab" price="8,00€" sub="Aperol, succo di limone fresco, liquore alle amarene, succo di arancia, zucchero liquido" dark />
            <MenuItem label="Machu Picchu" price="8,00€" sub="Pisco peruviano, cocco, fragole, succo di lime fresco, olii essenziali" dark />
            <MenuItem label="Spring Sour" price="8,00€" sub="Liquore alla violetta, fiori di sambuco, succo di lime fresco, olii essenziali" dark />
            <MenuItem label="Scorpion Kelbos" price="10,00€" sub="Whiskey, rum, succo di lime fresco, maracuja, sciroppo di orzata" dark />
            <MenuItem label="Jam Collins" price="10,00€" sub="Vodka, succo di limone fresco, zucchero liquido, marmellata, soda" dark />
            <MenuItem label="Liquid Marijuana" price="12,00€" sub="Rum, rum speziato, blue curacao, midori, lime, ananas" dark />
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-[#ffefcc]/10 pt-20">
            <div>
              <h4 className="text-3xl font-black uppercase italic mb-8 border-b border-[#ffefcc]/20 pb-4">Iced Tea Family</h4>
              <div className="space-y-4">
                <MenuItem label="Long Island" price="9,00€" sub="Vodka, gin, rum, triple sec, limone, coca cola" dark />
                <MenuItem label="Japanese" price="9,00€" sub="Vodka, gin, rum, midori, limone, lemon" dark />
                <MenuItem label="Miami" price="9,00€" sub="Vodka, gin, rum, blue curacao, limone, lemon" dark />
                <MenuItem label="Passion" price="9,00€" sub="Vodka, gin, rum, passoa, limone, lemon" dark />
                <MenuItem label="Italian" price="9,00€" sub="Vodka, gin, rum, disaronno, limone, lemon" dark />
              </div>
            </div>
            <div>
              <h4 className="text-3xl font-black uppercase italic mb-8 border-b border-[#ffefcc]/20 pb-4">Mule</h4>
              <div className="space-y-4">
                <MenuItem label="Dark 'n Stormy" price="8,00€" dark />
                <MenuItem label="Moscow" price="8,00€" dark />
                <MenuItem label="London" price="8,00€" dark />
                <MenuItem label="Kentucky" price="8,00€" dark />
                <MenuItem label="Mexican" price="8,00€" dark />
                <MenuItem label="Strega" price="8,00€" dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MENU GALLEGGIANTE */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#642d3a] border border-white/10 px-8 py-4 rounded-full shadow-2xl flex items-center gap-10 backdrop-blur-lg">
        <NavIcon icon={<Coffee size={18}/>} label="Colazione" href="#colazione" />
        <NavIcon icon={<Pizza size={18}/>} label="Food" href="#stuzzicherie" />
        <NavIcon icon={<GlassWater size={18}/>} label="Aperitivo" href="#apericena" />
        <NavIcon icon={<Beer size={18}/>} label="Cocktail" href="#drink" />
      </nav>

    </div>
  );
}

// SUPPORT COMPONENTS
function MenuItem({ label, price, sub, dark = false }: any) {
  return (
    <div className="flex flex-col mb-4 group">
      <div className="flex justify-between items-end border-b border-current/10 pb-1 group-hover:border-current/30 transition-colors">
        <span className="font-bold uppercase tracking-wide text-[13px]">{label}</span>
        <span className="font-black italic text-base ml-4">{price}</span>
      </div>
      {sub && <span className="text-[9px] mt-1 uppercase tracking-[0.2em] opacity-40 leading-tight">{sub}</span>}
    </div>
  );
}

function ApericenaCard({ title, price, desc }: any) {
  return (
    <div className="bg-[#642d3a] text-[#ffefcc] p-8 rounded-3xl flex flex-col justify-between hover:bg-[#7a3746] transition-all duration-300 shadow-xl border border-white/5">
      <div>
        <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tighter border-b border-[#ffefcc]/10 pb-2">{title}</h3>
        <p className="text-[11px] uppercase tracking-widest leading-relaxed opacity-70 font-medium">{desc}</p>
      </div>
      <div className="mt-10 text-3xl font-black italic text-right">{price}</div>
    </div>
  );
}

function NavIcon({ icon, label, href }: any) {
  return (
    <a href={href} className="text-[#ffefcc] flex flex-col items-center gap-1 transition-all hover:scale-110 active:scale-90">
      <div className="opacity-80 group-hover:opacity-100">{icon}</div>
      <span className="text-[7px] uppercase font-black tracking-[0.2em]">{label}</span>
    </a>
  );
}