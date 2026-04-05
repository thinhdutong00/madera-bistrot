import React from 'react';
import { MenuItem, MenuItemWithDesc } from '@/components/MenuComponents';

// Nota: Assicurati che i tuoi componenti MenuItem e MenuItemWithDesc 
// usino flex e justify-between per spingere il prezzo a destra.

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
            <div className="space-y-4">
              <MenuItemWithDesc label="Cosmopoli-Thain" price="10,00€" desc="Vodka, cointreau, lime, cranberry, kaffir lime, lemongrass" />
              <MenuItemWithDesc label="Wild Turkey" price="10,00€" desc="Wild turkey 101, miele, limone, ginger beer" />
              <MenuItemWithDesc label="Balsamic" price="10,00€" desc="Gin, fragola, limone, zucchero, aceto balsamico" />
              <MenuItemWithDesc label="Ginn-Ebro" price="10,00€" desc="Gin, liquore al pino, rosmarino, limone, zucchero" />
              <MenuItemWithDesc label="Basito" price="10,00€" desc="Gin, basilico, lime, zucchero, soda" />
              <MenuItemWithDesc label="Zio Tobia" price="10,00€" desc="Rye whiskey, cynar, cherry brandy" />
              <MenuItemWithDesc label="Ginetto" price="10,00€" desc="Gin, mela verde, cetriolo, lime, zucchero" />
              <MenuItemWithDesc label="Don Vito" price="10,00€" desc="Bourbon, amaretto di saronno, limone, zucchero" />
              <MenuItemWithDesc label="Ciapel" price="10,00€" desc="Bourbon, peach tree, limone, zucchero" />
              <MenuItemWithDesc label="Italian Mule" price="10,00€" desc="Vermouth rosso, lime, ginger beer" />
              <MenuItemWithDesc label="Tiki-Taka" price="12,00€" desc="Mix di Rum, lime, orzata, pompelmo, ananas" />
              <MenuItemWithDesc label="Passion" price="10,00€" desc="Vodka, passion fruit, lime, zucchero" />
              <MenuItemWithDesc label="Zenzy" price="10,00€" desc="Vodka, zenzero fresco, lime, zucchero" />
              <MenuItemWithDesc label="Paloma Madera" price="10,00€" desc="Tequila, agave, lime, soda al pompelmo rosa" />
              <MenuItemWithDesc label="Samba" price="10,00€" desc="Cachaca, mela verde, lime, zucchero" />
              <MenuItemWithDesc label="Smokey Negroni" price="12,00€" desc="Gin, Campari, Vermouth rosso, Mezcal" />
              <MenuItemWithDesc label="Garden Gin" price="10,00€" desc="Gin, sambuco, menta, cetriolo, lime, soda" />
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Spritz Family</h3>
            <div className="space-y-4">
              <MenuItemWithDesc label="Spritz (Aperol, Campari, Select)" price="5,00€" desc="Prosecco, bitter, soda, arancia" />
              <MenuItemWithDesc label="Hugo" price="6,00€" desc="Prosecco, sciroppo fiori di sambuco, soda, menta" />
              <MenuItemWithDesc label="Cynar Spritz" price="6,00€" desc="Cynar, prosecco, soda, fetta di limone" />
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Sour</h3>
            <div className="space-y-4">
              <MenuItemWithDesc label="Vodka Sour" price="8,00€" desc="Vodka, limone, zucchero, albume opzionale" />
              <MenuItemWithDesc label="Gin Sour" price="8,00€" desc="Gin, limone, zucchero, albume opzionale" />
              <MenuItemWithDesc label="Whiskey Sour" price="9,00€" desc="Bourbon, limone, zucchero, albume opzionale" />
              <MenuItemWithDesc label="Midori Sour" price="8,00€" desc="Liquore al melone, limone, zucchero, soda" />
              <MenuItemWithDesc label="Amaretto Sour" price="8,00€" desc="Amaretto di Saronno, limone, zucchero" />
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Iced Tea Family</h3>
            <div className="space-y-4">
              <MenuItemWithDesc label="Long Island Iced Tea" price="8,00€" desc="Vodka, Gin, Rum, Tequila, Triple sec, limone, zucchero, cola" />
              <MenuItemWithDesc label="Japan Iced Tea" price="8,00€" desc="Vodka, Gin, Rum, Tequila, Midori, limone, zucchero, lemon soda" />
              <MenuItemWithDesc label="Miami Iced Tea" price="8,00€" desc="Vodka, Gin, Rum, Tequila, Blue Curacao, limone, zucchero, lemon soda" />
              <MenuItemWithDesc label="Beverly Hills Iced Tea" price="9,00€" desc="Vodka, Gin, Rum, Tequila, Triple sec, limone, zucchero, Prosecco" />
              <MenuItemWithDesc label="Texas Iced Tea" price="9,00€" desc="Vodka, Gin, Rum, Tequila, Bourbon, limone, zucchero, cola" />
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Mule</h3>
            <div className="space-y-4">
              <MenuItemWithDesc label="Moscow Mule" price="7,00€" desc="Vodka, lime fresco, ginger beer" />
              <MenuItemWithDesc label="London Mule" price="7,00€" desc="Gin, lime fresco, ginger beer" />
              <MenuItemWithDesc label="Mexican Mule" price="8,00€" desc="Tequila, lime fresco, ginger beer" />
              <MenuItemWithDesc label="Kentucky Mule" price="8,00€" desc="Bourbon, lime fresco, ginger beer" />
              <MenuItemWithDesc label="Dark n Stormy" price="8,00€" desc="Rum scuro, lime fresco, ginger beer" />
              <MenuItemWithDesc label="Gin Gin Mule" price="8,00€" desc="Gin, menta, lime fresco, ginger beer" />
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Pestati</h3>
            <div className="space-y-4">
              <MenuItemWithDesc label="Mojito" price="7,00€" desc="Rum bianco, menta, lime, zucchero di canna, soda" />
              <MenuItemWithDesc label="Caipirinha" price="7,00€" desc="Cachaça, lime, zucchero di canna" />
              <MenuItemWithDesc label="Caipiroska" price="7,00€" desc="Vodka, lime, zucchero di canna" />
              <MenuItemWithDesc label="Caipiroska alla Fragola" price="8,00€" desc="Vodka, lime, zucchero di canna, fragole fresche" />
              <MenuItemWithDesc label="Caipirissima" price="7,00€" desc="Rum bianco, lime, zucchero di canna" />
              <MenuItemWithDesc label="Black Mojito" price="8,00€" desc="Rum bianco, liquore alla liquirizia, menta, lime, zucchero, soda" />
            </div>
          </section>
        </div>

        {/* COLONNA DESTRA */}
        <div className="space-y-16">
          
          <section>
            <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Gintoneria</h3>
            <div className="grid grid-cols-1 gap-1">
              <MenuItem label="Gordon's / Tanqueray" price="7,00€" />
              <MenuItem label="Bombay Sapphire" price="8,00€" />
              <MenuItem label="Hendrick's" price="10,00€" />
              <MenuItem label="Gin Mare" price="12,00€" />
              <MenuItem label="Monkey 47" price="14,00€" />
              <MenuItem label="Bulldog" price="9,00€" />
              <MenuItem label="Roku" price="10,00€" />
              <MenuItem label="Malfy (Rosa, Arancia, Limone)" price="9,00€" />
              <MenuItem label="Tanqueray 10" price="12,00€" />
              <MenuItem label="Elephant" price="12,00€" />
              <MenuItem label="Nordés" price="10,00€" />
              <MenuItem label="Engine" price="10,00€" />
              <MenuItem label="The Botanist" price="12,00€" />
              <MenuItem label="Brockmans" price="12,00€" />
              <MenuItem label="Opihr" price="10,00€" />
              <MenuItem label="Gin del Professore" price="12,00€" />
              <MenuItem label="Sipsmith" price="10,00€" />
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Cocktail Internazionali</h3>
            <div className="space-y-4">
              <MenuItemWithDesc label="Americano" price="7,00€" desc="Vermouth rosso, Campari, soda" />
              <MenuItemWithDesc label="Negroni" price="7,00€" desc="Gin, Vermouth rosso, Campari" />
              <MenuItemWithDesc label="Negroni Sbagliato" price="7,00€" desc="Prosecco, Vermouth rosso, Campari" />
              <MenuItemWithDesc label="Mito" price="7,00€" desc="Vermouth rosso, Campari" />
              <MenuItemWithDesc label="Garibaldi" price="7,00€" desc="Campari, spremuta d'arancia" />
              <MenuItemWithDesc label="Cardinale" price="7,00€" desc="Gin, Vermouth dry, Campari" />
              <MenuItemWithDesc label="Boulevardier" price="8,00€" desc="Bourbon, Vermouth rosso, Campari" />
              <MenuItemWithDesc label="Martini Cocktail" price="9,00€" desc="Gin, Vermouth dry" />
              <MenuItemWithDesc label="Vesper Martini" price="10,00€" desc="Gin, Vodka, Lillet Blanc" />
              <MenuItemWithDesc label="Espresso Martini" price="8,00€" desc="Vodka, liquore caffè, espresso, zucchero" />
              <MenuItemWithDesc label="Cosmopolitan" price="8,00€" desc="Vodka, triple sec, lime, cranberry" />
              <MenuItemWithDesc label="Manhattan" price="9,00€" desc="Rye whiskey, Vermouth rosso, angostura" />
              <MenuItemWithDesc label="Old Fashioned" price="9,00€" desc="Bourbon, zucchero, angostura, soda" />
              <MenuItemWithDesc label="Daiquiri" price="7,00€" desc="Rum bianco, lime, zucchero" />
              <MenuItemWithDesc label="Margarita" price="8,00€" desc="Tequila, triple sec, lime" />
              <MenuItemWithDesc label="Tommy's Margarita" price="9,00€" desc="Tequila, lime, sciroppo d'agave" />
              <MenuItemWithDesc label="Tequila Sunrise" price="7,00€" desc="Tequila, arancia, granatina" />
              <MenuItemWithDesc label="Paloma" price="8,00€" desc="Tequila, lime, soda al pompelmo" />
              <MenuItemWithDesc label="Black Russian" price="7,00€" desc="Vodka, liquore al caffè" />
              <MenuItemWithDesc label="White Russian" price="8,00€" desc="Vodka, liquore al caffè, panna" />
              <MenuItemWithDesc label="Bloody Mary" price="9,00€" desc="Vodka, pomodoro, spezie" />
              <MenuItemWithDesc label="Aviation" price="10,00€" desc="Gin, maraschino, crème de violette, limone" />
              <MenuItemWithDesc label="Clover Club" price="9,00€" desc="Gin, sciroppo di lampone, limone, albume" />
              <MenuItemWithDesc label="Last Word" price="10,00€" desc="Gin, chartreuse verde, maraschino, lime" />
              <MenuItemWithDesc label="Pisco Sour" price="10,00€" desc="Pisco, limone, zucchero, albume, angostura" />
              <MenuItemWithDesc label="Sidecar" price="10,00€" desc="Cognac, triple sec, limone" />
              <MenuItemWithDesc label="French 75" price="9,00€" desc="Gin, limone, zucchero, Prosecco" />
              <MenuItemWithDesc label="Gimlet" price="7,00€" desc="Gin, lime cordial" />
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h3 className="text-xl font-black uppercase mb-4 italic text-[#642d3a]">Whiskey (7)</h3>
              <div className="space-y-1">
                <MenuItem label="Jack Daniel's" price="6,00€" />
                <MenuItem label="Jameson" price="6,00€" />
                <MenuItem label="Wild Turkey 101" price="7,00€" />
                <MenuItem label="Bulleit Bourbon" price="8,00€" />
                <MenuItem label="Laphroaig 10" price="10,00€" />
                <MenuItem label="Lagavulin 16" price="14,00€" />
                <MenuItem label="Oban 14" price="12,00€" />
              </div>
            </section>
            <section>
              <h3 className="text-xl font-black uppercase mb-4 italic text-[#642d3a]">Vodka (4)</h3>
              <div className="space-y-1">
                <MenuItem label="Moskovskaya" price="6,00€" />
                <MenuItem label="Stolichnaya" price="7,00€" />
                <MenuItem label="Belvedere" price="10,00€" />
                <MenuItem label="Grey Goose" price="10,00€" />
              </div>
            </section>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h3 className="text-xl font-black uppercase mb-4 italic text-[#642d3a]">Rum (4)</h3>
              <div className="space-y-1">
                <MenuItem label="Havana 3 / 7" price="6,00€" />
                <MenuItem label="Diplomatico" price="10,00€" />
                <MenuItem label="Zacapa 23" price="12,00€" />
                <MenuItem label="Matusalem 15" price="9,00€" />
              </div>
            </section>
            <section>
              <h3 className="text-xl font-black uppercase mb-4 italic text-[#642d3a]">Liquori (2)</h3>
              <div className="space-y-1">
                <MenuItem label="Amari Vari" price="4,00€" />
                <MenuItem label="Grappe Selezionate" price="5,00€" />
              </div>
            </section>
          </div>

          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Analcolici</h3>
            <div className="space-y-4">
              <MenuItemWithDesc label="Analcolico alla frutta" price="5,00€" desc="Mix di succhi stagionali, granatina, soda" />
              <MenuItemWithDesc label="Virgin Mojito" price="6,00€" desc="Lime, zucchero di canna, menta, ginger ale" />
              <MenuItemWithDesc label="Shirley Temple" price="6,00€" desc="Ginger ale, granatina, ciliegina al maraschino" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}