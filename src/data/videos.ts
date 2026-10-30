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

export const VIDEO_CATEGORIES = ['All', 'Fashion', 'Beauty', 'Luxury', 'Commercials'] as const;
export type VideoCategory = (typeof VIDEO_CATEGORIES)[number];

export interface ShowcaseVideoItem {
  id: VideoId;
  category: Exclude<VideoCategory, 'All'>;
  image: string;
  videoSrc: string;
  streamSrc: string;
  highResSrc: string;
  quote: string;
  creator: string;
  avatar: string;
}

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
    'Beauty',
    'Delicate floral notes captured in pure Parisian luxury ✨'
  ),
  'natural-facewash': createVideoItem(
    'natural-facewash',
    'natural-facewash-skincare.mp4',
    'Beauty',
    'Pure botanical foaming cleanse for glowing, healthy skin 🌿'
  ),
  'lipstick-spotlight': createVideoItem(
    'lipstick-spotlight',
    'beauty-lipstick-spotlight.mp4',
    'Beauty',
    'Rich velvet matte pigment crafted for all-day comfort 💄'
  ),
  'men-perfume': createVideoItem(
    'men-perfume',
    'mens-luxury-perfume-nocturne.mp4',
    'Beauty',
    'Smoky cedarwood and warm amber for magnetic presence 🖤'
  ),
  'paris-runway': createVideoItem(
    'paris-runway',
    'paris-fashion-runway.mp4',
    'Fashion',
    'High-energy runway pacing and bold designer silhouettes 👠'
  ),
  'lipstick-application': createVideoItem(
    'lipstick-application',
    'cosmetic-lipstick-application.mp4',
    'Beauty',
    'Smooth contour glide and rich pigment for bold lips 💋'
  ),
  'chrome-nails': createVideoItem(
    'chrome-nails',
    'chrome-nail-art-atelier.mp4',
    'Beauty',
    'Handcrafted mirror chrome finish with fine studio art 💅'
  ),
  'streetwear-ferreri': createVideoItem(
    'streetwear-ferreri',
    'ferreri-streetwear-drop.mp4',
    'Fashion',
    'Heavyweight French terry streetwear for modern daily style ⚡'
  ),
  'sukoon-wellness': createVideoItem(
    'sukoon-wellness',
    'sukoon-wellness-essentials.mp4',
    'Fashion',
    'Mindful botanical wellness rituals to restore inner calm 🧘'
  ),
  'minimalist-nails': createVideoItem(
    'minimalist-nails',
    'minimalist-nail-routine.mp4',
    'Beauty',
    'Clean minimalist nude manicure with glass shine finish ✨'
  ),
  'perfume-noir': createVideoItem(
    'perfume-noir',
    'luxury-perfume-noir-splash.mp4',
    'Fashion',
    'Dark noir refractions and water splash luxury aesthetics 🌊'
  ),
  'fashion-lookbook': createVideoItem(
    'fashion-lookbook',
    'fashion-model-lookbook.mp4',
    'Fashion',
    'Editorial studio lighting and fluid contemporary motion 📸'
  ),
  'gourmet-food': createVideoItem(
    'gourmet-food',
    'gourmet-food-branding.mp4',
    'Commercials',
    'Artisan culinary craftsmanship with fresh gourmet plating 🍽️'
  ),
  'industrial-automation': createVideoItem(
    'industrial-automation',
    'industrial-manufacturing-process.mp4',
    'Commercials',
    'Precision industrial automation and high-speed robotics ⚙️'
  ),
  'jewelry-editorial': createVideoItem(
    'jewelry-editorial',
    'jewelry-model-editorial.mp4',
    'Luxury',
    'Handcrafted fine diamonds glowing in warm golden light 💎'
  ),
  'luxury-jewelry': createVideoItem(
    'luxury-jewelry',
    'luxury-jewelry-collection.mp4',
    'Luxury',
    'Brilliant diamond pavé detailing sculpted in 18k gold 💍'
  ),
  'technical-tee': createVideoItem(
    'technical-tee',
    'streetwear-tee-technical.mp4',
    'Fashion',
    'Relaxed drop-shoulder technical fit in dense cotton 🛹'
  ),
  'viral-fashion': createVideoItem(
    'viral-fashion',
    'viral-fashion-trends.mp4',
    'Fashion',
    'Dynamic aesthetic street trends setting modern culture 🔥'
  ),
};

// ============================================================================
// 2. TOP HERO SECTION: 5 SHOWCASE VIDEOS (Fanned-out top cards: #4, #1, #11, #5, #7)
// ============================================================================
export const TOP_HERO_VIDEOS: TopHeroVideoItem[] = [
  {
    id: 'jewelry-editorial',
    src: VIDEOS['jewelry-editorial'].videoSrc,
    poster: VIDEOS['jewelry-editorial'].image,
  },
  {
    id: 'fashion-lookbook',
    src: VIDEOS['fashion-lookbook'].videoSrc,
    poster: VIDEOS['fashion-lookbook'].image,
  },
  {
    id: 'men-perfume',
    src: VIDEOS['men-perfume'].videoSrc,
    poster: VIDEOS['men-perfume'].image,
  },
  {
    id: 'technical-tee',
    src: VIDEOS['technical-tee'].videoSrc,
    poster: VIDEOS['technical-tee'].image,
  },
  {
    id: 'women-perfume',
    src: VIDEOS['women-perfume'].videoSrc,
    poster: VIDEOS['women-perfume'].image,
  },
];

// ============================================================================
// 3. SHOWCASE GRID SECTION: Arranged 1 to 18 with categorized tabs
// ============================================================================
export const SHOWCASE_GRID_VIDEOS: ShowcaseVideoItem[] = [
  VIDEOS['fashion-lookbook'],          // 1. Fashion
  VIDEOS['sukoon-wellness'],           // 2. Fashion
  VIDEOS['streetwear-ferreri'],        // 3. Fashion
  VIDEOS['jewelry-editorial'],         // 4. Luxury
  VIDEOS['technical-tee'],             // 5. Fashion
  VIDEOS['perfume-noir'],              // 6. Fashion
  VIDEOS['women-perfume'],             // 7. Beauty
  VIDEOS['luxury-jewelry'],            // 8. Luxury
  VIDEOS['gourmet-food'],              // 9. Commercials
  VIDEOS['viral-fashion'],             // 10. Fashion
  VIDEOS['men-perfume'],               // 11. Beauty
  VIDEOS['lipstick-spotlight'],        // 12. Beauty
  VIDEOS['natural-facewash'],          // 13. Beauty
  VIDEOS['lipstick-application'],      // 14. Beauty
  VIDEOS['chrome-nails'],              // 15. Beauty
  VIDEOS['minimalist-nails'],          // 16. Beauty
  VIDEOS['paris-runway'],              // 17. Fashion
  VIDEOS['industrial-automation'],     // 18. Commercials
];
