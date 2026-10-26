import {
  Profile,
  Testimonial,
  StandForCard,
  MarqueeProduct,
  ImageProject,
  VideoProject
} from '@/types';

import matthiasCardImg from '@/assets/img/card_matthias_1790977103900.jpg';
import johannaCardImg from '@/assets/img/card_johanna_1790977118147.jpg';
import simoneCardImg from '@/assets/img/card_simone_1790977134116.jpg';
import paulCardImg from '@/assets/img/card_paul_1790977146486.jpg';
import sarahCardImg from '@/assets/img/card_sarah_1790977156627.jpg';

import yasminImg from '@/assets/img/yasmin_clean_916_1790980492922.jpg';
import uweImg from '@/assets/img/profile_uwe_1790976747637.jpg';
import girlWithSunglassesImg from '@/assets/img/card_girl_sunglasses_1790978472551.jpg';

import brunetteImg from '@/assets/img/brunette_shirt_left_1790982842053.jpg';
import communityFriendsImg from '@/assets/img/community_wide_friends_1790982804862.jpg';
import tousledGuyImg from '@/assets/img/tousled_guy_sky_1790982870552.jpg';
import windblownImg from '@/assets/img/windblown_hair_woman_1790982857578.jpg';
import pixieImg from '@/assets/img/woman_bandana_pixie_1790982884567.jpg';
import sunlightManImg from '@/assets/img/community_man_sunlight_1790982822414.jpg';

import { getCloudinaryImage, getCloudinaryVideo, getCloudinaryVideoThumbnail } from '@/utils/cloudinary';

// ponytail: lightweight video streams for marquee preview (w_360, eco) to maintain 60fps scrolling
const womenPerfumeVid = getCloudinaryVideo('women-perfume.mp4', { optimize: true, quality: 'eco', width: 360 });
const menPerfumeVid = getCloudinaryVideo('men-perfume.mp4', { optimize: true, quality: 'eco', width: 360 });
const facewashVid = getCloudinaryVideo('facewash.mp4', { optimize: true, quality: 'eco', width: 360 });
const lipstickProductVid = getCloudinaryVideo('lipstick-product.mp4', { optimize: true, quality: 'eco', width: 360 });
const lipstickVid = getCloudinaryVideo('lipstick.mp4', { optimize: true, quality: 'eco', width: 360 });
const nailArtVid = getCloudinaryVideo('nail-art.mp4', { optimize: true, quality: 'eco', width: 360 });
const rampwalkVid = getCloudinaryVideo('rampwalk.mp4', { optimize: true, quality: 'eco', width: 360 });
const tshirtFerreriVid = getCloudinaryVideo('tshirt-ferreri.mp4', { optimize: true, quality: 'eco', width: 360 });
const sukoonVid = getCloudinaryVideo('sukoon.mp4', { optimize: true, quality: 'eco', width: 360 });
const cocaineVid = getCloudinaryVideo('cocaine.mp4', { optimize: true, quality: 'eco', width: 360 });

const nailArtThumb = getCloudinaryVideoThumbnail('nail-art.mp4');
const rampwalkThumb = getCloudinaryVideoThumbnail('rampwalk.mp4');
const tshirtFerreriThumb = getCloudinaryVideoThumbnail('tshirt-ferreri.mp4');
const sukoonThumb = getCloudinaryVideoThumbnail('sukoon.mp4');
const cocaineThumb = getCloudinaryVideoThumbnail('cocaine.mp4');

const lipstickFlatLayImg = getCloudinaryImage('lipstick/Create_cosmetics_flat_lay_photog.jpg');
const lipstickMarbleImg = getCloudinaryImage('lipstick/Lipstick_advertisement_on_marble.jpg');
const lipstickEditorialImg = getCloudinaryImage('lipstick/Lipstick_product_editorial_photo.jpg');
const lipstickLuxuryImg = getCloudinaryImage('lipstick/Luxury_lipstick_advertising_phot.jpg');

