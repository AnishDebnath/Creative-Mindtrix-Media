import React from 'react';
import type { ShowcaseImageItem } from '@/data/images';
import { ImageCard } from './ImageCard';

interface GalleryProps {
  activeCategories: string[];
  allImages: ShowcaseImageItem[];
  onSelectImage: (src: string) => void;
  scrollFactor: number;
  headerOverlap: number;
  dynamicTopOffset: number;
  categoryTextOpacity: number;
}

export const Gallery: React.FC<GalleryProps> = ({
  activeCategories,
  allImages,
  onSelectImage,
  scrollFactor,
  headerOverlap,
  dynamicTopOffset,
  categoryTextOpacity,
}) => {
  return (
    <div
      id="image-showcase-gallery"
      className="relative z-20 mb-4 sm:mb-6 px-4 pt-6 sm:pt-7"
      style={{ marginTop: `${-20 + headerOverlap - dynamicTopOffset}px` }}
    >
      <div className="space-y-11 sm:space-y-12">
        {activeCategories.map((category, categoryIndex) => {
          const categoryImages = allImages.filter((img) => img.category === category);
          if (categoryImages.length === 0) return null;

          const isTopCategory = categoryIndex === 0;

          return (
            <section
              key={category}
              id={`category-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="relative scroll-mt-24"
            >
              {/* Category Header */}
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

              {/* Mobile 2-Column Continuous Masonry */}
              <div className="flex md:hidden gap-3.5 sm:gap-4 items-start">
                {[0, 1].map((colIndex) => {
                  const columnImages = categoryImages.filter((_, idx) => idx % 2 === colIndex);
                  return (
                    <div
                      key={colIndex}
                      className="flex-1 flex flex-col gap-3.5 sm:gap-4 will-change-transform"
                      style={{
                        transform: isTopCategory
                          ? `translate3d(0, -${colIndex * 70 * (1 - scrollFactor)}px, 0)`
                          : 'none',
                        zIndex: 10 + colIndex,
                      }}
                    >
                      {columnImages.map((img) => (
                        <ImageCard
                          key={img.id}
                          img={img}
                          catName={category}
                          onSelectImage={onSelectImage}
                        />
                      ))}
                    </div>
                  );
                })}
              </div>

              {/* Desktop 4-Column Animated Masonry */}
              <div className="hidden md:grid md:grid-cols-4 gap-4 md:gap-5 items-start">
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
                        <ImageCard
                          key={img.id}
                          img={img}
                          catName={category}
                          onSelectImage={onSelectImage}
                        />
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
  );
};
