'use client';

import { useScrollAnim } from '@/components/useScrollAnim';
import Link from 'next/link';

export default function CuppingPage() {
  const leftColRef = useScrollAnim({ y: 30, duration: 1.2 });
  const rightColRef = useScrollAnim({ y: 50, duration: 1.5, delay: 0.2 });

  return (
    <main className="relative min-h-screen bg-[#1E1815] text-[#FAF7F0] overflow-hidden pt-24 pb-24">
      {/* Massive Background Text */}
      <div className="absolute top-20 right-10 font-display text-[20vw] font-black text-white/[0.01] uppercase select-none pointer-events-none leading-none">
        Rituals
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 mt-12">
          <div className="font-sans text-[11px] uppercase tracking-[0.2em] font-black text-[#FAF7F0]/60 border border-white/10 rounded-full px-4 py-1.5 mb-6 bg-white/5 backdrop-blur-sm shadow-sm inline-block">
            Guest Experiences
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black mb-4 text-white uppercase tracking-tighter leading-none">
            Flavor <span className="font-serif italic font-normal normal-case text-[#E6C84F]">Flights</span>
          </h1>
          <p className="font-sans text-base text-[#FAF7F0]/60 leading-relaxed max-w-2xl">
            Go beyond the daily cup. Join our exclusive tasting flights to explore rare flavors and perfect pairings in a curated vibe.
          </p>
        </div>

        {/* Section 1: What to Expect (Image Cards) */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-white/10 pb-6">
            <h2 className="font-display text-2xl font-black uppercase text-white">What to Expect</h2>
            <span className="font-serif italic text-sm text-[#E6C84F]">The Art of the Flight</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Card 1: Aroma */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-t-[100px] rounded-b-2xl mb-6 relative">
                <img 
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80" 
                  alt="The Aroma" 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1815] via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-4 left-6 font-display text-4xl font-black text-white/20">01</span>
              </div>
              <h3 className="font-display text-lg font-black uppercase text-white mb-2 group-hover:text-[#E6C84F] transition-colors">The Scent</h3>
              <p className="font-sans text-xs text-[#FAF7F0]/60 leading-relaxed">
                Breathe it in. Experience the rich, raw aroma of freshly ground specialty coffee before we begin the pour.
              </p>
            </div>

            {/* Card 2: Break */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-t-[100px] rounded-b-2xl mb-6 relative">
                <img 
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80" 
                  alt="The Break" 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1815] via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-4 left-6 font-display text-4xl font-black text-white/20">02</span>
              </div>
              <h3 className="font-display text-lg font-black uppercase text-white mb-2 group-hover:text-[#E6C84F] transition-colors">The Bloom</h3>
              <p className="font-sans text-xs text-[#FAF7F0]/60 leading-relaxed">
                Watch it bloom. As water meets coffee, it releases a burst of intense aroma, revealing its true character.
              </p>
            </div>

            {/* Card 3: Slurp */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-t-[100px] rounded-b-2xl mb-6 relative">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80" 
                  alt="The Slurp" 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1815] via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-4 left-6 font-display text-4xl font-black text-white/20">03</span>
              </div>
              <h3 className="font-display text-lg font-black uppercase text-white mb-2 group-hover:text-[#E6C84F] transition-colors">The Taste</h3>
              <p className="font-sans text-xs text-[#FAF7F0]/60 leading-relaxed">
                The perfect sip. Taste the layers of flavor, acidity, and sweetness as the cup cools.
              </p>
            </div>

          </div>
        </div>

        {/* Section 2: Upcoming Sessions */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-white/10 pb-6">
            <h2 className="font-display text-2xl font-black uppercase text-white">Upcoming Sessions</h2>
            <span className="font-serif italic text-sm text-[#E6C84F]">Reserve your seat</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Session 1 */}
            <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col md:flex-row gap-6 justify-between items-center group hover:border-white/20 transition-all duration-500">
              <div className="flex gap-4 items-center flex-grow">
                <div className="bg-[#E6C84F] text-[#1E1815] rounded-xl p-4 text-center w-20 shadow-lg shrink-0 font-black">
                  <span className="font-sans text-[10px] block uppercase tracking-wider">MAY</span>
                  <span className="font-display text-3xl leading-none">24</span>
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-[#E6C84F] font-black block mb-1">Level: Advanced</span>
                  <h3 className="font-display text-lg font-black text-white uppercase leading-none mb-2">Specialty Tasting Flight</h3>
                  <p className="font-sans text-xs text-[#FAF7F0]/60 max-w-xs">A curated flight of 3 specialty drinks paired with artisan bites. Reservations required.</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-3 shrink-0">
                <span className="font-sans text-xs font-black text-white">$15.00</span>
                <Link href="/access" className="bg-white/5 hover:bg-[#E6C84F] hover:text-[#1E1815] text-white border border-white/10 font-sans text-[10px] uppercase tracking-wider py-2.5 px-5 font-black transition-all rounded-full shadow-md">
                  Book Spot
                </Link>
              </div>
            </div>

            {/* Session 2 */}
            <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col md:flex-row gap-6 justify-between items-center group hover:border-white/20 transition-all duration-500">
              <div className="flex gap-4 items-center flex-grow">
                <div className="bg-white/5 text-white rounded-xl p-4 text-center w-20 border border-white/10 shrink-0 font-black">
                  <span className="font-sans text-[10px] block uppercase tracking-wider">JUNE</span>
                  <span className="font-display text-3xl leading-none">01</span>
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-[#E6C84F] font-black block mb-1">Level: Intermediate</span>
                  <h3 className="font-display text-lg font-black text-white uppercase leading-none mb-2">Espresso Theory</h3>
                  <p className="font-sans text-xs text-[#FAF7F0]/60 max-w-xs">Learn the art of the perfect espresso. From grind size to milk texture.</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-3 shrink-0">
                <span className="font-sans text-xs font-black text-white">$10.00</span>
                <Link href="/access" className="bg-white/5 hover:bg-[#E6C84F] hover:text-[#1E1815] text-white border border-white/10 font-sans text-[10px] uppercase tracking-wider py-2.5 px-5 font-black transition-all rounded-full shadow-md">
                  Book Spot
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
