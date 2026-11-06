import React, { useRef, useEffect, useMemo } from 'react';
import { getCloudinaryImage } from '@/utils/cloudinary';

export interface BrandItem {
  id: string;
  name: string;
  logoUrl: string;
}

// ponytail: 8 brand partner logos from Cloudinary "mindtrix media" -> "brand logo" folder
export const BRAND_LOGOS: BrandItem[] = [
  {
    id: 'biswabangla',
    name: 'Biswa Bangla Nordic Association',
    logoUrl:
      getCloudinaryImage('biswabangla-nordic-association.png') ||
      'https://res.cloudinary.com/mindtrix-media/image/upload/f_auto,q_auto,e_trim/v1793925903/biswabangla-nordic-association_goqgpa.png',
  },
  {
    id: 'tph',
    name: 'The Photographer House',
    logoUrl:
      getCloudinaryImage('tph.png') ||
      'https://res.cloudinary.com/mindtrix-media/image/upload/f_auto,q_auto,e_trim/v1793925862/tph_uxgme0.png',
  },
  {
    id: 'rentalone',
    name: 'Rentalone',
    logoUrl:
      getCloudinaryImage('rentalone.png') ||
      'https://res.cloudinary.com/mindtrix-media/image/upload/f_auto,q_auto,e_trim/v1793925861/rentalone_boql4h.png',
  },
  {
    id: 'gold',
    name: 'Rajkiya Jewellers',
    logoUrl:
      getCloudinaryImage('gold.png') ||
      'https://res.cloudinary.com/mindtrix-media/image/upload/f_auto,q_auto,e_trim/v1793925860/gold_k93jg3.png',
  },
  {
    id: 'gconnect',
    name: 'G Connect',
    logoUrl:
      getCloudinaryImage('gconnect.png') ||
      'https://res.cloudinary.com/mindtrix-media/image/upload/f_auto,q_auto,e_trim/v1793925859/gconnect_u7j8ik.png',
  },
  {
    id: 'garulink',
    name: 'Garulink',
    logoUrl:
      getCloudinaryImage('garulink.png') ||
      'https://res.cloudinary.com/mindtrix-media/image/upload/f_auto,q_auto,e_trim/v1793925858/garulink_q46ens.png',
  },
  {
    id: 'charu',
    name: 'Charu Enterprise',
    logoUrl:
      getCloudinaryImage('charu.png') ||
      'https://res.cloudinary.com/mindtrix-media/image/upload/f_auto,q_auto,e_trim/v1793925857/charu-enterpirse_au6dwo.png',
  },
  {
    id: 'camera-rental-house',
    name: 'Camera Rental House',
    logoUrl:
      getCloudinaryImage('camera-rental-house.png') ||
      'https://res.cloudinary.com/mindtrix-media/image/upload/f_auto,q_auto,e_trim/v1793925856/camera-rental-house_fwd1t7.png',
  },
];

export const BrandLogoRender: React.FC<{ brand: BrandItem }> = ({ brand }) => {
  const [hasError, setHasError] = React.useState(false);

  if (hasError || !brand.logoUrl) {
    return (
      <span className="font-display font-black text-xs sm:text-sm tracking-wider text-neutral-800 opacity-80 hover:opacity-100 transition-opacity select-none uppercase whitespace-nowrap">
        {brand.name}
      </span>
    );
  }

  return (
    <img
      src={brand.logoUrl}
      alt={brand.name}
      onError={() => setHasError(true)}
      className="h-6 sm:h-8 md:h-10 w-auto max-w-[115px] sm:max-w-[155px] md:max-w-[175px] object-contain opacity-85 hover:opacity-100 transition-opacity duration-200 select-none pointer-events-none"
      loading="lazy"
      decoding="async"
    />
  );
};

export interface BrandsProps {
  className?: string;
  hideHeading?: boolean;
}

