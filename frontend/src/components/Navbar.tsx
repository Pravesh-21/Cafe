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
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled threshold for transparent top state
      setScrolled(currentScrollY > 30);

      // Hide navbar on scroll down, reveal on scroll up
      if (currentScrollY <= 30) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false); // Scrolling down - hide
      } else {
        setVisible(true); // Scrolling up - show
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isHome = pathname === '/';
  const isAtTopHome = !scrolled && isHome;
  const logoColor = isAtTopHome ? 'text-white hover:text-[#E6C84F]' : 'text-[#1E1815] hover:text-[#B5654A]';
  const textMuted = isAtTopHome ? 'text-white/70 hover:text-white' : 'text-[#1E1815]/60 hover:text-[#1E1815]';
  const activeLinkColor = isAtTopHome ? 'text-[#E6C84F]' : 'text-[#B5654A]';
  const burgerColor = (isAtTopHome && !menuOpen) ? 'bg-white' : 'bg-[#1E1815]';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled
            ? 'bg-[#FAF7F0]/10 backdrop-blur-md shadow-sm border-b border-[#1E1815]/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`font-display text-2xl font-black tracking-tighter uppercase transition-colors duration-300 ${logoColor}`}
          >
            CAFE
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.2em] font-black transition-colors duration-300 ${
                  pathname === link.href
                    ? activeLinkColor
                    : textMuted
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
              className={`hidden md:flex items-center gap-1.5 font-display text-[11px] uppercase tracking-wider py-2.5 px-6 rounded-full font-black transition-all shadow-sm ${
                isAtTopHome
                  ? 'bg-white/10 hover:bg-white/25 text-white border border-white/20 backdrop-blur-sm'
                  : 'bg-[#E6C84F] hover:bg-[#E6C84F]/80 text-[#1E1815]'
              }`}
            >
              Reserve <span>→</span>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 z-50"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 transition-all duration-300 ${burgerColor} ${menuOpen ? 'rotate-45 translate-y-2 bg-[#1E1815]' : ''}`} />
              <span className={`block w-5 h-0.5 transition-all duration-300 ${burgerColor} ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 transition-all duration-300 ${burgerColor} ${menuOpen ? '-rotate-45 -translate-y-2 bg-[#1E1815]' : ''}`} />
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
