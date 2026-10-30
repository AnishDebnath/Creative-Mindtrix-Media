// Cloudinary Media Configuration and Helper Utilities with Direct Cloudinary CDN URLs

// Base URLs configured via environment variables
const IMAGE_BASE_URL = (import.meta.env.VITE_CLOUDINARY_IMAGE_BASE_URL || '').replace(/\/+$/, '');
const VIDEO_BASE_URL = (import.meta.env.VITE_CLOUDINARY_VIDEO_BASE_URL || '').replace(/\/+$/, '');

/**
 * Cloudinary image asset public paths and versions
 */
const CLOUDINARY_IMAGE_PATHS: Record<string, string> = {
  // Lipstick
  'Create_cosmetics_flat_lay_photog.jpg': 'v1792659117/Create_cosmetics_flat_lay_photog_swegzr.jpg',
  'lipstick/Create_cosmetics_flat_lay_photog.jpg': 'v1792659117/Create_cosmetics_flat_lay_photog_swegzr.jpg',

  'Lipstick_advertisement_on_marble.jpg': 'v1792659118/Lipstick_advertisement_on_marble_uotaid.jpg',
  'lipstick/Lipstick_advertisement_on_marble.jpg': 'v1792659118/Lipstick_advertisement_on_marble_uotaid.jpg',

  'Lipstick_product_editorial_photo.jpg': 'v1792659118/Lipstick_product_editorial_photo_dje0yx.jpg',
  'lipstick/Lipstick_product_editorial_photo.jpg': 'v1792659118/Lipstick_product_editorial_photo_dje0yx.jpg',

  'Luxury_lipstick_advertising_phot.jpg': 'v1792659119/Luxury_lipstick_advertising_phot_so1vxh.jpg',
  'lipstick/Luxury_lipstick_advertising_phot.jpg': 'v1792659119/Luxury_lipstick_advertising_phot_so1vxh.jpg',

  // Men Perfume
  'Creating_perfume_bottle_adv.jpg': 'v1792659168/Creating_perfume_bottle_adv_qcrwn9.jpg',
  'men-perfume/Creating_perfume_bottle_adv.jpg': 'v1792659168/Creating_perfume_bottle_adv_qcrwn9.jpg',

  'Creating_perfume_bottle_advertis.jpg': 'v1792659169/Creating_perfume_bottle_advertis_pkjtqw.jpg',
  'men-perfume/Creating_perfume_bottle_advertis.jpg': 'v1792659169/Creating_perfume_bottle_advertis_pkjtqw.jpg',

  'Perfume_bottle_advertising_poster.jpg': 'v1792659170/Perfume_bottle_advertising_poster_z9kiac.jpg',
  'men-perfume/Perfume_bottle_advertising_poster.jpg': 'v1792659170/Perfume_bottle_advertising_poster_z9kiac.jpg',

  'Perfume_bottle_editorial_photogr.jpg': 'v1792659171/Perfume_bottle_editorial_photogr_h47bkv.jpg',
  'men-perfume/Perfume_bottle_editorial_photogr.jpg': 'v1792659171/Perfume_bottle_editorial_photogr_h47bkv.jpg',

  'Perfume_bottle_in_luxury_library.jpg': 'v1792659171/Perfume_bottle_in_luxury_library_rno7cr.jpg',
  'men-perfume/Perfume_bottle_in_luxury_library.jpg': 'v1792659171/Perfume_bottle_in_luxury_library_rno7cr.jpg',

  'Photographing_Mindtrix_Media_per.jpg': 'v1792659172/Photographing_Mindtrix_Media_per_qe2ljy.jpg',
  'men-perfume/Photographing_Mindtrix_Media_per.jpg': 'v1792659172/Photographing_Mindtrix_Media_per_qe2ljy.jpg',

  // Facewash
  'Skincare_advertisement_on_stone.jpg': 'v1792659059/Skincare_advertisement_on_stone_cap3tr.jpg',
  'facewash/Skincare_advertisement_on_stone.jpg': 'v1792659059/Skincare_advertisement_on_stone_cap3tr.jpg',

  'Skincare_advertising_photograph.jpg': 'v1792659059/Skincare_advertising_photograph_rpsuwn.jpg',
  'facewash/Skincare_advertising_photograph.jpg': 'v1792659059/Skincare_advertising_photograph_rpsuwn.jpg',

  'Skincare_product_advertisemen.jpg': 'v1792659059/Skincare_product_advertisemen_hfsf5w.jpg',
  'facewash/Skincare_product_advertisemen.jpg': 'v1792659059/Skincare_product_advertisemen_hfsf5w.jpg',

  'Skincare_product_advertisement.jpg': 'v1792659060/Skincare_product_advertisement_c5hvks.jpg',
  'facewash/Skincare_product_advertisement.jpg': 'v1792659060/Skincare_product_advertisement_c5hvks.jpg',

  'Skincare_product_commercial_photo.jpg': 'v1792659060/Skincare_product_commercial_photo_dbkxur.jpg',
  'facewash/Skincare_product_commercial_photo.jpg': 'v1792659060/Skincare_product_commercial_photo_dbkxur.jpg',

  // Women Perfume
  'Creating_perfume_advertising_pho.jpg': 'v1792659197/Creating_perfume_advertising_pho_o74efi.jpg',
  'women-perfume/Creating_perfume_advertising_pho.jpg': 'v1792659197/Creating_perfume_advertising_pho_o74efi.jpg',

  'Perfume_bottle_commercial_photog.jpg': 'v1792659198/Perfume_bottle_commercial_photog_uwi442.jpg',
  'women-perfume/Perfume_bottle_commercial_photog.jpg': 'v1792659198/Perfume_bottle_commercial_photog_uwi442.jpg',

  'Perfume_bottle_flat-lay_photograph.jpg': 'v1792659199/Perfume_bottle_flat-lay_photograph_vhnmcs.jpg',
  'women-perfume/Perfume_bottle_flat-lay_photograph.jpg': 'v1792659199/Perfume_bottle_flat-lay_photograph_vhnmcs.jpg',

  'Perfume_bottle_on_stone_pedestal.jpg': 'v1792659239/Perfume_bottle_on_stone_pedestal_pvsa6r.jpg',
  'women-perfume/Perfume_bottle_on_stone_pedestal.jpg': 'v1792659239/Perfume_bottle_on_stone_pedestal_pvsa6r.jpg',

  'Perfume_product_photograph_place.jpg': 'v1792659240/Perfume_product_photograph_place_xirpec.jpg',
  'women-perfume/Perfume_product_photograph_place.jpg': 'v1792659240/Perfume_product_photograph_place_xirpec.jpg',

  // Brand Logos (under "mindtrix media" / "brand logo" with automatic whitespace trimming)
  'tph.png': 'f_auto,q_auto,e_trim/tph_gfjmyo.png',
  'brand-logo/tph.png': 'f_auto,q_auto,e_trim/tph_gfjmyo.png',
  'tph_gfjmyo.png': 'f_auto,q_auto,e_trim/tph_gfjmyo.png',

  'charu.png': 'f_auto,q_auto,e_trim/charu_ypwood.png',
  'brand-logo/charu.png': 'f_auto,q_auto,e_trim/charu_ypwood.png',
  'charu_ypwood.png': 'f_auto,q_auto,e_trim/charu_ypwood.png',

  'gconnect.png': 'f_auto,q_auto,e_trim/gconnect_gpyufu.png',
  'brand-logo/gconnect.png': 'f_auto,q_auto,e_trim/gconnect_gpyufu.png',
  'gconnect_gpyufu.png': 'f_auto,q_auto,e_trim/gconnect_gpyufu.png',

  'crh.png': 'f_auto,q_auto,e_trim/crh_ctephp.png',
  'brand-logo/crh.png': 'f_auto,q_auto,e_trim/crh_ctephp.png',
  'crh_ctephp.png': 'f_auto,q_auto,e_trim/crh_ctephp.png',

  'gold.png': 'f_auto,q_auto,e_trim/gold_zfz6i0.png',
  'brand-logo/gold.png': 'f_auto,q_auto,e_trim/gold_zfz6i0.png',
  'gold_zfz6i0.png': 'f_auto,q_auto,e_trim/gold_zfz6i0.png',
};

