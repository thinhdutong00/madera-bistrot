import React from 'react';
import { MenuItem, MenuItemWithDesc } from '@/components/MenuComponents';

export default function DrinkPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 w-full">
      {/* Header Pagina */}
      <div className="max-w-[800px] mx-auto mb-16">
        <h2 className="text-5xl font-black uppercase tracking-tighter italic text-[#642d3a]">
          Drink List
        </h2>
      </div>

      {/* Contenitore Unica Colonna */}
      <div className="max-w-[800px] mx-auto space-y-20">
        
        {/* SIGNATURE */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Signature</h3>
          <div className="space-y-6">
            <MenuItemWithDesc price="10,00€" label="Cosmopoli-Thain" desc="Vodka, cointreau, lime, cranberry, kaffir lime, lemongrass" />
            <MenuItemWithDesc price="10,00€" label="Wild Turkey" desc="Wild turkey 101, miele, limone, ginger beer" />
            <MenuItemWithDesc price="10,00€" label="Balsamic" desc="Gin, fragola, limone, zucchero, aceto balsamico" />
            <MenuItemWithDesc price="10,00€" label="Ginn-Ebro" desc="Gin, liquore al pino, rosmarino, limone, zucchero" />
            <MenuItemWithDesc price="10,00€" label="Basito" desc="Gin, basilico, lime, zucchero, soda" />
            <MenuItemWithDesc price="10,00€" label="Zio Tobia" desc="Rye whiskey, cynar, cherry brandy" />
            <MenuItemWithDesc price="10,00€" label="Ginetto" desc="Gin, mela verde, cetriolo, lime, zucchero" />
            <MenuItemWithDesc price="10,00€" label="Don Vito" desc="Bourbon, amaretto di saronno, limone, zucchero" />
            <MenuItemWithDesc price="10,00€" label="Ciapel" desc="Bourbon, peach tree, limone, zucchero" />
            <MenuItemWithDesc price="10,00€" label="Italian Mule" desc="Vermouth rosso, lime, ginger beer" />
            <MenuItemWithDesc price="12,00€" label="Tiki-Taka" desc="Mix di Rum, lime, orzata, pompelmo, ananas" />
            <MenuItemWithDesc price="10,00€" label="Passion" desc="Vodka, passion fruit, lime, zucchero" />
            <MenuItemWithDesc price="10,00€" label="Zenzy" desc="Vodka, zenzero fresco, lime, zucchero" />
            <MenuItemWithDesc price="10,00€" label="Paloma Madera" desc="Tequila, agave, lime, soda al pompelmo rosa" />
            <MenuItemWithDesc price="10,00€" label="Samba" desc="Cachaca, mela verde, lime, zucchero" />
            <MenuItemWithDesc price="12,00€" label="Smokey Negroni" desc="Gin, Campari, Vermouth rosso, Mezcal" />
            <MenuItemWithDesc price="10,00€" label="Garden Gin" desc="Gin, sambuco, menta, cetriolo, lime, soda" />
          </div>
        </section>

        {/* GINTONERIA */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a] border-l-4 border-[#642d3a] pl-4">Gintoneria</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2">
            <MenuItem price="7,00€" label="Gordon's / Tanqueray" />
            <MenuItem price="8,00€" label="Bombay Sapphire" />
            <MenuItem price="10,00€" label="Hendrick's" />
            <MenuItem price="12,00€" label="Gin Mare" />
            <MenuItem price="14,00€" label="Monkey 47" />
            <MenuItem price="9,00€" label="Bulldog" />
            <MenuItem price="10,00€" label="Roku" />
            <MenuItem price="9,00€" label="Malfy (Rosa, Arancia, Limone)" />
            <MenuItem price="12,00€" label="Tanqueray 10" />
            <MenuItem price="12,00€" label="Elephant" />
            <MenuItem price="10,00€" label="Nordés" />
            <MenuItem price="10,00€" label="Engine" />
            <MenuItem price="12,00€" label="The Botanist" />
            <MenuItem price="12,00€" label="Brockmans" />
            <MenuItem price="10,00€" label="Opihr" />
            <MenuItem price="12,00€" label="Gin del Professore" />
            <MenuItem price="10,00€" label="Sipsmith" />
          </div>
        </section>

        {/* COCKTAIL INTERNAZIONALI */}
        <section>
          <h3 className="text-2xl font-black uppercase mb-8 italic text-[#642d3a]">Cocktail Internazionali</h3>
          <div className="space-y-6">
            <MenuItemWithDesc price="7,00€" label="Americano" desc="Vermouth rosso, Campari, soda" />
            <MenuItemWithDesc price="7,00€" label="Negroni" desc="Gin, Vermouth rosso, Campari" />
            <MenuItemWithDesc price="7,00€" label="Negroni Sbagliato" desc="Prosecco, Vermouth rosso, Campari" />
            <MenuItemWithDesc price="7,00€" label="Mito" desc="Vermouth rosso, Campari" />
            <MenuItemWithDesc price="7,00€" label="Garibaldi" desc="Campari, spremuta d'arancia" />
            <MenuItemWithDesc price="7,00€" label="Cardinale" desc="Gin, Vermouth dry, Campari" />
            <MenuItemWithDesc price="8,00€" label="Boulevardier" desc="Bourbon, Vermouth rosso, Campari" />
            <MenuItemWithDesc price="9,00€" label="Martini Cocktail" desc="Gin, Vermouth dry" />
            <MenuItemWithDesc price="10,00€" label="Vesper Martini" desc="Gin, Vodka, Lillet Blanc" />
            <MenuItemWithDesc price="8,00€" label="Espresso Martini" desc="Vodka, liquore caffè, espresso, zucchero" />
            <MenuItemWithDesc price="8,00€" label="Cosmopolitan" desc="Vodka, triple sec, lime, cranberry" />
            <MenuItemWithDesc price="9,00€" label="Manhattan" desc="Rye whiskey, Vermouth rosso, angostura" />
            <MenuItemWithDesc price="9,00€" label="Old Fashioned" desc="Bourbon, zucchero, angostura, soda" />
            <MenuItemWithDesc price="7,00€" label="Daiquiri" desc="Rum bianco, lime, zucchero" />
            <MenuItemWithDesc price="8,00€" label="Margarita" desc="Tequila, triple sec, lime" />
            <MenuItemWithDesc price="9,00€" label="Tommy's Margarita" desc="Tequila, lime, sciroppo d'agave" />
            <MenuItemWithDesc price="7,00€" label="Tequila Sunrise" desc="Tequila, arancia, granatina" />
            <MenuItemWithDesc price="8,00€" label="Paloma" desc="Tequila, lime, soda al pompelmo" />
            <MenuItemWithDesc price="7,00€" label="Black Russian" desc="Vodka, liquore al caffè" />
            <MenuItemWithDesc price="8,00€" label="White Russian" desc="Vodka, liquore al caffè, panna" />
            <MenuItemWithDesc price="9,00€" label="Bloody Mary" desc="Vodka, pomodoro, spezie" />
            <MenuItemWithDesc price="10,00€" label="Aviation" desc="Gin, maraschino, crème de violette, limone" />
            <MenuItemWithDesc price="9,00€" label="Clover Club" desc="Gin, sciroppo di lampone, limone, albume" />
            <MenuItemWithDesc price="10,00€" label="Last Word" desc="Gin, chartreuse verde, maraschino, lime" />
            <MenuItemWithDesc price="10,00€" label="Pisco Sour" desc="Pisco, limone, zucchero, albume, angostura" />
            <MenuItemWithDesc price="10,00€" label="Sidecar" desc="Cognac, triple sec, limone" />
            <MenuItemWithDesc price="9,00€" label="French 75" desc="Gin, limone, zucchero, Prosecco" />
            <MenuItemWithDesc price="7,00€" label="Gimlet" desc="Gin, lime cordial" />
          </div>
        </section>

        {/* SPRITZ & SOUR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section>
              <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Spritz Family</h3>
              <div className="space-y-4">
                <MenuItemWithDesc price="5,00€" label="Spritz" desc="Prosecco, bitter, soda" />
                <MenuItemWithDesc price="6,00€" label="Hugo" desc="Sambuco, prosecco, menta" />
                <MenuItemWithDesc price="6,00€" label="Cynar Spritz" desc="Cynar, prosecco, soda" />
              </div>
            </section>
            <section>
              <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Sour</h3>
              <div className="space-y-4">
                <MenuItemWithDesc price="8,00€" label="Vodka Sour" desc="Vodka, limone, zucchero" />
                <MenuItemWithDesc price="9,00€" label="Whiskey Sour" desc="Bourbon, limone, zucchero" />
                <MenuItemWithDesc price="8,00€" label="Amaretto Sour" desc="Amaretto, limone, zucchero" />
              </div>
            </section>
        </div>

        {/* MULE & PESTATI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Mule</h3>
            <div className="space-y-4">
              <MenuItemWithDesc price="7,00€" label="Moscow Mule" desc="Vodka, lime, ginger beer" />
              <MenuItemWithDesc price="7,00€" label="London Mule" desc="Gin, lime, ginger beer" />
              <MenuItemWithDesc price="8,00€" label="Dark n Stormy" desc="Rum scuro, lime, ginger beer" />
            </div>
          </section>
          <section>
            <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Pestati</h3>
            <div className="space-y-4">
              <MenuItemWithDesc price="7,00€" label="Mojito" desc="Rum, menta, lime, zucchero" />
              <MenuItemWithDesc price="7,00€" label="Caipirinha" desc="Cachaça, lime, zucchero" />
              <MenuItemWithDesc price="7,00€" label="Caipiroska" desc="Vodka, lime, zucchero" />
            </div>
          </section>
        </div>

        {/* DISTILLATI */}
        <section className="pt-10 border-t border-gray-100">
          <h3 className="text-3xl font-black uppercase mb-10 italic text-[#642d3a] text-center">I Nostri Distillati</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold uppercase text-[#642d3a] mb-3">Whiskey</h4>
              <div className="text-sm space-y-1">
                <MenuItem price="6€" label="Jack Daniel's" />
                <MenuItem price="6€" label="Jameson" />
                <MenuItem price="10€" label="Laphroaig 10" />
                <MenuItem price="14€" label="Lagavulin 16" />
              </div>
            </div>
            <div>
              <h4 className="font-bold uppercase text-[#642d3a] mb-3">Vodka</h4>
              <div className="text-sm space-y-1">
                <MenuItem price="6€" label="Moskovskaya" />
                <MenuItem price="10€" label="Belvedere" />
                <MenuItem price="10€" label="Grey Goose" />
              </div>
            </div>
            <div>
              <h4 className="font-bold uppercase text-[#642d3a] mb-3">Rum</h4>
              <div className="text-sm space-y-1">
                <MenuItem price="6€" label="Havana 7" />
                <MenuItem price="10€" label="Diplomatico" />
                <MenuItem price="12€" label="Zacapa 23" />
              </div>
            </div>
            <div>
              <h4 className="font-bold uppercase text-[#642d3a] mb-3">Extra</h4>
              <div className="text-sm space-y-1">
                <MenuItem price="4€" label="Amari" />
                <MenuItem price="5€" label="Grappe" />
              </div>
            </div>
          </div>
        </section>

        {/* ANALCOLICI */}
<section className="pb-20">
  <h3 className="text-2xl font-black uppercase mb-6 italic text-[#642d3a]">Analcolici</h3>
  <div className="space-y-4">
    
    {/* Usiamo una classe wrapper per invertire l'ordine visivo dei figli del componente */}
    <div className="[&>div]:flex-row-reverse">
      <MenuItemWithDesc 
        label="Analcolico alla frutta" 
        price="5,00€" 
        desc="Mix di succhi stagionali, granatina, soda" 
      />
    </div>

    <div className="[&>div]:flex-row-reverse">
      <MenuItemWithDesc 
        label="Virgin Mojito" 
        price="6,00€" 
        desc="Lime, zucchero di canna, menta, ginger ale" 
      />
    </div>

  </div>
</section>
        
      </div>
    </div>
  );
}