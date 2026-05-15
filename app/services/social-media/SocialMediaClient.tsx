'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Users, 
  Share2, 
  Megaphone, 
  MessageSquare, 
  Target, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube, 
  ChevronLeft,
  Smartphone,
  Facebook,
  Heart,
  MessageCircle,
  ShieldAlert,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

const socialServices = [
  {
    title: 'إدارة السوشال ميديا',
    subtitle: 'Social Media Management',
    desc: 'إدارة كاملة لمنصاتك — تخطيط، إنتاج، نشر، تفاعل، وتقارير أداء دورية.',
    price: 'يبدأ من 2,800 ر.س شهرياً',
    icon: Share2,
  },
  {
    title: 'التسويق عبر المؤثرين',
    subtitle: 'KOL & Influencer Marketing',
    desc: 'شراكات مع مؤثرين سعوديين وخليجيين، اختيار دقيق، تنفيذ احترافي، وقياس أثر فعلي.',
    price: 'عرض مخصص لكل حملة',
    icon: Users,
  },
  {
    title: 'استراتيجية السوشال ميديا',
    subtitle: 'Social Media Strategy',
    desc: 'خطة متكاملة لحضورك الرقمي — أهداف، جمهور، قنوات، محتوى، KPIs، وتقويم نشر.',
    price: 'يبدأ من 5,000 ر.س مرة واحدة',
    icon: Target,
  },
  {
    title: 'إدارة المجتمعات الرقمية',
    subtitle: 'Community Management',
    desc: 'ردود فعالة على التعليقات والرسائل، إدارة الأزمات، وبناء مجتمع متفاعل حول علامتك.',
    price: 'يبدأ من 2,200 ر.س شهرياً',
    icon: MessageSquare,
  }
];

const platforms = [
  { name: 'Instagram', icon: Instagram },
  { name: 'TikTok', icon: Smartphone },
  { name: 'X (Twitter)', icon: Twitter },
  { name: 'LinkedIn', icon: Linkedin },
  { name: 'Snapchat', icon: Megaphone },
  { name: 'Facebook', icon: Facebook },
  { name: 'YouTube Shorts', icon: Youtube },
];

const contentTypes = [
  'Reels', 'Carousels', 'Stories', 'Posts', 'Motion Graphics', 'Founder Content', 'Educational Content', 'Campaign Content', 'Community Posts'
];

