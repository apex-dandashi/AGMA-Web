'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { 
  Palette, 
  Lightbulb, 
  Eye, 
  Zap, 
  ChevronLeft,
  Video,
  Box
} from 'lucide-react';
import Link from 'next/link';

const brandingServices = [
  {
    title: 'استراتيجية العلامة',
    subtitle: 'Brand Strategy',
    desc: 'تحديد جوهر العلامة — الرؤية، الرسالة، القيم، التموضع، الشخصية، والجمهور.',
    price: 'عرض مخصص',
    icon: Lightbulb,
  },
  {
    title: 'تصميم الشعار والهوية',
    subtitle: 'Logo & Visual Identity Design',
    desc: 'شعار، نظام لوني، خطوط، عناصر بصرية، وتطبيقات أساسية تعكس طموح العلامة.',
    price: 'من 3,000 إلى 12,500 ر.س',
    icon: Palette,
  },
  {
    title: 'دليل الهوية البصرية',
    subtitle: 'Brand Guidelines Book',
    desc: 'دليل شامل لاستخدام العلامة عبر المنصات، يحافظ على الاتساق في كل نقطة لقاء.',
    price: 'يبدأ من 4,400 ر.س',
    icon: Eye,
  },
  {
    title: 'الموشن جرافيك والإنتاج المرئي',
    subtitle: 'Motion Graphics & Animation',
    desc: 'فيديوهات، شعارات متحركة، انفوجرافيك، ومواد مرئية للحملات والمنصات.',
    price: 'عرض مخصص لكل مشروع',
    icon: Video,
  },
  {
    title: 'تصميم التغليف والمطبوعات',
    subtitle: 'Packaging & Print Design',
    desc: 'تصميم تغليف ومطبوعات احترافية تعكس قيمة المنتج وتساعد على البيع.',
    price: 'عرض مخصص لكل مشروع',
    icon: Box,
  }
];

const methodologySteps = [
  'اكتشاف العلامة',
  'تحليل المنافسين',
  'تحديد التموضع',
  'بناء الشخصية والنبرة',
  'تطوير الاتجاه البصري',
  'تصميم النظام',
  'تسليم التطبيقات والدليل'
];

