'use client';

import React, { useState, useEffect } from 'react';
import AICursor from './AICursor';
import SmoothScroll from './SmoothScroll';
import CookieConsent from './CookieConsent';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <SmoothScroll>
      <AICursor />
      {children}
      <CookieConsent />
    </SmoothScroll>
  );
}
