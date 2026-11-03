import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CtaSection } from '@/pages/home/Cta';
import { HomePage } from '@/pages/home';
import { ImagesPage } from '@/pages/images';
import { ReelsPage } from '@/pages/videos';
import { ContactPage } from '@/pages/contact';
import { scrollToId } from '@/utils/scroll';

const noop = () => { };

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'images' | 'reels' | 'contact'>('home');

  const navigateTo = (page: 'home' | 'images' | 'reels' | 'contact') => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen to browser hash or state if needed
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('contact')) {
        setCurrentPage('contact');
      } else if (hash.includes('images')) {
        setCurrentPage('images');
      } else if (hash.includes('reels') || hash.includes('videos')) {
        setCurrentPage('reels');
      } else {
        setCurrentPage('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-landing-gradient relative text-neutral-900 selection:bg-indigo-100 flex flex-col justify-between">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenLogin={noop}
        onOpenVideoChat={() => navigateTo('reels')}
        onScrollTo={scrollToId}
      />

      {/* Dynamic Page Routing with Smooth Page Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
            >
              <HomePage
                onNavigateToImages={() => navigateTo('images')}
                onNavigateToReels={() => navigateTo('reels')}
                onNavigateToContact={() => navigateTo('contact')}
              />
            </motion.div>
          )}

          {currentPage === 'images' && (
            <motion.div
              key="images"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
            >
              <ImagesPage
                onBackToHome={() => navigateTo('home')}
                onNavigateToReels={() => navigateTo('reels')}
              />
            </motion.div>
          )}

          {currentPage === 'reels' && (
            <motion.div
              key="reels"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
            >
              <ReelsPage
                onBackToHome={() => navigateTo('home')}
                onNavigateToImages={() => navigateTo('images')}
              />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
            >
              <ContactPage
                onNavigateToImages={() => navigateTo('images')}
                onNavigateToReels={() => navigateTo('reels')}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global CTA Section across all pages */}
      <CtaSection
        onExploreServices={() => {
          if (currentPage !== 'home') {
            navigateTo('home');
            setTimeout(() => scrollToId('services'), 150);
          } else {
            scrollToId('services');
          }
        }}
        onContactUs={() => navigateTo('contact')}
        onNavigateToReels={() => navigateTo('reels')}
      />

      {/* Footer */}
      <Footer
        onOpenDownload={noop}
        onOpenLegal={noop}
        onNavigateToImages={() => navigateTo('images')}
        onNavigateToReels={() => navigateTo('reels')}
        onNavigateToContact={() => navigateTo('contact')}
      />
    </div>
  );
}
