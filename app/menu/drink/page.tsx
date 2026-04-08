import React from 'react';
import { MenuItem, MenuItemWithDesc } from '@/components/MenuComponents';

export default function DrinkPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 md:px-8 w-full">
      {/* Header Pagina - Allineato alla nuova larghezza */}
      <div className="max-w-[1100px] mx-auto mb-16 px-2">
        <h2 className="text-5xl font-black uppercase tracking-tighter italic text-[#642d3a]">
          Drink List
        </h2>
      </div>

      {/* Contenitore Principale Largo */}
      <div className="max-w-[1100px] mx-auto space-y-24">
        
        {/* SIGNATURE - Ora su 2 colonne su Desktop */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-10 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Signature</h3>
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

        {/* GINTONERIA */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Gintoneria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-3">
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


        {/* ICED TEA FAMILY */}
        <section className="pb-20">
          <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Iced Tea Family</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MenuItemWithDesc label="Analcolico alla frutta" price="5,00€" desc="Mix di succhi stagionali, granatina, soda" priceRight />
            <MenuItemWithDesc label="Virgin Mojito" price="6,00€" desc="Lime, zucchero di canna, menta, ginger ale" priceRight />
          </div>
        </section>


        {/* COCKTAIL INTERNAZIONALI - 2 Colonne su Desktop */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-10 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Cocktail</h3>
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

        {/* GRUPPO MIX - 2 Sezioni per riga su Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            <section>
              <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Spritz Family</h3>
              <div className="space-y-4">
                <MenuItemWithDesc label="Spritz" price="5,00€" desc="Prosecco, bitter, soda" priceRight />
                <MenuItemWithDesc label="Hugo" price="6,00€" desc="Sambuco, prosecco, menta" priceRight />
                <MenuItemWithDesc label="Cynar Spritz" price="6,00€" desc="Cynar, prosecco, soda" priceRight />
              </div>
            </section>
            <section>
              <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Sour</h3>
              <div className="space-y-4">
                <MenuItemWithDesc label="Vodka Sour" price="8,00€" desc="Vodka, limone, zucchero" priceRight />
                <MenuItemWithDesc label="Whiskey Sour" price="9,00€" desc="Bourbon, limone, zucchero" priceRight />
                <MenuItemWithDesc label="Amaretto Sour" price="8,00€" desc="Amaretto, limone, zucchero" priceRight />
              </div>
            </section>
            <section>
              <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Mule</h3>
              <div className="space-y-4">
                <MenuItemWithDesc label="Moscow Mule" price="7,00€" desc="Vodka, lime, ginger beer" priceRight />
                <MenuItemWithDesc label="London Mule" price="7,00€" desc="Gin, lime, ginger beer" priceRight />
                <MenuItemWithDesc label="Dark n Stormy" price="8,00€" desc="Rum scuro, lime, ginger beer" priceRight />
              </div>
            </section>
            <section>
              <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Pestati</h3>
              <div className="space-y-4">
                <MenuItemWithDesc label="Mojito" price="7,00€" desc="Rum, menta, lime, zucchero" priceRight />
                <MenuItemWithDesc label="Caipirinha" price="7,00€" desc="Cachaça, lime, zucchero" priceRight />
                <MenuItemWithDesc label="Caipiroska" price="7,00€" desc="Vodka, lime, zucchero" priceRight />
              </div>
            </section>
        </div>

        {/* DISTILLATI - Griglia ottimizzata */}
        <section className="pt-16 border-t border-gray-100">
          <h3 className="text-4xl font-black uppercase mb-16 italic text-[#642d3a] text-center tracking-tighter">I Nostri Distillati</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <div>
              <h4 className="text-xl font-black uppercase mb-6 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Whiskey</h4>
              <div className="space-y-2">
                <MenuItem label="Jack Daniel's" price="6,00€" />
                <MenuItem label="Jameson" price="6,00€" />
                <MenuItem label="Laphroaig 10" price="10,00€" />
                <MenuItem label="Lagavulin 16" price="14,00€" />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-black uppercase mb-6 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Vodka</h4>
              <div className="space-y-2">
                <MenuItem label="Moskovskaya" price="6,00€" />
                <MenuItem label="Belvedere" price="10,00€" />
                <MenuItem label="Grey Goose" price="10,00€" />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-black uppercase mb-6 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Rum</h4>
              <div className="space-y-2">
                <MenuItem label="Havana 7" price="6,00€" />
                <MenuItem label="Diplomatico" price="10,00€" />
                <MenuItem label="Zacapa 23" price="12,00€" />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-black uppercase mb-6 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Liquori</h4>
              <div className="space-y-2">
                <MenuItem label="Amari" price="4,00€" />
                <MenuItem label="Grappe" price="5,00€" />
              </div>
            </div>
          </div>
        </section>

        {/* ANALCOLICI */}
        <section className="pb-20">
          <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Analcolici</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MenuItemWithDesc label="Analcolico alla frutta" price="5,00€" desc="Mix di succhi stagionali, granatina, soda" priceRight />
            <MenuItemWithDesc label="Virgin Mojito" price="6,00€" desc="Lime, zucchero di canna, menta, ginger ale" priceRight />
          </div>
        </section>
        
      </div>
    </div>
  );
}