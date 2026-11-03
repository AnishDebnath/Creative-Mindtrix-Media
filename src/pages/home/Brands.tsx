import React from 'react';
import { getCloudinaryImage } from '@/utils/cloudinary';

export interface BrandItem {
  id: string;
  name: string;
  logoUrl: string;
}

// ponytail: brand logos from Cloudinary "mindtrix media" -> "brand logo" folder
export const BRAND_LOGOS: BrandItem[] = [
  {
    id: 'tph',
    name: 'The Photographer House',
    logoUrl: getCloudinaryImage('tph.png') || 'https://res.cloudinary.com/mindtrix-media/image/upload/f_auto,q_auto,e_trim/tph_gfjmyo.png',
  },
  {
    id: 'charu',
    name: 'Charu Enterprise',
    logoUrl: getCloudinaryImage('charu.png') || 'https://res.cloudinary.com/mindtrix-media/image/upload/f_auto,q_auto,e_trim/charu_ypwood.png',
  },
  {
    id: 'gconnect',
    name: 'G Connect',
    logoUrl: getCloudinaryImage('gconnect.png') || 'https://res.cloudinary.com/mindtrix-media/image/upload/f_auto,q_auto,e_trim/gconnect_gpyufu.png',
  },
  {
    id: 'crh',
    name: 'Camere Rental House',
    logoUrl: getCloudinaryImage('crh.png') || 'https://res.cloudinary.com/mindtrix-media/image/upload/f_auto,q_auto,e_trim/crh_ctephp.png',
  },
  {
    id: 'gold',
    name: 'Rajkiya Jewellers',
    logoUrl: getCloudinaryImage('gold.png') || 'https://res.cloudinary.com/mindtrix-media/image/upload/f_auto,q_auto,e_trim/gold_zfz6i0.png',
  },
];

/**
 * Render brand logo image with refined, elegant size and subtle hover effect
 */
const BrandLogoRender: React.FC<{ brand: BrandItem }> = ({ brand }) => {
  return (
    <img
      src={brand.logoUrl}
      alt={brand.name}
      className="h-6 sm:h-8 md:h-10 w-auto max-w-[115px] sm:max-w-[155px] md:max-w-[175px] object-contain opacity-85 hover:opacity-100 transition-opacity duration-200 select-none pointer-events-none"
      loading="lazy"
      decoding="async"
    />
  );
};

export const Brands: React.FC<{ className?: string }> = ({ className = '' }) => {
  // ponytail: repeat array 4 times for seamless continuous marquee loop
  const displayBrands = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <div className={`relative w-full bg-transparent overflow-hidden ${className}`}>
      {/* Centered Constrained Width */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        {/* Heading */}
        <div className="text-center mb-3 sm:mb-4.5">
          <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-neutral-900">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
              120+
            </span>{' '}
            Brands & Creators
          </h3>
        </div>

        {/* Transparent Logo Track with Both Sides Fade Effect */}
        <div
          className="relative w-full overflow-hidden flex items-center py-2 sm:py-2.5"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
          }}
        >
          <div className="animate-marquee flex gap-8 sm:gap-14 md:gap-16 items-center shrink-0">
            {displayBrands.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="shrink-0 flex items-center justify-center cursor-pointer select-none"
                title={brand.name}
              >
                <BrandLogoRender brand={brand} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
