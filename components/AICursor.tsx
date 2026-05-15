'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const AICursor = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setIsMounted(true);
      const mobileCheck = window.matchMedia('(pointer: coarse)').matches;
      setIsMobile(mobileCheck);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  useEffect(() => {
    if (isMobile || !isMounted) return;

    // Add class to hide native cursor once custom one is ready
    const html = document.documentElement;
    html.classList.add('custom-cursor-active');

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      try {
        const target = e.target as Element;
        if (!target || typeof target.closest !== 'function') {
          setIsHovering(false);
          setCursorText('');
          return;
        }

        const isClickable = target.closest('a, button, [data-cursor="hover"]');
        
        if (isClickable) {
          setIsHovering(true);
          const text = isClickable.getAttribute('data-cursor-text');
          setCursorText(text || '');
        } else {
          setIsHovering(false);
          setCursorText('');
        }
      } catch (err) {
        console.error('AICursor error:', err);
      }
    };

    window.addEventListener('mousemove', moveMouse, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      html.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile, isMounted, isVisible, mouseX, mouseY]);

  if (!isMounted || isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-pulse-orange rounded-full mix-blend-difference shadow-[0_0_10px_rgba(244,77,43,0.5)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-pulse-orange/50 mix-blend-difference"
        animate={{
          width: isHovering ? 80 : 32,
          height: isHovering ? 80 : 32,
          backgroundColor: isHovering ? 'rgba(242, 125, 38, 0.15)' : 'rgba(242, 125, 38, 0)',
        }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 0.8 : 0,
        }}
      >
        {isHovering && cursorText && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-snow uppercase tracking-wider text-center px-1"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
      
      {/* AI Aura Effect */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-pulse-orange/5 rounded-full blur-[80px] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 0.3 : 0,
        }}
      />
    </div>
  );
};

export default AICursor;
