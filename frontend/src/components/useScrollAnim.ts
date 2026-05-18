'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseScrollAnimOptions {
  y?: number;
  opacity?: number;
  scale?: number;
  stagger?: number;
  duration?: number;
  start?: string;
  delay?: number;
}

/**
 * Attach a scroll-triggered fade-up animation to a container ref.
 * Returns the ref to attach to the element.
 */
export function useScrollAnim<T extends HTMLElement = HTMLDivElement>(options: UseScrollAnimOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 50,
      opacity: opacityTarget = 1,
      scale: scaleTo = 1,
      stagger: staggerVal = 0,
      duration: dur = 0.9,
      start = 'top 82%',
      delay: delayVal = 0,
    } = options;

    const targets = staggerVal > 0 ? el.children : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y, scale: scaleTo < 1 ? scaleTo : 0.97 },
        {
          opacity: opacityTarget,
          y: 0,
          scale: 1,
          duration: dur,
          stagger: staggerVal,
          delay: delayVal,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}