export default function BrandingCreativeClient() {
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
              Branding & Creative Design
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-snow max-w-4xl mx-auto">
              نبني علامات <br />
              <span className="text-pulse-orange">لا تُنسى.</span>
            </h1>
            <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              هويات بصرية، أنظمة علامة، تصميمات وموشن جرافيك تعبّر عن جوهرك، وتميزك في السوق، وتمنح علامتك حضوراً ثابتاً على كل نقطة تواصل.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-lg px-10 py-4">
                اطلب بناء هوية
              </Link>
              <Link href="/services/web-digital" className="btn-secondary w-full sm:w-auto text-lg px-10 py-4">
                 شاهد خدمات الويب
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
              الهوية ليست مجرد شعار
            </h2>
            <p className="text-gray-medium text-lg lg:text-xl leading-relaxed font-medium">
              في AGMA، نؤمن بأن الشعار هو مجرد رأس جبل الجليد. الهوية الحقيقية هي نظام متكامل يشمل الاستراتيجية، التموضع في السوق، اختيار الألوان والخطوط بدقة، بناء نبرة الحديث، وتصميم تجربة الجمهور الشاملة مع العلامة في كل لحظة لقاء.
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

          <div className="space-y-1">
            {brandingServices.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="geometric-card group bg-gray-dark/10 p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-start lg:items-center"
              >
                <div className="w-16 h-16 bg-pulse-orange/10 rounded-sm flex items-center justify-center text-pulse-orange transition-colors group-hover:bg-pulse-orange group-hover:text-snow">
                  <service.icon size={32} />
                </div>
                <div className="flex-grow space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-pulse-orange font-bold uppercase tracking-widest font-mono">{service.subtitle}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-snow">{service.title}</h3>
                  </div>
                  <p className="text-gray-medium text-lg leading-relaxed font-medium max-w-2xl">
                    {service.desc}
                  </p>
                </div>
                <div className="w-full lg:w-max flex flex-col items-start lg:items-end gap-2 pr-0 lg:pr-8 border-r-0 lg:border-r border-gray-dark">
                  <span className="text-[10px] text-gray-medium font-bold uppercase tracking-widest">الاستثمار</span>
                  <span className="text-xl font-bold text-snow">{service.price}</span>
                  <Link href="/contact" className="text-pulse-orange text-sm font-bold flex items-center gap-1 group/link mt-2">
                    احجز الآن <ChevronLeft size={16} className="group-hover/link:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-6 border-y border-gray-dark bg-deep-navy/10 relative overflow-hidden">
        <div className="grid-pattern opacity-[0.02]" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-snow">منهجية بناء الهوية</h2>
            <p className="text-gray-medium mt-4 font-medium">نتبع مساراً استراتيجياً يحول الأفكار إلى واقع بصري متماسك.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-px bg-gray-dark/20">
             {methodologySteps.map((step, i) => (
               <div key={i} className="geometric-card bg-pure-ink p-8 flex flex-col items-start gap-4 text-right group border-none">
                  <span className="text-pulse-orange font-mono font-bold text-xs uppercase tracking-widest">Phase 0{i+1}</span>
                  <h4 className="text-snow font-bold text-sm leading-tight group-hover:text-pulse-orange transition-colors">{step}</h4>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* When do you need a new identity? */}
      <section className="py-24 px-6 border-y border-gray-dark bg-gray-dark/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-snow">متى تحتاج هوية جديدة؟</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: 'إطلاق مشروع جديد', desc: 'لبناء حضور قوي ومميز من اليوم الأول في سوق تنافسي.' },
              { title: 'التوسع للسوق السعودي', desc: 'لمواءمة علامتك مع الثقافة المحلية وذائقة الجمهور في المملكة.' },
              { title: 'ضعف تميّز العلامة', desc: 'عندما تبدو علامتك مشابهة بشكل كبير للمنافسين وتفتقر للهوية الفريدة.' },
              { title: 'اختلاف التصاميم', desc: 'عندما تلاحظ عدم اتساق في شكل علامتك بين المنصات المختلفة.' },
              { title: 'التحول المؤسسي', desc: 'عندما يتحول مشروعك الصغير إلى كيان مؤسسي يحتاج لهيبة ومكانة أكبر.' },
              { title: 'خسارة الاتصال مع الجمهور', desc: 'عندما تشعر أن علامتك لم تعد تعبر عن تطلعات جمهورك الحالي.' },
            ].map((reason, i) => (
              <div key={i} className="space-y-4 border-r border-pulse-orange/20 pr-6">
                <div className="flex items-center gap-3">
                   <Zap className="text-pulse-orange" size={18} />
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
                اجعل علامتك واضحة <br />
                <span className="text-pulse-orange">قبل أن تطلب من الناس تذكّرها.</span>
              </h2>
              <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                نبدأ من جوهر العلامة، ثم نبني نظاماً بصرياً يعيش بذكاء على كل قناة تواصل مع جمهورك.
              </p>
              <Link href="/contact" className="btn-primary text-xl px-12 py-5 shadow-2xl shadow-pulse-orange/20">
                اطلب بناء هوية علامتك
              </Link>
              <div className="mt-8 flex justify-center gap-8 text-xs text-gray-medium font-bold uppercase tracking-widest">
                <Link href="/services/web-digital" className="hover:text-snow">الويب والمنتجات</Link>
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
            "serviceType": "Branding & Creative Design",
            "provider": {
              "@type": "AdvertisingAgency",
              "name": "AGMA | وكالة جيل الذكاء الاصطناعي"
            },
            "description": "تصميم هويات بصرية، استراتيجية العلامة التجارية، وأنظمة التصميم للشركات الناشئة والكبرى في السعودية.",
            "areaServed": "SA",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Branding Services",
              "itemListElement": brandingServices.map(s => ({
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
