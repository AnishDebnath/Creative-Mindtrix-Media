import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { SectionTag } from '@/components/ui/SectionTag';

interface HeroProps {
  onExploreGallery?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreGallery }) => {
  const handleScrollToGallery = () => {
    if (onExploreGallery) {
      onExploreGallery();
      return;
    }
    const el = document.getElementById('image-showcase-gallery');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative z-10 pt-8 sm:pt-12 mb-10 sm:mb-14"
    >
      <div className="max-w-3xl flex flex-col items-start">
        {/* Section Tag */}
        <SectionTag label="Product Images" className="mb-4 sm:mb-5" />

        {/* Main Headline */}
        <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-black tracking-normal text-neutral-900 uppercase leading-tight sm:leading-[1.08] mb-4 sm:mb-5">
          <span>STUDIO GRADE</span>
          <br />
          <span className="inline-flex items-center flex-wrap gap-x-2.5 sm:gap-x-3.5 mt-1 sm:mt-1.5">
            <span>AI PRODUCT</span>
            <span className="inline-block relative">
              <span className="relative z-10 px-4 sm:px-6 py-0.5 sm:py-1 rounded-[18px] sm:rounded-[24px] bg-gradient-to-r from-[#faede5] via-[#f7edf5] to-[#eae3fb] shadow-sm inline-block transform -rotate-1 border border-[#ebdce7]">
                <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
                  PHOTOS.
                </span>
              </span>
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-700 text-sm md:text-base lg:text-[17px] leading-relaxed font-normal max-w-lg mb-7 sm:mb-8">
          Replace expensive physical photoshoots with hyper-realistic AI product photography and high-end commercial sets for Amazon and Shopify.
        </p>

        {/* Action Button */}
        <button
          onClick={handleScrollToGallery}
          className="group inline-flex items-center gap-2 px-6 sm:px-7 md:px-8 py-3 bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] hover:opacity-95 text-white font-display text-xs sm:text-sm md:text-base font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-md shadow-[#3d2035]/25 border border-white/15 cursor-pointer whitespace-nowrap"
        >
          <span>EXPLORE AI GALLERY</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#eda970]" />
        </button>
      </div>
    </motion.div>
  );
};

