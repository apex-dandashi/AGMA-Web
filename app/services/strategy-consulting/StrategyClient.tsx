'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { 
  Compass, 
  Cpu, 
  Search, 
  CheckCircle2, 
  ChevronLeft
} from 'lucide-react';
import Link from 'next/link';

export default function StrategyConsultingPage() {
  const consultingServices = [
    {
      title: 'الاستراتيجية التسويقية الشاملة',
      subtitle: 'Marketing Strategy',
      desc: 'خارطة طريق تسويقية لمدة 12 شهراً تشمل الأهداف، الجمهور، القنوات، الميزانية، KPIs، وخطة التنفيذ التفصيلية.',
      icon: Compass,
    },
    {
      title: 'استشارات التحول الرقمي والـ AI',
      subtitle: 'Digital Transformation & AI Consulting',
      desc: 'مساعدة علامتك على دمج الذكاء الاصطناعي في التسويق، العمليات، الأتمتة، إنتاج المحتوى، خدمة العملاء، والتحليل العميق.',
      icon: Cpu,
    },
    {
      title: 'أبحاث السوق وتحليل المنافسين',
      subtitle: 'Market Research & Competitor Analysis',
      desc: 'فهم عميق للسوق السعودي، دراسة سلوك الجمهور، تحليل المنافسين المباشرين، واكتشاف الفجوات والفرص قبل اتخاذ قرارات النمو.',
      icon: Search,
    }
  ];

  const strategyComponents = [
    'تحليل الوضع الحالي', 'تحليل الجمهور', 'تحليل المنافسين',
    'التموضع (Positioning)', 'الرسائل الرئيسية', 'القنوات التسويقية',
    'الميزانية المقترحة', 'مؤشرات الأداء (KPIs)', 'الجدول الزمني (Timeline)',
    'الأولويات (Priorities)', 'خطة العمل (Action Plan)'
  ];

  const targetClients = [
    { title: 'شركة تبدأ التوسع', desc: 'تحتاج إلى أساس استراتيجي صلب للانتقال للمرحلة التالية.' },
    { title: 'علامة تريد دخول السوق السعودي', desc: 'تحتاج لفهم الخصوصية المحلية وتحديد تموضعها المنافس.' },
    { title: 'شركة لديها تسويق مشتت', desc: 'تحتاج لتوحيد الجهود وتركيز الميزانية في القنوات الأكثر فاعلية.' },
    { title: 'جهة تحتاج خطة قبل المناقصة', desc: 'تحتاج لعرض فني واستراتيجي احترافي ومبني على الأرقام.' },
    { title: 'إدارة تريد رؤية أوضح', desc: 'تحتاج لبيانات وتوقعات دقيقة قبل اعتماد الميزانيات السنوية.' },
  ];

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
              Strategy & Consulting
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-snow max-w-4xl mx-auto">
              قبل أن تنفق على التسويق، <br />
              <span className="text-pulse-orange">ابنِ الخطة.</span>
            </h1>
            <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              استراتيجيات تسويقية، تحول رقمي، دمج AI، وأبحاث سوق تساعدك على اتخاذ قرارات أوضح قبل إطلاق الحملات والميزانيات.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-lg px-10 py-4">
                اطلب استراتيجية تسويقية
              </Link>
              <Link href="/contact" className="btn-secondary w-full sm:w-auto text-lg px-10 py-4">
                 احجز جلسة استشارية
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Strategy First */}
      <section className="py-24 px-6 border-y border-gray-dark bg-gray-dark/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-snow">
              لماذا الاستراتيجية أولاً؟
            </h2>
            <p className="text-gray-medium text-lg lg:text-xl leading-relaxed font-medium">
              كثير من الميزانيات التسويقية تضيع هباءً لأن التنفيذ يبدأ قبل وضوح الرؤية. بدون تحديد الجمهور بدقة، وفهم التموضع التنافسي، وصياغة الرسائل الصحيحة، واختيار القنوات المناسبة، وتحديد مؤشرات الأداء (KPIs)؛ يتحول التسويق من استثمار إلى مقامرة. نحن في AGMA نخرجك من دوامة &quot;التجربة والخطأ&quot; إلى &quot;منهجية القرار المدروس&quot;.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-dark/20 max-w-7xl mx-auto">
            {consultingServices.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="geometric-card bg-pure-ink p-10 flex flex-col items-center text-center gap-6 border-none"
              >
                <div className="w-16 h-16 bg-pulse-orange/10 rounded-sm flex items-center justify-center text-pulse-orange transition-colors">
                  <service.icon size={32} />
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-pulse-orange font-bold uppercase tracking-widest font-mono">{service.subtitle}</span>
                    <h3 className="text-2xl font-bold text-snow">{service.title}</h3>
                  </div>
                  <p className="text-gray-medium text-sm leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
                <Link href="/contact" className="mt-auto text-pulse-orange text-sm font-bold flex items-center gap-1 group/link">
                  استفسر الآن <ChevronLeft size={16} className="group-hover/link:-translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What does the strategy include? */}
      <section className="py-24 px-6 border-y border-gray-dark bg-deep-navy/10 relative overflow-hidden">
        <div className="grid-pattern opacity-[0.02]" />
        <div className="container mx-auto relative z-10">
           <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-snow">ماذا تشمل الاستراتيجية؟</h2>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {strategyComponents.map((item, i) => (
                <div key={i} className="geometric-card bg-gray-dark/5 p-6 flex items-center gap-3 group">
                   <div className="w-2 h-2 bg-pulse-orange rounded-full" />
                   <span className="text-snow font-bold text-sm tracking-tight">{item}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Who is this for? */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-snow">لمن هذه الخدمة؟</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {targetClients.map((client, i) => (
              <div key={i} className="p-8 border border-gray-dark bg-gray-dark/5 hover:border-pulse-orange/50 transition-colors">
                <h4 className="text-snow font-bold text-xl mb-4 flex items-center gap-3">
                   <CheckCircle2 className="text-pulse-orange" size={20} />
                   {client.title}
                </h4>
                <p className="text-gray-medium text-sm leading-relaxed font-medium">
                  {client.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 border-t border-gray-dark">
        <div className="container mx-auto">
          <div className="border border-gray-dark p-12 lg:p-20 text-center relative overflow-hidden bg-gray-dark/5">
            <div className="grid-pattern opacity-[0.03]" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-snow leading-tight">
                لا تجعل التسويق مجموعة أنشطة. <br />
                <span className="text-pulse-orange">اجعله خطة نمو.</span>
              </h2>
              <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                ابدأ بخارطة طريق واضحة قبل أن تصرف ميزانيتك على الحملات، المحتوى، والموقع الإلكتروني.
              </p>
              <Link href="/contact" className="btn-primary text-xl px-12 py-5 shadow-2xl shadow-pulse-orange/20">
                اطلب استراتيجية تسويقية
              </Link>
              <div className="mt-8 flex justify-center gap-8 text-xs text-gray-medium font-bold uppercase tracking-widest">
                <Link href="/agma-method" className="hover:text-snow">منهجية AGMA</Link>
                <Link href="/services/performance-marketing" className="hover:text-snow">التسويق الأدائي</Link>
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
            "serviceType": "Marketing Strategy & Consulting",
            "provider": {
              "@type": "AdvertisingAgency",
              "name": "AGMA | وكالة جيل الذكاء الاصطناعي"
            },
            "description": "استشارات استراتيجية تسويقية، تحول رقمي، ودمج الذكاء الاصطناعي في العمليات التجارية في السعودية.",
            "areaServed": "SA",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Strategy Services",
              "itemListElement": consultingServices.map(s => ({
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
