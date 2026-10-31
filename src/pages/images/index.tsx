import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionTag } from '@/components/ui/SectionTag';
import { getLocalImageFallback } from '@/utils/cloudinary';
import {
  SHOWCASE_GRID_IMAGES,
  IMAGE_CATEGORIES,
} from '@/data/images';

interface ImagesPageProps {
  onBackToHome?: () => void;
  onNavigateToReels?: () => void;
}

export const ImagesPage: React.FC<ImagesPageProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  const activeCategories = useMemo(() => {
    if (selectedCategory === 'All') {
      return IMAGE_CATEGORIES.filter((cat): cat is Exclude<typeof cat, 'All'> => cat !== 'All');
    }
    return [selectedCategory as Exclude<typeof selectedCategory, 'All'>];
  }, [selectedCategory]);

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All') return SHOWCASE_GRID_IMAGES;
    return SHOWCASE_GRID_IMAGES.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  React.useEffect(() => {
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafId = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Lock background scroll when image lightbox is open
  React.useEffect(() => {
    if (selectedImage) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedImage]);

  const maxScroll = 350; // Distance to fully line up the cards
  const scrollFactor = Math.min(1, Math.max(0, scrollY / maxScroll));
  const headerOverlap = Math.min(20, (scrollY / maxScroll) * 20); // From 20 to 0

  // ponytail: dynamic top offset maintains the exact previous gap at top position,
  // and smoothly transitions to a proper, well-proportioned gap between category bar and category text.
  const dynamicTopOffset = (1 - scrollFactor) * 35;

  // At first when scrollY is 0, category texts are hidden.
  // As user scrolls and cards line up, category texts smoothly fade into view.
  const categoryTextOpacity = Math.max(0, Math.min(1, (scrollFactor - 0.2) / 0.6));

  return (
    <div className="relative w-full pt-4 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      
      {/* Background Giant Watermark Typography: MINDTRIX */}
      <div className="absolute top-0 inset-x-0 flex items-start justify-center pointer-events-none select-none z-0 opacity-30 overflow-hidden">
        <svg
          viewBox="0 0 1600 360"
          className="w-full h-[280px] object-fill"
          preserveAspectRatio="none"
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#ebdbe7"
            fontFamily="'Anton', 'Oswald', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="320"
            letterSpacing="8"
          >
            MINDTRIX
          </text>
        </svg>
      </div>

      {/* Top Header Row matching requested design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 pt-12 mb-16"
      >
        <div className="max-w-3xl flex flex-col items-start gap-6">
          
          {/* Section Tag */}
          <SectionTag label="AI Product Imagery" />

          {/* Main Headline */}
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-normal text-neutral-900 uppercase leading-[1.05]">
            AI Product<br />
            Photography & Ads
          </h2>

          {/* Subtitle */}
          <p className="text-neutral-800 text-base sm:text-lg leading-relaxed font-normal max-w-lg">
            Studio-quality AI product imagery and lifestyle visuals created for e-commerce stores, Amazon listings, and social campaigns.
          </p>
          
          {/* Action Button */}
          <button
            onClick={() => {
              const el = document.getElementById('image-showcase-gallery');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-7 py-3 bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] hover:opacity-95 text-white font-display text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-md shadow-[#3d2035]/25 border border-white/15 cursor-pointer"
          >
            Explore AI Gallery
          </button>


        </div>
      </motion.div>

      {/* Category Filter Tabs - Floating top bar when cards align */}
      <div
        className="sticky top-4 z-40 flex justify-center mb-4 sm:mb-5 px-2 pointer-events-none"
        style={{
          opacity: categoryTextOpacity,
          transform: `translateY(${(1 - categoryTextOpacity) * -10}px)`,
          transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
        }}
      >
        <div 
          className="inline-flex items-center p-1 sm:p-1.5 bg-[#f5ecf2]/95 backdrop-blur-md rounded-full border border-[#e8d5df] shadow-[0_6px_24px_-4px_rgba(220,198,213,0.7)] max-w-full overflow-x-auto scrollbar-none"
          style={{ pointerEvents: categoryTextOpacity > 0.4 ? 'auto' : 'none' }}
        >
          {IMAGE_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-[13px] tracking-wide transition-colors duration-200 cursor-pointer select-none whitespace-nowrap ${
                  isActive
                    ? 'text-neutral-900 font-bold'
                    : 'text-[#6b4c63] hover:text-neutral-900 font-medium'
                }`}
              >
                {/* Framer-Motion Animated Pill Slider */}
                {isActive && (
                  <motion.div
                    layoutId="activeImageCategoryPill"
                    className="absolute inset-0 bg-[#eda970] rounded-full shadow-[0_2px_10px_rgba(237,169,112,0.45)]"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Groups Showcase Section - Maintains exact previous gap at top position */}
      <div 
        id="image-showcase-gallery"
        className="relative z-20 mb-20 px-4 pt-6 sm:pt-7"
        style={{ marginTop: `${-20 + headerOverlap - dynamicTopOffset}px` }}
      >
        <div className="space-y-11 sm:space-y-12">
          {activeCategories.map((category, categoryIndex) => {
            const categoryImages = SHOWCASE_GRID_IMAGES.filter((img) => img.category === category);
            if (categoryImages.length === 0) return null;

            const isTopCategory = categoryIndex === 0;

            return (
              <section
                key={category}
                id={`category-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="relative scroll-mt-24"
              >
                {/* Category Header - Polished editorial design matching website theme */}
                <div 
                  className="flex items-center gap-3 sm:gap-3.5 mb-5 sm:mb-6"
                  style={{
                    opacity: isTopCategory ? categoryTextOpacity : 1,
                    transform: isTopCategory ? `translateY(${(1 - categoryTextOpacity) * 10}px)` : 'none',
                    transition: 'opacity 0.25s ease-out, transform 0.25s ease-out',
                  }}
                >
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#eda970] ring-4 ring-[#eda970]/25 shadow-[0_0_10px_rgba(237,169,112,0.6)] shrink-0" />
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-neutral-950 uppercase leading-none">
                    {category}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#f5ecf2] border border-[#e8d5df] text-[#6b4c63] text-xs sm:text-[13px] font-mono font-bold tracking-wider shadow-2xs">
                    {categoryImages.length.toString().padStart(2, '0')}
                  </span>
                </div>

                {/* 4-Column Responsive Masonry Grid for this Category */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 items-start">
                  {[0, 1, 2, 3].map((colIndex) => {
                    const columnImages = categoryImages.filter((_, idx) => idx % 4 === colIndex);
                    return (
                      <div 
                        key={colIndex} 
                        className="flex flex-col gap-4 md:gap-5 will-change-transform"
                        style={{
                          transform: isTopCategory 
                            ? `translate3d(0, -${colIndex * 110 * (1 - scrollFactor)}px, 0)` 
                            : 'none',
                          zIndex: 10 + colIndex,
                        }}
                      >
                        {columnImages.map((img) => (
                          <div
                            key={img.id}
                            onClick={() => setSelectedImage(img.src)}
                            className="group relative w-full rounded-[20px] sm:rounded-[28px] overflow-hidden bg-neutral-900/60 shadow-sm hover:shadow-xl cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300"
                          >
                            <img
                              src={img.src}
                              alt={img.title || `${category} AI Photography - Mindtrix Media`}
                              onError={(e) => {
                                const fallback = getLocalImageFallback(img.src);
                                if (fallback && e.currentTarget.src !== fallback) {
                                  e.currentTarget.src = fallback;
                                }
                              }}
                              className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3.5 sm:p-4 flex flex-col justify-end pointer-events-none">
                              <span className="text-[10px] font-bold tracking-wider uppercase text-[#eda970]">
                                {img.category}
                              </span>
                              <p className="text-white text-xs sm:text-sm font-semibold line-clamp-2 leading-snug">
                                {img.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>


      {/* Interactive Image Modal matching Video Window layout & blur backdrop with Next/Prev navigation */}
      <AnimatePresence>
        {selectedImage && (() => {
          const currentIndex = filteredImages.findIndex(img => img.src === selectedImage);
          const currentItem = currentIndex !== -1 ? filteredImages[currentIndex] : null;

          const handlePrev = (e: React.MouseEvent) => {
            e.stopPropagation();
            if (currentIndex !== -1 && filteredImages.length > 0) {
              const prevIdx = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
              setSelectedImage(filteredImages[prevIdx].src);
            }
          };
          const handleNext = (e: React.MouseEvent) => {
            e.stopPropagation();
            if (currentIndex !== -1 && filteredImages.length > 0) {
              const nextIdx = (currentIndex + 1) % filteredImages.length;
              setSelectedImage(filteredImages[nextIdx].src);
            }
          };

          return (
            <motion.div
              key="image-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-5 right-5 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous Button */}
              {filteredImages.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-3 sm:left-6 md:left-10 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105 active:scale-95"
                  title="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next Button */}
              {filteredImages.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-3 sm:right-6 md:right-10 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105 active:scale-95"
                  title="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              <motion.div
                key={`image-modal-container-${selectedImage}`}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ type: 'spring', damping: 28, stiffness: 350 }}
                className="relative max-w-[92vw] max-h-[90vh] my-auto overflow-hidden rounded-[24px] sm:rounded-[32px] shadow-2xl bg-black border border-white/10 flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative max-w-full max-h-[85vh] overflow-hidden flex items-center justify-center">
                  <img
                    src={selectedImage}
                    alt={currentItem?.title || "Product Image Showcase"}
                    onError={(e) => {
                      const fallback = getLocalImageFallback(selectedImage);
                      if (fallback && e.currentTarget.src !== fallback) {
                        e.currentTarget.src = fallback;
                      }
                    }}
                    className="max-h-[85vh] max-w-[85vw] w-auto h-auto object-contain select-none"
                  />
                  {currentItem && (
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none">
                      <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-[#eda970]">
                        {currentItem.category}
                      </span>
                      <p className="text-white text-sm sm:text-base font-semibold leading-snug">
                        {currentItem.title}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

    </div>
  );
};
