import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface CtaSectionProps {
  onJoinWaitlist?: () => void;
  onSubscribe?: (email: string) => void;
  onScrollToAbout?: () => void;
  onNavigateToImages?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onSubscribe,
  onScrollToAbout
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    onSubscribe?.(email.trim());
    setIsSuccess(true);
    setName('');
    setPhone('');
    setEmail('');
    setTimeout(() => setIsSuccess(false), 6000);
  };

  return (
    <section
      className="relative w-full pt-16 pb-28 overflow-visible"
      style={{
        backgroundImage:
          'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.7) 55%, rgba(255,255,255,0) 100%)',
        backgroundSize: '100% 320px',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* 1. Top Sub-Bar Row */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full pb-6"
      >
        {/* Left: Domain Indicator */}
        <button
          onClick={onScrollToAbout}
          className="text-xs sm:text-sm font-bold text-neutral-900 hover:text-black transition-colors cursor-pointer shrink-0"
        >
          About Services
        </button>

        {/* Center: Headline */}
        <h3 className="font-display text-lg sm:text-2xl md:text-[26px] lg:text-[28px] font-black tracking-normal text-neutral-900 uppercase text-center px-4">
          AI PRODUCT ADVERTISING MADE TO GROW YOUR BUSINESS
        </h3>

        {/* Right: GET STARTED Pill Button */}
        <button
          onClick={() => {
            const input = document.getElementById('cta-email-input');
            input?.focus();
          }}
          className="px-5 sm:px-6 py-2 bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] hover:opacity-95 text-neutral-900 font-display text-[11px] sm:text-xs font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-sm cursor-pointer whitespace-nowrap shrink-0"
        >
          GET STARTED
        </button>
      </motion.div>

      {/* Full-Width Segmented Horizontal Line */}
      <div className="w-full flex items-center justify-between gap-3 sm:gap-4 mb-20 sm:mb-24 px-2 sm:px-4">
        <div className="flex-1 h-[1.5px] bg-[#dcc6d5]/70" />
        <div className="flex-1 h-[1.5px] bg-[#dcc6d5]/70" />
        <div className="flex-1 h-[1.5px] bg-[#dcc6d5]/70" />
        <div className="flex-1 h-[1.5px] bg-[#dcc6d5]/70" />
        <div className="flex-1 h-[1.5px] bg-[#dcc6d5]/70" />
        <div className="flex-1 h-[1.5px] bg-[#dcc6d5]/70" />
      </div>

      {/* 2. Main Center CTA Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          {/* Massive 2-Line Stacked Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[88px] font-black tracking-normal text-neutral-900 uppercase leading-[1.3] mb-12 sm:mb-16"
          >
            SCALE YOUR BRAND<br />WITH AI CREATIVES.
          </motion.h2>

          {/* Master Tilted Capsule with 3 Separated Fields inside */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="w-full max-w-3xl relative"
          >
            
            {/* Outer Frosted Glass Aura Ring with Exact Tilt Angle (-3.5deg) */}
            <div className="bg-white/45 backdrop-blur-xl rounded-[36px] sm:rounded-full p-2.5 sm:p-3 shadow-[0_20px_50px_-10px_rgba(143,115,204,0.15)] border border-white/80 transform -rotate-[3.5deg] hover:rotate-0 transition-all duration-300">
              
              {/* Inner White Capsule Container */}
              <div className="flex flex-col sm:flex-row items-center bg-white rounded-[30px] sm:rounded-full p-2 sm:p-1.5 shadow-sm divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/80">
                
                {/* Field 1: Name */}
                <div className="w-full sm:w-[28%] px-4 py-2 sm:py-2.5 flex items-center">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name / Brand"
                    className="w-full text-xs sm:text-sm text-neutral-900 bg-transparent placeholder-neutral-400 font-medium focus:outline-none"
                  />
                </div>

                {/* Field 2: Phone Number */}
                <div className="w-full sm:w-[32%] px-4 py-2 sm:py-2.5 flex items-center">
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone / WhatsApp"
                    className="w-full text-xs sm:text-sm text-neutral-900 bg-transparent placeholder-neutral-400 font-medium focus:outline-none"
                  />
                </div>

                {/* Field 3: Email Address + Action Button */}
                <div className="w-full sm:w-[40%] pl-4 pr-1 py-1 flex items-center justify-between gap-2">
                  <input
                    id="cta-email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Business Email"
                    className="w-full min-w-0 text-xs sm:text-sm text-neutral-900 bg-transparent placeholder-neutral-400 font-medium focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 sm:px-7 py-3 bg-gradient-to-r from-[#6566ee] to-[#8f73cc] hover:opacity-95 text-white font-display text-xs sm:text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-sm cursor-pointer shrink-0"
                  >
                    {isSuccess ? (
                      <span className="flex items-center gap-1.5 text-emerald-200">
                        <Check className="w-4 h-4" /> SENT
                      </span>
                    ) : (
                      'GET AI ADS'
                    )}
                  </button>
                </div>

              </div>

            </div>

            {isSuccess && (
              <p className="text-xs sm:text-sm font-bold text-emerald-700 mt-4 animate-in fade-in">
                🎉 Thank you! Our team will contact you shortly to discuss your product video and ad creative needs.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};
