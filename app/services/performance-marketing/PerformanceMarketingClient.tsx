'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { 
  Target, 
  BarChart3, 
  TrendingUp, 
  MousePointerClick, 
  Search, 
  Layers, 
  Activity, 
  AlertCircle, 
  ChevronLeft,
  Users,
  Megaphone,
  Zap,
  Globe
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'إعلانات السوشال المدفوعة',
    subtitle: 'Paid Social Ads',
    platforms: 'Meta, TikTok, X, Snapchat',
    desc: 'حملات مدفوعة على المنصات الاجتماعية، باستهداف دقيق، إبداع متجدد، واختبارات مستمرة.',
    price: 'يبدأ من 2,500 ر.س شهرياً',
    icon: Megaphone,
  },
  {
    title: 'إعلانات جوجل',
    subtitle: 'Google Ads',
    platforms: 'Search, Display, YouTube',
    desc: 'حملات بحث وظهور ويوتيوب، مبنية على نية العميل، الكلمات المفتاحية، وتحسين تكلفة الحصول على العميل.',
    price: 'يبدأ من 2,500 ر.س شهرياً',
    icon: Search,
  },
  {
    title: 'الإعلانات البرمجية',
    subtitle: 'Programmatic Advertising',
    platforms: 'Display, Video, DSP',
    desc: 'شراء إعلاني آلي عبر منصات DSP، للحملات الكبرى التي تحتاج وصولاً واسعاً واستهدافاً دقيقاً.',
    price: 'عرض مخصص',
    icon: Layers,
  },
  {
    title: 'تحسين معدل التحويل',
    subtitle: 'CRO',
    platforms: 'LPs, A/B Testing',
    desc: 'تحليل سلوك المستخدم، اختبارات A/B، تحسين صفحات الهبوط، ورفع التحويل دون زيادة الميزانية.',
    price: 'يبدأ من 3,800 ر.س لكل Engagement',
    icon: MousePointerClick,
  }
];

const managementSteps = [
  'تحليل الجمهور',
  'بناء الرسائل',
  'تجهيز الإبداع الإعلاني',
  'إعداد التتبع',
  'إطلاق الحملات',
  'اختبار A/B',
  'تحسين مستمر',
  'تقرير واضح'
];

const metrics = [
  { label: 'CTR', icon: MousePointerClick },
  { label: 'CPC', icon: Activity },
  { label: 'CPA', icon: Target },
  { label: 'ROAS', icon: TrendingUp },
  { label: 'Conversion Rate', icon: Zap },
  { label: 'Leads Quality', icon: Users },
  { label: 'Cost per Lead', icon: BarChart3 },
  { label: 'LP Performance', icon: Globe },
];

const failureReasons = [
  { title: 'صفحة هبوط ضعيفة', desc: 'مهما كان الإعلان ناجحاً، الصفحة غير المهيأة تفشل في تحويل الزائر إلى عميل.' },
  { title: 'رسالة غير واضحة', desc: 'الغموض في العرض أو عدم وضوح القيمة المضافة يقتل الاهتمام في ثوانٍ.' },
  { title: 'استهداف واسع', desc: 'محاولة الوصول للجميع تعني الوصول لغير المهتمين وهدر الميزانية.' },
  { title: 'عدم وجود تتبع', desc: 'بدون بكسل وتتبع دقيق، أنت تقود سيارتك في الظلام دون عدادات.' },
  { title: 'عدم اختبار كافٍ', desc: 'الاعتماد على إبداع إعلاني واحد دون اختبار البدائل (A/B) يحد من النتائج.' },
  { title: 'تصميم جميل لكنه لا يبيع', desc: 'الجمالية مطلوبة، لكن الوضوح والطلب المباشر (CTA) هما ما يحققان الأرقام.' },
];

