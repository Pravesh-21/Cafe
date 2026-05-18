'use client';

import { useState } from 'react';
import { useScrollAnim } from '@/components/useScrollAnim';
import Link from 'next/link';

export default function BlendsPage() {
  // Dynamic Credits Calculator States
  const [calculatorVolume, setCalculatorVolume] = useState<number>(2);
  const [calculatorSpec, setCalculatorSpec] = useState<string>('MASS');

  const titleRef = useScrollAnim({ y: 30, duration: 1 });
  const gridRef = useScrollAnim({ y: 40, stagger: 0.2 });
  const calcTextRef = useScrollAnim({ y: 30, duration: 1 });
  const calcFormRef = useScrollAnim({ y: 40, duration: 1.2 });
  const calcCardsRef = useScrollAnim({ y: 50, duration: 1.2, stagger: 0.1 });

  return (
    <main className="relative min-h-screen bg-[#1E1815] text-[#FAF7F0] overflow-hidden pt-24">
      {/* Signature Roasts Grid Section */}
      <section className="relative px-6 md:px-12 lg:px-24 py-24 flex flex-col justify-center overflow-hidden">
        {/* Massive Background Text */}
        <div className="absolute -top-10 left-10 font-display text-[20vw] font-black text-white/[0.01] uppercase select-none pointer-events-none leading-none">
          Blends
        </div>

        <div className="max-w-7xl w-full mx-auto flex flex-col items-center relative z-10">
          <div ref={titleRef} className="flex flex-col items-center text-center mb-20">
            <div className="font-sans text-[11px] uppercase tracking-[0.2em] font-black text-[#FAF7F0]/60 border border-white/10 rounded-full px-4 py-1.5 mb-6 bg-white/5 backdrop-blur-sm shadow-sm">
              Our Crops
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter uppercase max-w-4xl leading-[0.9] text-white">
              Roasts That Keep <span className="font-serif italic font-normal normal-case text-[#E6C84F]">Guests</span> <br />Coming Back.
            </h2>
          </div>

          <div ref={gridRef} className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Card 1: THE VOID */}
            <div className="w-full bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden flex flex-col h-[580px] shadow-2xl transition-all hover:translate-y-[-10px] duration-700 group hover:border-white/20">
              <div className="h-72 w-full overflow-hidden relative p-4">
                <div className="w-full h-full overflow-hidden rounded-t-[100px] rounded-b-xl relative">
                  <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80" alt="Dark Roast" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1815]/50 to-transparent" />
                </div>
                <span className="absolute top-8 right-8 bg-[#B5654A] text-white text-[9px] uppercase font-black tracking-widest py-1.5 px-3 rounded-full backdrop-blur-sm shadow-lg">LIMITED HARVEST</span>
              </div>
              
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-2xl font-black mb-3 text-white">THE VOID</h3>
                  <p className="font-sans text-xs text-[#FAF7F0]/60 leading-relaxed mb-4">
                    Intense. Unforgiving. A deep volcanic roast engineered with heavy structure and notes of dark molasses and carbon.
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-white/5 pt-5">
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-[#FAF7F0]/40 block mb-1">Price / Bag</span>
                    <span className="font-sans text-sm font-black text-[#E6C84F]">1 CREDIT</span>
                  </div>
                  <Link href="/access" className="bg-white/5 hover:bg-[#E6C84F] hover:text-[#1E1815] text-white p-3 rounded-full transition-all duration-300 border border-white/10 hover:border-[#E6C84F] shadow-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: THE MASS */}
            <div className="w-full bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden flex flex-col h-[580px] shadow-2xl transition-all hover:translate-y-[-10px] duration-700 group hover:border-white/20">
              <div className="h-72 w-full overflow-hidden relative p-4">
                <div className="w-full h-full overflow-hidden rounded-t-[100px] rounded-b-xl relative">
                  <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" alt="Medium Roast" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1815]/50 to-transparent" />
                </div>
                <span className="absolute top-8 right-8 bg-[#E6C84F] text-[#1E1815] text-[9px] uppercase font-black tracking-widest py-1.5 px-3 rounded-full backdrop-blur-sm shadow-lg">POPULAR</span>
              </div>
              
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-2xl font-black mb-3 text-white">THE MASS</h3>
                  <p className="font-sans text-xs text-[#FAF7F0]/60 leading-relaxed mb-4">
                    Balanced. Structured. The perfect equilibrium between single-origin body and crisp stone-fruit acidity.
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-white/5 pt-5">
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-[#FAF7F0]/40 block mb-1">Price / Bag</span>
                    <span className="font-sans text-sm font-black text-[#E6C84F]">1 CREDIT</span>
                  </div>
                  <Link href="/access" className="bg-white/5 hover:bg-[#E6C84F] hover:text-[#1E1815] text-white p-3 rounded-full transition-all duration-300 border border-white/10 hover:border-[#E6C84F] shadow-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: THE SINGULARITY */}
            <div className="w-full bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden flex flex-col h-[580px] shadow-2xl transition-all hover:translate-y-[-10px] duration-700 group hover:border-white/20">
              <div className="h-72 w-full overflow-hidden relative p-4">
                <div className="w-full h-full overflow-hidden rounded-t-[100px] rounded-b-xl relative">
                  <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80" alt="Light Roast" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1815]/50 to-transparent" />
                </div>
                <span className="absolute top-8 right-8 bg-white/10 text-white text-[9px] uppercase font-black tracking-widest py-1.5 px-3 rounded-full backdrop-blur-sm shadow-lg">EXCLUSIVE</span>
              </div>
              
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-2xl font-black mb-3 text-white">THE SINGULARITY</h3>
                  <p className="font-sans text-xs text-[#FAF7F0]/60 leading-relaxed mb-4">
                    Complex. Elusive. Floral jasmine notes and clean tea-like finish harvested from certified high-altitude microlots.
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-white/5 pt-5">
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-[#FAF7F0]/40 block mb-1">Price / Bag</span>
                    <span className="font-sans text-sm font-black text-[#E6C84F]">1.5 CREDITS</span>
                  </div>
                  <Link href="/access" className="bg-white/5 hover:bg-[#E6C84F] hover:text-[#1E1815] text-white p-3 rounded-full transition-all duration-300 border border-white/10 hover:border-[#E6C84F] shadow-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Subscription Calculator */}
      <section className="relative min-h-[90vh] grid grid-cols-1 lg:grid-cols-12 bg-[#FAF7F0] overflow-hidden text-[#1E1815]">
        {/* Left Column: Selector */}
        <div className="lg:col-span-7 p-8 md:p-16 lg:p-24 flex flex-col justify-center border-r border-[#1E1815]/5">
          <div ref={calcTextRef}>
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-black text-[#B5654A] mb-4 block">
              MEMBERSHIP
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 leading-none">
              CREDITS SUBSCRIPTION CALCULATOR
            </h2>
            <p className="font-sans text-lg text-[#1E1815]/70 mb-12 max-w-xl leading-relaxed">
              Choose your monthly volume and beans profile. Build your perfect coffee schedule dynamically.
            </p>
          </div>

          <div ref={calcFormRef} className="flex flex-col gap-8 max-w-lg">
            {/* Input 1 */}
            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs uppercase tracking-widest text-[#1E1815]/55 font-black">HOW MUCH COFFEE DO YOU DRINK?</label>
              <select
                value={calculatorVolume}
                onChange={(e) => setCalculatorVolume(Number(e.target.value))}
                className="bg-[#FAF7F0] border-b-2 border-[#1E1815] py-3 text-lg font-display uppercase tracking-wider focus:outline-none"
              >
                <option value={1}>1 Bag / Month (Personal Cup)</option>
                <option value={2}>2 Bags / Month (Standard Ritual)</option>
                <option value={4}>4 Bags / Month (Double Shot)</option>
                <option value={8}>8 Bags / Month (Connoisseur Pack)</option>
              </select>
            </div>

            {/* Input 2 */}
            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs uppercase tracking-widest text-[#1E1815]/55 font-black">CHOOSE BEANS SPECS PROFILE</label>
              <select
                value={calculatorSpec}
                onChange={(e) => setCalculatorSpec(e.target.value)}
                className="bg-[#FAF7F0] border-b-2 border-[#1E1815] py-3 text-lg font-display uppercase tracking-wider focus:outline-none"
              >
                <option value="VOID">THE VOID (Dark Roast volcanic blend)</option>
                <option value="MASS">THE MASS (Medium Roast balanced blend)</option>
                <option value="SINGULARITY">THE SINGULARITY (Light Roast floral micro-lots)</option>
                <option value="ASSORTED">ASSORTED VARIETY (Curator's rotating selection)</option>
              </select>
            </div>

            {/* Result display */}
            <div className="bg-[#1E1815] text-white p-6 rounded-lg mt-8 flex justify-between items-center shadow-lg border border-white/5">
              <div>
                <span className="font-sans text-xs uppercase tracking-widest text-[#E6C84F] block mb-1">TOTAL SUBSCRIPTION COST</span>
                <span className="font-display text-3xl font-black text-white leading-none">${calculatorVolume * (calculatorSpec === 'SINGULARITY' ? 15 : 12)}.00 <span className="font-sans text-xs text-gray-400 font-normal">/ MONTH</span></span>
              </div>
              <div className="text-right">
                <span className="font-sans text-xs uppercase tracking-widest text-gray-400 block mb-1">BAGS INCLUDED</span>
                <span className="font-display text-2xl font-black text-[#E6C84F] leading-none">{calculatorVolume} Credits</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Terracotta Rust with Floating Polaroid-style Cards */}
        <div className="lg:col-span-5 bg-[#B5654A] relative min-h-[600px] lg:min-h-auto flex items-center justify-center p-8 overflow-hidden select-none">
          
          {/* Decorative Background Text */}
          <div className="absolute -bottom-10 right-10 font-display text-[15vw] font-black text-white/[0.05] uppercase select-none pointer-events-none leading-none">
            Members
          </div>
          
          {/* Mesh Gradient Overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
          
          <div ref={calcCardsRef} className="relative w-full max-w-sm flex flex-col gap-12">
            
            {/* Polaroid Card 1: Cafe Interior */}
            <div className="bg-white p-4 pb-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out cursor-pointer group">
              <div className="aspect-square bg-[#1E1815]/5 overflow-hidden mb-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=500&q=80" 
                  alt="Cafe Interior" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]" />
              </div>
              <p className="font-serif italic text-sm text-[#1E1815]/80 text-center leading-relaxed">
                "Our biophilic sanctuary. A space to breathe and enjoy."
              </p>
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-[10px] font-sans font-black text-[#1E1815]/40 uppercase tracking-widest">
                <span>Space</span>
                <span>Interior</span>
              </div>
            </div>

            {/* Polaroid Card 2: Dishes/Pastry */}
            <div className="bg-white p-4 pb-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative rotate-3 translate-x-10 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out cursor-pointer group -mt-20">
              <div className="aspect-square bg-[#1E1815]/5 overflow-hidden mb-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=500&q=80" 
                  alt="Artisan Pastry" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]" />
              </div>
              <p className="font-serif italic text-sm text-[#1E1815]/80 text-center leading-relaxed">
                "Artisan pastries crafted daily. Not just coffee."
              </p>
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-[10px] font-sans font-black text-[#1E1815]/40 uppercase tracking-widest">
                <span>Craft</span>
                <span>Pastry</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
