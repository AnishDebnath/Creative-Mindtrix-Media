import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { CREATIVE_SERVICES, SERVICES_SECTION_HEADER } from '@/data/servicesData';

interface CreativeServicesSectionProps {
  onNavigateToReels?: () => void;
  onNavigateToImages?: () => void;
}

// ponytail: Duplicate 3x for zero-glitch infinite center loop with silent reset
const SLIDES = [...CREATIVE_SERVICES, ...CREATIVE_SERVICES, ...CREATIVE_SERVICES];

export const CreativeServicesSection: React.FC<CreativeServicesSectionProps> = ({
  onNavigateToReels,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Middle set starts at index = CREATIVE_SERVICES.length (8)
  const [currentIndex, setCurrentIndex] = useState(CREATIVE_SERVICES.length);
  const [isInstant, setIsInstant] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Responsive carousel dimensions
  const [containerWidth, setContainerWidth] = useState(1200);
  const [cardWidth, setCardWidth] = useState(920);
  const [gap, setGap] = useState(16);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const cWidth = containerRef.current.clientWidth;
        setContainerWidth(cWidth);

        let w = 920;
        if (window.innerWidth < 640) {
          w = Math.min(Math.round(cWidth * 0.88), 380);
        } else if (window.innerWidth < 768) {
          w = Math.round(cWidth * 0.82);
        } else if (window.innerWidth < 1024) {
          w = Math.round(cWidth * 0.72);
        } else if (window.innerWidth < 1440) {
          w = Math.min(Math.round(cWidth * 0.62), 880);
        } else {
          w = Math.min(Math.round(cWidth * 0.52), 960);
        }
        setCardWidth(w);
        setGap(window.innerWidth < 640 ? 12 : 18);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // ponytail: Exact formula to place active card dead-center in the viewport
  const offset = (containerWidth - cardWidth) / 2 - currentIndex * (cardWidth + gap);

  // ponytail: Silent warp when leaving middle set [total .. 2*total - 1]
  const handleAnimationComplete = () => {
    setIsTransitioning(false);
    const total = CREATIVE_SERVICES.length;
    if (currentIndex >= total * 2) {
      setIsInstant(true);
      setCurrentIndex((prev) => prev - total);
    } else if (currentIndex < total) {
      setIsInstant(true);
      setCurrentIndex((prev) => prev + total);
    }
  };

  useEffect(() => {
    if (isInstant) {
      const frame = requestAnimationFrame(() => {
        setIsInstant(false);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isInstant]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const activeIndex = currentIndex % CREATIVE_SERVICES.length;

  return (
    <section id="services" className="relative w-full bg-white py-20 sm:py-24 md:py-28 scroll-mt-6 overflow-hidden">
      <span id="stand-for" className="sr-only" />

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-gradient-to-r from-[#dcc6d5]/20 via-[#cfc1ee]/20 to-[#eda970]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Clean Section Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">

          {/* Left Column: Big 2-Line Headline in uniform solid color */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] font-black tracking-normal text-neutral-900 uppercase leading-[1.1]">
              WHAT WE <br />
              DELIVER
            </h2>
          </div>

          {/* Right Column: Description + Action CTA + Carousel Navigation Controls */}
          <div className="max-w-lg flex flex-col items-start gap-5">
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
              {SERVICES_SECTION_HEADER.description}
            </p>

            <div className="flex flex-wrap items-center justify-between w-full gap-4 pt-3 border-t border-neutral-100">
              <button
                onClick={onNavigateToReels}
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] hover:opacity-95 text-white font-display text-xs sm:text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-md shadow-[#3d2035]/25 border border-white/15 cursor-pointer whitespace-nowrap"
              >
                <span>{SERVICES_SECTION_HEADER.ctaText}</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#eda970]" />
              </button>

              {/* Navigation Controls: Slide Counter + Prev/Next Buttons */}
              <div className="flex items-center gap-3">
                {/* ponytail: clean, simple number counter */}
                <span className="text-sm sm:text-base font-medium text-neutral-500 select-none">
                  <span className="font-bold text-neutral-900">{String(activeIndex + 1).padStart(2, '0')}</span> / {String(CREATIVE_SERVICES.length).padStart(2, '0')}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous service card"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-300 hover:border-transparent bg-white hover:bg-gradient-to-br hover:from-[#2f182a] hover:via-[#3d2035] hover:to-[#542947] hover:text-white flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-xs text-neutral-800 hover:shadow-md hover:shadow-[#3d2035]/20"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next service card"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-300 hover:border-transparent bg-white hover:bg-gradient-to-br hover:from-[#2f182a] hover:via-[#3d2035] hover:to-[#542947] hover:text-white flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-xs text-neutral-800 hover:shadow-md hover:shadow-[#3d2035]/20"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Endless Centered Horizontal Cards Carousel */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden pt-4 pb-20 sm:pb-24"
      >
        <motion.div
          animate={{ x: offset }}
          transition={
            isInstant
              ? { duration: 0 }
              : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
          }
          onAnimationComplete={handleAnimationComplete}
          onPanEnd={(_, info) => {
            if (info.offset.x < -40) {
              handleNext();
            } else if (info.offset.x > 40) {
              handlePrev();
            }
          }}
          className="flex items-stretch select-none"
          style={{ gap: `${gap}px` }}
        >
          {SLIDES.map((service, idx) => {
            const isCenter = idx === currentIndex;
            // ponytail: only decode videos for visible neighbors to keep 60 FPS
            const isNearCenter = Math.abs(idx - currentIndex) <= 1;

            return (
              <div
                key={`${service.id}-${idx}`}
                onClick={() => {
                  if (idx !== currentIndex && !isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(idx);
                  }
                }}
                style={{ width: `${cardWidth}px` }}
                className={`shrink-0 rounded-[32px] sm:rounded-[44px] ${service.cardGradient} border ${service.borderColor} ${service.shadowClass} p-3 sm:p-4 lg:p-5 overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-center min-h-[520px] sm:min-h-[550px] lg:min-h-[560px] h-[520px] sm:h-[550px] lg:h-[560px] ${isCenter
                  ? 'shadow-xl z-10'
                  : 'shadow-md hover:shadow-lg z-0'
                  }`}
              >
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full">

                  {/* Service Details Column (Left Side) */}
                  <div className="lg:col-span-6 flex flex-col items-start justify-center p-4 sm:p-6 lg:p-8 h-full order-1">
                    {/* Pill Badge */}
                    <span className="inline-block px-3.5 py-1 rounded-full text-xs sm:text-[13px] font-bold tracking-wide bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] text-white border border-white/20 mb-3 shadow-sm shadow-[#3d2035]/15">
                      {service.badge}
                    </span>

                    {/* Main Service Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[34px] font-bold text-neutral-900 tracking-tight leading-[1.2] mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 text-sm sm:text-[15px] lg:text-base leading-relaxed mb-6 max-w-md font-normal">
                      {service.description}
                    </p>

                    {/* Features Checkmark List */}
                    <ul className="flex flex-col gap-3 sm:gap-3.5">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 sm:gap-3 text-neutral-800 font-medium text-sm sm:text-[15px]">
                          <div className="w-5 h-5 rounded-full bg-[#6566ee]/15 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-[#6566ee] stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Mockup Div Box (Right Side) */}
                  <div className="lg:col-span-6 w-full rounded-[24px] sm:rounded-[32px] bg-white/85 backdrop-blur-md border border-white/90 shadow-sm pt-8 sm:pt-10 px-2 sm:px-4 pb-0 flex justify-center items-end overflow-hidden relative h-full min-h-[460px] sm:min-h-[500px] order-2">
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

                        {/* Video Showcase Div Box */}
                        <div className="flex items-center justify-center w-full px-2.5 pt-1 pb-1">
                          <div
                            onClick={onNavigateToReels}
                            className="relative w-full max-w-[245px] aspect-[9/16] rounded-[22px] overflow-hidden shadow-xl border-[1.5px] border-white/90 bg-black cursor-pointer group"
                          >
                            {isNearCenter ? (
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
                            ) : (
                              <img
                                src={service.posterSrc}
                                alt={service.title}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="relative z-20 flex items-center justify-center gap-2 -mt-10 sm:-mt-12">
        {CREATIVE_SERVICES.map((service, i) => {
          const isActive = activeIndex === i;
          return (
            <button
              key={service.id}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(CREATIVE_SERVICES.length + i);
                }
              }}
              aria-label={`Go to ${service.title}`}
              className={`transition-all duration-300 cursor-pointer ${isActive
                ? 'w-8 h-2.5 rounded-full bg-gradient-to-r from-[#ed4f6c] via-[#a855f7] to-[#6566ee] shadow-xs'
                : 'w-2.5 h-2.5 rounded-full bg-neutral-300 hover:bg-neutral-500'
                }`}
            />
          );
        })}
      </div>
    </section>
  );
};

