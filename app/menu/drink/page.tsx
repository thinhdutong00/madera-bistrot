import React from 'react';
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
          
          {/* SIGNATURE */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Signature</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Cosmopoli-Thain" price="10,00€" desc="Vodka, cointreau, lime, cranberry, kaffir lime, lemongrass" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Wild Turkey" price="10,00€" desc="Wild turkey 101, miele, limone, ginger beer" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Balsamic" price="10,00€" desc="Gin, fragola, limone, zucchero, aceto balsamico" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Ginn-Ebro" price="10,00€" desc="Gin, liquore al pino, rosmarino, limone, zucchero" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Basito" price="10,00€" desc="Gin, basilico, lime, zucchero, soda" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Zio Tobia" price="10,00€" desc="Rye whiskey, cynar, cherry brandy" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Ginetto" price="10,00€" desc="Gin, mela verde, cetriolo, lime, zucchero" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Don Vito" price="10,00€" desc="Bourbon, amaretto di saronno, limone, zucchero" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Ciapel" price="10,00€" desc="Bourbon, peach tree, limone, zucchero" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Italian Mule" price="10,00€" desc="Vermouth rosso, lime, ginger beer" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Tiki-Taka" price="12,00€" desc="Mix di Rum, lime, orzata, pompelmo, ananas" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Passion" price="10,00€" desc="Vodka, passion fruit, lime, zucchero" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Zenzy" price="10,00€" desc="Vodka, zenzero fresco, lime, zucchero" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Paloma Madera" price="10,00€" desc="Tequila, agave, lime, soda al pompelmo rosa" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Samba" price="10,00€" desc="Cachaca, mela verde, lime, zucchero" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Smokey Negroni" price="12,00€" desc="Gin, Campari, Vermouth rosso, Mezcal" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Garden Gin" price="10,00€" desc="Gin, sambuco, menta, cetriolo, lime, soda" /></div>
            </div>
          </section>

          {/* SPRITZ */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Spritz Family</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Spritz (Aperol, Campari, Select)" price="5,00€" desc="Prosecco, bitter, soda, arancia" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Hugo" price="6,00€" desc="Prosecco, sciroppo fiori di sambuco, soda, menta" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Cynar Spritz" price="6,00€" desc="Cynar, prosecco, soda, fetta di limone" /></div>
            </div>
          </section>

          {/* SOUR */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Sour</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Vodka Sour" price="8,00€" desc="Vodka, limone, zucchero, albume opzionale" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Gin Sour" price="8,00€" desc="Gin, limone, zucchero, albume opzionale" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Whiskey Sour" price="9,00€" desc="Bourbon, limone, zucchero, albume opzionale" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Midori Sour" price="8,00€" desc="Liquore al melone, limone, zucchero, soda" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Amaretto Sour" price="8,00€" desc="Amaretto di Saronno, limone, zucchero" /></div>
            </div>
          </section>

          {/* ICED TEA */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Iced Tea Family</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Long Island Iced Tea" price="8,00€" desc="Vodka, Gin, Rum, Tequila, Triple sec, limone, zucchero, cola" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Japan Iced Tea" price="8,00€" desc="Vodka, Gin, Rum, Tequila, Midori, limone, zucchero, lemon soda" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Miami Iced Tea" price="8,00€" desc="Vodka, Gin, Rum, Tequila, Blue Curacao, limone, zucchero, lemon soda" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Beverly Hills Iced Tea" price="9,00€" desc="Vodka, Gin, Rum, Tequila, Triple sec, limone, zucchero, Prosecco" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Texas Iced Tea" price="9,00€" desc="Vodka, Gin, Rum, Tequila, Bourbon, limone, zucchero, cola" /></div>
            </div>
          </section>
        </div>

        {/* COLONNA DESTRA */}
        <div className="space-y-16">
          
          {/* INTERNATIONAL */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">International</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Americano" price="7,00€" desc="Vermouth rosso, Campari, soda" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Negroni" price="7,00€" desc="Gin, Vermouth rosso, Campari" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Negroni Sbagliato" price="7,00€" desc="Prosecco, Vermouth rosso, Campari" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Mito" price="7,00€" desc="Vermouth rosso, Campari" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Garibaldi" price="7,00€" desc="Campari, spremuta d'arancia" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Cardinale" price="7,00€" desc="Gin, Vermouth dry, Campari" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Boulevardier" price="8,00€" desc="Bourbon, Vermouth rosso, Campari" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Martini Cocktail" price="9,00€" desc="Gin, Vermouth dry" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Vesper Martini" price="10,00€" desc="Gin, Vodka, Lillet Blanc" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Espresso Martini" price="8,00€" desc="Vodka, liquore caffè, espresso, zucchero" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Cosmopolitan" price="8,00€" desc="Vodka, triple sec, lime, cranberry" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Manhattan" price="9,00€" desc="Rye whiskey, Vermouth rosso, angostura" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Old Fashioned" price="9,00€" desc="Bourbon, zucchero, angostura, soda" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Daiquiri" price="7,00€" desc="Rum bianco, lime, zucchero" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Margarita" price="8,00€" desc="Tequila, triple sec, lime" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Tommy's Margarita" price="9,00€" desc="Tequila, lime, sciroppo d'agave" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Tequila Sunrise" price="7,00€" desc="Tequila, arancia, granatina" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Paloma" price="8,00€" desc="Tequila, lime, soda al pompelmo" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Black Russian" price="7,00€" desc="Vodka, liquore al caffè" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="White Russian" price="8,00€" desc="Vodka, liquore al caffè, panna" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Bloody Mary" price="9,00€" desc="Vodka, pomodoro, spezie" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Aviation" price="10,00€" desc="Gin, maraschino, crème de violette, limone" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Clover Club" price="9,00€" desc="Gin, sciroppo di lampone, limone, albume" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Last Word" price="10,00€" desc="Gin, chartreuse verde, maraschino, lime" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Pisco Sour" price="10,00€" desc="Pisco, limone, zucchero, albume, angostura" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Sidecar" price="10,00€" desc="Cognac, triple sec, limone" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="French 75" price="9,00€" desc="Gin, limone, zucchero, Prosecco" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Gimlet" price="7,00€" desc="Gin, lime cordial" /></div>
            </div>
          </section>

          {/* MULE & PESTATI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Mule</h3>
              <div className="space-y-4">
                <div className="flex justify-between"><MenuItemWithDesc label="Moscow Mule" price="7,00€" /></div>
                <div className="flex justify-between"><MenuItemWithDesc label="London Mule" price="7,00€" /></div>
                <div className="flex justify-between"><MenuItemWithDesc label="Mexican Mule" price="8,00€" /></div>
              </div>
            </section>
            <section>
              <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Pestati</h3>
              <div className="space-y-4">
                <div className="flex justify-between"><MenuItemWithDesc label="Mojito" price="7,00€" /></div>
                <div className="flex justify-between"><MenuItemWithDesc label="Caipirinha" price="7,00€" /></div>
                <div className="flex justify-between"><MenuItemWithDesc label="Caipiroska" price="7,00€" /></div>
              </div>
            </section>
          </div>

          {/* GINTONERIA */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a]">Gintoneria</h3>
            <div className="space-y-1">
              <div className="flex justify-between"><MenuItem label="Gordon's / Tanqueray" price="7,00€" /></div>
              <div className="flex justify-between"><MenuItem label="Bombay Sapphire" price="8,00€" /></div>
              <div className="flex justify-between"><MenuItem label="Hendrick's" price="10,00€" /></div>
              <div className="flex justify-between"><MenuItem label="Gin Mare" price="12,00€" /></div>
              <div className="flex justify-between"><MenuItem label="Monkey 47" price="14,00€" /></div>
              <div className="flex justify-between"><MenuItem label="Bulldog" price="9,00€" /></div>
              <div className="flex justify-between"><MenuItem label="Roku" price="10,00€" /></div>
              <div className="flex justify-between"><MenuItem label="Malfy" price="9,00€" /></div>
            </div>
          </section>

          {/* DISTILLATI */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Distillati</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <div className="flex justify-between"><MenuItem label="Jack Daniel's" price="6,00€" /></div>
                <div className="flex justify-between"><MenuItem label="Wild Turkey 101" price="7,00€" /></div>
                <div className="flex justify-between"><MenuItem label="Lagavulin 16" price="14,00€" /></div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between"><MenuItem label="Belvedere" price="10,00€" /></div>
                <div className="flex justify-between"><MenuItem label="Zacapa 23" price="12,00€" /></div>
                <div className="flex justify-between"><MenuItem label="Amari" price="4,00€" /></div>
              </div>
            </div>
          </section>

          {/* ANALCOLICI */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Analcolici</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Analcolico alla frutta" price="5,00€" desc="Mix di succhi stagionali" /></div>
              <div className="flex justify-between items-start"><MenuItemWithDesc label="Virgin Mojito" price="6,00€" desc="Lime, menta, ginger ale" /></div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}