const menPerfumeCreatingAdvImg = getCloudinaryImage('men-perfume/Creating_perfume_bottle_adv.jpg');
const menPerfumeCreatingAdvertisImg = getCloudinaryImage('men-perfume/Creating_perfume_bottle_advertis.jpg');
const menPerfumePosterImg = getCloudinaryImage('men-perfume/Perfume_bottle_advertising_poster.jpg');
const menPerfumeEditorialImg = getCloudinaryImage('men-perfume/Perfume_bottle_editorial_photogr.jpg');
const menPerfumeLibraryImg = getCloudinaryImage('men-perfume/Perfume_bottle_in_luxury_library.jpg');
const menPerfumeMindtrixImg = getCloudinaryImage('men-perfume/Photographing_Mindtrix_Media_per.jpg');

const skincareStoneImg = getCloudinaryImage('facewash/Skincare_advertisement_on_stone.jpg');
const skincarePhotographImg = getCloudinaryImage('facewash/Skincare_advertising_photograph.jpg');
const skincareAdvertisemenImg = getCloudinaryImage('facewash/Skincare_product_advertisemen.jpg');
const skincareAdvertisementImg = getCloudinaryImage('facewash/Skincare_product_advertisement.jpg');
const skincareCommercialImg = getCloudinaryImage('facewash/Skincare_product_commercial_photo.jpg');

const womenPerfumeCreatingImg = getCloudinaryImage('women-perfume/Creating_perfume_advertising_pho.jpg');
const womenPerfumeCommercialImg = getCloudinaryImage('women-perfume/Perfume_bottle_commercial_photog.jpg');
const womenPerfumeFlatLayImg = getCloudinaryImage('women-perfume/Perfume_bottle_flat-lay_photograph.jpg');
const womenPerfumePedestalImg = getCloudinaryImage('women-perfume/Perfume_bottle_on_stone_pedestal.jpg');
const womenPerfumePlaceImg = getCloudinaryImage('women-perfume/Perfume_product_photograph_place.jpg');

export const HERO_PROFILES: Profile[] = [
  {
    id: 'matthias',
    name: 'MATTHIAS FINKEL',
    age: 28,
    country: 'Germany',
    flag: '🇩🇪',
    city: 'Berlin',
    isOnline: true,
    avatar: matthiasCardImg,
    bio: 'Lead AI Video Producer at Mindtrix. Directing viral product video ads and 3D product motion campaigns for European direct-to-consumer brands.',
    role: 'AI Video Director',
    interests: ['AI Commercials', 'Viral Ads', '3D Motion', 'E-commerce'],
    likesCount: '24.8k',
    commentsCount: '1.2k',
    sharesCount: '3.6k'
  },
  {
    id: 'johanna',
    name: 'JOHANNA KUEFER',
    age: 26,
    country: 'Chile',
    flag: '🇨🇱',
    city: 'Santiago',
    isOnline: true,
    avatar: johannaCardImg,
    bio: 'Creative Strategist crafting high-converting AI product campaigns and multi-platform advertising funnels.',
    role: 'Campaign Strategist',
    interests: ['Ad Conversion', 'TikTok Strategy', 'Product Launches'],
    likesCount: '18.9k',
    commentsCount: '840',
    sharesCount: '2.1k'
  },
  {
    id: 'simone',
    name: 'SIMONE LANGE',
    age: 27,
    country: 'Liberia',
    flag: '🇱🇷',
    city: 'Monrovia',
    isOnline: true,
    avatar: simoneCardImg,
    bio: 'Head of AI Creative Advertising. Overseeing luxury cosmetics, fragrance renders, and high-impact commercial production.',
    role: 'Creative Director',
    interests: ['Luxury Beauty', 'Commercial AI', 'Editorial Ads'],
    likesCount: '31.5k',
    commentsCount: '2.1k',
    sharesCount: '4.8k'
  },
  {
    id: 'paul',
    name: 'PAUL KASTNER',
    age: 25,
    country: 'Canada',
    flag: '🇨🇦',
    city: 'Montreal',
    isOnline: true,
    avatar: paulCardImg,
    bio: 'AI Sound & Motion Specialist. Producing studio sound design and commercial voiceovers for viral product reels.',
    role: 'Audio & Motion Lead',
    interests: ['Sound Design', 'Reel Editing', 'Product Ads'],
    likesCount: '14.2k',
    commentsCount: '710',
    sharesCount: '1.9k'
  },
  {
    id: 'sarah',
    name: 'SARAH URNER',
    age: 24,
    country: 'Canada',
    flag: '🇨🇦',
    city: 'Vancouver',
    isOnline: true,
    avatar: sarahCardImg,
    bio: 'AI Product Photographer & Stylist specializing in 3D studio lighting, skincare flat lays, and cosmetics commercial sets.',
    role: 'AI Product Photographer',
    interests: ['Skincare Stills', 'Studio Lighting', 'Packaging Art'],
    likesCount: '22.3k',
    commentsCount: '950',
    sharesCount: '2.7k'
  }
];

