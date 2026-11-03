import { scrollToId } from '@/utils/scroll';
import { Hero } from './Hero';
import { SocialPlatforms } from './SocialPlatforms';
import { AudienceResults } from './AudienceResults';
import { Services } from './Services';
import { WhyChooseUs } from './WhyChooseUs';
import { CreativeStudio } from './CreativeStudio';
import { ProductReels } from './ProductReels';
import { Testimonials } from './Testimonials';
import { Pricing } from './Pricing';
import { Faq } from './Faq';

const noop = () => { };

interface HomePageProps {
  onNavigateToImages: () => void;
  onNavigateToReels: () => void;
  onNavigateToContact?: () => void;
}

export function HomePage({ onNavigateToImages, onNavigateToReels, onNavigateToContact }: HomePageProps) {
  return (
    <div className="w-full">
      {/* Hero (including top Marquee, Centerpiece, and Brands Showcase) */}
      <Hero
        onSelectProfile={noop}
        onSendReaction={noop}
        onOpenVideoChat={onNavigateToReels}
        onNavigateToImages={onNavigateToImages}
        onNavigateToReels={onNavigateToReels}
      />

      {/* Social Platforms Showcase */}
      <SocialPlatforms />

      {/* Audience Results Showcase */}
      <AudienceResults />

      {/* Services */}
      <Services
        onNavigateToImages={onNavigateToImages}
        onNavigateToReels={onNavigateToReels}
        onNavigateToContact={onNavigateToContact}
      />

      {/* Why Choose Us */}
      <WhyChooseUs
        onGetStarted={() => scrollToId('cta')}
        onViewCaseStudies={onNavigateToReels}
      />

      {/* Creative Studio */}
      <CreativeStudio
        onSelectProfile={noop}
        onSendReaction={noop}
        onDiscoverMore={onNavigateToImages}
        onNavigateToImages={onNavigateToImages}
      />

      {/* Product Reels */}
      <ProductReels
        onOpenVideoChat={onNavigateToReels}
        onMeetCommunity={() => scrollToId('testimonials')}
        onNavigateToReels={onNavigateToReels}
      />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing (Per Project & Monthly Subscription) */}
      <Pricing onSelectPlan={() => scrollToId('cta')} />

      {/* FAQ */}
      <Faq
        onBookCall={onNavigateToContact || (() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
        onContactUs={onNavigateToContact || (() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
      />
    </div>
  );
}
