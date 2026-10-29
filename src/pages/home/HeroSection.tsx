import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Home, Zap } from 'lucide-react';
import { MARQUEE_PRODUCTS, PHONE_FRIEND_CARD } from '@/data/mockData';
import { Profile } from '@/types';

import avatarHipsterBeardImg from '@/assets/img/avatar_hipster_beard_1790979384816.jpg';
import avatarGreenCapImg from '@/assets/img/avatar_green_cap_1790979403136.jpg';
import logoImg from '@/assets/Mindtrix-Media-Logo.jpeg';
import { getCloudinaryImage, getCloudinaryVideo } from '@/utils/cloudinary';
import { BrandsSection } from './BrandsSection';

const womenPerfumeImg = getCloudinaryImage('women-perfume/Perfume_bottle_flat-lay_photograph.jpg');
const heroReelVideo = getCloudinaryVideo('women-perfume.mp4', { optimize: true, quality: 'good', width: 720 });

interface HeroSectionProps {
  onSelectProfile?: (profile: Profile) => void;
  onSendReaction?: (emoji: string, profile: Profile) => void;
  onOpenVideoChat?: () => void;
  onNavigateToImages?: () => void;
  onNavigateToReels?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateToImages,
  onNavigateToReels
}) => {
  // ponytail: duplicate array twice for seamless 100% infinite CSS marquee without decoder overload
  const marqueeProducts = useMemo(() => {
    return [...MARQUEE_PRODUCTS, ...MARQUEE_PRODUCTS];
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full pt-1 sm:pt-3 pb-8 sm:pb-12 md:pb-14 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 55%, #ffffff 100%),
          linear-gradient(180deg, #ebdce7 0%, #faede5 18%, #eae3fb 38%, #e5e1fc 62%, #f8f6fd 82%, #ffffff 100%)
        `,
        backgroundSize: '100% 320px, 100% 100%',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'bottom, top',
      }}
    >
      {/* Top Banner Section: Centered "MINDTRIX" Background Text with Staggered 3:4 Cards */}
      <motion.div
        id="images-preview"
        onClick={onNavigateToImages}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative w-full overflow-hidden py-2 sm:py-3 my-0 flex items-center justify-center cursor-pointer"
        title="Click to explore AI Images & Reels"
      >
        {/* Giant Typography Background: MINDTRIX watermark */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-35">
          <svg
            viewBox="0 0 1550 320"
            className="w-full h-full object-fill scale-y-110"
            preserveAspectRatio="none"
          >
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              fill="#111111"
              fontFamily="'Anton', 'Oswald', 'Impact', sans-serif"
              fontWeight="900"
              fontSize="340"
              letterSpacing="10"
            >
              MINDTRIX
            </text>
          </svg>
        </div>

        {/* Edge-to-Edge Marquee Track with 3:4 Ratio & Enhanced Upper/Lower Staggering */}
        <div className="relative z-10 w-full overflow-hidden flex items-center py-4 sm:py-6">
          <div className="animate-marquee flex gap-3 sm:gap-4 md:gap-5 py-4 sm:py-6 items-center">
            {marqueeProducts.map((product, index) => {
              // Alternating upper/bottom placement with clear difference:
              // Even cards shift down, odd cards shift up
              const isEven = index % 2 === 0;
              const isVideo = product.type === 'video' || Boolean(product.videoSrc);

              return (
                <div
                  key={`${product.id}-${index}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isVideo) {
                      onNavigateToReels?.();
                    } else {
                      onNavigateToImages?.();
                    }
                  }}
                  title={isVideo ? `Watch ${product.label} reel` : `View ${product.label} image`}
                  className={`group relative shrink-0 transition-transform duration-300 hover:scale-[1.03] cursor-pointer ${isEven
                    ? 'w-[145px] sm:w-[185px] md:w-[210px] aspect-[3/4] rounded-[24px] sm:rounded-[32px] translate-y-5 sm:translate-y-7'
                    : 'w-[145px] sm:w-[185px] md:w-[210px] aspect-[3/4] rounded-[24px] sm:rounded-[32px] -translate-y-5 sm:-translate-y-7'
                    }`}
                >
                  {/* ponytail: clean cards with zero overlays for both videos and images */}
                  <div className="relative w-full h-full rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-md group-hover:shadow-xl bg-neutral-900 border border-white/60 transition-shadow">
                    {isVideo ? (
                      <video
                        src={product.videoSrc}
                        poster={product.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <img
                        src={product.src}
                        alt={product.label}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Main Showcase Section */}
      <div className="relative w-full overflow-hidden pt-8 sm:pt-12 pb-20">
        {/* Section Headline (H1 for Main Service Page) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black tracking-normal text-[#111111] uppercase leading-[1.3]">
            AI PRODUCT ADS. VIRAL REELS. E-COMMERCE VISUALS.
          </h1>
        </motion.div>


        {/* Edge-to-Edge Visual Composition Area */}
        <div className="relative w-full min-h-[600px] sm:min-h-[680px] lg:min-h-[740px] flex items-center justify-center">
          {/* Background Typography "CREATIVE" Anchored at the Bottom Side */}
          {/* ponytail: keep text 90-95% legible throughout with a gentle 15% feather blend at the base */}
          <div
            className="absolute inset-x-0 bottom-0 z-0 flex items-end justify-center pointer-events-none select-none overflow-hidden h-[300px] sm:h-[360px] md:h-[400px] lg:h-[440px]"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 78%, rgba(0,0,0,0.7) 88%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 78%, rgba(0,0,0,0.7) 88%, rgba(0,0,0,0) 100%)',
            }}
          >
            <svg
              viewBox="0 0 1600 380"
              className="w-full h-full object-fill"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="creativeTextGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="65%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="82%" stopColor="#fafafa" stopOpacity="0.8" />
                  <stop offset="94%" stopColor="#f5f5f5" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#f5f5f5" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="89%"
                textAnchor="middle"
                fill="url(#creativeTextGradient)"
                fontFamily="'Anton', 'Oswald', 'Impact', sans-serif"
                fontWeight="500"
                fontSize="380"
                letterSpacing="6"
              >
                CREATIVE
              </text>
            </svg>
          </div>

          {/* Centerpiece Container with Slim iPhone & Floating Accents */}
          <div className="relative z-10 flex items-center justify-center w-full max-w-[1240px] px-4">
            {/* Relative Frame */}
            <div className="relative flex items-center justify-center">
              {/* 1. Top-Left Floating 5-Star Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="absolute top-16 sm:top-35 -left-10 sm:-left-16 md:-left-20 z-30 bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] px-3.5 sm:px-4 py-1.5 rounded-full shadow-[0_12px_30px_-5px_rgba(143,115,204,0.35)] border border-white/90 flex items-center gap-1 text-[#3d2035] transform -rotate-8 transition-transform duration-300 hover:rotate-0"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-[#3d2035] text-[#3d2035]" />
                ))}
              </motion.div>

              {/* 2. Bottom-Left Floating Profile Card with AI-Powered Badge */}
              {/* ponytail: proportional border radius (16px outer, 8px inner) to avoid over-rounded ballooning */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="absolute bottom-5 sm:bottom-6 -left-24 sm:-left-36 md:-left-44 lg:-left-48 z-20 w-32 sm:w-38 md:w-42 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.25)] border border-white transform -rotate-6 hover:rotate-0 transition-transform duration-300"
              >
                {/* AI-Powered Badge */}
                <div className="absolute -top-2 -left-5 z-30 px-2.5 sm:px-3 py-1 bg-gradient-to-r from-[#eda970] via-[#dcc6d5] to-[#cfc1ee] text-[#3d1e06] font-display text-[10px] sm:text-[11px] font-bold rounded-full shadow-lg border border-white/80 whitespace-nowrap transition-all transform rotate-[-20deg] hover:rotate-0 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#3d2035]" /> AI Ads
                </div>
                {/* Photo */}
                <div className="aspect-square rounded-lg overflow-hidden mb-1.5 bg-neutral-100">
                  <img
                    src={womenPerfumeImg}
                    alt="Women's perfume"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Stats Bar */}
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-bold text-neutral-600 px-1">
                  <span className="flex items-center gap-0.5">❤️ {PHONE_FRIEND_CARD.likes}</span>
                  <span className="flex items-center gap-0.5">💬 {PHONE_FRIEND_CARD.comments}</span>
                  <span className="flex items-center gap-0.5">🚀 {PHONE_FRIEND_CARD.shares}</span>
                </div>
              </motion.div>

              {/* 3. Center Slim Clean iPhone Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="relative z-25 w-[285px] sm:w-[305px] md:w-[320px] rounded-[48px] bg-black p-[5px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.15)] border-[4px] border-[#18181a]"
              >
                {/* Inner Screen Canvas */}
                <div className="relative rounded-[42px] overflow-hidden bg-gradient-to-b from-[#ebdce7] via-[#eae3fb] via-[#e5e1fc] to-[#faede5] text-neutral-900 flex flex-col h-[595px] sm:h-[630px] shadow-inner justify-between p-3.5">

                  {/* ZONE 1: TOP PART */}
                  <div className="flex flex-col gap-2.5 z-20 w-full">
                    {/* Status Bar */}
                    <div className="w-[92%] max-w-[250px] mx-auto flex items-center justify-between text-[11px] font-bold text-neutral-800">
                      <span>9:41</span>

                      {/* Dynamic Island Notch */}
                      <div className="w-[86px] h-[23px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-sm">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#111116] border border-neutral-800 flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-[#0a0a14]" />
                        </div>
                        <div className="w-2 h-2 rounded-full bg-[#0d0d18] border border-neutral-800" />
                      </div>

                      <div className="flex items-center gap-1.5 text-xs">
                        <span>📶</span>
                        <div className="w-4.5 h-2.5 border border-neutral-800 rounded-sm p-0.5 flex items-center">
                          <div className="h-full w-full bg-neutral-900 rounded-[1px]" />
                        </div>
                      </div>
                    </div>

                    {/* Header Pill */}
                    <div className="w-[92%] max-w-[250px] mx-auto flex items-center justify-between gap-2 pt-0.5">
                      <div className="flex items-center gap-2 bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/60 shadow-sm flex-1 min-w-0">
                        <img
                          src={logoImg}
                          alt="Mindtrix"
                          className="w-6 h-6 rounded-full object-cover shrink-0 shadow-xs border border-white/60"
                        />
                        <div className="truncate">
                          <div className="text-[11px] font-bold leading-none text-neutral-900 truncate">Mindtrix Media Creative</div>
                          <div className="text-[9px] text-neutral-600 leading-none mt-0.5 flex items-center gap-0.5 font-medium truncate">
                            <Zap className="w-2.5 h-2.5 text-[#3d2035] shrink-0" /> AI Product Ads
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={onNavigateToReels}
                        className="px-2.5 py-1 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-[10px] font-bold border border-white/60 text-neutral-900 shadow-sm shrink-0"
                      >
                        Reels
                      </button>
                    </div>
                  </div>

                  {/* ZONE 2: CENTER VIDEO PART (CLEAN WITH NO OVERLAYS) */}
                  <div className="flex items-center justify-center my-auto py-1 z-10 w-full">
                    <div
                      onClick={onNavigateToReels}
                      className="relative w-[92%] max-w-[250px] aspect-[9/16] rounded-[24px] overflow-hidden shadow-xl border-[1.5px] border-white/90 bg-black cursor-pointer group"
                    >
                      <video
                        src={heroReelVideo}
                        poster={womenPerfumeImg}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* ZONE 3: BOTTOM PART */}
                  <div className="flex flex-col items-center gap-2.5 z-20 pb-0.5 w-full">
                    <div className="py-1.5 px-3.5 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-between border border-white/60 text-neutral-700 shadow-sm w-[90%] max-w-[220px]">
                      <div className="flex items-center gap-1.5 text-white font-bold text-[11px] bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] px-3.5 py-1 rounded-full shadow-xs border border-white/15">
                        <Home className="w-3.5 h-3.5" />
                        <span>Home</span>
                      </div>
                      <button onClick={onNavigateToImages} className="text-neutral-600 hover:text-neutral-900 text-[11px] font-bold px-1.5 transition-colors">Images</button>
                      <button onClick={onNavigateToReels} className="text-neutral-600 hover:text-neutral-900 text-[11px] font-bold px-1.5 transition-colors">Reels</button>
                    </div>

                    <div className="flex justify-center pt-0.5">
                      <div className="w-24 h-1 bg-neutral-900/90 rounded-full" />
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* 4. Top-Right Floating Chat Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: 25 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute top-20 sm:top-40 -right-20 sm:-right-32 md:-right-36 lg:-right-38 z-30 bg-gradient-to-br from-[#2f182a] via-[#3d2035] to-[#542947] rounded-2xl sm:rounded-3xl py-2 px-3.5 shadow-[0_18px_40px_-10px_rgba(61,32,53,0.45)] border border-white/20 w-44 sm:w-52 flex items-center gap-2.5 transform rotate-[5deg] hover:rotate-0 transition-transform duration-300 text-white"
              >
                <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full overflow-hidden bg-neutral-200 shrink-0 border border-white/25 shadow-sm">
                  <img
                    src={avatarHipsterBeardImg}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-white">3.8x Higher ROAS</div>
                  <div className="text-[9px] text-[#eda970] font-medium">Delivered in 48 hours</div>
                </div>
              </motion.div>

              {/* 5. Bottom-Right Floating Chat Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: 25 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.25 }}
                className="absolute bottom-16 sm:bottom-28 -right-16 sm:-right-26 md:-right-30 lg:-right-34 z-30 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl py-2 px-3.5 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.25)] border border-white w-44 sm:w-52 flex items-center gap-2.5 transform -rotate-[5deg] hover:rotate-0 transition-transform duration-300"
              >
                <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full overflow-hidden bg-neutral-200 shrink-0 border border-neutral-100 shadow-sm">
                  <img
                    src={avatarGreenCapImg}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-neutral-900">100% AI Generated</div>
                  <div className="text-[9px] text-neutral-500 font-medium">Ready for Meta & Instagram</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Brands Showcase directly on the continuous Hero background */}
        <BrandsSection className="mt-8 sm:mt-12 md:mt-14 relative z-10" />
      </div>
    </section>
  );
};