export default function PerformanceMarketingClient() {
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
              Performance Marketing & Ads
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-snow max-w-4xl mx-auto">
              نقيس كل نقرة. <br />
              <span className="text-pulse-orange">ونرفع عائد كل ريال.</span>
            </h1>
            <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              حملات مدفوعة، تحسين تحويلات، واستهداف ذكي يعتمد على البيانات — نمو مدفوع بالأرقام، لا بالتخمين.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-lg px-10 py-4">
                ابدأ حملة مدفوعة
              </Link>
              <Link href="/contact" className="btn-secondary w-full sm:w-auto text-lg px-10 py-4">
                اطلب تحليل حسابك الإعلاني
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
              فلسفتنا في الأداء
            </h2>
            <p className="text-gray-medium text-lg lg:text-xl leading-relaxed font-medium">
              في AGMA، نؤمن بأن الإعلان ليس مجرد إطلاق ميزانية، بل هو منظومة دفع تبدأ من صياغة الرسالة المناسبة للجمهور الصحيح، وتوجيههم لصفحة هبوط جاهزة للتحويل، ثم إخضاع كل ذلك لعمليات قياس وتحسين لا تتوقف. نحن لا نصرف المال، نحن نستثمره لتحقيق عائد.
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="geometric-card group bg-gray-dark/10 p-8 lg:p-12 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-pulse-orange/10 rounded-sm flex items-center justify-center text-pulse-orange transition-colors group-hover:bg-pulse-orange group-hover:text-snow">
                    {React.createElement(service.icon, { size: 28 })}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                         <span className="text-[10px] text-pulse-orange font-bold uppercase tracking-widest font-mono">{service.subtitle}</span>
                         <span className="text-[9px] text-gray-medium font-bold uppercase tracking-widest border border-gray-dark px-2 rounded-full">{service.platforms}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-snow">{service.title}</h3>
                  </div>
                  <p className="text-gray-medium text-lg leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t border-gray-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="block text-[10px] text-gray-medium font-bold uppercase tracking-widest mb-1">إدارة الحملات</span>
                    <span className="text-xl font-bold text-snow">{service.price}</span>
                  </div>
                  <Link href="/contact" className="btn-primary py-3 px-6 text-sm">
                    ابدأ الآن
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 px-6 border-y border-gray-dark bg-deep-navy/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-snow">ما الذي نقيسه؟</h2>
            <p className="text-gray-medium max-w-2xl mx-auto font-medium mt-4">نحن مهووسون بالأرقام. إليك أهم المؤشرات التي نتابعها لحظياً لضمان نجاح حملتك.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {metrics.map((metric, i) => (
              <div key={i} className="geometric-card bg-gray-dark/5 p-8 text-center space-y-4 group">
                <metric.icon className="text-pulse-orange mx-auto transition-transform group-hover:scale-110" size={24} />
                <h4 className="text-snow font-bold text-sm tracking-tight">{metric.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Manage Campaigns Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-snow leading-tight">
                كيف ندير الحملة؟ <br />
                <span className="text-pulse-orange">من الاستهداف إلى التقرير.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {managementSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-gray-dark bg-gray-dark/5">
                    <span className="text-pulse-orange font-mono font-bold text-lg">0{i+1}</span>
                    <span className="text-snow font-bold text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
                <div className="aspect-square bg-gray-dark/20 border border-gray-dark relative flex items-center justify-center p-12">
                   <div className="grid-pattern opacity-[0.05]" />
                   <div className="w-full h-full border border-pulse-orange/20 rounded-full flex items-center justify-center animate-spin-slow">
                      <div className="w-1/2 h-1/2 border border-pulse-orange/40 rounded-full animate-reverse-spin" />
                   </div>
                   <Target className="absolute text-pulse-orange w-24 h-24 drop-shadow-[0_0_15px_rgba(255,102,0,0.3)]" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Failure Reasons Section */}
      <section className="py-24 px-6 border-y border-gray-dark bg-gray-dark/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-snow">لماذا تفشل الحملات أحياناً؟</h2>
            <p className="text-gray-medium max-w-2xl mx-auto font-medium mt-4 text-lg">نحن نصحح المسار قبل الوقوع في الفخ.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {failureReasons.map((reason, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlertCircle className="text-red-500" size={20} />
                  <h3 className="text-xl font-bold text-snow">{reason.title}</h3>
                </div>
                <p className="text-gray-medium text-sm leading-relaxed font-medium">
                  {reason.desc}
                </p>
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
                لا تبدأ بإعلان. <br />
                <span className="text-pulse-orange">ابدأ بنظام أداء.</span>
              </h2>
              <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                دعنا نراجع هدفك، جمهورك، قنواتك، وصفحة التحويل قبل صرف أي ميزانية لضمان أفضل عائد ممكن.
              </p>
              <Link href="/contact" className="btn-primary text-xl px-12 py-5 shadow-2xl shadow-pulse-orange/20">
                اطلب تحليل حملة مجاناً
              </Link>
              <div className="mt-8 flex justify-center gap-8 text-xs text-gray-medium font-bold uppercase tracking-widest">
                <Link href="/services/web-digital" className="hover:text-snow">المواقع والمنتجات</Link>
                <Link href="/services/seo-content" className="hover:text-snow">السيو والمحتوى</Link>
                <Link href="/pricing" className="hover:text-snow">التسعير</Link>
                <Link href="/contact" className="hover:text-snow">تواصل</Link>
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
            "serviceType": "Performance Marketing & Ads",
            "provider": {
              "@type": "AdvertisingAgency",
              "name": "AGMA | وكالة جيل الذكاء الاصطناعي"
            },
            "description": "حملات إعلانية مدفوعة على جوجل وسوشال ميديا تركز على النتائج الملموسة وعائد الاستثمار.",
            "areaServed": "SA",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Ads Services",
              "itemListElement": services.map(s => ({
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
