import React from 'react';

// Componente riga drink con descrizione
const DrinkRowWithDesc = ({ label, price, desc }: { label: string; price: string; desc: string }) => (
  <div className="w-full border-b border-gray-100 pb-4">
    <div className="flex justify-between items-end w-full gap-4">
      <span className="font-black text-gray-900 uppercase text-lg tracking-tighter italic leading-none">
        {label}
      </span>
      <span className="font-black text-[#642d3a] whitespace-nowrap leading-none">
        {price}
      </span>
    </div>
    {desc && <p className="text-gray-500 text-sm leading-tight mt-1 lowercase italic">{desc}</p>}
  </div>
);

// Componente riga drink semplice (per Gintoneria/Distillati)
const DrinkRowSimple = ({ label, price }: { label: string; price: string }) => (
  <div className="flex justify-between items-center w-full border-b border-gray-50 py-1.5 gap-4">
    <span className="font-bold text-gray-800 uppercase text-xs tracking-wide">{label}</span>
    <span className="font-black text-[#642d3a] whitespace-nowrap text-sm">{price}</span>
  </div>
);

export default function DrinkPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 w-full">
      <div className="max-w-[1400px] mx-auto mb-16">
        <h2 className="text-5xl font-black uppercase tracking-tighter italic text-[#642d3a]">
          Drink List
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* COLONNA SINISTRA */}
        <div className="space-y-16">
          
          <section>
            <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Signature</h3>
            <div className="space-y-6">
              <DrinkRowWithDesc label="Cosmopoli-Thain" price="10,00€" desc="Vodka, cointreau, lime, cranberry, kaffir lime, lemongrass" />
              <DrinkRowWithDesc label="Wild Turkey" price="10,00€" desc="Wild turkey 101, miele, limone, ginger beer" />
              <DrinkRowWithDesc label="Balsamic" price="10,00€" desc="Gin, fragola, limone, zucchero, aceto balsamico" />
              <DrinkRowWithDesc label="Ginn-Ebro" price="10,00€" desc="Gin, liquore al pino, rosmarino, limone, zucchero" />
              <DrinkRowWithDesc label="Basito" price="10,00€" desc="Gin, basilico, lime, zucchero, soda" />
              <DrinkRowWithDesc label="Zio Tobia" price="10,00€" desc="Rye whiskey, cynar, cherry brandy" />
              <DrinkRowWithDesc label="Ginetto" price="10,00€" desc="Gin, mela verde, cetriolo, lime, zucchero" />
              <DrinkRowWithDesc label="Don Vito" price="10,00€" desc="Bourbon, amaretto di saronno, limone, zucchero" />
              <DrinkRowWithDesc label="Ciapel" price="10,00€" desc="Bourbon, peach tree, limone, zucchero" />
              <DrinkRowWithDesc label="Italian Mule" price="10,00€" desc="Vermouth rosso, lime, ginger beer" />
              <DrinkRowWithDesc label="Tiki-Taka" price="12,00€" desc="Mix di Rum, lime, orzata, pompelmo, ananas" />
              <DrinkRowWithDesc label="Passion" price="10,00€" desc="Vodka, passion fruit, lime, zucchero" />
              <DrinkRowWithDesc label="Zenzy" price="10,00€" desc="Vodka, zenzero fresco, lime, zucchero" />
              <DrinkRowWithDesc label="Paloma Madera" price="10,00€" desc="Tequila, agave, lime, soda al pompelmo rosa" />
              <DrinkRowWithDesc label="Samba" price="10,00€" desc="Cachaca, mela verde, lime, zucchero" />
              <DrinkRowWithDesc label="Smokey Negroni" price="12,00€" desc="Gin, Campari, Vermouth rosso, Mezcal" />
              <DrinkRowWithDesc label="Garden Gin" price="10,00€" desc="Gin, sambuco, menta, cetriolo, lime, soda" />
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Spritz Family</h3>
            <div className="space-y-6">
              <DrinkRowWithDesc label="Spritz (Aperol, Campari, Select)" price="5,00€" desc="Prosecco, bitter, soda, arancia" />
              <DrinkRowWithDesc label="Hugo" price="6,00€" desc="Prosecco, sciroppo fiori di sambuco, soda, menta" />
              <DrinkRowWithDesc label="Cynar Spritz" price="6,00€" desc="Cynar, prosecco, soda, fetta di limone" />
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Sour</h3>
            <div className="space-y-6">
              <DrinkRowWithDesc label="Vodka Sour" price="8,00€" desc="Vodka, limone, zucchero, albume opzionale" />
              <DrinkRowWithDesc label="Gin Sour" price="8,00€" desc="Gin, limone, zucchero, albume opzionale" />
              <DrinkRowWithDesc label="Whiskey Sour" price="9,00€" desc="Bourbon, limone, zucchero, albume opzionale" />
              <DrinkRowWithDesc label="Midori Sour" price="8,00€" desc="Liquore al melone, limone, zucchero, soda" />
              <DrinkRowWithDesc label="Amaretto Sour" price="8,00€" desc="Amaretto di Saronno, limone, zucchero" />
            </div>
          </section>
        </div>

        {/* COLONNA DESTRA */}
        <div className="space-y-16">
          
          <section>
            <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Gintoneria</h3>
            <div className="grid grid-cols-1 gap-1">
              <DrinkRowSimple label="Gordon's / Tanqueray" price="7,00€" />
              <DrinkRowSimple label="Bombay Sapphire" price="8,00€" />
              <DrinkRowSimple label="Hendrick's" price="10,00€" />
              <DrinkRowSimple label="Gin Mare" price="12,00€" />
              <DrinkRowSimple label="Monkey 47" price="14,00€" />
              <DrinkRowSimple label="Bulldog" price="9,00€" />
              <DrinkRowSimple label="Roku" price="10,00€" />
              <DrinkRowSimple label="Malfy (Rosa, Arancia, Limone)" price="9,00€" />
              <DrinkRowSimple label="Tanqueray 10" price="12,00€" />
              <DrinkRowSimple label="Elephant" price="12,00€" />
              <DrinkRowSimple label="Nordés" price="10,00€" />
              <DrinkRowSimple label="Engine" price="10,00€" />
              <DrinkRowSimple label="The Botanist" price="12,00€" />
              <DrinkRowSimple label="Brockmans" price="12,00€" />
              <DrinkRowSimple label="Opihr" price="10,00€" />
              <DrinkRowSimple label="Gin del Professore" price="12,00€" />
              <DrinkRowSimple label="Sipsmith" price="10,00€" />
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Cocktail Internazionali</h3>
            <div className="space-y-4">
              <DrinkRowWithDesc label="Americano" price="7,00€" desc="Vermouth rosso, Campari, soda" />
              <DrinkRowWithDesc label="Negroni" price="7,00€" desc="Gin, Vermouth rosso, Campari" />
              <DrinkRowWithDesc label="Negroni Sbagliato" price="7,00€" desc="Prosecco, Vermouth rosso, Campari" />
              <DrinkRowWithDesc label="Boulevardier" price="8,00€" desc="Bourbon, Vermouth rosso, Campari" />
              <DrinkRowWithDesc label="Espresso Martini" price="8,00€" desc="Vodka, liquore caffè, espresso, zucchero" />
              <DrinkRowWithDesc label="Cosmopolitan" price="8,00€" desc="Vodka, triple sec, lime, cranberry" />
              <DrinkRowWithDesc label="Old Fashioned" price="9,00€" desc="Bourbon, zucchero, angostura, soda" />
              <DrinkRowWithDesc label="Margarita" price="8,00€" desc="Tequila, triple sec, lime" />
              <DrinkRowWithDesc label="Paloma" price="8,00€" desc="Tequila, lime, soda al pompelmo" />
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h3 className="text-xl font-black uppercase mb-4 italic text-[#642d3a]">Whiskey</h3>
              <div className="space-y-1">
                <DrinkRowSimple label="Jack Daniel's" price="6,00€" />
                <DrinkRowSimple label="Jameson" price="6,00€" />
                <DrinkRowSimple label="Wild Turkey 101" price="7,00€" />
                <DrinkRowSimple label="Lagavulin 16" price="14,00€" />
              </div>
            </section>
            <section>
              <h3 className="text-xl font-black uppercase mb-4 italic text-[#642d3a]">Vodka</h3>
              <div className="space-y-1">
                <DrinkRowSimple label="Moskovskaya" price="6,00€" />
                <DrinkRowSimple label="Belvedere" price="10,00€" />
                <DrinkRowSimple label="Grey Goose" price="10,00€" />
              </div>
            </section>
          </div>

          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Analcolici</h3>
            <div className="space-y-6">
              <DrinkRowWithDesc label="Analcolico alla frutta" price="5,00€" desc="Mix di succhi stagionali, granatina, soda" />
              <DrinkRowWithDesc label="Virgin Mojito" price="6,00€" desc="Lime, zucchero di canna, menta, ginger ale" />
              <DrinkRowWithDesc label="Shirley Temple" price="6,00€" desc="Ginger ale, granatina, ciliegina al maraschino" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}