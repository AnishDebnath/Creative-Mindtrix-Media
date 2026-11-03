import { IMAGES } from '@/data/images';
import { VIDEOS } from '@/data/videos';

// Authentic portraits from src/assets/images
const avatarJames = IMAGES['fashion-confident-red-tee'].src;
const avatarRachel = IMAGES['jewelry-elegant-necklace-portrait'].src;
const avatarTom = IMAGES['fashion-model-studio-pose'].src;
const avatarSara = IMAGES['jewelry-pendant-hand-pose'].src;
const avatarMarcus = IMAGES['fashion-red-tinted-model'].src;

const avatarAlicia = IMAGES['jewelry-heart-necklace-red-dress'].src;
const avatarEthan = IMAGES['fashion-oversized-graphic-tee'].src;
const avatarChloe = IMAGES['studio-midnight-muse'].src;
const avatarNoah = IMAGES['fashion-deep-red-studio'].src;
const avatarElena = IMAGES['jewelry-pendant-red-dress-model'].src;

export interface StoryReel {
  id: string;
  video: string;
  poster: string;
  time: string;
  tag: string;
}

export interface TestimonialCardData {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  stars?: number;
}

export const STORY_REELS: StoryReel[] = [
  {
    id: 'women-perfume', // Video #7 from videos catalog
    video: VIDEOS['women-perfume'].videoSrc,
    poster: VIDEOS['women-perfume'].image,
    time: '2h',
    tag: 'Luxury Perfume Commercial',
  },
  {
    id: 'jewelry-editorial', // Video #4 from videos catalog
    video: VIDEOS['jewelry-editorial'].videoSrc,
    poster: VIDEOS['jewelry-editorial'].image,
    time: '4h',
    tag: 'Luxury Jewelry Editorial',
  },
  {
    id: 'lipstick-application', // Video #14 from videos catalog
    video: VIDEOS['lipstick-application'].videoSrc,
    poster: VIDEOS['lipstick-application'].image,
    time: '6h',
    tag: 'Beauty & Lipstick Application',
  },
];

export const TOP_ROW_TESTIMONIALS: TestimonialCardData[] = [
  {
    quote: "We sent phone photos and got cinematic AI video ads in 48 hours. Meta ROAS jumped to 3.8x.",
    author: "James Adler",
    role: "Founder, Duskline",
    avatar: avatarJames,
    stars: 5,
  },
  {
    quote: "Their 4-step process is effortless. Viral reels delivered on schedule and tripled our engagement.",
    author: "Rachel Lin",
    role: "Head of Growth, Aura",
    avatar: avatarRachel,
    stars: 5,
  },
  {
    quote: "Replaced studio photoshoots with AI product images. Look 100% real and increased sales by 45%.",
    author: "Tom Nakamura",
    role: "CEO, Velour Co.",
    avatar: avatarTom,
    stars: 5,
  },
  {
    quote: "Mindtrix collected our samples, found winning hooks, and delivered 8 top-performing ads in weeks.",
    author: "Sara Kim",
    role: "CMO, Oraly",
    avatar: avatarSara,
    stars: 5,
  },
  {
    quote: "The AI spokesperson ads look totally natural. Customers trust us faster and ad costs dropped.",
    author: "Marcus Vance",
    role: "Founder, Veloce Goods",
    avatar: avatarMarcus,
    stars: 5,
  },
];

export const BOTTOM_ROW_TESTIMONIALS: TestimonialCardData[] = [
  {
    quote: "Fresh catalog graphics and social reels delivered every month with zero stress.",
    author: "Alicia Gomez",
    role: "Marketing Director, Lumina",
    avatar: avatarAlicia,
    stars: 5,
  },
  {
    quote: "Their reels got over 1.2M views on Instagram and TikTok. Trend research was spot-on.",
    author: "Ethan Brooks",
    role: "Growth Lead, Oralyn",
    avatar: avatarEthan,
    stars: 5,
  },
  {
    quote: "From branding to 3D video ads, luxury production quality at an affordable price.",
    author: "Chloe Dubois",
    role: "Creative Lead, Maison",
    avatar: avatarChloe,
    stars: 5,
  },
  {
    quote: "Finding converting creatives used to be hard. Mindtrix's AI production solved that for us.",
    author: "Noah Parker",
    role: "Brand Strategist, Mintwave",
    avatar: avatarNoah,
    stars: 5,
  },
  {
    quote: "Our CTR jumped 84% in two weeks. Consistent AI video ads transformed our online store.",
    author: "Elena Rostova",
    role: "VP Ecommerce, SORA",
    avatar: avatarElena,
    stars: 5,
  },
];

export const ALL_TESTIMONIALS: TestimonialCardData[] = [
  ...TOP_ROW_TESTIMONIALS,
  ...BOTTOM_ROW_TESTIMONIALS,
];

export const CLIENT_PROOF_AVATARS = [
  avatarJames,
  avatarRachel,
  avatarTom,
  avatarSara,
];
