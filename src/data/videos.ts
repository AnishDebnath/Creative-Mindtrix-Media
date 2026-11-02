import mindtrixLogo from '@/assets/Mindtrix-Media-Logo.jpeg';
import { getCloudinaryVideoUrl, getCloudinaryVideoThumbnail } from '@/utils/cloudinary';

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
  | 'viral-fashion'
  | 'gold-ring-commercial'
  | 'titan-watch-commercial'
  | 'luxury-watch-showcase'
  | 'ganesha-ring-showcase'
  | 'gold-ring-studio'
  | 'gold-ring-ad'
  | 'gold-watch-production';

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

// Helper to construct showcase video items strictly from Cloudinary
const createVideoItem = (
  id: VideoId,
  fileName: string,
  category: ShowcaseVideoItem['category'],
  quote: string
): ShowcaseVideoItem => {
  const videoSrc = getCloudinaryVideoUrl(category, fileName);
  const poster = getCloudinaryVideoThumbnail(fileName) || '';

  return {
    id,
    category,
    image: poster,
    videoSrc,
    streamSrc: videoSrc,
    highResSrc: videoSrc,
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
  'gold-ring-commercial': createVideoItem(
    'gold-ring-commercial',
    'gold-ring-commercial-camera-sequence.mp4',
    'Luxury',
    'Sculpted 22k gold ring cinematic commercial sequence ✨'
  ),
  'titan-watch-commercial': createVideoItem(
    'titan-watch-commercial',
    'titan-gold-watch-commercial.mp4',
    'Luxury',
    'Titan luxury gold watch crafted with timeless elegance ⌚'
  ),
  'luxury-watch-showcase': createVideoItem(
    'luxury-watch-showcase',
    'luxury-gold-watch-commercial-showcase.mp4',
    'Luxury',
    'High-precision gold watch commercial studio showcase ⚡'
  ),
  'ganesha-ring-showcase': createVideoItem(
    'ganesha-ring-showcase',
    'gold-ganesha-ring-video-showcase.mp4',
    'Luxury',
    'Ornate sacred Ganesha gold ring handcrafted in 24k gold 🕉️'
  ),
  'gold-ring-studio': createVideoItem(
    'gold-ring-studio',
    'luxury-gold-ring-studio-showcase.mp4',
    'Luxury',
    'Fine gold jewellery studio light refractions and brilliance 💍'
  ),
  'gold-ring-ad': createVideoItem(
    'gold-ring-ad',
    'luxury-gold-ring-video-advertisement.mp4',
    'Luxury',
    'Signature luxury gold ring commercial video advertisement 💎'
  ),
  'gold-watch-production': createVideoItem(
    'gold-watch-production',
    'gold-watch-commercial-production.mp4',
    'Luxury',
    'Prestige gold chronograph timepiece commercial production 🏆'
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
// 3. SHOWCASE GRID SECTION: Videos 1 to 8 preserved, followed by shuffled blend
// of newly added luxury videos and classic catalog.
// ============================================================================
export const SHOWCASE_GRID_VIDEOS: ShowcaseVideoItem[] = [
  // First 8 videos (preserved sequence)
  VIDEOS['fashion-lookbook'],          // 1. Fashion
  VIDEOS['sukoon-wellness'],           // 2. Fashion
  VIDEOS['streetwear-ferreri'],        // 3. Fashion
  VIDEOS['jewelry-editorial'],         // 4. Luxury
  VIDEOS['technical-tee'],             // 5. Fashion
  VIDEOS['perfume-noir'],              // 6. Fashion
  VIDEOS['women-perfume'],             // 7. Beauty
  VIDEOS['luxury-jewelry'],            // 8. Luxury

  // After 8th video: newly added videos shuffled with remaining catalog
  VIDEOS['gold-ring-commercial'],      // 9. Luxury (New)
  VIDEOS['gourmet-food'],              // 10. Commercials
  VIDEOS['titan-watch-commercial'],    // 11. Luxury (New)
  VIDEOS['viral-fashion'],             // 12. Fashion
  VIDEOS['men-perfume'],               // 13. Beauty
  VIDEOS['luxury-watch-showcase'],     // 14. Luxury (New)
  VIDEOS['lipstick-spotlight'],        // 15. Beauty
  VIDEOS['ganesha-ring-showcase'],     // 16. Luxury (New)
  VIDEOS['natural-facewash'],          // 17. Beauty
  VIDEOS['gold-ring-studio'],          // 18. Luxury (New)
  VIDEOS['lipstick-application'],      // 19. Beauty
  VIDEOS['gold-ring-ad'],              // 20. Luxury (New)
  VIDEOS['chrome-nails'],              // 21. Beauty
  VIDEOS['gold-watch-production'],     // 22. Luxury (New)
  VIDEOS['minimalist-nails'],          // 23. Beauty
  VIDEOS['paris-runway'],              // 24. Fashion
  VIDEOS['industrial-automation'],     // 25. Commercials
];
