import React, { useState, useRef, useEffect } from 'react';
import { Play, Check, Heart, MessageCircle, Repeat2, Send, MoreHorizontal } from 'lucide-react';
import mindtrixLogo from '@/assets/Mindtrix-Media-Logo.jpeg';
import type { ShowcaseVideoItem as VideoItem } from '@/data/videos';

interface ReelCardProps {
  vid: VideoItem;
  onSelect: (vid: VideoItem) => void;
}

export const ReelCard: React.FC<ReelCardProps> = ({ vid, onSelect }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

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
            setIsInView(true);
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: '200px 0px', threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={() => onSelect(vid)}
      className="group relative aspect-[9/16] w-full rounded-[20px] sm:rounded-[32px] overflow-hidden bg-neutral-950 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.25)] cursor-pointer transform hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.4)] transition-all duration-300"
    >
      {/* Direct video playback with middle frame poster thumbnail */}
      <video
        ref={videoRef}
        src={isInView ? vid.streamSrc : undefined}
        poster={vid.image}
        autoPlay
        loop
        muted
        playsInline
        preload={isInView ? 'metadata' : 'none'}
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

      {/* Right-Side Vertical Social Action Bar */}
      <div className="absolute right-1.5 sm:right-2.5 bottom-2.5 sm:bottom-3.5 z-20 flex flex-col items-center gap-2 sm:gap-3 select-none pointer-events-auto">
        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex flex-col items-center text-white group/btn cursor-pointer transition-transform active:scale-90"
        >
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] stroke-[1.8] group-hover/btn:text-rose-400 group-hover/btn:scale-110 transition-all" />
          <span className="text-[8.5px] sm:text-[10px] font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mt-0.5 leading-none">
            5,242
          </span>
        </button>

        {/* Comment Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex flex-col items-center text-white group/btn cursor-pointer transition-transform active:scale-90"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] stroke-[1.8] group-hover/btn:scale-110 transition-all" />
          <span className="text-[8.5px] sm:text-[10px] font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mt-0.5 leading-none">
            102
          </span>
        </button>

        {/* Repost Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex flex-col items-center text-white group/btn cursor-pointer transition-transform active:scale-90"
        >
          <Repeat2 className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] stroke-[1.8] group-hover/btn:scale-110 transition-all" />
          <span className="text-[8.5px] sm:text-[10px] font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mt-0.5 leading-none">
            350
          </span>
        </button>

        {/* Share Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex flex-col items-center text-white group/btn cursor-pointer transition-transform active:scale-90"
        >
          <Send className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] stroke-[1.8] group-hover/btn:scale-110 transition-all -rotate-12" />
          <span className="text-[8.5px] sm:text-[10px] font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mt-0.5 leading-none">
            10.8K
          </span>
        </button>

        {/* More Options */}
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="text-white hover:opacity-80 transition-opacity p-0.5 cursor-pointer -my-0.5"
        >
          <MoreHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" />
        </button>

        {/* Bottom Audio Album Thumbnail */}
        <div className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 rounded-[4px] sm:rounded-[5px] overflow-hidden ring-1 ring-white/70 shadow-md bg-neutral-900 shrink-0 mt-0.5">
          <img
            src={vid.avatar || mindtrixLogo}
            alt={`${vid.creator || 'Mindtrix Media'} Audio Album Thumbnail`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Content: Creator Handle + Badge + Follow + Caption */}
      <div className="absolute inset-x-0 bottom-0 pr-9 sm:pr-12 pl-2.5 sm:pl-3 pb-2.5 sm:pb-3.5 flex flex-col items-start gap-1 z-10 select-none text-left pointer-events-none">
        <div className="flex items-center gap-1 sm:gap-1.5 max-w-full flex-wrap pointer-events-auto">
          <div className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 rounded-full overflow-hidden ring-1 ring-white/80 shadow-sm shrink-0 bg-neutral-800">
            <img
              src={vid.avatar || mindtrixLogo}
              alt={`${vid.creator || 'Mindtrix Media'} creator profile`}
              className="w-full h-full object-cover"
            />
          </div>

          <span className="text-white font-bold text-[10px] sm:text-xs tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] truncate max-w-[70px] xs:max-w-none">
            {vid.creator || 'Mindtrix Media'}
          </span>

          <span className="inline-flex items-center justify-center w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white text-neutral-900 shrink-0 shadow-xs">
            <Check className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-neutral-900 stroke-[3.5]" />
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="px-1 sm:px-1.5 py-0.5 rounded-[3px] sm:rounded-[4px] border border-white/60 bg-black/25 hover:bg-white hover:text-neutral-950 text-white text-[8px] sm:text-[10px] font-bold tracking-tight backdrop-blur-xs transition-colors cursor-pointer leading-none"
          >
            Follow
          </button>
        </div>

        <p className="text-white/95 text-[9px] sm:text-[11px] font-normal leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] line-clamp-2 pr-1">
          {vid.quote || 'Creators aren’t lucky. They’re trained.'}
        </p>
      </div>
    </div>
  );
};

