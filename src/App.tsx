import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Cta } from '@/components/sections/Cta';
import { HomePage } from '@/pages/home';
import { ImagesPage } from '@/pages/images';
import { ReelsPage } from '@/pages/videos';
import { ContactPage } from '@/pages/contact';
import { TermsAndConditionsPage } from '@/pages/terms-and-conditions';
import { PrivacyPolicyPage } from '@/pages/privacy-policy';
import { scrollToId } from '@/utils/scroll';
import { updatePageSEO } from '@/utils/seo';

type AppPage = 'home' | 'images' | 'reels' | 'contact' | 'terms' | 'privacy';

// Helper to parse current URL route (handles clean paths, fallbacks, and legacy hashes)
function parseRoute(): {
  page: AppPage;
  sectionId?: string;
  cleanPath: string;
} {
  const rawPath = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const rawHash = window.location.hash.toLowerCase().replace(/^#\/?/, '');

  if (
    rawPath === '/terms-and-conditions' ||
    rawPath === '/terms-conditions' ||
    rawPath === '/terms-and-condition' ||
    rawPath === '/terms' ||
    rawHash === 'terms-and-conditions' ||
    rawHash === 'terms-conditions' ||
    rawHash === 'terms'
  ) {
    return { page: 'terms', cleanPath: '/terms-and-conditions' };
  }
  if (
    rawPath === '/privacy-policy' ||
    rawPath === '/privacy' ||
    rawHash === 'privacy-policy' ||
    rawHash === 'privacy'
  ) {
    return { page: 'privacy', cleanPath: '/privacy-policy' };
  }
  if (rawPath === '/contact' || rawHash === 'contact') {
    return { page: 'contact', cleanPath: '/contact' };
  }
  if (
    rawPath === '/images' ||
    rawPath.startsWith('/images/') ||
    rawHash === 'images' ||
    rawHash.startsWith('images/')
  ) {
    const sub = rawPath.startsWith('/images/')
      ? rawPath.slice(8)
      : rawHash.startsWith('images/')
      ? rawHash.slice(7)
      : '';
    const cleanPath = sub ? `/images/${sub}` : '/images';
    return { page: 'images', cleanPath };
  }
  if (
    rawPath === '/videos' ||
    rawPath.startsWith('/videos/') ||
    rawPath === '/reels' ||
    rawPath.startsWith('/reels/') ||
    rawHash === 'videos' ||
    rawHash.startsWith('videos/') ||
    rawHash === 'reels' ||
    rawHash.startsWith('reels/')
  ) {
    const sub = rawPath.startsWith('/videos/')
      ? rawPath.slice(8)
      : rawPath.startsWith('/reels/')
      ? rawPath.slice(7)
      : rawHash.startsWith('videos/')
      ? rawHash.slice(7)
      : rawHash.startsWith('reels/')
      ? rawHash.slice(6)
      : '';
    const cleanPath = sub ? `/videos/${sub}` : '/videos';
    return { page: 'reels', cleanPath };
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
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [currentPath, setCurrentPath] = useState<string>('/');

  const navigateTo = useCallback((
    page: AppPage,
    sectionId?: string,
    targetPath?: string
  ) => {
    let resolvedPath = targetPath;
    if (!resolvedPath) {
      if (page === 'images') resolvedPath = '/images';
      else if (page === 'reels') resolvedPath = '/videos';
      else if (page === 'contact') resolvedPath = '/contact';
      else if (page === 'terms') resolvedPath = '/terms-and-conditions';
      else if (page === 'privacy') resolvedPath = '/privacy-policy';
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
              <ImagesPage currentPath={currentPath} />
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
                currentPath={currentPath}
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
              <ContactPage />
            </motion.div>
          )}

          {currentPage === 'terms' && (
            <motion.div
              key="terms"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
            >
              <TermsAndConditionsPage />
            </motion.div>
          )}

          {currentPage === 'privacy' && (
            <motion.div
              key="privacy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
            >
              <PrivacyPolicyPage />
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
        onNavigateToHome={() => navigateTo('home', undefined, '/')}
        onNavigateToImages={() => navigateTo('images', undefined, '/images')}
        onNavigateToReels={() => navigateTo('reels', undefined, '/videos')}
        onNavigateToContact={() => navigateTo('contact', undefined, '/contact')}
        onNavigateToServices={() => navigateTo('home', 'services', '/services')}
        onNavigateToTerms={() => navigateTo('terms', undefined, '/terms-and-conditions')}
        onNavigateToPrivacy={() => navigateTo('privacy', undefined, '/privacy-policy')}
      />
    </div>
  );
}
