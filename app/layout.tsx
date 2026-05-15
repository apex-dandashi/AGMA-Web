import type { Metadata } from 'next';
import { Tajawal, IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';
import AICursor from '@/components/AICursor';
import SmoothScroll from '@/components/SmoothScroll';
import CookieConsent from '@/components/CookieConsent';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | AGMA',
    default: 'AGMA | وكالة جيل الذكاء الاصطناعي',
  },
  description: 'وكالتك الكاملة في عصر الذكاء الاصطناعي. نحن وكالة سعودية Native-AI مبنية بالذكاء الاصطناعي من الداخل لخدمة العلامات الطموحة.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${ibmPlexSansArabic.variable}`}>
      <body className="antialiased bg-[#0A0A0A] text-[#FAFAFA] font-body" suppressHydrationWarning>
        <SmoothScroll>
          <AICursor />
          {children}
          <CookieConsent />
        </SmoothScroll>
      </body>
    </html>
  );
}
