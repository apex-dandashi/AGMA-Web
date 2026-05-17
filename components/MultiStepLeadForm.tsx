'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  User, 
  Building2, 
  Mail, 
  Phone, 
  Briefcase, 
  MessageSquare,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Target,
  Zap,
  Globe,
  Palette,
  BarChart,
  Megaphone,
  Search,
  Cpu,
  Clock
} from 'lucide-react';
import Magnetic from './ui/Magnetic';
import Tilt from './ui/Tilt';

const services = [
  { 
    id: 'ai', 
    title: 'الذكاء الاصطناعي', 
    icon: Cpu, 
    desc: 'أتمتة العمليات ودمج الحلول الذكية',
    subServices: ['أتمتة العمليات (RPA)', 'روبوتات المحادثة الذكية', 'تحليل البيانات المتقدم', 'توقعات الذكاء الاصطناعي']
  },
  { 
    id: 'marketing', 
    title: 'التسويق الأدائي', 
    icon: Target, 
    desc: 'حملات مبنية على النتائج والتحويل',
    subServices: ['إعلانات Google & Meta', 'التسويق عبر المؤثرين', 'إعادة الاستهداف الذكي', 'تحسين معدل التحويل (CRO)']
  },
  { 
    id: 'seo', 
    title: 'السيو والمحتوى', 
    icon: Search, 
    desc: 'تحسين المحركات وإثراء علامة المحتوى',
    subServices: ['سيو تقني والروابط', 'استراتيجية المحتوى', 'إدارة المدونات المعرفية', 'السيو المحلي']
  },
  { 
    id: 'social', 
    title: 'السوشال ميديا', 
    icon: Megaphone, 
    desc: 'إدارة وتنشيط القنوات الاجتماعية',
    subServices: ['إدارة الحسابات', 'صناعة المحتوى الإبداعي', 'التفاعل المجتمعي', 'تحليل المنافسين']
  },
  { 
    id: 'identity', 
    title: 'الهوية والتصميم', 
    icon: Palette, 
    desc: 'بناء العلامة البصرية والقصة',
    subServices: ['تصميم الشعار والهوية', 'دليل العلامة التجارية', 'تصميم واجهة المستخدم UI', 'النمذجة ثلاثية الأبعاد']
  },
  { 
    id: 'web', 
    title: 'المنتجات الرقمية', 
    icon: Globe, 
    desc: 'تطوير المواقع والبرمجيات المتطورة',
    subServices: ['تطوير متاجر سلة وزد', 'تطوير تطبيقات الويب', 'تحسين تجربة المستخدم UX', 'الصيانة والدعم الفني']
  },
];

const budgets = [
  'أقل من 10k',
  '10k - 25k',
  '25k - 50k',
  '50k - 100k',
  'أكثر من 100k',
];

const urgencies = [
  'فوري - نحتاج للبدء الآن',
  'خلال هذا الشهر',
  'خلال 1-3 أشهر',
  'مرحلة التخطيط والبحث',
];

