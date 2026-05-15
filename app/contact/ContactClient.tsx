'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Calendar, 
  Phone, 
  Briefcase, 
  Building2, 
  User, 
  DollarSign, 
  MessageSquare,
  CheckCircle2,
  ChevronLeft,
  Settings,
  X,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import Link from 'next/link';
import Magnetic from '@/components/ui/Magnetic';

const serviceOptions = [
  'الذكاء الاصطناعي والأتمتة',
  'التسويق الأدائي',
  'السيو والمحتوى',
  'السوشال ميديا',
  'الهوية والتصميم',
  'الويب والمنتجات الرقمية',
  'الاستراتيجية والاستشارات',
  'العلاقات العامة والإعلام',
  'منظومة تسويق كاملة'
];

const budgetOptions = [
  'أقل من 5,000 ر.س',
  '5,000 - 15,000 ر.س',
  '15,000 - 30,000 ر.س',
  '30,000 - 50,000 ر.س',
  'أكثر من 50,000 ر.س',
  'غير محدد حالياً'
];

const processSteps = [
  { title: 'نراجع طلبك', desc: 'يقوم فريقنا الفني والاستراتيجي بمراجعة بياناتك بعمق.' },
  { title: 'نحدد أنسب مسار', desc: 'نختار الأدوات والخدمات التي تحقق هدفك بأعلى كفاءة.' },
  { title: 'نتواصل لتحديد مكالمة', desc: 'نتصل بك لترتيب جلسة استكشافية لفهم التحديات.' },
  { title: 'نرسل نطاق عمل', desc: 'نقدم لك عرضاً فنياً ومالياً مفصلاً وشفافاً.' },
  { title: 'نبدأ التنفيذ', desc: 'ننطلق في العمل بعد الاعتماد مباشرة ضمن جدول زمني واضح.' },
];

