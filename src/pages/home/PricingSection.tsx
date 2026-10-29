import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Crown,
  Film,
  Wand2,
  Layers,
  CheckCircle2,
  Zap,
  Infinity as InfinityIcon,
  TrendingUp,
  Shield,
  Star,
} from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan?: (planId: string) => void;
}

// ponytail: Left card in crisp white, Right card in rich website theme plum-noir (no heavy violet), matching website peach/rose/lavender/noir palette
export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section
      id="pricing"
      className="relative w-full bg-white py-20 sm:py-24 md:py-28 overflow-hidden"
    >
      {/* Website Theme Ambient Radial Glows (Warm peach, blush mauve & soft lavender) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] bg-gradient-to-r from-[#dcc6d5]/30 via-[#cfc1ee]/25 to-[#eda970]/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-gradient-to-l from-[#eda970]/20 to-[#dcc6d5]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#dcc6d5]/50 via-[#cfc1ee]/50 to-[#eda970]/40 border border-[#dcc6d5] text-[#3d2035] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#d97736]" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-normal text-neutral-900 uppercase leading-[1.15] max-w-4xl mx-auto">
            AFFORDABLE PLANS FOR<br className="hidden sm:block" /> VIRAL BRAND GROWTH
          </h2>
        </motion.div>

        {/* 2-Card Layout: Left (Crisp White Card) & Right (Rich Website Theme Noir Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Card 1 (Left): Crisp White Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-[32px] sm:rounded-[36px] bg-white border border-[#ebdce7] p-3 sm:p-3.5 flex flex-col justify-between shadow-[0_15px_40px_-15px_rgba(237,169,112,0.18)] hover:shadow-[0_20px_50px_-15px_rgba(237,169,112,0.25)] transition-all duration-300"
          >
            {/* Top Div: Header Box */}
            <div className="rounded-2xl sm:rounded-[24px] bg-[#faf6f8] p-5 sm:p-6 mb-3 border border-[#ebdce7]/70">
              {/* Row 1: Title & Right Pill Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#d97736]" />
                  <span className="font-display text-base sm:text-lg font-black uppercase text-neutral-900 tracking-wide">PER PROJECT</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] text-[#3d2035] text-[11px] sm:text-xs font-bold border border-white/80 shadow-2xs">
                  <Star className="w-3.5 h-3.5 fill-[#d97736] text-[#d97736]" />
                  <span>Single Sprint</span>
                </div>
              </div>

              {/* Row 2: Price & Period */}
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-4xl sm:text-[46px] font-black text-neutral-900 tracking-tight leading-none">₹999</span>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-500">/ project onward</span>
                </div>
                {/* Row 3: Tagline */}
                <p className="text-xs sm:text-[13px] text-neutral-600 font-medium mt-2">
                  Ideal for single video ads, Instagram reels & pilot campaigns.
                </p>
              </div>
            </div>

            {/* Middle Div: Features Box */}
            <div className="rounded-2xl sm:rounded-[24px] bg-[#faf6f8] p-4 sm:p-5 space-y-4 mb-3 border border-[#ebdce7]/70">
              {/* Feature 1 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white text-[#d97736] border border-[#ebdce7] flex items-center justify-center shrink-0 shadow-xs">
                  <Film className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-snug">1 High-Impact AI Video Ad</h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-tight mt-0.5">Cinematic 4K product reel tailored to your brand.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white text-[#d97736] border border-[#ebdce7] flex items-center justify-center shrink-0 shadow-xs">
                  <Wand2 className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-snug">Custom Script & AI Voiceover</h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-tight mt-0.5">Viral hook structure with studio-grade sound.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white text-[#d97736] border border-[#ebdce7] flex items-center justify-center shrink-0 shadow-xs">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-snug">Hyper-Realistic AI Model</h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-tight mt-0.5">Photorealistic digital actor showcasing your product.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white text-[#d97736] border border-[#ebdce7] flex items-center justify-center shrink-0 shadow-xs">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-snug">Fast 24–48 Hr Delivery</h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-tight mt-0.5">Ready-to-post 9:16 vertical & 16:9 widescreen format.</p>
                </div>
              </div>
            </div>

            {/* Bottom Div: Website Signature Gradient Pill Button */}
            <div>
              <button
                onClick={() => onSelectPlan?.('project')}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] hover:opacity-95 text-neutral-900 font-display text-xs sm:text-sm font-black tracking-wider uppercase transition-all active:scale-[0.98] shadow-sm cursor-pointer"
              >
                BOOK A PROJECT
              </button>
            </div>
          </motion.div>

          {/* Card 2 (Right): Fully Colored Theme Card (Warm Website Plum Noir Theme) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="rounded-[32px] sm:rounded-[36px] bg-gradient-to-br from-[#2f182a] via-[#3d2035] to-[#542947] text-white p-3 sm:p-3.5 flex flex-col justify-between shadow-[0_22px_55px_-12px_rgba(61,32,53,0.5)] hover:shadow-[0_26px_65px_-12px_rgba(61,32,53,0.6)] transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Div: Header Box (Translucent Frosted Inset) */}
            <div className="rounded-2xl sm:rounded-[24px] bg-white/12 backdrop-blur-md p-5 sm:p-6 mb-3 border border-white/15">
              {/* Row 1: Title & Right Pill Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-[#eda970] fill-[#eda970]" />
                  <span className="font-display text-base sm:text-lg font-black uppercase text-white tracking-wide">MONTHLY RETAINER</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eda970]/25 backdrop-blur-md text-[#eda970] text-[11px] sm:text-xs font-bold border border-[#eda970]/40 shadow-xs">
                  <Crown className="w-3.5 h-3.5 fill-[#eda970] text-[#eda970]" />
                  <span>Popular</span>
                </div>
              </div>

              {/* Row 2: Price & Period */}
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-4xl sm:text-[46px] font-black text-white tracking-tight leading-none">₹4,999</span>
                  <span className="text-xs sm:text-sm font-semibold text-white/80">/ month onward</span>
                </div>
                {/* Row 3: Tagline */}
                <p className="text-xs sm:text-[13px] text-white/90 font-medium mt-2">
                  Consistent viral flow & dedicated AI creative production every month.
                </p>
              </div>
            </div>

            {/* Middle Div: Features Box (Translucent Frosted Inset) */}
            <div className="rounded-2xl sm:rounded-[24px] bg-white/8 backdrop-blur-md p-4 sm:p-5 space-y-4 mb-3 border border-white/10">
              {/* Feature 1 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/15 text-[#eda970] flex items-center justify-center shrink-0 shadow-xs">
                  <Zap className="w-4 h-4 fill-[#eda970]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-bold text-white leading-snug">6–8 Viral Video Reels / Mo</h4>
                  <p className="text-[11px] text-white/80 font-normal leading-tight mt-0.5">Continuous stream of fresh, trend-aligned creative assets.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/15 text-[#eda970] flex items-center justify-center shrink-0 shadow-xs">
                  <InfinityIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-bold text-white leading-snug">Scriptwriting & Hook Research</h4>
                  <p className="text-[11px] text-white/80 font-normal leading-tight mt-0.5">Creative storyboarding tailored to viral social algorithms.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/15 text-[#eda970] flex items-center justify-center shrink-0 shadow-xs">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-bold text-white leading-snug">Exclusive Brand AI Model</h4>
                  <p className="text-[11px] text-white/80 font-normal leading-tight mt-0.5">Consistent digital actor persona across all campaigns.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/15 text-[#eda970] flex items-center justify-center shrink-0 shadow-xs">
                  <Shield className="w-4 h-4 fill-[#eda970]/30" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-bold text-white leading-snug">Priority Turnaround & VIP Support</h4>
                  <p className="text-[11px] text-white/80 font-normal leading-tight mt-0.5">Fast delivery with direct WhatsApp & dedicated manager support.</p>
                </div>
              </div>
            </div>

            {/* Bottom Div: Pure Solid White Pill Button with Noir Text */}
            <div>
              <button
                onClick={() => onSelectPlan?.('subscription')}
                className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-neutral-100 text-[#3d2035] font-display text-xs sm:text-sm font-black tracking-wider uppercase transition-all active:scale-[0.98] shadow-md cursor-pointer"
              >
                START SUBSCRIPTION
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
