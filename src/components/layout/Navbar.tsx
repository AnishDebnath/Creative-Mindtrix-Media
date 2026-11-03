import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import mindtrixLogo from '@/assets/logo.png';

interface NavbarProps {
  currentPage?: 'home' | 'images' | 'reels' | 'contact';
  onNavigate?: (page: 'home' | 'images' | 'reels' | 'contact') => void;
  onOpenLogin?: () => void;
  onOpenVideoChat?: () => void;
  onScrollTo?: (id: string) => void;
}

// ponytail: Nav menu items matching user specifications
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
    <header className="w-full pt-4 md:pt-6 pb-3 md:pb-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-screen-xl mx-auto flex items-center justify-between gap-3 text-neutral-900 text-sm">
      {/* Left: Navigation Pills with rich hover feedback and animated active pill */}
      <nav className="inline-flex items-center p-1 bg-white/70 backdrop-blur-md rounded-full border border-[#e8d5df] shadow-[0_2px_12px_-3px_rgba(220,198,213,0.35)] overflow-x-auto max-w-full scrollbar-none">
        {NAV_ITEMS.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.page, item.anchor, item.id)}
              className={`relative px-3 sm:px-3.5 md:px-4 lg:px-5 py-1.5 md:py-2 rounded-full text-xs sm:text-[13px] md:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
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
        onClick={() => handleNavClick('home', 'hero', 'home')}
        className="cursor-pointer transition-transform hover:scale-105 shrink-0"
        title="Mindtrix Media"
      >
        <img
          src={mindtrixLogo}
          alt="Mindtrix Media"
          className="h-8 sm:h-10 md:h-12 w-auto object-contain shrink-0"
        />
      </button>
    </header>
  );
};
