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

export interface MarqueeProduct {
  id: string;
  src: string;
  label: string;
  category?: string;
  // ponytail: minimal type discriminator to allow native HTML5 video or image rendering
  type?: 'image' | 'video';
  videoSrc?: string;
}