export const PHONE_PROFILE: Profile = {
  id: 'yasmin',
  name: 'Yasmin Cardoso',
  age: 24,
  country: 'United States',
  flag: '🇺🇸',
  city: 'New York City',
  isOnline: true,
  avatar: yasminImg,
  bio: 'Mindtrix AI Creator. Featured in 40+ viral fragrance and skincare product ad campaigns across social media.',
  role: 'Featured AI Creator',
  interests: ['Product Ads', 'Fragrance Visuals', 'Social Reels'],
  likesCount: '48k',
  commentsCount: '2.8k',
  sharesCount: '8.4k'
};

export const PHONE_FRIEND_CARD = {
  name: 'Elena Vance',
  avatar: girlWithSunglassesImg,
  likes: '34k',
  comments: '1.2k',
  shares: '5.6k'
};

export const UWE_PROFILE: Profile = {
  id: 'uwe',
  name: 'UWE SANGER',
  age: 29,
  country: 'Canada',
  flag: '🇨🇦',
  city: 'Vancouver',
  isOnline: true,
  avatar: uweImg,
  bio: 'Lead AI Production Director at Mindtrix Media. Overseeing AI product ad pipelines, 4K render quality, and commercial video delivery.',
  role: 'AI Production Director',
  interests: ['AI Product Ads', 'Commercial Video', 'Creative Tech'],
  likesCount: '28.4k',
  commentsCount: '1.4k',
  sharesCount: '4.2k'
};

export const STAND_FOR_CARDS: StandForCard[] = [
  {
    id: '1',
    title: 'AI PRODUCT ADVERTISING',
    description: 'Simple, clear, and high-converting product ads built to turn viewers into buyers.',
    serviceKey: 'advertising',
    bgClass: 'bg-[#f0f7fc] border border-[#d8eaf6] shadow-sm',
    textClass: 'text-neutral-900'
  },
  {
    id: '2',
    title: 'AI PRODUCT VIDEO CREATION',
    description: 'Short video reels, demo videos, and social ads made for Instagram, TikTok, and YouTube.',
    serviceKey: 'video',
    bgClass: 'bg-[#f9f0fb] border border-[#edd7ee] shadow-sm',
    textClass: 'text-neutral-900'
  },
  {
    id: '3',
    title: 'COMMERCIAL PRODUCTION',
    description: 'High-quality product launch commercials with realistic lighting and clean studio finishes.',
    serviceKey: 'commercial',
    bgClass: 'bg-[#f4faea] border border-[#e2f2cc] shadow-sm',
    textClass: 'text-neutral-900'
  },
  {
    id: '4',
    title: 'AI-GENERATED CAMPAIGNS',
    description: 'Complete multi-format creative sets including product images, video ads, and campaign visuals.',
    serviceKey: 'campaigns',
    bgClass: 'bg-[#edf7f9] border border-[#d2ecf2] shadow-sm',
    textClass: 'text-neutral-900'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'MARCUS VANCE',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    text: 'Mindtrix Media helped us launch our product ads faster than ever. Their AI video reels were delivered in under 48 hours and looked like a high-budget studio production.',
    avatar: paulCardImg,
    role: 'Founder & CEO',
    company: 'Veloce Luxury Goods'
  },
  {
    id: 't2',
    name: 'SARAH LINDQUIST',
    country: 'Sweden',
    flag: '🇸🇪',
    rating: 5,
    text: 'Their AI product photography and commercial videos gave our online store an immediate visual upgrade. The image quality and turnaround time are incredible.',
    avatar: matthiasCardImg,
    role: 'Head of Growth',
    company: 'Nordic Skincare Co.'
  }
];

