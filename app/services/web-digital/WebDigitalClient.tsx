'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Code, 
  ShoppingBag, 
  Smartphone, 
  Zap, 
  MousePointer2, 
  Layout, 
  CheckCircle2, 
  ChevronLeft,
  Globe,
  Activity,
  Target,
  Rocket,
  Search,
  Eye,
  Settings,
  MessageSquare,
  BarChart3,
  Layers,
  MousePointerClick,
  MonitorSmartphone,
  Server,
  Cloud
} from 'lucide-react';
import Link from 'next/link';

const webServices = [
  {
    title: 'تصميم وتطوير المواقع',
    subtitle: 'Website Design & Development',
    desc: 'مواقع احترافية بأحدث التقنيات — تصميم متجاوب، أداء سريع، SEO جاهز، وإدارة سهلة.',
    price: 'تبدأ من 7,500 ر.س',
    icon: Code,
  },
  {
    title: 'المتاجر الإلكترونية',
    subtitle: 'E-commerce (Salla, Zid, Shopify)',
    desc: 'إعداد وتطوير متاجر إلكترونية متكاملة مع الدفع، الشحن، الصفحات، والتحليلات.',
    price: 'تبدأ من 9,000 ر.س',
    icon: ShoppingBag,
  },
  {
    title: 'تصميم واجهات التطبيقات',
    subtitle: 'App UI/UX Design',
    desc: 'تصميم تجارب تطبيقات جوال بنظام تصميمي واضح وقابل للتوسع.',
    price: 'عرض مخصص لكل تطبيق',
    icon: Layout,
  },
  {
    title: 'صفحات الهبوط',
    subtitle: 'Landing Pages',
    desc: 'صفحات هبوط محسنة للتحويل للحملات الإعلانية، مع نسخ مقنع، تصميم سريع، واختبارات A/B.',
    price: 'من 2,500 إلى 7,500 ر.س',
    icon: MousePointer2,
  }
];

const buildStats = [
  'مواقع شركات', 'مواقع وكالات', 'مواقع خدمات', 'متاجر إلكترونية', 'صفحات هبوط', 'صفحات حملات', 'منصات حجز', 'واجهات تطبيقات'
];

const processStages = [
  { title: 'تحليل الهدف', icon: Target },
  { title: 'خريطة الموقع', icon: Layers },
  { title: 'كتابة المحتوى', icon: MessageSquare },
  { title: 'تصميم UX/UI', icon: Layout },
  { title: 'التطوير', icon: Code },
  { title: 'الربط والتتبع', icon: BarChart3 },
  { title: 'الاختبار', icon: Activity },
  { title: 'الإطلاق', icon: Rocket }
];

