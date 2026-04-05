import React from 'react';
import Image from 'next/image';
import { MenuItem, MenuItemWithDesc } from '@/components/MenuComponents';

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
          
          {/* SIGNATURE (17 DRINK) */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Signature</h3>
            <div className="space-y-1">
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

          {/* SPRITZ (3 DRINK) */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Spritz Family</h3>
            <div className="space-y-1">
              <MenuItem label="Spritz (Aperol, Campari, Select)" price="5,00€" />
              <MenuItem label="Hugo" price="6,00€" />
              <MenuItem label="Cynar Spritz" price="6,00€" />
            </div>
          </section>

          {/* SOUR (5 DRINK) */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Sour</h3>
            <div className="space-y-1">
              <MenuItem label="Vodka Sour" price="8,00€" />
              <MenuItem label="Gin Sour" price="8,00€" />
              <MenuItem label="Whiskey Sour" price="9,00€" />
              <MenuItem label="Midori Sour" price="8,00€" />
              <MenuItem label="Amaretto Sour" price="8,00€" />
            </div>
          </section>

          {/* ICED TEA FAMILY (5 DRINK) */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Iced Tea Family</h3>
            <div className="space-y-1">
              <MenuItem label="Long Island Iced Tea" price="8,00€" />
              <MenuItem label="Japan Iced Tea" price="8,00€" />
              <MenuItem label="Miami Iced Tea" price="8,00€" />
              <MenuItem label="Beverly Hills Iced Tea" price="9,00€" />
              <MenuItem label="Texas Iced Tea" price="9,00€" />
            </div>
          </section>

          {/* MULE (6 DRINK) */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Mule</h3>
            <div className="space-y-1">
              <MenuItem label="Moscow Mule" price="7,00€" />
              <MenuItem label="London Mule" price="7,00€" />
              <MenuItem label="Mexican Mule" price="8,00€" />
              <MenuItem label="Kentucky Mule" price="8,00€" />
              <MenuItem label="Dark n Stormy" price="8,00€" />
              <MenuItem label="Gin Gin Mule" price="8,00€" />
            </div>
          </section>

          {/* PESTATI (6 DRINK) */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Pestati</h3>
            <div className="space-y-1">
              <MenuItem label="Mojito" price="7,00€" />
              <MenuItem label="Caipirinha" price="7,00€" />
              <MenuItem label="Caipiroska" price="7,00€" />
              <MenuItem label="Caipiroska alla Fragola" price="8,00€" />
              <MenuItem label="Caipirissima" price="7,00€" />
              <MenuItem label="Black Mojito" price="8,00€" />
            </div>
          </section>
        </div>

        {/* COLONNA DESTRA */}
        <div className="space-y-16">
          
          {/* GINTONERIA (17 DRINK) */}
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

          {/* COCKTAIL (28 DRINK) */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Cocktail Internazionali</h3>
            <div className="grid grid-cols-1 gap-1 text-sm">
              <MenuItem label="Americano" price="7,00€" />
              <MenuItem label="Negroni" price="7,00€" />
              <MenuItem label="Negroni Sbagliato" price="7,00€" />
              <MenuItem label="Mito" price="7,00€" />
              <MenuItem label="Garibaldi" price="7,00€" />
              <MenuItem label="Cardinale" price="7,00€" />
              <MenuItem label="Boulevardier" price="8,00€" />
              <MenuItem label="Martini Cocktail" price="9,00€" />
              <MenuItem label="Vesper Martini" price="10,00€" />
              <MenuItem label="Espresso Martini" price="8,00€" />
              <MenuItem label="Cosmopolitan" price="8,00€" />
              <MenuItem label="Manhattan" price="9,00€" />
              <MenuItem label="Old Fashioned" price="9,00€" />
              <MenuItem label="Daiquiri" price="7,00€" />
              <MenuItem label="Margarita" price="8,00€" />
              <MenuItem label="Tommy's Margarita" price="9,00€" />
              <MenuItem label="Tequila Sunrise" price="7,00€" />
              <MenuItem label="Paloma" price="8,00€" />
              <MenuItem label="Black Russian" price="7,00€" />
              <MenuItem label="White Russian" price="8,00€" />
              <MenuItem label="Bloody Mary" price="9,00€" />
              <MenuItem label="Aviation" price="10,00€" />
              <MenuItem label="Clover Club" price="9,00€" />
              <MenuItem label="Last Word" price="10,00€" />
              <MenuItem label="Pisco Sour" price="10,00€" />
              <MenuItem label="Sidecar" price="10,00€" />
              <MenuItem label="French 75" price="9,00€" />
              <MenuItem label="Gimlet" price="7,00€" />
            </div>
          </section>

          {/* WHISKEY, VODKA, RUM (DISTILLATI) */}
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

          {/* ANALCOLICI (3 DRINK) */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Analcolici</h3>
            <div className="space-y-1">
              <MenuItem label="Analcolico alla frutta" price="5,00€" />
              <MenuItem label="Virgin Mojito" price="6,00€" />
              <MenuItem label="Shirley Temple" price="6,00€" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}