export const MARQUEE_PRODUCTS: MarqueeProduct[] = [
  // ponytail: curated mix of videos and images with balanced cadence across staggered upper/lower tiers
  { id: 'vid-wp', type: 'video', videoSrc: womenPerfumeVid, src: womenPerfumePlaceImg, label: "Women's Floral Perfume Commercial Reel", category: "Women's Perfume" },
  { id: 'lip-3', type: 'image', src: lipstickEditorialImg, label: 'Editorial Velvet Lipstick', category: 'Lipstick' },
  { id: 'skin-1', type: 'image', src: skincareStoneImg, label: 'Organic Skincare on Stone', category: 'Skincare' },
  { id: 'vid-mp', type: 'video', videoSrc: menPerfumeVid, src: menPerfumePosterImg, label: "Men's Noir Cologne Cinema Reel", category: "Men's Perfume" },
  { id: 'vid-face', type: 'video', videoSrc: facewashVid, src: skincareAdvertisementImg, label: 'Hydra Cleanse Facewash Commercial', category: 'Skincare' },
  { id: 'wp-4', type: 'image', src: womenPerfumePedestalImg, label: 'Rose Gold Flacon on Pedestal', category: "Women's Perfume" },
  { id: 'lip-2', type: 'image', src: lipstickMarbleImg, label: 'Lipstick on Carrara Marble', category: 'Lipstick' },
  { id: 'vid-lip-prod', type: 'video', videoSrc: lipstickProductVid, src: lipstickFlatLayImg, label: 'Velvet Lipstick Macro Reveal', category: 'Lipstick' },
  { id: 'vid-ramp', type: 'video', videoSrc: rampwalkVid, src: rampwalkThumb, label: 'Fashion Runway Viral Reel', category: 'Editorial' },
  { id: 'mp-4', type: 'image', src: menPerfumeEditorialImg, label: 'Editorial Perfume Lighting', category: "Men's Perfume" },
  { id: 'wp-3', type: 'image', src: womenPerfumeFlatLayImg, label: 'Crystal Bottle Studio Flat Lay', category: "Women's Perfume" },
  { id: 'vid-lip', type: 'video', videoSrc: lipstickVid, src: lipstickLuxuryImg, label: 'Crimson Velvet Lipstick Motion', category: 'Lipstick' },
  { id: 'vid-nail', type: 'video', videoSrc: nailArtVid, src: nailArtThumb, label: 'Aesthetic Nail Art Reel', category: 'Cosmetics' },
  { id: 'skin-2', type: 'image', src: skincareAdvertisemenImg, label: 'Pure Serum Dropper Staging', category: 'Skincare' },
  { id: 'mp-5', type: 'image', src: menPerfumeLibraryImg, label: 'Luxury Library Cologne Staging', category: "Men's Perfume" },
  { id: 'vid-tshirt', type: 'video', videoSrc: tshirtFerreriVid, src: tshirtFerreriThumb, label: 'D2C Streetwear & Apparel Ad', category: 'Commercials' },
  { id: 'vid-sukoon', type: 'video', videoSrc: sukoonVid, src: sukoonThumb, label: 'Calming Botanical Mist Reel', category: 'Commercials' },
  { id: 'lip-4', type: 'image', src: lipstickLuxuryImg, label: 'Luxury Gold Trim Lipstick', category: 'Lipstick' },
  { id: 'mp-2', type: 'image', src: menPerfumeCreatingAdvertisImg, label: "Men's Cologne Splash Shot", category: "Men's Perfume" },
  { id: 'vid-noir', type: 'video', videoSrc: cocaineVid, src: cocaineThumb, label: 'Noir Bottle Splash Cinema Reel', category: "Men's Perfume" }
];