export default function ContactClient() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-pure-ink">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 px-6">
        <div className="grid-pattern" />
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] text-snow max-w-4xl mx-auto px-4">
              لنبدأ بناء منظومة <br className="hidden sm:block" />
              <span className="text-pulse-orange">نمو أذكى.</span>
            </h1>
            <p className="text-gray-medium text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-6">
              سواء كنت تحتاج حملة، موقع، هوية، أتمتة، أو خطة تسويق كاملة — أخبرنا أين تقف، وسنساعدك على تحديد الخطوة التالية.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6">
              <Magnetic className="w-full sm:w-auto">
                <button 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="btn-primary w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 block text-center whitespace-nowrap"
                >
                  اطلب عرض سعر
                </button>
              </Magnetic>
              <Magnetic className="w-full sm:w-auto">
                <Link href="https://calendly.com" target="_blank" className="btn-secondary w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 block text-center whitespace-nowrap">
                  احجز مكالمة استراتيجية
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section id="contact-form" className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial="initial"
                whileHover="hover"
                className="geometric-card bg-gray-dark/10 p-8 lg:p-12 relative overflow-hidden"
              >
                {/* Digital Scan Line Effect for Form Card */}
                <motion.div 
                  variants={{
                    initial: { top: "-5%", opacity: 0 },
                    hover: { top: "105%", opacity: 1 }
                  }}
                  transition={{ duration: 1.2, ease: "linear" }}
                  className="absolute left-0 right-0 h-[3px] bg-pulse-orange shadow-[0_0_20px_rgba(244,77,43,1)] z-20 pointer-events-none"
                />

                <div className="grid-pattern opacity-[0.03]" />
                
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 space-y-6"
                  >
                    <div className="w-20 h-20 bg-pulse-orange/20 rounded-full flex items-center justify-center mx-auto text-pulse-orange">
                      <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-bold text-snow">تم استلام طلبك بنجاح!</h2>
                    <p className="text-gray-medium text-lg max-w-md mx-auto">فريقنا الاستراتيجي يراجع بياناتك الآن. سنتواصل معك خلال 24-48 ساعة عمل كحد أقصى.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="text-pulse-orange font-bold hover:underline"
                    >
                      إرسال طلب آخر
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-medium uppercase tracking-widest flex items-center gap-2">
                          <User size={14} className="text-pulse-orange" /> الاسم الكامل
                        </label>
                        <input required type="text" className="contact-input" placeholder="عبدالله محمد" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-medium uppercase tracking-widest flex items-center gap-2">
                          <Building2 size={14} className="text-pulse-orange" /> اسم الشركة
                        </label>
                        <input required type="text" className="contact-input" placeholder="شركة مثال التجارية" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-medium uppercase tracking-widest flex items-center gap-2">
                          <Briefcase size={14} className="text-pulse-orange" /> المسمى الوظيفي
                        </label>
                        <input required type="text" className="contact-input" placeholder="المدير التسويقي" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-medium uppercase tracking-widest flex items-center gap-2">
                          <Phone size={14} className="text-pulse-orange" /> رقم الجوال
                        </label>
                        <input required type="tel" className="contact-input text-left" dir="ltr" placeholder="+966 58 119 5387" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-medium uppercase tracking-widest flex items-center gap-2">
                        <Mail size={14} className="text-pulse-orange" /> البريد الإلكتروني
                      </label>
                      <input required type="email" className="contact-input" placeholder="name@company.com" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-medium uppercase tracking-widest flex items-center gap-2">
                          <Settings size={14} className="text-pulse-orange" /> نوع الخدمة المطلوبة
                        </label>
                        <select className="contact-input appearance-none bg-pure-ink">
                          {serviceOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-medium uppercase tracking-widest flex items-center gap-2">
                          <DollarSign size={14} className="text-pulse-orange" /> الميزانية المتوقعة
                        </label>
                        <select className="contact-input appearance-none bg-pure-ink">
                          {budgetOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-medium uppercase tracking-widest flex items-center gap-2">
                        <MessageSquare size={14} className="text-pulse-orange" /> الرسالة
                      </label>
                      <textarea rows={4} className="contact-input resize-none" placeholder="أخبرنا باختصار عن مشروعك أو التحدي الذي تواجهه..."></textarea>
                    </div>

                    <Magnetic className="w-full">
                      <button 
                        type="submit" 
                        disabled={formState === 'submitting'}
                        className="btn-primary w-full py-5 text-xl flex items-center justify-center gap-3 disabled:opacity-50 whitespace-nowrap"
                      >
                        {formState === 'submitting' ? 'جاري الإرسال...' : (
                          <>
                            أرسل طلبك <Send size={20} className="-rotate-45" />
                          </>
                        )}
                      </button>
                    </Magnetic>

                    <p className="text-[10px] text-gray-medium text-center mt-6 leading-relaxed">
                      بإرسال هذا النموذج، فإنك توافق على <Link href="/privacy-policy" className="text-pulse-orange hover:underline underline-offset-4">سياسة الخصوصية</Link> و <Link href="/terms" className="text-pulse-orange hover:underline underline-offset-4">الشروط والأحكام</Link> الخاصة بـ AGMA.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Right Column: Info & Steps */}
            <div className="lg:col-span-5 space-y-12">
              {/* Contact Info Card */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-snow">معلومات التواصل</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-pulse-orange/10 rounded flex items-center justify-center text-pulse-orange shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-snow font-bold">المقر</p>
                      <p className="text-gray-medium text-sm">الرياض، المملكة العربية السعودية</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-pulse-orange/10 rounded flex items-center justify-center text-pulse-orange shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-snow font-bold">الجوال</p>
                      <p className="text-gray-medium text-sm" dir="ltr">+966 58 119 5387</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-pulse-orange/10 rounded flex items-center justify-center text-pulse-orange shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-snow font-bold">البريد الإلكتروني</p>
                      <p className="text-gray-medium text-sm">hello@agma.com.sa</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-pulse-orange/10 rounded flex items-center justify-center text-pulse-orange shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-snow font-bold">ساعات العمل</p>
                      <p className="text-gray-medium text-sm">الأحد - الخميس | 09:00 ص - 05:00 م</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Link href="#" className="w-10 h-10 border border-gray-dark flex items-center justify-center text-gray-medium hover:text-snow hover:border-snow transition-all">
                    <Twitter size={18} />
                  </Link>
                  <Link href="#" className="w-10 h-10 border border-gray-dark flex items-center justify-center text-gray-medium hover:text-snow hover:border-snow transition-all">
                    <Linkedin size={18} />
                  </Link>
                  <Link href="#" className="w-10 h-10 border border-gray-dark flex items-center justify-center text-gray-medium hover:text-snow hover:border-snow transition-all">
                    <Instagram size={18} />
                  </Link>
                </div>
              </div>

              {/* Why Call Section */}
              <div className="geometric-card bg-deep-navy/10 p-8 border-gray-dark space-y-6">
                <h3 className="text-xl font-bold text-snow flex items-center gap-3">
                  <Calendar className="text-pulse-orange" size={24} /> لماذا نبدأ بمكالمة؟
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed font-medium">
                  المكالمة الاستكشافية هي أهم خطوة لضمان نجاح أي مشروع. هي تساعدنا في AGMA على فهم أهدافك بدقة، تحليل التحديات الحالية، دراسة القنوات التي تعمل عليها، واكتشاف الفرص الحقيقية للنمو قبل أن نقترح عليك أي خدمة أو استثمار. هدفنا ليس البيع، بل بناء حل يحقق نتيجة.
                </p>
              </div>

              {/* Process Section */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-snow">ماذا يحدث بعد الإرسال؟</h3>
                <div className="space-y-4">
                  {processSteps.map((step, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                      <div className="text-pulse-orange font-mono font-bold text-lg pt-1 opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                      <div className="space-y-1">
                        <h4 className="text-snow font-bold">{step.title}</h4>
                        <p className="text-gray-medium text-xs font-medium leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 border-t border-gray-dark">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-snow leading-tight mb-8">
              كل نمو واضح يبدأ <br />
              <span className="text-pulse-orange">بسؤال صحيح.</span>
            </h2>
            <p className="text-gray-medium text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              أرسل لنا ما تعمل عليه، وسنساعدك على تحويله إلى خطة قابلة للتنفيذ.
            </p>
            <div className="flex justify-center w-full">
              <Magnetic className="w-full sm:w-auto">
                <button 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary text-lg sm:text-xl px-10 sm:px-12 py-4 sm:py-5 shadow-2xl shadow-pulse-orange/20 w-full sm:w-auto text-center whitespace-nowrap"
                >
                  أرسل طلبك الآن
                </button>
              </Magnetic>
            </div>
            
            <div className="pt-12 flex flex-wrap justify-center gap-6 sm:gap-10 text-[10px] sm:text-xs text-gray-medium font-bold uppercase tracking-widest border-t border-gray-dark px-4">
              <Link href="/services" className="hover:text-snow">خارطة الخدمات</Link>
              <Link href="/pricing" className="hover:text-snow">فلسفة التسعير</Link>
              <Link href="/process" className="hover:text-snow">نموذج العمل</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
