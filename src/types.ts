export interface Profile {
  id: string;
  name: string;
  age?: number;
  country: string;
  flag: string;
  city?: string;
  isOnline: boolean;
  avatar: string;
  bio: string;
  role?: string;
  likesCount?: string;
  commentsCount?: string;
  sharesCount?: string;
  interests?: string[];
  badges?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  flag: string;
  rating: number;
  text: string;
  avatar: string;
  role?: string;
  company?: string;
}

export interface CreativeService {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  videoSrc: string;
  posterSrc: string;
  cardGradient: string;
  borderColor: string;
  shadowClass: string;
  checkColor?: string;
  phoneAlignment: 'left' | 'right';
  stickyTopClass: string;
}

export interface StandForCard {
  id: string;
  title: string;
  description: string;
  serviceKey?: string;
  bgClass: string;
  textClass: string;
}

export interface MarqueeProduct {
  id: string;
  src: string;
  label: string;
  category?: string;
  // ponytail: minimal type discriminator to allow native HTML5 video or image rendering
  type?: 'image' | 'video';
  videoSrc?: string;
}

export interface ImageProject {
  id: string;
  title: string;
  category: 'Skincare' | 'Lipstick' | "Men's Perfume" | "Women's Perfume" | 'Cosmetics' | 'Editorial';
  image: string;
  serviceType: string;
  aspectRatio: string;
  resolution: string;
  description: string;
  tags: string[];
  likes: string;
}

export interface VideoProject {
  id: string;
  title: string;
  category: 'Product Ads' | 'Commercials' | 'Viral Reels' | 'Brand Films' | 'E-Commerce' | 'Explainers';
  format: 'wide' | 'tall';
  thumbnail: string;
  duration: string;
  serviceType: string;
  clientIndustry: string;
  views: string;
  roas: string;
  description: string;
  tags: string[];
}
