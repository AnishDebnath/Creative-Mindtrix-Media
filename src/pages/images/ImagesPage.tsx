import React, { useState } from 'react';
import { X } from 'lucide-react';

// All 20 Images from assets/images folder
import lipstickFlatLayImg from '@/assets/images/lipstick/Create_cosmetics_flat_lay_photog.jpg';
import lipstickMarbleImg from '@/assets/images/lipstick/Lipstick_advertisement_on_marble.jpg';
import lipstickEditorialImg from '@/assets/images/lipstick/Lipstick_product_editorial_photo.jpg';
import lipstickLuxuryImg from '@/assets/images/lipstick/Luxury_lipstick_advertising_phot.jpg';

import menPerfumeCreatingAdvImg from '@/assets/images/men perfume/Creating_perfume_bottle_adv.jpg';
import menPerfumeCreatingAdvertisImg from '@/assets/images/men perfume/Creating_perfume_bottle_advertis.jpg';
import menPerfumePosterImg from '@/assets/images/men perfume/Perfume_bottle_advertising_poster.jpg';
import menPerfumeEditorialImg from '@/assets/images/men perfume/Perfume_bottle_editorial_photogr.jpg';
import menPerfumeLibraryImg from '@/assets/images/men perfume/Perfume_bottle_in_luxury_library.jpg';
import menPerfumeMindtrixImg from '@/assets/images/men perfume/Photographing_Mindtrix_Media_per.jpg';

import skincareStoneImg from '@/assets/images/facewash/Skincare_advertisement_on_stone.jpg';
import skincarePhotographImg from '@/assets/images/facewash/Skincare_advertising_photograph.jpg';
import skincareAdvertisemenImg from '@/assets/images/facewash/Skincare_product_advertisemen.jpg';
import skincareAdvertisementImg from '@/assets/images/facewash/Skincare_product_advertisement.jpg';
import skincareCommercialImg from '@/assets/images/facewash/Skincare_product_commercial_photo.jpg';

import womenPerfumeCreatingImg from '@/assets/images/women perfume/Creating_perfume_advertising_pho.jpg';
import womenPerfumeCommercialImg from '@/assets/images/women perfume/Perfume_bottle_commercial_photog.jpg';
import womenPerfumeFlatLayImg from '@/assets/images/women perfume/Perfume_bottle_flat-lay_photograph.jpg';
import womenPerfumePedestalImg from '@/assets/images/women perfume/Perfume_bottle_on_stone_pedestal.jpg';
import womenPerfumePlaceImg from '@/assets/images/women perfume/Perfume_product_photograph_place.jpg';

interface ImagesPageProps {
  onBackToHome?: () => void;
  onNavigateToReels?: () => void;
}

interface ProductImageItem {
  id: string;
  src: string;
}

// All 20 images from UGC product image
const ALL_UGC_PRODUCT_IMAGES: ProductImageItem[] = [
  { id: 'lip-1', src: lipstickFlatLayImg },
  { id: 'lip-2', src: lipstickMarbleImg },
  { id: 'lip-3', src: lipstickEditorialImg },
  { id: 'lip-4', src: lipstickLuxuryImg },
  { id: 'men-1', src: menPerfumeCreatingAdvImg },
  { id: 'men-2', src: menPerfumeCreatingAdvertisImg },
  { id: 'men-3', src: menPerfumePosterImg },
  { id: 'men-4', src: menPerfumeEditorialImg },
  { id: 'men-5', src: menPerfumeLibraryImg },
  { id: 'men-6', src: menPerfumeMindtrixImg },
  { id: 'skin-1', src: skincareStoneImg },
  { id: 'skin-2', src: skincarePhotographImg },
  { id: 'skin-3', src: skincareAdvertisemenImg },
  { id: 'skin-4', src: skincareAdvertisementImg },
  { id: 'skin-5', src: skincareCommercialImg },
  { id: 'women-1', src: womenPerfumeCreatingImg },
  { id: 'women-2', src: womenPerfumeCommercialImg },
  { id: 'women-3', src: womenPerfumeFlatLayImg },
  { id: 'women-4', src: womenPerfumePedestalImg },
  { id: 'women-5', src: womenPerfumePlaceImg }
];

export const ImagesPage: React.FC<ImagesPageProps> = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

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

  const maxScroll = 500; // Distance to fully transition to flat grid
  const scrollFactor = Math.min(1, Math.max(0, scrollY / maxScroll));
  const headerOverlap = Math.min(20, (scrollY / maxScroll) * 20); // From 20 to 0

  return (
    <div className="relative w-full min-h-screen pt-4 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      
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
      <div className="relative z-10 pt-12 mb-16">
        <div className="max-w-3xl flex flex-col items-start gap-6">
          
          {/* Trend Tag */}
          <div className="flex items-center gap-2 px-3 py-1 bg-[#dcc6d5]/30 text-[#3d2035] text-xs font-bold rounded-full border border-[#dcc6d5]/50">
            <span className="w-2 h-2 rounded-full bg-[#eda970]" />
            See 2026 social media trends →
          </div>

          {/* Main Headline */}
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-normal text-neutral-900 uppercase leading-[1.05]">
            Scale your brand<br />
            on social media
          </h2>

          {/* Subtitle */}
          <p className="text-neutral-800 text-base sm:text-lg leading-relaxed font-normal max-w-lg">
            High performing social media strategies that grow your audience and drive real business results.
          </p>
          
          {/* Action Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-7 py-3 bg-[#eda970] hover:bg-[#e59c60] text-neutral-900 font-display text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-sm cursor-pointer"
          >
            Start for free
          </button>
        </div>
      </div>

      {/* Image Container - 4 separate columns for seamless vertical spacing and staircase offset */}
      <div className="relative z-20 mb-16 px-4 pt-28" style={{ marginTop: `${-20 + headerOverlap}px` }}>
        <div 
          id="image-staircase-container" 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 items-start"
        >
          {[0, 1, 2, 3].map((colIndex) => {
            const columnImages = ALL_UGC_PRODUCT_IMAGES.filter((_, idx) => idx % 4 === colIndex);
            return (
              <div
                key={colIndex}
                className="flex flex-col gap-4 md:gap-5 will-change-transform"
                style={{
                  // ponytail: silky 60fps GPU translate3d driven by rAF; removes CSS transition lag fighting user wheel scroll
                  transform: `translate3d(0, -${colIndex * 110 * (1 - scrollFactor)}px, 0)`,
                  zIndex: 10 + colIndex
                }}
              >
                {columnImages.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => setSelectedImage(img.src)}
                    className="group relative aspect-[3/4] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-neutral-900 shadow-md cursor-pointer transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={img.src}
                      alt="UGC Product Image"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>


      {/* Full-Screen Image Lightbox Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-neutral-950 rounded-[32px] max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl my-auto p-3 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage}
              alt="Asset Full Preview"
              className="max-h-[85vh] w-auto max-w-full rounded-[24px] object-contain shadow-2xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};
