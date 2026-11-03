import React from 'react';
import { motion } from 'framer-motion';

// Authentic model avatars from assets for the 100k+ Followers pill
import { IMAGES } from '@/data/images';

const avatar1 = IMAGES['fashion-model-studio-pose'].src;
const avatar2 = IMAGES['fashion-confident-red-tee'].src;
const avatar3 = IMAGES['jewelry-elegant-necklace-portrait'].src;

// Crisp, lightweight inline SVGs matching the reference image
const CashIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-emerald-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M6 12h.01M18 12h.01" />
  </svg>
);

const HeartIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#ed4f6c]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ChatIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#3d2035]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <line x1="8" y1="12" x2="8.01" y2="12" strokeWidth="2.5" />
    <line x1="12" y1="12" x2="12.01" y2="12" strokeWidth="2.5" />
    <line x1="16" y1="12" x2="16.01" y2="12" strokeWidth="2.5" />
  </svg>
);

const LinkIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#d97736]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export const AudienceResultsSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-14 md:py-16 overflow-hidden bg-white">
      {/* Soft Ethereal Ambient Glow in Website Theme Palette */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
        <div
          className="w-[600px] sm:w-[850px] md:w-[1050px] h-[350px] sm:h-[450px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(235,220,231,0.55) 0%, rgba(234,227,251,0.4) 40%, rgba(250,237,229,0.3) 70%, rgba(255,255,255,0) 100%)',
          }}
        />
      </div>

      {/* Main Orbital Content Container */}
      <div className="relative max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="relative min-h-[300px] sm:min-h-[380px] md:min-h-[460px] flex items-center justify-center">

          {/* 1. TOP CENTER: 100k+ Followers with 3 Overlapping Avatars */}
          <motion.div
            initial={{ opacity: 0, y: -25, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute -top-4 xs:-top-3 sm:top-2 md:top-4 left-1/2 -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2.5 bg-gradient-to-br from-[#2f182a] via-[#3d2035] to-[#542947] text-white rounded-full shadow-[0_16px_36px_-6px_rgba(61,32,53,0.35),0_3px_10px_rgba(61,32,53,0.15)] border border-white/20 cursor-pointer select-none transition-shadow hover:shadow-[0_20px_42px_-6px_rgba(61,32,53,0.5)]"
            >
              {/* Overlapping Avatars */}
              <div className="flex items-center -space-x-2">
                <img
                  src={avatar1}
                  alt="Follower avatar 1"
                  loading="lazy"
                  decoding="async"
                  className="w-5 h-5 sm:w-7 sm:h-7 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <img
                  src={avatar2}
                  alt="Follower avatar 2"
                  loading="lazy"
                  decoding="async"
                  className="w-5 h-5 sm:w-7 sm:h-7 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <img
                  src={avatar3}
                  alt="Follower avatar 3"
                  loading="lazy"
                  decoding="async"
                  className="w-5 h-5 sm:w-7 sm:h-7 rounded-full object-cover border-2 border-white shadow-xs"
                />
              </div>
              <span className="font-sans font-bold text-[11px] sm:text-sm text-white tracking-tight whitespace-nowrap">
                100k+ Followers
              </span>
            </motion.div>
          </motion.div>

          {/* 2. TOP LEFT: $80K Sales */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="absolute top-12 xs:top-14 sm:top-8 md:top-12 left-11 xs:left-14 sm:left-6 md:left-12 lg:left-16 z-20"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              whileHover={{ scale: 1.08, rotate: 0 }}
              className="flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-5 py-2 sm:py-3 bg-white/95 backdrop-blur-md rounded-full shadow-[0_16px_36px_-6px_rgba(61,32,53,0.08),0_3px_10px_rgba(61,32,53,0.03)] border border-[#ebdce7] transform -rotate-12 cursor-pointer select-none transition-shadow hover:shadow-[0_20px_42px_-6px_rgba(0,0,0,0.16)]"
            >
              <CashIcon />
              <span className="font-sans font-bold text-[11px] sm:text-sm text-neutral-800 tracking-tight whitespace-nowrap">
                $80K Sales
              </span>
            </motion.div>
          </motion.div>

          {/* 3. TOP RIGHT: 500k+ Likes */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-12 xs:top-14 sm:top-8 md:top-12 right-11 xs:right-14 sm:right-6 md:right-12 lg:right-16 z-20"
          >
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              whileHover={{ scale: 1.08, rotate: 0 }}
              className="flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-5 py-2 sm:py-3 bg-white/95 backdrop-blur-md rounded-full shadow-[0_16px_36px_-6px_rgba(61,32,53,0.08),0_3px_10px_rgba(61,32,53,0.03)] border border-[#ebdce7] transform rotate-12 cursor-pointer select-none transition-shadow hover:shadow-[0_20px_42px_-6px_rgba(0,0,0,0.16)]"
            >
              <HeartIcon />
              <span className="font-sans font-bold text-[11px] sm:text-sm text-neutral-800 tracking-tight whitespace-nowrap">
                500k+ Likes
              </span>
            </motion.div>
          </motion.div>

          {/* 4. CENTER HEADLINE: "And We Focus On Results Your Audience Actually Responds To." */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="relative z-10 text-center px-3 sm:px-4 max-w-5xl mx-auto py-12 sm:py-16 md:py-24"
          >
            <h2 className="font-sans text-xl sm:text-3xl md:text-5xl lg:text-[46px] xl:text-[50px] font-extrabold tracking-tight text-neutral-900 leading-tight md:leading-[1.16]">
              And We Focus On{' '}
              <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
                Results
              </span>{' '}
              Your
              <br className="hidden sm:inline" />{' '}
              Audience Actually Responds To.
            </h2>
          </motion.div>

          {/* 5. BOTTOM LEFT: 10k Replies */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="absolute bottom-6 xs:bottom-8 sm:bottom-1 md:bottom-4 left-[16%] xs:left-[19%] sm:left-[16%] md:left-[22%] lg:left-[26%] z-20"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.1, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              whileHover={{ scale: 1.08, rotate: 0 }}
              className="flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-5 py-2 sm:py-3 bg-white/95 backdrop-blur-md rounded-full shadow-[0_16px_36px_-6px_rgba(61,32,53,0.08),0_3px_10px_rgba(61,32,53,0.03)] border border-[#ebdce7] transform rotate-8 cursor-pointer select-none transition-shadow hover:shadow-[0_20px_42px_-6px_rgba(0,0,0,0.16)]"
            >
              <ChatIcon />
              <span className="font-sans font-bold text-[11px] sm:text-sm text-neutral-800 tracking-tight whitespace-nowrap">
                10k Replies
              </span>
            </motion.div>
          </motion.div>

          {/* 6. BOTTOM RIGHT: 70k Clicks */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-6 xs:bottom-8 sm:bottom-1 md:bottom-4 right-[16%] xs:right-[19%] sm:right-[16%] md:right-[22%] lg:right-[26%] z-20"
          >
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.7, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
              whileHover={{ scale: 1.08, rotate: 0 }}
              className="flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-5 py-2 sm:py-3 bg-white/95 backdrop-blur-md rounded-full shadow-[0_16px_36px_-6px_rgba(61,32,53,0.08),0_3px_10px_rgba(61,32,53,0.03)] border border-[#ebdce7] transform -rotate-8 cursor-pointer select-none transition-shadow hover:shadow-[0_20px_42px_-6px_rgba(0,0,0,0.16)]"
            >
              <LinkIcon />
              <span className="font-sans font-bold text-[11px] sm:text-sm text-neutral-800 tracking-tight whitespace-nowrap">
                70k Clicks
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
