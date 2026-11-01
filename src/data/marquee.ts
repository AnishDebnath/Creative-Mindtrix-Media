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
 * Curated Marquee Products for Home Page Hero Ribbon
 * - ponytail: structured strictly category order wise:
 *   1. Fashion -> 2. Jewellery -> 3. Perfume -> 4. Beauty -> 5. Studio
 * - In each category: top-position video followed by top-position image
 * - Excludes Commercial category entirely
 * - Every asset features dead-center subject/object framing for 3:4 aspect ratio
 * - Alternates Video/Image cadence continuously across loop cycles
 */
export const MARQUEE_PRODUCTS: MarqueeProduct[] = [
  // --------------------------------------------------------------------------
  // 1. Fashion (Top Video & Top Image)
  // --------------------------------------------------------------------------
  toVideoMarquee(VIDEOS['fashion-lookbook'], 'Fashion Studio Lookbook', 'Fashion'),
  toImageMarquee(IMAGES['fashion-confident-red-tee']),

  // --------------------------------------------------------------------------
  // 2. Jewellery (Top Video & Top Image)
  // --------------------------------------------------------------------------
  toVideoMarquee(VIDEOS['titan-watch-commercial'], 'Titan Luxury Watch', 'Jewellery'),
  toImageMarquee(IMAGES['jewelry-gold-titan-raga-marble']),

  // --------------------------------------------------------------------------
  // 3. Perfume (Top Video & Top Image)
  // --------------------------------------------------------------------------
  toVideoMarquee(VIDEOS['women-perfume'], 'Womens Luxury Perfume', 'Perfume'),
  toImageMarquee(IMAGES['perfume-fragrance-commercial']),

  // --------------------------------------------------------------------------
  // 4. Beauty (Top Video & Top Image)
  // --------------------------------------------------------------------------
  toVideoMarquee(VIDEOS['natural-facewash'], 'Botanical Skincare Cleanser', 'Beauty'),
  toImageMarquee(IMAGES['beauty-botanical-skincare']),

  // --------------------------------------------------------------------------
  // 5. Studio (Top Video & Top Image)
  // --------------------------------------------------------------------------
  toVideoMarquee(VIDEOS['paris-runway'], 'Paris Fashion Runway', 'Studio'),
  toImageMarquee(IMAGES['studio-midnight-muse']),
];
