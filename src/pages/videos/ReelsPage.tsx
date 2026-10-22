import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowUpRight, Eye, Check } from 'lucide-react';

import brunetteImg from '@/assets/img/brunette_shirt_left_1790982842053.jpg';
import tousledGuyImg from '@/assets/img/tousled_guy_sky_1790982870552.jpg';
import windblownImg from '@/assets/img/windblown_hair_woman_1790982857578.jpg';
import pixieImg from '@/assets/img/woman_bandana_pixie_1790982884567.jpg';
import sunlightManImg from '@/assets/img/community_man_sunlight_1790982822414.jpg';
import yasminImg from '@/assets/img/yasmin_clean_916_1790980492922.jpg';
import simoneImg from '@/assets/img/card_simone_1790977134116.jpg';
import johannaImg from '@/assets/img/card_johanna_1790977118147.jpg';
import matthiasImg from '@/assets/img/card_matthias_1790977103900.jpg';
import sarahImg from '@/assets/img/card_sarah_1790977156627.jpg';

import {
  getCloudinaryVideo,
  getCloudinaryVideoThumbnail,
  getLocalVideoFallback,
} from '@/utils/cloudinary';

// Dynamic video thumbnails extracted from the exact middle position frame (50% timestamp) of each video
const womenPerfumeThumb = getCloudinaryVideoThumbnail('women-perfume.mp4');
const facewashThumb = getCloudinaryVideoThumbnail('facewash.mp4');
const lipstickProductThumb = getCloudinaryVideoThumbnail('lipstick-product.mp4');
const menPerfumeThumb = getCloudinaryVideoThumbnail('men-perfume.mp4');
const rampwalkThumb = getCloudinaryVideoThumbnail('rampwalk.mp4');
const lipstickThumb = getCloudinaryVideoThumbnail('lipstick.mp4');
const nailArtThumb = getCloudinaryVideoThumbnail('nail-art.mp4');
const tshirtFerreriThumb = getCloudinaryVideoThumbnail('tshirt-ferreri.mp4');
const sukoonThumb = getCloudinaryVideoThumbnail('sukoon.mp4');
const nailThumb = getCloudinaryVideoThumbnail('nail.mp4');
const cocaineThumb = getCloudinaryVideoThumbnail('cocaine.mp4');

// Cloudinary video assets (cardStreamSrc is lightweight ~800KB eco-streamed for instant play without lag)
// Cloudinary video assets:
// 1. streamSrc: ultra-fast low-bitrate stream (w_360, q_auto:low) ~400-500KB for immediate 0ms startup
// 2. highResSrc: rich crisp HD stream (w_720, q_auto:good) upgraded smoothly in the background
const cocaineVid = getCloudinaryVideo('cocaine.mp4');
const cocaineFastVid = getCloudinaryVideo('cocaine.mp4', { optimize: true, quality: 'low', width: 360 });
const cocaineHighVid = getCloudinaryVideo('cocaine.mp4', { optimize: true, quality: 'good', width: 720 });

const facewashVid = getCloudinaryVideo('facewash.mp4');
const facewashFastVid = getCloudinaryVideo('facewash.mp4', { optimize: true, quality: 'low', width: 360 });
const facewashHighVid = getCloudinaryVideo('facewash.mp4', { optimize: true, quality: 'good', width: 720 });

const lipstickProductVid = getCloudinaryVideo('lipstick-product.mp4');
const lipstickProductFastVid = getCloudinaryVideo('lipstick-product.mp4', { optimize: true, quality: 'low', width: 360 });
const lipstickProductHighVid = getCloudinaryVideo('lipstick-product.mp4', { optimize: true, quality: 'good', width: 720 });

const lipstickVid = getCloudinaryVideo('lipstick.mp4');
const lipstickFastVid = getCloudinaryVideo('lipstick.mp4', { optimize: true, quality: 'low', width: 360 });
const lipstickHighVid = getCloudinaryVideo('lipstick.mp4', { optimize: true, quality: 'good', width: 720 });

const menPerfumeVid = getCloudinaryVideo('men-perfume.mp4');
const menPerfumeFastVid = getCloudinaryVideo('men-perfume.mp4', { optimize: true, quality: 'low', width: 360 });
const menPerfumeHighVid = getCloudinaryVideo('men-perfume.mp4', { optimize: true, quality: 'good', width: 720 });

