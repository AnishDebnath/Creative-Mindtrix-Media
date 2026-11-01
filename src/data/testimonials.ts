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
    quote: "Our engagement tripled and our ad costs dropped. Turns out when content looks real, people actually click.",
    author: "James Adler",
    role: "Founder, Duskline",
    avatar: avatarJames,
    stars: 5,
  },
  {
    quote: "I finally found an agency that gets speed and aesthetic. The weekly deliverables exceeded our expectations from day one.",
    author: "Rachel Lin",
    role: "Head of Growth, Aura",
    avatar: avatarRachel,
    stars: 5,
  },
  {
    quote: "Within 30 days we had more content than we'd made in a full year, and it was better content. The results exceeded our expectations.",
    author: "Tom Nakamura",
    role: "CEO, Velour Co.",
    avatar: avatarTom,
    stars: 5,
  },
  {
    quote: "We tried two agencies before this and got nothing but pitch decks and excuses. Real results happened fast.",
    author: "Sara Kim",
    role: "CMO, Oraly",
    avatar: avatarSara,
    stars: 5,
  },
  {
    quote: "Mindtrix Media streamlined our entire visual pipeline. High performance creative produced without the endless delays.",
    author: "Marcus Vance",
    role: "Founder, Veloce Goods",
    avatar: avatarMarcus,
    stars: 5,
  },
];

export const BOTTOM_ROW_TESTIMONIALS: TestimonialCardData[] = [
  {
    quote: "Social media ad creative used to be shouting into a void. Now our ROAS is consistently 3.5x+ across paid campaigns.",
    author: "Alicia Gomez",
    role: "Marketing Director, Lumina",
    avatar: avatarAlicia,
    stars: 5,
  },
  {
    quote: "Mindtrix Media gave us a real strategy, real creators, and real results within 60 days, helping us grow faster with measurable impact.",
    author: "Ethan Brooks",
    role: "Wellness, Oralyn Skincare",
    avatar: avatarEthan,
    stars: 5,
  },
  {
    quote: "120+ video assets delivered in record time with zero compromise on visual finish. Our team can finally focus on scaling.",
    author: "Chloe Dubois",
    role: "Creative Lead, Maison",
    avatar: avatarChloe,
    stars: 5,
  },
  {
    quote: "With Mindtrix Media, we saw structured strategy, quality creators, and strong results within two months.",
    author: "Noah Parker",
    role: "Brand Strategist, Mintwave",
    avatar: avatarNoah,
    stars: 5,
  },
  {
    quote: "Our CTR increased by 84% in the first two weeks of running these reels. The conversion speak for itself.",
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
