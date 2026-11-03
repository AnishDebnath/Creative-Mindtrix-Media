import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Star,
  Send,
  Check,
  ChevronDown
} from 'lucide-react';
import { IMAGES } from '@/data/images';
import { BRAND_LOGOS } from '@/pages/home/Brands';
import { FaqSection } from '@/pages/home/Faq';

interface ContactPageProps {
  onNavigateToImages?: () => void;
  onNavigateToReels?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  // Form State (matching details from home bottom side form + per project / monthly + multiple services + requirements)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectModel, setProjectModel] = useState<'Per Project' | 'Monthly Subscription'>('Per Project');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [requirements, setRequirements] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close custom multi-select dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Engagement model options instead of platform
  const PROJECT_MODELS: Array<{ id: 'Per Project' | 'Monthly Subscription'; label: string; desc: string }> = [
    { id: 'Per Project', label: 'Per Project', desc: 'Single delivery' },
    { id: 'Monthly Subscription', label: 'Monthly Subscription', desc: 'Continuous reels' }
  ];

  // Service options tailored to Mindtrix Media website information with full scrollable options
  const SERVICES = [
    'AI Product Commercials',
    'Social Media Video Reels',
    'Studio & Product Photography',
    'Brand Ad Campaigns',
    'Viral TikTok & Shorts Ads',
    'UGC Performance Video Ads',
    '3D Product Visuals & Staging',
    'Other Custom Creatives'
  ];