const nailArtVid = getCloudinaryVideo('nail-art.mp4');
const nailArtFastVid = getCloudinaryVideo('nail-art.mp4', { optimize: true, quality: 'low', width: 360 });
const nailArtHighVid = getCloudinaryVideo('nail-art.mp4', { optimize: true, quality: 'good', width: 720 });

const nailVid = getCloudinaryVideo('nail.mp4');
const nailFastVid = getCloudinaryVideo('nail.mp4', { optimize: true, quality: 'low', width: 360 });
const nailHighVid = getCloudinaryVideo('nail.mp4', { optimize: true, quality: 'good', width: 720 });

const rampwalkVid = getCloudinaryVideo('rampwalk.mp4');
const rampwalkFastVid = getCloudinaryVideo('rampwalk.mp4', { optimize: true, quality: 'low', width: 360 });
const rampwalkHighVid = getCloudinaryVideo('rampwalk.mp4', { optimize: true, quality: 'good', width: 720 });

const sukoonVid = getCloudinaryVideo('sukoon.mp4');
const sukoonFastVid = getCloudinaryVideo('sukoon.mp4', { optimize: true, quality: 'low', width: 360 });
const sukoonHighVid = getCloudinaryVideo('sukoon.mp4', { optimize: true, quality: 'good', width: 720 });

const tshirtFerreriVid = getCloudinaryVideo('tshirt-ferreri.mp4');
const tshirtFerreriFastVid = getCloudinaryVideo('tshirt-ferreri.mp4', { optimize: true, quality: 'low', width: 360 });
const tshirtFerreriHighVid = getCloudinaryVideo('tshirt-ferreri.mp4', { optimize: true, quality: 'good', width: 720 });

const womenPerfumeVid = getCloudinaryVideo('women-perfume.mp4');
const womenPerfumeFastVid = getCloudinaryVideo('women-perfume.mp4', { optimize: true, quality: 'low', width: 360 });
const womenPerfumeHighVid = getCloudinaryVideo('women-perfume.mp4', { optimize: true, quality: 'good', width: 720 });

interface VideoItem {
  id: string;
  title: string;
  category: 'Corporate' | 'E-commerce' | 'Ads' | 'Viral Reels';
  image: string;
  videoSrc: string;
  streamSrc: string;
  highResSrc: string;
  duration?: string;
  description?: string;
  views?: string;
  quote?: string;
  creator?: string;
  avatar?: string;
}

