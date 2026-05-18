'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Block scroll while loading
    document.body.style.overflow = 'hidden';

    const container = containerRef.current;
    const letters = lettersRef.current?.querySelectorAll('.ltr');
    const bar = barRef.current;
    const percent = percentRef.current;

    if (!letters || !bar || !percent || !container) return;

    let count = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        // Slide up the loader to reveal site
        gsap.to(container, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power4.inOut',
          onComplete: () => {
            document.body.style.overflow = '';
            onComplete();
          },
        });
      },
    });

    // Letters appear staggered
    tl.fromTo(
      letters,
      { opacity: 0, y: 40, rotateX: -60 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power4.out',
      }
    );

    // Progress bar grows + counter
    tl.to(
      count,
      {
        val: 100,
        duration: 1.8,
        ease: 'power1.inOut',
        onUpdate: () => {
          if (percent) percent.textContent = `${Math.round(count.val)}%`;
          if (bar) bar.style.transform = `scaleX(${count.val / 100})`;
        },
      },
      '-=0.3'
    );

    // Brief pause at 100%
    tl.to({}, { duration: 0.3 });

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1E1815] overflow-hidden"
      style={{ perspective: '600px' }}
    >
      {/* Cravers wordmark */}
      <div
        ref={lettersRef}
        className="flex items-end gap-1 mb-10"
        style={{ fontFamily: 'var(--font-display)', perspective: '600px' }}
      >
        {'CRAVERS'.split('').map((char, i) => (
          <span
            key={i}
            className="ltr inline-block text-[clamp(56px,10vw,110px)] font-black text-[#FAF7F0] tracking-tighter leading-none uppercase"
          >
            {char}
          </span>
        ))}
      </div>

      {/* Tagline */}
      <p className="text-[#B5654A] text-xs uppercase tracking-[0.4em] font-bold mb-8"
         style={{ fontFamily: 'var(--font-sans)' }}>
        Specialty Direct-Trade Coffee
      </p>

      {/* Progress bar */}
      <div className="w-64 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
        <div
          ref={barRef}
          className="absolute inset-0 bg-[#E6C84F] origin-left rounded-full"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      {/* Percentage */}
      <span
        ref={percentRef}
        className="mt-3 text-white/30 text-xs font-mono"
      >
        0%
      </span>
    </div>
  );
}
