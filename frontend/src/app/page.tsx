'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import { useScrollAnim } from '@/components/useScrollAnim';
import CircularGallery from '@/components/CircularGallery';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const heroRef = useScrollAnim({ y: 30, duration: 1.2, delay: 0.2 });
  const ctaRef = useScrollAnim({ y: 50 });

  return (
    <main className="relative min-h-screen bg-[#FAF7F0] text-[#1E1815] overflow-hidden">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Cinematic Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black select-none">
        {/* Full-bleed Background Image with espresso vignette */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            src="/cafe_interior.png"
            alt="Aesthetic Cafe Interior"
            className="w-full h-[120%] object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#FAF7F0]" />
        </div>

        <div ref={heroRef} className="relative z-10 max-w-5xl flex flex-col items-center pt-20">
          {/* Tagline Badge */}
          <div className="font-sans text-[11px] uppercase tracking-[0.25em] font-black bg-white/10 backdrop-blur-md text-white/90 border border-white/20 rounded-full px-5 py-2 mb-8 shadow-sm">
            #1 Specialty Coffee & Artisan Cafe
          </div>

          {/* Massive Oswald Headline */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-[100px] font-black mb-6 tracking-tight leading-[0.9] text-white uppercase max-w-4xl text-balance">
            SAVOUR THE CRAFT THAT TELLS A STORY
          </h1>

          <p className="font-serif italic text-lg md:text-xl text-[#FAF7F0]/80 mb-12 max-w-xl">
            Handcrafted micro-lots and artisan eats. Sourced with care, served with passion.
          </p>

          <a
            href="/access"
            className="font-display text-sm uppercase tracking-wider bg-[#FAF7F0] hover:bg-white text-[#1E1815] py-4 px-10 rounded-sm font-black transition-all shadow-md"
          >
            Reserve Your Table
          </a>
        </div>

        {/* Floating As Seen In row at the bottom of hero */}
        <div className="absolute bottom-10 left-0 w-full z-10 flex flex-col items-center gap-3">
          <span className="font-sans text-[9px] uppercase tracking-widest text-white/40 font-black">AS SEEN IN</span>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 px-4 opacity-40 grayscale contrast-200">
            <span className="font-serif font-bold text-sm tracking-tight text-white">The New York Times</span>
            <span className="font-display font-black text-sm tracking-tighter text-white">Bloomberg</span>
            <span className="font-serif italic font-bold text-sm tracking-tight text-white">Financial Times</span>
            <span className="font-sans font-black text-xs tracking-widest text-white">WALLPAPER*</span>
            <span className="font-serif font-black text-sm tracking-tighter text-white">THE TIMES</span>
          </div>
        </div>
      </section>

      {/* 3D Circular Gallery - Double Row */}
      <section className="relative w-full mt-20 mb-20 flex flex-col gap-10">
        {/* Row 1 */}
        <div style={{ height: '400px', position: 'relative' }}>
          <CircularGallery
            items={[
              { image: "/latte_art.png", text: "Latte Art" },
              { image: "/coffee_cup.png", text: "Coffee Cup" },
              { image: "/cta.png", text: "Pour Over" },
              { image: "/cupping.png", text: "Cupping" },
              { image: "/story_roasting.png", text: "Roasting" },
              { image: "/story_sourcing.png", text: "Sourcing" }
            ]}
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>

        {/* Row 2 (Below the previous one) */}
        <div style={{ height: '400px', position: 'relative' }}>
          <CircularGallery
            items={[
              { image: "/cold_brew.png", text: "Cold Brew" },
              { image: "/croissant.png", text: "Croissant" },
              { image: "/burger.png", text: "Gourmet Burger" },
              { image: "/sandwich.png", text: "Club Sandwich" },
              { image: "/pizza.png", text: "Artisan Pizza" },
              { image: "/tea.png", text: "Craft Tea" }
            ]}
            bend={-1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={1.5}
            scrollEase={0.04}
          />
        </div>
      </section>

      {/* Section: Our Story (Extreme Redesign) */}
      <section className="relative bg-[#FAF7F0] py-32 px-6 md:px-12 overflow-hidden min-h-[800px] flex items-center">
        {/* Decorative Background Text */}
        <div className="absolute top-10 right-10 font-display text-[20vw] font-black text-[#1E1815]/[0.03] uppercase select-none pointer-events-none leading-none">
          Story
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Left Side: Content (Spans 5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="md:col-span-5 flex flex-col items-start text-left z-20"
          >
            <div className="font-sans text-[11px] uppercase tracking-[0.2em] font-black text-[#1E1815]/60 border border-[#1E1815]/10 rounded-full px-4 py-1.5 mb-6 bg-white/50 backdrop-blur-sm shadow-sm">
              Our Story
            </div>
            <h2 className="font-display text-6xl md:text-7xl font-black text-[#1E1815] uppercase mb-6 leading-[0.9] tracking-tighter">
              Nature <br />& Craft
            </h2>
            <p className="font-serif italic text-[#1E1815]/70 text-lg mb-6">
              We believe that the environment you drink your coffee in is just as important as the coffee itself.
            </p>
            <div className="space-y-4 font-sans text-sm text-[#1E1815]/80 leading-relaxed max-w-sm">
              <p>
                Cravers was born out of a desire to merge the art of specialty beverages with the calming power of nature. Our space is designed with a biophilic philosophy, featuring live green walls and natural light.
              </p>
              <p>
                From our artisanal espresso drinks to our fresh-pressed botanical juices, every beverage is a composition of flavors designed to refresh and inspire. It's not just a cafe; it's an escape.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Floating Collage (Spans 7 columns) */}
          <div className="md:col-span-7 relative h-[600px] w-full mt-12 md:mt-0">

            {/* Main Image (Cafe Nature) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="absolute top-10 right-0 w-[70%] aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] z-10"
            >
              <img src="/cafe_nature.png" alt="Biophilic Cafe Interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1815]/20 to-transparent" />
            </motion.div>

            {/* Floating Image 2 (Smoothie) */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -20, x: -10, transition: { duration: 0.4 } }}
              className="absolute bottom-20 left-10 w-[45%] aspect-[1/1] overflow-hidden rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] z-20 border-4 border-[#FAF7F0]"
            >
              <img src="/smoothie.png" alt="Tropical Smoothie" className="w-full h-full object-cover" />
            </motion.div>

            {/* Floating Image 3 (Burger) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: 10, scale: 1.05, transition: { duration: 0.4 } }}
              className="absolute top-0 left-20 w-[35%] aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_20px_30px_-5px_rgba(0,0,0,0.15)] z-0"
            >
              <img src="/burger.png" alt="Gourmet Burger" className="w-full h-full object-cover" />
            </motion.div>

            {/* Decorative Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-10 right-10 bg-[#1E1815] text-[#FAF7F0] p-6 rounded-2xl shadow-xl max-w-[220px] z-30 hidden md:block"
            >
              <p className="font-serif italic text-sm">"The environment you drink your coffee in matters."</p>
              <div className="w-10 h-[1px] bg-[#FAF7F0]/30 mt-4" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 3: The Philosophy (Dark Section for Contrast) */}
      <section className="relative bg-[#1E1815] text-[#FAF7F0] py-24 px-6 md:px-12 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FAF7F0]/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FAF7F0]/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="font-sans text-[11px] uppercase tracking-[0.2em] font-black text-[#FAF7F0]/60 border border-[#FAF7F0]/10 rounded-full px-4 py-1.5 mb-4 bg-white/5 backdrop-blur-sm">
              Our Ethos
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-black text-white uppercase mb-4">The Cravers Way</h2>
            <p className="font-serif italic text-[#FAF7F0]/70 text-lg max-w-2xl">Crafting experiences that awaken your senses, one detail at a time.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover="hover"
              className="flex flex-col items-start text-left p-6 group cursor-pointer"
            >
              <div className="w-full h-[1px] bg-white/10 mb-8 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-white"
                  variants={{
                    initial: { x: "-100%" },
                    hover: { x: "0%" }
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span className="font-display text-6xl font-black text-white/10 mb-4 transition-colors duration-500 group-hover:text-white/30">01</span>
              <h3 className="font-display text-2xl font-black mb-3 uppercase text-white tracking-tight">The Roast</h3>
              <p className="font-serif italic text-[#FAF7F0]/60 text-sm leading-relaxed">
                Handcrafted micro-lots sourced at extreme altitudes. Roasted with obsession in small batches.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover="hover"
              className="flex flex-col items-start text-left p-6 group cursor-pointer"
            >
              <div className="w-full h-[1px] bg-white/10 mb-8 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-white"
                  variants={{
                    initial: { x: "-100%" },
                    hover: { x: "0%" }
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span className="font-display text-6xl font-black text-white/10 mb-4 transition-colors duration-500 group-hover:text-white/30">02</span>
              <h3 className="font-display text-2xl font-black mb-3 uppercase text-white tracking-tight">The Kitchen</h3>
              <p className="font-serif italic text-[#FAF7F0]/60 text-sm leading-relaxed">
                Artisan eats and fresh ingredients. We believe food should be as expressive as our coffee.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover="hover"
              className="flex flex-col items-start text-left p-6 group cursor-pointer"
            >
              <div className="w-full h-[1px] bg-white/10 mb-8 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-white"
                  variants={{
                    initial: { x: "-100%" },
                    hover: { x: "0%" }
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span className="font-display text-6xl font-black text-white/10 mb-4 transition-colors duration-500 group-hover:text-white/30">03</span>
              <h3 className="font-display text-2xl font-black mb-3 uppercase text-white tracking-tight">The Space</h3>
              <p className="font-serif italic text-[#FAF7F0]/60 text-sm leading-relaxed">
                A sanctuary for your senses. Designed for conversation, contemplation, and pure enjoyment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Menu */}
      <section className="relative bg-[#FAF7F0] py-24 px-6 md:px-12 overflow-hidden">
        {/* Large Decorative Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[15vw] font-black text-[#1E1815]/[0.02] uppercase select-none pointer-events-none whitespace-nowrap">
          Chef's Pick
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-16"
          >
            {/* Subtitle Badge */}
            <div className="font-sans text-[11px] uppercase tracking-[0.2em] font-black text-[#1E1815]/60 border border-[#1E1815]/10 rounded-full px-4 py-1.5 mb-4 bg-white/50 backdrop-blur-sm shadow-sm">
              Daily Selection
            </div>

            <h2 className="font-display text-5xl md:text-6xl font-black text-[#1E1815] uppercase mb-4">Chef's Highlights</h2>
            <p className="font-serif italic text-[#1E1815]/70 text-lg">Curated daily specials from our craft kitchen</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="bg-white/80 backdrop-blur-md border border-[#1E1815]/5 rounded-3xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(30,24,21,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(30,24,21,0.1)] transition-all duration-500 p-4"
            >
              <div className="h-60 overflow-hidden rounded-2xl relative group">
                <img src="/croissant.png" alt="Butter Croissant" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1815]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 pt-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-display text-xl font-black text-[#1E1815] uppercase tracking-tight">Artisan Croissant</h3>
                  <span className="font-sans font-bold text-sm bg-[#1E1815] text-[#FAF7F0] px-3 py-1 rounded-full">$5.50</span>
                </div>
                <p className="font-serif text-sm text-[#1E1815]/70 italic mb-4">Flaky, butter-rich layers baked fresh every morning.</p>
                <div className="flex items-center text-xs font-black uppercase tracking-wider text-[#1E1815] group-hover:text-[#1E1815]/70 transition-colors">
                  <span>Discover</span>
                  <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="bg-white/80 backdrop-blur-md border border-[#1E1815]/5 rounded-3xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(30,24,21,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(30,24,21,0.1)] transition-all duration-500 p-4"
            >
              <div className="h-60 overflow-hidden rounded-2xl relative group">
                <img src="/smoothie.png" alt="Mango Smoothie" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1815]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 pt-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-display text-xl font-black text-[#1E1815] uppercase tracking-tight">Tropical Smoothie</h3>
                  <span className="font-sans font-bold text-sm bg-[#1E1815] text-[#FAF7F0] px-3 py-1 rounded-full">$7.00</span>
                </div>
                <p className="font-serif text-sm text-[#1E1815]/70 italic mb-4">Fresh mango, passionfruit, and coconut milk blend.</p>
                <div className="flex items-center text-xs font-black uppercase tracking-wider text-[#1E1815] group-hover:text-[#1E1815]/70 transition-colors">
                  <span>Discover</span>
                  <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="bg-white/80 backdrop-blur-md border border-[#1E1815]/5 rounded-3xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(30,24,21,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(30,24,21,0.1)] transition-all duration-500 p-4"
            >
              <div className="h-60 overflow-hidden rounded-2xl relative group">
                <img src="/cold_brew.png" alt="Cold Brew" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1815]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 pt-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-display text-xl font-black text-[#1E1815] uppercase tracking-tight">Nitros Cold Brew</h3>
                  <span className="font-sans font-bold text-sm bg-[#1E1815] text-[#FAF7F0] px-3 py-1 rounded-full">$6.00</span>
                </div>
                <p className="font-serif text-sm text-[#1E1815]/70 italic mb-4">16-hour steep served on nitro for a creamy finish.</p>
                <div className="flex items-center text-xs font-black uppercase tracking-wider text-[#1E1815] group-hover:text-[#1E1815]/70 transition-colors">
                  <span>Discover</span>
                  <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pre-Footer Parallax Visual CTA Section */}
      <section ref={ctaRef} className="relative min-h-[400px] bg-[#FAF7F0] px-6 md:px-12 py-24 flex items-center justify-center overflow-hidden select-none">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-[#1E1815] uppercase tracking-tight text-center md:text-right leading-none">
            YOUR CUP IS
          </h2>

          {/* Centered Floating Pot image */}
          <div className="w-[180px] h-[260px] lg:w-[220px] lg:h-[320px] rounded-lg overflow-hidden border-4 border-white shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 flex-shrink-0 z-10">
            <img
              src="/cta.png"
              alt="Floating Pouring Coffee Pot"
              className="w-full h-full object-cover scale-105"
            />
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-[#1E1815] uppercase tracking-tight text-center md:text-left leading-none">
            WAITING FOR YOU
          </h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1815] text-[#FAF7F0]/50 py-12 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-black text-white uppercase mb-2">Cravers</h3>
            <p className="font-serif italic text-sm">Craft Coffee & Artisan Eats</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-sm">
            © 2026 Cravers. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
