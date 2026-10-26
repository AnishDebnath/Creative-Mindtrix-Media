import React from 'react';

export interface BrandItem {
  id: string;
  name: string;
  /** Provide brand logo image URL here later */
  logoUrl?: string;
}

// ponytail: brand logos list - add your image URLs in `logoUrl` when ready
export const BRAND_LOGOS: BrandItem[] = [
  { id: 'healia', name: 'Healia™' },
  { id: 'dermato', name: 'Dermato' },
  { id: 'habitline', name: 'Habitline' },
  { id: 'veloce', name: 'Veloce Goods' },
  { id: 'nordic', name: 'Nordic Lab' },
  { id: 'aura', name: 'Aura Botanicals' },
  { id: 'lumen', name: 'Lumen Paris' },
  { id: 'kroma', name: 'Kroma Studio' },
];

/**
 * Built-in vector logos matching the layout reference.
 * When `logoUrl` is provided in BRAND_LOGOS, the image automatically takes precedence.
 */
const BrandLogoRender: React.FC<{ brand: BrandItem }> = ({ brand }) => {
  if (brand.logoUrl) {
    return (
      <img
        src={brand.logoUrl}
        alt={brand.name}
        className="h-6 sm:h-7 md:h-8 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        loading="lazy"
      />
    );
  }

  // Pre-styled SVG marks matching layout reference
  switch (brand.id) {
    case 'healia':
      return (
        <div className="flex items-center gap-2 text-neutral-800 tracking-tight font-semibold text-lg sm:text-xl">
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#ECA292]" fill="currentColor">
            <circle cx="8" cy="8" r="4" opacity="0.8" />
            <circle cx="16" cy="8" r="4" opacity="0.8" />
            <circle cx="8" cy="16" r="4" opacity="0.8" />
            <circle cx="16" cy="16" r="4" opacity="0.8" />
          </svg>
          <span>
            Healia<span className="text-[10px] sm:text-xs align-super ml-0.5 font-normal text-neutral-500">TM</span>
          </span>
        </div>
      );
    case 'dermato':
      return (
        <div className="flex items-center gap-2 text-[#4A3B32] font-serif text-lg sm:text-xl tracking-wide">
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#9E6B4A]" fill="currentColor">
            <path d="M12 2a4 4 0 0 0-4 4c0 2 2 3 4 5 2-2 4-3 4-5a4 4 0 0 0-4-4zm0 20a4 4 0 0 0 4-4c0-2-2-3-4-5-2 2-4 3-4 5a4 4 0 0 0 4 4zm10-10a4 4 0 0 0-4-4c-2 0-3 2-5 4 2 2 3 4 5 4a4 4 0 0 0 4-4zM2 12a4 4 0 0 0 4 4c2 0 3-2 5-4-2-2-3-4-5-4a4 4 0 0 0-4 4z" />
          </svg>
          <span className="font-medium">Dermato</span>
        </div>
      );
    case 'habitline':
      return (
        <div className="flex items-center gap-2 text-neutral-900 font-bold text-lg sm:text-xl tracking-tight">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FA935A] flex items-center justify-center p-1 shadow-xs">
            <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h3l3-7 4 14 3-7h5" />
            </svg>
          </div>
          <span>Habitline</span>
        </div>
      );
    case 'veloce':
      return (
        <div className="flex items-center gap-2 text-neutral-800 font-bold tracking-widest text-base sm:text-lg uppercase">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-neutral-900" fill="currentColor">
            <polygon points="12 2 2 22 22 22" />
          </svg>
          <span>VÉLOCE</span>
        </div>
      );
    case 'nordic':
      return (
        <div className="flex items-center gap-2 text-neutral-700 font-medium tracking-wider text-base sm:text-lg">
          <div className="w-4 h-4 border-2 border-neutral-700 rotate-45" />
          <span className="uppercase font-semibold">NORDIC LAB</span>
        </div>
      );
    case 'aura':
      return (
        <div className="flex items-center gap-1.5 text-neutral-800 font-serif italic text-lg sm:text-xl">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#889B73]" fill="currentColor">
            <path d="M12 2C6.5 2 2 6.5 2 12c0 4 2.5 7.5 6 9 0-3 1-8 4-11 3 3 4 8 4 11 3.5-1.5 6-5 6-9 0-5.5-4.5-10-10-10z" />
          </svg>
          <span className="font-sans not-italic font-semibold tracking-tight">AURA</span>
        </div>
      );
    case 'lumen':
      return (
        <div className="flex items-center gap-2 text-neutral-900 font-sans tracking-[0.2em] uppercase text-sm sm:text-base font-semibold">
          <span className="text-[#3b82f6] text-lg leading-none">◆</span>
          <span>LUMEN</span>
        </div>
      );
    case 'kroma':
      return (
        <div className="flex items-center gap-1.5 text-neutral-800 font-black tracking-tight text-lg sm:text-xl">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white text-[10px]">
            K
          </div>
          <span>KROMA</span>
        </div>
      );
    default:
      return <span className="font-semibold text-neutral-700 text-lg">{brand.name}</span>;
  }
};

export const BrandsSection: React.FC<{ className?: string }> = ({ className = '' }) => {
  // ponytail: duplicate array twice for seamless continuous CSS ticker
  const displayBrands = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <div className={`relative w-full bg-transparent overflow-hidden ${className}`}>
      {/* Centered Constrained Width (not full width) */}
      <div className="max-w-4xl sm:max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-7 sm:mb-9">
          <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-neutral-900">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[#ed4f6c] via-[#a855f7] to-[#6566ee] bg-clip-text text-transparent font-black">
              120+
            </span>{' '}
            creators and brands
          </h3>
        </div>

        {/* Transparent Logo Track with Both Sides Fade Effect */}
        <div
          className="relative w-full overflow-hidden flex items-center py-2"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
          }}
        >
          <div className="animate-marquee flex gap-12 sm:gap-16 md:gap-20 items-center shrink-0">
            {displayBrands.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="shrink-0 flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity duration-200 cursor-pointer select-none"
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

export default BrandsSection;
