import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/home';
import { ImagesPage } from '@/pages/images';
import { ReelsPage } from '@/pages/videos';
import { scrollToId } from '@/utils/scroll';

const noop = () => {};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'images' | 'reels'>('home');

  const navigateTo = (page: 'home' | 'images' | 'reels') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen to browser hash or state if needed
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('images')) {
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
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onOpenDownload={noop}
        onOpenLegal={noop}
        onNavigateToImages={() => navigateTo('images')}
        onNavigateToReels={() => navigateTo('reels')}
      />
    </div>
  );
}
