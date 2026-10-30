import { scrollToId } from '@/utils/scroll';
import { HeroSection } from './Hero';
import { SocialPlatformsSection } from './SocialPlatforms';
import { AudienceResultsSection } from './AudienceResults';
import { CreativeServicesSection } from './CreativeServices';
import { WhyChooseUsSection } from './WhyChooseUs';
import { MeetTheWorldSection } from './MeetTheWorld';
import { CommunitySection } from './Community';
import { TestimonialsSection } from './Testimonials';
import { PricingSection } from './Pricing';
import { FaqSection } from './Faq';
import { BottomShowcaseSection } from './BottomShowcase';
import { CtaSection } from './Cta';

const noop = () => { };

interface HomePageProps {
  onNavigateToImages: () => void;
  onNavigateToReels: () => void;
}

export function HomePage({ onNavigateToImages, onNavigateToReels }: HomePageProps) {
  return (
    <div className="w-full">
      {/* Hero Section (including top Marquee, Centerpiece, and Brands Showcase) */}
      <HeroSection
        onSelectProfile={noop}
        onSendReaction={noop}
        onOpenVideoChat={onNavigateToReels}
        onNavigateToImages={onNavigateToImages}
        onNavigateToReels={onNavigateToReels}
      />

      {/* Social Platforms Showcase Section */}
      <SocialPlatformsSection />

      {/* Audience Results Showcase Section */}
      <AudienceResultsSection />

      {/* Creative Services Section */}
      <CreativeServicesSection
        onNavigateToImages={onNavigateToImages}
        onNavigateToReels={onNavigateToReels}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        onGetStarted={() => scrollToId('cta')}
        onViewCaseStudies={onNavigateToReels}
      />

      {/* Meet The World Section */}
      <MeetTheWorldSection
        onSelectProfile={noop}
        onSendReaction={noop}
        onDiscoverMore={onNavigateToImages}
        onNavigateToImages={onNavigateToImages}
      />

      {/* The Mindtrix AI Reel Stage */}
      <CommunitySection
        onOpenVideoChat={onNavigateToReels}
        onMeetCommunity={() => scrollToId('testimonials')}
        onNavigateToReels={onNavigateToReels}
      />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Pricing Section (Per Project & Monthly Subscription) */}
      <PricingSection onSelectPlan={() => scrollToId('cta')} />

      {/* FAQ Section */}
      <FaqSection
        onBookCall={() => scrollToId('cta')}
        onContactUs={() => scrollToId('cta')}
      />

      {/* Bottom Profile Floating Showcase */}
      <BottomShowcaseSection
        onSelectProfile={noop}
        onSendReaction={noop}
        onNavigateToImages={onNavigateToImages}
      />

      {/* CTA Section */}
      <CtaSection
        onJoinWaitlist={noop}
        onSubscribe={noop}
        onScrollToAbout={() => scrollToId('stand-for')}
        onNavigateToImages={onNavigateToImages}
      />
    </div>
  );
}
