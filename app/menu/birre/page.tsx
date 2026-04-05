import React from 'react';
import { MenuItem } from '@/components/MenuComponents';

export default function BirrePage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 w-full">
      <div className="max-w-[1400px] mx-auto mb-16">
        <h2 className="text-4xl font-black uppercase tracking-tighter italic text-[#642d3a]">
          Birre
        </h2>
        <div className="mt-8 space-y-1 pl-4 border-l-2 border-[#642d3a]/20">
          <MenuItem label="Birra alla spina piccola" price="3,50€" />
          <MenuItem label="Birra alla spina media" price="5,00€" />
        </div>
      </div>
    </div>
  );
}