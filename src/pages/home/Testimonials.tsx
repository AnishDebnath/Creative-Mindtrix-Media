import React, { useState, useRef, useEffect } from 'react';
import { SectionTag } from '@/components/ui/SectionTag';
import { motion } from 'framer-motion';
import { Star, Volume2, VolumeX, Heart, Send } from 'lucide-react';

// Brand & Avatars
import logoImg from '@/assets/Mindtrix-Media-Logo.jpeg';
import avatarGreenCapImg from '@/assets/img/avatar_green_cap_1790979403136.jpg';
import avatarHipsterBeardImg from '@/assets/img/avatar_hipster_beard_1790979384816.jpg';
import brunetteImg from '@/assets/img/brunette_shirt_left_1790982842053.jpg';
import uweImg from '@/assets/img/profile_uwe_1790976747637.jpg';
import matthiasCardImg from '@/assets/img/card_matthias_1790977103900.jpg';
import johannaCardImg from '@/assets/img/card_johanna_1790977118147.jpg';
import sarahCardImg from '@/assets/img/card_sarah_1790977156627.jpg';
import paulCardImg from '@/assets/img/card_paul_1790977146486.jpg';

// Cloudinary Video & Thumbnail
import { getCloudinaryVideo, getCloudinaryImage } from '@/utils/cloudinary';

interface StoryReel {
  id: string;
  video: string;
  poster: string;
  time: string;
  tag: string;
}

const STORY_REELS: StoryReel[] = [
  {
    id: 'facewash',
    video: getCloudinaryVideo('facewash.mp4', { optimize: true, quality: 'good', width: 720 }),
    poster: getCloudinaryImage('facewash/Skincare_advertising_photograph.jpg'),
    time: '2h',
    tag: 'Skincare UGC Reel',
  },
  {
    id: 'perfume',
    video: getCloudinaryVideo('women-perfume.mp4', { optimize: true, quality: 'good', width: 720 }),
    poster: getCloudinaryImage('women-perfume/Perfume_bottle_flat-lay_photograph.jpg'),
    time: '4h',
    tag: 'Luxury Perfume Commercial',
  },
  {
    id: 'lipstick',
    video: getCloudinaryVideo('lipstick-product.mp4', { optimize: true, quality: 'good', width: 720 }),
    poster: getCloudinaryImage('lipstick/Luxury_lipstick_advertising_phot.jpg'),
    time: '6h',
    tag: 'Beauty Product Spotlight',
  },
];

interface TestimonialCardData {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  stars?: number;
}

const TOP_ROW_TESTIMONIALS: TestimonialCardData[] = [
  {
    quote: "Our engagement tripled and our ad costs dropped. Turns out when content looks real, people actually click.",
    author: "James Adler",
    role: "Founder, Duskline",
    avatar: matthiasCardImg,
    stars: 5,
  },
  {
    quote: "I finally found an agency that gets speed and aesthetic. The weekly deliverables exceeded our expectations from day one.",
    author: "Rachel Lin",
    role: "Head of Growth, Aura",
    avatar: sarahCardImg,
    stars: 5,
  },
  {
    quote: "Within 30 days we had more content than we'd made in a full year, and it was better content. The results exceeded our expectations.",
    author: "Tom Nakamura",
    role: "CEO, Velour Co.",
    avatar: avatarHipsterBeardImg,
    stars: 5,
  },
  {
    quote: "We tried two agencies before this and got nothing but pitch decks and excuses. Real results happened fast.",
    author: "Sara Kim",
    role: "CMO, Oraly",
    avatar: brunetteImg,
    stars: 5,
  },
  {
    quote: "Mindtrix Media streamlined our entire visual pipeline. High performance creative produced without the endless delays.",
    author: "Marcus Vance",
    role: "Founder, Veloce Goods",
    avatar: uweImg,
    stars: 5,
  },
];

const BOTTOM_ROW_TESTIMONIALS: TestimonialCardData[] = [
  {
    quote: "Social media ad creative used to be shouting into a void. Now our ROAS is consistently 3.5x+ across paid campaigns.",
    author: "Alicia Gomez",
    role: "Marketing Director, Lumina",
    avatar: johannaCardImg,
    stars: 5,
  },
  {
    quote: "Mindtrix Media gave us a real strategy, real creators, and real results within 60 days, helping us grow faster with measurable impact.",
    author: "Ethan Brooks",
    role: "Wellness, Oralyn Skincare",
    avatar: paulCardImg,
    stars: 5,
  },
  {
    quote: "120+ video assets delivered in record time with zero compromise on visual finish. Our team can finally focus on scaling.",
    author: "Chloe Dubois",
    role: "Creative Lead, Maison",
    avatar: avatarGreenCapImg,
    stars: 5,
  },
  {
    quote: "With Mindtrix Media, we saw structured strategy, quality creators, and strong results within two months.",
    author: "Noah Parker",
    role: "Brand Strategist, Mintwave",
    avatar: matthiasCardImg,
    stars: 5,
  },
  {
    quote: "Our CTR increased by 84% in the first two weeks of running these reels. The conversion speak for itself.",
    author: "Elena Rostova",
    role: "VP Ecommerce, SORA",
    avatar: brunetteImg,
    stars: 5,
  },
];

