import { CreativeService } from '@/types';
import { getCloudinaryVideo, getCloudinaryVideoThumbnail } from '@/utils/cloudinary';

// Local video assets directly from the video folder (src/assets/videos)
import lipstickVid from '@/assets/videos/beauty/cosmetic-lipstick-application.mp4';
import menPerfumeVid from '@/assets/videos/beauty/mens-luxury-perfume-nocturne.mp4';
import nailArtVid from '@/assets/videos/beauty/chrome-nail-art-atelier.mp4';
import rampwalkVid from '@/assets/videos/fashion/paris-fashion-runway.mp4';
import sukoonVid from '@/assets/videos/fashion/sukoon-wellness-essentials.mp4';
import lipstickProductVid from '@/assets/videos/beauty/beauty-lipstick-spotlight.mp4';
import womenPerfumeVid from '@/assets/videos/beauty/womens-luxury-perfume-elegance.mp4';
import cocaineVid from '@/assets/videos/fashion/luxury-perfume-noir-splash.mp4';

/**
 * Section Header Information for Creative Services
 */
export const SERVICES_SECTION_HEADER = {
  title: 'What We Deliver',
  description: 'Explore our range of creative services, from AI-powered product advertising and commercial visuals to engaging video reels and strategic brand campaigns.',
  ctaText: 'EXPLORE CREATIVE WORK',
};

/**
 * Creative Service Cards Data
 * Configured with website theme gradients, video assets, checklist points, and layout positioning.
 */