/**
 * Cloudinary video asset public paths and versions
 */
const CLOUDINARY_VIDEO_PATHS: Record<string, string> = {
  // Legacy aliases
  'cocaine.mp4': 'v1792658970/cocaine_mhdqai.mp4',
  'facewash.mp4': 'v1792658952/facewash_ctb4wv.mp4',
  'lipstick.mp4': 'v1792658952/lipstick_gifinm.mp4',
  'lipstick-product.mp4': 'v1792658961/lipstick-product_jdjb4q.mp4',
  'men-perfume.mp4': 'v1792658960/men-perfume_ipjmpf.mp4',
  'nail-art.mp4': 'v1792658965/nail-art_g8rn6x.mp4',
  'nail.mp4': 'v1792658959/nail_bezdmy.mp4',
  'rampwalk.mp4': 'v1792658961/rampwalk_dcfckk.mp4',
  'sukoon.mp4': 'v1792658975/sukoon_hw8m5y.mp4',
  'tshirt-ferreri.mp4': 'v1792658973/tshirt-ferreri_ggosxe.mp4',
  'women-perfume.mp4': 'v1792658957/women-perfume_uoacl0.mp4',

  // SEO-Optimised Clean Semantic Names (distinct without repeated postfixes)
  'luxury-perfume-noir-splash.mp4': 'v1792658970/cocaine_mhdqai.mp4',
  'natural-facewash-skincare.mp4': 'v1792658952/facewash_ctb4wv.mp4',
  'cosmetic-lipstick-application.mp4': 'v1792658952/lipstick_gifinm.mp4',
  'beauty-lipstick-spotlight.mp4': 'v1792658961/lipstick-product_jdjb4q.mp4',
  'mens-luxury-perfume-nocturne.mp4': 'v1792658960/men-perfume_ipjmpf.mp4',
  'chrome-nail-art-atelier.mp4': 'v1792658965/nail-art_g8rn6x.mp4',
  'minimalist-nail-routine.mp4': 'v1792658959/nail_bezdmy.mp4',
  'paris-fashion-runway.mp4': 'v1792658961/rampwalk_dcfckk.mp4',
  'sukoon-wellness-essentials.mp4': 'v1792658975/sukoon_hw8m5y.mp4',
  'ferreri-streetwear-drop.mp4': 'v1792658973/tshirt-ferreri_ggosxe.mp4',
  'womens-luxury-perfume-elegance.mp4': 'v1792658957/women-perfume_uoacl0.mp4',
};

