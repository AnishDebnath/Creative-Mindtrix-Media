// Cloudinary Media Configuration and Helper Utilities with Direct Cloudinary CDN URLs

// Base URLs configured via environment variables
export const IMAGE_BASE_URL = (import.meta.env.VITE_CLOUDINARY_IMAGE_BASE_URL || '').replace(/\/+$/, '');
export const VIDEO_BASE_URL = (import.meta.env.VITE_CLOUDINARY_VIDEO_BASE_URL || '').replace(/\/+$/, '');

/**
 * Category to folder mappings for Cloudinary asset structure
 */
export const IMAGE_CATEGORY_FOLDERS: Record<string, string> = {
  Fashion: 'clothing-fashion',
  Jewellery: 'jewellery',
  Perfume: 'perfume',
  Beauty: 'beauty',
  Studio: 'studio-shoot',
  Commercial: 'commercial',
  'clothing-fashion': 'clothing-fashion',
  jewellery: 'jewellery',
  perfume: 'perfume',
  beauty: 'beauty',
  'studio-shoot': 'studio-shoot',
  commercial: 'commercial',
};

export const VIDEO_CATEGORY_FOLDERS: Record<string, string> = {
  Fashion: 'fashion',
  Beauty: 'beauty',
  Luxury: 'luxury',
  Commercials: 'commercials',
  fashion: 'fashion',
  beauty: 'beauty',
  luxury: 'luxury',
  commercials: 'commercials',
};

/**
 * Known video to subfolder directory lookup
 */
export const VIDEO_TO_SUBFOLDER: Record<string, string> = {
  // Beauty
  'beauty-lipstick-spotlight.mp4': 'beauty',
  'chrome-nail-art-atelier.mp4': 'beauty',
  'cosmetic-lipstick-application.mp4': 'beauty',
  'mens-luxury-perfume-nocturne.mp4': 'beauty',
  'minimalist-nail-routine.mp4': 'beauty',
  'natural-facewash-skincare.mp4': 'beauty',
  'womens-luxury-perfume-elegance.mp4': 'beauty',

  // Commercials
  'gourmet-food-branding.mp4': 'commercials',
  'industrial-manufacturing-process.mp4': 'commercials',

  // Fashion
  'fashion-model-lookbook.mp4': 'fashion',
  'ferreri-streetwear-drop.mp4': 'fashion',
  'luxury-perfume-noir-splash.mp4': 'fashion',
  'paris-fashion-runway.mp4': 'fashion',
  'streetwear-tee-technical.mp4': 'fashion',
  'sukoon-wellness-essentials.mp4': 'fashion',
  'viral-fashion-trends.mp4': 'fashion',

  // Luxury
  'gold-ganesha-ring-video-showcase.mp4': 'luxury',
  'gold-ring-commercial-camera-sequence.mp4': 'luxury',
  'gold-watch-commercial-production.mp4': 'luxury',
  'jewelry-model-editorial.mp4': 'luxury',
  'luxury-gold-ring-studio-showcase.mp4': 'luxury',
  'luxury-gold-ring-video-advertisement.mp4': 'luxury',
  'luxury-gold-watch-commercial-showcase.mp4': 'luxury',
  'luxury-jewelry-collection.mp4': 'luxury',
  'titan-gold-watch-commercial.mp4': 'luxury',
};

/**
 * Cloudinary image asset public paths and transforms (e.g. brand logos)
 */
