'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NeuralMesh from '@/components/NeuralMesh';
import { motion } from 'framer-motion';
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
import Magnetic from '@/components/ui/Magnetic';
import { useScroll, useTransform } from 'framer-motion';

export default function HomeClient() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotation = useTransform(scrollY, [0, 1000], [0, 45]);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <main className="min-h-screen relative overflow-hidden" suppressHydrationWarning>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <NeuralMesh />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/80 opacity-60" />
          
          {/* Floating Parallax Elements */}
          <motion.div 
            style={{ y: y1, rotate: rotation }}
            className="absolute top-1/4 right-[10%] w-32 h-32 border border-pulse-orange/20 rounded-full blur-[2px] opacity-20"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-1/4 left-[5%] w-48 h-48 border border-pulse-orange/10 rounded-sm blur-[1px] opacity-10 rotate-12"
          />
        </div>
        
        <div className="grid-pattern" />
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-4 py-1 mb-6 border border-pulse-orange/30 rounded-full bg-pulse-orange/5"
            >
              <span className="text-pulse-orange text-xs font-bold tracking-widest uppercase">من الرياض، قلب المملكة</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-black-arabic mb-8 leading-[1.2] text-snow max-w-4xl mx-auto tracking-normal py-4"
            >
              وكالتك الكاملة <br className="hidden sm:block" />
              في عصر <br className="hidden sm:block" />
              <span className="text-gradient px-4 py-2 sm:py-6 inline-block leading-[1.4]">الذكاء الاصطناعي</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-medium text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-4"
            >
              AGMA هي وكالة جيل الذكاء الاصطناعي. نجمع بين الأتمتة المتقدمة والبيانات الدقيقة والإبداع البشري لتحقيق نمو استراتيجي لشركات المملكة الواعدة.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6"
            >
              <Magnetic className="w-full sm:w-auto">
                <Link href="/contact" data-cursor-text="GROW" className="btn-primary w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 shadow-lg shadow-pulse-orange/20 block text-center whitespace-nowrap">
                  ابدأ رحلة النمو الآن
                </Link>
              </Magnetic>
              <Magnetic className="w-full sm:w-auto">
                <Link href="/services" data-cursor-text="EXPLORE" className="btn-secondary w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 block text-center whitespace-nowrap">
                  استعرض خدماتنا
                </Link>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section className="py-20 border-y border-gray-dark bg-gray-dark/10">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-x-reverse divide-gray-dark"
          >
            {[
              { label: 'النمو المتوسط للعملاء', val: '45%' },
              { label: 'ساعات العمل المؤتمتة', val: '12k+' },
              { label: 'حملات رقمية ناجحة', val: '500+' },
              { label: 'خبير في جيل الذكاء الاصطناعي', val: '40+' },
            ].map((stat, i) => (
              <motion.div variants={itemVariants} key={i} className="space-y-2 px-4">
                <div className="text-3xl lg:text-4xl font-black text-pulse-orange font-heading">{stat.val}</div>
                <div className="text-gray-medium text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="grid-pattern opacity-[0.015]" />
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-6"
          >
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-snow">
                منهجية AGMA Method™
              </h2>
              <p className="text-gray-medium font-medium text-sm sm:text-base">
                نظامنا الرباعي المصمم لتحويل البيانات إلى نتائج تجارية ملموسة عبر التكامل الكامل بين الذكاء البشري والاصطناعي.
              </p>
            </div>
            <div className="text-stroke font-black text-5xl sm:text-7xl lg:text-9xl absolute -top-10 -right-4 sm:-right-10 opacity-40 select-none pointer-events-none font-mono">
              SYSTEM v4.0
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {/* Step 01: Analyze */}
            <motion.div 
              variants={itemVariants}
              data-cursor-text="ANALYZE"
              className="md:col-span-2 min-h-[250px] md:h-[300px] geometric-card group bg-gray-dark/10 border-gray-dark relative overflow-hidden flex flex-col justify-end p-8"
            >
              <div className="absolute top-8 left-8 text-6xl font-black text-pulse-orange/10 font-mono group-hover:text-pulse-orange/20 transition-colors">01</div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 text-snow">
                  {agmaMethod[0].name} — {agmaMethod[0].nameAr}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed font-medium max-w-xl">
                  {agmaMethod[0].desc}
                </p>
              </div>
              {/* Decorative data scan line */}
              <div className="absolute top-0 right-0 w-32 h-full bg-pulse-orange/5 blur-3xl -skew-x-12 animate-pulse" />
            </motion.div>

            {/* Step 02: Generate */}
            <motion.div 
              variants={itemVariants}
              data-cursor-text="GENERATE"
              className="md:col-span-1 min-h-[200px] md:h-[300px] geometric-card group bg-gray-dark/10 border-gray-dark flex flex-col justify-between p-8"
            >
              <div className="text-4xl font-black text-pulse-orange/10 font-mono">02</div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-snow">
                  {agmaMethod[1].nameAr}
                </h3>
                <p className="text-gray-medium text-xs leading-relaxed">
                  {agmaMethod[1].desc}
                </p>
              </div>
            </motion.div>

            {/* Step 03: Market */}
            <motion.div 
              variants={itemVariants}
              data-cursor-text="MARKET"
              className="md:col-span-1 min-h-[200px] md:h-[300px] geometric-card group bg-gray-dark/10 border-gray-dark flex flex-col justify-between p-8"
            >
              <div className="text-4xl font-black text-pulse-orange/10 font-mono">03</div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-snow">
                  {agmaMethod[2].nameAr}
                </h3>
                <p className="text-gray-medium text-xs leading-relaxed">
                  {agmaMethod[2].desc}
                </p>
              </div>
            </motion.div>

            {/* Step 04: Adapt */}
            <motion.div 
              variants={itemVariants}
              data-cursor-text="ADAPT"
              className="md:col-span-2 min-h-[250px] md:h-[300px] geometric-card group bg-gray-dark/10 border-gray-dark relative overflow-hidden flex flex-col justify-end p-8"
            >
              <div className="absolute top-8 left-8 text-6xl font-black text-pulse-orange/10 font-mono group-hover:text-pulse-orange/20 transition-colors">04</div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 text-snow">
                  {agmaMethod[3].name} — {agmaMethod[3].nameAr}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed font-medium max-w-xl">
                  {agmaMethod[3].desc}
                </p>
              </div>
              {/* Terminal-like text decoration */}
              <div className="absolute top-8 right-8 font-mono text-[8px] text-pulse-orange/20 text-right leading-tight hidden lg:block">
                OPTIMIZING_LOOP...<br />
                DATA_FEED: ACTIVE<br />
                ROI_TRACKING: TRUE<br />
                ADAPTIVE_ENGINE: v4.0.2
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 px-6 bg-deep-navy/10 relative">
        <div className="orange-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05]" />
        
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative px-4"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 text-snow tracking-tighter-heading">حلولنا <span className="text-pulse-orange">الفائقة</span></h2>
            <p className="text-gray-medium max-w-2xl mx-auto text-base sm:text-lg font-medium">
              نغطي ثمانية مجالات استراتيجية لنكون شريكك التقني والإبداعي الوحيد في رحلة التحول نحو الذكاء الاصطناعي.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                initial="initial"
                whileHover="hover"
                className="relative"
              >
                <Link 
                  href={`/services#${service.id || ''}`} 
                  data-cursor-text="VIEW"
                  className="group block h-full p-8 rounded-3xl border border-snow/5 bg-gray-dark/30 hover:bg-pulse-orange/5 hover:border-pulse-orange/30 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Digital Scan Line Effect */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <motion.div 
                      variants={{
                        initial: { top: "-10%", opacity: 0 },
                        hover: { top: "110%", opacity: 1 }
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="absolute left-0 right-0 h-[3px] bg-pulse-orange shadow-[0_0_20px_rgba(244,77,43,1)] z-20"
                    />
                    
                    <motion.div 
                      variants={{
                        initial: { top: "-40%", opacity: 0 },
                        hover: { top: "110%", opacity: 0.4 }
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="absolute left-0 right-0 h-40 bg-gradient-to-b from-pulse-orange/50 via-pulse-orange/10 to-transparent z-10"
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-pulse-orange/10 flex items-center justify-center mb-6 text-pulse-orange group-hover:scale-110 transition-transform">
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-snow group-hover:text-pulse-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-medium text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
          <motion.div 
            initial="initial"
            whileHover="hover"
            data-cursor-text="CONTACT" 
            className="border border-gray-dark p-12 lg:p-20 text-center relative overflow-hidden bg-gray-dark/5 rounded-[40px]"
          >
            {/* Digital Scan Line Effect for CTA */}
            <motion.div 
              variants={{
                initial: { left: "-10%", opacity: 0 },
                hover: { left: "110%", opacity: 1 }
              }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
              className="absolute top-0 bottom-0 w-[2px] bg-pulse-orange shadow-[0_0_20px_rgba(244,77,43,1)] z-20 pointer-events-none"
            />

            <div className="grid-pattern opacity-[0.03]" />
            <div className="relative z-10 px-4">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 text-snow leading-tight">
                جاهز لجيل <br />
                <span className="text-pulse-orange">النمو القادم؟</span>
              </h2>
              <p className="text-gray-medium text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                دعنا نحلل علامتك التجارية ونقدم لك أول استراتيجية نمو مدعومة بالذكاء الاصطناعي مجاناً.
              </p>
              <div className="flex justify-center w-full">
                <Magnetic className="w-full sm:w-auto">
                  <Link href="/contact" className="btn-primary text-lg sm:text-xl px-10 sm:px-12 py-4 sm:py-5 shadow-2xl shadow-pulse-orange/20 inline-block w-full sm:w-auto text-center whitespace-nowrap">
                    احجز مكالمة استراتيجية الآن
                  </Link>
                </Magnetic>
              </div>
            </div>
          </motion.div>
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
            "url": "https://agma.com.sa",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "الرياض",
              "addressCountry": "SA"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "sales",
              "email": "hello@agma.com.sa"
            }
          }),
        }}
      />
    </main>
  );
}
