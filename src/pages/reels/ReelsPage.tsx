import React, { useState } from 'react';
import { Play, X, Volume2 } from 'lucide-react';

import brunetteImg from '@/assets/img/brunette_shirt_left_1790982842053.jpg';
import communityFriendsImg from '@/assets/img/community_wide_friends_1790982804862.jpg';
import tousledGuyImg from '@/assets/img/tousled_guy_sky_1790982870552.jpg';
import windblownImg from '@/assets/img/windblown_hair_woman_1790982857578.jpg';
import pixieImg from '@/assets/img/woman_bandana_pixie_1790982884567.jpg';
import sunlightManImg from '@/assets/img/community_man_sunlight_1790982822414.jpg';
import yasminImg from '@/assets/img/yasmin_clean_916_1790980492922.jpg';
import simoneImg from '@/assets/img/card_simone_1790977134116.jpg';

import womenPerfumeCommercialImg from '@/assets/images/women perfume/Perfume_bottle_commercial_photog.jpg';
import skincareStoneImg from '@/assets/images/facewash/Skincare_advertisement_on_stone.jpg';
import menPerfumeLibraryImg from '@/assets/images/men perfume/Perfume_bottle_in_luxury_library.jpg';
import skincareCommercialImg from '@/assets/images/facewash/Skincare_product_commercial_photo.jpg';
import lipstickMarbleImg from '@/assets/images/lipstick/Lipstick_advertisement_on_marble.jpg';
import womenPerfumePedestalImg from '@/assets/images/women perfume/Perfume_bottle_on_stone_pedestal.jpg';

interface VideoItem {
  id: string;
  title: string;
  category: 'Corporate' | 'E-commerce' | 'Ads' | 'Viral Reels';
  image: string;
  duration?: string;
  description?: string;
}

const VIDEO_ITEMS: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'MEDICAL SERVICES CORPORATE VIDEO',
    category: 'Corporate',
    image: womenPerfumeCommercialImg,
    duration: '0:30',
    description: 'Cinematic commercial highlighting corporate medical innovation and patient care excellence.'
  },
  {
    id: 'vid-2',
    title: 'HEALTHCARE COMMERCIAL VIDEO',
    category: 'Corporate',
    image: skincareStoneImg,
    duration: '0:25',
    description: 'High-impact corporate storytelling and modern healthcare service presentation.'
  },
  {
    id: 'vid-3',
    title: 'MANUFACTURING PROCESS VIDEO',
    category: 'Corporate',
    image: brunetteImg,
    duration: '0:18',
    description: 'Step-by-step manufacturing and assembly showcase with clean motion graphics.'
  },
  {
    id: 'vid-4',
    title: 'CORPORATE TRAINING VIDEO',
    category: 'Corporate',
    image: tousledGuyImg,
    duration: '0:20',
    description: 'Engaging onboarding and employee development video modules.'
  },
  {
    id: 'vid-5',
    title: 'E-COMMERCE BRAND OVERVIEW',
    category: 'E-commerce',
    image: communityFriendsImg,
    duration: '0:15',
    description: 'Dynamic direct-to-consumer product showcase built for high social conversion.'
  },
  {
    id: 'vid-6',
    title: 'REAL ESTATE CORPORATE PRESENTATION',
    category: 'Corporate',
    image: menPerfumeLibraryImg,
    duration: '0:45',
    description: 'Architectural walkthrough and luxury commercial real estate investment video.'
  },
  {
    id: 'vid-7',
    title: 'ENTERPRISE BRAND PRESENTATION',
    category: 'Corporate',
    image: skincareCommercialImg,
    duration: '0:35',
    description: 'Global corporate anthem demonstrating brand legacy and modern vision.'
  },
  {
    id: 'vid-8',
    title: 'CORPORATE CULTURE VIDEO',
    category: 'Corporate',
    image: sunlightManImg,
    duration: '0:22',
    description: 'Authentic workplace culture, team values, and recruitment film.'
  },
  {
    id: 'vid-9',
    title: 'CORPORATE BRAND FILM',
    category: 'Corporate',
    image: windblownImg,
    duration: '0:30',
    description: 'Inspiring cinematic narrative crafted for enterprise keynotes and campaigns.'
  },
  {
    id: 'vid-10',
    title: 'CORPORATE EXPLAINER VIDEO',
    category: 'Corporate',
    image: pixieImg,
    duration: '0:20',
    description: 'Concise, visually clear system breakdown explaining complex workflows.'
  },
  {
    id: 'vid-11',
    title: 'AI PRODUCT ADVERTISING REEL',
    category: 'Ads',
    image: yasminImg,
    duration: '0:16',
    description: 'Viral UGC ad formatted for TikTok and Instagram reels to maximize ROAS.'
  },
  {
    id: 'vid-12',
    title: 'LUXURY COSMETICS BRAND REEL',
    category: 'Viral Reels',
    image: lipstickMarbleImg,
    duration: '0:24',
    description: 'Hyper-retention cosmetic showcase highlighting texture, glide, and packaging.'
  },
  {
    id: 'vid-13',
    title: 'PERFUME LAUNCH DOCUMENTARY',
    category: 'Viral Reels',
    image: womenPerfumePedestalImg,
    duration: '1:10',
    description: 'Behind the scenes fragrance formulation and bottle design journey.'
  },
  {
    id: 'vid-14',
    title: 'KEYNOTE PRODUCT EVENT REEL',
    category: 'Viral Reels',
    image: simoneImg,
    duration: '0:40',
    description: 'Fast-paced event recap capturing live demonstrations, reactions, and excitement.'
  }
];

