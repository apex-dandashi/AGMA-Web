'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Target,
  Layers,
  Search, 
  FileText, 
  Sparkles, 
  PenTool, 
  Globe, 
  BarChart, 
  Compass, 
  CheckCircle2, 
  ChevronLeft,
  Cpu,
  MousePointer2,
  Share2,
  Mail,
  Video,
  BookOpen,
  HelpCircle,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'تدقيق سيو شامل',
    subtitle: 'Technical SEO Audit',
    desc: 'فحص شامل لأداء الموقع، البنية، الصفحات، الروابط، المحتوى، السرعة، والفرص.',
    price: 'من 2,200 إلى 4,800 ر.س مرة واحدة',
    icon: Search,
  },
  {
    title: 'سيو عربي متخصص',
    subtitle: 'Arabic SEO',
    desc: 'تحسين ظهور موقعك في السوق السعودي بكلمات عربية فصحى ولهجية، مبنية على نوايا بحث حقيقية.',
    price: 'يبدأ من 3,000 ر.س شهرياً',
    icon: Globe,
  },
  {
    title: 'إنتاج المحتوى بالـ AI',
    subtitle: 'AI-Accelerated Content Production',
    desc: 'مقالات، صفحات، سكربتات، محتوى سوشال، وانفوجرافيك بسرعة AI وتدقيق بشري يحافظ على الجودة.',
    price: 'يبدأ من 2,200 ر.س شهرياً',
    icon: Cpu,
  },
  {
    title: 'الكتابة الإعلانية',
    subtitle: 'Copywriting',
    desc: 'نصوص صفحات هبوط، إعلانات، إيميلات، ومحتوى موقع مصمم للتحويل لا للقراءة فقط.',
    price: 'من 125 ر.س لكل قطعة',
    icon: PenTool,
  }
];

const contentTypes = [
  { label: 'صفحات خدمات', icon: FileText },
  { label: 'مقالات SEO', icon: BookOpen },
  { label: 'صفحات هبوط', icon: MousePointer2 },
  { label: 'محتوى سوشال', icon: Share2 },
  { label: 'Email Copy', icon: Mail },
  { label: 'سكربتات فيديو', icon: Video },
  { label: 'أدلة معرفية', icon: BookOpen },
  { label: 'FAQ محسنة', icon: HelpCircle },
];

