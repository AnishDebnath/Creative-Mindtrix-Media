import React from 'react';
import { motion } from 'framer-motion';
import { getCloudinaryVideo, getCloudinaryVideoThumbnail, getCloudinaryImage } from '@/utils/cloudinary';

// Product images for the portfolio pill
const lipstickThumbImg = getCloudinaryImage('lipstick/Lipstick_advertisement_on_marble.jpg');
const facewashThumbImg = getCloudinaryImage('facewash/Skincare_advertisement_on_stone.jpg');
const perfumeThumbImg = getCloudinaryImage('women-perfume/Perfume_bottle_flat-lay_photograph.jpg');
const menPerfumeThumbImg = getCloudinaryImage('men-perfume/Creating_perfume_bottle_adv.jpg');

// Cloudinary Fast Videos for seamless autoplay
const rampwalkVid = getCloudinaryVideo('rampwalk.mp4', { optimize: true, quality: 'good', width: 480 });
const rampwalkThumb = getCloudinaryVideoThumbnail('rampwalk.mp4');

const lipstickVid = getCloudinaryVideo('lipstick.mp4', { optimize: true, quality: 'good', width: 480 });
const lipstickThumb = getCloudinaryVideoThumbnail('lipstick.mp4');

const menPerfumeVid = getCloudinaryVideo('men-perfume.mp4', { optimize: true, quality: 'good', width: 480 });
const menPerfumeThumb = getCloudinaryVideoThumbnail('men-perfume.mp4');

const facewashVid = getCloudinaryVideo('facewash.mp4', { optimize: true, quality: 'good', width: 480 });
const facewashThumb = getCloudinaryVideoThumbnail('facewash.mp4');

const nailArtVid = getCloudinaryVideo('nail-art.mp4', { optimize: true, quality: 'good', width: 480 });
const nailArtThumb = getCloudinaryVideoThumbnail('nail-art.mp4');

const cocaineVid = getCloudinaryVideo('cocaine.mp4', { optimize: true, quality: 'good', width: 480 });
const cocaineThumb = getCloudinaryVideoThumbnail('cocaine.mp4');