export default function SocialMediaClient() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-pure-ink">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="grid-pattern" />
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 mb-6 border border-pulse-orange/30 rounded-full bg-pulse-orange/5 text-pulse-orange text-xs font-bold tracking-widest uppercase font-mono">
              Social Media & Community Management
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-snow max-w-4xl mx-auto">
              نتحدث بصوت علامتك. <br />
              <span className="text-pulse-orange">كل يوم.</span>
            </h1>
            <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              إدارة منصاتك باستراتيجية واضحة، محتوى يتحدث بصوتك، وحضور يبني ولاءً حقيقياً لا مجرد أرقام متابعين صامتة.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-lg px-10 py-4">
                اطلب إدارة السوشال
              </Link>
              <Link href="/services/seo-content" className="btn-secondary w-full sm:w-auto text-lg px-10 py-4">
                شاهد خدمات المحتوى
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 border-y border-gray-dark bg-gray-dark/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-snow">
              السوشال ميديا ليس مجرد جدول نشر
            </h2>
            <p className="text-gray-medium text-lg lg:text-xl leading-relaxed font-medium">
              في AGMA، ندرك أن الربح في المنصات الاجتماعية لا يأتي من النشر العشوائي. الإدارة الحقيقية تبدأ من الفهم العميق لشخصية العلامة، دراسة الجمهور المستهدف بدقة، ثم تحويل ذلك إلى استراتيجية محتوى، تفاعل حيوي، وإدارة مجتمع ذكية تبني علاقة مستدامة مع العميل.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-snow">الخدمات الأساسية</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {socialServices.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="geometric-card group bg-gray-dark/10 p-8 lg:p-12 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-pulse-orange/10 rounded-sm flex items-center justify-center text-pulse-orange transition-colors group-hover:bg-pulse-orange group-hover:text-snow">
                    <service.icon size={28} />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] text-pulse-orange font-bold uppercase tracking-widest font-mono">{service.subtitle}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-snow">{service.title}</h3>
                  </div>
                  <p className="text-gray-medium text-lg leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t border-gray-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="block text-[10px] text-gray-medium font-bold uppercase tracking-widest mb-1">باقاتنا</span>
                    <span className="text-xl font-bold text-snow">{service.price}</span>
                  </div>
                  <Link href="/contact" className="text-pulse-orange text-sm font-bold flex items-center gap-2 group/link">
                    اطلب الخدمة <ChevronLeft size={16} className="group-hover/link:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Voice Building */}
      <section className="py-24 px-6 border-y border-gray-dark bg-deep-navy/10 relative overflow-hidden">
        <div className="grid-pattern opacity-[0.02]" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-snow leading-tight">
                كيف نبني صوت <br />
                <span className="text-pulse-orange">علامتك التجارية؟</span>
              </h2>
              <p className="text-gray-medium text-lg leading-relaxed font-medium">
                الصوت الموحد هو سر الثقة. نحن نحدد كيف تتحدث علامتك ومع من، وبأي نغمة.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  { label: 'شخصية العلامة', icon: Heart },
                  { label: 'نبرة الحديث', icon: MessageCircle },
                  { label: 'لغة الجمهور', icon: Users },
                  { label: 'الرسائل الرئيسية', icon: Target },
                  { label: 'أسلوب الردود', icon: MessageSquare },
                  { label: 'إدارة الأزمات', icon: ShieldAlert },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-snow font-bold">
                    <item.icon className="text-pulse-orange" size={20} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="aspect-square bg-gray-dark/20 border border-gray-dark flex flex-col items-center justify-center p-8 text-center gap-6">
                  <div className="w-24 h-24 rounded-full border-2 border-pulse-orange flex items-center justify-center relative">
                     <Users className="text-pulse-orange" size={40} />
                     <div className="absolute -top-1 -right-1 w-6 h-6 bg-pulse-orange rounded-full flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-snow" />
                     </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-snow font-bold text-xl">بناء المجتمع الرقمي</h4>
                    <p className="text-gray-medium text-sm font-medium">نحن لا نجمع لايكات، نحن نصنع انتماء.</p>
                  </div>
                  <div className="flex gap-2">
                     <div className="w-12 h-1 bg-pulse-orange/20 rounded-full" />
                     <div className="w-24 h-1 bg-pulse-orange rounded-full shadow-[0_0_10px_rgba(255,102,0,0.5)]" />
                     <div className="w-12 h-1 bg-pulse-orange/20 rounded-full" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-snow">ما الذي نديره؟</h2>
            <p className="text-gray-medium mt-4 font-medium">حضور قوي على المنصات التي يتواجد فيها عملاؤك فعلياً.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-1">
            {platforms.map((platform, i) => (
              <div key={i} className="geometric-card bg-gray-dark/10 p-8 flex flex-col items-center justify-center gap-4 text-center group">
                 <platform.icon className="text-gray-medium transition-colors group-hover:text-pulse-orange" size={32} />
                 <span className="text-snow font-bold text-xs tracking-tight">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-24 px-6 border-y border-gray-dark bg-gray-dark/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-snow">أنواع المحتوى</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
             {contentTypes.map((type, i) => (
               <div key={i} className="px-8 py-4 border border-gray-dark bg-gray-dark/10 text-snow font-bold text-sm hover:border-pulse-orange transition-colors">
                  {type}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="border border-gray-dark p-12 lg:p-20 text-center relative overflow-hidden bg-gray-dark/5">
            <div className="grid-pattern opacity-[0.03]" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-snow leading-tight">
                حوّل حساباتك من واجهة صامتة <br />
                <span className="text-pulse-orange">إلى قناة نمو حقيقية.</span>
              </h2>
              <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                دعنا نبني صوت علامتك الفريد، ونحوّله إلى حضور يومي واضح ومؤثر يحقق نتائج أعمال ملموسة.
              </p>
              <Link href="/contact" className="btn-primary text-xl px-12 py-5 shadow-2xl shadow-pulse-orange/20">
                اطلب خطة سوشال ميديا
              </Link>
              <div className="mt-8 flex justify-center gap-8 text-xs text-gray-medium font-bold uppercase tracking-widest">
                <Link href="/services/seo-content" className="hover:text-snow">السيو والمحتوى</Link>
                <Link href="/services/branding-creative" className="hover:text-snow">الهوية والتصميم</Link>
                <Link href="/contact" className="hover:text-snow">تواصل معنا</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Suggested Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Social Media & Community Management",
            "provider": {
              "@type": "AdvertisingAgency",
              "name": "AGMA | وكالة جيل الذكاء الاصطناعي"
            },
            "description": "إدارة منصات التواصل الاجتماعي، التسويق عبر المؤثرين، وبناء الاستراتيجيات الرقمية في السعودية.",
            "areaServed": "SA",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Social Media Services",
              "itemListElement": socialServices.map(s => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": s.title
                }
              }))
            }
          }),
        }}
      />
    </main>
  );
}