const VIDEO_ITEMS: VideoItem[] = [
  {
    id: 'vid-women-perfume',
    title: 'WOMEN PERFUME COMMERCIAL',
    category: 'Ads',
    image: womenPerfumeThumb,
    videoSrc: womenPerfumeVid,
    streamSrc: womenPerfumeFastVid,
    highResSrc: womenPerfumeHighVid,
    duration: '0:30',
    description: 'Cinematic fragrance commercial highlighting delicate floral notes, golden mist, and sculptural bottle design.',
    views: '15.4M Views',
    quote: 'floral elegance captured in every drop,',
    creator: 'elena_fragrance',
    avatar: yasminImg,
  },
  {
    id: 'vid-facewash',
    title: 'NATURAL FACEWASH ROUTINE',
    category: 'E-commerce',
    image: facewashThumb,
    videoSrc: facewashVid,
    streamSrc: facewashFastVid,
    highResSrc: facewashHighVid,
    duration: '0:25',
    description: 'High-impact organic skincare routine demonstrating deep foaming cleanse and instant skin hydration.',
    views: '8.4M Views',
    quote: 'glow naturally every morning with pure botanical foam,',
    creator: 'chloe_wellness',
    avatar: brunetteImg,
  },
  {
    id: 'vid-lipstick-product',
    title: 'LUXURY LIPSTICK PRODUCT REEL',
    category: 'Viral Reels',
    image: lipstickProductThumb,
    videoSrc: lipstickProductVid,
    streamSrc: lipstickProductFastVid,
    highResSrc: lipstickProductHighVid,
    duration: '0:18',
    description: 'Ultra-HD macro texture shot showcasing creamy velvet pigment glide and metallic gold casing.',
    views: '19.4M Views',
    quote: 'silky matte finish that stays flawless for 24 hours,',
    creator: 'beauty_unboxed',
    avatar: johannaImg,
  },
  {
    id: 'vid-men-perfume',
    title: 'MEN PERFUME NOCTURNE',
    category: 'Ads',
    image: menPerfumeThumb,
    videoSrc: menPerfumeVid,
    streamSrc: menPerfumeFastVid,
    highResSrc: menPerfumeHighVid,
    duration: '0:20',
    description: 'Moody luxury commercial presenting a deep woody fragrance against warm cedarwood library tones.',
    views: '12.2M Views',
    quote: 'an intoxicating blend of smoky amber & cedarwood,',
    creator: 'crafted_gent',
    avatar: matthiasImg,
  },
  {
    id: 'vid-rampwalk',
    title: 'PARIS RUNWAY RAMPWALK',
    category: 'Viral Reels',
    image: rampwalkThumb,
    videoSrc: rampwalkVid,
    streamSrc: rampwalkFastVid,
    highResSrc: rampwalkHighVid,
    duration: '0:22',
    description: 'Fast-paced fashion runway showcase with dynamic pacing, dramatic lighting, and avant-garde silhouettes.',
    views: '24.6M Views',
    quote: 'bold runway energy that steals the entire fashion week,',
    creator: 'couture_pulse',
    avatar: simoneImg,
  },
  {
    id: 'vid-lipstick',
    title: 'MATTE LIPSTICK APPLICATION',
    category: 'Viral Reels',
    image: lipstickThumb,
    videoSrc: lipstickVid,
    streamSrc: lipstickFastVid,
    highResSrc: lipstickHighVid,
    duration: '0:24',
    description: 'Step-by-step beauty tutorial swatching rich burgundy lipstick with precision contouring.',
    views: '9.8M Views',
    quote: 'velvet glide formula with zero feathering or transfer,',
    creator: 'maya_makeuplab',
    avatar: sarahImg,
  },
  {
    id: 'vid-nail-art',
    title: 'CHROME NAIL ART ATELIER',
    category: 'Viral Reels',
    image: nailArtThumb,
    videoSrc: nailArtVid,
    streamSrc: nailArtFastVid,
    highResSrc: nailArtHighVid,
    duration: '0:20',
    description: 'Mesmerizing studio nail art process demonstrating holographic chrome powder and precise line work.',
    views: '11.5M Views',
    quote: 'mirror chrome effects crafted completely in-studio,',
    creator: 'nail_atelier',
    avatar: windblownImg,
  },
  {
    id: 'vid-tshirt-ferreri',
    title: 'STREETWEAR T-SHIRT DROP',
    category: 'E-commerce',
    image: tshirtFerreriThumb,
    videoSrc: tshirtFerreriVid,
    streamSrc: tshirtFerreriFastVid,
    highResSrc: tshirtFerreriHighVid,
    duration: '0:28',
    description: 'Modern urban streetwear apparel launch film capturing oversized heavyweight cotton textures.',
    views: '18.2M Views',
    quote: 'where luxury tailoring meets raw streetwear culture,',
    creator: 'ferreri_studios',
    avatar: sunlightManImg,
  },
  {
    id: 'vid-sukoon',
    title: 'SUKOON WELLNESS ESSENTIALS',
    category: 'Corporate',
    image: sukoonThumb,
    videoSrc: sukoonVid,
    streamSrc: sukoonFastVid,
    highResSrc: sukoonHighVid,
    duration: '0:35',
    description: 'Tranquil Ayurvedic wellness film showcasing mindful holistic lifestyle and botanical elixirs.',
    views: '14.1M Views',
    quote: 'finding inner calm through pure mindful botanicals,',
    creator: 'sukoon_living',
    avatar: tousledGuyImg,
  },
  {
    id: 'vid-nail',
    title: 'MINIMALIST NAIL DESIGN',
    category: 'Viral Reels',
    image: nailThumb,
    videoSrc: nailVid,
    streamSrc: nailFastVid,
    highResSrc: nailHighVid,
    duration: '0:18',
    description: 'Clean aesthetic nail routine detailing glass shine top coat and modern nude aesthetics.',
    views: '7.1M Views',
    quote: 'clean, sharp lines for the effortless everyday manicure,',
    creator: 'claire_nails',
    avatar: pixieImg,
  },
  {
    id: 'vid-cocaine',
    title: 'COCAINE NOIR COLOGNE',
    category: 'Corporate',
    image: cocaineThumb,
    videoSrc: cocaineVid,
    streamSrc: cocaineFastVid,
    highResSrc: cocaineHighVid,
    duration: '0:30',
    description: 'High-concept niche perfume visualizer playing with dark shadows, glass refractions, and smoky haze.',
    views: '31.3M Views',
    quote: 'provocative notes engineered to leave a lingering statement,',
    creator: 'atelier_noir',
    avatar: brunetteImg,
  }
];

