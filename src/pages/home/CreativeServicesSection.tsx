import React from 'react';
import { Check } from 'lucide-react';
import { getCloudinaryVideo, getCloudinaryVideoThumbnail } from '@/utils/cloudinary';

interface CreativeServicesSectionProps {
  onNavigateToReels?: () => void;
  onNavigateToImages?: () => void;
}

// Fast optimized Cloudinary videos to showcase creative services (just like HeroSection)
const contentMarketingVid = getCloudinaryVideo('rampwalk.mp4', { optimize: true, quality: 'good', width: 480 });
const contentMarketingThumb = getCloudinaryVideoThumbnail('rampwalk.mp4');

const socialMarketingVid = getCloudinaryVideo('facewash.mp4', { optimize: true, quality: 'good', width: 480 });
const socialMarketingThumb = getCloudinaryVideoThumbnail('facewash.mp4');

export const CreativeServicesSection: React.FC<CreativeServicesSectionProps> = ({
  onNavigateToReels,
}) => {
  return (
    <section id="services" className="w-full bg-white py-24 sm:py-28 px-4 sm:px-6 lg:px-8 scroll-mt-6">
      <span id="stand-for" className="sr-only" />
      <div className="max-w-6xl mx-auto">

      {/* =========================================================================
          Top Header Row matching other section headers in the website system
          (WhatWeStandForSection / CommunitySection) - displayed in a single line
      ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-14 sm:mb-16">
        {/* Left Headline in a single line */}
        <div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] font-black tracking-normal text-neutral-900 uppercase leading-none whitespace-nowrap">
            CREATIVE SERVICES
          </h2>
        </div>

        {/* Right Description & Action Button in site palette */}
        <div className="max-w-md flex flex-col items-start gap-4">
          <p className="text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
            Unlock your brand's true potential with viral short-form storytelling, content marketing, and multi-platform social growth.
          </p>
          <button
            onClick={onNavigateToReels}
            className="px-7 py-3 bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] hover:opacity-95 text-neutral-900 font-display text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-sm cursor-pointer whitespace-nowrap"
          >
            EXPLORE CREATIVE WORK
          </button>
        </div>
      </div>

      {/* =========================================================================
          Stacking Cards Scroll System
          // ponytail: native CSS sticky stacking cards effect without heavy scroll listeners.
          Each card stays pinned and the subsequent card smoothly slides upward over it.
      ========================================================================= */}
      <div className="relative flex flex-col gap-12 sm:gap-16 pb-16">

        {/* =========================================================================
            CARD 1: Content Marketing (Phone on Left in Separate Div Box)
            Styled with Website Theme 4-Color Soft Gradient 1 & Frosted Glass Mockup
        ========================================================================= */}
        <div className="sticky top-24 sm:top-28 z-10 w-full rounded-[32px] sm:rounded-[44px] bg-gradient-to-br from-[#f8edf5] via-[#f2ebfc] to-[#fdf4ed] border border-[#dcc6d5] shadow-[0_24px_50px_-12px_rgba(143,115,204,0.18)] p-3 sm:p-4 lg:p-5 overflow-hidden transition-all duration-300">

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* Separate Div Box for the Mobile Mockup (Left Column) - Crisp Frosted Container */}
            <div className="lg:col-span-6 w-full rounded-[24px] sm:rounded-[32px] bg-white/85 backdrop-blur-md border border-white/90 shadow-sm pt-8 sm:pt-10 px-2 sm:px-4 pb-0 flex justify-center items-end overflow-hidden relative order-2 lg:order-1 min-h-[460px] sm:min-h-[500px]">
              {/* EXACT SAME iPhone Chassis as HeroSection - Always visible */}
              <div className="relative z-25 w-[265px] sm:w-[285px] md:w-[300px] rounded-[48px] bg-black p-[5px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.15)] border-[4px] border-[#18181a] -mb-16 sm:-mb-20">
                {/* Inner Screen Canvas - Website Theme Subtle Gradient just like HeroSection */}
                <div className="relative rounded-[42px] overflow-hidden bg-gradient-to-b from-[#ebdce7] via-[#eae3fb] via-[#e5e1fc] to-[#faede5] text-neutral-900 flex flex-col pt-3 pb-3 shadow-inner">

                  {/* ZONE 1: TOP STATUS BAR */}
                  <div className="w-[92%] max-w-[250px] mx-auto flex items-center justify-between text-[11px] font-bold text-neutral-800 z-20 mb-2">
                    <span>9:41</span>

                    {/* Dynamic Island Notch */}
                    <div className="w-[86px] h-[23px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#111116] border border-neutral-800 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#0a0a14]" />
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#0d0d18] border border-neutral-800" />
                    </div>

                    <div className="flex items-center gap-1.5 text-xs">
                      <span>📶</span>
                      <div className="w-4.5 h-2.5 border border-neutral-800 rounded-sm p-0.5 flex items-center">
                        <div className="h-full w-full bg-neutral-900 rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* Service Video Showcase Div Box (clean with no overlays) */}
                  <div className="flex items-center justify-center w-full px-2.5 pt-1 pb-1">
                    <div
                      onClick={onNavigateToReels}
                      className="relative w-full max-w-[245px] aspect-[9/16] rounded-[22px] overflow-hidden shadow-xl border-[1.5px] border-white/90 bg-black cursor-pointer group"
                    >
                      <video
                        src={contentMarketingVid}
                        poster={contentMarketingThumb}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Service Details (Right Column) */}
            <div className="lg:col-span-6 flex flex-col items-start justify-center order-1 lg:order-2 p-4 sm:p-6 lg:p-8">
              {/* Pill Badge: Viral Growth styled in vibrant site gradient palette */}
              <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] text-[#3d2035] border border-white/80 mb-4 shadow-2xs">
                Viral Growth
              </span>

              {/* Main Service Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-neutral-900 tracking-tight leading-tight mb-4">
                Content Marketing
              </h3>

              {/* Description */}
              <p className="text-neutral-700 text-base sm:text-[17px] leading-relaxed mb-8 max-w-md font-normal">
                We engineer viral short-form videos that capture attention and grow your community presence organically online.
              </p>

              {/* Features Checkmark List */}
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-neutral-900 font-medium text-base sm:text-lg">
                  <div className="w-6 h-6 rounded-full bg-[#6566ee]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6566ee] stroke-[3]" />
                  </div>
                  <span>Expert Video Editing</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-900 font-medium text-base sm:text-lg">
                  <div className="w-6 h-6 rounded-full bg-[#6566ee]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6566ee] stroke-[3]" />
                  </div>
                  <span>Content Calendar Planning</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-900 font-medium text-base sm:text-lg">
                  <div className="w-6 h-6 rounded-full bg-[#6566ee]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6566ee] stroke-[3]" />
                  </div>
                  <span>Viral Script Writing</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* =========================================================================
            CARD 2: Social Media Marketing (Phone on Right in Separate Div Box)
            Styled with Website Theme 4-Color Soft Gradient 2 & Frosted Glass Mockup
        ========================================================================= */}
        <div className="sticky top-32 sm:top-36 z-20 w-full rounded-[32px] sm:rounded-[44px] bg-gradient-to-br from-[#f0f0fd] via-[#f7f0fb] to-[#faedf4] border border-[#6566ee]/30 shadow-[0_30px_70px_-15px_rgba(101,102,238,0.2)] p-3 sm:p-4 lg:p-5 overflow-hidden transition-all duration-300">

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* Service Details (Left Column) */}
            <div className="lg:col-span-6 flex flex-col items-start justify-center order-1 p-4 sm:p-6 lg:p-8">
              {/* Pill Badge: Brand Growth styled in vibrant site gradient palette */}
              <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] text-[#3d2035] border border-white/80 mb-4 shadow-2xs">
                Brand Growth
              </span>

              {/* Main Service Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-neutral-900 tracking-tight leading-tight mb-4">
                Social Media Marketing
              </h3>

              {/* Description */}
              <p className="text-neutral-700 text-base sm:text-[17px] leading-relaxed mb-8 max-w-md font-normal">
                We manage your entire social presence to build community trust and drive consistent organic engagement.
              </p>

              {/* Features Checkmark List */}
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-neutral-900 font-medium text-base sm:text-lg">
                  <div className="w-6 h-6 rounded-full bg-[#6566ee]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6566ee] stroke-[3]" />
                  </div>
                  <span>Multi-Platform Account Management</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-900 font-medium text-base sm:text-lg">
                  <div className="w-6 h-6 rounded-full bg-[#6566ee]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6566ee] stroke-[3]" />
                  </div>
                  <span>Community Engagement & Growth</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-900 font-medium text-base sm:text-lg">
                  <div className="w-6 h-6 rounded-full bg-[#6566ee]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6566ee] stroke-[3]" />
                  </div>
                  <span>Viral Trend Integration Strategy</span>
                </li>
              </ul>
            </div>

            {/* Separate Div Box for the Mobile Mockup (Right Column) - Crisp Frosted Container */}
            <div className="lg:col-span-6 w-full rounded-[24px] sm:rounded-[32px] bg-white/85 backdrop-blur-md border border-white/90 shadow-sm pt-8 sm:pt-10 px-2 sm:px-4 pb-0 flex justify-center items-end overflow-hidden relative order-2 min-h-[460px] sm:min-h-[500px]">
              {/* EXACT SAME iPhone Chassis as HeroSection - Always visible */}
              <div className="relative z-25 w-[265px] sm:w-[285px] md:w-[300px] rounded-[48px] bg-black p-[5px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.15)] border-[4px] border-[#18181a] -mb-16 sm:-mb-20">
                {/* Inner Screen Canvas - Website Theme Subtle Gradient just like HeroSection */}
                <div className="relative rounded-[42px] overflow-hidden bg-gradient-to-b from-[#ebdce7] via-[#eae3fb] via-[#e5e1fc] to-[#faede5] text-neutral-900 flex flex-col pt-3 pb-3 shadow-inner">

                  {/* ZONE 1: TOP STATUS BAR */}
                  <div className="w-[92%] max-w-[250px] mx-auto flex items-center justify-between text-[11px] font-bold text-neutral-800 z-20 mb-2">
                    <span>9:41</span>

                    {/* Dynamic Island Notch */}
                    <div className="w-[86px] h-[23px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#111116] border border-neutral-800 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#0a0a14]" />
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#0d0d18] border border-neutral-800" />
                    </div>

                    <div className="flex items-center gap-1.5 text-xs">
                      <span>📶</span>
                      <div className="w-4.5 h-2.5 border border-neutral-800 rounded-sm p-0.5 flex items-center">
                        <div className="h-full w-full bg-neutral-900 rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* Service Video Showcase Div Box (clean with no overlays) */}
                  <div className="flex items-center justify-center w-full px-2.5 pt-1 pb-1">
                    <div
                      onClick={onNavigateToReels}
                      className="relative w-full max-w-[245px] aspect-[9/16] rounded-[22px] overflow-hidden shadow-xl border-[1.5px] border-white/90 bg-black cursor-pointer group"
                    >
                      <video
                        src={socialMarketingVid}
                        poster={socialMarketingThumb}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        </div>
      </div>
    </section>
  );
};