export const CLOUDINARY_IMAGE_PATHS: Record<string, string> = {
  "tph.png": "f_auto,q_auto,e_trim/tph_gfjmyo.png",
  "brand-logo/tph.png": "f_auto,q_auto,e_trim/tph_gfjmyo.png",
  "tph_gfjmyo.png": "f_auto,q_auto,e_trim/tph_gfjmyo.png",
  "charu.png": "f_auto,q_auto,e_trim/charu_ypwood.png",
  "brand-logo/charu.png": "f_auto,q_auto,e_trim/charu_ypwood.png",
  "charu_ypwood.png": "f_auto,q_auto,e_trim/charu_ypwood.png",
  "gconnect.png": "f_auto,q_auto,e_trim/gconnect_gpyufu.png",
  "brand-logo/gconnect.png": "f_auto,q_auto,e_trim/gconnect_gpyufu.png",
  "gconnect_gpyufu.png": "f_auto,q_auto,e_trim/gconnect_gpyufu.png",
  "crh.png": "f_auto,q_auto,e_trim/crh_ctephp.png",
  "brand-logo/crh.png": "f_auto,q_auto,e_trim/crh_ctephp.png",
  "crh_ctephp.png": "f_auto,q_auto,e_trim/crh_ctephp.png",
  "gold.png": "f_auto,q_auto,e_trim/gold_zfz6i0.png",
  "brand-logo/gold.png": "f_auto,q_auto,e_trim/gold_zfz6i0.png",
  "gold_zfz6i0.png": "f_auto,q_auto,e_trim/gold_zfz6i0.png",
  "confident-red-tee-streetwear-portrait.jpg": "confident-red-tee-streetwear-portrait_ld8eoq.jpg",
  "deep-red-studio-fashion-portrait.jpg": "deep-red-studio-fashion-portrait_apckdw.jpg",
  "editorial-fashion-model-studio-pose.jpg": "editorial-fashion-model-studio-pose_x186w8.jpg",
  "editorial-streetwear-portrait-burgundy.jpg": "editorial-streetwear-portrait-burgundy_v5plvo.jpg",
  "heart-over-brain-back-print-tee-portrait.jpg": "heart-over-brain-back-print-tee-portrait_cxe7ox.jpg",
  "heart-over-mind-streetwear-studio-portrait.jpg": "heart-over-mind-streetwear-studio-portrait_ve3nec.jpg",
  "moody-red-smoke-streetwear-fashion-portrait.jpg": "moody-red-smoke-streetwear-fashion-portrait_ffm0u3.jpg",
  "oversized-graphic-tshirt-streetwear-model.jpg": "oversized-graphic-tshirt-streetwear-model_kzcax9.jpg",
  "red-backdrop-editorial-fashion-portrait.jpg": "red-backdrop-editorial-fashion-portrait_t2vzbh.jpg",
  "red-heart-brain-apparel-fashion-portrait.jpg": "red-heart-brain-apparel-fashion-portrait_frwuen.jpg",
  "red-heart-over-brain-graphic-tee-portrait.jpg": "red-heart-over-brain-graphic-tee-portrait_qka7r1.jpg",
  "red-smoke-urban-streetwear-portrait.jpg": "red-smoke-urban-streetwear-portrait_sxsbew.jpg",
  "red-tinted-streetwear-model-portrait.jpg": "red-tinted-streetwear-model-portrait_qmpxdv.jpg",
  "sukoon-wellness-streetwear-collection-portrait.jpg": "sukoon-wellness-streetwear-collection-portrait_nijudy.jpg",
  "gold-titan-raga-watch-marble-pedestal.jpg": "gold-titan-raga-watch-marble-pedestal_s7jxiq.jpg",
  "gold-titan-watch-crystal-bracelet.jpg": "gold-titan-watch-crystal-bracelet_kzif6p.jpg",
  "luxury-gold-titan-raga-watch.jpg": "luxury-gold-titan-raga-watch_atengb.jpg",
  "ornate-ganesha-gold-ring-warm-light.jpg": "ornate-ganesha-gold-ring-warm-light_b4c2re.jpg",
  "ornate-gold-tilak-ring-burgundy-velvet.jpg": "ornate-gold-tilak-ring-burgundy-velvet_jd6lke.jpg",
  "royal-blue-trident-gemstone-ring.jpg": "royal-blue-trident-gemstone-ring_fv0h76.jpg",
  "titan-gold-watch-golden-hour.jpg": "titan-gold-watch-golden-hour_nxdibn.jpg",
  "antique-gold-collar-necklace-earrings-wooden-display.jpg": "antique-gold-collar-necklace-earrings-wooden-display_u1akt7.jpg",
  "antique-gold-emerald-ruby-necklace-set.jpg": "antique-gold-emerald-ruby-necklace-set_gofqr2.jpg",
  "bridal-gold-necklace-royal-velvet-tray.jpg": "bridal-gold-necklace-royal-velvet-tray_skmtbu.jpg",
  "bride-gold-temple-necklace-vanity-mirror-portrait.jpg": "bride-gold-temple-necklace-vanity-mirror-portrait_rsnlal.jpg",
  "elegant-gold-necklace-earrings-studio-portrait.jpg": "elegant-gold-necklace-earrings-studio-portrait_a7gv7k.jpg",
  "filigree-gold-floral-necklace-earrings-set.jpg": "filigree-gold-floral-necklace-earrings-set_jz35cs.jpg",
  "gold-floral-pendant-necklace-earrings-black-velvet-bust.jpg": "gold-floral-pendant-necklace-earrings-black-velvet-bust_gqxjtu.jpg",
  "gold-pendant-necklace-hand-pose-red-dress-model.jpg": "gold-pendant-necklace-hand-pose-red-dress-model_hp5sgj.jpg",
  "heritage-gold-pendant-necklace-earrings-wooden-bust.jpg": "heritage-gold-pendant-necklace-earrings-wooden-bust_ksjhwq.jpg",
  "heritage-gold-pendant-necklace-hand-model-portrait.jpg": "heritage-gold-pendant-necklace-hand-model-portrait_st9bgw.jpg",
  "indian-bridal-gold-necklace-earrings-portrait.jpg": "indian-bridal-gold-necklace-earrings-portrait_wkbztl.jpg",
  "indian-bride-gold-filigree-necklace-saree-portrait.jpg": "indian-bride-gold-filigree-necklace-saree-portrait_hbyka8.jpg",
  "indian-bride-gold-floral-necklace-saree-portrait.jpg": "indian-bride-gold-floral-necklace-saree-portrait_jr112o.jpg",
  "luxury-gold-bridal-necklace-set-editorial-portrait.jpg": "luxury-gold-bridal-necklace-set-editorial-portrait_wu0gfr.jpg",
  "luxury-gold-heart-necklace-earrings-red-dress-portrait.jpg": "luxury-gold-heart-necklace-earrings-red-dress-portrait_q2xehl.jpg",
  "luxury-gold-heart-pendant-necklace-model.jpg": "luxury-gold-heart-pendant-necklace-model_cwj6xf.jpg",
  "luxury-gold-necklace-earrings-red-silk.jpg": "luxury-gold-necklace-earrings-red-silk_ium3x6.jpg",
  "luxury-gold-pendant-necklace-earrings-red-dress-model.jpg": "luxury-gold-pendant-necklace-earrings-red-dress-model_ugzwaw.jpg",
  "royal-gold-choker-necklace-chandbali-earrings-portrait.jpg": "royal-gold-choker-necklace-chandbali-earrings-portrait_lylzuq.jpg",
  "temple-gold-haram-necklace-wooden-bust.jpg": "temple-gold-haram-necklace-wooden-bust_vnahqh.jpg",
  "traditional-gold-choker-necklace-earrings.jpg": "traditional-gold-choker-necklace-earrings_imzyky.jpg",
  "traditional-gold-necklace-earrings-red-velvet.jpg": "traditional-gold-necklace-earrings-red-velvet_eomlsk.jpg",
  "fragrance-product-photography-commercial.jpg": "fragrance-product-photography-commercial_xpy5zl.jpg",
  "luxury-fragrance-bottle-ad-concept.jpg": "luxury-fragrance-bottle-ad-concept_kxlarx.jpg",
  "luxury-perfume-advertising-poster.jpg": "luxury-perfume-advertising-poster_oqw88z.jpg",
  "mens-cologne-bottle-water-splash-ad.jpg": "mens-cologne-bottle-water-splash-ad_hfkxl8.jpg",
  "mens-cologne-luxury-library-editorial.jpg": "mens-cologne-luxury-library-editorial_cn8d02.jpg",
  "mens-fragrance-bottle-dramatic-lighting.jpg": "mens-fragrance-bottle-dramatic-lighting_yfe9ih.jpg",
  "mens-luxury-cologne-editorial-photo.jpg": "mens-luxury-cologne-editorial-photo_ymppxm.jpg",
  "mindtrix-eau-de-parfum-model-editorial-board.jpg": "mindtrix-eau-de-parfum-model-editorial-board_wqvlpq.jpg",
  "mindtrix-luxury-perfume-rose-campaign.jpg": "mindtrix-luxury-perfume-rose-campaign_tn3ptd.jpg",
  "mindtrix-media-signature-perfume-shoot.jpg": "mindtrix-media-signature-perfume-shoot_ysbhsb.jpg",
  "perfume-bottle-commercial-product-photography.jpg": "perfume-bottle-commercial-product-photography_deigw4.jpg",
  "perfume-bottle-flat-lay-botanical-styling.jpg": "perfume-bottle-flat-lay-botanical-styling_rgcbo8.jpg",
  "perfume-bottle-stone-pedestal-minimalist.jpg": "perfume-bottle-stone-pedestal-minimalist_p7dxgh.jpg",
  "botanical-skincare-stone-pedestal-ad.jpg": "botanical-skincare-stone-pedestal-ad_ufdwoe.jpg",
  "cosmetics-flat-lay-beauty-photography.jpg": "cosmetics-flat-lay-beauty-photography_tet5gy.jpg",
  "foaming-facewash-skincare-commercial.jpg": "foaming-facewash-skincare-commercial_d0z5ie.jpg",
  "luxury-chrome-nail-art-manicure-editorial.jpg": "luxury-chrome-nail-art-manicure-editorial_gz7fy1.jpg",
  "luxury-lipstick-product-editorial-shoot.jpg": "luxury-lipstick-product-editorial-shoot_epxnwt.jpg",
  "luxury-nail-art-portrait-advertisement.jpg": "luxury-nail-art-portrait-advertisement_j6eep5.jpg",
  "luxury-red-lipstick-commercial-ad.jpg": "luxury-red-lipstick-commercial-ad_lzt7om.jpg",
  "natural-facewash-skincare-product-photo.jpg": "natural-facewash-skincare-product-photo_aztymh.jpg",
  "organic-face-cleanser-product-ad.jpg": "organic-face-cleanser-product-ad_adcvlg.jpg",
  "skincare-cleanser-commercial-advertisement.jpg": "skincare-cleanser-commercial-advertisement_nawqje.jpg",
  "velvet-matte-lipstick-marble-podium-ad.jpg": "velvet-matte-lipstick-marble-podium-ad_onwfhi.jpg",
  "midnight-muse-maison-velvet-couture-portrait.jpg": "midnight-muse-maison-velvet-couture-portrait_aozkth.jpg",
  "rain-queen-monsoon-luxury-couture-portrait.jpg": "rain-queen-monsoon-luxury-couture-portrait_rm6jqb.jpg",
  "royal-temptation-emerald-couture-studio-shoot.jpg": "royal-temptation-emerald-couture-studio-shoot_u4xvp5.jpg",
  "royal-temptation-velvet-couture-gown-studio.jpg": "royal-temptation-velvet-couture-gown-studio_xfqgx2.jpg",
  "velvet-desire-maison-luxe-couture-editorial.jpg": "velvet-desire-maison-luxe-couture-editorial_irm0fv.jpg",
  "charu-perimeter-security-hardware-commercial.jpg": "charu-perimeter-security-hardware-commercial_encxqw.jpg",
  "mindtrix-cold-beverage-can-splash-commercial.jpg": "mindtrix-cold-beverage-can-splash-commercial_kfrxgq.jpg"
};