export const ALL_IMAGE_PROJECTS: ImageProject[] = [
  {
    id: 'img-1',
    title: 'LUXURY VELVET LIPSTICK EDITORIAL',
    category: 'Lipstick',
    image: lipstickEditorialImg,
    serviceType: 'AI Product Advertising',
    aspectRatio: '1:1',
    resolution: '4K Ultra HD',
    description: 'Studio macro product photography with dramatic lighting and velvety texture highlights.',
    tags: ['Cosmetics', 'Studio Macro', 'Ultra HD'],
    likes: '14.2k'
  },
  {
    id: 'img-2',
    title: 'ORGANIC HYDRATION SERUM ON STONE',
    category: 'Skincare',
    image: skincareStoneImg,
    serviceType: 'AI Product Content Creation',
    aspectRatio: '1:1',
    resolution: '4K Ultra HD',
    description: 'Natural stone pedestal composition highlighting organic ingredients and clean skincare aesthetics.',
    tags: ['Skincare', 'Clean Beauty', 'Pedestal'],
    likes: '19.8k'
  },
  {
    id: 'img-3',
    title: 'NOIR EAU DE PARFUM CAMPAIGN',
    category: "Men's Perfume",
    image: menPerfumeCreatingAdvImg,
    serviceType: 'AI Product Commercial Production',
    aspectRatio: '1:1',
    resolution: '4K Ultra HD',
    description: 'Deep moody cinematic lighting capturing masculine bottle geometry and amber reflections.',
    tags: ['Fragrance', 'Moody Cinema', 'Luxury'],
    likes: '22.1k'
  },
  {
    id: 'img-4',
    title: 'ROSE GOLD FLACON ON PEDESTAL',
    category: "Women's Perfume",
    image: womenPerfumePedestalImg,
    serviceType: 'AI Creative Advertising',
    aspectRatio: '1:1',
    resolution: '4K Ultra HD',
    description: 'Elegant crystal flacon set on a textured architectural pedestal with soft morning daylight.',
    tags: ['Perfume', 'Soft Daylight', 'Minimalist'],
    likes: '27.4k'
  },
  {
    id: 'img-5',
    title: 'COSMETICS COMPOSITION FLAT LAY',
    category: 'Cosmetics',
    image: lipstickFlatLayImg,
    serviceType: 'AI Product Content Creation',
    aspectRatio: '1:1',
    resolution: '4K Ultra HD',
    description: 'Geometric overhead flat lay showcasing multi-shade lipstick pigments and modern packaging.',
    tags: ['Flat Lay', 'Pigments', 'Packaging'],
    likes: '16.5k'
  },
  {
    id: 'img-6',
    title: 'MEN COLOGNE IN LUXURY LIBRARY',
    category: "Men's Perfume",
    image: menPerfumeLibraryImg,
    serviceType: 'AI-Generated Product Campaigns',
    aspectRatio: '1:1',
    resolution: '4K Ultra HD',
    description: 'Editorial lifestyle staging in a rich mahogany library with warm ambient glow.',
    tags: ['Lifestyle', 'Editorial', 'Heritage'],
    likes: '18.3k'
  },
  {
    id: 'img-7',
    title: 'PURE BOTANICAL SKINCARE AD',
    category: 'Skincare',
    image: skincarePhotographImg,
    serviceType: 'AI Product Advertising',
    aspectRatio: '1:1',
    resolution: '4K Ultra HD',
    description: 'Clean glass dropper with liquid splash detail designed for high-conversion social feeds.',
    tags: ['Dropper', 'Clean Beauty', 'High ROAS'],
    likes: '25.9k'
  },
  {
    id: 'img-8',
    title: 'CRYSTAL PERFUME REFLECTION STAGE',
    category: "Women's Perfume",
    image: womenPerfumeCommercialImg,
    serviceType: 'AI Product Video & Visuals',
    aspectRatio: '1:1',
    resolution: '4K Ultra HD',
    description: 'Specular glass reflections with subtle gold dust particles for premium beauty brands.',
    tags: ['Glass Flacon', 'Gold Particles', 'Luxury'],
    likes: '31.2k'
  },
  {
    id: 'img-9',
    title: 'LIPSTICK CAMPAIGN ON CARRARA MARBLE',
    category: 'Lipstick',
    image: lipstickMarbleImg,
    serviceType: 'AI Creative Advertising',
    aspectRatio: '1:1',
    resolution: '4K Ultra HD',
    description: 'White Italian marble surface contrasting with vibrant crimson and nude lipstick shades.',
    tags: ['Marble', 'Color Contrast', 'Studio'],
    likes: '21.0k'
  },
  {
    id: 'img-10',
    title: 'LUXURY SKINCARE TRIO COMMERCIAL SET',
    category: 'Skincare',
    image: skincareCommercialImg,
    serviceType: 'AI Product Commercial Production',
    aspectRatio: '1:1',
    resolution: '4K Ultra HD',
    description: 'Full 3-piece product line staging with harmonious lighting and architectural accents.',
    tags: ['Product Line', 'Studio Staging', 'Commercial'],
    likes: '28.7k'
  },
  {
    id: 'img-11',
    title: 'MINDTRIX SIGNATURE MEN COLOGNE',
    category: "Men's Perfume",
    image: menPerfumeMindtrixImg,
    serviceType: 'AI-Powered Product Ads',
    aspectRatio: '1:1',
    resolution: '4K Ultra HD',
    description: 'Bold center framing with brushed metal cap details and crisp brand typography backdrop.',
    tags: ['Branded Shot', 'Metal Texture', 'Ad Creative'],
    likes: '19.4k'
  },
  {
    id: 'img-12',
    title: 'FLORAL ESSENCE PERFUME STYLING',
    category: "Women's Perfume",
    image: womenPerfumeCreatingImg,
    serviceType: 'AI Product Advertising',
    aspectRatio: '1:1',
    resolution: '4K Ultra HD',
    description: 'Spring blooming floral accents framing a luminous transparent flacon for seasonal launches.',
    tags: ['Seasonal Ad', 'Floral', 'Fresh'],
    likes: '23.6k'
  }
];

