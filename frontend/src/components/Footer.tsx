'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// SVG Icons
const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4 text-[#E6C84F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4 text-[#E6C84F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4 text-[#E6C84F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'cookies' | null>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative bg-[#1E1815] text-[#FAF7F0]/40 py-20 px-6 md:px-12 lg:px-24 border-t border-white/5 overflow-hidden z-20">
      {/* Decorative subtle ambient background glow */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#E6C84F]/[0.02] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#B5654A]/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 relative z-10">
        {/* Column 1: Brand & Bio (Spans 4/12) */}
        <div className="lg:col-span-4 flex flex-col items-start text-left">
          <Link href="/" className="font-display text-3xl font-black text-white tracking-tighter uppercase mb-4 hover:text-[#E6C84F] transition-colors">
            CAFE
          </Link>
          <p className="text-xs text-[#FAF7F0]/60 leading-relaxed max-w-sm mb-6">
            A premium biophilic cafe sanctuary where craft coffee meets fresh, delicious comfort food. We source our coffee beans ethically and serve every dish with passion.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: <InstagramIcon />, href: 'https://instagram.com/cafe.cafe', label: 'Instagram' },
              { icon: <FacebookIcon />, href: 'https://facebook.com/cafe.cafe', label: 'Facebook' },
              { icon: <TwitterIcon />, href: 'https://twitter.com/cafe_cafe', label: 'Twitter' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#E6C84F] hover:border-[#E6C84F] transition-all duration-300 transform hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Navigation Links (Spans 2/12) */}
        <div className="lg:col-span-2 flex flex-col items-start text-left lg:pl-4">
          <span className="text-[10px] uppercase tracking-[0.35em] font-black text-[#E6C84F] block mb-6">
            Explore
          </span>
          <div className="flex flex-col gap-4">
            {[
              { href: '/', label: 'Home' },
              { href: '/story', label: 'Our Story' },
              { href: '/blends', label: 'Menu' },
              { href: '/cupping', label: 'Rituals' },
              { href: '/faq', label: 'FAQ' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest text-[#FAF7F0]/60 hover:text-[#E6C84F] transition-colors duration-300 font-bold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Location & Hours (Spans 3/12) */}
        <div className="lg:col-span-3 flex flex-col items-start text-left">
          <span className="text-[10px] uppercase tracking-[0.35em] font-black text-[#E6C84F] block mb-6">
            Contact & Visit
          </span>
          <div className="space-y-4 text-xs text-[#FAF7F0]/70">
            <div className="flex items-start gap-3">
              <div className="mt-0.5"><MapPinIcon /></div>
              <span className="leading-relaxed">
                VIP Road, Dharampeth, Nagpur, Maharashtra 440010, India
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div><ClockIcon /></div>
              <span>Open Daily: 11:00 AM — 11:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <div><PhoneIcon /></div>
              <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
            </div>
          </div>
        </div>

        {/* Column 4: Newsletter (Spans 3/12) */}
        <div className="lg:col-span-3 flex flex-col items-start text-left">
          <span className="text-[10px] uppercase tracking-[0.35em] font-black text-[#E6C84F] block mb-6">
            Join the Circle
          </span>
          <p className="text-xs text-[#FAF7F0]/60 leading-relaxed mb-4">
            Subscribe to receive aesthetic brew guides, new drops, and exclusive event access.
          </p>
          <form onSubmit={handleSubscribe} className="w-full flex flex-col gap-2">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-12 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E6C84F] focus:ring-1 focus:ring-[#E6C84F]/30 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 w-8 h-8 rounded-full bg-[#E6C84F] text-[#1E1815] flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Subscribe"
              >
                →
              </button>
            </div>
            <AnimatePresence>
              {subscribed && (
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[10px] text-[#E6C84F] font-semibold mt-1 pl-2 block"
                >
                  ✓ Welcome to the Cafe Circle.
                </motion.span>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-[10px] text-[#FAF7F0]/30 uppercase tracking-widest">
          © 2026 CAFE. All rights reserved.
        </p>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest text-[#FAF7F0]/40 font-bold">
          <button onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
          <button onClick={() => setActiveModal('terms')} className="hover:text-white transition-colors">Terms of Service</button>
          <button onClick={() => setActiveModal('cookies')} className="hover:text-white transition-colors">Cookie Settings</button>
        </div>
      </div>

      {/* ─── Legal Document Modals ─── */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md">
            {/* Modal Backdrop Click to close */}
            <div className="absolute inset-0" onClick={() => setActiveModal(null)} />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-[#1E1815] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[80vh]"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <h3 className="font-display text-lg font-black text-white uppercase tracking-wider">
                  {activeModal === 'privacy' && 'Privacy Policy'}
                  {activeModal === 'terms' && 'Terms of Service'}
                  {activeModal === 'cookies' && 'Cookie Settings'}
                </h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-8 h-8 rounded-full bg-white/5 text-white/50 hover:text-white flex items-center justify-center text-sm transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-8 overflow-y-auto text-left text-xs text-[#FAF7F0]/70 space-y-6 font-sans leading-relaxed custom-scrollbar">
                {activeModal === 'privacy' && (
                  <>
                    <p className="font-serif italic text-sm text-[#E6C84F]">Last Updated: June 24, 2026</p>
                    <p>At CAFE, your privacy is extremely important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services in Nagpur.</p>
                    
                    <h4 className="font-display text-white text-xs uppercase tracking-wider font-bold mt-4">1. Information We Collect</h4>
                    <p>We may collect personal details you provide to us directly, including your name, email address, phone number, and reservation details. We also collect automated analytics data when you browse our site, such as your IP address, browser type, and navigation behavior.</p>

                    <h4 className="font-display text-white text-xs uppercase tracking-wider font-bold mt-4">2. How We Use Your Information</h4>
                    <p>We use your information to process reservations, send newsletter updates (if you subscribe), manage customer loyalty, and analyze website usage to optimize your experience. We do not sell or trade your data with third parties.</p>

                    <h4 className="font-display text-white text-xs uppercase tracking-wider font-bold mt-4">3. Data Security & Storage</h4>
                    <p>We implement robust industry-standard security measures to protect your personal information. Your data is stored securely and only accessible by authorized administrators involved in operations.</p>

                    <h4 className="font-display text-white text-xs uppercase tracking-wider font-bold mt-4">4. Your Rights & Choices</h4>
                    <p>You have the right to request access to the personal data we hold about you, request corrections, or ask for deletion of your information (such as opting out of our email newsletters) at any time by contacting us at hello@cafe.cafe.</p>
                  </>
                )}

                {activeModal === 'terms' && (
                  <>
                    <p className="font-serif italic text-sm text-[#E6C84F]">Last Updated: June 24, 2026</p>
                    <p>Welcome to CAFE. By accessing our website, booking tables, or dining at our biophilic cafe sanctuary in Nagpur, you agree to comply with and be bound by the following Terms of Service.</p>
                    
                    <h4 className="font-display text-white text-xs uppercase tracking-wider font-bold mt-4">1. Reservations & Table Booking</h4>
                    <p>Reservations are subject to availability. To secure your table, we require complete and accurate information. Tables are held for a maximum of 15 minutes past the reservation time before being released to walk-in guests.</p>

                    <h4 className="font-display text-white text-xs uppercase tracking-wider font-bold mt-4">2. Use of Our Site & Intellectual Property</h4>
                    <p>All content on this website, including texts, animations, layouts, menus, and branding, is the intellectual property of CAFE. Any unauthorized copying, distribution, or reproduction is strictly prohibited.</p>

                    <h4 className="font-display text-white text-xs uppercase tracking-wider font-bold mt-4">3. Code of Conduct & Dining Experience</h4>
                    <p>We are dedicated to providing an aesthetic, relaxing biophilic sanctuary for all patrons. We reserve the right to refuse service or ask guests to leave if their behavior is disruptive or harms the dining experience of others.</p>

                    <h4 className="font-display text-white text-xs uppercase tracking-wider font-bold mt-4">4. Limitations of Liability</h4>
                    <p>CAFE shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of this website, online reservation systems, or dining services.</p>
                  </>
                )}

                {activeModal === 'cookies' && (
                  <>
                    <p className="font-serif italic text-sm text-[#E6C84F]">Cookie Configuration Panel</p>
                    <p>We use cookies to personalize your experience, remember your preferences, and analyze our site traffic. By adjusting these settings, you can control which categories of cookies you permit us to store on your device.</p>
                    
                    <div className="space-y-4 mt-6">
                      <div className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl">
                        <div>
                          <p className="font-display text-white text-xs uppercase font-bold">Essential Cookies</p>
                          <p className="text-[10px] text-[#FAF7F0]/50 mt-1">Required for basic website functions, secure logins, and reservation processing. Cannot be disabled.</p>
                        </div>
                        <span className="text-[10px] bg-[#E6C84F]/20 text-[#E6C84F] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Required</span>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl">
                        <div>
                          <p className="font-display text-white text-xs uppercase font-bold">Analytical & Performance Cookies</p>
                          <p className="text-[10px] text-[#FAF7F0]/50 mt-1">Allows us to count visits and trace traffic sources so we can measure and improve the speed and flow of our site.</p>
                        </div>
                        <button className="text-[10px] bg-white/10 hover:bg-white/25 text-white font-bold px-4 py-2 rounded-full uppercase tracking-wider transition-colors">Enabled</button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl">
                        <div>
                          <p className="font-display text-white text-xs uppercase font-bold">Marketing & Personalization Cookies</p>
                          <p className="text-[10px] text-[#FAF7F0]/50 mt-1">Used to offer personalized aesthetic recommendations, show local Nagpur events, and deliver tailored menu updates.</p>
                        </div>
                        <button className="text-[10px] bg-white/10 hover:bg-white/25 text-white font-bold px-4 py-2 rounded-full uppercase tracking-wider transition-colors">Enabled</button>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-3">
                      <button onClick={() => setActiveModal(null)} className="font-display text-[10px] uppercase tracking-wider bg-[#E6C84F] hover:bg-white text-[#1E1815] py-2.5 px-6 rounded-full font-black transition-colors">
                        Save Preferences
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
