import { MarqueeProduct } from '@/types';
import { IMAGES, ShowcaseImageItem } from '@/data/images';
import { VIDEOS, ShowcaseVideoItem } from '@/data/videos';

// Helper to format showcase image as marquee item
const toImageMarquee = (img: ShowcaseImageItem): MarqueeProduct => ({
  id: img.id,
  type: 'image',
  src: img.src,
  label: img.title,
  category: img.category,
});

// Helper to format showcase video as marquee item
const toVideoMarquee = (
  vid: ShowcaseVideoItem,
  customLabel?: string,
  categoryOverride?: string
): MarqueeProduct => ({
  id: vid.id,
  type: 'video',
  src: vid.image,
  videoSrc: vid.videoSrc,
  label: customLabel || vid.id.replace(/-/g, ' '),
  category: categoryOverride || vid.category,
});

/**
 * Curated Marquee Products for Home Page Infinite Ribbon
 * - Sources directly from asset folders via IMAGES and VIDEOS catalogs
 * - Features the gourmet food video alongside Fashion, Jewellery, Perfume, Beauty, and Studio
 * - Interleaved in a balanced, dynamic cadence (alternating video and image)
 */
export const MARQUEE_PRODUCTS: MarqueeProduct[] = [
  toVideoMarquee(VIDEOS['paris-runway'], 'Paris Fashion Runway', 'Fashion'),
  toImageMarquee(IMAGES['perfume-mindtrix-rose-campaign']),
  toVideoMarquee(VIDEOS['jewelry-editorial'], 'Jewelry Editorial', 'Jewellery'),
  toImageMarquee(IMAGES['studio-midnight-muse']),
  toVideoMarquee(VIDEOS['gourmet-food'], 'Gourmet Food Branding', 'Commercials'),
  toImageMarquee(IMAGES['beauty-botanical-skincare']),
  toVideoMarquee(VIDEOS['women-perfume'], 'Womens Luxury Perfume', 'Perfume'),
  toImageMarquee(IMAGES['jewelry-royal-gold-choker']),
  toVideoMarquee(VIDEOS['fashion-lookbook'], 'Studio Lookbook', 'Studio'),
  toImageMarquee(IMAGES['fashion-confident-red-tee']),
  toVideoMarquee(VIDEOS['lipstick-spotlight'], 'Lipstick Spotlight', 'Beauty'),
  toImageMarquee(IMAGES['beauty-velvet-lipstick-marble']),
  toVideoMarquee(VIDEOS['streetwear-ferreri'], 'Streetwear Drop', 'Fashion'),
  toImageMarquee(IMAGES['studio-royal-temptation-emerald']),
  toVideoMarquee(VIDEOS['luxury-jewelry'], 'Luxury Gold Jewelry', 'Jewellery'),
  toImageMarquee(IMAGES['jewelry-heart-necklace-red-dress']),
  toVideoMarquee(VIDEOS['men-perfume'], 'Mens Luxury Cologne', 'Perfume'),
  toImageMarquee(IMAGES['perfume-bottle-commercial']),
  toVideoMarquee(VIDEOS['natural-facewash'], 'Natural Skincare Cleanser', 'Beauty'),
  toImageMarquee(IMAGES['fashion-editorial-burgundy']),
];
