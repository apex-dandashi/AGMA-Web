'use client';

import React from 'react';
import AICursor from './AICursor';
import SmoothScroll from './SmoothScroll';
import CookieConsent from './CookieConsent';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <AICursor />
      <CookieConsent />
      {children}
    </SmoothScroll>
  );
}