export const CLOUDINARY_VIDEO_PATHS: Record<string, string> = {
  "womens-luxury-perfume-elegance.mp4": "womens-luxury-perfume-elegance_hxkqcx.mp4",
  "natural-facewash-skincare.mp4": "natural-facewash-skincare_t0mued.mp4",
  "beauty-lipstick-spotlight.mp4": "beauty-lipstick-spotlight_dqzji1.mp4",
  "mens-luxury-perfume-nocturne.mp4": "mens-luxury-perfume-nocturne_tupnqg.mp4",
  "paris-fashion-runway.mp4": "paris-fashion-runway_jnxzfv.mp4",
  "cosmetic-lipstick-application.mp4": "cosmetic-lipstick-application_pwmk5d.mp4",
  "chrome-nail-art-atelier.mp4": "chrome-nail-art-atelier_hoy2cc.mp4",
  "ferreri-streetwear-drop.mp4": "ferreri-streetwear-drop_crgb6g.mp4",
  "sukoon-wellness-essentials.mp4": "sukoon-wellness-essentials_byzpdy.mp4",
  "minimalist-nail-routine.mp4": "minimalist-nail-routine_isdt2b.mp4",
  "luxury-perfume-noir-splash.mp4": "luxury-perfume-noir-splash_qbbtgr.mp4",
  "fashion-model-lookbook.mp4": "fashion-model-lookbook_jgc2yb.mp4",
  "gourmet-food-branding.mp4": "gourmet-food-branding_fyseq5.mp4",
  "industrial-manufacturing-process.mp4": "industrial-manufacturing-process_a5mbvw.mp4",
  "jewelry-model-editorial.mp4": "jewelry-model-editorial_ebcori.mp4",
  "luxury-jewelry-collection.mp4": "luxury-jewelry-collection_axuwxq.mp4",
  "streetwear-tee-technical.mp4": "streetwear-tee-technical_umwaqj.mp4",
  "viral-fashion-trends.mp4": "viral-fashion-trends_kfa5za.mp4",
  "gold-ring-commercial-camera-sequence.mp4": "gold-ring-commercial-camera-sequence_a0nxr6.mp4",
  "titan-gold-watch-commercial.mp4": "titan-gold-watch-commercial_r7zy2d.mp4",
  "luxury-gold-watch-commercial-showcase.mp4": "luxury-gold-watch-commercial-showcase_xfqmq8.mp4",
  "gold-ganesha-ring-video-showcase.mp4": "gold-ganesha-ring-video-showcase_l7o1uy.mp4",
  "luxury-gold-ring-studio-showcase.mp4": "luxury-gold-ring-studio-showcase_n8fnq5.mp4",
  "luxury-gold-ring-video-advertisement.mp4": "luxury-gold-ring-video-advertisement_yrcdbf.mp4",
  "gold-watch-commercial-production.mp4": "gold-watch-commercial-production_lsrcod.mp4",
  "how-we-work.mp4": "v1793629166/how-we-work.mp4",
  "mindtrix-media-intro.mp4": "v1793629160/mindtrix-media-intro.mp4"
};