export const ALL_VIDEO_PROJECTS: VideoProject[] = [
  {
    id: 'vid-1',
    title: 'LUXURY FRAGRANCE COMMERCIAL PRODUCTION',
    category: 'Commercials',
    format: 'wide',
    thumbnail: womenPerfumeCommercialImg,
    duration: '0:30',
    serviceType: 'AI Product Commercial Production',
    clientIndustry: 'Luxury Perfume & Beauty',
    views: '2.4M',
    roas: '4.5x',
    description: 'Cinema-grade lighting, fluid camera sweeps, and ultra-crisp flacon renders crafted for high-end digital broadcast.',
    tags: ['Broadcast Ad', '4K Cinema', 'Luxury Beauty']
  },
  {
    id: 'vid-2',
    title: 'ORGANIC SKINCARE REVOLUTION AD',
    category: 'Product Ads',
    format: 'wide',
    thumbnail: skincareStoneImg,
    duration: '0:20',
    serviceType: 'AI-Powered Product Ads',
    clientIndustry: 'Clean Cosmetics & Skincare',
    views: '1.8M',
    roas: '3.9x',
    description: 'High-impact product benefit callouts, clean textures, and fast visual pacing designed to drive direct sales.',
    tags: ['Direct Response', 'Meta & TikTok', 'Conversion']
  },
  {
    id: 'vid-3',
    title: 'VIRAL FASHION RUNWAY & BEAUTY REEL',
    category: 'Viral Reels',
    format: 'tall',
    thumbnail: brunetteImg,
    duration: '0:15',
    serviceType: 'AI Product Video Creation',
    clientIndustry: 'Apparel & Accessories',
    views: '3.2M',
    roas: '5.1x',
    description: 'Dynamic 9:16 vertical reel with quick cuts, trending sound design, and instant visual hook in first 2 seconds.',
    tags: ['Instagram Reel', 'TikTok Viral', '9:16 Vertical']
  },
  {
    id: 'vid-4',
    title: 'COSMETICS LAUNCH PRODUCT SPOTLIGHT',
    category: 'E-Commerce',
    format: 'tall',
    thumbnail: communityFriendsImg,
    duration: '0:18',
    serviceType: 'AI Creative Advertising',
    clientIndustry: 'D2C E-Commerce Brand',
    views: '1.5M',
    roas: '4.2x',
    description: 'Engaging creator-style product video reel with unboxing and real-time application highlight.',
    tags: ['Product Reel', 'Unboxing', 'E-Commerce']
  },
  {
    id: 'vid-5',
    title: 'MEN NOIR COLOGNE STATEMENT FILM',
    category: 'Brand Films',
    format: 'tall',
    thumbnail: tousledGuyImg,
    duration: '0:25',
    serviceType: 'AI Product Content Creation',
    clientIndustry: 'Men Grooming & Fragrance',
    views: '2.1M',
    roas: '3.8x',
    description: 'Moody, high-contrast visual storytelling that establishes brand authority and aspirational identity.',
    tags: ['Brand Story', 'High Contrast', 'Lifestyle']
  },
  {
    id: 'vid-6',
    title: 'ENTERPRISE SAAS & HARDWARE 3D SHOWCASE',
    category: 'Commercials',
    format: 'wide',
    thumbnail: menPerfumeLibraryImg,
    duration: '0:45',
    serviceType: 'AI-Generated Product Campaigns',
    clientIndustry: 'Tech & Modern Hardware',
    views: '980K',
    roas: '4.8x',
    description: 'Exploded-view product anatomy, feature highlights, and sleek 3D perspective animations for B2B & retail buyers.',
    tags: ['3D Anatomy', 'Enterprise', 'Product Launch']
  },
  {
    id: 'vid-7',
    title: 'HYDRATION GLOW SERUM HERO COMMERCIAL',
    category: 'Product Ads',
    format: 'wide',
    thumbnail: skincareCommercialImg,
    duration: '0:30',
    serviceType: 'AI Product Advertising',
    clientIndustry: 'Health & Derma Care',
    views: '2.7M',
    roas: '4.4x',
    description: 'Microscopic texture zoom, moisture barrier animation, and dermatologist-tested validation overlay.',
    tags: ['Derma Care', 'Micro Texture', 'Proven ROAS']
  },
  {
    id: 'vid-8',
    title: 'CRIMSON VELVET LIPSTICK MACRO TEASER',
    category: 'Viral Reels',
    format: 'tall',
    thumbnail: windblownImg,
    duration: '0:12',
    serviceType: 'AI Product Video Creation',
    clientIndustry: 'Beauty & Glamour',
    views: '4.1M',
    roas: '5.4x',
    description: 'Mesmerizing pigment glide, water-resistant test, and bold typography flash in a 12-second hyper-retention format.',
    tags: ['Hyper Retention', 'Macro Glide', 'TikTok Hit']
  },
  {
    id: 'vid-9',
    title: 'SUMMER VIBES BOTANICAL MIST SHORT',
    category: 'Explainers',
    format: 'tall',
    thumbnail: pixieImg,
    duration: '0:20',
    serviceType: 'AI Creative Advertising',
    clientIndustry: 'Wellness & Daily Care',
    views: '1.9M',
    roas: '3.7x',
    description: 'Step-by-step routine explainer demonstrating how to refresh throughout the day with natural spray mist.',
    tags: ['How-To Explainer', 'Step by Step', 'Shorts']
  },
  {
    id: 'vid-10',
    title: 'SUNLIGHT GOLD FLACON BRAND SPOTLIGHT',
    category: 'Brand Films',
    format: 'tall',
    thumbnail: sunlightManImg,
    duration: '0:22',
    serviceType: 'AI Product Commercial Production',
    clientIndustry: 'Artisanal Perfumery',
    views: '2.3M',
    roas: '4.0x',
    description: 'Golden hour ambient light reflecting through crystal perfume flacon with inspirational brand narration.',
    tags: ['Golden Hour', 'Crystal Optics', 'Brand Anthem']
  }
];
