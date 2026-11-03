import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import mindtrixLogo from '@/assets/logo.png';

interface NavbarProps {
  currentPage?: 'home' | 'images' | 'reels' | 'contact';
  onNavigate?: (page: 'home' | 'images' | 'reels' | 'contact') => void;
  onOpenLogin?: () => void;
  onOpenVideoChat?: () => void;
  onScrollTo?: (id: string) => void;
}

// ponytail: Lean navigation menu items matching website theme
const NAV_ITEMS = [
  { id: 'home', label: 'Home', page: 'home' as const, anchor: 'hero' },
  { id: 'images', label: 'Images', page: 'images' as const },
  { id: 'videos', label: 'Videos', page: 'reels' as const },
  { id: 'services', label: 'Services', page: 'home' as const, anchor: 'services' },
  { id: 'price', label: 'Price', page: 'home' as const, anchor: 'pricing' },
  { id: 'contact', label: 'Contact Us', page: 'contact' as const },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigate,
  onScrollTo
}) => {
  const [activeItem, setActiveItem] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Sync activeItem when page changes
  useEffect(() => {
    if (currentPage === 'images') {
      setActiveItem('images');
    } else if (currentPage === 'reels') {
      setActiveItem('videos');
    } else if (currentPage === 'contact') {
      setActiveItem('contact');
    } else if (currentPage === 'home') {
      if (!['services', 'price'].includes(activeItem)) {
        setActiveItem('home');
      }
    }
  }, [currentPage]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isMobileMenuOpen]);

  // When on home page, track which section is currently viewed on scroll
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const servicesEl = document.getElementById('services');
      const pricingEl = document.getElementById('pricing');

      const pricingTop = pricingEl ? pricingEl.offsetTop - 240 : Infinity;
      const servicesTop = servicesEl ? servicesEl.offsetTop - 240 : Infinity;

      if (scrollY >= pricingTop) {
        setActiveItem('price');
      } else if (scrollY >= servicesTop) {
        setActiveItem('services');
      } else {
        setActiveItem('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavClick = (
    page: 'home' | 'images' | 'reels' | 'contact',
    anchorId?: string,
    itemId?: string
  ) => {
    if (itemId) {
      setActiveItem(itemId);
    }
    if (page !== currentPage) {
      if (onNavigate) {
        onNavigate(page);
      }
      if (anchorId && onScrollTo) {
        setTimeout(() => onScrollTo(anchorId), 150);
      }
    } else if (anchorId && onScrollTo) {
      onScrollTo(anchorId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="relative z-40 w-full pt-4 sm:pt-5 md:pt-6 pb-2.5 sm:pb-3 md:pb-4 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-20 max-w-screen-xl mx-auto flex items-center justify-between gap-3 text-neutral-900 text-sm">
      {/* Mobile: Square Format Hamburger Toggle Button */}
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="md:hidden w-10 h-10 rounded-xl bg-white/85 backdrop-blur-md border border-[#e8d5df] shadow-[0_2px_10px_-2px_rgba(61,32,53,0.15)] flex items-center justify-center text-[#3d2035] hover:bg-white active:scale-95 transition-all cursor-pointer"
        aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5 text-[#3d2035]" />
        ) : (
          <Menu className="w-5 h-5 text-[#3d2035]" />
        )}
      </button>

      {/* Desktop: Navigation Pills with rich hover feedback and animated active pill */}
      <nav className="hidden md:inline-flex items-center p-1 bg-white/70 backdrop-blur-md rounded-full border border-[#e8d5df] shadow-[0_2px_12px_-3px_rgba(220,198,213,0.35)] overflow-x-auto max-w-full scrollbar-none">
        {NAV_ITEMS.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.page, item.anchor, item.id)}
              className={`relative px-3.5 md:px-4 lg:px-5 py-1.5 md:py-2 rounded-full text-[13px] md:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                isActive
                  ? 'text-white font-bold'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-[#3d2035]/[0.08] hover:shadow-[0_2px_8px_-2px_rgba(61,32,53,0.12)] hover:scale-[1.03] active:scale-[0.97]'
              }`}
            >
              {/* Framer-Motion Animated Active Pill Slider in signature Plum-Noir */}
              {isActive && (
                <motion.div
                  layoutId="navbarActiveIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] rounded-full shadow-sm shadow-[#3d2035]/25 border border-white/10"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Right: Mindtrix Media Logo (Click to go Home) */}
      <button
        onClick={() => {
          handleNavClick('home', 'hero', 'home');
          setIsMobileMenuOpen(false);
        }}
        className="cursor-pointer transition-transform hover:scale-105 shrink-0"
        title="Mindtrix Media"
      >
        <img
          src={mindtrixLogo}
          alt="Mindtrix Media"
          className="h-7 sm:h-9 md:h-12 w-auto object-contain shrink-0"
        />
      </button>

      {/* Mobile: Hamburger Dropdown Menu matching website frosted theme */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/25 backdrop-blur-xs z-40 md:hidden"
            />

            {/* Mobile Dropdown Panel: Clean frosted menu matching desktop navbar aesthetic */}
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute top-[calc(100%+8px)] inset-x-6 sm:inset-x-8 p-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-[#e8d5df] shadow-[0_12px_32px_-8px_rgba(61,32,53,0.2)] z-50 md:hidden flex flex-col gap-1"
            >
              {/* Header with Title and Cross (X) Close Option */}
              <div className="flex items-center justify-between px-3 py-1.5 mb-1 border-b border-[#f1e4ec]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3d2035]/80">Menu</span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-7 h-7 rounded-lg bg-[#3d2035]/[0.06] hover:bg-[#3d2035]/[0.12] flex items-center justify-center text-[#3d2035] transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {NAV_ITEMS.map((item) => {
                const isActive = activeItem === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleNavClick(item.page, item.anchor, item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-left text-sm font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-between active:scale-[0.98] ${
                      isActive
                        ? 'bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] text-white shadow-sm shadow-[#3d2035]/25 font-bold'
                        : 'text-neutral-700 hover:text-neutral-950 hover:bg-[#3d2035]/[0.06]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#eda970] shadow-[0_0_6px_#eda970]" />
                    )}
                  </button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
