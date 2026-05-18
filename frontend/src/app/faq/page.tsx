'use client';

import { useState } from 'react';
import { useScrollAnim } from '@/components/useScrollAnim';

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const titleRef = useScrollAnim({ y: 30, duration: 1 });
  const faqRef = useScrollAnim({ y: 40, stagger: 0.15 });

  return (
    <main className="relative min-h-screen bg-[#FAF7F0] text-[#1E1815] overflow-hidden pt-24 pb-24">
      <section className="relative px-6 md:px-12 lg:px-24 flex flex-col justify-center">
        <div className="max-w-4xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16">
          <div ref={titleRef} className="lg:col-span-5">
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-black text-[#B5654A] mb-4 block">QUESTIONS</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#1E1815] uppercase tracking-tight leading-none mb-6">
              QUESTIONS? WE ARE HERE TO HELP.
            </h2>
            <p className="font-sans text-sm text-[#1E1815]/60">Read the FAQ below to learn how our limited direct-trade credits system works.</p>
          </div>
          
          <div ref={faqRef} className="lg:col-span-7 flex flex-col gap-4">
            {/* Accordion 1 */}
            <div className="border-b border-[#1E1815]/10 pb-4">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full flex justify-between items-center text-left py-2 font-display text-lg uppercase font-black text-[#1E1815]"
              >
                <span>How do coffee credits work?</span>
                <span className="text-xl font-bold transition-transform duration-300 transform">{openFaq === 1 ? '−' : '+'}</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="font-sans text-sm text-[#1E1815]/70 mt-2 leading-relaxed pb-2">
                  Every bag you order consumes 1 credit from your monthly plan. Premium single-origin harvests from extreme altitudes (such as THE SINGULARITY) consume 1.5 credits per bag due to extreme sourcing costs.
                </p>
              </div>
            </div>

            {/* Accordion 2 */}
            <div className="border-b border-[#1E1815]/10 pb-4">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full flex justify-between items-center text-left py-2 font-display text-lg uppercase font-black text-[#1E1815]"
              >
                <span>When are harvests roasted?</span>
                <span className="text-xl font-bold transition-transform duration-300 transform">{openFaq === 2 ? '−' : '+'}</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="font-sans text-sm text-[#1E1815]/70 mt-2 leading-relaxed pb-2">
                  We operate strictly on a limited weekly extraction cycle. We roast and nitrogen-seal every Wednesday and Friday, shipping directly to your door to guarantee arrival within 48 hours of roasting.
                </p>
              </div>
            </div>

            {/* Accordion 3 */}
            <div className="border-b border-[#1E1815]/10 pb-4">
              <button
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full flex justify-between items-center text-left py-2 font-display text-lg uppercase font-black text-[#1E1815]"
              >
                <span>Can I cancel or pause my club subscription?</span>
                <span className="text-xl font-bold transition-transform duration-300 transform">{openFaq === 3 ? '−' : '+'}</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === 3 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="font-sans text-sm text-[#1E1815]/70 mt-2 leading-relaxed pb-2">
                  Absolutely. You can modify your bags frequency, change roast profiles, or pause your account billing at any time from your member portal with no penalty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