export const hasCloudinaryImageBase = (): boolean => Boolean(IMAGE_BASE_URL);

/**
 * Returns true if the environment variable for videos is configured.
 */
export const hasCloudinaryVideoBase = (): boolean => Boolean(VIDEO_BASE_URL);

/**
 * Returns the Cloudinary Image URL for a given category and filename.
 * Returns mapped Cloudinary URL if verified, or empty string to allow seamless fallback.
 */
export const getCloudinaryImageUrl = (categoryOrFolder: string, fileName: string): string => {
  if (!IMAGE_BASE_URL || !fileName) return '';
  const clean = fileName.replace(/^\/+/, '');
  const folder = IMAGE_CATEGORY_FOLDERS[categoryOrFolder] || categoryOrFolder.toLowerCase();
  const folderPath = `${folder}/${clean}`;
  const relativePath = CLOUDINARY_IMAGE_PATHS[clean] || CLOUDINARY_IMAGE_PATHS[folderPath];
  if (relativePath) {
    if (relativePath.startsWith('f_auto')) {
      return `${IMAGE_BASE_URL}/${relativePath}`;
    }
    return `${IMAGE_BASE_URL}/f_auto,q_auto/${relativePath}`;
  }
  return '';
};

/**
 * Returns the Cloudinary Video URL for a given category and filename.
 * Returns mapped Cloudinary URL if verified, or empty string to allow seamless fallback.
 */