export default function MultiStepLeadForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState({
    services: [] as string[],
    subServices: [] as string[],
    budget: '',
    urgency: '',
    details: '',
    name: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => {
    setDirection(1);
    setStep(s => s + 1);
  };

  const prevStep = () => {
    setDirection(-1);
    setStep(s => s - 1);
  };

  const handleServiceToggle = (id: string) => {
    setFormData(prev => {
      const isSelected = prev.services.includes(id);
      if (isSelected) {
        return {
          ...prev,
          services: prev.services.filter(s => s !== id),
          // Also remove associated subservices if the main service is deselected
          subServices: prev.subServices.filter(sub => {
            const parent = services.find(s => s.id === id);
            return !parent?.subServices.includes(sub);
          })
        };
      }
      return { ...prev, services: [...prev.services, id] };
    });
  };

  const handleSubServiceToggle = (sub: string) => {
    setFormData(prev => {
      const isSelected = prev.subServices.includes(sub);
      if (isSelected) {
        return { ...prev, subServices: prev.subServices.filter(s => s !== sub) };
      }
      return { ...prev, subServices: [...prev.subServices, sub] };
    });
  };

  const generateWhatsAppMessage = () => {
    const selectedServiceTitles = formData.services
      .map(id => services.find(s => s.id === id)?.title)
      .filter(Boolean);

    let message = `*طلب استشارة مشروع جديد - جيل الذكاء*\n\n`;
    message += `*الخدمات المطلوبة:*\n- ${selectedServiceTitles.join('\n- ')}\n\n`;
    
    if (formData.subServices.length > 0) {
      message += `*الخدمات الفرعية:*\n- ${formData.subServices.join('\n- ')}\n\n`;
    }

    message += `*الميزانية المتوقعة:* ${formData.budget}\n`;
    message += `*الأولوية:* ${formData.urgency}\n\n`;
    
    message += `*تفاصيل المشكلة/الهدف:*\n${formData.details}\n\n`;
    
    message += `*معلومات التواصل:*\n`;
    message += `الاسم: ${formData.name}\n`;
    message += `الشركة: ${formData.company}\n`;
    message += `المسمى الوظيفي: ${formData.jobTitle}\n`;
    message += `الهاتف: ${formData.phone}\n`;
    message += `البريد: ${formData.email}`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppSend = () => {
    const phoneNumber = '966581195387';
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API
    await new Promise(r => setTimeout(r, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 space-y-8 bg-gray-dark/5 p-12 rounded-3xl border border-gray-dark/30"
      >
        <div className="w-24 h-24 bg-pulse-orange/20 rounded-full flex items-center justify-center mx-auto text-pulse-orange relative">
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
            >
                <CheckCircle2 size={56} />
            </motion.div>
            <div className="absolute inset-0 bg-pulse-orange/10 rounded-full animate-ping" />
        </div>
        <div className="space-y-4">
            <h2 className="text-4xl font-bold text-snow">وصلنا طلبك بنجاح!</h2>
            <p className="text-gray-medium text-lg max-w-md mx-auto leading-relaxed">
                يقوم فريقنا الآن بتحليل بياناتك لتجهيز تصور أولي قبل تواصلنا معك خلال 24 ساعة.
            </p>
        </div>
        <button 
          onClick={() => {
            setIsSuccess(false);
            setStep(1);
            setFormData({
                services: [], subServices: [], budget: '', urgency: '', details: '', name: '',
                company: '', jobTitle: '', email: '', phone: ''
            });
          }}
          className="text-pulse-orange font-bold text-sm hover:underline tracking-widest uppercase"
        >
          إرسال طلب جديد
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12 max-w-3xl mx-auto">
        <div className="flex justify-between mb-4">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
                step >= s ? 'text-pulse-orange' : 'text-gray-medium'
              }`}
            >
              {s === 1 ? 'الخيار' : s === 2 ? 'التفاصيل' : 'التواصل'}
            </div>
          ))}
        </div>
        <div className="h-1 w-full bg-gray-dark/30 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-pulse-orange shadow-[0_0_15px_rgba(244,77,43,0.5)]"
            initial={{ width: '0%' }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.5, ease: "circOut" }}
          />
        </div>
      </div>

      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "backOut" }}
            className="w-full"
          >
            {step === 1 && (
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-snow">ما الذي نساعدك في بنائه؟</h2>
                  <p className="text-gray-medium font-medium text-lg">يمكنك اختيار أكثر من خدمة للحصول على حل متكامل.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                  {services.map((item) => (
                    <div key={item.id} className="flex flex-col gap-4 h-full">
                      <Tilt className="flex-grow">
                        <button
                          onClick={() => handleServiceToggle(item.id)}
                          className={`w-full h-full text-right p-6 rounded-2xl border transition-all duration-300 group flex flex-col ${
                            formData.services.includes(item.id)
                              ? 'bg-pulse-orange/10 border-pulse-orange shadow-[0_0_30px_rgba(244,77,43,0.1)]' 
                              : 'bg-gray-dark/10 border-gray-dark/30 hover:border-gray-dark hover:bg-gray-dark/20'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-4 w-full">
                            <div className={`p-3 rounded-lg transition-colors ${
                               formData.services.includes(item.id) ? 'bg-pulse-orange text-snow' : 'bg-gray-dark/30 text-pulse-orange group-hover:bg-pulse-orange group-hover:text-snow'
                            }`}>
                              <item.icon size={24} />
                            </div>
                            {formData.services.includes(item.id) && (
                              <motion.div 
                                initial={{ scale: 0 }} 
                                animate={{ scale: 1 }} 
                                className="text-pulse-orange"
                              >
                                <CheckCircle2 size={24} />
                              </motion.div>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-snow mb-2">{item.title}</h3>
                          <p className="text-gray-medium text-xs leading-relaxed font-medium flex-grow">{item.desc}</p>
                        </button>
                      </Tilt>
                      
                      {/* Sub-services selection */}
                      {formData.services.includes(item.id) && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-pure-ink p-4 rounded-xl border border-pulse-orange/30 shadow-2xl relative z-20"
                        >
                          <span className="text-[10px] font-bold text-pulse-orange uppercase tracking-widest mb-3 block">الخدمات الفرعية</span>
                          <div className="grid grid-cols-1 gap-1.5">
                            {item.subServices.map(sub => (
                              <button
                                key={sub}
                                onClick={() => handleSubServiceToggle(sub)}
                                className={`text-[11px] font-bold p-2.5 rounded-lg text-right flex items-center justify-between transition-all ${
                                  formData.subServices.includes(sub)
                                    ? 'bg-pulse-orange text-snow'
                                    : 'bg-gray-dark/20 text-gray-medium hover:bg-gray-dark/40 hover:text-snow'
                                }`}
                              >
                                {sub}
                                {formData.subServices.includes(sub) && <Check size={12} />}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex justify-center pt-8">
                  <Magnetic>
                    <button 
                      onClick={nextStep}
                      disabled={formData.services.length === 0}
                      className="btn-primary px-16 py-4 text-xl flex items-center gap-3 disabled:opacity-50"
                    >
                      التالي <ChevronLeft size={24} />
                    </button>
                  </Magnetic>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl font-bold text-snow">أخبرنا بالمزيد عن طموحك</h2>
                  <p className="text-gray-medium font-medium text-lg">بناءً على اختيارك لـ ({formData.services.length}) خدمات، أخبرنا بالاحتياج الفعلي.</p>
                </div>
                
                <div className="space-y-12">
                  <div className="space-y-6">
                    <label className="text-sm font-bold text-gray-medium uppercase tracking-widest flex items-center gap-3">
                      <DollarSignComponent /> ميزانية الاستثمار التسويقي المتوقعة لمشروعك
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-4 px-2 rounded-xl text-xs font-bold border transition-all ${
                            formData.budget === b
                              ? 'bg-pulse-orange border-pulse-orange text-snow shadow-lg shadow-pulse-orange/20'
                              : 'bg-gray-dark/10 border-gray-dark/30 text-gray-medium hover:border-gray-dark'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <label className="text-sm font-bold text-gray-medium uppercase tracking-widest flex items-center gap-3">
                      <Clock size={18} className="text-pulse-orange" /> متى ترغب في بدء المشروع؟
                    </label>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {urgencies.map((u) => (
                        <button
                          key={u}
                          type="button"
                          onClick={() => setFormData({ ...formData, urgency: u })}
                          className={`py-4 px-2 rounded-xl text-xs font-bold border transition-all ${
                            formData.urgency === u
                              ? 'bg-pulse-orange border-pulse-orange text-snow shadow-lg shadow-pulse-orange/20'
                              : 'bg-gray-dark/10 border-gray-dark/30 text-gray-medium hover:border-gray-dark'
                          }`}
                        >
                          {u}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <label className="text-sm font-bold text-gray-medium uppercase tracking-widest flex items-center gap-3 underline underline-offset-8 decoration-pulse-orange/30">
                      <MessageSquare size={18} className="text-pulse-orange" /> باختصار، ما هي المشكلة الأساسية التي تريد حلها؟
                    </label>
                    <div className="relative group">
                        <textarea 
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          placeholder="مثال: نريد أتمتة عملية الرد على العملاء بشكل كامل مع دمج نظام CRM لتحسين المتابعة، ورفع الوعي بالعلامة التجارية في السوق السعودي..."
                          rows={8}
                          className="contact-input min-h-[300px] resize-none text-xl p-10 bg-gray-dark/5 focus:bg-gray-dark/10 border-gray-dark/50 leading-relaxed placeholder:text-gray-dark/50"
                        />
                        <div className="absolute bottom-6 left-6 text-[10px] font-mono text-pulse-orange/30">
                            SYSTEM_ACTIVE_DATA_STREAM
                        </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-8 pt-6">
                  <button onClick={prevStep} className="flex-1 py-4 text-gray-medium font-bold hover:text-snow transition-colors flex items-center justify-center gap-3 text-lg">
                    <ChevronRight size={24} /> السابق
                  </button>
                  <Magnetic className="flex-[3]">
                    <button 
                      onClick={nextStep}
                      disabled={!formData.budget || !formData.urgency || formData.details.length < 5}
                      className="btn-primary w-full py-5 text-xl flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      التالي <ChevronLeft size={24} />
                    </button>
                  </Magnetic>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold text-snow">كيف يمكننا الوصول إليك؟</h2>
                  <p className="text-gray-medium font-medium">سنتواصل معك لمناقشة التصور الاستراتيجي المبدئي.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField 
                    icon={User} 
                    label="الاسم الكامل" 
                    placeholder="عبدالله محمد" 
                    value={formData.name} 
                    onChange={(v: string) => setFormData({...formData, name: v})} 
                  />
                  <FormField 
                    icon={Building2} 
                    label="اسم الشركة" 
                    placeholder="شركة المسار الرقمي" 
                    value={formData.company} 
                    onChange={(v: string) => setFormData({...formData, company: v})} 
                  />
                  <FormField 
                    icon={Briefcase} 
                    label="المسمى الوظيفي" 
                    placeholder="المدير التنفيذي" 
                    value={formData.jobTitle} 
                    onChange={(v: string) => setFormData({...formData, jobTitle: v})} 
                  />
                   <FormField 
                    icon={Phone} 
                    label="رقم الجوال" 
                    placeholder="+966 5..." 
                    value={formData.phone} 
                    dir="ltr"
                    onChange={(v: string) => setFormData({...formData, phone: v})} 
                  />
                </div>

                <FormField 
                  icon={Mail} 
                  label="البريد الإلكتروني" 
                  placeholder="name@company.com" 
                  type="email"
                  value={formData.email} 
                  onChange={(v: string) => setFormData({...formData, email: v})} 
                />

                <div className="flex flex-col gap-4 pt-10">
                  <div className="flex items-center gap-4">
                    <button type="button" onClick={prevStep} className="flex-1 py-4 text-gray-medium font-bold hover:text-snow transition-colors flex items-center justify-center gap-2">
                      <ChevronRight size={20} /> السابق
                    </button>
                    <Magnetic className="flex-[2]">
                      <button 
                        type="submit"
                        disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                        className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-50 relative overflow-hidden"
                      >
                        {isSubmitting ? (
                          <motion.div 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }} 
                              className="flex items-center gap-3"
                          >
                              <div className="w-5 h-5 border-2 border-snow/30 border-t-snow rounded-full animate-spin" />
                              جاري المعالجة...
                          </motion.div>
                        ) : (
                          <>
                              إطلاق المشروع <Sparkles size={20} />
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </div>

                  <button 
                    type="button"
                    onClick={handleWhatsAppSend}
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className="w-full py-4 rounded-xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 text-green-500 font-bold flex items-center justify-center gap-3 transition-all group disabled:opacity-50"
                  >
                    <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                    أرسل التفاصيل عبر واتساب مباشرة
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function FormField({ label, icon: Icon, placeholder, value, onChange, type = "text", dir = "rtl" }: {
    label: string, 
    icon: any, 
    placeholder: string, 
    value: string, 
    onChange: (v: string) => void, 
    type?: string, 
    dir?: string 
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-gray-medium uppercase tracking-widest flex items-center gap-2">
        <Icon size={14} className="text-pulse-orange" /> {label}
      </label>
      <input 
        required 
        type={type} 
        dir={dir}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="contact-input" 
        placeholder={placeholder} 
      />
    </div>
  );
}

function DollarSignComponent() {
    return <span className="text-pulse-orange text-sm font-bold">﷼</span>;
}
