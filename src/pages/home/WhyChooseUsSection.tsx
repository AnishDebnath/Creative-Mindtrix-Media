import React from 'react';
import { motion } from 'framer-motion';
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

interface WhyChooseUsSectionProps {
  onGetStarted?: () => void;
  onViewCaseStudies?: () => void;
}

// Showcase 1: Step 1 - Media Ingestion (Product Photos & Video Reel Sample Data)
const CollectMediaShowcase: React.FC = () => (
  <div className="w-full h-[180px] sm:h-[185px] rounded-2xl bg-white/85 backdrop-blur-xs border border-white/90 shadow-[0_4px_16px_rgba(237,169,112,0.22)] p-3 sm:p-3.5 flex flex-col justify-between relative overflow-hidden select-none">
    {/* Top Bar: Ingestion Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-md bg-[#eda970]/20 flex items-center justify-center text-[#d97736]">
          <Upload className="w-3 h-3" />
        </div>
        <span className="text-[11px] font-bold text-neutral-800 tracking-tight">Media Ingestion</span>
      </div>
      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[9.5px] font-semibold text-emerald-700">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Sync Active
      </div>
    </div>

    {/* Center 2 Media Sample Cards: Image Samples & Video Sample Data */}
    <div className="grid grid-cols-2 gap-2 sm:gap-2.5 my-auto">
      {/* Sample 1: Product Images Data */}
      <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-b from-[#fdf6f0] to-white border border-[#eda970]/30 shadow-xs flex flex-col justify-between h-[86px]">
        <div className="flex items-center justify-between">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#eda970] to-[#ed4f6c] text-white flex items-center justify-center shadow-xs">
            <ImageIcon className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-white/90 text-[#3d2035] border border-[#eda970]/30">
            RAW / 4K
          </span>
        </div>
        <div>
          <p className="text-[10.5px] font-bold text-neutral-800 leading-tight">Product Photos</p>
          <p className="text-[9px] text-neutral-500 font-medium">48 Angles Collected</p>
        </div>
      </div>

      {/* Sample 2: Video Sample Reels */}
      <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-b from-[#f6f2fd] to-white border border-[#cfc1ee]/40 shadow-xs flex flex-col justify-between h-[86px]">
        <div className="flex items-center justify-between">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#6566ee] to-[#a855f7] text-white flex items-center justify-center shadow-xs">
            <Film className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-white/90 text-[#6566ee] border border-[#cfc1ee]/40">
            .MP4 / 60fps
          </span>
        </div>
        <div>
          <p className="text-[10.5px] font-bold text-neutral-800 leading-tight">Reel Footage</p>
          <p className="text-[9px] text-neutral-500 font-medium">16 Video Clips Data</p>
        </div>
      </div>
    </div>

    {/* Bottom: Progress / Ready Status Bar */}
    <div className="w-full flex items-center justify-between px-2 py-1 rounded-lg bg-[#faf6f3] border border-[#eda970]/20 text-[9.5px]">
      <div className="flex items-center gap-1.5 font-medium text-neutral-600">
        <CheckCircle2 className="w-3 h-3 text-[#22c55e]" />
        <span>Media Samples Ready</span>
      </div>
      <span className="font-bold text-[#d97736]">100% Ingested</span>
    </div>
  </div>
);

// Showcase 2: Step 2 - Market & Trend Research ("What is best for current situation")
const MarketResearchShowcase: React.FC = () => (
  <div className="w-full h-[180px] sm:h-[185px] rounded-2xl bg-white/85 backdrop-blur-xs border border-white/90 shadow-[0_4px_16px_rgba(207,193,238,0.28)] p-3 sm:p-3.5 flex flex-col justify-between relative overflow-hidden select-none">
    {/* Top Header: Market Situation Scanner */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-md bg-[#6566ee]/15 flex items-center justify-center text-[#6566ee]">
          <TrendingUp className="w-3 h-3" />
        </div>
        <span className="text-[11px] font-bold text-neutral-800 tracking-tight">Market Trend Scanner</span>
      </div>
      <span className="text-[9.5px] font-bold text-[#6566ee] bg-[#cfc1ee]/30 px-2 py-0.5 rounded-full border border-[#cfc1ee]/60">
        Current Situation
      </span>
    </div>

    {/* Center Analytics: Trend Growth Curve + Format Benchmark ("What converts best") */}
    <div className="flex items-center gap-3 my-auto">
      {/* 2D Trend SVG Curve */}
      <div className="w-[108px] shrink-0 h-[68px] relative bg-gradient-to-b from-[#f7f4fd] to-white rounded-xl border border-[#cfc1ee]/40 p-1.5 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[8.5px] font-bold">
          <span className="text-neutral-500">Viral Hook</span>
          <span className="text-[#6566ee] font-black">+340%</span>
        </div>
        <svg viewBox="0 0 100 36" fill="none" className="w-full h-8 overflow-visible">
          <defs>
            <linearGradient id="mrkGrad" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#cfc1ee" />
              <stop offset="100%" stopColor="#6566ee" />
            </linearGradient>
            <linearGradient id="mrkArea" x1="0" y1="0" x2="0" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6566ee" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#cfc1ee" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M4 32 C 25 30, 40 22, 55 18 C 70 14, 82 6, 96 4 L 96 36 L 4 36 Z" fill="url(#mrkArea)" />
          <path d="M4 32 C 25 30, 40 22, 55 18 C 70 14, 82 6, 96 4" stroke="url(#mrkGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="96" cy="4" r="3" fill="#6566ee" stroke="#ffffff" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Format Comparison: AI Video Reels vs Static Ads */}
      <div className="flex-1 flex flex-col justify-center gap-2">
        <div>
          <div className="flex items-center justify-between text-[9.5px] font-bold text-neutral-800 mb-1">
            <span className="truncate">AI Video Reels</span>
            <span className="text-[#6566ee] shrink-0">88% Win</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-neutral-100 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-[#cfc1ee] via-[#a855f7] to-[#6566ee] w-[88%]" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-[9.5px] font-medium text-neutral-500 mb-1">
            <span className="truncate">Static Adverts</span>
            <span className="text-neutral-400 shrink-0">24% Conv.</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-neutral-100 overflow-hidden">
            <div className="h-full rounded-full bg-neutral-300 w-[24%]" />
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Insight Footer */}
    <div className="w-full flex items-center justify-between px-2 py-1 rounded-lg bg-[#f5f1fc] border border-[#cfc1ee]/40 text-[9.5px]">
      <div className="flex items-center gap-1.5 text-neutral-700 font-medium">
        <Sparkles className="w-3 h-3 text-[#6566ee]" />
        <span>Strategy: Fast-Paced 9:16 Reels</span>
      </div>
      <span className="font-bold text-[#6566ee]">Best Match</span>
    </div>
  </div>
);

// Showcase 3: Step 3 - Make & Produce Creatives (AI Studio, 9:16 Reel Preview & Timeline)
const MakeProduceShowcase: React.FC = () => (
  <div className="w-full h-[180px] sm:h-[185px] rounded-2xl bg-white/85 backdrop-blur-xs border border-white/90 shadow-[0_4px_16px_rgba(220,198,213,0.3)] p-3 sm:p-3.5 flex flex-col justify-between relative overflow-hidden select-none">
    {/* Top Header: Studio Engine */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-md bg-[#ed4f6c]/15 flex items-center justify-center text-[#ed4f6c]">
          <Film className="w-3 h-3" />
        </div>
        <span className="text-[11px] font-bold text-neutral-800 tracking-tight">AI Creative Studio</span>
      </div>
      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#fce8ed] border border-[#ed4f6c]/30 text-[9.5px] font-bold text-[#ed4f6c]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ed4f6c] animate-pulse" />
        Producing 9:16
      </div>
    </div>

    {/* Center: 9:16 Reel Preview + Multi-Track Editor */}
    <div className="flex items-center gap-3 my-auto">
      {/* 9:16 Phone/Reel Preview Window */}
      <div className="w-[58px] h-[78px] rounded-xl bg-gradient-to-b from-[#2b172a] via-[#1a1024] to-[#0f0a17] border border-[#dcc6d5]/60 shadow-md p-1 flex flex-col justify-between shrink-0 relative overflow-hidden">
        {/* Glow backdrop inside phone */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-tr from-[#ed4f6c] to-[#eda970] rounded-full blur-xs opacity-75" />
        {/* Top reel tag */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[7px] font-bold text-white/90 bg-black/40 px-1 py-0.2 rounded">9:16</span>
          <Sparkles className="w-2.5 h-2.5 text-[#eda970]" />
        </div>
        {/* Center 2D Product Silhouette */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-4 h-6 rounded bg-gradient-to-b from-white/90 to-white/40 border border-white/60 shadow-xs flex items-center justify-center">
            <div className="w-1.5 h-2 rounded-xs bg-[#ed4f6c]/70" />
          </div>
        </div>
        {/* Bottom Play bar */}
        <div className="relative z-10 flex items-center gap-1 bg-black/50 px-1 py-0.5 rounded">
          <Play className="w-2 h-2 text-white fill-white" />
          <div className="flex-1 h-0.5 bg-white/40 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-[#ed4f6c]" />
          </div>
        </div>
      </div>

      {/* Creative Production Tracks Timeline */}
      <div className="flex-1 flex flex-col justify-center gap-1.5">
        {/* Track 1: Scene Clips */}
        <div className="flex items-center gap-1 text-[9px]">
          <span className="w-9 font-bold text-neutral-400 shrink-0 text-[8.5px]">Clips</span>
          <div className="flex-1 flex gap-1">
            <span className="px-1.5 py-0.5 rounded bg-gradient-to-r from-[#ed4f6c] to-[#f472b6] text-white font-bold text-[8.5px] truncate">
              01: Hook
            </span>
            <span className="px-1.5 py-0.5 rounded bg-gradient-to-r from-[#eda970] to-[#f59e0b] text-white font-bold text-[8.5px] truncate">
              02: Visuals
            </span>
            <span className="px-1.5 py-0.5 rounded bg-gradient-to-r from-[#6566ee] to-[#8b5cf6] text-white font-bold text-[8.5px] truncate">
              03: CTA
            </span>
          </div>
        </div>

        {/* Track 2: Audio & Voiceover Waveform */}
        <div className="flex items-center gap-1 text-[9px]">
          <span className="w-9 font-bold text-neutral-400 shrink-0 text-[8.5px]">Audio</span>
          <div className="flex-1 h-4 rounded bg-[#faf5f8] border border-[#dcc6d5]/40 px-1.5 flex items-center gap-0.5">
            {[4, 10, 6, 12, 14, 8, 11, 5, 9, 13, 7, 10, 4, 11, 8, 13, 6].map((h, i) => (
              <span
                key={i}
                className="w-0.5 rounded-full bg-gradient-to-t from-[#ed4f6c] to-[#a855f7]"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>

        {/* Track 3: Subtitles & Effects */}
        <div className="flex items-center gap-1 text-[9px]">
          <span className="w-9 font-bold text-neutral-400 shrink-0 text-[8.5px]">Captions</span>
          <div className="flex-1 h-3.5 rounded bg-[#f3edf8] border border-[#cfc1ee]/40 px-1.5 flex items-center">
            <span className="text-[8px] font-bold text-[#6566ee] tracking-tight">Kinetic Dynamic Subtitles</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Status */}
    <div className="w-full flex items-center justify-between px-2 py-1 rounded-lg bg-[#fdf5f8] border border-[#dcc6d5]/40 text-[9.5px]">
      <div className="flex items-center gap-1.5 font-medium text-neutral-700">
        <CheckCircle2 className="w-3 h-3 text-[#ed4f6c]" />
        <span>Commercial Reel Produced</span>
      </div>
      <span className="font-bold text-[#ed4f6c]">4K 60FPS</span>
    </div>
  </div>
);

// Showcase 4: Step 4 - Deliver & Post Directly (Live Multi-Channel Publishing Hub)
const DeliverPostShowcase: React.FC = () => (
  <div className="w-full h-[180px] sm:h-[185px] rounded-2xl bg-white/85 backdrop-blur-xs border border-white/90 shadow-[0_4px_16px_rgba(101,102,238,0.25)] p-3 sm:p-3.5 flex flex-col justify-between relative overflow-hidden select-none">
    {/* Top Header: Direct Auto-Publishing */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-md bg-[#6566ee]/15 flex items-center justify-center text-[#6566ee]">
          <Share2 className="w-3 h-3" />
        </div>
        <span className="text-[11px] font-bold text-neutral-800 tracking-tight">Direct Auto-Posting</span>
      </div>
      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[9.5px] font-bold text-emerald-700">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        4 Channels Live
      </div>
    </div>

    {/* Center: 4 Direct Destination Cards (2x2 Grid) */}
    <div className="grid grid-cols-2 gap-2 my-auto">
      {/* 1. Instagram */}
      <div className="p-1.5 sm:p-2 rounded-xl bg-white border border-[#dd2a7b]/25 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white flex items-center justify-center shrink-0 shadow-xs">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
            </svg>
          </div>
          <div className="leading-tight">
            <p className="text-[10px] font-bold text-neutral-800">Instagram</p>
            <p className="text-[8.5px] text-emerald-600 font-semibold">Posted ✓</p>
          </div>
        </div>
      </div>

      {/* 2. TikTok */}
      <div className="p-1.5 sm:p-2 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-black text-white flex items-center justify-center shrink-0 shadow-xs">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .591.044.87.13V9.4a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.83 4.49 6.27 6.27 0 0 0 1.86-4.5V8.55a8.28 8.28 0 0 0 4.9 1.59v-3.45h-1z" />
            </svg>
          </div>
          <div className="leading-tight">
            <p className="text-[10px] font-bold text-neutral-800">TikTok</p>
            <p className="text-[8.5px] text-emerald-600 font-semibold">Posted ✓</p>
          </div>
        </div>
      </div>

      {/* 3. Client Website */}
      <div className="p-1.5 sm:p-2 rounded-xl bg-white border border-[#6566ee]/25 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#6566ee] to-[#a855f7] text-white flex items-center justify-center shrink-0 shadow-xs">
            <Globe className="w-3.5 h-3.5" />
          </div>
          <div className="leading-tight">
            <p className="text-[10px] font-bold text-neutral-800">Client Site</p>
            <p className="text-[8.5px] text-indigo-600 font-semibold">Synced ✓</p>
          </div>
        </div>
      </div>

      {/* 4. Meta & Ad Campaigns */}
      <div className="p-1.5 sm:p-2 rounded-xl bg-white border border-[#1877F2]/25 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-xs">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
          <div className="leading-tight">
            <p className="text-[10px] font-bold text-neutral-800">Meta Ads</p>
            <p className="text-[8.5px] text-blue-600 font-semibold">Active ✓</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Status */}
    <div className="w-full flex items-center justify-between px-2 py-1 rounded-lg bg-[#f0f0fd] border border-[#6566ee]/30 text-[9.5px]">
      <div className="flex items-center gap-1.5 font-medium text-neutral-700">
        <CheckCircle2 className="w-3 h-3 text-[#6566ee]" />
        <span>Direct Multi-Channel Posting</span>
      </div>
      <span className="font-bold text-[#6566ee]">Automated</span>
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
      <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-gradient-to-l from-[#6566ee]/15 to-[#a855f7]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Heading Only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] font-black tracking-normal text-neutral-900 uppercase leading-[1.15]">
            WHY THE FASTEST GROWING <br />
            BRANDS CHOOSE US.
          </h2>
        </motion.div>

        {/* Bento Grid: 4 Process Steps on Left + Tall Feature Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Area: 4 Steps of How We Work (2x2 Grid, 8 Columns on desktop, NO NUMBER COUNTING) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* STEP 1: Collect Media & Samples (Theme: Peach & Sunset / Lavender) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="bg-gradient-to-br from-[#fdf4ed] via-[#f8edf5] to-[#f1ecfc] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 border border-[#eda970]/40 shadow-[0_24px_50px_-12px_rgba(237,169,112,0.18)] hover:shadow-[0_28px_60px_-12px_rgba(237,169,112,0.28)] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Visual Showcase */}
              <div className="mb-4">
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
              className="bg-gradient-to-br from-[#f3effb] via-[#f9edf5] to-[#fef5ee] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 border border-[#8f73cc]/40 shadow-[0_30px_70px_-15px_rgba(143,115,204,0.2)] hover:shadow-[0_32px_75px_-15px_rgba(143,115,204,0.3)] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Visual Showcase */}
              <div className="mb-4">
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
              className="bg-gradient-to-br from-[#f8edf5] via-[#f2ebfc] to-[#fdf4ed] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 border border-[#dcc6d5] shadow-[0_24px_50px_-12px_rgba(143,115,204,0.18)] hover:shadow-[0_28px_60px_-12px_rgba(143,115,204,0.28)] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Visual Showcase */}
              <div className="mb-4">
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
              className="bg-gradient-to-br from-[#f0f0fd] via-[#f7f0fb] to-[#faedf4] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 border border-[#6566ee]/30 shadow-[0_30px_70px_-15px_rgba(101,102,238,0.2)] hover:shadow-[0_32px_75px_-15px_rgba(101,102,238,0.3)] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Visual Showcase */}
              <div className="mb-4">
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

          {/* Right Area: Tall Feature Card (4 Columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-4 relative rounded-[28px] sm:rounded-[32px] overflow-hidden flex flex-col justify-between p-6 sm:p-7 min-h-[500px] sm:min-h-[540px] shadow-[0_16px_50px_-10px_rgba(143,115,204,0.35)] border border-[#cfc1ee]/60 group"
          >
            {/* Background Editorial Creator Photo */}
            <img
              src={creatorImg}
              alt="Scale with our expert team"
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Deep Plum & Indigo Themed Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1226]/95 via-[#1b1226]/50 via-50% to-transparent pointer-events-none" />

            {/* Top Floating Badge in Theme Gradient */}
            <div className="relative z-10 self-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] text-[#3d2035] text-[11px] font-bold rounded-full shadow-md border border-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ed4f6c] animate-pulse" />
                Creative Growth Squad
              </span>
            </div>

            {/* Floating Overlay Content */}
            <div className="relative z-10 flex flex-col items-center text-center mt-auto">
              <h3 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight leading-snug mb-2">
                Scale with our <br />
                expert team
              </h3>

              <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-[260px] mb-6 font-normal">
                Expert strategies designed to help your brand dominate social.
              </p>

              {/* Action Buttons in Theme Gradients */}
              <div className="w-full flex flex-col gap-2.5">
                <button
                  onClick={onGetStarted}
                  className="w-full py-3 bg-gradient-to-r from-[#dcc6d5] via-[#cfc1ee] to-[#eda970] hover:opacity-95 text-[#2a1324] font-bold text-sm rounded-full transition-all active:scale-95 shadow-md cursor-pointer"
                >
                  Get Started
                </button>

                <button
                  onClick={onViewCaseStudies}
                  className="w-full py-3 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-medium text-sm rounded-full border border-white/30 transition-all active:scale-95 cursor-pointer"
                >
                  View Case Studies
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
