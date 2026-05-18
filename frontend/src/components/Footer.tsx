import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1E1815] text-[#FAF7F0]/40 py-16 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <span className="font-display text-3xl font-black text-white tracking-tighter block mb-3">CRAVERS</span>
          <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
            Members-only specialty direct-trade coffee reserve. Ultra-premium micro-lots sourced at extreme altitudes.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#E6C84F] block mb-4">Explore</span>
          <div className="flex flex-col gap-3">
            {[
              { href: '/', label: 'Home' },
              { href: '/story', label: 'Our Story' },
              { href: '/blends', label: 'Browse Blends' },
              { href: '/cupping', label: 'Rituals' },
              { href: '/faq', label: 'FAQ' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300 font-black"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Access */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#E6C84F] block mb-4">Access</span>
          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            Limited seats available this season. Apply for membership to unlock the reserve list.
          </p>
          <Link
            href="/access"
            className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-wider bg-[#E6C84F] text-[#1E1815] py-3 px-7 rounded-full font-black hover:opacity-90 transition-opacity"
          >
            Request Access →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-gray-600 uppercase tracking-widest">
          © 2026 CRAVERS COFFEE INC. All rights reserved.
        </p>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest text-gray-600">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
          <span className="hover:text-white cursor-pointer transition-colors">Contact</span>
        </div>
      </div>
    </footer>
  );
}
