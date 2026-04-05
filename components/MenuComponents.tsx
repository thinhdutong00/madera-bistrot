import React from 'react';
import Image from 'next/image';

export function MenuItem({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex justify-between items-end group py-1">
      <span className="font-bold uppercase tracking-wide text-sm text-[#642d3a]">{label}</span>
      <div className="flex-grow mx-4 border-b border-[#642d3a]/10 mb-1" />
      <span className="font-black italic text-lg text-[#642d3a]">{price}</span>
    </div>
  );
}

export function MenuItemWithDesc({ label, price, desc }: { label: string; price: string; desc?: string }) {
  return (
    <div className="group py-2 text-right">
      <div className="flex justify-between items-end gap-4">
        <span className="font-black italic text-lg text-[#642d3a] order-1">{price}</span>
        <div className="flex-grow mb-1 border-b border-[#642d3a]/10 order-2" />
        <span className="font-bold uppercase tracking-wide text-sm text-[#642d3a] order-3">{label}</span>
      </div>
      {desc && <p className="text-[10px] uppercase tracking-widest opacity-60 text-[#642d3a] mt-1">{desc}</p>}
    </div>
  );
}

export function ApericenaCard({ image, title, price, desc }: { image: string; title: string; price: string; desc: string }) {
  return (
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl border border-[#642d3a]/5">
      <div className="relative h-64 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-8 flex flex-col h-full text-center">
        <div className="flex justify-center items-baseline gap-2 mb-4">
          <h3 className="text-2xl font-black uppercase italic text-[#642d3a]">{title}</h3>
          <span className="text-xl font-bold text-[#642d3a] opacity-80">— {price}</span>
        </div>
        <p className="text-sm leading-relaxed text-[#642d3a] opacity-70 uppercase tracking-wider font-medium">{desc}</p>
      </div>
    </div>
  );
}