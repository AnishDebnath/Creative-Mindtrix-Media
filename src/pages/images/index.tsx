import React, { useState, useMemo, useEffect } from 'react';
import { SHOWCASE_GRID_IMAGES, IMAGE_CATEGORIES } from '@/data/images';
import { Hero } from './Hero';
import { CategoryFilter } from './CategoryFilter';
import { Gallery } from './Gallery';
import { ImageModal } from './ImageModal';

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

  useEffect(() => {
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
  useEffect(() => {
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

  // Dynamic top offset maintains the exact previous gap at top position,
  // and smoothly transitions to a proper gap between category bar and category text.
  const dynamicTopOffset = (1 - scrollFactor) * 35;

  // At first when scrollY is 0, category texts are hidden.
  // As user scrolls and cards line up, category texts smoothly fade into view.
  const categoryTextOpacity = Math.max(0, Math.min(1, (scrollFactor - 0.2) / 0.6));

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(250,237,229,0.3) 50%, rgba(247,237,245,0.7) 80%, #f7edf5 100%)',
      }}
    >
      {/* Background Giant Watermark Typography: MINDTRIX */}
      <div className="absolute top-0 inset-x-0 flex items-start justify-center pointer-events-none select-none z-0 opacity-30 overflow-hidden">
        <svg
          viewBox="0 0 1000 200"
          className="w-full h-[200px] sm:h-[260px] md:h-[300px]"
          preserveAspectRatio="none"
        >
          <text
            x="0"
            y="50%"
            dominantBaseline="central"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="#ebdbe7"
            fontFamily="'Anton', 'Oswald', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="195"
          >
            MINDTRIX
          </text>
        </svg>
      </div>

      <div className="relative w-full pt-4 pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header Hero Section */}
        <Hero />

        {/* Floating Category Filter Tabs */}
        <CategoryFilter
          categories={IMAGE_CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categoryTextOpacity={categoryTextOpacity}
        />

        {/* Showcase Masonry Gallery */}
        <Gallery
          activeCategories={activeCategories}
          allImages={SHOWCASE_GRID_IMAGES}
          onSelectImage={setSelectedImage}
          scrollFactor={scrollFactor}
          headerOverlap={headerOverlap}
          dynamicTopOffset={dynamicTopOffset}
          categoryTextOpacity={categoryTextOpacity}
        />

        {/* Image Lightbox Modal */}
        <ImageModal
          selectedImage={selectedImage}
          filteredImages={filteredImages}
          onClose={() => setSelectedImage(null)}
          onSelectImage={setSelectedImage}
        />
      </div>
    </div>
  );
};
