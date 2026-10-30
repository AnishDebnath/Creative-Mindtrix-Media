import React from 'react';
import { motion } from 'framer-motion';
import { SectionTag } from '@/components/ui/SectionTag';
import {
  Film,
  Image as ImageIcon,
  Sparkles,
  Globe,
  Upload,
  CheckCircle2,
  TrendingUp,
  Play,
  Share2,
} from 'lucide-react';
import creatorImg from '@/assets/img/scale_expert_team_creator.jpg';
import scaleVideo from '@/assets/videos/fashion/paris-fashion-runway.mp4';

interface WhyChooseUsSectionProps {
  onGetStarted?: () => void;
  onViewCaseStudies?: () => void;
}

// Showcase 1: Step 1 - Collect Media & Samples (Compact, perfectly fitted, continuous auto-motion)
const CollectMediaShowcase: React.FC = () => (
  <div className="w-full h-[180px] sm:h-[185px] rounded-2xl bg-white/90 backdrop-blur-xs border border-white shadow-[0_4px_16px_rgba(237,169,112,0.18)] p-3 sm:p-3.5 flex flex-col justify-between select-none relative overflow-hidden">
    {/* Clean Compact Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-md bg-[#eda970]/20 flex items-center justify-center text-[#d97736]">
          <Upload className="w-3 h-3" />
        </div>
        <span className="text-[11px] font-bold text-neutral-800">Media Ingestion</span>
      </div>
      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[9.5px] font-semibold text-emerald-600 border border-emerald-200/60">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Live Sync
      </div>
    </div>

    {/* Center: Reduced size floating cards with continuous hover animation */}
    <div className="grid grid-cols-2 gap-2 my-auto">
      {/* Product Photos Card */}
      <motion.div
        animate={{ y: [0, -2.5, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-b from-[#fdf8f4] to-white border border-[#eda970]/30 shadow-xs flex items-center gap-2"
      >
        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#eda970] to-[#ed4f6c] text-white flex items-center justify-center shrink-0 shadow-xs">
          <ImageIcon className="w-3.5 h-3.5" />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-bold text-neutral-800 truncate">Photos</p>
          <span className="text-[9px] text-emerald-600 font-semibold flex items-center gap-0.5">
            <span className="w-1 h-1 rounded-full bg-emerald-500" /> Synced
          </span>
        </div>
      </motion.div>

      {/* Video Clips Card */}
      <motion.div
        animate={{ y: [0, -2.5, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
        className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-b from-[#faf5f8] to-white border border-[#dcc6d5]/50 shadow-xs flex items-center gap-2"
      >
        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#2f182a] via-[#3d2035] to-[#542947] text-white flex items-center justify-center shrink-0 shadow-xs">
          <Film className="w-3.5 h-3.5" />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-bold text-neutral-800 truncate">Videos</p>
          <span className="text-[9px] text-emerald-600 font-semibold flex items-center gap-0.5">
            <span className="w-1 h-1 rounded-full bg-emerald-500" /> Ready
          </span>
        </div>
      </motion.div>
    </div>

    {/* Bottom: Smooth continuous scanning progress bar */}
    <div className="w-full flex items-center justify-between px-2 py-1 rounded-lg bg-[#faf6f3] border border-[#eda970]/20 text-[10px]">
      <div className="flex items-center gap-1.5 text-neutral-700 font-medium">
        <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
        <span>100% Ingested</span>
      </div>
      <div className="w-16 h-1 rounded-full bg-[#eda970]/20 overflow-hidden relative">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1/2 h-full rounded-full bg-gradient-to-r from-[#eda970] to-[#ed4f6c]"
        />
      </div>
    </div>
  </div>
);

// Showcase 2: Step 2 - Market & Trend Research (Compact, smooth continuous breathing bar)
const MarketResearchShowcase: React.FC = () => (
  <div className="w-full h-[180px] sm:h-[185px] rounded-2xl bg-white/90 backdrop-blur-xs border border-white shadow-[0_4px_16px_rgba(220,198,213,0.25)] p-3 sm:p-3.5 flex flex-col justify-between select-none relative overflow-hidden">
    {/* Clean Compact Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-md bg-[#3d2035]/10 flex items-center justify-center text-[#3d2035]">
          <TrendingUp className="w-3 h-3" />
        </div>
        <span className="text-[11px] font-bold text-neutral-800">Trend Analysis</span>
      </div>
      <span className="text-[9.5px] font-bold text-[#3d2035] bg-[#dcc6d5]/35 px-2 py-0.5 rounded-full border border-[#dcc6d5]">
        Live Intel
      </span>
    </div>

    {/* Center: Compact in-motion comparison bar with continuous subtle pulse */}
    <div className="space-y-2 my-auto">
      {/* 9:16 Video Reels */}
      <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-r from-[#faf6f8] to-white border border-[#dcc6d5]/60 shadow-xs">
        <div className="flex items-center justify-between text-[11px] font-bold mb-1.5">
          <span className="text-neutral-800 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#d97736]" />
            9:16 Video Reels
          </span>
          <span className="text-[#3d2035] font-black">+340% Lead</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-neutral-100 overflow-hidden relative">
          <motion.div
            animate={{ width: ['84%', '94%', '84%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full rounded-full bg-gradient-to-r from-[#dcc6d5] via-[#eda970] to-[#ed4f6c]"
          />
        </div>
      </div>

      {/* Static Images */}
      <div className="px-2">
        <div className="flex items-center justify-between text-[10px] text-neutral-500 font-medium mb-1">
          <span>Static Image Ads</span>
          <span className="text-neutral-400">Baseline</span>
        </div>
        <div className="w-full h-1 rounded-full bg-neutral-100 overflow-hidden">
          <div className="h-full rounded-full bg-neutral-300 w-[26%]" />
        </div>
      </div>
    </div>

    {/* Simple Bottom Status */}
    <div className="flex items-center gap-1.5 text-[10px] text-neutral-700 font-medium px-2 py-1 rounded-lg bg-[#faf6f8] border border-[#dcc6d5]/60">
      <CheckCircle2 className="w-3 h-3 text-[#d97736] shrink-0" />
      <span className="truncate">Winning Creative Recommendation</span>
    </div>
  </div>
);

// Showcase 3: Step 3 - Make & Produce Creatives (Compact phone reel with looping progress)
const MakeProduceShowcase: React.FC = () => (
  <div className="w-full h-[180px] sm:h-[185px] rounded-2xl bg-white/90 backdrop-blur-xs border border-white shadow-[0_4px_16px_rgba(220,198,213,0.22)] p-3 sm:p-3.5 flex flex-col justify-between select-none relative overflow-hidden">
    {/* Clean Compact Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-md bg-[#ed4f6c]/15 flex items-center justify-center text-[#ed4f6c]">
          <Film className="w-3 h-3" />
        </div>
        <span className="text-[11px] font-bold text-neutral-800">Creative Studio</span>
      </div>
      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#fce8ed] text-[9.5px] font-bold text-[#ed4f6c] border border-[#ed4f6c]/30">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ed4f6c] animate-pulse" />
        Producing
      </div>
    </div>

    {/* Center: Scaled phone mockup + step indicators */}
    <div className="flex items-center gap-2.5 my-auto">
      {/* 9:16 Mini Phone Mockup with pulsing glow & continuous loop */}
      <div className="w-12 h-[72px] rounded-xl bg-gradient-to-b from-[#2b172a] via-[#1a1024] to-[#0f0a17] border border-[#dcc6d5]/60 shadow-md p-1 flex flex-col justify-between shrink-0 relative overflow-hidden">
        <motion.div
          animate={{ opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-to-tr from-[#ed4f6c]/40 via-[#eda970]/20 to-transparent"
        />
        <span className="relative z-10 text-[7px] font-bold text-white/90 bg-black/50 px-1 py-0.2 rounded w-fit">
          9:16
        </span>
        <div className="relative z-10 mx-auto w-4 h-4 rounded-full bg-white/90 text-[#ed4f6c] flex items-center justify-center shadow-xs">
          <Play className="w-2 h-2 fill-current ml-0.5" />
        </div>
        <div className="relative z-10 w-full h-0.5 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: ['0%', '100%'] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }}
            className="h-full bg-gradient-to-r from-[#eda970] to-[#ed4f6c]"
          />
        </div>
      </div>

      {/* 3 Scaled Step Highlights */}
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between px-2 py-0.5 rounded-md bg-gradient-to-r from-[#fdf5f8] to-white border border-[#ed4f6c]/20 text-[10px]">
          <span className="font-semibold text-neutral-700">AI Hook Generation</span>
          <span className="text-[#ed4f6c] font-bold">✓</span>
        </div>
        <div className="flex items-center justify-between px-2 py-0.5 rounded-md bg-gradient-to-r from-[#faf5f8] to-white border border-[#dcc6d5]/30 text-[10px]">
          <span className="font-semibold text-neutral-700">Kinetic Subtitles</span>
          <span className="text-[#3d2035] font-bold">✓</span>
        </div>
        <div className="flex items-center justify-between px-2 py-0.5 rounded-md bg-gradient-to-r from-[#f5f1fc] to-white border border-[#cfc1ee]/30 text-[10px]">
          <span className="font-semibold text-neutral-700">Viral Soundtrack</span>
          <span className="text-[#d97736] font-bold">✓</span>
        </div>
      </div>
    </div>

    {/* Simple Bottom Status */}
    <div className="flex items-center gap-1.5 text-[10px] text-neutral-700 font-medium px-2 py-1 rounded-lg bg-[#fdf5f8] border border-[#dcc6d5]/40">
      <CheckCircle2 className="w-3 h-3 text-[#ed4f6c] shrink-0" />
      <span className="truncate">High-Retention Reel Output</span>
    </div>
  </div>
);

// Showcase 4: Step 4 - Deliver & Post Directly (Compact live publishing channel beacons)
const DeliverPostShowcase: React.FC = () => (
  <div className="w-full h-[180px] sm:h-[185px] rounded-2xl bg-white/90 backdrop-blur-xs border border-white shadow-[0_4px_16px_rgba(61,32,53,0.08)] p-3 sm:p-3.5 flex flex-col justify-between select-none relative overflow-hidden">
    {/* Clean Compact Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-md bg-[#3d2035]/10 flex items-center justify-center text-[#3d2035]">
          <Share2 className="w-3 h-3" />
        </div>
        <span className="text-[11px] font-bold text-neutral-800">Auto-Publish</span>
      </div>
      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[9.5px] font-semibold text-emerald-700 border border-emerald-200/60">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Synced
      </div>
    </div>

    {/* Center: 4 Scaled Channels with breathing live beacon animations */}
    <div className="grid grid-cols-2 gap-1.5 my-auto">
      {/* Instagram */}
      <motion.div
        animate={{ scale: [1, 1.015, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="px-2 py-1.5 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex items-center justify-between"
      >
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white flex items-center justify-center shrink-0">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
            </svg>
          </div>
          <span className="text-[10.5px] font-semibold text-neutral-800 truncate">Instagram</span>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
      </motion.div>

      {/* TikTok */}
      <motion.div
        animate={{ scale: [1, 1.015, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        className="px-2 py-1.5 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex items-center justify-between"
      >
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-5 h-5 rounded-md bg-black text-white flex items-center justify-center shrink-0">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .591.044.87.13V9.4a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.83 4.49 6.27 6.27 0 0 0 1.86-4.5V8.55a8.28 8.28 0 0 0 4.9 1.59v-3.45h-1z" />
            </svg>
          </div>
          <span className="text-[10.5px] font-semibold text-neutral-800 truncate">TikTok</span>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
      </motion.div>

      {/* Meta Ads */}
      <motion.div
        animate={{ scale: [1, 1.015, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
        className="px-2 py-1.5 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex items-center justify-between"
      >
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-5 h-5 rounded-md bg-[#1877F2] text-white flex items-center justify-center shrink-0">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
          <span className="text-[10.5px] font-semibold text-neutral-800 truncate">Meta Ads</span>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
      </motion.div>

      {/* Website */}
      <motion.div
        animate={{ scale: [1, 1.015, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 2.1 }}
        className="px-2 py-1.5 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex items-center justify-between"
      >
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#2f182a] via-[#3d2035] to-[#542947] text-white flex items-center justify-center shrink-0">
            <Globe className="w-3 h-3" />
          </div>
          <span className="text-[10.5px] font-semibold text-neutral-800 truncate">Website</span>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
      </motion.div>
    </div>

    {/* Simple Bottom Status */}
    <div className="flex items-center gap-1.5 text-[10px] text-neutral-700 font-medium px-2 py-1 rounded-lg bg-[#faf6f8] border border-[#ebdce7]">
      <CheckCircle2 className="w-3 h-3 text-[#d97736] shrink-0" />
      <span className="truncate">Instant Multi-Platform Delivery</span>
    </div>
  </div>
);

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onGetStarted,
  onViewCaseStudies,
}) => {
  return (
    <section id="why-us" className="relative w-full bg-white py-20 sm:py-24 md:py-28 overflow-hidden">
      {/* Website Theme Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] bg-gradient-to-r from-[#dcc6d5]/25 via-[#cfc1ee]/25 to-[#eda970]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-gradient-to-l from-[#3d2035]/10 via-[#dcc6d5]/20 to-[#eda970]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16 flex flex-col items-center"
        >
          <SectionTag label="Why Choose Us" className="mb-4" />
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] font-black tracking-normal text-neutral-900 uppercase leading-[1.15]">
            WHY THE FASTEST GROWING <br />
            BRANDS CHOOSE US.
          </h2>
        </motion.div>

        {/* Bento Grid: 4 Process Steps on Left (8 cols) + 9:16 Feature Video Card on Right (4 cols) with tight gap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">

          {/* Left Area: 4 Steps of How We Work (2x2 Grid, 8 Columns on desktop for perfect balance) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

            {/* STEP 1: Collect Media & Samples (Theme: Peach & Sunset / Lavender) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="bg-gradient-to-br from-[#fdf4ed] via-[#f8edf5] to-[#f1ecfc] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 border border-[#eda970]/40 shadow-[0_24px_50px_-12px_rgba(237,169,112,0.18)] hover:shadow-[0_28px_60px_-12px_rgba(237,169,112,0.28)] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Visual Showcase - Reduced top & side outer padding */}
              <div className="-mt-2 sm:-mt-2.5 -mx-2 sm:-mx-2.5 mb-4">
                <CollectMediaShowcase />
              </div>

              {/* Card Details: NO Number Counting */}
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-neutral-900 tracking-tight leading-snug mb-1.5">
                  Collect Media & Samples
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
                  At first, we collect your product images, video sample data, and creative assets.
                </p>
              </div>
            </motion.div>

            {/* STEP 2: Market & Trend Research (Theme: Lilac & Purple) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="bg-gradient-to-br from-[#f3effb] via-[#f9edf5] to-[#fef5ee] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 border border-[#ebdce7] shadow-[0_24px_50px_-12px_rgba(61,32,53,0.1)] hover:shadow-[0_28px_60px_-12px_rgba(61,32,53,0.16)] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Visual Showcase - Reduced top & side outer padding */}
              <div className="-mt-2 sm:-mt-2.5 -mx-2 sm:-mx-2.5 mb-4">
                <MarketResearchShowcase />
              </div>

              {/* Card Details: NO Number Counting */}
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-neutral-900 tracking-tight leading-snug mb-1.5">
                  Market & Trend Research
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Then we market research what is best for the current situation to find what converts.
                </p>
              </div>
            </motion.div>

            {/* STEP 3: Make & Produce Creatives (Theme: Mauve & Pink / Peach) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="bg-gradient-to-br from-[#f8edf5] via-[#f2ebfc] to-[#fdf4ed] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 border border-[#dcc6d5] shadow-[0_24px_50px_-12px_rgba(61,32,53,0.1)] hover:shadow-[0_28px_60px_-12px_rgba(61,32,53,0.16)] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Visual Showcase - Reduced top & side outer padding */}
              <div className="-mt-2 sm:-mt-2.5 -mx-2 sm:-mx-2.5 mb-4">
                <MakeProduceShowcase />
              </div>

              {/* Card Details: NO Number Counting */}
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-neutral-900 tracking-tight leading-snug mb-1.5">
                  Make & Produce Creatives
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Then we make high-impact AI product video reels, commercial visuals, and viral ads.
                </p>
              </div>
            </motion.div>

            {/* STEP 4: Deliver & Post Directly (Theme: Indigo & Multi-Channel) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="bg-gradient-to-br from-[#faf6f8] via-[#f5eef4] to-[#faede5] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 border border-[#ebdce7] shadow-[0_20px_50px_-15px_rgba(61,32,53,0.12)] hover:shadow-[0_24px_60px_-15px_rgba(61,32,53,0.18)] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Visual Showcase - Reduced top & side outer padding */}
              <div className="-mt-2 sm:-mt-2.5 -mx-2 sm:-mx-2.5 mb-4">
                <DeliverPostShowcase />
              </div>

              {/* Card Details: NO Number Counting */}
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-neutral-900 tracking-tight leading-snug mb-1.5">
                  Deliver & Post Directly
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Then we deliver and post directly to your websites and social media channels.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Area: 9/16 Aspect Ratio Feature Card with Background Video matching Section Height */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end items-stretch w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="relative w-full h-full aspect-[9/16] rounded-[28px] sm:rounded-[32px] overflow-hidden flex flex-col justify-end p-6 sm:p-7 shadow-[0_20px_60px_-15px_rgba(61,32,53,0.35)] border border-[#ebdce7]/60 group mx-auto lg:mx-0 select-none"
            >
              {/* Background 9:16 Video with Fallback Poster */}
              <video
                src={scaleVideo}
                poster={creatorImg}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Deep Plum & Warm Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f182a]/95 via-[#3d2035]/50 via-45% to-black/25 pointer-events-none" />

              {/* Bottom Overlay Content: Well spaced and balanced for 9:16 height */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <h3 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-snug mb-2">
                  Scale with our <br />
                  expert team
                </h3>

                <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed max-w-[250px] mb-5 font-normal">
                  Expert strategies designed to help your brand dominate social.
                </p>

                {/* Action Buttons in Theme Gradients */}
                <div className="w-full flex flex-col gap-2.5">
                  <button
                    onClick={onGetStarted}
                    className="w-full py-3 bg-white hover:bg-neutral-100 text-[#3d2035] font-display text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-md cursor-pointer"
                  >
                    Get Started
                  </button>

                  <button
                    onClick={onViewCaseStudies}
                    className="w-full py-2.5 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-medium text-xs sm:text-sm rounded-full border border-white/25 transition-all active:scale-95 cursor-pointer"
                  >
                    View Case Studies
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