export const getCloudinaryVideoUrl = (
  categoryOrFolder: string,
  fileName: string,
  options?: { optimize?: boolean; width?: number; quality?: 'low' | 'eco' | 'good' | 'auto'; raw?: boolean }
): string => {
  if (!VIDEO_BASE_URL || !fileName) return '';
  const clean = fileName.replace(/^\/+/, '');
  const folder = VIDEO_CATEGORY_FOLDERS[categoryOrFolder] || categoryOrFolder.toLowerCase();
  const folderPath = `${folder}/${clean}`;
  const relativePath = CLOUDINARY_VIDEO_PATHS[clean] || CLOUDINARY_VIDEO_PATHS[folderPath];
  if (relativePath) {
    if (options?.raw) {
      return `${VIDEO_BASE_URL}/${relativePath}`;
    }
    const q = options?.quality || 'eco';
    const w = options?.width || 480;
    return `${VIDEO_BASE_URL}/q_auto:${q},w_${w},c_limit,vc_h264/${relativePath}`;
  }
  return '';
};

/**
 * Returns the Cloudinary Image URL built using VITE_CLOUDINARY_IMAGE_BASE_URL.
 */
export const getCloudinaryImage = (imagePath: string): string => {
  if (!IMAGE_BASE_URL || !imagePath) return '';
  if (/^(https?:|\/\/|data:)/.test(imagePath)) return imagePath;

  const clean = imagePath.replace(/^\/+/, '');
  const fileName = clean.split('/').pop() || clean;

  const relativePath = CLOUDINARY_IMAGE_PATHS[clean] || CLOUDINARY_IMAGE_PATHS[fileName];
  if (relativePath) {
    if (relativePath.startsWith('f_auto')) {
      return `${IMAGE_BASE_URL}/${relativePath}`;
    }
    return `${IMAGE_BASE_URL}/f_auto,q_auto/${relativePath}`;
  }

  return '';
};

