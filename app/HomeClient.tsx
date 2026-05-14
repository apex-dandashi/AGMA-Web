'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { 
  Zap, 
  Target, 
  Cpu, 
  Globe, 
  Search, 
  MessageSquare, 
  Palette, 
  Code, 
  Lightbulb, 
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function HomeClient() {
  const agmaMethod = [
    { letter: 'A', name: 'Analyze', nameAr: 'تحليل', desc: 'نبدأ بالتعمق في بياناتك، منافسيك، وسلوك جمهورك باستخدام أدوات تحليل ذكية تتنبأ بالفرص قبل حدوثها.' },
    { letter: 'G', name: 'Generate', nameAr: 'توليد', desc: 'نقوم بتوليد أفكار ومحتوى وحلول إبداعية مدعومة بالذكاء الاصطناعي، تضمن التميز والسرعة في التنفيذ.' },
    { letter: 'M', name: 'Market', nameAr: 'تسويق', desc: 'نطلق حملاتك بدقة متناهية، مستهدفين العميل المثالي في الوقت المثالي عبر القنوات الأكثر تأثيراً.' },
    { letter: 'A', name: 'Adapt', nameAr: 'تطوير', desc: 'نراقب الأداء لحظياً، ونقوم بأتمتة التحسينات المستمرة لضمان أعلى عائد على الاستثمار ونمو مستدام.' },
  ];

  const services = [
    { id: 'ai-automation', title: 'الذكاء الاصطناعي والأتمتة', icon: Cpu, desc: 'أتمتة العمليات التسويقية وبناء أنظمة ذكاء اصطناعي مخصصة لعملك.' },
    { id: 'performance-marketing', title: 'التسويق الأدائي والإعلانات', icon: Target, desc: 'إدارة حملات إعلانية ذكية تركز على النتائج والتحويل الفعلي.' },
    { id: 'seo-content', title: 'السيو والمحتوى', icon: Search, desc: 'تصدر نتائج البحث وصناعة محتوى استراتيجي يخدم أهدافك.' },
    { id: 'social-media', title: 'السوشال ميديا والمجتمعات', icon: MessageSquare, desc: 'بناء حضور رقمي قوي وإدارة مجتمعات متفاعلة حول علامتك.' },
    { id: 'branding-creative', title: 'الهوية والتصميم الإبداعي', icon: Palette, desc: 'تصميم هويات بصرية تعكس روح العصر وتدمج بين الفن والتقنية.' },
    { id: 'web-digital', title: 'الويب والمنتجات الرقمية', icon: Code, desc: 'تطوير مواقع وتطبيقات تركز على تجربة المستخدم والأداء العالي.' },
    { id: 'strategy-consulting', title: 'الاستراتيجية والاستشارات', icon: Lightbulb, desc: 'رسم خارطة طريق واضحة لنمو شركتك في العصر الرقمي.' },
    { id: 'pr-media', title: 'العلاقات العامة والإعلام', icon: Globe, desc: 'إدارة السمعة الرقمية والتواصل الفعال مع الجمهور والمؤثرين.' },
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
            <div className="inline-block px-4 py-1 mb-6 border border-pulse-orange/30 rounded-full bg-pulse-orange/5">
              <span className="text-pulse-orange text-xs font-bold tracking-widest uppercase">من الرياض، قلب المملكة</span>
            </div>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.1] text-snow max-w-5xl mx-auto">
              وكالتك الكاملة في عصر <span className="text-pulse-orange">الذكاء الاصطناعي</span>
            </h1>
            <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              AGMA هي وكالة جيل الذكاء الاصطناعي. نجمع بين الأتمتة المتقدمة والبيانات الدقيقة والإبداع البشري لتحقيق نمو استراتيجي لشركات المملكة الواعدة.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-lg px-10 py-4 shadow-lg shadow-pulse-orange/20">
                ابدأ رحلة النمو الآن
              </Link>
              <Link href="/services" className="btn-secondary w-full sm:w-auto text-lg px-10 py-4">
                استعرض خدماتنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section className="py-20 border-y border-gray-dark bg-gray-dark/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-x-reverse divide-gray-dark">
            {[
              { label: 'النمو المتوسط للعملاء', val: '45%' },
              { label: 'ساعات العمل المؤتمتة', val: '12k+' },
              { label: 'حملات رقمية ناجحة', val: '500+' },
              { label: 'خبير في جيل الذكاء الاصطناعي', val: '40+' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2 px-4">
                <div className="text-3xl lg:text-4xl font-black text-pulse-orange font-heading">{stat.val}</div>
                <div className="text-gray-medium text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="grid-pattern opacity-[0.015]" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-snow">
                منهجية AGMA Method™
              </h2>
              <p className="text-gray-medium font-medium">
                نظامنا الرباعي المصمم لتحويل البيانات إلى نتائج تجارية ملموسة عبر التكامل الكامل بين الذكاء البشري والاصطناعي.
              </p>
            </div>
            <div className="text-pulse-orange font-black text-6xl opacity-10 font-mono">
              SYSTEM v4.0
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {agmaMethod.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ backgroundColor: 'rgba(38, 38, 38, 0.3)' }}
                className="geometric-card group bg-gray-dark/10 border-gray-dark"
              >
                <div className="text-4xl font-black text-pulse-orange mb-4 font-mono opacity-50 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-snow">
                  {item.name} — {item.nameAr}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 px-6 bg-deep-navy/10 relative">
        <div className="orange-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05]" />
        
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-snow">حلولنا الفائقة</h2>
            <p className="text-gray-medium max-w-2xl mx-auto">
              نغطي ثمانية مجالات استراتيجية لنكون شريكك التقني والإبداعي الوحيد في رحلة التحول نحو الذكاء الاصطناعي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link 
                href={`/services#${service.id || ''}`} 
                key={i} 
                className="group p-8 rounded-3xl border border-snow/5 bg-gray-dark/30 hover:bg-pulse-orange/5 hover:border-pulse-orange/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-pulse-orange/10 flex items-center justify-center mb-6 text-pulse-orange group-hover:scale-110 transition-transform">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-snow group-hover:text-pulse-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-sm bg-gray-dark/50 overflow-hidden border border-gray-dark relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-pulse-orange/10 to-transparent flex items-center justify-center">
                    <Zap className="text-pulse-orange w-32 h-32 opacity-20" />
                 </div>
              </div>
              <div className="absolute -bottom-6 -right-6 geometric-card bg-gray-dark p-6 max-w-[240px]">
                <p className="text-pulse-orange font-bold text-sm mb-1 font-heading uppercase tracking-widest">AGMA Native-AI</p>
                <p className="text-xs text-gray-light leading-relaxed font-medium">كل عملياتنا مبنية بالذكاء الاصطناعي من الداخل، لسنا وكالة تستخدم أدوات فقط.</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-snow">
                نحن المحرك الجديد <br />
                لنمو <span className="text-pulse-orange">علامتك</span>.
              </h2>
              <p className="text-gray-medium text-lg leading-relaxed font-medium">
                في AGMA، نعتقد أن عصر التسويق التقليدي قد انتهى. نحن لا نصب الذكاء الاصطناعي فوق عمليات قديمة، بل أعدنا بناء مفهوم &quot;الوكالة&quot; من الصفر ليعمل بالبيانات والأتمتة كقلب نابض.
              </p>
              <ul className="space-y-4">
                {[
                  'تنفيذ أسرع بنسبة 300% من الوكالات التقليدية.',
                  'قرارات مبنية على بيانات تنبؤية دقيقة للغاية.',
                  'فريق يجمع بين الإبداع البشري والقدرات التقنية.',
                  'تمركز استراتيجي في الرياض لخدمة السوق الخليجي.'
                ].map((point, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-gray-light font-medium">
                    <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-sm bg-pulse-orange" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/about" className="btn-primary inline-flex items-center gap-3">
                  اكتشف لماذا AGMA؟ <ArrowLeft size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 mb-20">
        <div className="container mx-auto">
          <div className="border border-gray-dark p-12 lg:p-20 text-center relative overflow-hidden bg-gray-dark/5">
            <div className="grid-pattern opacity-[0.03]" />
            <div className="relative z-10">
              <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-snow">
                جاهز لجيل <br />
                <span className="text-pulse-orange">النمو القادم؟</span>
              </h2>
              <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                دعنا نحلل علامتك التجارية ونقدم لك أول استراتيجية نمو مدعومة بالذكاء الاصطناعي مجاناً.
              </p>
              <Link href="/contact" className="btn-primary text-xl px-12 py-5 shadow-2xl shadow-pulse-orange/20">
                احجز مكالمة استراتيجية الآن
              </Link>
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
            "@type": "AdvertisingAgency",
            "name": "AGMA | وكالة جيل الذكاء الاصطناعي",
            "description": "وكالة تسويق سعودية Native-AI متخصصة في الأتمتة والذكاء الاصطناعي والنمو الاستراتيجي.",
            "url": "https://agma.sa",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "الرياض",
              "addressCountry": "SA"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "sales",
              "email": "hello@agma.sa"
            }
          }),
        }}
      />
    </main>
  );
}
