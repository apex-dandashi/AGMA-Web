'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Megaphone, 
  Tv, 
  Calendar, 
  CheckCircle2, 
  ChevronLeft,
  Users,
  ShieldCheck,
  Zap,
  Target,
  Share2,
  FileText,
  BarChart3,
  Camera
} from 'lucide-react';
import Link from 'next/link';

export default function PRMediaPage() {
  const prServices = [
    {
      title: 'العلاقات العامة وإدارة الإعلام',
      subtitle: 'PR & Media Relations',
      desc: 'بناء علاقات إعلامية، إعداد وتوزيع بيانات صحفية، إدارة الرسائل، وتعزيز حضور العلامة في القنوات المناسبة.',
      icon: Megaphone,
    },
    {
      title: 'الشراء الإعلامي',
      subtitle: 'Media Buying',
      desc: 'حضور مدروس في الإعلام التقليدي والرقمي، اللوحات الخارجية، الراديو، والمنصات المناسبة حسب هدف الحملة.',
      icon: Tv,
    },
    {
      title: 'تسويق الفعاليات والتفعيلات',
      subtitle: 'Event Marketing & Activations',
      desc: 'تخطيط وتسويق وتغطية الفعاليات، المعارض، والتفعيلات الميدانية قبل وأثناء وبعد الحدث.',
      icon: Calendar,
    }
  ];

  const methodologySteps = [
    { title: 'تحديد الرسائل', icon: FileText },
    { title: 'اختيار القنوات', icon: Target },
    { title: 'تجهيز المواد الإعلامية', icon: Camera },
    { title: 'إدارة النشر', icon: Megaphone },
    { title: 'تغطية الحدث', icon: Share2 },
    { title: 'قياس الأثر', icon: BarChart3 },
    { title: 'تقرير ختامي', icon: FileText }
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
              PR & Media
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-snow max-w-4xl mx-auto">
              نوصل صوتك. <br />
              <span className="text-pulse-orange">بدقة.</span>
            </h1>
            <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              علاقات عامة، حضور إعلامي، شراء إعلاني، وتفعيل للفعاليات — لنمنح علامتك صوتاً واضحاً في القنوات الصحيحة.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-lg px-10 py-4">
                اطلب خطة إعلامية
              </Link>
              <Link href="/contact" className="btn-secondary w-full sm:w-auto text-lg px-10 py-4">
                 تواصل معنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why PR is important */}
      <section className="py-24 px-6 border-y border-gray-dark bg-gray-dark/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-snow">
              لماذا العلاقات العامة مهمة؟
            </h2>
            <p className="text-gray-medium text-lg lg:text-xl leading-relaxed font-medium">
              العلاقات العامة لا تعني الظهور الإعلامي فحسب، بل هي فن بناء الثقة المستدامة وإدارة الرسائل الاستراتيجية. في AGMA، نساعد العلامات على حماية سمعتها، وتوسيع حضورها في اللحظات المفصلية، وضمان أن تصل رسالتها للجمهور الصحيح في الوقت الصحيح وبالنبرة التي تخدم أهدافها المؤسسية.
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
            {prServices.map((service, i) => (
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

      {/* When do you need this service? */}
      <section className="py-24 px-6 border-y border-gray-dark bg-deep-navy/10 relative overflow-hidden">
        <div className="grid-pattern opacity-[0.02]" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-snow">متى تحتاج هذه الخدمة؟</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: 'إطلاق علامة جديدة', icon: Zap },
              { title: 'إطلاق منتج', icon: Target },
              { title: 'دخول سوق جديد', icon: Share2 },
              { title: 'إدارة سمعة', icon: ShieldCheck },
              { title: 'حملة توعية', icon: Megaphone },
              { title: 'فعالية أو معرض', icon: Calendar },
              { title: 'توسع مؤسسي', icon: Users },
            ].map((item, i) => (
              <div key={i} className="geometric-card bg-gray-dark/5 p-8 flex flex-col items-center justify-center gap-4 text-center group">
                 <item.icon className="text-pulse-orange" size={24} />
                 <span className="text-snow font-bold text-sm tracking-tight">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work? (Methodology) */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-snow">كيف نعمل؟</h2>
            <p className="text-gray-medium mt-4 font-medium">مسار منظم يضمن وصول رسالتك بأفضل صورة ممكنة.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
             {methodologySteps.map((step, i) => (
               <div key={i} className="space-y-4 border-r border-gray-dark pr-6">
                  <span className="text-pulse-orange font-mono font-bold text-xs">PHASE 0{i+1}</span>
                  <div className="flex items-center gap-3">
                    <step.icon className="text-gray-medium" size={20} />
                    <h4 className="text-snow font-bold text-sm">{step.title}</h4>
                  </div>
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
                الحضور الإعلامي <br />
                <span className="text-pulse-orange">لا يحدث بالصدفة.</span>
              </h2>
              <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                دعنا نبني رسالة واضحة، ونوصلها للجمهور الصحيح عبر القنوات المناسبة.
              </p>
              <Link href="/contact" className="btn-primary text-xl px-12 py-5 shadow-2xl shadow-pulse-orange/20">
                اطلب خطة إعلامية
              </Link>
              <div className="mt-8 flex justify-center gap-8 text-xs text-gray-medium font-bold uppercase tracking-widest">
                <Link href="/services/branding-creative" className="hover:text-snow">الهوية والتصميم</Link>
                <Link href="/services/social-media" className="hover:text-snow">السوشال ميديا</Link>
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
            "serviceType": "PR & Media",
            "provider": {
              "@type": "AdvertisingAgency",
              "name": "AGMA | وكالة جيل الذكاء الاصطناعي"
            },
            "description": "خدمات العلاقات العامة، الشراء الإعلامي، وتسويق الفعاليات في المملكة العربية السعودية.",
            "areaServed": "SA",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "PR Services",
              "itemListElement": prServices.map(s => ({
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
