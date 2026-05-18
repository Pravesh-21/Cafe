'use client';

import { useScrollAnim } from '@/components/useScrollAnim';
import { motion } from 'framer-motion';

export default function StoryPage() {
  const manifestoRef = useScrollAnim({ y: 40, stagger: 0.1 });
  const craftRef = useScrollAnim({ y: 50, duration: 1.2 });
  const beverageRef = useScrollAnim({ y: 50, duration: 1.2 });
  const reviewsRef = useScrollAnim({ y: 50, duration: 1.2 });

  return (
    <main className="relative min-h-screen bg-[#FAF7F0] text-[#1E1815] overflow-hidden pt-24">
      {/* Welcome Section */}
      <section className="relative min-h-[75vh] flex items-center px-6 md:px-12 lg:px-24 py-16 border-b border-[#1E1815]/5 overflow-hidden">
        
        {/* Massive Background Text */}
        <div className="absolute -top-10 left-10 font-display text-[25vw] font-black text-[#1E1815]/[0.02] uppercase select-none pointer-events-none leading-none">
          CRAVERS
        </div>

        <div ref={manifestoRef} className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center relative z-10">
          
          {/* Left Column: Image (Spans 5 columns) with Arch Shape */}
          <div className="lg:col-span-5 relative z-0">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden rounded-t-[200px] rounded-b-2xl shadow-lg border border-[#1E1815]/5 group"
            >
              <img src="/cafe_nature.png" alt="Biophilic Cafe Interior" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1815]/20 to-transparent" />
            </motion.div>
            <p className="font-serif italic text-xs text-[#1E1815]/60 mt-4 text-center">Our biophilic sanctuary</p>
          </div>

          {/* Right Column: Content (Spans 7 columns) with Overlap */}
          <div className="lg:col-span-7 flex flex-col items-start lg:-ml-16 z-10 lg:pl-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#FAF7F0]/95 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl lg:shadow-[-20px_20px_40px_rgba(0,0,0,0.05)] border border-[#1E1815]/5 flex flex-col items-start"
            >
              <div className="font-sans text-[11px] uppercase tracking-[0.2em] font-black text-[#1E1815]/60 border border-[#1E1815]/10 rounded-full px-4 py-1.5 mb-6 bg-white/50 backdrop-blur-sm shadow-sm">
                Our Manifesto
              </div>
              
              {/* Animated Line */}
              <div className="w-20 h-[2px] bg-[#1E1815] mb-6 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-[#FAF7F0]" 
                  initial={{ x: "0%" }}
                  whileInView={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-[#1E1815] uppercase mb-6 leading-[0.9] tracking-tighter">
                Seasonal <span className="font-serif italic font-normal normal-case text-[#B5654A]">Roasts</span> <br />Crafted With <span className="font-serif italic font-normal normal-case text-[#B5654A]">Passion</span>.
              </h2>
              
              <p className="font-serif italic text-lg text-[#1E1815]/70 mb-6 max-w-xl leading-relaxed">
                We bring vibrant single-origin harvests and warm micro-lot hospitality together.
              </p>
              
              <div className="space-y-4 font-sans text-sm text-[#1E1815]/80 leading-relaxed max-w-xl">
                <p>
                  From delicate light roasts designed to challenge your sensory boundaries, to bold dark extractions engineered with restraint, every drop is crafted with passion.
                </p>
                <p>
                  Founded in 2026, Cravers began as an experimental roastery challenging the status quo. Today, we directly source from high-altitude farms across the globe to curate an unparalleled experience.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* The Craft Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24 bg-white overflow-hidden">
        
        {/* Decorative Background Text */}
        <div className="absolute top-10 right-10 font-display text-[15vw] font-black text-[#1E1815]/[0.02] uppercase select-none pointer-events-none leading-none">
          Craft
        </div>

        <div ref={craftRef} className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left Column: Content (Spans 6 columns) */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start text-left">
            <div className="font-sans text-[11px] uppercase tracking-[0.2em] font-black text-[#1E1815]/60 border border-[#1E1815]/10 rounded-full px-4 py-1.5 mb-6 bg-[#FAF7F0] shadow-sm">
              Craftsmanship
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#1E1815] uppercase mb-6 leading-none tracking-tighter">
              Beyond <br />the Bean.
            </h2>
            
            <p className="font-serif italic text-lg text-[#1E1815]/70 mb-6 leading-relaxed max-w-md">
              Our master roasters use a combination of traditional techniques and modern precision.
            </p>
            
            <div className="space-y-4 font-sans text-sm text-[#1E1815]/80 leading-relaxed max-w-md">
              <p>
                From the initial crack to the final cooling, every second counts. We travel the globe to find the most exceptional coffee cherries, working directly with farmers who share our passion for quality and sustainability.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-8 w-full max-w-md">
              <div className="border-t border-[#1E1815]/10 pt-6">
                <span className="font-display text-5xl font-black text-[#1E1815] tracking-tighter">100%</span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-[#1E1815]/50 block mt-2 font-black">Direct Trade</span>
              </div>
              <div className="border-t border-[#1E1815]/10 pt-6">
                <span className="font-display text-5xl font-black text-[#1E1815] tracking-tighter">20+</span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-[#1E1815]/50 block mt-2 font-black">Origin Countries</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image (Spans 6 columns) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-sm border border-[#1E1815]/5 group">
              <img
                src="/story_roasting.png"
                alt="Coffee Roasting"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1815]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-sans text-[10px] uppercase tracking-widest font-black bg-[#1E1815]/50 px-3 py-1 rounded-full backdrop-blur-sm">The Process</span>
                <h3 className="font-display text-xl font-black uppercase mt-2">Art of the Roast</h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Beyond Coffee Section (Beverages) */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24 bg-[#FAF7F0] overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute -bottom-10 left-10 font-display text-[15vw] font-black text-[#1E1815]/[0.02] uppercase select-none pointer-events-none leading-none">
          Drinks
        </div>

        <div ref={beverageRef} className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left Column: Content (Spans 5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start text-left">
            <div className="font-sans text-[11px] uppercase tracking-[0.2em] font-black text-[#1E1815]/60 border border-[#1E1815]/10 rounded-full px-4 py-1.5 mb-6 bg-white/50 backdrop-blur-sm shadow-sm">
              Explore More
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#1E1815] uppercase mb-6 leading-none tracking-tighter">
              Not Just <br />Coffee.
            </h2>
            <p className="font-serif italic text-[#1E1815]/70 text-lg mb-6 leading-relaxed max-w-md">
              While coffee is our first love, we are equally passionate about our diverse beverage menu.
            </p>
            <div className="space-y-4 font-sans text-sm text-[#1E1815]/80 leading-relaxed max-w-md">
              <p>
                From vibrant, hand-shaken iced teas and herbal infusions to rich, creamy smoothies made with fresh fruits, our craft beverages are prepared with the exact same care and precision as our signature roasts.
              </p>
              <p>
                We believe in offering a spectrum of flavors for every palate. Every drink is a composition designed to refresh, inspire, and delight.
              </p>
            </div>
          </div>

          {/* Right Column: Floating Collage (Spans 7 columns) */}
          <div className="lg:col-span-7 relative h-[600px] w-full mt-12 lg:mt-0">
            
            {/* Main Image (Tea) */}
            <div className="absolute top-0 right-0 w-[65%] aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] group">
              <img
                src="/tea.png"
                alt="Craft Tea"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1815]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="font-sans text-[10px] uppercase tracking-widest font-black bg-[#1E1815]/50 px-3 py-1 rounded-full backdrop-blur-sm">ICED INFUSIONS</span>
              </div>
            </div>

            {/* Floating Image 2 (Smoothie) */}
            <div className="absolute bottom-10 left-0 w-[50%] aspect-[1/1] overflow-hidden rounded-2xl shadow-[0_30px_50px_-15px_rgba(0,0,0,0.2)] border-4 border-[#FAF7F0] z-10 group">
              <img
                src="/smoothie.png"
                alt="Fresh Smoothie"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1815]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="font-sans text-[10px] uppercase tracking-widest font-black bg-[#1E1815]/50 px-3 py-1 rounded-full backdrop-blur-sm">FRESH SMOOTHIES</span>
              </div>
            </div>

            {/* Decorative Quote or Label */}
            <div className="absolute top-1/4 left-1/4 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-[150px] z-20 border border-[#1E1815]/5 hidden md:block">
              <p className="font-serif italic text-xs text-[#1E1815]">"Crafted with the same precision as our coffee."</p>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Review Grid Block */}
      <section className="relative min-h-screen bg-[#FAF7F0] flex items-center justify-center overflow-hidden py-24 border-t border-[#1E1815]/5">
        {/* Full-bleed background cafe photo with heavy vignette */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/story_bg.png"
            alt="Cafe Environment"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F0] via-transparent to-[#FAF7F0]" />
        </div>

        {/* Floating Testimonial Overlays */}
        <div ref={reviewsRef} className="relative z-10 w-full max-w-6xl px-6 flex flex-col lg:flex-row items-center justify-between gap-12 select-none">
          {/* Left testimonial card */}
          <div className="w-full max-w-sm bg-rose-50/95 backdrop-blur-sm border border-rose-100 p-6 rounded-2xl shadow-xl rotate-[-3deg] lg:translate-y-[-40px] hover:rotate-0 hover:translate-y-0 transition-all duration-500">
            <span className="text-amber-500 text-lg block mb-3">★★★★★</span>
            <p className="font-sans text-sm text-[#1E1815]/85 leading-relaxed mb-6 font-black">
              "Absolutely delicious coffee and a wonderful ritual! Every Saturday morning cup is a precise, beautiful experience that feels sacred."
            </p>
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 rounded-full bg-rose-200/50 flex items-center justify-center font-display text-xs font-black">S</div>
              <div>
                <span className="font-sans text-xs font-black uppercase text-[#1E1815] block">SARAH W.</span>
                <span className="font-sans text-[10px] text-gray-500">Member since 2024</span>
              </div>
            </div>
          </div>

          {/* Center testimonial card */}
          <div className="w-full max-w-sm bg-emerald-50/90 backdrop-blur-sm border border-emerald-100 p-6 rounded-2xl shadow-xl lg:translate-y-[40px] hover:translate-y-0 transition-all duration-500 z-20">
            <span className="text-amber-500 text-lg block mb-3">★★★★★</span>
            <p className="font-sans text-sm text-[#1E1815]/85 leading-relaxed mb-6 font-black">
              "The most confrontational cup of coffee I have ever experienced. It doesn't ask for your attention. It removes gravity."
            </p>
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 rounded-full bg-emerald-200/50 flex items-center justify-center font-display text-xs font-black">N</div>
              <div>
                <span className="font-sans text-xs font-black uppercase text-[#1E1815] block">NEW YORK TIMES</span>
                <span className="font-sans text-[10px] text-gray-500">Editorial review</span>
              </div>
            </div>
          </div>

          {/* Right testimonial card */}
          <div className="w-full max-w-sm bg-sky-50/90 backdrop-blur-sm border border-sky-100 p-6 rounded-2xl shadow-xl rotate-[3deg] lg:translate-y-[-20px] hover:rotate-0 hover:translate-y-0 transition-all duration-500">
            <span className="text-amber-500 text-lg block mb-3">★★★★★</span>
            <p className="font-sans text-sm text-[#1E1815]/85 leading-relaxed mb-6 font-black">
              "It is the extra attention to detail and care that Cravers guests have for the smallest details that make a massive difference."
            </p>
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 rounded-full bg-sky-200/50 flex items-center justify-center font-display text-xs font-black">J</div>
              <div>
                <span className="font-sans text-xs font-black uppercase text-[#1E1815] block">JOHAN R.</span>
                <span className="font-sans text-[10px] text-gray-500">Espresso Purist</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
