'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      autoRaf: true, // Let Lenis handle its own RAF if possible or use our own
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
