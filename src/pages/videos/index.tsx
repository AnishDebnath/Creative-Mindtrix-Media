import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowUpRight, Check, ChevronLeft, ChevronRight, Heart, MessageCircle, Repeat2, Send, MoreHorizontal } from 'lucide-react';
import mindtrixLogo from '@/assets/Mindtrix-Media-Logo.jpeg';
import { getLocalVideoFallback } from '@/utils/cloudinary';
import {
  SHOWCASE_GRID_VIDEOS as VIDEO_ITEMS,
  VIDEO_CATEGORIES as CATEGORIES,
  TOP_HERO_VIDEOS as HERO_FAN_REELS,
  type ShowcaseVideoItem as VideoItem,
} from '@/data/videos';

interface ReelCardProps {
  vid: VideoItem;
  onSelect: (vid: VideoItem) => void;
}

const ReelCard: React.FC<ReelCardProps> = ({ vid, onSelect }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Start with ultra-light low-quality stream for 0ms instant startup without lag
  const [currentSrc, setCurrentSrc] = useState<string>(vid.streamSrc);
  const [isVisible, setIsVisible] = useState(false);
  const isUpgradedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // IntersectionObserver: lazy load videos slightly before viewport and pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (!video) return;

          if (entry.isIntersecting) {
            setIsVisible(true);
            video.play().catch(() => {});

            // Progressively upgrade to crisp high-res quality seamlessly while preserving playback time
            if (!isUpgradedRef.current && vid.highResSrc && vid.highResSrc !== currentSrc) {
              const upgradeTimer = setTimeout(() => {
                const highResVideo = document.createElement('video');
                highResVideo.preload = 'auto';
                highResVideo.src = vid.highResSrc;
                highResVideo.oncanplay = () => {
                  if (videoRef.current) {
                    const currentTime = videoRef.current.currentTime;
                    setCurrentSrc(vid.highResSrc);
                    // seamless time sync on next frame
                    requestAnimationFrame(() => {
                      if (videoRef.current) {
                        videoRef.current.currentTime = currentTime;
                        videoRef.current.play().catch(() => {});
                      }
                    });
                    isUpgradedRef.current = true;
                  }
                };
              }, 1200);

              return () => clearTimeout(upgradeTimer);
            }
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: '150px 0px', threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [vid.highResSrc, currentSrc]);

  return (
    <div
      ref={containerRef}
      onClick={() => onSelect(vid)}
      className="group relative aspect-[9/16] w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-950 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.25)] cursor-pointer transform hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.4)] transition-all duration-300"
    >
      {/* Direct Cloudinary video playback with middle frame poster thumbnail */}
      <video
        ref={videoRef}
        src={isVisible ? currentSrc : ''}
        poster={vid.image}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onError={(e) => {
          // If remote stream fails, seamlessly fall back to base or local asset
          const fallback = getLocalVideoFallback(vid.videoSrc);
          if (fallback && e.currentTarget.src !== fallback) {
            e.currentTarget.src = fallback;
            e.currentTarget.play().catch(() => {});
          }
        }}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Bottom Vignette Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 via-50% to-transparent pointer-events-none" />

      {/* Subtle Hover Play Indicator */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/70 flex items-center justify-center text-white shadow-xl scale-90 group-hover:scale-100 transition-transform">
          <Play className="w-5 h-5 fill-white ml-0.5 text-white drop-shadow" />
        </div>
      </div>

      {/* Right-Side Vertical Social Action Bar matching reference screenshot */}
      <div className="absolute right-2 sm:right-2.5 bottom-3 sm:bottom-3.5 z-20 flex flex-col items-center gap-2.5 sm:gap-3 select-none pointer-events-auto">
        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex flex-col items-center text-white group/btn cursor-pointer transition-transform active:scale-90"
        >
          <Heart className="w-4.5 h-4.5 sm:w-5 sm:h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] stroke-[1.8] group-hover/btn:text-rose-400 group-hover/btn:scale-110 transition-all" />
          <span className="text-[9px] sm:text-[10px] font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mt-0.5 leading-none">5,242</span>
        </button>

        {/* Comment Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex flex-col items-center text-white group/btn cursor-pointer transition-transform active:scale-90"
        >
          <MessageCircle className="w-4.5 h-4.5 sm:w-5 sm:h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] stroke-[1.8] group-hover/btn:scale-110 transition-all" />
          <span className="text-[9px] sm:text-[10px] font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mt-0.5 leading-none">102</span>
        </button>

        {/* Repost Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex flex-col items-center text-white group/btn cursor-pointer transition-transform active:scale-90"
        >
          <Repeat2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] stroke-[1.8] group-hover/btn:scale-110 transition-all" />
          <span className="text-[9px] sm:text-[10px] font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mt-0.5 leading-none">350</span>
        </button>

        {/* Share / Direct Message Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex flex-col items-center text-white group/btn cursor-pointer transition-transform active:scale-90"
        >
          <Send className="w-4 h-4 sm:w-4.5 sm:h-4.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] stroke-[1.8] group-hover/btn:scale-110 transition-all -rotate-12" />
          <span className="text-[9px] sm:text-[10px] font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mt-0.5 leading-none">10.8K</span>
        </button>

        {/* More Options (...) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="text-white hover:opacity-80 transition-opacity p-0.5 cursor-pointer -my-0.5"
        >
          <MoreHorizontal className="w-4 h-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" />
        </button>

        {/* Bottom Spinning Audio Album Thumbnail */}
        <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-[5px] overflow-hidden ring-1 ring-white/70 shadow-md bg-neutral-900 shrink-0 mt-0.5">
          <img
            src={vid.avatar || mindtrixLogo}
            alt="Audio track"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Content: Creator Handle + UGC + Follow + Caption */}
      <div className="absolute inset-x-0 bottom-0 pr-12 pl-3 pb-3 sm:pb-3.5 flex flex-col items-start gap-1 z-10 select-none text-left pointer-events-none">
        {/* Creator Info Row */}
        <div className="flex items-center gap-1.5 max-w-full flex-wrap pointer-events-auto">
          {/* Avatar */}
          <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full overflow-hidden ring-1 ring-white/80 shadow-sm shrink-0 bg-neutral-800">
            <img
              src={vid.avatar || mindtrixLogo}
              alt={vid.creator || 'Mindtrix Media'}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <span className="text-white font-bold text-[11px] sm:text-xs tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] truncate">
            {vid.creator || 'Mindtrix Media'}
          </span>

          {/* Verified Check Badge */}
          <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white text-neutral-900 shrink-0 shadow-xs">
            <Check className="w-2 h-2 text-neutral-900 stroke-[3.5]" />
          </span>

          {/* Follow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="px-1.5 py-0.5 rounded-[4px] border border-white/60 bg-black/25 hover:bg-white hover:text-neutral-950 text-white text-[9px] sm:text-[10px] font-bold tracking-tight backdrop-blur-xs transition-colors cursor-pointer leading-none"
          >
            Follow
          </button>
        </div>

        {/* Caption */}
        <p className="text-white/95 text-[10px] sm:text-[11px] font-normal leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] line-clamp-2 pr-1">
          {vid.quote || 'Creators aren’t lucky. They’re trained.'}
        </p>
      </div>
    </div>
  );
};

