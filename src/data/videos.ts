import {
  getCloudinaryVideo,
  getCloudinaryVideoThumbnail,
} from '@/utils/cloudinary';
import mindtrixLogo from '@/assets/Mindtrix-Media-Logo.jpeg';

// ponytail: import all videos directly from src/assets/videos
const assetVideos = import.meta.glob<string>('../assets/videos/*.mp4', {
  eager: true,
  import: 'default',
});

const getAssetVideo = (fileName: string): string =>
  assetVideos[`../assets/videos/${fileName}`] || getCloudinaryVideo(fileName);

export type VideoId =
  | 'women-perfume'
  | 'natural-facewash'
  | 'lipstick-spotlight'
  | 'men-perfume'
  | 'paris-runway'
  | 'lipstick-application'
  | 'chrome-nails'
  | 'streetwear-ferreri'
  | 'sukoon-wellness'
  | 'minimalist-nails'
  | 'perfume-noir'
  | 'fashion-lookbook'
  | 'gourmet-food'
  | 'industrial-automation'
  | 'jewelry-editorial'
  | 'luxury-jewelry'
  | 'technical-tee'
  | 'viral-fashion';

export interface TopHeroVideoItem {
  id: string;
  src: string;
  poster: string;
}

export interface ShowcaseVideoItem {
  id: VideoId;
  category: 'Corporate' | 'E-commerce' | 'Ads' | 'Viral Reels';
  image: string;
  videoSrc: string;
  streamSrc: string;
  highResSrc: string;
  quote: string;
  creator: string;
  avatar: string;
}

export const VIDEO_CATEGORIES = ['All', 'Corporate', 'E-commerce', 'Ads', 'Viral Reels'] as const;
export type VideoCategory = (typeof VIDEO_CATEGORIES)[number];

// Helper to construct showcase video items
const createVideoItem = (
  id: VideoId,
  fileName: string,
  category: ShowcaseVideoItem['category'],
  quote: string
): ShowcaseVideoItem => {
  const src = getAssetVideo(fileName);
  return {
    id,
    category,
    image: getCloudinaryVideoThumbnail(fileName),
    videoSrc: src,
    streamSrc: src,
    highResSrc: src,
    quote,
    creator: 'Mindtrix Media',
    avatar: mindtrixLogo,
  };
};

