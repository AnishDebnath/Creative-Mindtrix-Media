import React, { useState, useEffect } from 'react';
import {
  SHOWCASE_GRID_VIDEOS as VIDEO_ITEMS,
  VIDEO_CATEGORIES as CATEGORIES,
  type ShowcaseVideoItem as VideoItem,
} from '@/data/videos';
import { Hero } from './Hero';
import { CategoryFilter } from './CategoryFilter';
import { VideoGrid } from './VideoGrid';
import { VideoModal } from './VideoModal';

interface ReelsPageProps {
  currentPath?: string;
  onNavigateToContact?: () => void;
}

// ponytail: Helper to resolve active video category directly from URL path (/videos/luxury -> 'Luxury')
const getVideoCategoryFromPath = (pathString?: string): string => {
  const current = pathString || (typeof window !== 'undefined' ? window.location.pathname : '');
  const clean = current.toLowerCase().replace(/\/+$/, '');
  const match = clean.match(/^\/(?:videos|reels)\/(.+)$/);
  if (match) {
    const slug = match[1].replace(/[^a-z0-9]/g, '');
    const found = CATEGORIES.find(
      (c) =>
        c !== 'All' &&
        (c.toLowerCase().replace(/[^a-z0-9]/g, '') === slug ||
          c.toLowerCase().replace(/[^a-z0-9]/g, '').startsWith(slug) ||
          slug.startsWith(c.toLowerCase().replace(/[^a-z0-9]/g, '')))
    );
    if (found) return found;
  }
  return 'All';
};

export const ReelsPage: React.FC<ReelsPageProps> = ({ currentPath, onNavigateToContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(() => getVideoCategoryFromPath(currentPath));
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  // Sync category when URL changes (e.g. navigation or browser back/forward)
  useEffect(() => {
    setSelectedCategory(getVideoCategoryFromPath(currentPath));
  }, [currentPath]);

  useEffect(() => {
    const handlePopState = () => {
      setSelectedCategory(getVideoCategoryFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // When shared category URL is loaded directly, scroll down directly to that position
  useEffect(() => {
    const initialCat = getVideoCategoryFromPath();
    if (initialCat !== 'All') {
      const timer = setTimeout(() => {
        const el = document.getElementById('video-category-filter');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 180);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);

    const targetUrl =
      category === 'All'
        ? '/videos'
        : `/videos/${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

    if (window.location.pathname !== targetUrl) {
      window.history.pushState(null, '', targetUrl);
    }

    if (category !== 'All') {
      const el = document.getElementById('video-category-filter');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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

  const handleRedirectToContact = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    } else {
      window.location.href = '/contact';
    }
  };

  const filteredList =
    selectedCategory === 'All'
      ? VIDEO_ITEMS
      : VIDEO_ITEMS.filter((v) => v.category === selectedCategory);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(250,237,229,0.3) 50%, rgba(247,237,245,0.7) 80%, #f7edf5 100%)',
      }}
    >
      {/* Background Giant Watermark Typography: MINDTRIX */}
      <div className="absolute top-0 inset-x-0 flex items-start justify-center pointer-events-none select-none z-0 opacity-20 overflow-hidden">
        <svg
          viewBox="0 0 1000 200"
          className="w-full h-[200px] sm:h-[260px] md:h-[300px]"
          preserveAspectRatio="none"
        >
          <text
            x="0"
            y="50%"
            dominantBaseline="central"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="#dcc6d5"
            fontFamily="'Anton', 'Oswald', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="195"
          >
            MINDTRIX
          </text>
        </svg>
      </div>

      <div className="relative w-full pt-4 pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Hero Section */}
        <Hero onStartProject={handleRedirectToContact} />

        {/* Category Filter Tabs */}
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* All Videos Grid */}
        <VideoGrid videos={filteredList} onSelectVideo={setActiveVideo} />

        {/* Video Lightbox Modal */}
        <VideoModal
          activeVideo={activeVideo}
          videos={filteredList}
          onClose={() => setActiveVideo(null)}
          onSelectVideo={setActiveVideo}
        />
      </div>
    </div>
  );
};