interface CommunitySectionProps {
  onOpenVideoChat?: () => void;
  onMeetCommunity?: () => void;
  onNavigateToReels?: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  onNavigateToReels
}) => {
  const emojis = ['👍', '❤️', '😂', '😮', '😢', '🙏'];

  return (
    <section id="reels" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-visible scroll-mt-6">
      <span id="community" className="sr-only" />
      {/* Top Header Row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12 sm:mb-16"
      >
        <div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-normal text-neutral-900 uppercase leading-[1.3]">
            THE MINDTRIX<br />AI REEL STAGE
          </h2>
        </div>

        <div className="max-w-md flex flex-col items-start gap-4">
          <p className="text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
            Scroll-stopping AI product video reels and UGC campaigns crafted for brands that demand fast growth and high conversion.
          </p>
          <button
            onClick={onNavigateToReels}
            className="px-7 py-3 bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] hover:opacity-95 text-neutral-900 font-display text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-sm cursor-pointer"
          >
            EXPLORE ALL REELS & VIDEOS
          </button>
        </div>
      </motion.div>

      {/* 3D Isometric Perspective Stage in 16:9 Ratio */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative w-full max-w-[940px] mx-auto py-12 sm:py-16 flex items-center justify-center [perspective:1600px] overflow-visible"
      >

        {/* Tilted 3D Stage */}
        <div
          className="relative w-full aspect-[16/9] transition-transform duration-500 ease-out"
          style={{
            transform: 'rotateX(22deg) rotateY(-16deg) rotateZ(6deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* 1. Rear Card: Same Size (16:9), shifted further up with 4-Color Gradient */}
          <div
            className="absolute inset-0 w-full h-full aspect-[16/9] bg-gradient-to-tr from-[#dcc6d5] via-[#8f73cc] via-[#6566ee] to-[#eda970] rounded-[36px] sm:rounded-[44px] shadow-[0_30px_70px_-10px_rgba(143,115,204,0.3)] border-[2.5px] border-white pointer-events-none overflow-hidden"
            style={{
              transform: 'translate3d(44px, -64px, -30px)'
            }}
          >
            {/* Bottom Fade */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/70 to-transparent rounded-b-[36px] sm:rounded-b-[44px]" />
          </div>

          {/* 2. Main Front Pure White Board in 16:9 Ratio */}
          <div className="relative w-full h-full aspect-[16/9] bg-white rounded-[36px] sm:rounded-[44px] p-3 sm:p-4 md:p-5 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.24)] border border-white flex flex-col justify-between">

            {/* Top-Right Floating Badge with 4-Color Gradient */}
            <div
              className="absolute -top-3.5 right-6 sm:right-12 z-30 px-4 sm:px-5 py-1 bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] text-[#3d1e06] font-display text-base sm:text-lg font-bold rounded-full shadow-md border border-white/90"
              style={{ transform: 'rotate(15deg)' }}
            >
              AI Product Reels
            </div>

            {/* Seamless 4-Column Balanced Grid */}
            <div className="grid grid-cols-12 gap-2.5 sm:gap-3.5 h-full w-full">

              {/* COLUMN 1: Full-Height 9:16 Vertical Portrait (Span 3) */}
              <div
                onClick={onNavigateToReels}
                className="col-span-3 h-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
              >
                <video
                  src={rampwalkVid}
                  poster={rampwalkThumb}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* COLUMN 2 & 3: Center Grid with 4 Square 1:1 Videos (Span 6) */}
              <div className="col-span-6 h-full flex flex-col justify-between gap-2.5 sm:gap-3.5 relative">

                {/* Top Center: 2 Side-by-Side 1:1 Square Cards */}
                <div className="flex items-center justify-between gap-2.5 sm:gap-3.5 flex-1 min-h-0">
                  {/* Top-Left Square Card */}
                  <div
                    onClick={onNavigateToReels}
                    className="w-1/2 h-full aspect-square rounded-[16px] sm:rounded-[20px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
                  >
                    <video
                      src={lipstickVid}
                      poster={lipstickThumb}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Top-Right Square Card */}
                  <div
                    onClick={onNavigateToReels}
                    className="w-1/2 h-full aspect-square rounded-[16px] sm:rounded-[20px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
                  >
                    <video
                      src={menPerfumeVid}
                      poster={menPerfumeThumb}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating Larger Reaction Bar Centered on Seam */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                  <div className="pointer-events-auto bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_12px_30px_-5px_rgba(0,0,0,0.25)] border border-white flex items-center gap-2 sm:gap-2.5">
                    {emojis.map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        className="inline-flex items-center justify-center text-lg sm:text-xl hover:scale-135 active:scale-95 transition-transform duration-150 cursor-pointer origin-center"
                        title={emoji}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bottom Center: 2 Side-by-Side 1:1 Square Cards */}
                <div className="flex items-center justify-between gap-2.5 sm:gap-3.5 flex-1 min-h-0">
                  {/* Bottom-Left Square Card */}
                  <div
                    onClick={onNavigateToReels}
                    className="w-1/2 h-full aspect-square rounded-[16px] sm:rounded-[20px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
                  >
                    <video
                      src={facewashVid}
                      poster={facewashThumb}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Bottom-Right Square Card */}
                  <div
                    onClick={onNavigateToReels}
                    className="w-1/2 h-full aspect-square rounded-[16px] sm:rounded-[20px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
                  >
                    <video
                      src={nailArtVid}
                      poster={nailArtThumb}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

              </div>

              {/* COLUMN 4: Full-Height 9:16 Vertical Portrait (Span 3) */}
              <div
                onClick={onNavigateToReels}
                className="col-span-3 h-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
              >
                <video
                  src={cocaineVid}
                  poster={cocaineThumb}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>

            {/* Bottom Fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18%] z-[35] bg-gradient-to-t from-white via-white/70 to-transparent rounded-b-[36px] sm:rounded-b-[44px]" />
          </div>

          {/* 3. Floating Video Chat Pill Bar */}
          <div
            className="absolute -bottom-8 sm:-bottom-12 left-4 sm:left-30 z-40"
            style={{ transform: 'translateZ(45px)' }}
          >
            <button
              onClick={onNavigateToReels}
              className="flex items-center gap-2.5 sm:gap-3 bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] hover:opacity-95 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_20px_40px_-5px_rgba(143,115,204,0.35)] border border-white/90 transition-all active:scale-95 cursor-pointer"
            >
              {/* Overlapping Mini Product Images */}
              <div className="flex items-center -space-x-2">
                {[
                  { id: 'p1', src: lipstickThumbImg, alt: 'Cosmetics' },
                  { id: 'p2', src: facewashThumbImg, alt: 'Skincare' },
                  { id: 'p3', src: perfumeThumbImg, alt: 'Perfume' },
                  { id: 'p4', src: menPerfumeThumbImg, alt: 'Cologne' },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="w-6 sm:w-7 h-6 sm:h-7 rounded-full ring-2 ring-white overflow-hidden shadow-sm bg-neutral-900"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Action Text */}
              <span className="font-display text-xs sm:text-[13px] font-black tracking-wider text-neutral-900 uppercase pr-1">
                VIEW REEL PORTFOLIO
              </span>
            </button>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
