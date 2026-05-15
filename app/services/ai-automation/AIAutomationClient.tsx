'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Zap, 
  Bot, 
  Workflow, 
  Database, 
  LineChart, 
  ShieldCheck, 
  MessagesSquare, 
  Sparkles, 
  ChevronLeft,
  Settings,
  Repeat,
  CheckCircle2,
  Users
} from 'lucide-react';
import Link from 'next/link';

const aiServices = [
  {
    title: 'أتمتة العمليات (Workflow)',
    subtitle: 'Process Automation',
    desc: 'ربط الأنظمة وتلقائية المهام المتكررة لتقليل الخطأ البشري وزيادة سرعة التنفيذ.',
    price: 'عرض مخصص حسب التعقيد',
    icon: Workflow,
  },
  {
    title: 'بناء وكلاء AI متخصصين',
    subtitle: 'Custom AI Agents',
    desc: 'تطوير وكلاء ذكاء اصطناعي لخدمة العملاء، المبيعات، أو تحليل البيانات داخل مؤسستك.',
    price: 'يبدأ من 7,500 ر.س',
    icon: Bot,
  },
  {
    title: 'دمج نماذج LLM',
    subtitle: 'LLM Integration',
    desc: 'دمج GPT-4, Gemini، أو Claude في منتجاتك الرقمية الحالية لتقديم تجربة أذكى.',
    price: 'عرض مخصص',
    icon: Sparkles,
  },
  {
    title: 'استشارات التحول للـ AI',
    subtitle: 'AI Strategy Consulting',
    desc: 'تحليل أعمالك واكتشاف أين يمكن للذكاء الاصطناعي توفير المال أو زيادة الأرباح.',
    price: 'يبدأ من 3,500 ر.س للجلسة',
    icon: Settings,
  }
];

const efficiencyStats = [
  { label: 'تقليل التكاليف التشغيلية', value: '40%', icon: Zap },
  { label: 'زيادة سرعة معالجة البيانات', value: '10x', icon: Cpu },
  { label: 'تقليل الخطأ البشري', value: '95%', icon: ShieldCheck },
  { label: 'توافر الخدمة (24/7)', value: '100%', icon: Bot },
];