  // ponytail: repeat brands for seamless continuous loop marquee on contact page
  const displayBrands = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setProjectModel('Per Project');
    setSelectedServices([]);
    setRequirements('');
    setIsSubmitted(false);
  };

  // Creator avatars for top-left social proof
  const avatarList = [
    IMAGES['fashion-model-studio-pose']?.src,
    IMAGES['fashion-confident-red-tee']?.src,
    IMAGES['jewelry-elegant-necklace-portrait']?.src,
    IMAGES['fashion-deep-red-studio']?.src,
  ].filter(Boolean);

  return (
    <div className="w-full min-h-screen pt-0 pb-0">
      {/* -------------------------------------------------------------------------- */}
      {/* 1. HERO SPLIT SECTION: EXACT REFERENCE LAYOUT WITH WEBSITE THEME           */}
      {/* -------------------------------------------------------------------------- */}
      <section
        className="relative w-full pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(235, 220, 231, 0.45) 0%, rgba(250, 237, 229, 0.35) 30%, rgba(234, 227, 251, 0.2) 60%, #ffffff 90%, #ffffff 100%)',
        }}
      >
        {/* Subtle Ambient Radial Glows in Website Palette */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-r from-[#dcc6d5]/30 via-[#cfc1ee]/20 to-[#eda970]/25 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-l from-[#3d2035]/10 via-[#dcc6d5]/15 to-[#eda970]/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-stretch">

          {/* LEFT COLUMN: HERO TEXT & AUTHORITY PROOF (SAME AS PROVIDED IMAGE LAYOUT, NO SUB-HEADING) */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2 sm:py-4">

            <div>
              {/* Top Creator Proof Badge */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8 select-none">
                <div className="flex items-center -space-x-2.5">
                  {avatarList.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Creator"
                      loading="lazy"
                      decoding="async"
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-xs"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-neutral-700 tracking-tight mt-0.5">
                    Grown over 120+ creators
                  </span>
                </div>
              </div>

              {/* Section Headline - Balanced & Maintained Scale */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[62px] xl:text-[68px] font-black tracking-normal text-neutral-900 uppercase leading-tight sm:leading-[1.08]">
                <span>LET'S BUILD</span>
                <br />
                <span>SOMETHING</span>
                <br />
                {/* Highlight Pill Container for GREAT. - Styled in Website Theme */}
                <span className="inline-block relative mt-1.5 sm:mt-2">
                  <span className="relative z-10 px-4.5 sm:px-6 py-0.5 sm:py-1 rounded-[20px] sm:rounded-[26px] bg-gradient-to-r from-[#faede5] via-[#f7edf5] to-[#eae3fb] shadow-sm inline-block transform -rotate-1 border border-[#ebdce7]">
                    <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
                      GREAT.
                    </span>
                  </span>
                </span>
              </h1>
            </div>

              {/* Contact Details (Email, Call, Office) - Refined, Clean & Premium */}
              <div className="mt-8 sm:mt-10 flex flex-col gap-4.5 sm:gap-5">
                {/* Email */}
                <a
                  href="mailto:mindtrixmediaindia@gmail.com"
                  className="group inline-flex items-center gap-3.5 sm:gap-4 select-none w-fit"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#ebdce7] shadow-[0_2px_10px_-2px_rgba(61,32,53,0.08)] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#3d2035]/30 group-hover:shadow-[0_4px_14px_-2px_rgba(61,32,53,0.12)] transition-all">
                    <Mail className="w-5 h-5 text-[#3d2035] group-hover:text-[#ed4f6c] transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 font-display leading-tight mb-0.5">
                      EMAIL US
                    </span>
                    <span className="text-base sm:text-[17px] font-bold text-neutral-900 group-hover:text-[#ed4f6c] transition-colors tracking-tight break-all">
                      mindtrixmediaindia@gmail.com
                    </span>
                  </div>
                </a>

                {/* Call */}
                <div className="group inline-flex items-center gap-3.5 sm:gap-4 select-none w-fit">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#ebdce7] shadow-[0_2px_10px_-2px_rgba(61,32,53,0.08)] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#ed4f6c]/30 group-hover:shadow-[0_4px_14px_-2px_rgba(237,79,108,0.12)] transition-all">
                    <Phone className="w-5 h-5 text-[#ed4f6c] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 font-display leading-tight mb-0.5">
                      CALL US
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2 text-base sm:text-[17px] font-bold text-neutral-900 tracking-tight">
                      <a href="tel:+918910092451" className="hover:text-[#ed4f6c] transition-colors">
                        +91 89100 92451
                      </a>
                      <span className="text-neutral-300 font-normal text-sm">/</span>
                      <a href="tel:+919073604457" className="hover:text-[#ed4f6c] transition-colors">
                        +91 90736 04457
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office */}
                <div className="group inline-flex items-center gap-3.5 sm:gap-4 select-none w-fit">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#ebdce7] shadow-[0_2px_10px_-2px_rgba(61,32,53,0.08)] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#d97736]/30 group-hover:shadow-[0_4px_14px_-2px_rgba(217,119,54,0.12)] transition-all">
                    <MapPin className="w-5 h-5 text-[#d97736] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 font-display leading-tight mb-0.5">
                      OFFICE
                    </span>
                    <span className="text-base sm:text-[17px] font-bold text-neutral-900 tracking-tight">
                      Kolkata, India
                    </span>
                  </div>
                </div>
              </div>

            {/* Bottom: Trusted by creators and brands with Home-Page Brands Showcase Marquee Design */}
            <div className="pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-[#ebdce7]/80 w-full overflow-hidden">
              {/* Heading matching home page brands showcase marquee */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-xl md:text-2xl font-extrabold tracking-tight text-neutral-900">
                  Trusted by{' '}
                  <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
                    120+
                  </span>{' '}
                  creators and brands
                </h3>
              </div>

              {/* Transparent Logo Track with Both Sides Fade Effect exactly same as home page */}
              <div
                className="relative w-full overflow-hidden flex items-center py-2 sm:py-2.5"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
                }}
              >
                <div className="animate-marquee flex gap-8 sm:gap-14 md:gap-16 items-center shrink-0">
                  {displayBrands.map((brand, idx) => (
                    <div
                      key={`${brand.id}-${idx}`}
                      className="shrink-0 flex items-center justify-center cursor-pointer select-none"
                      title={brand.name}
                    >
                      <img
                        src={brand.logoUrl}
                        alt={brand.name}
                        className="h-6 sm:h-8 md:h-10 w-auto max-w-[115px] sm:max-w-[155px] md:max-w-[175px] object-contain opacity-85 hover:opacity-100 transition-opacity duration-200 select-none pointer-events-none"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CARD-BEHIND-CARD ARCHITECTURE */}
          <div className="lg:col-span-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full rounded-[36px] sm:rounded-[44px] overflow-hidden bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] shadow-[0_25px_70px_-15px_rgba(61,32,53,0.22)] border border-[#ebdce7]"
            >
              {/* Behind Card Header matching reference image layout & clean font */}
              <div className="px-6 sm:px-7 pt-4.5 sm:pt-5 pb-4 sm:pb-4.5 text-white select-none">
                <h2 className="text-xl sm:text-[22px] font-bold tracking-tight text-white leading-tight">
                  Share your details with us.
                </h2>
              </div>

              {/* Front White Form Card (Overlays on top with its own rounded-t border radius) */}
              <div className="w-full rounded-t-[28px] sm:rounded-t-[34px] bg-white p-5 sm:p-7 shadow-sm relative z-10">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-12 px-4 flex flex-col items-center justify-center text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h3 className="text-2xl font-display font-black text-neutral-900 tracking-tight mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-neutral-600 text-sm max-w-sm mb-6 leading-relaxed">
                        Thank you, <strong className="text-neutral-900">{name}</strong>. We've received your project requirements for <span className="font-semibold text-[#3d2035]">{projectModel}</span> and our production lead will reach out to <strong className="text-neutral-900">{email}</strong> shortly.
                      </p>
                      <button
                        onClick={resetForm}
                        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
                      >
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">

                      {/* 1. Your Name / Brand (matching home bottom form) */}
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

                      {/* 2. Phone / WhatsApp (matching home bottom form) */}
                      <div>
                        <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-1.5">
                          Phone / WhatsApp<span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210 or with country code"
                          className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-neutral-100/80 border border-neutral-200/80 text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-[#3d2035] focus:ring-2 focus:ring-[#3d2035]/10 outline-none transition-all font-medium"
                        />
                      </div>

                      {/* 3. Business Email (matching home bottom form) */}
                      <div>
                        <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-1.5">
                          Business Email<span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="hello@yourbrand.com"
                          className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-neutral-100/80 border border-neutral-200/80 text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-[#3d2035] focus:ring-2 focus:ring-[#3d2035]/10 outline-none transition-all font-medium"
                        />
                      </div>

                      {/* 4. Plan / Engagement Type: Per Project or Monthly (instead of platforms) */}
                      <div>
                        <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-2">
                          Engagement Type
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

                      {/* 5. Services Needed (Custom Multi-Select Dropdown based on Website Theme) */}
                      <div>
                        <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-1.5">
                          Services Needed <span className="text-neutral-400 font-normal">(select multiple)</span>
                        </label>
                        <div ref={dropdownRef} className="relative">
                          {/* Trigger Button */}
                          <button
                            type="button"
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-neutral-100/80 border text-sm text-neutral-900 transition-all font-medium cursor-pointer flex items-center justify-between text-left select-none ${
                              isDropdownOpen
                                ? 'bg-white border-[#3d2035] ring-2 ring-[#3d2035]/10 shadow-xs'
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

                          {/* Custom Dropdown Popover */}
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

                      {/* 6. Project Requirements / Details */}
                      <div>
                        <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-1.5">
                          Project Requirements / Details <span className="text-neutral-400 font-normal">(optional)</span>
                        </label>
                        <textarea
                          rows={3}
                          value={requirements}
                          onChange={(e) => setRequirements(e.target.value)}
                          placeholder="Tell us about your products, requirements, deliverables timeline..."
                          className="w-full px-4 py-3 rounded-xl bg-neutral-100/80 border border-neutral-200/80 text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-[#3d2035] focus:ring-2 focus:ring-[#3d2035]/10 outline-none transition-all font-medium resize-none"
                        />
                      </div>

                      {/* 8. Submit Button in Website Theme */}
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

        </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 2. FAQ SECTION SAME AS HOME PAGE (Final section before Footer)            */}
      {/* -------------------------------------------------------------------------- */}
      <div className="w-full">
        <FaqSection
          onBookCall={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onContactUs={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>

    </div>
  );
};
