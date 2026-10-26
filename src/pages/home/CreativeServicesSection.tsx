import React from 'react';
import { Check } from 'lucide-react';
import { CREATIVE_SERVICES, SERVICES_SECTION_HEADER } from '@/data/servicesData';

interface CreativeServicesSectionProps {
  onNavigateToReels?: () => void;
  onNavigateToImages?: () => void;
}

export const CreativeServicesSection: React.FC<CreativeServicesSectionProps> = ({
  onNavigateToReels,
}) => {
  return (
    <section id="services" className="w-full bg-white py-24 sm:py-28 px-4 sm:px-6 lg:px-8 scroll-mt-6">
      <span id="stand-for" className="sr-only" />
      <div className="max-w-6xl mx-auto">

        {/* Top Header Row matching other section headers in the website system */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-14 sm:mb-16">
          {/* Left Headline in a single line */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] font-black tracking-normal text-neutral-900 uppercase leading-none whitespace-nowrap">
              {SERVICES_SECTION_HEADER.title}
            </h2>
          </div>

          {/* Right Description & Action Button in site palette */}
          <div className="max-w-md flex flex-col items-start gap-4">
            <p className="text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
              {SERVICES_SECTION_HEADER.description}
            </p>
            <button
              onClick={onNavigateToReels}
              className="px-7 py-3 bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] hover:opacity-95 text-neutral-900 font-display text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-sm cursor-pointer whitespace-nowrap"
            >
              {SERVICES_SECTION_HEADER.ctaText}
            </button>
          </div>
        </div>

        {/* Stacking Cards Scroll System (driven by servicesData) */}
        <div className="relative flex flex-col gap-12 sm:gap-16 pb-16">
          {CREATIVE_SERVICES.map((service) => (
            <div
              key={service.id}
              className={`${service.stickyTopClass} w-full rounded-[32px] sm:rounded-[44px] ${service.cardGradient} border ${service.borderColor} ${service.shadowClass} p-3 sm:p-4 lg:p-5 overflow-hidden transition-all duration-300`}
            >
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Separate Div Box for the Mobile Mockup */}
                <div
                  className={`lg:col-span-6 w-full rounded-[24px] sm:rounded-[32px] bg-white/85 backdrop-blur-md border border-white/90 shadow-sm pt-8 sm:pt-10 px-2 sm:px-4 pb-0 flex justify-center items-end overflow-hidden relative min-h-[460px] sm:min-h-[500px] ${
                    service.phoneAlignment === 'left' ? 'order-2 lg:order-1' : 'order-2'
                  }`}
                >
                  {/* EXACT SAME iPhone Chassis as HeroSection */}
                  <div className="relative z-25 w-[265px] sm:w-[285px] md:w-[300px] rounded-[48px] bg-black p-[5px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.15)] border-[4px] border-[#18181a] -mb-16 sm:-mb-20">
                    {/* Inner Screen Canvas */}
                    <div className="relative rounded-[42px] overflow-hidden bg-gradient-to-b from-[#ebdce7] via-[#eae3fb] via-[#e5e1fc] to-[#faede5] text-neutral-900 flex flex-col pt-3 pb-3 shadow-inner">
                      
                      {/* Top Status Bar (Dynamic Island, 9:41, signal, battery) */}
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

                      {/* Video Showcase Div Box (clean with no overlays) */}
                      <div className="flex items-center justify-center w-full px-2.5 pt-1 pb-1">
                        <div
                          onClick={onNavigateToReels}
                          className="relative w-full max-w-[245px] aspect-[9/16] rounded-[22px] overflow-hidden shadow-xl border-[1.5px] border-white/90 bg-black cursor-pointer group"
                        >
                          <video
                            src={service.videoSrc}
                            poster={service.posterSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Service Details Column */}
                <div
                  className={`lg:col-span-6 flex flex-col items-start justify-center p-4 sm:p-6 lg:p-8 ${
                    service.phoneAlignment === 'left' ? 'order-1 lg:order-2' : 'order-1'
                  }`}
                >
                  {/* Pill Badge */}
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] text-[#3d2035] border border-white/80 mb-4 shadow-2xs">
                    {service.badge}
                  </span>

                  {/* Main Service Title */}
                  <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-neutral-900 tracking-tight leading-tight mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-700 text-base sm:text-[17px] leading-relaxed mb-8 max-w-md font-normal">
                    {service.description}
                  </p>

                  {/* Features Checkmark List */}
                  <ul className="flex flex-col gap-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-neutral-900 font-medium text-base sm:text-lg">
                        <div className="w-6 h-6 rounded-full bg-[#6566ee]/15 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#6566ee] stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
