import { scrollToId } from '@/utils/scroll';
import { Hero } from './Hero';
import { SocialPlatforms } from './SocialPlatforms';
import { AudienceResults } from './AudienceResults';
import { Services } from './Services';
import { Process } from './Process';
import { ProductImages } from './ProductImages';
import { ProductVideos } from './ProductVideos';
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

      {/* Process (Client Workflow Bento) */}
      <Process
        onGetStarted={() => scrollToId('cta')}
        onViewCaseStudies={onNavigateToReels}
      />

      {/* Product Images Showcase */}
      <ProductImages
        onNavigateToImages={onNavigateToImages}
      />

      {/* Product Videos Showcase */}
      <ProductVideos
        onNavigateToVideos={onNavigateToReels}
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
