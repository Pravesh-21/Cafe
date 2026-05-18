import type { Metadata } from 'next';
import { Oswald, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '700'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'CRAVERS — Specialty Microlots & Precision Extraction',
  description:
    'Members-only specialty direct-trade coffee reserve. Ultra-premium micro-lots sourced at extreme altitudes, roasted with obsession.',
  keywords: 'specialty coffee, direct trade, microlots, single origin, coffee subscription',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${oswald.variable} ${playfair.variable} ${jakarta.variable} font-sans antialiased bg-[#FAF7F0] text-[#1E1815] overflow-x-hidden`}
      >
        <Cursor />
        <Navbar />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