// ============================================================================
// 1. ALL VIDEOS CATALOG: Each video indexed by its unique ID
// ============================================================================
export const VIDEOS: Record<VideoId, ShowcaseVideoItem> = {
  'women-perfume': createVideoItem(
    'women-perfume',
    'womens-luxury-perfume-elegance.mp4',
    'Ads',
    'Delicate floral notes captured in pure Parisian luxury ✨'
  ),
  'natural-facewash': createVideoItem(
    'natural-facewash',
    'natural-facewash-skincare.mp4',
    'E-commerce',
    'Pure botanical foaming cleanse for glowing, healthy skin 🌿'
  ),
  'lipstick-spotlight': createVideoItem(
    'lipstick-spotlight',
    'beauty-lipstick-spotlight.mp4',
    'Viral Reels',
    'Rich velvet matte pigment crafted for all-day comfort 💄'
  ),
  'men-perfume': createVideoItem(
    'men-perfume',
    'mens-luxury-perfume-nocturne.mp4',
    'Ads',
    'Smoky cedarwood and warm amber for magnetic presence 🖤'
  ),
  'paris-runway': createVideoItem(
    'paris-runway',
    'paris-fashion-runway.mp4',
    'Viral Reels',
    'High-energy runway pacing and bold designer silhouettes 👠'
  ),
  'lipstick-application': createVideoItem(
    'lipstick-application',
    'cosmetic-lipstick-application.mp4',
    'Viral Reels',
    'Smooth contour glide and rich pigment for bold lips 💋'
  ),
  'chrome-nails': createVideoItem(
    'chrome-nails',
    'chrome-nail-art-atelier.mp4',
    'Viral Reels',
    'Handcrafted mirror chrome finish with fine studio art 💅'
  ),
  'streetwear-ferreri': createVideoItem(
    'streetwear-ferreri',
    'ferreri-streetwear-drop.mp4',
    'E-commerce',
    'Heavyweight French terry streetwear for modern daily style ⚡'
  ),
  'sukoon-wellness': createVideoItem(
    'sukoon-wellness',
    'sukoon-wellness-essentials.mp4',
    'Corporate',
    'Mindful botanical wellness rituals to restore inner calm 🧘'
  ),
  'minimalist-nails': createVideoItem(
    'minimalist-nails',
    'minimalist-nail-routine.mp4',
    'Viral Reels',
    'Clean minimalist nude manicure with glass shine finish ✨'
  ),
  'perfume-noir': createVideoItem(
    'perfume-noir',
    'luxury-perfume-noir-splash.mp4',
    'Corporate',
    'Dark noir refractions and water splash luxury aesthetics 🌊'
  ),
  'fashion-lookbook': createVideoItem(
    'fashion-lookbook',
    'fashion-model-lookbook.mp4',
    'Viral Reels',
    'Editorial studio lighting and fluid contemporary motion 📸'
  ),
  'gourmet-food': createVideoItem(
    'gourmet-food',
    'gourmet-food-branding.mp4',
    'Ads',
    'Artisan culinary craftsmanship with fresh gourmet plating 🍽️'
  ),
  'industrial-automation': createVideoItem(
    'industrial-automation',
    'industrial-manufacturing-process.mp4',
    'Corporate',
    'Precision industrial automation and high-speed robotics ⚙️'
  ),
  'jewelry-editorial': createVideoItem(
    'jewelry-editorial',
    'jewelry-model-editorial.mp4',
    'Ads',
    'Handcrafted fine diamonds glowing in warm golden light 💎'
  ),
  'luxury-jewelry': createVideoItem(
    'luxury-jewelry',
    'luxury-jewelry-collection.mp4',
    'E-commerce',
    'Brilliant diamond pavé detailing sculpted in 18k gold 💍'
  ),
  'technical-tee': createVideoItem(
    'technical-tee',
    'streetwear-tee-technical.mp4',
    'E-commerce',
    'Relaxed drop-shoulder technical fit in dense cotton 🛹'
  ),
  'viral-fashion': createVideoItem(
    'viral-fashion',
    'viral-fashion-trends.mp4',
    'Viral Reels',
    'Dynamic aesthetic street trends setting modern culture 🔥'
  ),
};

// ============================================================================
// 2. TOP HERO SECTION: 5 SHOWCASE VIDEOS (Fanned-out top cards)
// ============================================================================
export const TOP_HERO_VIDEOS: TopHeroVideoItem[] = [
  {
    id: 'lipstick-application',
    src: VIDEOS['lipstick-application'].videoSrc,
    poster: VIDEOS['lipstick-application'].image,
  },
  {
    id: 'paris-runway',
    src: VIDEOS['paris-runway'].videoSrc,
    poster: VIDEOS['paris-runway'].image,
  },
  {
    id: 'men-perfume',
    src: VIDEOS['men-perfume'].videoSrc,
    poster: VIDEOS['men-perfume'].image,
  },
  {
    id: 'women-perfume',
    src: VIDEOS['women-perfume'].videoSrc,
    poster: VIDEOS['women-perfume'].image,
  },
  {
    id: 'natural-facewash',
    src: VIDEOS['natural-facewash'].videoSrc,
    poster: VIDEOS['natural-facewash'].image,
  },
];

// ============================================================================
// 3. SHOWCASE GRID SECTION: Easily rearrange video sequence by ID
// ============================================================================
export const SHOWCASE_GRID_VIDEOS: ShowcaseVideoItem[] = [
  VIDEOS['fashion-lookbook'],
  VIDEOS['sukoon-wellness'],
  VIDEOS['streetwear-ferreri'],
  VIDEOS['jewelry-editorial'],
  VIDEOS['technical-tee'],
  VIDEOS['perfume-noir'],
  VIDEOS['women-perfume'],
  VIDEOS['luxury-jewelry'],
  VIDEOS['gourmet-food'],
  VIDEOS['viral-fashion'],
  VIDEOS['men-perfume'],
  VIDEOS['lipstick-spotlight'],
  VIDEOS['natural-facewash'],
  VIDEOS['lipstick-application'],
  VIDEOS['chrome-nails'],
  VIDEOS['minimalist-nails'],
  VIDEOS['paris-runway'],
  VIDEOS['industrial-automation'],
];
