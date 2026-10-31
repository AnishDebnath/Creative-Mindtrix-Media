import { Profile } from '@/types';

import matthiasCardImg from '@/assets/img/card_matthias_1790977103900.jpg';
import johannaCardImg from '@/assets/img/card_johanna_1790977118147.jpg';
import simoneCardImg from '@/assets/img/card_simone_1790977134116.jpg';
import paulCardImg from '@/assets/img/card_paul_1790977146486.jpg';
import sarahCardImg from '@/assets/img/card_sarah_1790977156627.jpg';
import uweImg from '@/assets/img/profile_uwe_1790976747637.jpg';
import girlWithSunglassesImg from '@/assets/img/card_girl_sunglasses_1790978472551.jpg';

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
