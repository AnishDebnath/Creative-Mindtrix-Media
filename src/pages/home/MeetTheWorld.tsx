import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Eye, ChevronRight } from 'lucide-react';
import { SectionTag } from '@/components/ui/SectionTag';
import { IMAGES } from '@/data/images';
import { Profile } from '@/types';

// ponytail: 15th image from jewellery category & 12th image from perfume category
const jewelryImage = IMAGES['jewelry-pendant-hand-pose']?.src;
const perfumeImage = IMAGES['perfume-flatlay-botanical']?.src;

interface MeetTheWorldSectionProps {
  onSelectProfile?: (profile: Profile) => void;
  onSendReaction?: (emoji: string, profile: Profile) => void;
  onDiscoverMore?: () => void;
  onNavigateToImages?: () => void;
  onNavigateToReels?: () => void;
}

export const MeetTheWorldSection: React.FC<MeetTheWorldSectionProps> = ({
  onNavigateToImages,
  onDiscoverMore,
  onNavigateToReels,
}) => {
  const handleCtaClick = () => {
    if (onNavigateToImages) {
      onNavigateToImages();
    } else if (onDiscoverMore) {
      onDiscoverMore();
    } else if (onNavigateToReels) {
      onNavigateToReels();
    }
  };

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Distinct Ambient Background Strip (Previous Signature Theme) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#dcc6d5]/60 via-[#ebdce7]/50 via-[#cfc1ee]/40 to-[#eda970]/50 border-y border-white/80 pointer-events-none" />

      {/* Subtle Ambient Decorative Glow Orbs */}
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-[#eda970]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-[#3d2035]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT: Two Large Rounded Cards in 3:4 Aspect Ratio with Floating Pill Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex items-center justify-center w-full"
          >
            <div className="relative flex items-center gap-4 sm:gap-5 md:gap-6 w-full max-w-[620px] pt-4 pb-4">
              
              {/* Card 1 (Left): Aspect 3:4 with Top-Left Heart Badge & Seam-Bridging Chat Badge */}
              <div className="relative w-1/2 -translate-y-5 sm:-translate-y-7 md:-translate-y-9">
                {/* Top-Left Floating Badge: ❤️ 12M (Sleek Obsidian Glass Sticker - Differentiated from SectionTag) */}
                <div className="absolute -top-3.5 -left-2.5 sm:-top-4 sm:-left-3.5 md:-left-4 z-30 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#18181b]/95 backdrop-blur-md text-white font-sans text-xs sm:text-[13px] font-bold tracking-tight shadow-[0_12px_28px_-6px_rgba(0,0,0,0.5)] border border-white/20 flex items-center gap-1.5 select-none -rotate-12 hover:rotate-0 hover:scale-105 transition-all duration-300">
                  <Heart className="w-3.5 h-3.5 fill-[#ff3b5c] text-[#ff3b5c]" />
                  <span>12M</span>
                </div>

                {/* 3:4 Ratio Card Container */}
                <div
                  onClick={handleCtaClick}
                  className="group relative aspect-[3/4] w-full rounded-[26px] sm:rounded-[34px] md:rounded-[40px] overflow-hidden bg-neutral-900 shadow-[0_20px_50px_-15px_rgba(47,24,42,0.22)] border border-white/60 cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300"
                >
                  <img
                    src={jewelryImage}
                    alt="Luxury Jewellery Photography"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Right Edge Seam-Bridging Floating Badge: 💬 82+ (Crisp White Glass Sticker - Differentiated from SectionTag) */}
                <div className="absolute top-[62%] -right-3 sm:-right-4.5 md:-right-5 z-30 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md text-neutral-900 font-sans text-xs sm:text-[13px] font-bold tracking-tight shadow-[0_12px_24px_-4px_rgba(47,24,42,0.16)] border border-neutral-200/80 flex items-center gap-1.5 select-none rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300">
                  <MessageCircle className="w-3.5 h-3.5 fill-[#3b82f6] text-[#3b82f6]" />
                  <span>82+</span>
                </div>
              </div>

              {/* Card 2 (Right): Aspect 3:4 with Top-Right Eye Badge */}
              <div className="relative w-1/2 translate-y-5 sm:translate-y-7 md:translate-y-9">
                {/* Top-Right Floating Badge: 👁️ 18.8M (Crisp White Glass Sticker - Differentiated from SectionTag) */}
                <div className="absolute -top-3.5 -right-2.5 sm:-top-4 sm:-right-3.5 md:-right-4 z-30 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md text-neutral-900 font-sans text-xs sm:text-[13px] font-bold tracking-tight shadow-[0_12px_24px_-4px_rgba(47,24,42,0.16)] border border-neutral-200/80 flex items-center gap-1.5 select-none rotate-12 hover:rotate-0 hover:scale-105 transition-all duration-300">
                  <Eye className="w-3.5 h-3.5 text-[#f97316] stroke-[2.5]" />
                  <span>18.8M</span>
                </div>

                {/* 3:4 Ratio Card Container */}
                <div
                  onClick={handleCtaClick}
                  className="group relative aspect-[3/4] w-full rounded-[26px] sm:rounded-[34px] md:rounded-[40px] overflow-hidden bg-neutral-900 shadow-[0_20px_50px_-15px_rgba(47,24,42,0.22)] border border-white/60 cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300"
                >
                  <img
                    src={perfumeImage}
                    alt="Botanical Perfume Flat Lay"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT: Typography, Description, and CTA Button Styled with Website Theme */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-5 flex flex-col items-start justify-center text-left"
          >
            {/* Website Theme SectionTag */}
            <SectionTag label="Our Mission" className="mb-4 sm:mb-5" />

            {/* Well-proportioned Headline - Signature Section Header Design */}
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-black tracking-normal text-neutral-900 uppercase leading-tight md:leading-[1.06] mb-4 sm:mb-5">
              <span>WE MAKE REAL</span>
              <br />
              <span className="inline-flex items-center flex-wrap gap-x-2.5 sm:gap-x-3.5 mt-1 sm:mt-1.5">
                {/* Highlight Pill Container for PEOPLE - Styled in Website Theme */}
                <span className="inline-block relative">
                  <span className="relative z-10 px-4 sm:px-6 py-0.5 sm:py-1 rounded-[18px] sm:rounded-[24px] bg-gradient-to-r from-[#faede5] via-[#f7edf5] to-[#eae3fb] shadow-sm inline-block transform -rotate-1 border border-[#ebdce7]">
                    <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
                      PEOPLE
                    </span>
                  </span>
                </span>
                <span>YOUR BEST</span>
              </span>
              <br />
              <span>MARKETING ASSET.</span>
            </h2>

            {/* Well-proportioned Description - comfortable readability */}
            <p className="text-neutral-700 text-sm md:text-base lg:text-[17px] leading-relaxed font-normal max-w-lg mb-7 sm:mb-8">
              UGC grounded in performance data. We find the right creators and craft content that earns attention and converts into revenue.
            </p>

            {/* CTA Button matching website sections style */}
            <button
              onClick={handleCtaClick}
              className="group inline-flex items-center gap-2 px-6 sm:px-7 md:px-8 py-3 bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] hover:opacity-95 text-white font-display text-xs sm:text-sm md:text-base font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-md shadow-[#3d2035]/25 border border-white/15 cursor-pointer whitespace-nowrap"
            >
              <span>See How We Do It</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#eda970]" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
