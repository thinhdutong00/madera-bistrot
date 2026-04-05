import React from 'react';
import { MenuItem, MenuItemWithDesc } from '@/components/MenuComponents';

export default function DrinkPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 w-full">
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl font-black uppercase tracking-tighter italic text-[#642d3a]">
          Drink List
        </h2>
      </div>

      {/* Colonna Singola */}
      <div className="max-w-3xl mx-auto space-y-16">
        
        {/* SIGNATURE */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Signature</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Cosmopoli-Thain" price="10,00€" desc="Vodka, cointreau, lime, cranberry, kaffir lime, lemongrass" /><span className="font-bold text-[#642d3a] pt-1">10,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Wild Turkey" price="10,00€" desc="Wild turkey 101, miele, limone, ginger beer" /><span className="font-bold text-[#642d3a] pt-1">10,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Balsamic" price="10,00€" desc="Gin, fragola, limone, zucchero, aceto balsamico" /><span className="font-bold text-[#642d3a] pt-1">10,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Ginn-Ebro" price="10,00€" desc="Gin, liquore al pino, rosmarino, limone, zucchero" /><span className="font-bold text-[#642d3a] pt-1">10,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Basito" price="10,00€" desc="Gin, basilico, lime, zucchero, soda" /><span className="font-bold text-[#642d3a] pt-1">10,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Zio Tobia" price="10,00€" desc="Rye whiskey, cynar, cherry brandy" /><span className="font-bold text-[#642d3a] pt-1">10,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Ginetto" price="10,00€" desc="Gin, mela verde, cetriolo, lime, zucchero" /><span className="font-bold text-[#642d3a] pt-1">10,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Don Vito" price="10,00€" desc="Bourbon, amaretto di saronno, limone, zucchero" /><span className="font-bold text-[#642d3a] pt-1">10,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Ciapel" price="10,00€" desc="Bourbon, peach tree, limone, zucchero" /><span className="font-bold text-[#642d3a] pt-1">10,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Italian Mule" price="10,00€" desc="Vermouth rosso, lime, ginger beer" /><span className="font-bold text-[#642d3a] pt-1">10,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Tiki-Taka" price="12,00€" desc="Mix di Rum, lime, orzata, pompelmo, ananas" /><span className="font-bold text-[#642d3a] pt-1">12,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Passion" price="10,00€" desc="Vodka, passion fruit, lime, zucchero" /><span className="font-bold text-[#642d3a] pt-1">10,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Zenzy" price="10,00€" desc="Vodka, zenzero fresco, lime, zucchero" /><span className="font-bold text-[#642d3a] pt-1">10,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Paloma Madera" price="10,00€" desc="Tequila, agave, lime, soda al pompelmo rosa" /><span className="font-bold text-[#642d3a] pt-1">10,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Samba" price="10,00€" desc="Cachaca, mela verde, lime, zucchero" /><span className="font-bold text-[#642d3a] pt-1">10,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Smokey Negroni" price="12,00€" desc="Gin, Campari, Vermouth rosso, Mezcal" /><span className="font-bold text-[#642d3a] pt-1">12,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Garden Gin" price="10,00€" desc="Gin, sambuco, menta, cetriolo, lime, soda" /><span className="font-bold text-[#642d3a] pt-1">10,00€</span></div>
          </div>
        </section>

        {/* SPRITZ FAMILY */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Spritz Family</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Spritz (Aperol, Campari, Select)" price="5,00€" desc="Prosecco, bitter, soda, arancia" /><span className="font-bold text-[#642d3a] pt-1">5,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Hugo" price="6,00€" desc="Prosecco, sciroppo fiori di sambuco, soda, menta" /><span className="font-bold text-[#642d3a] pt-1">6,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Cynar Spritz" price="6,00€" desc="Cynar, prosecco, soda, fetta di limone" /><span className="font-bold text-[#642d3a] pt-1">6,00€</span></div>
          </div>
        </section>

        {/* SOUR */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Sour</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Vodka Sour" price="8,00€" desc="Vodka, limone, zucchero, albume opzionale" /><span className="font-bold text-[#642d3a] pt-1">8,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Gin Sour" price="8,00€" desc="Gin, limone, zucchero, albume opzionale" /><span className="font-bold text-[#642d3a] pt-1">8,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Whiskey Sour" price="9,00€" desc="Bourbon, limone, zucchero, albume opzionale" /><span className="font-bold text-[#642d3a] pt-1">9,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Midori Sour" price="8,00€" desc="Liquore al melone, limone, zucchero, soda" /><span className="font-bold text-[#642d3a] pt-1">8,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Amaretto Sour" price="8,00€" desc="Amaretto di Saronno, limone, zucchero" /><span className="font-bold text-[#642d3a] pt-1">8,00€</span></div>
          </div>
        </section>

        {/* ICED TEA FAMILY */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Iced Tea Family</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Long Island Iced Tea" price="8,00€" desc="Vodka, Gin, Rum, Tequila, Triple sec, limone, zucchero, cola" /><span className="font-bold text-[#642d3a] pt-1">8,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Japan Iced Tea" price="8,00€" desc="Vodka, Gin, Rum, Tequila, Midori, limone, zucchero, lemon soda" /><span className="font-bold text-[#642d3a] pt-1">8,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Miami Iced Tea" price="8,00€" desc="Vodka, Gin, Rum, Tequila, Blue Curacao, limone, zucchero, lemon soda" /><span className="font-bold text-[#642d3a] pt-1">8,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Beverly Hills Iced Tea" price="9,00€" desc="Vodka, Gin, Rum, Tequila, Triple sec, limone, zucchero, Prosecco" /><span className="font-bold text-[#642d3a] pt-1">9,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Texas Iced Tea" price="9,00€" desc="Vodka, Gin, Rum, Tequila, Bourbon, limone, zucchero, cola" /><span className="font-bold text-[#642d3a] pt-1">9,00€</span></div>
          </div>
        </section>

        {/* MULE */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Mule</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Moscow Mule" price="7,00€" desc="Vodka, lime fresco, ginger beer" /><span className="font-bold text-[#642d3a] pt-1">7,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="London Mule" price="7,00€" desc="Gin, lime fresco, ginger beer" /><span className="font-bold text-[#642d3a] pt-1">7,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Mexican Mule" price="8,00€" desc="Tequila, lime fresco, ginger beer" /><span className="font-bold text-[#642d3a] pt-1">8,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Kentucky Mule" price="8,00€" desc="Bourbon, lime fresco, ginger beer" /><span className="font-bold text-[#642d3a] pt-1">8,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Dark n Stormy" price="8,00€" desc="Rum scuro, lime fresco, ginger beer" /><span className="font-bold text-[#642d3a] pt-1">8,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Gin Gin Mule" price="8,00€" desc="Gin, menta, lime fresco, ginger beer" /><span className="font-bold text-[#642d3a] pt-1">8,00€</span></div>
          </div>
        </section>

        {/* PESTATI */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Pestati</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Mojito" price="7,00€" desc="Rum bianco, menta, lime, zucchero di canna, soda" /><span className="font-bold text-[#642d3a] pt-1">7,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Caipirinha" price="7,00€" desc="Cachaça, lime, zucchero di canna" /><span className="font-bold text-[#642d3a] pt-1">7,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Caipiroska" price="7,00€" desc="Vodka, lime, zucchero di canna" /><span className="font-bold text-[#642d3a] pt-1">7,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Caipiroska alla Fragola" price="8,00€" desc="Vodka, lime, zucchero di canna, fragole fresche" /><span className="font-bold text-[#642d3a] pt-1">8,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Caipirissima" price="7,00€" desc="Rum bianco, lime, zucchero di canna" /><span className="font-bold text-[#642d3a] pt-1">7,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Black Mojito" price="8,00€" desc="Rum bianco, liquore alla liquirizia, menta, lime, zucchero, soda" /><span className="font-bold text-[#642d3a] pt-1">8,00€</span></div>
          </div>
        </section>

        {/* GINTONERIA */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Gintoneria</h3>
          <div className="space-y-4">
            {[
              "Gordon's / Tanqueray", "Bombay Sapphire", "Hendrick's", "Gin Mare", "Monkey 47", 
              "Bulldog", "Roku", "Malfy (Rosa, Arancia, Limone)", "Tanqueray 10", "Elephant", 
              "Nordés", "Engine", "The Botanist", "Brockmans", "Opihr", "Gin del Professore", "Sipsmith"
            ].map((name, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-1">
                <span className="font-bold uppercase text-gray-800">{name}</span>
                <span className="font-black text-[#642d3a]">Da 7,00€</span>
              </div>
            ))}
          </div>
        </section>

        {/* COCKTAIL INTERNAZIONALI */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Cocktail Internazionali</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Americano" price="7,00€" desc="Vermouth rosso, Campari, soda" /><span className="font-bold text-[#642d3a] pt-1">7,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Negroni" price="7,00€" desc="Gin, Vermouth rosso, Campari" /><span className="font-bold text-[#642d3a] pt-1">7,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Negroni Sbagliato" price="7,00€" desc="Prosecco, Vermouth rosso, Campari" /><span className="font-bold text-[#642d3a] pt-1">7,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Old Fashioned" price="9,00€" desc="Bourbon, zucchero, angostura, soda" /><span className="font-bold text-[#642d3a] pt-1">9,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Espresso Martini" price="8,00€" desc="Vodka, liquore caffè, espresso, zucchero" /><span className="font-bold text-[#642d3a] pt-1">8,00€</span></div>
            {/* ... seguendo lo stesso pattern flex per gli altri 23 drink ... */}
          </div>
        </section>

        {/* DISTILLATI */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Distillati</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-100 pb-1"><span className="font-bold uppercase text-gray-800">Jack Daniel's</span><span className="font-black text-[#642d3a]">6,00€</span></div>
            <div className="flex justify-between border-b border-gray-100 pb-1"><span className="font-bold uppercase text-gray-800">Lagavulin 16</span><span className="font-black text-[#642d3a]">14,00€</span></div>
            <div className="flex justify-between border-b border-gray-100 pb-1"><span className="font-bold uppercase text-gray-800">Havana 7</span><span className="font-black text-[#642d3a]">6,00€</span></div>
          </div>
        </section>

        {/* ANALCOLICI */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Analcolici</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Analcolico alla frutta" price="5,00€" desc="Mix di succhi stagionali, granatina, soda" /><span className="font-bold text-[#642d3a] pt-1">5,00€</span></div>
            <div className="flex justify-between items-start gap-4"><MenuItemWithDesc label="Virgin Mojito" price="6,00€" desc="Lime, zucchero di canna, menta, ginger ale" /><span className="font-bold text-[#642d3a] pt-1">6,00€</span></div>
          </div>
        </section>

      </div>
    </div>
  );
}