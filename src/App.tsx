import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/home';
import { ImagesPage } from '@/pages/images/ImagesPage';
import { ReelsPage } from '@/pages/videos/ReelsPage';
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
    <div className="min-h-screen bg-landing-gradient relative overflow-x-hidden text-neutral-900 selection:bg-indigo-100 flex flex-col justify-between">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenLogin={noop}
        onOpenVideoChat={() => navigateTo('reels')}
        onScrollTo={scrollToId}
      />

      {/* Dynamic Page Routing */}
      {currentPage === 'home' && (
        <HomePage
          onNavigateToImages={() => navigateTo('images')}
          onNavigateToReels={() => navigateTo('reels')}
        />
      )}

      {currentPage === 'images' && (
        <ImagesPage
          onBackToHome={() => navigateTo('home')}
          onNavigateToReels={() => navigateTo('reels')}
        />
      )}

      {currentPage === 'reels' && (
        <ReelsPage
          onBackToHome={() => navigateTo('home')}
          onNavigateToImages={() => navigateTo('images')}
        />
      )}

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