const CATEGORIES = ['All', 'Corporate', 'E-commerce', 'Ads', 'Viral Reels'] as const;

interface ReelsPageProps {
  onBackToHome?: () => void;
  onNavigateToImages?: () => void;
}

export const ReelsPage: React.FC<ReelsPageProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const filteredList = selectedCategory === 'All'
    ? VIDEO_ITEMS
    : VIDEO_ITEMS.filter(v => v.category === selectedCategory);

  return (
    <div className="relative w-full min-h-screen pt-4 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      
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

      {/* Header Section matching Home Page Section Header Design */}
      <div className="relative z-10 pt-6 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          
          {/* Left: Giant Stacked Headline */}
          <div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-normal text-neutral-900 uppercase leading-[1.3]">
              AI VIDEO<br />
              PROJECTS
            </h2>
          </div>

          {/* Right: Description & Action matching Home Page Header */}
          <div className="max-w-md flex flex-col items-start gap-4">
            <p className="text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
              For brands that demand more than just quick cuts and captions. We edit high-impact videos that engage and convert using AI-powered systems.
            </p>
          </div>

        </div>
      </div>

      {/* Category Pills Bar matching Home Page Pill Buttons */}
      <div className="relative z-10 flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 mb-14">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 sm:px-7 py-2.5 rounded-full font-display text-xs sm:text-sm font-black tracking-wider uppercase transition-all active:scale-95 shadow-sm cursor-pointer ${
                isActive
                  ? 'bg-[#dcc6d5] hover:bg-[#d2b8cb] text-neutral-900 border border-white/80'
                  : 'bg-white/80 hover:bg-white text-neutral-800 border border-white/70'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ALL VIDEOS IN UNIFORM 9:16 RATIO FORMAT (Just like Images page) */}
      <div className="relative z-10 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredList.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setActiveVideo(vid)}
              className="group relative aspect-[9/16] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-neutral-950 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.22)] cursor-pointer transform hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.35)] transition-all duration-300"
            >
              {/* Video Thumbnail */}
              <img
                src={vid.image}
                alt={vid.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/15 group-hover:via-black/40 transition-colors" />

              {/* Center Frosted Circular Play Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-13 sm:w-15 h-13 sm:h-15 rounded-full bg-white/25 backdrop-blur-md border-[1.5px] border-white/80 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] group-hover:scale-115 group-hover:bg-white/40 transition-all duration-300">
                  <Play className="w-5 sm:w-6 h-5 sm:h-6 fill-white ml-0.5 text-white drop-shadow" />
                </div>
              </div>

              {/* Bottom Centered Display Title matching Home Page typography */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-center z-10">
                <h3 className="font-display text-white text-xs sm:text-sm md:text-base font-black uppercase tracking-wider drop-shadow-md leading-tight max-w-[92%] mx-auto">
                  {vid.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Button matching Home Page Button Design */}
      <div className="relative z-10 mt-16 flex justify-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-8 sm:px-9 py-3.5 bg-[#dcc6d5] hover:bg-[#d2b8cb] text-neutral-900 font-display text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-sm cursor-pointer"
        >
          VIEW MORE
        </button>
      </div>

      {/* Clean Interactive Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative bg-white rounded-[36px] max-w-sm sm:max-w-md w-full overflow-hidden shadow-2xl border-[3px] border-white my-auto p-3 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[9/16] w-full rounded-[26px] overflow-hidden bg-neutral-950 flex items-center justify-center shadow-inner">
              <img
                src={activeVideo.image}
                alt={activeVideo.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

              {/* Center Play Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 sm:w-18 h-16 sm:h-18 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-neutral-900 shadow-2xl transition-transform hover:scale-110 cursor-pointer z-10 border border-white"
              >
                <Play className="w-6 sm:w-7 h-6 sm:h-7 fill-neutral-900 ml-1" />
              </button>

              {/* Bottom Scrim Bar */}
              <div className="absolute bottom-4 inset-x-5 flex items-center justify-between text-white text-xs sm:text-sm font-display font-black uppercase tracking-wider">
                <span className="truncate mr-2">{activeVideo.title}</span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <Volume2 className="w-4 h-4 text-white/80" />
                  <span>{activeVideo.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
