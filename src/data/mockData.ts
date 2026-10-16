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

import lipstickFlatLayImg from '@/assets/images/lipstick/Create_cosmetics_flat_lay_photog.jpg';
import lipstickMarbleImg from '@/assets/images/lipstick/Lipstick_advertisement_on_marble.jpg';
import lipstickEditorialImg from '@/assets/images/lipstick/Lipstick_product_editorial_photo.jpg';
import lipstickLuxuryImg from '@/assets/images/lipstick/Luxury_lipstick_advertising_phot.jpg';
import menPerfumeCreatingAdvImg from '@/assets/images/men perfume/Creating_perfume_bottle_adv.jpg';
import menPerfumeCreatingAdvertisImg from '@/assets/images/men perfume/Creating_perfume_bottle_advertis.jpg';
import menPerfumePosterImg from '@/assets/images/men perfume/Perfume_bottle_advertising_poster.jpg';
import menPerfumeEditorialImg from '@/assets/images/men perfume/Perfume_bottle_editorial_photogr.jpg';
import menPerfumeLibraryImg from '@/assets/images/men perfume/Perfume_bottle_in_luxury_library.jpg';
import menPerfumeMindtrixImg from '@/assets/images/men perfume/Photographing_Mindtrix_Media_per.jpg';
import skincareStoneImg from '@/assets/images/facewash/Skincare_advertisement_on_stone.jpg';
import skincarePhotographImg from '@/assets/images/facewash/Skincare_advertising_photograph.jpg';
import skincareAdvertisemenImg from '@/assets/images/facewash/Skincare_product_advertisemen.jpg';
import skincareAdvertisementImg from '@/assets/images/facewash/Skincare_product_advertisement.jpg';
import skincareCommercialImg from '@/assets/images/facewash/Skincare_product_commercial_photo.jpg';
import womenPerfumeCreatingImg from '@/assets/images/women perfume/Creating_perfume_advertising_pho.jpg';
import womenPerfumeCommercialImg from '@/assets/images/women perfume/Perfume_bottle_commercial_photog.jpg';
import womenPerfumeFlatLayImg from '@/assets/images/women perfume/Perfume_bottle_flat-lay_photograph.jpg';
import womenPerfumePedestalImg from '@/assets/images/women perfume/Perfume_bottle_on_stone_pedestal.jpg';
import womenPerfumePlaceImg from '@/assets/images/women perfume/Perfume_product_photograph_place.jpg';

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
    bio: 'Lead AI Video Producer at Mindtrix. Directing viral UGC ads and 3D product motion campaigns for European direct-to-consumer brands.',
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
  bio: 'Mindtrix AI UGC Creator. Featured in 40+ viral fragrance and skincare social campaigns with 3.8x average ROAS.',
  role: 'Featured AI Creator',
  interests: ['Viral UGC', 'Fragrance Ads', 'Product Testing'],
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
  bio: 'Senior Systems Architect at Mindtrix Media. Engineering scalable software and automated AI content pipelines for global enterprise clients.',
  role: 'AI Systems Architect',
  interests: ['Business Software', 'AI Automation', 'Campaign Tech'],
  likesCount: '28.4k',
  commentsCount: '1.4k',
  sharesCount: '4.2k'
};

export const STAND_FOR_CARDS: StandForCard[] = [
  {
    id: '1',
    title: 'AI PRODUCT ADVERTISING',
    description: 'Simple, clear, and high-converting product ads built to turn casual viewers into loyal buyers.',
    serviceKey: 'advertising',
    bgClass: 'bg-[#f0f7fc] border border-[#d8eaf6] shadow-sm',
    textClass: 'text-neutral-900'
  },
  {
    id: '2',
    title: 'AI PRODUCT VIDEO CREATION',
    description: 'Fast-paced, scroll-stopping video reels and UGC-style ads crafted for TikTok, Instagram, and YouTube Shorts.',
    serviceKey: 'video',
    bgClass: 'bg-[#f9f0fb] border border-[#edd7ee] shadow-sm',
    textClass: 'text-neutral-900'
  },
  {
    id: '3',
    title: 'COMMERCIAL PRODUCTION',
    description: 'Agency-grade cinematic product commercials with studio lighting, realistic textures, and premium finish.',
    serviceKey: 'commercial',
    bgClass: 'bg-[#f4faea] border border-[#e2f2cc] shadow-sm',
    textClass: 'text-neutral-900'
  },
  {
    id: '4',
    title: 'AI-GENERATED CAMPAIGNS',
    description: 'End-to-end multi-asset campaigns including high-res photos, video variations, and copy designed to scale your business.',
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
    text: 'Mindtrix Media completely revolutionized our e-commerce advertising. Their AI product video creation delivered 15 high-converting reels in under 48 hours. Our ROAS increased from 1.8x to 4.2x within two weeks. The quality matches top creative agencies at a fraction of the cost.',
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
    text: 'We used Mindtrix Media software for business automation, and when they launched their AI Product Advertising service, we signed up immediately. The AI-generated product photography and commercials look like a $60,000 studio shoot. Highly recommend their team.',
    avatar: matthiasCardImg,
    role: 'Head of Growth',
    company: 'Nordic Skincare Co.'
  }
];

