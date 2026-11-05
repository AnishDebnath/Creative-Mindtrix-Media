import React from 'react';
import { Mail, Phone, MapPin, Star } from 'lucide-react';
import { IMAGES } from '@/data/images';
import { BRAND_LOGOS } from '@/components/sections/Brands';

export const ContactInfo: React.FC = () => {
  // Creator avatars for top-left social proof
  const avatarList = [
    IMAGES['fashion-model-studio-pose']?.src,
    IMAGES['fashion-confident-red-tee']?.src,
    IMAGES['jewelry-elegant-necklace-portrait']?.src,
    IMAGES['fashion-deep-red-studio']?.src,
  ].filter(Boolean);

  // Seamless continuous loop marquee
  const displayBrands = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <div className="lg:col-span-6 flex flex-col justify-between py-2 sm:py-4">
      <div>
        {/* Top Creator Proof Badge */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 select-none">
          <div className="flex items-center -space-x-2.5">
            {avatarList.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Mindtrix Media Creator ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-xs"
              />
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-[#f59e0b]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
              ))}
            </div>
            <span className="text-xs sm:text-[13px] font-semibold text-neutral-700 tracking-tight mt-0.5">
              4.8/5 from 10+ brands
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-black tracking-normal text-neutral-900 uppercase leading-tight sm:leading-[1.08]">
          <span>READY TO SCALE</span>
          <br />
          <span className="inline-flex items-center flex-nowrap gap-x-2.5 sm:gap-x-3.5 mt-1 sm:mt-1.5 whitespace-nowrap">
            <span>YOUR</span>
            <span className="inline-block relative">
              <span className="relative z-10 px-4 sm:px-6 py-0.5 sm:py-1 rounded-[18px] sm:rounded-[24px] bg-gradient-to-r from-[#faede5] via-[#f7edf5] to-[#eae3fb] shadow-sm inline-block transform -rotate-1 border border-[#ebdce7]">
                <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
                  BRAND?
                </span>
              </span>
            </span>
          </span>
        </h1>
      </div>

      {/* Contact Details (Email, Call, Office) */}
      <div className="mt-8 sm:mt-10 flex flex-col gap-4.5 sm:gap-5">
        {/* Email */}
        <a
          href="mailto:mindtrixmediaindia@gmail.com"
          className="group inline-flex items-center gap-3.5 sm:gap-4 select-none w-fit"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#ebdce7] shadow-[0_2px_10px_-2px_rgba(61,32,53,0.08)] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#3d2035]/30 group-hover:shadow-[0_4px_14px_-2px_rgba(61,32,53,0.12)] transition-all">
            <Mail className="w-5 h-5 text-[#3d2035] group-hover:text-[#ed4f6c] transition-colors" />
          </div>
          <div className="min-w-0">
            <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 font-display leading-tight mb-0.5">
              EMAIL US
            </span>
            <span className="text-base sm:text-[17px] font-bold text-neutral-900 group-hover:text-[#ed4f6c] transition-colors tracking-tight break-all">
              mindtrixmediaindia@gmail.com
            </span>
          </div>
        </a>

        {/* Call */}
        <div className="group inline-flex items-center gap-3.5 sm:gap-4 select-none w-fit">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#ebdce7] shadow-[0_2px_10px_-2px_rgba(61,32,53,0.08)] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#ed4f6c]/30 group-hover:shadow-[0_4px_14px_-2px_rgba(237,79,108,0.12)] transition-all">
            <Phone className="w-5 h-5 text-[#ed4f6c] group-hover:scale-110 transition-transform" />
          </div>
          <div className="min-w-0">
            <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 font-display leading-tight mb-0.5">
              CALL US
            </span>
            <div className="flex flex-wrap items-center gap-x-2 text-base sm:text-[17px] font-bold text-neutral-900 tracking-tight">
              <a href="tel:+918910092451" className="hover:text-[#ed4f6c] transition-colors">
                +91 89100 92451
              </a>
              <span className="text-neutral-300 font-normal text-sm">/</span>
              <a href="tel:+919073604457" className="hover:text-[#ed4f6c] transition-colors">
                +91 90736 04457
              </a>
            </div>
          </div>
        </div>

        {/* Office */}
        <div className="group inline-flex items-center gap-3.5 sm:gap-4 select-none w-fit">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#ebdce7] shadow-[0_2px_10px_-2px_rgba(61,32,53,0.08)] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#d97736]/30 group-hover:shadow-[0_4px_14px_-2px_rgba(217,119,54,0.12)] transition-all">
            <MapPin className="w-5 h-5 text-[#d97736] group-hover:scale-110 transition-transform" />
          </div>
          <div className="min-w-0">
            <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 font-display leading-tight mb-0.5">
              OFFICE
            </span>
            <span className="text-base sm:text-[17px] font-bold text-neutral-900 tracking-tight">
              Kolkata, India
            </span>
          </div>
        </div>
      </div>

      {/* Bottom: Trusted by creators and brands Marquee */}
      <div className="pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-[#ebdce7]/80 w-full overflow-hidden">
        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-xl md:text-2xl font-extrabold tracking-tight text-neutral-900">
            We Are Working With{' '}
            <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
              10+
            </span>{' '}
            Brands
          </h3>
        </div>

        <div
          className="relative w-full overflow-hidden flex items-center py-2 sm:py-2.5"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
          }}
        >
          <div className="animate-marquee flex gap-8 sm:gap-14 md:gap-16 items-center shrink-0">
            {displayBrands.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="shrink-0 flex items-center justify-center cursor-pointer select-none"
                title={brand.name}
              >
                <img
                  src={brand.logoUrl}
                  alt={`${brand.name} partner logo`}
                  className="h-6 sm:h-8 md:h-10 w-auto max-w-[115px] sm:max-w-[155px] md:max-w-[175px] object-contain opacity-85 hover:opacity-100 transition-opacity duration-200 select-none pointer-events-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

