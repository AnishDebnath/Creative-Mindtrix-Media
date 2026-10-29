import React from 'react';
import { motion } from 'framer-motion';

// ponytail: lightweight crisp SVGs for the 5 social media platforms matching the footer
const YouTubeIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 overflow-visible" fill="currentColor">
    <path
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
      fill="#FF0000"
      stroke="#FFFFFF"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF" />
  </svg>
);

const XTwitterIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#FFFFFF" />
  </svg>
);

const LinkedInIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.39 9.74v-8.37H5.07v8.37h2.78z" fill="#FFFFFF" />
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#FFFFFF" />
  </svg>
);

const InstagramIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const SocialPlatformsSection: React.FC = () => {
  return (
    <section className="relative w-full pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-white">
      {/* Soft Ethereal Website Theme Ambient Glow in Background */}
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
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative min-h-[340px] sm:min-h-[400px] md:min-h-[460px] flex items-center justify-center">

          {/* 1. TOP CENTER: YouTube */}
          <motion.div
            initial={{ opacity: 0, y: -25, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute -top-2 sm:top-2 md:top-4 left-1/2 -translate-x-1/2 z-20"
          >
            <motion.a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.12, rotate: 0 }}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-[86px] md:h-[86px] rounded-[22px] sm:rounded-[26px] md:rounded-[28px] bg-[#FF0000] flex items-center justify-center shadow-[0_20px_45px_-8px_rgba(255,0,0,0.55)] border border-white/30 transform -rotate-2 cursor-pointer transition-shadow hover:shadow-[0_24px_50px_-6px_rgba(255,0,0,0.7)] block"
              title="YouTube"
            >
              <YouTubeIcon />
            </motion.a>
          </motion.div>

          {/* 2. TOP LEFT: X (Twitter) */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="absolute top-6 sm:top-10 md:top-12 left-2 sm:left-8 md:left-14 lg:left-20 z-20"
          >
            <motion.a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              whileHover={{ scale: 1.12, rotate: 0 }}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-[86px] md:h-[86px] rounded-[22px] sm:rounded-[26px] md:rounded-[28px] bg-black flex items-center justify-center shadow-[0_20px_45px_-8px_rgba(0,0,0,0.45)] border border-white/20 transform -rotate-12 cursor-pointer transition-shadow hover:shadow-[0_24px_50px_-6px_rgba(0,0,0,0.6)] block"
              title="X (Twitter)"
            >
              <XTwitterIcon />
            </motion.a>
          </motion.div>

          {/* 3. TOP RIGHT: LinkedIn */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-8 sm:top-12 md:top-16 right-2 sm:right-8 md:right-14 lg:right-20 z-20"
          >
            <motion.a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              whileHover={{ scale: 1.12, rotate: 0 }}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-[86px] md:h-[86px] rounded-[22px] sm:rounded-[26px] md:rounded-[28px] bg-[#0A66C2] flex items-center justify-center shadow-[0_20px_45px_-8px_rgba(10,102,194,0.65)] border border-white/40 transform rotate-12 cursor-pointer transition-shadow hover:shadow-[0_24px_50px_-6px_rgba(10,102,194,0.85)] block"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </motion.a>
          </motion.div>

          {/* 4. CENTER HEADLINE: "We Work Across All Major Social Platforms." */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="relative z-10 text-center px-4 max-w-3xl mx-auto py-16 sm:py-20 md:py-24"
          >
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-extrabold tracking-tight text-neutral-900 leading-[1.14]">
              We Work Across All
              <br />
              <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
                Major
              </span>{' '}
              Social Platforms.
            </h2>
          </motion.div>

          {/* 5. BOTTOM LEFT: Facebook */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="absolute -bottom-3 sm:bottom-2 md:bottom-5 left-[12%] sm:left-[18%] md:left-[22%] lg:left-[26%] z-20"
          >
            <motion.a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.1, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              whileHover={{ scale: 1.12, rotate: 0 }}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-[86px] md:h-[86px] rounded-[22px] sm:rounded-[26px] md:rounded-[28px] bg-[#1877F2] flex items-center justify-center shadow-[0_20px_45px_-8px_rgba(24,119,242,0.55)] border border-white/20 transform rotate-8 cursor-pointer transition-shadow hover:shadow-[0_24px_50px_-6px_rgba(24,119,242,0.75)] block"
              title="Facebook"
            >
              <FacebookIcon />
            </motion.a>
          </motion.div>

          {/* 6. BOTTOM RIGHT: Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-3 sm:bottom-2 md:bottom-5 right-[12%] sm:right-[18%] md:right-[22%] lg:right-[26%] z-20"
          >
            <motion.a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.7, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
              whileHover={{ scale: 1.12, rotate: 0 }}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-[86px] md:h-[86px] rounded-[22px] sm:rounded-[26px] md:rounded-[28px] flex items-center justify-center shadow-[0_20px_45px_-8px_rgba(225,48,108,0.55)] border border-white/30 transform -rotate-8 cursor-pointer transition-shadow hover:shadow-[0_24px_50px_-6px_rgba(225,48,108,0.75)] block"
              style={{
                background:
                  'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
              }}
              title="Instagram"
            >
              <InstagramIcon />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