export const MARQUEE_PRODUCTS: MarqueeProduct[] = [
  { id: 'lip-1', src: lipstickFlatLayImg, label: 'Lipstick Studio Flat Lay', category: 'Lipstick' },
  { id: 'lip-2', src: lipstickMarbleImg, label: 'Lipstick on Carrara Marble', category: 'Lipstick' },
  { id: 'lip-3', src: lipstickEditorialImg, label: 'Editorial Velvet Lipstick', category: 'Lipstick' },
  { id: 'lip-4', src: lipstickLuxuryImg, label: 'Luxury Gold Trim Lipstick', category: 'Lipstick' },
  { id: 'mp-1', src: menPerfumeCreatingAdvImg, label: "Men's Noir Fragrance Ad", category: "Men's Perfume" },
  { id: 'mp-2', src: menPerfumeCreatingAdvertisImg, label: "Men's Cologne Splash Shot", category: "Men's Perfume" },
  { id: 'mp-3', src: menPerfumePosterImg, label: "Men's Eau De Parfum Poster", category: "Men's Perfume" },
  { id: 'mp-4', src: menPerfumeEditorialImg, label: 'Editorial Perfume Lighting', category: "Men's Perfume" },
  { id: 'mp-5', src: menPerfumeLibraryImg, label: 'Luxury Library Cologne Staging', category: "Men's Perfume" },
  { id: 'mp-6', src: menPerfumeMindtrixImg, label: 'Mindtrix Signature Perfume Shot', category: "Men's Perfume" },
  { id: 'skin-1', src: skincareStoneImg, label: 'Organic Skincare on Stone', category: 'Skincare' },
  { id: 'skin-2', src: skincarePhotographImg, label: 'Pure Serum Dropper Staging', category: 'Skincare' },
  { id: 'skin-3', src: skincareAdvertisemenImg, label: 'Botanical Skincare Clean Ad', category: 'Skincare' },
  { id: 'skin-4', src: skincareAdvertisementImg, label: 'Hydra Glow Cream Campaign', category: 'Skincare' },
  { id: 'skin-5', src: skincareCommercialImg, label: 'Luxury Skincare Trio Commercial', category: 'Skincare' },
  { id: 'wp-1', src: womenPerfumeCreatingImg, label: "Women's Floral Perfume Ad", category: "Women's Perfume" },
  { id: 'wp-2', src: womenPerfumeCommercialImg, label: 'Commercial Glass Reflection', category: "Women's Perfume" },
  { id: 'wp-3', src: womenPerfumeFlatLayImg, label: 'Crystal Bottle Studio Flat Lay', category: "Women's Perfume" },
  { id: 'wp-4', src: womenPerfumePedestalImg, label: 'Rose Gold Flacon on Pedestal', category: "Women's Perfume" },
  { id: 'wp-5', src: womenPerfumePlaceImg, label: 'Premium Perfume Editorial Spread', category: "Women's Perfume" }
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
    title: 'COSMETICS LAUNCH UGC SPOTLIGHT',
    category: 'E-Commerce',
    format: 'tall',
    thumbnail: communityFriendsImg,
    duration: '0:18',
    serviceType: 'AI Creative Advertising',
    clientIndustry: 'D2C E-Commerce Brand',
    views: '1.5M',
    roas: '4.2x',
    description: 'Authentic creator-style testimonial vibe with product unboxing and real-time application glow.',
    tags: ['UGC Format', 'Unboxing', 'E-Commerce']
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