const ReviewCard: React.FC<{ card: TestimonialCardData }> = ({ card }) => {
  return (
    <div className="bg-white/95 backdrop-blur-xs rounded-[22px] p-5 sm:p-6 shadow-[0_12px_36px_-12px_rgba(61,32,53,0.1),0_4px_12px_-2px_rgba(237,169,112,0.06)] border border-[#ebdce7]/85 w-[290px] sm:w-[330px] md:w-[350px] shrink-0 text-left transition-transform duration-300 hover:-translate-y-1">
      {/* 5 Filled Golden Peach Stars */}
      <div className="flex text-[#eda970] gap-1 mb-3.5">
        {[...Array(card.stars || 5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#eda970] text-[#eda970]" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-neutral-700 text-[13px] sm:text-[13.5px] leading-relaxed font-normal mb-5 min-h-[64px]">
        {card.quote}
      </p>

      {/* Author info */}
      <div className="flex items-center gap-3 pt-1">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-neutral-100 ring-2 ring-white shadow-xs shrink-0">
          <img
            src={card.avatar}
            alt={card.author}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-neutral-900 text-xs sm:text-[13.5px] leading-tight truncate">
            {card.author}
          </h4>
          <p className="text-neutral-500 text-[11px] sm:text-xs font-medium truncate mt-0.5">
            {card.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentStory = STORY_REELS[activeStoryIndex];

  const handleNextStory = () => {
    setProgress(0);
    setActiveStoryIndex((prev) => (prev + 1) % STORY_REELS.length);
  };

  const handlePrevStory = () => {
    setProgress(0);
    setActiveStoryIndex((prev) => (prev - 1 + STORY_REELS.length) % STORY_REELS.length);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  // Track video playback progress to update the Instagram story progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p);
    }
  };

  // Ensure autoplay on story change
  useEffect(() => {
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [activeStoryIndex]);

  return (
    <section
      id="testimonials"
      className="relative w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #eae3fb 0%, #faede5 50%, #f7edf5 100%)',
      }}
    >
      {/* Website Theme Ambient Radial Glows (Warm peach, blush mauve & soft lavender) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] bg-gradient-to-r from-[#dcc6d5]/35 via-[#cfc1ee]/25 to-[#eda970]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-gradient-to-l from-[#3d2035]/12 via-[#dcc6d5]/20 to-[#eda970]/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        {/* Big Bold Two-Line Headline */}
        <SectionTag label="Client Reviews" className="mb-4" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black uppercase text-neutral-900 leading-[1.06] tracking-tight mb-5"
        >
          BRANDS THAT CHOSE
          <br />
          REAL OVER PERFECT.
        </motion.h2>

        {/* Social Proof Avatars + Stars + Count in Theme Glass Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-12 sm:mb-16"
        >
          {/* Overlapping circular avatars */}
          <div className="flex -space-x-2.5 overflow-hidden p-0.5">
            <img
              src={avatarGreenCapImg}
              alt="Client"
              className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
            />
            <img
              src={avatarHipsterBeardImg}
              alt="Client"
              className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
            />
            <img
              src={brunetteImg}
              alt="Client"
              className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
            />
            <img
              src={uweImg}
              alt="Client"
              className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
            />
          </div>

          {/* Golden Peach Stars & Rating Text with theme badge */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#ebdce7] shadow-xs">
            <div className="flex text-[#eda970] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#eda970] text-[#eda970]" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-neutral-800 tracking-tight">
              4.9/5 from 120+ brands
            </span>
          </div>
        </motion.div>
      </div>

      {/* Cards Area with Mask and Centered Phone Mockup */}
      <div className="relative w-full max-w-[1440px] mx-auto min-h-[640px] sm:min-h-[680px] flex items-center justify-center">

        {/* Center Phone Mockup (exact same size and chassis architecture as Hero Section) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[285px] sm:w-[305px] md:w-[320px] rounded-[48px] bg-black p-[5px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.15)] border-[4px] border-[#18181a]"
        >
          {/* Inner Screen Canvas - Exact same height as Hero Section (595px / 630px) */}
          <div className="relative rounded-[42px] overflow-hidden bg-black text-white h-[595px] sm:h-[630px] flex flex-col justify-between shadow-inner select-none">
            
            {/* Full-bleed Active Reel Video */}
            <video
              key={currentStory.id}
              ref={videoRef}
              src={currentStory.video}
              poster={currentStory.poster}
              autoPlay
              muted={isMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleNextStory}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Clickable Touch Zones for Story Navigation (Left 30% = Prev, Right 70% = Next) */}
            <div className="absolute inset-0 z-15 flex pointer-events-auto">
              <div
                onClick={handlePrevStory}
                className="w-[30%] h-full cursor-pointer"
                title="Previous story"
              />
              <div
                onClick={handleNextStory}
                className="w-[70%] h-full cursor-pointer"
                title="Next story"
              />
            </div>

            {/* Subtle Vignette Overlays for Story UI Readability */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 via-black/35 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

            {/* TOP ZONE: Dynamic Island Notch + 3 Instagram Story Timer Bars + Profile Header */}
            <div className="relative z-20 flex flex-col gap-2.5 pt-3 px-3.5 pointer-events-none">
              
              {/* Dynamic Island Notch - Same dimensions as Hero Section */}
              <div className="w-[86px] h-[23px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-sm mx-auto mb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#111116] border border-neutral-800 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#0a0a14]" />
                </div>
                <div className="w-2 h-2 rounded-full bg-[#0d0d18] border border-neutral-800" />
              </div>

              {/* 3 Top View Timer Bars (Instagram Story Style) */}
              <div className="flex gap-1.5 w-full px-1 pointer-events-auto">
                {STORY_REELS.map((story, idx) => (
                  <button
                    key={story.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveStoryIndex(idx);
                      setProgress(0);
                    }}
                    className="h-[2.5px] bg-white/35 rounded-full flex-1 overflow-hidden cursor-pointer p-0 border-0"
                    title={`Jump to story ${idx + 1}`}
                  >
                    <div
                      className="h-full bg-white transition-[width] ease-linear rounded-full"
                      style={{
                        width:
                          idx < activeStoryIndex
                            ? '100%'
                            : idx === activeStoryIndex
                            ? `${progress}%`
                            : '0%',
                        transitionDuration: idx === activeStoryIndex ? '120ms' : '0ms',
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* Story Account Header Bar with Mindtrix Media Logo and Name */}
              <div className="flex items-center justify-between px-1 pt-0.5 pointer-events-auto">
                {/* Brand Logo + Name + Verified Badge */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden ring-1.5 ring-white/90 shadow-xs shrink-0 bg-white p-[1px]">
                    <img
                      src={logoImg}
                      alt="Mindtrix Media"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs sm:text-[13px] text-white tracking-tight drop-shadow-sm">
                      mindtrix.media
                    </span>
                    {/* Blue Verified Badge */}
                    <div className="w-3.5 h-3.5 rounded-full bg-[#0095f6] text-white flex items-center justify-center shadow-xs shrink-0">
                      <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                    <span className="text-[11px] text-white/75 font-medium ml-0.5">
                      {currentStory.time}
                    </span>
                  </div>
                </div>

                {/* Sound Mute/Unmute Toggle Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  aria-label={isMuted ? "Unmute reel" : "Mute reel"}
                  className="w-7 h-7 rounded-full bg-gradient-to-r from-[#2f182a]/80 via-[#3d2035]/80 to-[#542947]/80 hover:opacity-90 backdrop-blur-md flex items-center justify-center text-white/95 transition-all cursor-pointer border border-[#eda970]/30 shadow-xs"
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 text-[#eda970]" />
                  )}
                </button>
              </div>
            </div>

            {/* BOTTOM ZONE: Instagram Story Quick Action Pill + Home Indicator Bar */}
            <div className="relative z-20 flex flex-col items-center gap-2.5 pb-2 px-3.5 pointer-events-auto">
              <div className="flex items-center gap-2 w-full">
                {/* Send Message Input Pill */}
                <div className="flex-1 h-8 rounded-full border border-white/30 bg-gradient-to-r from-[#2f182a]/55 via-[#3d2035]/55 to-[#542947]/55 backdrop-blur-md px-3.5 flex items-center text-[11px] text-white/85">
                  <span>Send message...</span>
                </div>
                {/* Story Action Icons */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white/90 hover:text-white cursor-pointer transition-colors">
                  <Heart className="w-4 h-4 fill-[#eda970]/25 stroke-[#eda970]" />
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white/90 hover:text-white cursor-pointer transition-colors">
                  <Send className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* iOS Home Indicator Bar */}
              <div className="w-28 h-1 bg-white/80 rounded-full mt-1 mb-0.5 shadow-xs" />
            </div>

          </div>
        </motion.div>

        {/* 2-Row Horizontal Marquee Background Cards with smooth bilateral edge-fading mask */}
        <div
          className="w-full space-y-4 sm:space-y-6 overflow-hidden py-3"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          {/* Top Row Marquee (Left to Right flow) */}
          <motion.div
            className="flex gap-4 sm:gap-6 w-max"
            animate={{ x: ['-25%', '0%'] }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...TOP_ROW_TESTIMONIALS, ...TOP_ROW_TESTIMONIALS, ...TOP_ROW_TESTIMONIALS].map((card, idx) => (
              <ReviewCard key={`top-${idx}`} card={card} />
            ))}
          </motion.div>

          {/* Bottom Row Marquee (Right to Left flow) */}
          <motion.div
            className="flex gap-4 sm:gap-6 w-max"
            animate={{ x: ['0%', '-25%'] }}
            transition={{
              duration: 42,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...BOTTOM_ROW_TESTIMONIALS, ...BOTTOM_ROW_TESTIMONIALS, ...BOTTOM_ROW_TESTIMONIALS].map((card, idx) => (
              <ReviewCard key={`bot-${idx}`} card={card} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