export default function WebDigitalPage() {
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
              Web & Digital Products
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-snow max-w-4xl mx-auto">
              مواقع تبيع. <br />
              <span className="text-pulse-orange">لا تعرض فقط.</span>
            </h1>
            <p className="text-gray-medium text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              مواقع، متاجر إلكترونية، صفحات هبوط، وتجارب رقمية مصممة لتحقيق أهداف عملك التجارية — بسرعة، وضوح، وتحويل قابل للقياس.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-lg px-10 py-4">
                اطلب موقعًا جديدًا
              </Link>
              <Link href="/contact" className="btn-secondary w-full sm:w-auto text-lg px-10 py-4">
                 اطلب صفحة هبوط
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Web Philosophy Section */}
      <section className="py-24 px-6 border-y border-gray-dark bg-gray-dark/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-snow">
              موقعك ليس بروشوراً رقمياً
            </h2>
            <p className="text-gray-medium text-lg lg:text-xl leading-relaxed font-medium">
              الموقع الإلكتروني الناجح هو &quot;أصل تجاري&quot; يعمل لصالحك 24/7. مهمته ليست مجرد الظهور بمظهر جميل، بل أن يشرح قيمتك، يقنع الزائر، يحول الاهتمام إلى فعل، يتتبع سلوك المستخدم، ويتكامل بسلاسة مع منظومتك التسويقية.
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 bg-gray-dark/20">
            {webServices.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="geometric-card group bg-pure-ink p-8 lg:p-12 flex flex-col justify-between border-none"
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
                    <span className="block text-[10px] text-gray-medium font-bold uppercase tracking-widest mb-1">الاستثمار</span>
                    <span className="text-xl font-bold text-snow">{service.price}</span>
                  </div>
                  <Link href="/contact" className="text-pulse-orange text-sm font-bold flex items-center gap-1 group/link">
                    ابدأ الآن <ChevronLeft size={16} className="group-hover/link:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes a site sell? */}
      <section className="py-24 px-6 border-y border-gray-dark bg-deep-navy/10 relative overflow-hidden">
        <div className="grid-pattern opacity-[0.02]" />
        <div className="container mx-auto relative z-10">
           <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-snow">ما الذي يجعل الموقع يبيع؟</h2>
              <p className="text-gray-medium mt-4 font-medium">معايير AGMA التي تحول الزائر إلى عميل مخلص.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
              {[
                { title: 'رسالة واضحة', desc: 'يفهم الزائر ما تقدمه خلال أول 3 ثوانٍ.', icon: Eye },
                { title: 'CTA ظاهر', desc: 'دعوات واضحة للفعل (Call to Action) في كل مكان صحيح.', icon: MousePointerClick },
                { title: 'سرعة تحميل', desc: 'أداء فائق لا يترك مجالاً لملل الزائر.', icon: Zap },
                { title: 'تجربة موبايل ممتازة', desc: 'تصميم متجاوب يحترم مستخدمي الجوال أولاً.', icon: MonitorSmartphone },
                { title: 'SEO تقني', desc: 'هيكلة صحيحة تفهمها محركات البحث من الدقيقة الأولى.', icon: Search },
                { title: 'Tracking صحيح', desc: 'ربط بكسل وتحليلات دقيقة لقياس كل حركة.', icon: BarChart3 },
                { title: 'صفحات خدمات مقنعة', desc: 'محتوى مكتوب بعناية يركز على الفائدة لا المزايا فقط.', icon: MessageSquare },
                { title: 'تصميم RTL عربي حقيقي', desc: 'محاذاة وتجربة تليق بخصوصية اللغة العربية.', icon: Globe },
                { title: 'ربط مع الحملات', desc: 'تزامن كامل مع استراتيجيتك الإعلانية والقمع البيعي.', icon: Target },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 border border-pulse-orange/20 flex items-center justify-center text-pulse-orange group-hover:bg-pulse-orange group-hover:text-snow transition-all">
                    <item.icon size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-snow">{item.title}</h4>
                    <p className="text-gray-medium text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* What do we build? */}
      <section className="py-24 px-6 border-y border-gray-dark bg-gray-dark/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-snow">ماذا نبني؟</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
             {buildStats.map((item, i) => (
               <div key={i} className="geometric-card bg-gray-dark/10 p-8 flex flex-col items-center justify-center gap-4 text-center group">
                  <span className="text-snow font-bold text-sm tracking-tight group-hover:text-pulse-orange transition-colors">{item}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-snow">مراحل العمل</h2>
            <p className="text-gray-medium mt-4 font-medium">ننتقل معك من الرؤية إلى الإطلاق عبر مسار منظم ومحكم.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {processStages.map((stage, i) => (
               <div key={i} className="space-y-4 border-r border-gray-dark pr-6">
                  <span className="text-pulse-orange font-mono font-bold text-xs">STEP 0{i+1}</span>
                  <div className="flex items-center gap-3">
                    <stage.icon className="text-gray-medium" size={20} />
                    <h4 className="text-snow font-bold">{stage.title}</h4>
                  </div>
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
                إذا كان موقعك لا يحوّل الزائر إلى عميل، <br />
                <span className="text-pulse-orange">فهو لا يقوم بدوره.</span>
              </h2>
              <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                دعنا نبني موقعًا يخدم المبيعات، الحملات، الثقة، والظهور في محركات البحث.
              </p>
              <Link href="/contact" className="btn-primary text-xl px-12 py-5 shadow-2xl shadow-pulse-orange/20">
                اطلب موقعًا جديدًا
              </Link>
              <div className="mt-8 flex justify-center gap-8 text-xs text-gray-medium font-bold uppercase tracking-widest">
                <Link href="/services/performance-marketing" className="hover:text-snow">التسويق الأدائي</Link>
                <Link href="/services/seo-content" className="hover:text-snow">المحتوى والسيو</Link>
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
            "serviceType": "Web Design & Development",
            "provider": {
              "@type": "AdvertisingAgency",
              "name": "AGMA | وكالة جيل الذكاء الاصطناعي"
            },
            "description": "تصميم وتطوير المواقع، المتاجر الإلكترونية، وصفحات الهبوط المصممة للبيع والتحويل.",
            "areaServed": "SA",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web & Digital Services",
              "itemListElement": webServices.map(s => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": s.title,
                  "description": s.desc
                }
              }))
            }
          }),
        }}
      />
    </main>
  );
}