/**
 * Returns true if the environment variable for images is configured.
 */
export const hasCloudinaryImageBase = (): boolean => Boolean(IMAGE_BASE_URL);

/**
 * Returns true if the environment variable for videos is configured.
 */
export const hasCloudinaryVideoBase = (): boolean => Boolean(VIDEO_BASE_URL);

/**
 * Returns the Cloudinary Image URL built using VITE_CLOUDINARY_IMAGE_BASE_URL.
 * If VITE_CLOUDINARY_IMAGE_BASE_URL is not provided, returns empty string so media is blocked.
 */
export const getCloudinaryImage = (imagePath: string): string => {
  if (!IMAGE_BASE_URL) return '';
  if (!imagePath) return '';
  if (/^(https?:|\/\/|data:)/.test(imagePath)) return imagePath;

  const clean = imagePath.replace(/^\/+/, '');
  const fileName = clean.split('/').pop() || clean;

  const relativePath = CLOUDINARY_IMAGE_PATHS[clean] || CLOUDINARY_IMAGE_PATHS[fileName];
  if (relativePath) {
    return `${IMAGE_BASE_URL}/${relativePath}`;
  }

  return `${IMAGE_BASE_URL}/${clean}`;
};

/**
 * Returns the Cloudinary Video URL built using VITE_CLOUDINARY_VIDEO_BASE_URL.
 * If VITE_CLOUDINARY_VIDEO_BASE_URL is not provided, returns empty string so video is blocked.
 */
export const getCloudinaryVideo = (
  videoPath: string,
  options?: { optimize?: boolean; width?: number; quality?: 'low' | 'eco' | 'good' | 'auto' }
): string => {
  if (!VIDEO_BASE_URL) return '';
  if (!videoPath) return '';
  if (/^(https?:|\/\/|data:)/.test(videoPath)) return videoPath;

  const clean = videoPath.replace(/^\/+/, '');
  const fileName = clean.split('/').pop() || clean;

  const relativePath = CLOUDINARY_VIDEO_PATHS[clean] || CLOUDINARY_VIDEO_PATHS[fileName];
  if (!relativePath) {
    return `${VIDEO_BASE_URL}/${clean}`;
  }

  if (options?.optimize) {
    const q = options.quality || 'eco';
    const w = options.width || 480;
    return `${VIDEO_BASE_URL}/q_auto:${q},w_${w},c_limit,vc_h264/${relativePath}`;
  }

  return `${VIDEO_BASE_URL}/${relativePath}`;
};

/**
 * Extracts and returns the exact middle position frame (50% timestamp) of the video as a lightweight cover thumbnail.
 * If VITE_CLOUDINARY_VIDEO_BASE_URL is missing, returns empty string.
 */
export const getCloudinaryVideoThumbnail = (
  videoPath: string,
  options?: { width?: number; quality?: 'auto' | 'low' | 'good' }
): string => {
  if (!VIDEO_BASE_URL) return '';
  if (!videoPath) return '';

  const clean = videoPath.replace(/^\/+/, '');
  const fileName = clean.split('/').pop() || clean;

  const relativePath = CLOUDINARY_VIDEO_PATHS[clean] || CLOUDINARY_VIDEO_PATHS[fileName];
  if (relativePath) {
    const w = options?.width || 480;
    const q = options?.quality || 'auto';
    const jpgRelativePath = relativePath.replace(/\.(mp4|webm|mov|mkv)$/i, '.jpg');
    return `${VIDEO_BASE_URL}/so_50p,w_${w},q_${q}/${jpgRelativePath}`;
  }

  return '';
};

// Legacy fallback helpers kept strictly as empty string to adhere to .env requirement
export const getLocalImageFallback = (_imagePath: string): string => '';
export const getLocalVideoFallback = (_videoPath: string): string => '';

export default {
  getImage: getCloudinaryImage,
  getVideo: getCloudinaryVideo,
  getVideoThumbnail: getCloudinaryVideoThumbnail,
  hasImageBase: hasCloudinaryImageBase,
  hasVideoBase: hasCloudinaryVideoBase,
  getLocalImageFallback,
  getLocalVideoFallback,
};
