import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Cta } from '@/components/sections/Cta';
import { HomePage } from '@/pages/home';
import { ImagesPage } from '@/pages/images';
import { ReelsPage } from '@/pages/videos';
import { ContactPage } from '@/pages/contact';
import { scrollToId } from '@/utils/scroll';
import { updatePageSEO } from '@/utils/seo';

const noop = () => { };

// Helper to parse current URL route (handles both clean paths like /services and legacy/fallback hashes like #services)
function parseRoute(): {
  page: 'home' | 'images' | 'reels' | 'contact';
  sectionId?: string;
  cleanPath: string;
} {
  const rawPath = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const rawHash = window.location.hash.toLowerCase().replace(/^#\/?/, '');

  if (rawPath === '/contact' || rawHash === 'contact') {
    return { page: 'contact', cleanPath: '/contact' };
  }
  if (rawPath === '/images' || rawHash === 'images') {
    return { page: 'images', cleanPath: '/images' };
  }
  if (rawPath === '/videos' || rawPath === '/reels' || rawHash === 'videos' || rawHash === 'reels') {
    return { page: 'reels', cleanPath: '/videos' };
  }
  if (rawPath === '/services' || rawHash === 'services') {
    return { page: 'home', sectionId: 'services', cleanPath: '/services' };
  }
  if (rawPath === '/price' || rawPath === '/pricing' || rawHash === 'price' || rawHash === 'pricing') {
    return { page: 'home', sectionId: 'pricing', cleanPath: '/price' };
  }
  return { page: 'home', cleanPath: '/' };
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'images' | 'reels' | 'contact'>('home');
  const [currentPath, setCurrentPath] = useState<string>('/');

  const navigateTo = useCallback((
    page: 'home' | 'images' | 'reels' | 'contact',
    sectionId?: string,
    targetPath?: string
  ) => {
    let resolvedPath = targetPath;
    if (!resolvedPath) {
      if (page === 'images') resolvedPath = '/images';
      else if (page === 'reels') resolvedPath = '/videos';
      else if (page === 'contact') resolvedPath = '/contact';
      else if (sectionId === 'services') resolvedPath = '/services';
      else if (sectionId === 'pricing' || sectionId === 'price') resolvedPath = '/price';
      else resolvedPath = '/';
    }

    // Push new history state with proper path
    if (window.location.pathname !== resolvedPath || window.location.hash) {
      window.history.pushState({ page, sectionId, path: resolvedPath }, '', resolvedPath);
    }

    setCurrentPage(page);
    setCurrentPath(resolvedPath);

    if (page === 'home' && sectionId) {
      scrollToId(sectionId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Sync URL on initial mount and when popstate (browser back/forward) or hashchange occurs
  useEffect(() => {
    const handleRoute = (initial = false) => {
      const { page, sectionId, cleanPath } = parseRoute();
      setCurrentPage(page);
      setCurrentPath(cleanPath);

      // Normalize URL in address bar if it was loaded with a hash or redirect
      if (window.location.pathname !== cleanPath || window.location.hash) {
        window.history.replaceState({ page, sectionId, path: cleanPath }, '', cleanPath);
      }

      if (sectionId) {
        scrollToId(sectionId);
      } else if (!initial) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleRoute(true);

    const onPop = () => handleRoute(false);
    window.addEventListener('popstate', onPop);
    window.addEventListener('hashchange', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('hashchange', onPop);
    };
  }, []);

  // Synchronize on-page SEO metadata (title, meta description, canonical, OG tags) with active route
  useEffect(() => {
    if (currentPage === 'home') {
      if (currentPath === '/services') {
        updatePageSEO('services');
      } else if (currentPath === '/price' || currentPath === '/pricing') {
        updatePageSEO('price');
      } else {
        updatePageSEO('home');
      }
    } else {
      updatePageSEO(currentPage);
    }
  }, [currentPage, currentPath]);

  return (
    <div className="min-h-screen bg-landing-gradient relative text-neutral-900 selection:bg-indigo-100 flex flex-col justify-between">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenLogin={noop}
        onOpenVideoChat={() => navigateTo('reels', undefined, '/videos')}
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
                onNavigateToImages={() => navigateTo('images', undefined, '/images')}
                onNavigateToReels={() => navigateTo('reels', undefined, '/videos')}
                onNavigateToContact={() => navigateTo('contact', undefined, '/contact')}
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
                onBackToHome={() => navigateTo('home', undefined, '/')}
                onNavigateToReels={() => navigateTo('reels', undefined, '/videos')}
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
                onBackToHome={() => navigateTo('home', undefined, '/')}
                onNavigateToImages={() => navigateTo('images', undefined, '/images')}
                onNavigateToContact={() => navigateTo('contact', undefined, '/contact')}
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
                onNavigateToImages={() => navigateTo('images', undefined, '/images')}
                onNavigateToReels={() => navigateTo('reels', undefined, '/videos')}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global CTA across all pages */}
      <Cta
        onExploreServices={() => navigateTo('home', 'services', '/services')}
        onContactUs={() => navigateTo('contact', undefined, '/contact')}
        onNavigateToReels={() => navigateTo('reels', undefined, '/videos')}
      />

      {/* Footer */}
      <Footer
        onOpenDownload={noop}
        onOpenLegal={noop}
        onNavigateToHome={() => navigateTo('home', undefined, '/')}
        onNavigateToImages={() => navigateTo('images', undefined, '/images')}
        onNavigateToReels={() => navigateTo('reels', undefined, '/videos')}
        onNavigateToContact={() => navigateTo('contact', undefined, '/contact')}
        onNavigateToServices={() => navigateTo('home', 'services', '/services')}
      />
    </div>
  );
}