export const Brands: React.FC<BrandsProps> = ({ className = '', hideHeading = false }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef<number>(0);
  const isPointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  // ponytail: duplicate array 6 times for seamless 2-way infinite scroll/drag on all screen sizes
  const displayBrands = useMemo(() => {
    return [
      ...BRAND_LOGOS,
      ...BRAND_LOGOS,
      ...BRAND_LOGOS,
      ...BRAND_LOGOS,
      ...BRAND_LOGOS,
      ...BRAND_LOGOS,
    ];
  }, []);

  // Set initial scroll position to middle set on mount
  useEffect(() => {
    const container = sliderRef.current;
    if (container) {
      const initScroll = () => {
        const oneSetWidth = container.scrollWidth / 6;
        if (oneSetWidth > 0) {
          container.scrollLeft = oneSetWidth * 2;
          scrollPosRef.current = oneSetWidth * 2;
        }
      };
      initScroll();
      // Ensure recalculation once images complete initial render
      const timer = setTimeout(initScroll, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Continuous auto-marquee ticker that matches home page hero section speed and smoothness
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();
    const speed = 36; // px per second matching hero section marquee

    const tick = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      const container = sliderRef.current;
      if (container && !isPointerDownRef.current) {
        const oneSetWidth = container.scrollWidth / 6;
        if (oneSetWidth > 0) {
          if (scrollPosRef.current === 0) {
            scrollPosRef.current = container.scrollLeft || oneSetWidth * 2;
          }

          scrollPosRef.current += speed * delta;

          if (scrollPosRef.current >= oneSetWidth * 3) {
            scrollPosRef.current -= oneSetWidth;
          } else if (scrollPosRef.current <= oneSetWidth) {
            scrollPosRef.current += oneSetWidth;
          }

          container.scrollLeft = scrollPosRef.current;
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isPointerDownRef.current = true;
    startXRef.current = e.clientX;
    if (sliderRef.current) {
      startScrollLeftRef.current = sliderRef.current.scrollLeft;
      scrollPosRef.current = sliderRef.current.scrollLeft;
    }
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDownRef.current || !sliderRef.current) return;
    const dx = e.clientX - startXRef.current;
    const nextScroll = startScrollLeftRef.current - dx;
    const oneSetWidth = sliderRef.current.scrollWidth / 6;

    if (oneSetWidth > 0) {
      if (nextScroll >= oneSetWidth * 3) {
        startScrollLeftRef.current -= oneSetWidth;
        scrollPosRef.current = nextScroll - oneSetWidth;
      } else if (nextScroll <= oneSetWidth) {
        startScrollLeftRef.current += oneSetWidth;
        scrollPosRef.current = nextScroll + oneSetWidth;
      } else {
        scrollPosRef.current = nextScroll;
      }
      sliderRef.current.scrollLeft = scrollPosRef.current;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isPointerDownRef.current = false;
    if (sliderRef.current) {
      scrollPosRef.current = sliderRef.current.scrollLeft;
    }
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const trackContent = (
    <div
      className="relative w-full overflow-hidden flex items-center py-2 sm:py-2.5"
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
      }}
      title="Drag to see partner brands"
    >
      <div
        ref={sliderRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full overflow-x-auto scrollbar-none flex items-center cursor-grab active:cursor-grabbing select-none touch-pan-y"
      >
        <div className="flex gap-8 sm:gap-14 md:gap-16 items-center shrink-0 w-max py-1">
          {displayBrands.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="shrink-0 flex items-center justify-center select-none"
              title={brand.name}
            >
              <BrandLogoRender brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (hideHeading) {
    return <div className={`relative w-full bg-transparent overflow-hidden ${className}`}>{trackContent}</div>;
  }

  return (
    <div className={`relative w-full bg-transparent overflow-hidden ${className}`}>
      {/* Centered Constrained Width */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        {/* Heading */}
        <div className="text-center mb-3 sm:mb-4.5">
          <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-neutral-900">
            We Are Working With{' '}
            <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
              10+
            </span>{' '}
            Brands
          </h3>
        </div>

        {trackContent}
      </div>
    </div>
  );
};

export default Brands;

