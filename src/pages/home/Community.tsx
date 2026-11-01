import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { SectionTag } from '@/components/ui/SectionTag';
import { VIDEOS } from '@/data/videos';

interface CommunitySectionProps {
  onOpenVideoChat?: () => void;
  onMeetCommunity?: () => void;
  onNavigateToReels?: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  onNavigateToReels,
  onOpenVideoChat,
}) => {
  const handleCtaClick = () => {
    if (onNavigateToReels) {
      onNavigateToReels();
    } else if (onOpenVideoChat) {
      onOpenVideoChat();
    }
  };

  // 9:16 video cards for the carousel (clean with zero overlays)
  const REEL_CARDS = [
    {
      id: 'reel-facewash',
      videoSrc: VIDEOS['natural-facewash']?.videoSrc,
    },
    {
      id: 'reel-runway',
      videoSrc: VIDEOS['paris-runway']?.videoSrc,
    },
    {
      id: 'reel-streetwear',
      videoSrc: VIDEOS['streetwear-ferreri']?.videoSrc,
    },
    {
      id: 'reel-perfume',
      videoSrc: VIDEOS['women-perfume']?.videoSrc,
    },
    {
      id: 'reel-lipstick',
      videoSrc: VIDEOS['lipstick-spotlight']?.videoSrc,
    },
  ];

  // Default active center card (index 1)
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically cycle to show other cards
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REEL_CARDS.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, REEL_CARDS.length]);

  return (
    <section
      id="reels"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-6"
      style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(248, 246, 253, 0.45) 50%, #eae3fb 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <span id="community" className="sr-only" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

          {/* LEFT: About Us Tag, Display Headline, Description, and Circular-Arrow CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-start justify-center text-left"
          >
            {/* Website Theme SectionTag */}
            <SectionTag label="AI Reel Stage" className="mb-4 sm:mb-5" />

            {/* Headline matching MeetTheWorld right-side font size & 3-line cadence */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-black tracking-normal text-neutral-900 uppercase leading-[1.04] mb-4 sm:mb-5">
              AI PRODUCT REELS<br />
              BUILT TO CAPTURE<br />
              AND CONVERT.
            </h2>

            {/* Description matching MeetTheWorld right-side font size and proportion */}
            <p className="text-neutral-700 text-base sm:text-[17px] leading-relaxed font-normal max-w-lg mb-7 sm:mb-8">
              Short, high-impact AI product video reels engineered to capture attention, stop the scroll, and turn casual viewers into paying customers.
            </p>

            {/* Brand CTA Button matching MeetTheWorld right-side button size & style */}
            <button
              onClick={handleCtaClick}
              className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] hover:opacity-95 text-white font-display text-xs sm:text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-md shadow-[#3d2035]/25 border border-white/15 cursor-pointer whitespace-nowrap"
            >
              <span>View All Product Reels</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#eda970]" />
            </button>
          </motion.div>

          {/* RIGHT: 3-Card Carousel with Larger 9:16 Video Cards (Zero overlays) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center justify-center w-full"
          >
            {/* 3-Card Carousel Stage in Larger 9:16 Ratio with Auto-Rotation */}
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="relative w-full max-w-[560px] md:max-w-[620px] h-[460px] sm:h-[530px] md:h-[580px] lg:h-[600px] flex items-center justify-center overflow-visible select-none"
            >
              {REEL_CARDS.map((reel, idx) => {
                const count = REEL_CARDS.length;
                const isActive = idx === activeIndex;
                const isLeft = idx === (activeIndex - 1 + count) % count;
                const isRight = idx === (activeIndex + 1) % count;
                const isFarLeft = idx === (activeIndex - 2 + count) % count;

                // Position styling based on role in carousel
                let transformClass = 'opacity-0 pointer-events-none scale-75 z-0';
                let zIndex = 0;

                if (isActive) {
                  transformClass = 'translate-x-0 scale-100 opacity-100 z-30 shadow-[0_25px_60px_-15px_rgba(47,24,42,0.3)]';
                  zIndex = 30;
                } else if (isLeft) {
                  transformClass = '-translate-x-[48%] sm:-translate-x-[52%] scale-[0.88] opacity-50 blur-[1.5px] z-10 cursor-pointer hover:opacity-75';
                  zIndex = 10;
                } else if (isRight) {
                  transformClass = 'translate-x-[48%] sm:translate-x-[52%] scale-[0.88] opacity-50 blur-[1.5px] z-10 cursor-pointer hover:opacity-75';
                  zIndex = 10;
                } else if (isFarLeft) {
                  transformClass = '-translate-x-[72%] scale-75 opacity-0 pointer-events-none blur-[2px] z-0';
                  zIndex = 0;
                } else {
                  // Far right / offscreen queue: glides in smoothly from right
                  transformClass = 'translate-x-[72%] scale-75 opacity-0 pointer-events-none blur-[2px] z-0';
                  zIndex = 0;
                }

                return (
                  <div
                    key={reel.id}
                    onClick={() => {
                      if (!isActive) setActiveIndex(idx);
                    }}
                    style={{ zIndex }}
                    className={`absolute w-[240px] sm:w-[280px] md:w-[310px] lg:w-[325px] aspect-[9/16] rounded-[26px] sm:rounded-[34px] md:rounded-[38px] overflow-hidden border border-white/80 bg-neutral-900 transition-all duration-500 ease-out ${transformClass}`}
                  >
                    {/* Pure Video - Zero Overlays */}
                    {reel.videoSrc && (
                      <video
                        src={reel.videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pagination Indicator in Website Theme (Dot - Pill - Dot) */}
            <div className="flex items-center justify-center gap-2 mt-6 select-none">
              {REEL_CARDS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? 'w-7 h-2 rounded-full bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] shadow-sm shadow-[#3d2035]/30'
                      : 'w-2 h-2 rounded-full bg-[#3d2035]/25 hover:bg-[#3d2035]/50'
                  }`}
                  aria-label={`Go to reel slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
