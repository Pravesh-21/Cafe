'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/story', label: 'Our Story' },
  { href: '/blends', label: 'Menu' },
  { href: '/cupping', label: 'Rituals' },
  { href: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF7F0]/95 backdrop-blur-lg shadow-sm border-b border-[#1E1815]/6'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl font-black tracking-tighter text-[#1E1815] uppercase hover:text-[#B5654A] transition-colors duration-300"
          >
            CRAVERS
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.2em] font-black transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-[#B5654A]'
                    : 'text-[#1E1815]/60 hover:text-[#1E1815]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/access"
              className="hidden md:flex items-center gap-1.5 font-display text-[11px] uppercase tracking-wider bg-[#E6C84F] hover:bg-[#E6C84F]/80 text-[#1E1815] py-2.5 px-6 rounded-full font-black transition-all shadow-sm"
            >
              Reserve <span>→</span>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-[#1E1815] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#1E1815] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#1E1815] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#FAF7F0] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-display text-4xl font-black uppercase text-[#1E1815] hover:text-[#B5654A] transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/access"
          className="mt-4 font-display text-sm uppercase tracking-wider bg-[#E6C84F] text-[#1E1815] py-4 px-10 rounded-full font-black"
        >
          Reserve →
        </Link>
      </div>
    </>
  );
}
