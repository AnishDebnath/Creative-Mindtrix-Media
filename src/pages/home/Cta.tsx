import React from 'react';
import { motion } from 'framer-motion';
import { SectionTag } from '@/components/ui/SectionTag';
import { LazyVideo } from '@/components/ui/LazyVideo';
import { TOP_HERO_VIDEOS } from '@/data/videos';
import { scrollToId } from '@/utils/scroll';
import { ChevronRight } from 'lucide-react';

interface CtaProps {
  onExploreServices?: () => void;
  onContactUs?: () => void;
  onNavigateToReels?: () => void;
}

// 4 showcase video cards fanning out at the bottom, cut off halfway at the bottom edge (zero overlays)
const CTA_CARDS = [
  {
    id: 'card-1',
    src: TOP_HERO_VIDEOS[0]?.src || '',
    poster: TOP_HERO_VIDEOS[0]?.poster || '',
    mobileTransform: 'translateX(-120%) translateY(28%) rotate(-7deg)',
    desktopTransform: 'translateX(-145%) translateY(30%) rotate(-9deg)',
    zIndex: 1,
  },
  {
    id: 'card-2',
    src: TOP_HERO_VIDEOS[4]?.src || '',
    poster: TOP_HERO_VIDEOS[4]?.poster || '',
    mobileTransform: 'translateX(-40%) translateY(14%) rotate(-2deg)',
    desktopTransform: 'translateX(-48%) translateY(16%) rotate(-3deg)',
    zIndex: 3,
  },
  {
    id: 'card-3',
    src: TOP_HERO_VIDEOS[1]?.src || '',
    poster: TOP_HERO_VIDEOS[1]?.poster || '',
    mobileTransform: 'translateX(40%) translateY(14%) rotate(2deg)',
    desktopTransform: 'translateX(48%) translateY(16%) rotate(3deg)',
    zIndex: 3,
  },
  {
    id: 'card-4',
    src: TOP_HERO_VIDEOS[2]?.src || '',
    poster: TOP_HERO_VIDEOS[2]?.poster || '',
    mobileTransform: 'translateX(120%) translateY(28%) rotate(7deg)',
    desktopTransform: 'translateX(145%) translateY(30%) rotate(9deg)',
    zIndex: 1,
  },
];

export const Cta: React.FC<CtaProps> = ({
  onExploreServices,
  onContactUs,
  onNavigateToReels,
}) => {
  const handleExploreServices = () => {
    if (onExploreServices) {
      onExploreServices();
    } else {
      scrollToId('services');
    }
  };

  const handleContactUs = () => {
    if (onContactUs) {
      onContactUs();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <section
      id="cta"
      className="relative w-full pt-10 sm:pt-12 md:pt-14 pb-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #f7edf5 0%, #faede5 40%, #eae3fb 75%, #ebdce7 100%)',
      }}
    >
      {/* Website Theme Ambient Radial Glows (Open background, seamless with previous sections) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] bg-gradient-to-r from-[#dcc6d5]/30 via-[#cfc1ee]/25 to-[#eda970]/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-l from-[#3d2035]/10 via-[#dcc6d5]/20 to-[#eda970]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Content (Directly in open background, nicely balanced section rhythm) */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20 text-center flex flex-col items-center relative z-10">

        {/* 1. Section Tag */}
        <SectionTag label="Get Started" className="mb-3.5 sm:mb-4" />

        {/* 2. Headline in Signature Website Header Style */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-black tracking-normal text-neutral-900 uppercase leading-tight sm:leading-[1.15] max-w-4xl mx-auto"
        >
          <span>READY TO SCALE</span>
          <br />
          <span className="inline-flex items-center justify-center flex-wrap gap-x-2.5 sm:gap-x-3.5 mt-1 sm:mt-1.5">
            <span>YOUR</span>
            {/* Highlight Pill Container for BRAND? - Styled in Website Theme */}
            <span className="inline-block relative">
              <span className="relative z-10 px-4 sm:px-6 py-0.5 sm:py-1 rounded-[18px] sm:rounded-[24px] bg-gradient-to-r from-[#faede5] via-[#f7edf5] to-[#eae3fb] shadow-sm inline-block transform -rotate-1 border border-[#ebdce7]">
                <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
                  BRAND?
                </span>
              </span>
            </span>
          </span>
        </motion.h2>

        {/* 3. Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-neutral-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-3.5 sm:mt-4 font-normal leading-relaxed"
        >
          Get high-converting product video commercials, studio photography, and viral reels designed to boost your brand sales and engagement.
        </motion.p>

        {/* 4. Action Buttons matching signature website buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: 0.18 }}
          className="flex items-center justify-center gap-3.5 flex-wrap mt-6 sm:mt-7"
        >
          <button
            type="button"
            onClick={handleContactUs}
            className="group inline-flex items-center gap-2 px-7 sm:px-8 py-3 bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] hover:opacity-95 text-white font-display text-xs sm:text-sm md:text-base font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-md shadow-[#3d2035]/25 border border-white/15 cursor-pointer whitespace-nowrap"
          >
            <span>START YOUR PROJECT</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#eda970]" />
          </button>

          <button
            type="button"
            onClick={handleExploreServices}
            className="inline-flex items-center gap-2 px-7 sm:px-8 py-3 bg-white text-neutral-800 border border-[#ebdce7] hover:bg-neutral-50 font-display text-xs sm:text-sm md:text-base font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
          >
            <span>EXPLORE SERVICES</span>
          </button>
        </motion.div>
      </div>

      {/* 5. Bottom Video Cards: Generous gap after buttons, 4 clean cards emerging halfway from bottom edge */}
      <div className="relative z-10 w-full h-[175px] xs:h-[220px] sm:h-[260px] md:h-[300px] lg:h-[330px] flex justify-center items-end pointer-events-none select-none px-2 sm:px-4 mt-8 sm:mt-14 md:mt-16 lg:mt-20">
        <div className="relative flex items-end justify-center w-full max-w-[1040px] h-full">
          {CTA_CARDS.map((card) => (
            <div
              key={card.id}
              className="absolute pointer-events-auto w-[90px] xs:w-[125px] sm:w-[155px] md:w-[195px] lg:w-[220px] aspect-[9/16] rounded-[16px] sm:rounded-[26px] overflow-hidden shadow-[0_20px_45px_rgba(47,24,42,0.22)] bg-neutral-900 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer group"
              style={{
                transform: typeof window !== 'undefined' && window.innerWidth < 640 ? card.mobileTransform : card.desktopTransform,
                zIndex: card.zIndex,
              }}
              onClick={onNavigateToReels}
            >
              {/* Clean Video Player with lazy loading and zero overlays */}
              <LazyVideo
                src={card.src}
                poster={card.poster}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