const CATEGORIES = ['All', 'Corporate', 'E-commerce', 'Ads', 'Viral Reels'] as const;

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

      {/* Bottom Vignette Gradient matching reference image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-45% to-transparent pointer-events-none" />

      {/* Subtle Hover Play Indicator */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/80 flex items-center justify-center text-white shadow-xl scale-90 group-hover:scale-100 transition-transform">
          <Play className="w-5 h-5 fill-white ml-0.5 text-white drop-shadow" />
        </div>
      </div>

      {/* Bottom Content Stack matching reference image */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col items-start gap-2.5 z-10 select-none text-left">
        {/* 1. View Count with Eye icon */}
        <div className="flex items-center gap-1.5 text-white/95 font-bold text-xs sm:text-sm drop-shadow">
          <Eye className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white/90" strokeWidth={2.4} />
          <span>{vid.views || '15M Views'}</span>
        </div>

        {/* 2. Quote / Catchy Reel Caption */}
        <p className="text-white text-xs sm:text-[13px] font-medium leading-snug drop-shadow-md line-clamp-2">
          “{vid.quote || vid.description || vid.title}”
        </p>

        {/* 3. Creator Profile: Avatar + @handle + Verified Badge */}
        <div className="flex items-center gap-2 pt-0.5 max-w-full">
          <img
            src={vid.avatar || yasminImg}
            alt={vid.creator || 'creator'}
            className="w-6 h-6 rounded-full object-cover shrink-0 ring-1 ring-white/60 shadow-sm"
          />
          <span className="text-white font-bold text-xs sm:text-[13px] tracking-tight drop-shadow truncate">
            @{vid.creator || 'mindtrix_media'}
          </span>
          {/* Verified Check Badge matching TikTok/Instagram */}
          <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-white text-neutral-900 shrink-0 shadow-sm">
            <Check className="w-2.5 h-2.5 text-neutral-900 stroke-[3.5]" />
          </span>
        </div>
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
                <span>Viral Video Reels →</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-normal text-neutral-900 uppercase leading-[1.05]">
                AI Video Ads<br />
                Made to Convert
              </h2>
            </div>

            {/* Right Column: Clean description + Action Button filling the space naturally */}
            <div className="max-w-md flex flex-col items-start md:items-end gap-4 shrink-0">
              <p className="text-neutral-800 text-sm sm:text-base leading-relaxed font-normal md:text-right">
                Fast-paced 9:16 video reels, 3D product animations, and UGC campaigns crafted to drive high retention and scale your brand.
              </p>

              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-[#eda970] hover:bg-[#e59c60] text-neutral-900 font-display text-xs sm:text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-sm inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
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
                  src={lipstickVid}
                  poster={lipstickThumb}
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
                  src={rampwalkVid}
                  poster={rampwalkThumb}
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
                  src={menPerfumeVid}
                  poster={menPerfumeThumb}
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
                  src={womenPerfumeVid}
                  poster={womenPerfumeThumb}
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
                  src={facewashVid}
                  poster={facewashThumb}
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
      <AnimatePresence>
        {activeVideo && (
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

            <motion.div
              key="video-modal-container"
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: 'spring', damping: 28, stiffness: 350 }}
              className="relative max-w-sm sm:max-w-md w-full max-h-[90vh] my-auto overflow-hidden rounded-[28px] sm:rounded-[32px] shadow-2xl bg-black border border-white/10 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[9/16] w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-black flex items-center justify-center">
                <video
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
        )}
      </AnimatePresence>

    </div>
  );
};
