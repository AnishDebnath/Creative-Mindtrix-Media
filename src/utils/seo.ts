export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

export const SEO_CONFIG: Record<string, PageSEO> = {
  home: {
    title: 'Mindtrix Media — AI Product Advertising, Viral Video Reels & Commercial Content Creation',
    description: 'Mindtrix Media is an AI-powered creative production studio helping e-commerce, D2C brands, and modern businesses create high-converting AI product advertisements, viral social reels, and studio-grade commercial visuals at scale.',
    canonical: 'https://creative.mindtrixmedia.com/',
  },
  services: {
    title: 'Creative AI Services — Mindtrix Media',
    description: 'Explore our full suite of AI creative production services: high-converting product video ads, viral 9:16 reels, e-commerce catalog photography, and commercial brand visuals.',
    canonical: 'https://creative.mindtrixmedia.com/services',
  },
  images: {
    title: 'AI Product Photography & Studio Visuals — Mindtrix Media',
    description: 'Browse studio-grade AI product imagery, lifestyle visuals, marble flat-lays, and high-resolution commercial photography tailored for Shopify, Amazon, and marketing campaigns.',
    canonical: 'https://creative.mindtrixmedia.com/images',
  },
  reels: {
    title: 'AI Video Ads & Viral Commercial Reels — Mindtrix Media',
    description: 'Discover short, high-impact AI product video reels and social advertisements engineered to capture attention, stop the scroll, and turn casual viewers into customers.',
    canonical: 'https://creative.mindtrixmedia.com/videos',
  },
  price: {
    title: 'Affordable Pricing Plans for AI Brand Growth — Mindtrix Media',
    description: 'Transparent pricing for AI product commercials and video reels. Choose flexible single project delivery or scalable monthly subscription plans.',
    canonical: 'https://creative.mindtrixmedia.com/price',
  },
  contact: {
    title: "Let's Build Something Great — Contact Mindtrix Media",
    description: 'Partner with Mindtrix Media for AI product advertising, commercial video reels, and studio photography. Reach out to discuss deliverables, scope, and timeline.',
    canonical: 'https://creative.mindtrixmedia.com/contact',
  },
};

export function updatePageSEO(key: string): void {
  const config = SEO_CONFIG[key] || SEO_CONFIG.home;

  if (typeof document !== 'undefined') {
    document.title = config.title;

    // Update Meta Description
    let descEl = document.querySelector('meta[name="description"]');
    if (!descEl) {
      descEl = document.createElement('meta');
      descEl.setAttribute('name', 'description');
      document.head.appendChild(descEl);
    }
    descEl.setAttribute('content', config.description);

    // Update Canonical Link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', config.canonical);

    // Update Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', config.ogTitle || config.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', config.ogDescription || config.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', config.canonical);

    // Update Twitter
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', config.ogTitle || config.title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', config.ogDescription || config.description);
  }
}