/**
 * Returns the Cloudinary Video URL built using VITE_CLOUDINARY_VIDEO_BASE_URL.
 */
export const getCloudinaryVideo = (
  videoPath: string,
  options?: { optimize?: boolean; width?: number; quality?: 'low' | 'eco' | 'good' | 'auto'; raw?: boolean }
): string => {
  if (!VIDEO_BASE_URL || !videoPath) return '';
  if (/^(https?:|\/\/|data:)/.test(videoPath)) return videoPath;

  const clean = videoPath.replace(/^\/+/, '');
  const fileName = clean.split('/').pop() || clean;

  const relativePath = CLOUDINARY_VIDEO_PATHS[clean] || CLOUDINARY_VIDEO_PATHS[fileName];
  if (relativePath) {
    if (options?.raw) {
      return `${VIDEO_BASE_URL}/${relativePath}`;
    }
    const q = options?.quality || 'eco';
    const w = options?.width || 480;
    return `${VIDEO_BASE_URL}/q_auto:${q},w_${w},c_limit,vc_h264/${relativePath}`;
  }

  return '';
};

/**
 * Extracts and returns the middle position frame (50% timestamp) of the video as a thumbnail poster.
 */
export const getCloudinaryVideoThumbnail = (
  videoPath: string,
  options?: { width?: number; quality?: 'auto' | 'low' | 'good' }
): string => {
  if (!VIDEO_BASE_URL || !videoPath) return '';

  const clean = videoPath.replace(/^\/+/, '');
  const fileName = clean.split('/').pop() || clean;
  const w = options?.width || 480;
  const q = options?.quality || 'auto';

  const relativePath = CLOUDINARY_VIDEO_PATHS[clean] || CLOUDINARY_VIDEO_PATHS[fileName];
  if (relativePath) {
    const jpgPath = relativePath.replace(/\.(mp4|webm|mov|mkv)$/i, '.jpg');
    return `${VIDEO_BASE_URL}/so_50p,w_${w},q_${q}/${jpgPath}`;
  }

  return '';
};

// Local fallback helpers
export const getLocalImageFallback = (_imagePath: string): string => '';
export const getLocalVideoFallback = (_videoPath: string): string => '';

export default {
  getImage: getCloudinaryImage,
  getVideo: getCloudinaryVideo,
  getImageUrl: getCloudinaryImageUrl,
  getVideoUrl: getCloudinaryVideoUrl,
  getVideoThumbnail: getCloudinaryVideoThumbnail,
  hasImageBase: hasCloudinaryImageBase,
  hasVideoBase: hasCloudinaryVideoBase,
  getLocalImageFallback,
  getLocalVideoFallback,
};
