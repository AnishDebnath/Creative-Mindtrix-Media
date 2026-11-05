import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { SectionTag } from '@/components/ui/SectionTag';
import { LazyVideo } from '@/components/ui/LazyVideo';
import { TOP_HERO_VIDEOS as HERO_FAN_REELS } from '@/data/videos';

interface HeroProps {
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative z-10 pt-4 mb-10 sm:mb-12"
    >
      <div className="bg-gradient-to-b from-[#f6eee7] via-[#f1e5df] to-[#ebdbe7] rounded-[24px] sm:rounded-[32px] pt-7 sm:pt-9 px-6 sm:px-10 pb-0 shadow-[0_20px_50px_-20px_rgba(220,198,213,0.45)] border border-[#e8d5df]/70 overflow-hidden flex flex-col justify-between">
        {/* Top Header Row: 2-column balanced layout (Headline on left, description & CTA on right) */}
        <div className="relative z-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10 pb-7 border-b border-[#ddcad6]/60">
          {/* Left Column: Tag + Headline */}
          <div className="flex-1 min-w-0 max-w-2xl flex flex-col items-start gap-3.5">
            <SectionTag label="Product Videos" />

            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] font-black tracking-normal text-neutral-900 uppercase leading-tight sm:leading-[1.08]">
              <span>CINEMATIC GRADE</span>
              <br />
              <span className="inline-flex items-center flex-nowrap gap-x-2 sm:gap-x-3 mt-1 sm:mt-1.5 whitespace-nowrap">
                <span>AI PRODUCT</span>
                <span className="inline-block relative">
                  <span className="relative z-10 px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-[18px] sm:rounded-[24px] bg-gradient-to-r from-[#faede5] via-[#f7edf5] to-[#eae3fb] shadow-sm inline-block transform -rotate-1 border border-[#ebdce7]">
                    <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
                      VIDEOS.
                    </span>
                  </span>
                </span>
              </span>
            </h1>
          </div>

          {/* Right Column: Clean description + Action Button */}
          <div className="max-w-md flex flex-col items-start lg:items-end gap-4 shrink-0">
            <p className="text-neutral-800 text-sm sm:text-base leading-relaxed font-normal lg:text-right">
              Replace expensive video production crews with high-converting AI commercial video ads, 9:16 viral reels, and product animations for Instagram, Facebook and YouTube.
            </p>

            <button
              type="button"
              onClick={onStartProject}
              className="group inline-flex items-center gap-2 px-6 sm:px-7 md:px-8 py-3 bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] hover:opacity-95 text-white font-display text-xs sm:text-sm md:text-base font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-md shadow-[#3d2035]/25 border border-white/15 cursor-pointer whitespace-nowrap"
            >
              <span>START YOUR PROJECT</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#eda970]" />
            </button>
          </div>
        </div>

        {/* Bottom Side: Fanned-out Cards emerging from bottom edge */}
        <div className="relative z-10 w-full h-[190px] xs:h-[230px] sm:h-[280px] md:h-[330px] lg:h-[360px] flex justify-center items-end pointer-events-none select-none px-2 sm:px-4">
          <div className="relative flex items-end justify-center w-full max-w-[1040px] h-full">
            {/* Card 1: Far Left (-16deg) */}
            <div
              className="absolute pointer-events-auto w-[95px] xs:w-[115px] sm:w-[150px] md:w-[180px] lg:w-[200px] aspect-[9/16] rounded-[14px] sm:rounded-[22px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.35)] bg-neutral-900 transition-transform duration-300 hover:-translate-y-3"
              style={{
                transform: 'translateX(-155%) translateY(32%) rotate(-16deg)',
                zIndex: 1,
              }}
            >
              <LazyVideo
                src={HERO_FAN_REELS[0].src}
                poster={HERO_FAN_REELS[0].poster}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 2: Mid Left (-8deg) */}
            <div
              className="absolute pointer-events-auto w-[105px] xs:w-[125px] sm:w-[165px] md:w-[195px] lg:w-[215px] aspect-[9/16] rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.35)] bg-neutral-900 transition-transform duration-300 hover:-translate-y-3"
              style={{
                transform: 'translateX(-78%) translateY(24%) rotate(-8deg)',
                zIndex: 2,
              }}
            >
              <LazyVideo
                src={HERO_FAN_REELS[1].src}
                poster={HERO_FAN_REELS[1].poster}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 3: Center Dominant Card (0deg) */}
            <div
              className="absolute pointer-events-auto w-[115px] xs:w-[135px] sm:w-[175px] md:w-[210px] lg:w-[230px] aspect-[9/16] rounded-[18px] sm:rounded-[26px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.4)] bg-neutral-900 transition-transform duration-300 hover:-translate-y-3"
              style={{
                transform: 'translateX(0%) translateY(16%) rotate(0deg)',
                zIndex: 5,
              }}
            >
              <LazyVideo
                src={HERO_FAN_REELS[2].src}
                poster={HERO_FAN_REELS[2].poster}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 4: Mid Right (+8deg) */}
            <div
              className="absolute pointer-events-auto w-[105px] xs:w-[125px] sm:w-[165px] md:w-[195px] lg:w-[215px] aspect-[9/16] rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.35)] bg-neutral-900 transition-transform duration-300 hover:-translate-y-3"
              style={{
                transform: 'translateX(78%) translateY(24%) rotate(8deg)',
                zIndex: 2,
              }}
            >
              <LazyVideo
                src={HERO_FAN_REELS[3].src}
                poster={HERO_FAN_REELS[3].poster}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 5: Far Right (+16deg) */}
            <div
              className="absolute pointer-events-auto w-[95px] xs:w-[115px] sm:w-[150px] md:w-[180px] lg:w-[200px] aspect-[9/16] rounded-[14px] sm:rounded-[22px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.35)] bg-neutral-900 transition-transform duration-300 hover:-translate-y-3"
              style={{
                transform: 'translateX(155%) translateY(32%) rotate(16deg)',
                zIndex: 1,
              }}
            >
              <LazyVideo
                src={HERO_FAN_REELS[4].src}
                poster={HERO_FAN_REELS[4].poster}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

