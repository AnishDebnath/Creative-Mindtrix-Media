import React, { useMemo } from 'react';
import { Star, Sparkles, Home, Zap } from 'lucide-react';
import { MARQUEE_PRODUCTS, PHONE_FRIEND_CARD } from '@/data/mockData';
import { Profile } from '@/types';

import avatarHipsterBeardImg from '@/assets/img/avatar_hipster_beard_1790979384816.jpg';
import avatarGreenCapImg from '@/assets/img/avatar_green_cap_1790979403136.jpg';
import yasminImg from '@/assets/img/yasmin_clean_916_1790980492922.jpg';
import { getCloudinaryImage } from '@/utils/cloudinary';

const womenPerfumeImg = getCloudinaryImage('women-perfume/Perfume_bottle_flat-lay_photograph.jpg');

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
  // Shuffle once per mount, then repeat for seamless infinite marquee scrolling
  const marqueeProducts = useMemo(() => {
    const shuffled = [...MARQUEE_PRODUCTS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return [...shuffled, ...shuffled, ...shuffled, ...shuffled];
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full pt-1 sm:pt-3 pb-24 overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 55%, #ffffff 100%)',
        backgroundSize: '100% 320px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom'
      }}
    >
      {/* Top Banner Section: Centered "MINDTRIX" Background Text with Right-to-Left Marquee Cards */}
      <div
        id="images-preview"
        onClick={onNavigateToImages}
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-4 sm:py-6 my-2 min-h-[260px] sm:min-h-[320px] md:min-h-[360px] flex items-center justify-center cursor-pointer"
        title="Click to view full AI Images Gallery"
      >
        {/* Giant Black Typography Background: MINDTRIX */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <svg
            viewBox="0 0 1400 320"
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
              letterSpacing="-6"
            >
              MINDTRIX
            </text>
          </svg>
        </div>

        {/* Edge-to-Edge Marquee Track: Moving from Right to Left */}
        <div className="relative z-10 w-full overflow-hidden flex items-center">
          <div className="animate-marquee flex gap-3 sm:gap-4 lg:gap-5 py-3 items-center">
            {marqueeProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="group relative w-[180px] sm:w-[220px] md:w-[250px] aspect-square rounded-[22px] sm:rounded-[28px] shrink-0 transform transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Outer Card with Crisp White Border and Rounded Photo */}
                <div className="relative w-full h-full rounded-[22px] sm:rounded-[28px] overflow-hidden border-[2.5px] border-white bg-neutral-900">
                  <img
                    src={product.src}
                    alt={product.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Bottom Dark Gradient Scrim Overlay with Product Label */}
                  <div className="absolute inset-x-0 bottom-0 pt-10 sm:pt-14 pb-2.5 sm:pb-3.5 px-2.5 sm:px-3.5 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end">
                    <div className="flex items-center gap-1 sm:gap-1.5 text-white font-display text-[11px] sm:text-[13px] lg:text-[14px] font-bold uppercase tracking-wider truncate drop-shadow-md">
                      <span className="truncate">{product.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Showcase Section */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden pt-8 sm:pt-12 pb-20">
        {/* Section Headline */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black tracking-normal text-[#111111] uppercase leading-[1.3]">
            AI PRODUCT ADVERTISING. VIRAL REELS. COMMERCIAL PRODUCTION.
          </h2>
          <p className="text-neutral-700 text-sm sm:text-base max-w-2xl mx-auto mt-2 font-medium">
            Mindtrix Media develops intelligent systems and high-impact AI creatives that help businesses scale faster.
          </p>
        </div>

        {/* Edge-to-Edge Visual Composition Area */}
        <div className="relative w-full min-h-[600px] sm:min-h-[680px] lg:min-h-[740px] flex items-center justify-center">
          {/* Background Typography "CREATIVE" Anchored at the Bottom Side */}
          <div className="absolute inset-x-0 bottom-2 sm:bottom-4 z-0 flex items-end justify-center pointer-events-none select-none overflow-hidden h-[300px] sm:h-[360px] md:h-[400px] lg:h-[440px]">
            <svg
              viewBox="0 0 1600 360"
              className="w-full h-full object-fill"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="creativeTextGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#fafafa" />
                  <stop offset="100%" stopColor="#f2f2f2" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="92%"
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
              <div className="absolute top-16 sm:top-35 -left-10 sm:-left-16 md:-left-20 z-30 bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] px-3.5 sm:px-4 py-1.5 rounded-full shadow-[0_12px_30px_-5px_rgba(143,115,204,0.35)] border border-white/90 flex items-center gap-1 text-[#3d2035] transform -rotate-8 transition-transform duration-300 hover:rotate-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-[#3d2035] text-[#3d2035]" />
                ))}
              </div>

              {/* 2. Bottom-Left Floating Profile Card with AI-Powered Badge */}
              <div className="absolute bottom-5 sm:bottom-6 -left-24 sm:-left-36 md:-left-44 lg:-left-48 z-20 w-32 sm:w-38 md:w-42 bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.25)] border border-white transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                {/* AI-Powered Badge */}
                <div className="absolute -top-2 -left-5 z-30 px-2.5 sm:px-3 py-1 bg-gradient-to-r from-[#eda970] via-[#dcc6d5] to-[#8f73cc] text-[#3d1e06] font-display text-[10px] sm:text-[11px] font-bold rounded-full shadow-lg border border-white/80 whitespace-nowrap transition-all transform rotate-[-20deg] hover:rotate-0 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#6566ee]" /> AI Ads
                </div>
                {/* Photo */}
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-1.5 bg-neutral-100">
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
              </div>

              {/* 3. Center Slim Clean iPhone Mockup */}
              <div className="relative z-25 w-[285px] sm:w-[305px] md:w-[320px] rounded-[48px] bg-black p-[5px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.15)] border-[4px] border-[#18181a]">
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
                        <div className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                          M
                        </div>
                        <div className="truncate">
                          <div className="text-[11px] font-bold leading-none text-neutral-900 truncate">Mindtrix Creative</div>
                          <div className="text-[9px] text-neutral-600 leading-none mt-0.5 flex items-center gap-0.5 font-medium truncate">
                            <Zap className="w-2.5 h-2.5 text-[#6566ee] shrink-0" /> AI Product Ads
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

                  {/* ZONE 2: CENTER IMAGE PART */}
                  <div className="flex items-center justify-center my-auto py-1 z-10 w-full">
                    <div
                      onClick={onNavigateToImages}
                      className="relative w-[92%] max-w-[250px] aspect-[9/16] rounded-[24px] overflow-hidden shadow-xl border-[1.5px] border-white/90 bg-neutral-900 cursor-pointer group"
                    >
                      <img
                        src={yasminImg}
                        alt="Mindtrix UGC Showcase"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-3 inset-x-3 text-white">
                        <span className="px-2 py-0.5 bg-gradient-to-r from-[#6566ee] to-[#8f73cc] rounded text-[9px] font-bold uppercase tracking-wider">
                          AI Product Reel
                        </span>
                        <p className="text-[11px] font-bold mt-1 line-clamp-1">Viral Beauty & Skincare UGC Ad</p>
                      </div>
                    </div>
                  </div>

                  {/* ZONE 3: BOTTOM PART */}
                  <div className="flex flex-col items-center gap-2.5 z-20 pb-0.5 w-full">
                    <div className="py-1.5 px-3.5 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-between border border-white/60 text-neutral-700 shadow-sm w-[90%] max-w-[220px]">
                      <div className="flex items-center gap-1.5 text-[#381f30] font-bold text-[11px] bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] px-3.5 py-1 rounded-full shadow-sm">
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
              </div>

              {/* 4. Top-Right Floating Chat Bubble */}
              <div className="absolute top-20 sm:top-40 -right-20 sm:-right-32 md:-right-36 lg:-right-38 z-30 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl py-2 px-3.5 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.25)] border border-white w-44 sm:w-52 flex items-center gap-2.5 transform rotate-[5deg] hover:rotate-0 transition-transform duration-300">
                <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full overflow-hidden bg-neutral-200 shrink-0 border border-neutral-100 shadow-sm">
                  <img
                    src={avatarHipsterBeardImg}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-neutral-900">3.8x Higher ROAS 🚀</div>
                  <div className="text-[9px] text-neutral-500 font-medium">Delivered in 48 hours</div>
                </div>
              </div>

              {/* 5. Bottom-Right Floating Chat Bubble */}
              <div className="absolute bottom-16 sm:bottom-28 -right-16 sm:-right-26 md:-right-30 lg:-right-34 z-30 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl py-2 px-3.5 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.25)] border border-white w-44 sm:w-52 flex items-center gap-2.5 transform -rotate-[5deg] hover:rotate-0 transition-transform duration-300">
                <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full overflow-hidden bg-neutral-200 shrink-0 border border-neutral-100 shadow-sm">
                  <img
                    src={avatarGreenCapImg}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-neutral-900">100% AI Generated ✨</div>
                  <div className="text-[9px] text-neutral-500 font-medium">Ready for Meta & TikTok</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