export default function SEOContentClient() {
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
              SEO & Content Strategy
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-snow max-w-4xl mx-auto">
              نتصدر النتائج. <br />
              <span className="text-pulse-orange">مو بالحظ.</span>
            </h1>
            <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              سيو عربي متخصص، محتوى يجذب ويحوّل، واستراتيجيات ظهور مصممة للسوق السعودي ولعصر محركات الذكاء الاصطناعي.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-lg px-10 py-4">
                اطلب تدقيق SEO
              </Link>
              <Link href="/contact" className="btn-secondary w-full sm:w-auto text-lg px-10 py-4">
                ناقش استراتيجية المحتوى
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Arabic SEO is different */}
      <section className="py-24 px-6 border-y border-gray-dark bg-gray-dark/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-snow leading-tight">
                لماذا السيو العربي <span className="text-pulse-orange">مختلف؟</span>
              </h2>
              <div className="space-y-6 text-gray-medium text-lg leading-relaxed font-medium">
                <p>
                  السيو العربي ليس مجرد ترجمة آليه للكلمات المفتاحية من الإنجليزية. هو فهم عميق لنوايا البحث (Search Intent)، الثقافة المحلية، اللهجة الدارجة، وسلوك المستخدم السعودي والخليجي أثناء رحلة البحث.
                </p>
                <p>
                  نحن نفرق بدقة بين البحث المعلوماتي (&quot;كيف أبدأ...&quot;) والبحث التجاري (&quot;أفضل وكالة في الرياض&quot;)، لنبني استراتيجية محتوى تضعك في المكان المناسب واللحظة المناسبة.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-snow font-bold">
                  <CheckCircle2 className="text-pulse-orange" size={20} />
                  <span>فهم نية البحث المحلية</span>
                </div>
                <div className="flex items-center gap-3 text-snow font-bold">
                  <CheckCircle2 className="text-pulse-orange" size={20} />
                  <span>التعامل مع اللهجات العربية</span>
                </div>
                <div className="flex items-center gap-3 text-snow font-bold">
                  <CheckCircle2 className="text-pulse-orange" size={20} />
                  <span>السوق السعودي (KSA Focus)</span>
                </div>
                <div className="flex items-center gap-3 text-snow font-bold">
                  <CheckCircle2 className="text-pulse-orange" size={20} />
                  <span>التحويل لا الزيارات فقط</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-dark/20 border border-gray-dark flex items-center justify-center p-12">
                 <div className="grid-pattern opacity-[0.05]" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-3/4 h-3/4 border border-pulse-orange/10 rounded-full animate-spin-slow" />
                 </div>
                 <Globe className="text-pulse-orange w-32 h-32 opacity-20" />
                 <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <span className="text-snow font-bold text-lg">اللغة العربية</span>
                    <span className="text-[10px] text-gray-medium font-mono uppercase tracking-widest">Natural Language Processing</span>
                 </div>
              </div>
            </div>
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
            {services.map((service, i) => (
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
                  <span className="text-[10px] text-gray-medium font-bold uppercase tracking-widest">تكلفة البداية</span>
                  <span className="text-xl font-bold text-snow">{service.price}</span>
                  <Link href="/contact" className="text-pulse-orange text-sm font-bold flex items-center gap-1 group/link mt-2">
                    ابدأ الآن <ChevronLeft size={16} className="group-hover/link:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google + AI Search */}
      <section className="py-24 px-6 border-y border-gray-dark bg-deep-navy/10 relative overflow-hidden">
        <div className="grid-pattern opacity-[0.02]" />
        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-snow">
              Google <span className="text-pulse-orange">+</span> AI Search
            </h2>
            <p className="text-gray-medium text-xl leading-relaxed font-medium">
              الظهور لم يعد مقتصراً على نتائج Google التقليدية. نحن نعد علامتك لجيل محركات الإجابة الجديد.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-8">
              {['Google', 'ChatGPT', 'Gemini', 'Perplexity', 'AI Overviews'].map((platform) => (
                <div key={platform} className="geometric-card bg-gray-dark/5 p-6 flex flex-col items-center justify-center gap-3 group">
                  <Sparkles className="text-pulse-orange transition-transform group-hover:rotate-12" size={24} />
                  <span className="text-snow font-bold text-sm tracking-tight">{platform}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-medium text-lg leading-relaxed font-medium max-w-2xl mx-auto">
              نحن نساعد علامتك على بناء بنية تحتية للمحتوى (Semantic Content) يفهمها الذكاء الاصطناعي ويثق بها، لتكون مصدر الإجابة الأول لعملائك عبر كل المنصات.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Steps Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-snow">كيف نبني استراتيجية المحتوى؟</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'تدقيق الموقع', icon: Search },
              { title: 'بحث الكلمات', icon: Compass },
              { title: 'تحليل المنافسين', icon: TrendingUp },
              { title: 'تحديد النوايا', icon: Target },
              { title: 'بناء الـ Content Map', icon: Layers },
              { title: 'إنتاج المحتوى', icon: Cpu },
              { title: 'تحسين الصفحات', icon: MousePointer2 },
              { title: 'قياس النتائج', icon: BarChart },
            ].map((step, i) => (
              <div key={i} className="geometric-card bg-gray-dark/5 p-8 flex flex-col items-start gap-4 group">
                <div className="text-[10px] text-gray-medium font-mono font-bold tracking-widest uppercase mb-2">Phase 0{i+1}</div>
                <div className="w-10 h-10 bg-pulse-orange/10 rounded-sm flex items-center justify-center text-pulse-orange transition-transform group-hover:scale-110">
                   <step.icon size={20} />
                </div>
                <h4 className="text-snow font-bold text-base leading-tight">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-24 px-6 border-y border-gray-dark bg-gray-dark/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-snow">أنواع المحتوى الذي نصنعه</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {contentTypes.map((type, i) => (
              <div key={i} className="geometric-card bg-gray-dark/10 p-8 flex flex-col items-center justify-center gap-4 text-center">
                <type.icon className="text-pulse-orange" size={24} />
                <span className="text-snow font-bold text-sm">{type.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="border border-gray-dark p-12 lg:p-20 text-center relative overflow-hidden bg-gray-dark/5">
            <div className="grid-pattern opacity-[0.03]" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-snow leading-tight">
                اجعل علامتك تظهر عندما يبحث العميل، <br />
                <span className="text-pulse-orange">لا بعد أن يختار المنافس.</span>
              </h2>
              <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                ابدأ بتدقيق SEO عميق يكشف أين تقف علامتك اليوم، وما الذي يمنعك من التقدم نحو الصدارة.
              </p>
              <Link href="/contact" className="btn-primary text-xl px-12 py-5 shadow-2xl shadow-pulse-orange/20">
                اطلب تدقيق SEO الآن
              </Link>
              <div className="mt-8 flex justify-center gap-8 text-xs text-gray-medium font-bold uppercase tracking-widest">
                <Link href="/services/performance-marketing" className="hover:text-snow">التسويق الأدائي</Link>
                <Link href="/services/ai-automation" className="hover:text-snow">الأتمتة والذكاء</Link>
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
            "serviceType": "SEO & Content Strategy",
            "provider": {
              "@type": "AdvertisingAgency",
              "name": "AGMA | وكالة جيل الذكاء الاصطناعي"
            },
            "description": "سيو عربي متخصص ونظام إنتاج محتوى مدعوم بالذكاء الاصطناعي يستهدف السوق السعودي والخليجي.",
            "areaServed": "SA",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "SEO & Content Services",
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
