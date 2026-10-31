import { getCloudinaryImage } from '@/utils/cloudinary';

// ponytail: import all images directly from src/assets/images subfolders
const assetImages = import.meta.glob<string>(
  '../assets/images/**/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    import: 'default',
  }
);

const getAssetImage = (fileName: string): string => {
  const match = Object.entries(assetImages).find(([path]) =>
    path.endsWith(`/${fileName}`)
  );
  return match ? match[1] : getCloudinaryImage(fileName);
};

export const IMAGE_CATEGORIES = [
  'All',
  'Fashion',
  'Jewellery',
  'Perfume',
  'Beauty',
  'Studio',
  'Commercial',
] as const;

export type ImageCategory = (typeof IMAGE_CATEGORIES)[number];

export interface ShowcaseImageItem {
  id: string;
  title: string;
  category: Exclude<ImageCategory, 'All'>;
  src: string;
}

// Helper to construct showcase image items
const createImageItem = (
  id: string,
  fileName: string,
  title: string,
  category: Exclude<ImageCategory, 'All'>
): ShowcaseImageItem => ({
  id,
  title,
  category,
  src: getAssetImage(fileName),
});

// ============================================================================
// ALL IMAGES CATALOG: Grouped in exact requested order:
// Fashion -> Jewellery -> Perfume -> Beauty -> Studio -> Commercial
// ============================================================================
export const IMAGES: Record<string, ShowcaseImageItem> = {
  // --------------------------------------------------------------------------
  // 1. Fashion
  // --------------------------------------------------------------------------
  'fashion-confident-red-tee': createImageItem(
    'fashion-confident-red-tee',
    'confident-red-tee-streetwear-portrait.jpg',
    'Confident Red Tee Streetwear',
    'Fashion'
  ),
  'fashion-deep-red-studio': createImageItem(
    'fashion-deep-red-studio',
    'deep-red-studio-fashion-portrait.jpg',
    'Deep Red Studio Fashion',
    'Fashion'
  ),
  'fashion-model-studio-pose': createImageItem(
    'fashion-model-studio-pose',
    'editorial-fashion-model-studio-pose.jpg',
    'Editorial Model Studio Pose',
    'Fashion'
  ),
  'fashion-editorial-burgundy': createImageItem(
    'fashion-editorial-burgundy',
    'editorial-streetwear-portrait-burgundy.jpg',
    'Editorial Streetwear Burgundy',
    'Fashion'
  ),
  'fashion-heart-over-brain-back': createImageItem(
    'fashion-heart-over-brain-back',
    'heart-over-brain-back-print-tee-portrait.jpg',
    'Heart Over Brain Back Print',
    'Fashion'
  ),
  'fashion-heart-over-mind': createImageItem(
    'fashion-heart-over-mind',
    'heart-over-mind-streetwear-studio-portrait.jpg',
    'Heart Over Mind Studio Look',
    'Fashion'
  ),
  'fashion-moody-red-smoke': createImageItem(
    'fashion-moody-red-smoke',
    'moody-red-smoke-streetwear-fashion-portrait.jpg',
    'Moody Red Smoke Streetwear',
    'Fashion'
  ),
  'fashion-oversized-graphic-tee': createImageItem(
    'fashion-oversized-graphic-tee',
    'oversized-graphic-tshirt-streetwear-model.jpg',
    'Oversized Graphic T-Shirt',
    'Fashion'
  ),
  'fashion-red-backdrop-editorial': createImageItem(
    'fashion-red-backdrop-editorial',
    'red-backdrop-editorial-fashion-portrait.jpg',
    'Red Backdrop Editorial',
    'Fashion'
  ),
  'fashion-red-heart-brain-apparel': createImageItem(
    'fashion-red-heart-brain-apparel',
    'red-heart-brain-apparel-fashion-portrait.jpg',
    'Heart-Brain Graphic Apparel',
    'Fashion'
  ),
  'fashion-red-heart-over-brain': createImageItem(
    'fashion-red-heart-over-brain',
    'red-heart-over-brain-graphic-tee-portrait.jpg',
    'Red Heart Over Brain Tee',
    'Fashion'
  ),
  'fashion-red-smoke-urban': createImageItem(
    'fashion-red-smoke-urban',
    'red-smoke-urban-streetwear-portrait.jpg',
    'Red Smoke Urban Streetwear',
    'Fashion'
  ),
  'fashion-red-tinted-model': createImageItem(
    'fashion-red-tinted-model',
    'red-tinted-streetwear-model-portrait.jpg',
    'Red-Tinted Streetwear Model',
    'Fashion'
  ),
  'fashion-sukoon-wellness': createImageItem(
    'fashion-sukoon-wellness',
    'sukoon-wellness-streetwear-collection-portrait.jpg',
    'Sukoon Streetwear Collection',
    'Fashion'
  ),

  // --------------------------------------------------------------------------
  // 2. Jewellery
  // --------------------------------------------------------------------------
  'jewelry-antique-collar-display': createImageItem(
    'jewelry-antique-collar-display',
    'antique-gold-collar-necklace-earrings-wooden-display.jpg',
    'Antique Gold Collar Necklace',
    'Jewellery'
  ),
  'jewelry-emerald-ruby-set': createImageItem(
    'jewelry-emerald-ruby-set',
    'antique-gold-emerald-ruby-necklace-set.jpg',
    'Emerald & Ruby Gold Set',
    'Jewellery'
  ),
  'jewelry-bridal-necklace-tray': createImageItem(
    'jewelry-bridal-necklace-tray',
    'bridal-gold-necklace-royal-velvet-tray.jpg',
    'Bridal Gold Necklace Tray',
    'Jewellery'
  ),
  'jewelry-bride-vanity-mirror': createImageItem(
    'jewelry-bride-vanity-mirror',
    'bride-gold-temple-necklace-vanity-mirror-portrait.jpg',
    'Bride at Vanity Mirror',
    'Jewellery'
  ),
  'jewelry-elegant-necklace-portrait': createImageItem(
    'jewelry-elegant-necklace-portrait',
    'elegant-gold-necklace-earrings-studio-portrait.jpg',
    'Elegant Gold Set Portrait',
    'Jewellery'
  ),
  'jewelry-filigree-floral-set': createImageItem(
    'jewelry-filigree-floral-set',
    'filigree-gold-floral-necklace-earrings-set.jpg',
    'Filigree Floral Gold Set',
    'Jewellery'
  ),
  'jewelry-floral-black-velvet': createImageItem(
    'jewelry-floral-black-velvet',
    'gold-floral-pendant-necklace-earrings-black-velvet-bust.jpg',
    'Floral Gold Pendant on Velvet',
    'Jewellery'
  ),
  'jewelry-pendant-hand-pose': createImageItem(
    'jewelry-pendant-hand-pose',
    'gold-pendant-necklace-hand-pose-red-dress-model.jpg',
    'Gold Pendant Hand Pose',
    'Jewellery'
  ),
  'jewelry-heritage-wooden-bust': createImageItem(
    'jewelry-heritage-wooden-bust',
    'heritage-gold-pendant-necklace-earrings-wooden-bust.jpg',
    'Heritage Gold Pendant Bust',
    'Jewellery'
  ),
  'jewelry-heritage-hand-portrait': createImageItem(
    'jewelry-heritage-hand-portrait',
    'heritage-gold-pendant-necklace-hand-model-portrait.jpg',
    'Heritage Gold Hand Portrait',
    'Jewellery'
  ),
  'jewelry-indian-bridal-portrait': createImageItem(
    'jewelry-indian-bridal-portrait',
    'indian-bridal-gold-necklace-earrings-portrait.jpg',
    'Indian Bridal Gold Portrait',
    'Jewellery'
  ),
  'jewelry-filigree-saree-portrait': createImageItem(
    'jewelry-filigree-saree-portrait',
    'indian-bride-gold-filigree-necklace-saree-portrait.jpg',
    'Bride in Red Banarasi Saree',
    'Jewellery'
  ),
  'jewelry-floral-saree-portrait': createImageItem(
    'jewelry-floral-saree-portrait',
    'indian-bride-gold-floral-necklace-saree-portrait.jpg',
    'Bride with Gold Floral Necklace',
    'Jewellery'
  ),
  'jewelry-bridal-editorial-portrait': createImageItem(
    'jewelry-bridal-editorial-portrait',
    'luxury-gold-bridal-necklace-set-editorial-portrait.jpg',
    'Luxury Gold Bridal Editorial',
    'Jewellery'
  ),
  'jewelry-heart-necklace-red-dress': createImageItem(
    'jewelry-heart-necklace-red-dress',
    'luxury-gold-heart-necklace-earrings-red-dress-portrait.jpg',
    'Gold Heart Necklace in Red',
    'Jewellery'
  ),
  'jewelry-heart-pendant-model': createImageItem(
    'jewelry-heart-pendant-model',
    'luxury-gold-heart-pendant-necklace-model.jpg',
    'Heart Pendant Necklace Model',
    'Jewellery'
  ),
  'jewelry-necklace-red-silk': createImageItem(
    'jewelry-necklace-red-silk',
    'luxury-gold-necklace-earrings-red-silk.jpg',
    'Gold Necklace on Red Silk',
    'Jewellery'
  ),
  'jewelry-pendant-red-dress-model': createImageItem(
    'jewelry-pendant-red-dress-model',
    'luxury-gold-pendant-necklace-earrings-red-dress-model.jpg',
    'Gold Pendant Red Dress Look',
    'Jewellery'
  ),
  'jewelry-royal-gold-choker': createImageItem(
    'jewelry-royal-gold-choker',
    'royal-gold-choker-necklace-chandbali-earrings-portrait.jpg',
    'Royal Gold Choker & Chandbali',
    'Jewellery'
  ),
  'jewelry-temple-haram-bust': createImageItem(
    'jewelry-temple-haram-bust',
    'temple-gold-haram-necklace-wooden-bust.jpg',
    'Temple Gold Haram on Bust',
    'Jewellery'
  ),
  'jewelry-traditional-choker': createImageItem(
    'jewelry-traditional-choker',
    'traditional-gold-choker-necklace-earrings.jpg',
    'Traditional Gold Choker Set',
    'Jewellery'
  ),
  'jewelry-necklace-red-velvet': createImageItem(
    'jewelry-necklace-red-velvet',
    'traditional-gold-necklace-earrings-red-velvet.jpg',
    'Traditional Necklace on Velvet',
    'Jewellery'
  ),

  // --------------------------------------------------------------------------
  // 3. Perfume
  // --------------------------------------------------------------------------
  'perfume-fragrance-commercial': createImageItem(
    'perfume-fragrance-commercial',
    'fragrance-product-photography-commercial.jpg',
    'Fragrance Commercial Shoot',
    'Perfume'
  ),
  'perfume-luxury-bottle-concept': createImageItem(
    'perfume-luxury-bottle-concept',
    'luxury-fragrance-bottle-ad-concept.jpg',
    'Luxury Fragrance Ad Concept',
    'Perfume'
  ),
  'perfume-advertising-poster': createImageItem(
    'perfume-advertising-poster',
    'luxury-perfume-advertising-poster.jpg',
    'Luxury Perfume Poster',
    'Perfume'
  ),
  'perfume-mens-cologne-splash': createImageItem(
    'perfume-mens-cologne-splash',
    'mens-cologne-bottle-water-splash-ad.jpg',
    'Men Cologne Water Splash Ad',
    'Perfume'
  ),
  'perfume-cologne-library': createImageItem(
    'perfume-cologne-library',
    'mens-cologne-luxury-library-editorial.jpg',
    'Men Cologne in Luxury Library',
    'Perfume'
  ),
  'perfume-mens-fragrance-dramatic': createImageItem(
    'perfume-mens-fragrance-dramatic',
    'mens-fragrance-bottle-dramatic-lighting.jpg',
    'Dramatic Men Fragrance Ad',
    'Perfume'
  ),
  'perfume-mens-cologne-editorial': createImageItem(
    'perfume-mens-cologne-editorial',
    'mens-luxury-cologne-editorial-photo.jpg',
    'Men Luxury Cologne Editorial',
    'Perfume'
  ),
  'perfume-mindtrix-board': createImageItem(
    'perfume-mindtrix-board',
    'mindtrix-eau-de-parfum-model-editorial-board.jpg',
    'Mindtrix Eau De Parfum Board',
    'Perfume'
  ),
  'perfume-mindtrix-rose-campaign': createImageItem(
    'perfume-mindtrix-rose-campaign',
    'mindtrix-luxury-perfume-rose-campaign.jpg',
    'Mindtrix Rose Perfume Campaign',
    'Perfume'
  ),
  'perfume-signature-shoot': createImageItem(
    'perfume-signature-shoot',
    'mindtrix-media-signature-perfume-shoot.jpg',
    'Mindtrix Signature Perfume Shoot',
    'Perfume'
  ),
  'perfume-bottle-commercial': createImageItem(
    'perfume-bottle-commercial',
    'perfume-bottle-commercial-product-photography.jpg',
    'Perfume Commercial Photography',
    'Perfume'
  ),
  'perfume-flatlay-botanical': createImageItem(
    'perfume-flatlay-botanical',
    'perfume-bottle-flat-lay-botanical-styling.jpg',
    'Botanical Perfume Flat Lay',
    'Perfume'
  ),
  'perfume-stone-pedestal': createImageItem(
    'perfume-stone-pedestal',
    'perfume-bottle-stone-pedestal-minimalist.jpg',
    'Perfume on Stone Pedestal',
    'Perfume'
  ),

  // --------------------------------------------------------------------------
  // 4. Beauty
  // --------------------------------------------------------------------------
  'beauty-botanical-skincare': createImageItem(
    'beauty-botanical-skincare',
    'botanical-skincare-stone-pedestal-ad.jpg',
    'Botanical Skincare Pedestal',
    'Beauty'
  ),
  'beauty-cosmetics-flatlay': createImageItem(
    'beauty-cosmetics-flatlay',
    'cosmetics-flat-lay-beauty-photography.jpg',
    'Cosmetics Flat Lay Atelier',
    'Beauty'
  ),
  'beauty-foaming-cleanser': createImageItem(
    'beauty-foaming-cleanser',
    'foaming-facewash-skincare-commercial.jpg',
    'Foaming Facewash Commercial',
    'Beauty'
  ),
  'beauty-chrome-nails': createImageItem(
    'beauty-chrome-nails',
    'luxury-chrome-nail-art-manicure-editorial.jpg',
    'Chrome Nail Art Manicure',
    'Beauty'
  ),
  'beauty-lipstick-editorial': createImageItem(
    'beauty-lipstick-editorial',
    'luxury-lipstick-product-editorial-shoot.jpg',
    'Luxury Lipstick Editorial',
    'Beauty'
  ),
  'beauty-nail-art-portrait': createImageItem(
    'beauty-nail-art-portrait',
    'luxury-nail-art-portrait-advertisement.jpg',
    'Nail Art Model Advertisement',
    'Beauty'
  ),
  'beauty-red-lipstick-ad': createImageItem(
    'beauty-red-lipstick-ad',
    'luxury-red-lipstick-commercial-ad.jpg',
    'Luxury Red Lipstick Ad',
    'Beauty'
  ),
  'beauty-natural-facewash': createImageItem(
    'beauty-natural-facewash',
    'natural-facewash-skincare-product-photo.jpg',
    'Natural Facewash Product Photo',
    'Beauty'
  ),
  'beauty-organic-cleanser': createImageItem(
    'beauty-organic-cleanser',
    'organic-face-cleanser-product-ad.jpg',
    'Organic Face Cleanser Ad',
    'Beauty'
  ),
  'beauty-skincare-commercial': createImageItem(
    'beauty-skincare-commercial',
    'skincare-cleanser-commercial-advertisement.jpg',
    'Skincare Cleanser Commercial',
    'Beauty'
  ),
  'beauty-velvet-lipstick-marble': createImageItem(
    'beauty-velvet-lipstick-marble',
    'velvet-matte-lipstick-marble-podium-ad.jpg',
    'Velvet Lipstick on Marble',
    'Beauty'
  ),

  // --------------------------------------------------------------------------
  // 5. Studio
  // --------------------------------------------------------------------------
  'studio-midnight-muse': createImageItem(
    'studio-midnight-muse',
    'midnight-muse-maison-velvet-couture-portrait.jpg',
    'Midnight Muse Couture',
    'Studio'
  ),
  'studio-rain-queen': createImageItem(
    'studio-rain-queen',
    'rain-queen-monsoon-luxury-couture-portrait.jpg',
    'Rain Queen Monsoon Couture',
    'Studio'
  ),
  'studio-royal-temptation-emerald': createImageItem(
    'studio-royal-temptation-emerald',
    'royal-temptation-emerald-couture-studio-shoot.jpg',
    'Royal Temptation Emerald Gown',
    'Studio'
  ),
  'studio-royal-temptation-velvet': createImageItem(
    'studio-royal-temptation-velvet',
    'royal-temptation-velvet-couture-gown-studio.jpg',
    'Royal Temptation Maroon Gown',
    'Studio'
  ),
  'studio-velvet-desire': createImageItem(
    'studio-velvet-desire',
    'velvet-desire-maison-luxe-couture-editorial.jpg',
    'Velvet Desire Maison Luxe',
    'Studio'
  ),

  // --------------------------------------------------------------------------
  // 6. Commercial
  // --------------------------------------------------------------------------
  'commercial-charu-security': createImageItem(
    'commercial-charu-security',
    'charu-perimeter-security-hardware-commercial.jpg',
    'Charu Perimeter Security Ad',
    'Commercial'
  ),
  'commercial-mindtrix-beverage': createImageItem(
    'commercial-mindtrix-beverage',
    'mindtrix-cold-beverage-can-splash-commercial.jpg',
    'Mindtrix Beverage Splash Commercial',
    'Commercial'
  ),
};

// ============================================================================
// SHOWCASE GRID SECTION: Arranged for gallery display
// ============================================================================
export const SHOWCASE_GRID_IMAGES: ShowcaseImageItem[] = Object.values(IMAGES);