export const CREATIVE_SERVICES: CreativeService[] = [
  {
    id: 'ai-powered-product-advertising',
    badge: 'AI Advertising',
    title: 'AI-Powered Product Advertising',
    description: 'Create eye-catching product ads using AI-powered visuals and cinematic commercial concepts.',
    features: [
      'AI Product Commercials',
      'Cinematic Ad Creatives',
      'Promotional Campaign Visuals',
    ],
    videoSrc: lipstickVid || getCloudinaryVideo('cosmetic-lipstick-application.mp4', { optimize: true, quality: 'good', width: 480 }),
    posterSrc: getCloudinaryVideoThumbnail('cosmetic-lipstick-application.mp4'),
    cardGradient: 'bg-gradient-to-br from-[#fdf4ed] via-[#f8edf5] to-[#f1ecfc]',
    borderColor: 'border-[#eda970]/40',
    shadowClass: 'shadow-[0_24px_50px_-12px_rgba(237,169,112,0.18)]',
    checkColor: '#6566ee',
    phoneAlignment: 'left',
    stickyTopClass: 'sticky top-24 sm:top-28 z-[21]',
  },
  {
    id: 'product-photography-ai-image-creation',
    badge: 'Product Visuals',
    title: 'Product Photography & AI Image Creation',
    description: 'Turn product photos into professional images with AI-powered scenes, backgrounds, and enhancements.',
    features: [
      'Product Photography & Retouching',
      'AI Lifestyle Product Images',
      'Background Replacement & Enhancement',
    ],
    videoSrc: menPerfumeVid || getCloudinaryVideo('mens-luxury-perfume-nocturne.mp4', { optimize: true, quality: 'good', width: 480 }),
    posterSrc: getCloudinaryVideoThumbnail('mens-luxury-perfume-nocturne.mp4'),
    cardGradient: 'bg-gradient-to-br from-[#f3effb] via-[#f9edf5] to-[#fef5ee]',
    borderColor: 'border-[#8f73cc]/40',
    shadowClass: 'shadow-[0_30px_70px_-15px_rgba(143,115,204,0.2)]',
    checkColor: '#6566ee',
    phoneAlignment: 'right',
    stickyTopClass: 'sticky top-32 sm:top-36 z-[22]',
  },
  {
    id: 'social-media-reels-video-content',
    badge: 'Social Media',
    title: 'Social Media Reels & Video Content',
    description: 'Create engaging short-form videos to keep your brand active across social media platforms.',
    features: [
      'Instagram Reels & YouTube Shorts',
      'Brand Promotional Videos',
      'Social Media Video Content',
    ],
    videoSrc: nailArtVid || getCloudinaryVideo('chrome-nail-art-atelier.mp4', { optimize: true, quality: 'good', width: 480 }),
    posterSrc: getCloudinaryVideoThumbnail('chrome-nail-art-atelier.mp4'),
    cardGradient: 'bg-gradient-to-br from-[#f8edf5] via-[#f2ebfc] to-[#fdf4ed]',
    borderColor: 'border-[#dcc6d5]',
    shadowClass: 'shadow-[0_24px_50px_-12px_rgba(143,115,204,0.18)]',
    checkColor: '#6566ee',
    phoneAlignment: 'left',
    stickyTopClass: 'sticky top-24 sm:top-28 z-[23]',
  },
  {
    id: 'digital-advertising-creatives',
    badge: 'Digital Advertising',
    title: 'Digital Advertising Creatives',
    description: 'Design compelling ad creatives to promote products, communicate offers, and support campaigns.',
    features: [
      'Facebook & Instagram Ads',
      'Google & YouTube Ad Creatives',
      'Offers & Promotional Graphics',
    ],
    videoSrc: rampwalkVid || getCloudinaryVideo('paris-fashion-runway.mp4', { optimize: true, quality: 'good', width: 480 }),
    posterSrc: getCloudinaryVideoThumbnail('paris-fashion-runway.mp4'),
    cardGradient: 'bg-gradient-to-br from-[#f0f0fd] via-[#f7f0fb] to-[#faedf4]',
    borderColor: 'border-[#6566ee]/30',
    shadowClass: 'shadow-[0_30px_70px_-15px_rgba(101,102,238,0.2)]',
    checkColor: '#6566ee',
    phoneAlignment: 'right',
    stickyTopClass: 'sticky top-32 sm:top-36 z-[24]',
  },
  {
    id: 'ai-spokesperson-ugc-videos',
    badge: 'AI Video Solutions',
    title: 'AI Spokesperson & UGC-Style Videos',
    description: 'Present products and services through AI presenters and authentic creator-style promotional videos.',
    features: [
      'AI Spokesperson Videos',
      'UGC-Style Product Ads',
      'Product Explainer Videos',
    ],
    videoSrc: sukoonVid || getCloudinaryVideo('sukoon-wellness-essentials.mp4', { optimize: true, quality: 'good', width: 480 }),
    posterSrc: getCloudinaryVideoThumbnail('sukoon-wellness-essentials.mp4'),
    cardGradient: 'bg-gradient-to-br from-[#fdf4ed] via-[#f8edf5] to-[#f1ecfc]',
    borderColor: 'border-[#eda970]/40',
    shadowClass: 'shadow-[0_24px_50px_-12px_rgba(237,169,112,0.18)]',
    checkColor: '#6566ee',
    phoneAlignment: 'left',
    stickyTopClass: 'sticky top-24 sm:top-28 z-[25]',
  },
  {
    id: 'ecommerce-product-content',
    badge: 'E-commerce',
    title: 'E-commerce Product Content',
    description: 'Create professional product visuals that improve online listings and showcase product features clearly.',
    features: [
      'Marketplace Product Images',
      'Product Feature Infographics',
      'Catalogue & Store Banners',
    ],
    videoSrc: lipstickProductVid || getCloudinaryVideo('beauty-lipstick-spotlight.mp4', { optimize: true, quality: 'good', width: 480 }),
    posterSrc: getCloudinaryVideoThumbnail('beauty-lipstick-spotlight.mp4'),
    cardGradient: 'bg-gradient-to-br from-[#f3effb] via-[#f9edf5] to-[#fef5ee]',
    borderColor: 'border-[#8f73cc]/40',
    shadowClass: 'shadow-[0_30px_70px_-15px_rgba(143,115,204,0.2)]',
    checkColor: '#6566ee',
    phoneAlignment: 'right',
    stickyTopClass: 'sticky top-32 sm:top-36 z-[26]',
  },
  {
    id: 'brand-identity-graphic-design',
    badge: 'Brand Design',
    title: 'Brand Identity & Graphic Design',
    description: 'Build a consistent brand identity with professional visuals and creative marketing materials.',
    features: [
      'Logo & Brand Identity',
      'Packaging & Label Design',
      'Brochures & Marketing Materials',
    ],
    videoSrc: womenPerfumeVid || getCloudinaryVideo('womens-luxury-perfume-elegance.mp4', { optimize: true, quality: 'good', width: 480 }),
    posterSrc: getCloudinaryVideoThumbnail('womens-luxury-perfume-elegance.mp4'),
    cardGradient: 'bg-gradient-to-br from-[#f8edf5] via-[#f2ebfc] to-[#fdf4ed]',
    borderColor: 'border-[#dcc6d5]',
    shadowClass: 'shadow-[0_24px_50px_-12px_rgba(143,115,204,0.18)]',
    checkColor: '#6566ee',
    phoneAlignment: 'left',
    stickyTopClass: 'sticky top-24 sm:top-28 z-[27]',
  },
  {
    id: 'brand-campaign-creative-strategy',
    badge: 'Creative Strategy',
    title: 'Brand Campaign & Creative Strategy',
    description: 'Plan creative campaigns that communicate your brand story and promote products effectively.',
    features: [
      'Creative Concepts & Direction',
      'Product Launch & Festival Campaigns',
      'Ad Copy & Video Scripts',
    ],
    videoSrc: cocaineVid || getCloudinaryVideo('luxury-perfume-noir-splash.mp4', { optimize: true, quality: 'good', width: 480 }),
    posterSrc: getCloudinaryVideoThumbnail('luxury-perfume-noir-splash.mp4'),
    cardGradient: 'bg-gradient-to-br from-[#f0f0fd] via-[#f7f0fb] to-[#faedf4]',
    borderColor: 'border-[#6566ee]/30',
    shadowClass: 'shadow-[0_30px_70px_-15px_rgba(101,102,238,0.2)]',
    checkColor: '#6566ee',
    phoneAlignment: 'right',
    stickyTopClass: 'sticky top-32 sm:top-36 z-[28]',
  },
];
