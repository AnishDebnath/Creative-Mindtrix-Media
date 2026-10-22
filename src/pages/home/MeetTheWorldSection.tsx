import React from 'react';
import { motion } from 'framer-motion';
import { Profile } from '@/types';
import { HERO_PROFILES } from '@/data/mockData';

import { getCloudinaryImage } from '@/utils/cloudinary';

const skincareImg = getCloudinaryImage('facewash/Skincare_advertisement_on_stone.jpg');
const lipstickImg = getCloudinaryImage('lipstick/Lipstick_advertisement_on_marble.jpg');

interface MeetTheWorldSectionProps {
  onSelectProfile?: (profile: Profile) => void;
  onSendReaction?: (emoji: string, profile: Profile) => void;
  onDiscoverMore?: () => void;
  onNavigateToImages?: () => void;
}

export const MeetTheWorldSection: React.FC<MeetTheWorldSectionProps> = ({
  onSendReaction,
  onNavigateToImages
}) => {
  const simoneProfile = HERO_PROFILES[2]; // Simone Lange - Creative Director
  const emojis = ['🚀', '🔥', '📈', '✨', '💎'];

  return (
    <section className="relative w-full py-24 mb-6 overflow-hidden">
      {/* Distinct Ambient Background Strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#dcc6d5]/70 via-[#8f73cc]/35 via-[#6566ee]/25 to-[#eda970]/60 border-y border-white/80 pointer-events-none" />

      {/* Subtle Ambient Decorative Glow Orbs */}
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-[#eda970]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-[#6566ee]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Section Content Wrapper */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Description, Button */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-start justify-between min-h-[440px]"
          >
            <div>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-normal text-neutral-900 uppercase leading-[1.3] mb-8">
                GROW YOUR<br />BUSINESS WITH<br />AI ADS
              </h2>
            </div>

            <div className="max-w-md flex flex-col items-start gap-4 mt-auto">
              <p className="text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                Mindtrix Media develops software and AI systems that power high-converting product ads, viral reels, and studio-quality commercial production.
              </p>
              <button
                onClick={onNavigateToImages}
                className="px-7 py-3 bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] hover:opacity-95 text-neutral-900 font-display text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-sm cursor-pointer"
              >
                VIEW AI IMAGE GALLERY
              </button>
            </div>
          </motion.div>

          {/* Right Column: Visual Composition matching reference image */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[500px]">
            {/* Main Card with Surrounding Floating Overlays */}
            <div className="relative flex items-center justify-center">
              {/* 1. Top-Left Floating Reaction Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="absolute top-8 -left-10 sm:-left-14 md:-left-26 z-30 bg-white/95 backdrop-blur-md px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full shadow-[0_15px_35px_-5px_rgba(143,115,204,0.2)] border border-white flex items-center gap-1.5 sm:gap-2 transform -rotate-6 transition-transform duration-300 hover:rotate-0"
              >
                {emojis.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => onSendReaction?.(emoji, simoneProfile)}
                    className="text-sm sm:text-base hover:scale-130 transition-transform cursor-pointer"
                    title={emoji}
                  >
                    {emoji}
                  </button>
                ))}
              </motion.div>

              {/* 2. Small Card (Skincare on Stone) */}
              <motion.div
                onClick={onNavigateToImages}
                initial={{ opacity: 0, scale: 0.85, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="absolute bottom-8 sm:bottom-10 -left-18 sm:-left-26 md:-left-30 lg:-left-32 z-10 w-36 sm:w-42 bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.22)] border border-white transform -rotate-3 hover:rotate-0 transition-transform duration-300 cursor-pointer"
              >
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-1.5 bg-neutral-100">
                  <img
                    src={skincareImg}
                    alt="Skincare product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-bold text-neutral-600 px-1">
                  <span className="flex items-center gap-0.5">❤️ 19.8k</span>
                  <span className="flex items-center gap-0.5">🚀 4.2x ROAS</span>
                </div>
              </motion.div>

              {/* 3. Main Central Creative Card (z-20) */}
              <motion.div
                onClick={onNavigateToImages}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="relative z-20 w-[275px] sm:w-[315px] md:w-[330px] bg-white rounded-[32px] p-3 shadow-[0_25px_60px_-15px_rgba(143,115,204,0.25)] border border-white cursor-pointer transform hover:scale-[1.01] transition-transform duration-300"
              >
                {/* Photo Canvas */}
                <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-neutral-900 mb-2 relative group">
                  <img
                    src={lipstickImg}
                    alt="Lipstick product"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-gradient-to-r from-[#6566ee] to-[#8f73cc] rounded-full text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    AI Creative Ad
                  </div>
                </div>

                {/* Card Footer: Category & Title */}
                <div className="px-2 py-0.5 flex items-center justify-between text-neutral-900 font-display text-sm sm:text-base font-black uppercase tracking-wider">
                  <span>LUXURY COSMETICS AD</span>
                  <span className="text-xs bg-gradient-to-r from-[#f4effb] to-[#faedf5] text-[#8f73cc] px-2 py-0.5 rounded-full font-sans font-bold">4K Studio</span>
                </div>
              </motion.div>

              {/* 4. Floating Top-Right Speech Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="absolute top-16 sm:top-24 -right-14 sm:-right-20 md:-right-24 z-30 bg-white/95 backdrop-blur-md px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full shadow-[0_15px_35px_-5px_rgba(0,0,0,0.2)] border border-white text-neutral-900 text-xs sm:text-sm font-bold whitespace-nowrap flex items-center gap-1.5 transform -rotate-4 transition-transform duration-300 hover:rotate-0"
              >
                <span>Higher Conversion</span>
                <span>📈</span>
              </motion.div>

              {/* 5. Floating Bottom-Right Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="absolute bottom-28 sm:bottom-26 -right-10 sm:-right-16 md:-right-20 z-30 bg-white/95 backdrop-blur-md px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full shadow-[0_15px_35px_-5px_rgba(0,0,0,0.2)] border border-white text-neutral-900 text-xs sm:text-sm font-bold whitespace-nowrap flex items-center gap-1.5 transform -rotate-4 transition-transform duration-300 hover:rotate-0"
              >
                <span>Ready in 48 Hours</span>
                <span>⚡</span>
              </motion.div>

              {/* 6. Floating Bottom-Right Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-3 sm:-bottom-4 right-0 sm:-right-2 z-30 px-4 sm:px-5 py-1.5 bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] text-[#3d1e06] font-display text-sm sm:text-base font-bold rounded-full shadow-lg border border-white/80 transform -rotate-6"
              >
                AI Commercial
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
