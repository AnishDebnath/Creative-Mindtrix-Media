import React from 'react';
import { motion } from 'framer-motion';
import { HERO_PROFILES } from '@/data/mockData';
import { Play } from 'lucide-react';

import runwayImg from '@/assets/img/brunette_shirt_left_1790982842053.jpg';
import lipstickFriendsImg from '@/assets/img/community_wide_friends_1790982804862.jpg';
import tousledGuyImg from '@/assets/img/tousled_guy_sky_1790982870552.jpg';
import windblownWomanImg from '@/assets/img/windblown_hair_woman_1790982857578.jpg';
import pixieWomanImg from '@/assets/img/woman_bandana_pixie_1790982884567.jpg';
import sunlightManImg from '@/assets/img/community_man_sunlight_1790982822414.jpg';

interface CommunitySectionProps {
  onOpenVideoChat?: () => void;
  onMeetCommunity?: () => void;
  onNavigateToReels?: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  onNavigateToReels
}) => {
  const emojis = ['🚀', '❤️', '🔥', '📈', '✨'];

  return (
    <section id="reels" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-visible scroll-mt-6">
      <span id="community" className="sr-only" />
      {/* Top Header Row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12 sm:mb-16"
      >
        <div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-normal text-neutral-900 uppercase leading-[1.3]">
            THE MINDTRIX<br />AI REEL STAGE
          </h2>
        </div>

        <div className="max-w-md flex flex-col items-start gap-4">
          <p className="text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
            Scroll-stopping AI product video reels and UGC campaigns crafted for brands that demand fast growth and high conversion.
          </p>
          <button
            onClick={onNavigateToReels}
            className="px-7 py-3 bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] hover:opacity-95 text-neutral-900 font-display text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-sm cursor-pointer"
          >
            EXPLORE ALL REELS & VIDEOS
          </button>
        </div>
      </motion.div>

      {/* 3D Isometric Perspective Stage in 16:9 Ratio */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative w-full max-w-[940px] mx-auto py-12 sm:py-16 flex items-center justify-center [perspective:1600px] overflow-visible"
      >

        {/* Tilted 3D Stage */}
        <div
          className="relative w-full aspect-[16/9] transition-transform duration-500 ease-out"
          style={{
            transform: 'rotateX(22deg) rotateY(-16deg) rotateZ(6deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* 1. Rear Card: Same Size (16:9), shifted further up with 4-Color Gradient */}
          <div
            className="absolute inset-0 w-full h-full aspect-[16/9] bg-gradient-to-tr from-[#dcc6d5] via-[#8f73cc] via-[#6566ee] to-[#eda970] rounded-[36px] sm:rounded-[44px] shadow-[0_30px_70px_-10px_rgba(143,115,204,0.3)] border-[2.5px] border-white pointer-events-none overflow-hidden"
            style={{
              transform: 'translate3d(44px, -64px, -30px)'
            }}
          >
            {/* Bottom Fade */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/70 to-transparent rounded-b-[36px] sm:rounded-b-[44px]" />
          </div>

          {/* 2. Main Front Pure White Board in 16:9 Ratio */}
          <div className="relative w-full h-full aspect-[16/9] bg-white rounded-[36px] sm:rounded-[44px] p-3 sm:p-4 md:p-5 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.24)] border border-white flex flex-col justify-between">

            {/* Top-Right Floating Badge with 4-Color Gradient */}
            <div
              className="absolute -top-3.5 right-6 sm:right-12 z-30 px-4 sm:px-5 py-1 bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] text-[#3d1e06] font-display text-base sm:text-lg font-bold rounded-full shadow-md border border-white/90"
              style={{ transform: 'rotate(15deg)' }}
            >
              AI Product Reels
            </div>

            {/* Seamless 4-Column Balanced Grid */}
            <div className="grid grid-cols-12 gap-2.5 sm:gap-3.5 h-full w-full">

              {/* COLUMN 1: Full-Height 9:16 Vertical Portrait (Span 3) */}
              <div
                onClick={onNavigateToReels}
                className="col-span-3 h-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
              >
                <img
                  src={runwayImg}
                  alt="AI Video Reel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-900 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-neutral-900 ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 inset-x-2 text-[9px] font-bold text-white uppercase truncate drop-shadow">
                  Fashion UGC Reel
                </div>
              </div>

              {/* COLUMN 2 & 3: Center Grid with 4 Square 1:1 Images (Span 6) */}
              <div className="col-span-6 h-full flex flex-col justify-between gap-2.5 sm:gap-3.5 relative">

                {/* Top Center: 2 Side-by-Side 1:1 Square Cards */}
                <div className="flex items-center justify-between gap-2.5 sm:gap-3.5 flex-1 min-h-0">
                  {/* Top-Left Square Card */}
                  <div
                    onClick={onNavigateToReels}
                    className="w-1/2 h-full aspect-square rounded-[16px] sm:rounded-[20px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
                  >
                    <img
                      src={lipstickFriendsImg}
                      alt="Cosmetics Reel"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 z-20 px-2 py-0.5 bg-white/95 backdrop-blur-md rounded-full text-[9px] sm:text-[10px] font-bold text-neutral-900 flex items-center gap-1 shadow-sm border border-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                      <span>5.1x ROAS</span>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-900 shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-3.5 h-3.5 fill-neutral-900 ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Top-Right Square Card */}
                  <div
                    onClick={onNavigateToReels}
                    className="w-1/2 h-full aspect-square rounded-[16px] sm:rounded-[20px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
                  >
                    <img
                      src={tousledGuyImg}
                      alt="Men Cologne Ad"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-900 shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-3.5 h-3.5 fill-neutral-900 ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Larger Reaction Bar Centered on Seam */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                  <div className="pointer-events-auto bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_12px_30px_-5px_rgba(0,0,0,0.25)] border border-white flex items-center gap-2 sm:gap-2.5">
                    {emojis.map((emoji) => (
                      <span
                        key={emoji}
                        className="text-base sm:text-lg hover:scale-130 transition-transform cursor-pointer"
                      >
                        {emoji}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Center: 2 Side-by-Side 1:1 Square Cards */}
                <div className="flex items-center justify-between gap-2.5 sm:gap-3.5 flex-1 min-h-0">
                  {/* Bottom-Left Square Card */}
                  <div
                    onClick={onNavigateToReels}
                    className="w-1/2 h-full aspect-square rounded-[16px] sm:rounded-[20px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
                  >
                    <img
                      src={windblownWomanImg}
                      alt="Beauty Reel"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-900 shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-3.5 h-3.5 fill-neutral-900 ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom-Right Square Card */}
                  <div
                    onClick={onNavigateToReels}
                    className="w-1/2 h-full aspect-square rounded-[16px] sm:rounded-[20px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
                  >
                    <img
                      src={pixieWomanImg}
                      alt="Product Explainer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-900 shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-3.5 h-3.5 fill-neutral-900 ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* COLUMN 4: Full-Height 9:16 Vertical Portrait (Span 3) */}
              <div
                onClick={onNavigateToReels}
                className="col-span-3 h-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
              >
                <img
                  src={sunlightManImg}
                  alt="AI Commercial"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-900 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-neutral-900 ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 inset-x-2 text-[9px] font-bold text-white uppercase truncate drop-shadow">
                  Gold Flacon Film
                </div>
              </div>

            </div>

            {/* Bottom Fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18%] z-[35] bg-gradient-to-t from-white via-white/70 to-transparent rounded-b-[36px] sm:rounded-b-[44px]" />
          </div>

          {/* 3. Floating Video Chat Pill Bar */}
          <div
            className="absolute -bottom-8 sm:-bottom-12 left-4 sm:left-30 z-40"
            style={{ transform: 'translateZ(45px)' }}
          >
            <button
              onClick={onNavigateToReels}
              className="flex items-center gap-2.5 sm:gap-3 bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] hover:opacity-95 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_20px_40px_-5px_rgba(143,115,204,0.35)] border border-white/90 transition-all active:scale-95 cursor-pointer"
            >
              {/* Overlapping Mini Avatars */}
              <div className="flex items-center -space-x-2">
                {HERO_PROFILES.slice(0, 5).map((prof) => (
                  <div
                    key={prof.id}
                    className="w-6 sm:w-7 h-6 sm:h-7 rounded-full ring-2 ring-white overflow-hidden shadow-sm bg-neutral-200"
                  >
                    <img
                      src={prof.avatar}
                      alt={prof.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Action Text */}
              <span className="font-display text-xs sm:text-[13px] font-black tracking-wider text-neutral-900 uppercase pr-1">
                VIEW REEL PORTFOLIO
              </span>
            </button>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
