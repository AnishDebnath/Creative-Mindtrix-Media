import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UWE_PROFILE } from '@/data/mock';
import { Profile } from '@/types';

import uweSangerTealImg from '@/assets/img/uwe_sanger_teal_1790985575257.jpg';
import logoImg from '@/assets/Mindtrix-Media-Logo.jpeg';

interface BottomShowcaseSectionProps {
  onSelectProfile?: (profile: Profile) => void;
  onSendReaction?: (emoji: string, profile: Profile) => void;
  onNavigateToImages?: () => void;
}

export const BottomShowcaseSection: React.FC<BottomShowcaseSectionProps> = ({
  onSendReaction,
  onNavigateToImages
}) => {
  const [fireClicked, setFireClicked] = useState(false);

  return (
    <section className="relative w-full py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Giant Typography Watermark: MINDTRIX */}
      <div className="absolute inset-0 flex items-start justify-center select-none pointer-events-none z-0">
        <svg
          viewBox="0 0 1600 360"
          className="w-full h-[40%] sm:h-[60%] object-fill opacity-80"
          preserveAspectRatio="none"
        >
          <text
            x="50%"
            y="52%"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#f1f3f5"
            fontFamily="'Anton', 'Oswald', 'Impact', sans-serif"
            fontWeight="500"
            fontSize="330"
            letterSpacing="10"
          >
            MINDTRIX
          </text>
        </svg>
      </div>

      {/* Center Interactive Showcase Composition */}
      <div className="relative max-w-5xl mx-auto z-10 flex items-center justify-center min-h-[460px]">

        {/* Relative Anchor Frame */}
        <div className="relative flex items-center justify-center">

          {/* 1. Top-Left Floating Chat Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute -top-2 sm:-top-4 -left-40 sm:-left-56 md:-left-72 lg:-left-80 z-20 bg-gradient-to-br from-[#2f182a] via-[#3d2035] to-[#542947] text-white px-5 sm:px-6 py-2.5 rounded-full shadow-[0_16px_36px_-6px_rgba(61,32,53,0.4)] border border-white/20 text-sm sm:text-[15px] font-semibold whitespace-nowrap transform -rotate-[7deg] hover:rotate-0 transition-transform duration-300"
          >
            Create better product ads with AI 🚀
          </motion.div>

          {/* 2. Center Profile Card: Uwe Sanger (Tilted +5deg) */}
          <motion.div
            onClick={onNavigateToImages}
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-[300px] sm:w-[350px] md:w-[370px] aspect-square bg-white rounded-[40px] sm:rounded-[46px] p-1.5 sm:p-2 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.22)] border border-white cursor-pointer transform rotate-[5deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300 group"
          >
            {/* Inner Photo Container */}
            <div className="relative w-full h-full rounded-[32px] sm:rounded-[38px] overflow-hidden bg-neutral-900 shadow-inner">
              <img
                src={uweSangerTealImg}
                alt="Mindtrix Systems Lead"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Top-Right Online Badge */}
              <div className="absolute top-3.5 right-3.5 z-20 px-2.5 py-0.5 bg-white/95 backdrop-blur-md text-neutral-900 text-[10px] sm:text-[11px] font-bold rounded-full shadow-sm flex items-center gap-1.5 border border-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                <span>AI Systems Online</span>
              </div>

              {/* Bottom Scrim & Name Label */}
              <div className="absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 bg-gradient-to-t from-[#2f182a]/95 via-[#3d2035]/50 to-transparent flex items-end">
                <div className="flex items-center gap-2 text-white font-display text-base sm:text-lg font-black uppercase tracking-wider drop-shadow-md">
                  <span className="text-lg sm:text-xl">🇨🇦</span>
                  <span>MINDTRIX MEDIA LEAD</span>
                </div>
              </div>
            </div>

            {/* Floating Fire Reaction Circle Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFireClicked(true);
                onSendReaction?.('🔥', { ...UWE_PROFILE, avatar: uweSangerTealImg });
                setTimeout(() => setFireClicked(false), 700);
              }}
              className={`absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 z-30 w-14 sm:w-18 h-14 sm:h-18 bg-white rounded-full shadow-[0_12px_28px_-5px_rgba(0,0,0,0.22)] border-[2.5px] border-white flex items-center justify-center text-3xl sm:text-4xl transition-transform active:scale-95 cursor-pointer ${fireClicked ? 'scale-125' : 'hover:scale-110'
                }`}
              title="Launch Campaign"
            >
              🔥
            </button>
          </motion.div>

          {/* 3. Top-Right Floating Chat Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="absolute -top-2 sm:-top-4 -right-40 sm:-right-56 md:-right-72 lg:-right-80 z-20 bg-white px-5 sm:px-6 py-2.5 rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-white text-neutral-800 text-sm sm:text-[15px] font-semibold whitespace-nowrap transform rotate-[7deg] hover:rotate-0 transition-transform duration-300"
          >
            Ready for your next campaign? ✨
          </motion.div>

          {/* 4. Right Floating Round Avatar with Attached Online Green Dot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 25 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute top-36 sm:top-40 -right-20 sm:-right-32 md:-right-40 lg:-right-48 z-20 flex items-center"
          >
            {/* Green Dot pinned on the left */}
            <span className="w-3.5 h-3.5 rounded-full bg-[#22c55e] ring-2 ring-white shadow-sm z-30 -mr-2" />

            {/* Round Avatar */}
            <div className="w-18 sm:w-22 h-18 sm:h-22 rounded-full ring-3 ring-white shadow-xl overflow-hidden bg-white flex items-center justify-center">
              <img
                src={logoImg}
                alt="Mindtrix Media"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