export default function AIAutomationClient() {
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
              AI & Workflow Automation
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-snow max-w-4xl mx-auto">
              لا تعمل بجهد أكبر. <br />
              <span className="text-pulse-orange">اعمل بأذكى (وبآلية).</span>
            </h1>
            <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              نحن نبني البنية التحتية لجيل جيل الذكاء الاصطناعي — أتمتة مهامك، ذكاء عملياتك، ورفع كفاءة فريقك باستخدام أحدث التقنيات.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-lg px-10 py-4">
                ابدأ رحلة الأتمتة
              </Link>
              <Link href="/agma-method" className="btn-secondary w-full sm:w-auto text-lg px-10 py-4">
                اكتشف كيف نعمل
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Efficiency Grid */}
      <section className="py-24 px-6 border-y border-gray-dark bg-gray-dark/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {efficiencyStats.map((stat, i) => (
              <div key={i} className="text-center space-y-4 p-8 border border-gray-dark/50 bg-gray-dark/10 group hover:border-pulse-orange/50 transition-colors">
                <stat.icon className="text-pulse-orange mx-auto mb-4" size={32} />
                <div className="text-4xl lg:text-5xl font-bold text-snow">{stat.value}</div>
                <div className="text-xs text-gray-medium font-bold uppercase tracking-widest leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core AI Services */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-snow font-heading">
              خدمات جيل <span className="text-pulse-orange">الذكاء الاصطناعي</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {aiServices.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="geometric-card group bg-gray-dark/10 p-8 lg:p-12 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-pulse-orange/10 rounded-sm flex items-center justify-center text-pulse-orange transition-colors group-hover:bg-pulse-orange group-hover:text-snow">
                    <service.icon size={28} />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] text-pulse-orange font-bold uppercase tracking-widest font-mono">{service.subtitle}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-snow font-heading">{service.title}</h3>
                  </div>
                  <p className="text-gray-medium text-lg leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t border-gray-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="block text-[10px] text-gray-medium font-bold uppercase tracking-widest mb-1">الاستثمار المتوقع</span>
                    <span className="text-xl font-bold text-snow">{service.price}</span>
                  </div>
                  <Link href="/contact" className="text-pulse-orange text-sm font-bold flex items-center gap-2 group/link">
                    ناقش مشروعك <ChevronLeft size={16} className="group-hover/link:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Philosophy */}
      <section className="py-24 px-6 border-y border-gray-dark bg-deep-navy/10 relative overflow-hidden">
        <div className="grid-pattern opacity-[0.02]" />
        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-snow">
              الـ AI هو محركك، <br />
              <span className="text-pulse-orange">والأتمتة هي الطريق.</span>
            </h2>
            <p className="text-gray-medium text-xl leading-relaxed font-medium">
              نحن لا نبيع أدوات، نحن نبني منظومات ذكية. فرق العمل اليوم تغرق في المهام اليدوية التي يسهل على الآلة القيام بها بشكل أدق وأسرع. مهمتنا في AGMA هي تحرير فريقك من &quot;التنفيذ الممل&quot; ليتفرغوا لـ &quot;التفكير الإبداعي&quot;.
            </p>
            <div className="flex flex-wrap justify-center gap-4 py-8">
               {['OpenAI', 'Anthropic', 'Google Cloud', 'Zapier', 'Make', 'Pinecone', 'LangChain'].map((tech) => (
                 <span key={tech} className="px-4 py-2 border border-gray-dark bg-gray-dark/5 text-gray-light text-xs font-bold uppercase tracking-widest">{tech}</span>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-snow leading-tight font-heading">
                كيف ندمج الـ AI <br />
                <span className="text-pulse-orange">في بيئة عملك؟</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'تحليل الفجوات', desc: 'تحديد العمليات المهدرة للوقت والمهام القابلة للأتمتة.' },
                  { title: 'تصميم البنية', desc: 'اختيار النماذج والأدوات الأمثل (GPT, Claude, Gemini...).' },
                  { title: 'التطوير والاختبار', desc: 'بناء الوكلاء والربط البرمجي وضمان دمج البيانات.' },
                  { title: 'التدريب والتشغيل', desc: 'تدريب فريقك على التعامل مع المنظومة الجديدة ورفع الكفاءة.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 p-6 border border-gray-dark bg-gray-dark/5 group hover:border-pulse-orange/30 transition-colors">
                    <div className="text-2xl font-bold text-pulse-orange font-mono">0{i+1}</div>
                    <div className="space-y-2">
                       <h4 className="text-snow font-bold text-lg">{step.title}</h4>
                       <p className="text-gray-medium text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
                <div className="aspect-square bg-gray-dark/20 border border-gray-dark relative flex items-center justify-center p-12">
                   <div className="grid-pattern opacity-[0.05]" />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-3/4 h-3/4 border border-pulse-orange/20 rounded-full animate-spin-slow opacity-30" />
                   </div>
                   <div className="space-y-6 text-center z-10">
                      <div className="w-20 h-20 bg-pulse-orange rounded-full mx-auto flex items-center justify-center shadow-[0_0_50px_rgba(244,77,43,0.3)] group-hover:scale-110 transition-transform">
                         <Zap className="text-snow" size={32} />
                      </div>
                      <h4 className="text-snow font-bold text-xl uppercase tracking-tighter">Hyper-Efficiency</h4>
                      <p className="text-gray-medium text-xs font-bold font-mono tracking-widest">Optimized for AI-First Era</p>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="border border-gray-dark p-12 lg:p-20 text-center relative overflow-hidden bg-gray-dark/5">
            <div className="grid-pattern opacity-[0.03]" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-snow leading-tight font-heading">
                مستقبل عملك يبدأ <br />
                <span className="text-pulse-orange">بأول عملية مؤتمتة.</span>
              </h2>
              <p className="text-gray-medium text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                دعنا نجلس لنحلل أين تضيع ساعات فريقك اليوم، ونبني لك البنية التحتية التي تضاعف إنتاجيتك دون الحاجة لمزيد من التوظيف.
              </p>
              <Link href="/contact" className="btn-primary text-xl px-12 py-5 shadow-2xl shadow-pulse-orange/20">
                اطلب استشارة أتمتة مجانية
              </Link>
              <div className="mt-8 flex justify-center gap-8 text-xs text-gray-medium font-bold uppercase tracking-widest">
                <Link href="/services/strategy-consulting" className="hover:text-snow">الاستشارات</Link>
                <Link href="/services/web-digital" className="hover:text-snow">الويب والمنتجات</Link>
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
            "serviceType": "AI & Workflow Automation",
            "provider": {
              "@type": "AdvertisingAgency",
              "name": "AGMA | وكالة جيل الذكاء الاصطناعي"
            },
            "description": "حلول أتمتة العمليات ودمج الذكاء الاصطناعي وكلاء الذكاء الاصطناعي المخصصة للشركات.",
            "areaServed": "SA",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services",
              "itemListElement": aiServices.map(s => ({
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
