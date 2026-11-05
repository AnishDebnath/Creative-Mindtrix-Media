import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, ChevronDown } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectModel, setProjectModel] = useState<'Per Project' | 'Monthly Subscription'>('Per Project');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [requirements, setRequirements] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const PROJECT_MODELS: Array<{ id: 'Per Project' | 'Monthly Subscription'; label: string; desc: string }> = [
    { id: 'Per Project', label: 'Per Project', desc: 'Single delivery' },
    { id: 'Monthly Subscription', label: 'Monthly Subscription', desc: 'Continuous reels' },
  ];

  const SERVICES = [
    'AI-Powered Product Advertising',
    'Product Photography & AI Image Creation',
    'Social Media Reels & Video Content',
    'Digital Advertising Creatives',
    'AI Spokesperson & UGC-Style Videos',
    'E-commerce Product Content',
    'Brand Identity & Graphic Design',
    'Brand Campaign & Creative Strategy',
  ];

  const toggleService = (srv: string) => {
    setSelectedServices((prev) => {
      const next = prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv];
      if (next.length > 0 && formError.includes('service')) {
        setFormError('');
      }
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setFormError('Please enter your name or brand.');
      return;
    }
    if (!phone.trim()) {
      setFormError('Please enter your phone number.');
      return;
    }
    if (phone.length < 10) {
      setFormError('Please enter a valid phone number (at least 10 digits).');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setFormError('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }
    if (selectedServices.length === 0) {
      setFormError('Please select at least one service needed.');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          projectModel,
          selectedServices,
          requirements: requirements.trim(),
        }),
      });

      const data = (await res.json().catch(() => ({}))) as Record<string, any>;

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message. Please try again or reach out on WhatsApp.');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setFormError(err.message || 'Something went wrong. Please try again or message us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setProjectModel('Per Project');
    setSelectedServices([]);
    setRequirements('');
    setFormError('');
    setIsSubmitted(false);
  };

  return (
    <div className="lg:col-span-6 w-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="w-full h-full flex flex-col rounded-[28px] sm:rounded-[38px] md:rounded-[44px] overflow-hidden bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] shadow-[0_25px_70px_-15px_rgba(61,32,53,0.22)] border border-[#ebdce7]"
      >
        {/* Behind Card Header */}
        <div className="px-4.5 sm:px-7 pt-4 sm:pt-5 pb-3.5 sm:pb-4.5 text-white select-none shrink-0">
          <h2 className="text-lg sm:text-[22px] font-bold tracking-tight text-white leading-tight">
            Share your details with us.
          </h2>
        </div>

        {/* Front White Form Card */}
        <div className="w-full flex-1 rounded-t-[24px] sm:rounded-t-[34px] bg-white p-4 sm:p-7 shadow-sm relative z-10 flex flex-col justify-center min-h-[580px] sm:min-h-[620px]">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="w-full flex-1 flex flex-col items-center justify-center text-center py-8 px-4 my-auto"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] text-[#eda970] flex items-center justify-center mb-5 shadow-sm border border-[#ebdce7]">
                  <Check className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-black text-neutral-900 tracking-tight mb-2.5">
                  Message Sent Successfully!
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mb-6 leading-relaxed">
                  Thank you, <strong className="text-neutral-900">{name}</strong>. We've received your inquiry for{' '}
                  <span className="font-semibold text-[#3d2035]">{projectModel}</span>. Our team will reach out to{' '}
                  <strong className="text-neutral-900">{phone}</strong> shortly.
                  {email && (
                    <span className="block mt-2 text-xs text-neutral-500">
                      A confirmation copy has been sent to <strong className="text-neutral-700">{email}</strong>.
                    </span>
                  )}
                </p>

                <button
                  onClick={resetForm}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] hover:opacity-95 text-neutral-900 font-display text-xs sm:text-sm font-black tracking-wider uppercase transition-all cursor-pointer shadow-sm active:scale-[0.98]"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                {/* 1. Your Name / Brand */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-1.5">
                    Your Name / Brand<span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe / MyBrand"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-neutral-100/80 border border-neutral-200/80 text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-[#3d2035] focus:ring-2 focus:ring-[#3d2035]/10 outline-none transition-all font-medium"
                  />
                </div>

                {/* 2. Phone / WhatsApp */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-1.5">
                    Phone / WhatsApp<span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    required
                    value={phone}
                    onChange={(e) => {
                      const onlyDigits = e.target.value.replace(/[^0-9]/g, '');
                      setPhone(onlyDigits);
                      if (formError.includes('phone') || formError.includes('number')) setFormError('');
                    }}
                    placeholder="e.g. 9876543210"
                    maxLength={15}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-neutral-100/80 border border-neutral-200/80 text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-[#3d2035] focus:ring-2 focus:ring-[#3d2035]/10 outline-none transition-all font-medium"
                  />
                </div>

                {/* 3. Email Address */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-1.5">
                    Email Address<span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (formError.includes('email') || formError.includes('mail')) setFormError('');
                    }}
                    placeholder="yourname@yourbrand.com"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-neutral-100/80 border border-neutral-200/80 text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-[#3d2035] focus:ring-2 focus:ring-[#3d2035]/10 outline-none transition-all font-medium"
                  />
                </div>

                {/* 4. Plan Selection */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-2">
                    Select Plan<span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    {PROJECT_MODELS.map((model) => {
                      const isSelected = projectModel === model.id;
                      return (
                        <button
                          key={model.id}
                          type="button"
                          onClick={() => setProjectModel(model.id)}
                          className={`px-3.5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 select-none border ${
                            isSelected
                              ? 'bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] text-white shadow-sm border-[#3d2035]'
                              : 'bg-neutral-100/90 hover:bg-neutral-200/70 text-neutral-700 border-neutral-200/80'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
                              isSelected
                                ? 'border-[#eda970] bg-[#eda970] text-[#3d2035]'
                                : 'border-neutral-300 bg-white'
                            }`}
                          >
                            {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </span>
                          <span className="whitespace-nowrap">{model.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 5. Services Needed */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-1.5">
                    Services Needed<span className="text-rose-500">*</span>{' '}
                    <span className="text-neutral-400 font-normal">(select one or more)</span>
                  </label>
                  <div ref={dropdownRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-neutral-100/80 border text-sm text-neutral-900 transition-all font-medium cursor-pointer flex items-center justify-between text-left select-none ${
                        isDropdownOpen
                          ? 'bg-white border-[#3d2035] ring-2 ring-[#3d2035]/10 shadow-xs'
                          : selectedServices.length === 0 && formError.includes('service')
                            ? 'border-rose-400 bg-rose-50/30'
                            : 'border-neutral-200/80 hover:bg-neutral-100/90'
                      }`}
                    >
                      <div className="flex-1 flex items-center gap-1.5 pr-2 min-w-0 overflow-hidden flex-wrap">
                        {selectedServices.length === 0 ? (
                          <span className="text-neutral-400 font-normal">Choose services needed...</span>
                        ) : (
                          selectedServices.map((srv) => (
                            <span
                              key={srv}
                              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-[#3d2035] text-white text-xs font-semibold shadow-xs"
                            >
                              <span>{srv}</span>
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleService(srv);
                                }}
                                className="hover:text-[#eda970] transition-colors cursor-pointer text-xs font-bold leading-none ml-0.5"
                                title="Remove"
                              >
                                ×
                              </span>
                            </span>
                          ))
                        )}
                      </div>

                      <ChevronDown
                        className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180 text-[#3d2035]' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.98 }}
                          transition={{ duration: 0.16, ease: 'easeOut' }}
                          className="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl bg-white border border-[#ebdce7] shadow-[0_20px_50px_-10px_rgba(61,32,53,0.22)] p-1.5"
                        >
                          <div
                            className="space-y-0.5 max-h-48 overflow-y-auto pr-1"
                            style={{
                              scrollbarWidth: 'thin',
                              scrollbarColor: '#3d2035 #f5ecf3',
                            }}
                          >
                            {SERVICES.map((srv) => {
                              const isSelected = selectedServices.includes(srv);
                              return (
                                <button
                                  key={srv}
                                  type="button"
                                  onClick={() => toggleService(srv)}
                                  className={`w-full px-3 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all flex items-center justify-between cursor-pointer select-none text-left ${
                                    isSelected
                                      ? 'bg-[#3d2035]/5 text-[#3d2035]'
                                      : 'text-neutral-700 hover:bg-neutral-50'
                                  }`}
                                >
                                  <span className="flex items-center gap-2.5">
                                    <span
                                      className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                                        isSelected
                                          ? 'border-[#3d2035] bg-[#3d2035] text-white'
                                          : 'border-neutral-300 bg-white'
                                      }`}
                                    >
                                      {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                    </span>
                                    <span>{srv}</span>
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* 6. Requirements */}
                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-1.5">
                    Project Requirements / Details <span className="text-neutral-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Tell us about your products and goals..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-100/80 border border-neutral-200/80 text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-[#3d2035] focus:ring-2 focus:ring-[#3d2035]/10 outline-none transition-all font-medium resize-none"
                  />
                </div>

                {/* Error Banner */}
                {formError && (
                  <div className="px-3.5 py-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-semibold text-center animate-shake">
                    {formError}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 sm:py-4 rounded-xl font-display font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] hover:opacity-95 text-white shadow-lg shadow-[#3d2035]/25 hover:shadow-xl transition-all active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 select-none border border-white/10"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send message</span>
                      <Send className="w-4 h-4 ml-1 text-[#eda970]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

