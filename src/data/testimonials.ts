import avatarGreenCapImg from '@/assets/img/avatar_green_cap_1790979403136.jpg';
import avatarHipsterBeardImg from '@/assets/img/avatar_hipster_beard_1790979384816.jpg';
import brunetteImg from '@/assets/img/brunette_shirt_left_1790982842053.jpg';
import uweImg from '@/assets/img/profile_uwe_1790976747637.jpg';
import matthiasCardImg from '@/assets/img/card_matthias_1790977103900.jpg';
import johannaCardImg from '@/assets/img/card_johanna_1790977118147.jpg';
import sarahCardImg from '@/assets/img/card_sarah_1790977156627.jpg';
import paulCardImg from '@/assets/img/card_paul_1790977146486.jpg';
import { VIDEOS } from '@/data/videos';

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
    avatar: matthiasCardImg,
    stars: 5,
  },
  {
    quote: "I finally found an agency that gets speed and aesthetic. The weekly deliverables exceeded our expectations from day one.",
    author: "Rachel Lin",
    role: "Head of Growth, Aura",
    avatar: sarahCardImg,
    stars: 5,
  },
  {
    quote: "Within 30 days we had more content than we'd made in a full year, and it was better content. The results exceeded our expectations.",
    author: "Tom Nakamura",
    role: "CEO, Velour Co.",
    avatar: avatarHipsterBeardImg,
    stars: 5,
  },
  {
    quote: "We tried two agencies before this and got nothing but pitch decks and excuses. Real results happened fast.",
    author: "Sara Kim",
    role: "CMO, Oraly",
    avatar: brunetteImg,
    stars: 5,
  },
  {
    quote: "Mindtrix Media streamlined our entire visual pipeline. High performance creative produced without the endless delays.",
    author: "Marcus Vance",
    role: "Founder, Veloce Goods",
    avatar: uweImg,
    stars: 5,
  },
];

export const BOTTOM_ROW_TESTIMONIALS: TestimonialCardData[] = [
  {
    quote: "Social media ad creative used to be shouting into a void. Now our ROAS is consistently 3.5x+ across paid campaigns.",
    author: "Alicia Gomez",
    role: "Marketing Director, Lumina",
    avatar: johannaCardImg,
    stars: 5,
  },
  {
    quote: "Mindtrix Media gave us a real strategy, real creators, and real results within 60 days, helping us grow faster with measurable impact.",
    author: "Ethan Brooks",
    role: "Wellness, Oralyn Skincare",
    avatar: paulCardImg,
    stars: 5,
  },
  {
    quote: "120+ video assets delivered in record time with zero compromise on visual finish. Our team can finally focus on scaling.",
    author: "Chloe Dubois",
    role: "Creative Lead, Maison",
    avatar: avatarGreenCapImg,
    stars: 5,
  },
  {
    quote: "With Mindtrix Media, we saw structured strategy, quality creators, and strong results within two months.",
    author: "Noah Parker",
    role: "Brand Strategist, Mintwave",
    avatar: matthiasCardImg,
    stars: 5,
  },
  {
    quote: "Our CTR increased by 84% in the first two weeks of running these reels. The conversion speak for itself.",
    author: "Elena Rostova",
    role: "VP Ecommerce, SORA",
    avatar: brunetteImg,
    stars: 5,
  },
];

export const ALL_TESTIMONIALS: TestimonialCardData[] = [
  ...TOP_ROW_TESTIMONIALS,
  ...BOTTOM_ROW_TESTIMONIALS,
];

export const CLIENT_PROOF_AVATARS = [
  avatarGreenCapImg,
  avatarHipsterBeardImg,
  brunetteImg,
  uweImg,
];