interface ReelsPageProps {
  onBackToHome?: () => void;
  onNavigateToImages?: () => void;
}

export const ReelsPage: React.FC<ReelsPageProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  // Lock background scroll when video modal is open
  useEffect(() => {
    if (activeVideo) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [activeVideo]);

  const filteredList = selectedCategory === 'All'
    ? VIDEO_ITEMS
    : VIDEO_ITEMS.filter(v => v.category === selectedCategory);

  return (
    <div className="relative w-full pt-4 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      
      {/* Background Giant Watermark Typography: MINDTRIX */}
      <div className="absolute top-0 inset-x-0 flex items-start justify-center pointer-events-none select-none z-0 opacity-20 overflow-hidden">
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
            fill="#dcc6d5"
            fontFamily="'Anton', 'Oswald', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="320"
            letterSpacing="8"
          >
            MINDTRIX
          </text>
        </svg>
      </div>

      {/* Header Section matching website brand theme */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 pt-4 mb-10 sm:mb-12"
      >
        <div className="bg-gradient-to-b from-[#f6eee7] via-[#f1e5df] to-[#ebdbe7] rounded-[24px] sm:rounded-[32px] pt-7 sm:pt-9 px-6 sm:px-10 pb-0 shadow-[0_20px_50px_-20px_rgba(220,198,213,0.45)] border border-[#e8d5df]/70 overflow-hidden flex flex-col justify-between">
          
          {/* Top Header Row: 2-column balanced layout (Headline on left, description & CTA on right) */}
          <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 pb-7 border-b border-[#ddcad6]/60">
            {/* Left Column: Tag + Headline */}
            <div className="max-w-xl flex flex-col items-start gap-3.5">
              <div className="flex items-center gap-2 px-3 py-1 bg-[#dcc6d5]/30 text-[#3d2035] text-xs font-bold rounded-full border border-[#dcc6d5]/50">
                <span className="w-2 h-2 rounded-full bg-[#eda970] animate-pulse" />
                <span>AI Video Ads & Reels →</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-normal text-neutral-900 uppercase leading-[1.05]">
                AI Video Ads<br />
                Made to Convert
              </h2>
            </div>

            {/* Right Column: Clean description + Action Button filling the space naturally */}
            <div className="max-w-md flex flex-col items-start md:items-end gap-4 shrink-0">
              <p className="text-neutral-800 text-sm sm:text-base leading-relaxed font-normal md:text-right">
                9:16 vertical video reels, 3D product animations, and short video ads made for Instagram, TikTok, and YouTube.
              </p>

              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] hover:opacity-95 text-white font-display text-xs sm:text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-md shadow-[#3d2035]/25 border border-white/15 inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>Book a call</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>


          </div>

          {/* Bottom Side: Fanned-out Cards emerging from bottom edge in 9:16 vertical reels ratio */}
          <div className="relative z-10 w-full h-[230px] sm:h-[280px] md:h-[330px] lg:h-[360px] flex justify-center items-end pointer-events-none select-none px-2 sm:px-4">
            <div className="relative flex items-end justify-center w-full max-w-[1040px] h-full">
              
              {/* Card 1: Far Left (-16deg, 9:16 aspect ratio) */}
              <div
                className="absolute pointer-events-auto w-[115px] sm:w-[150px] md:w-[180px] lg:w-[200px] aspect-[9/16] rounded-[16px] sm:rounded-[22px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.35)] bg-neutral-900 transition-transform duration-300 hover:-translate-y-3"
                style={{
                  transform: 'translateX(-155%) translateY(32%) rotate(-16deg)',
                  zIndex: 1
                }}
              >
                <video
                  src={HERO_FAN_REELS[0].src}
                  poster={HERO_FAN_REELS[0].poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card 2: Mid Left (-8deg, 9:16 aspect ratio) */}
              <div
                className="absolute pointer-events-auto w-[125px] sm:w-[165px] md:w-[195px] lg:w-[215px] aspect-[9/16] rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.35)] bg-neutral-900 transition-transform duration-300 hover:-translate-y-3"
                style={{
                  transform: 'translateX(-78%) translateY(24%) rotate(-8deg)',
                  zIndex: 2
                }}
              >
                <video
                  src={HERO_FAN_REELS[1].src}
                  poster={HERO_FAN_REELS[1].poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card 3: Center Dominant Card (0deg, 9:16 aspect ratio) */}
              <div
                className="absolute pointer-events-auto w-[135px] sm:w-[175px] md:w-[210px] lg:w-[230px] aspect-[9/16] rounded-[20px] sm:rounded-[26px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.4)] bg-neutral-900 transition-transform duration-300 hover:-translate-y-3"
                style={{
                  transform: 'translateX(0%) translateY(16%) rotate(0deg)',
                  zIndex: 5
                }}
              >
                <video
                  src={HERO_FAN_REELS[2].src}
                  poster={HERO_FAN_REELS[2].poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card 4: Mid Right (+8deg, 9:16 aspect ratio) */}
              <div
                className="absolute pointer-events-auto w-[125px] sm:w-[165px] md:w-[195px] lg:w-[215px] aspect-[9/16] rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.35)] bg-neutral-900 transition-transform duration-300 hover:-translate-y-3"
                style={{
                  transform: 'translateX(78%) translateY(24%) rotate(8deg)',
                  zIndex: 2
                }}
              >
                <video
                  src={HERO_FAN_REELS[3].src}
                  poster={HERO_FAN_REELS[3].poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card 5: Far Right (+16deg, 9:16 aspect ratio) */}
              <div
                className="absolute pointer-events-auto w-[115px] sm:w-[150px] md:w-[180px] lg:w-[200px] aspect-[9/16] rounded-[16px] sm:rounded-[22px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.35)] bg-neutral-900 transition-transform duration-300 hover:-translate-y-3"
                style={{
                  transform: 'translateX(155%) translateY(32%) rotate(16deg)',
                  zIndex: 1
                }}
              >
                <video
                  src={HERO_FAN_REELS[4].src}
                  poster={HERO_FAN_REELS[4].poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </motion.div>

      {/* Single-Div Segmented Category Bar with Framer Motion Animated Indicator & Smooth Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="relative z-20 flex justify-center mb-12 px-2"
      >
        <div className="inline-flex items-center p-1 sm:p-1.5 bg-[#f5ecf2]/80 backdrop-blur-md rounded-full border border-[#e8d5df] shadow-[0_4px_20px_-4px_rgba(220,198,213,0.5)] max-w-full overflow-x-auto scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-[13px] tracking-wide transition-colors duration-200 cursor-pointer select-none whitespace-nowrap ${
                  isActive
                    ? 'text-neutral-900 font-bold'
                    : 'text-[#6b4c63] hover:text-neutral-900 font-medium'
                }`}
              >
                {/* Framer-Motion Animated Pill Slider */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#eda970] rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* ALL VIDEOS IN UNIFORM 9:16 RATIO FORMAT WITH SMOOTH REORDERING */}
      <div className="relative z-10 mb-16">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredList.map((vid) => (
              <motion.div
                key={vid.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <ReelCard vid={vid} onSelect={setActiveVideo} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>



      {/* Clean Interactive Video Modal with real video playback & Framer Motion smooth entrance */}
      {/* Clean Interactive Video Modal with real video playback & Framer Motion smooth entrance */}
      <AnimatePresence>
        {activeVideo && (() => {
          const currentIndex = filteredList.findIndex(v => v.id === activeVideo.id);
          const handlePrev = (e: React.MouseEvent) => {
            e.stopPropagation();
            if (currentIndex !== -1) {
              const prevIdx = (currentIndex - 1 + filteredList.length) % filteredList.length;
              setActiveVideo(filteredList[prevIdx]);
            }
          };
          const handleNext = (e: React.MouseEvent) => {
            e.stopPropagation();
            if (currentIndex !== -1) {
              const nextIdx = (currentIndex + 1) % filteredList.length;
              setActiveVideo(filteredList[nextIdx]);
            }
          };

          return (
            <motion.div
              key="video-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setActiveVideo(null)}
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-5 right-5 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-6 md:left-10 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105 active:scale-95"
                title="Previous Video"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-6 md:right-10 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105 active:scale-95"
                title="Next Video"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <motion.div
                key={`video-modal-container-${activeVideo.id}`}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ type: 'spring', damping: 28, stiffness: 350 }}
                className="relative max-w-sm sm:max-w-md w-full max-h-[90vh] my-auto overflow-hidden rounded-[28px] sm:rounded-[32px] shadow-2xl bg-black border border-white/10 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[9/16] w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-black flex items-center justify-center">
                  <video
                    key={activeVideo.id}
                    src={activeVideo.videoSrc}
                    poster={activeVideo.image}
                    autoPlay
                    controls
                    controlsList="nofullscreen nodownload noremoteplayback"
                    disablePictureInPicture
                    playsInline
                    onError={(e) => {
                      const fallback = getLocalVideoFallback(activeVideo.videoSrc);
                      if (fallback && e.currentTarget.src !== fallback) {
                        e.currentTarget.src = fallback;
                        e.currentTarget.play().catch(() => {});
                      }
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

    </div>
  );
};
