import React from 'react';
import { motion } from 'framer-motion';
import mindtrixLogo from '@/assets/logo.png';

interface NavbarProps {
  currentPage?: 'home' | 'images' | 'reels';
  onNavigate?: (page: 'home' | 'images' | 'reels') => void;
  onOpenLogin?: () => void;
  onOpenVideoChat?: () => void;
  onScrollTo?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigate,
  onScrollTo
}) => {
  const handleNavClick = (page: 'home' | 'images' | 'reels', anchorId?: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    if (page === 'home' && anchorId && onScrollTo) {
      setTimeout(() => onScrollTo(anchorId), 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems: Array<{ id: 'home' | 'images' | 'reels'; label: string; anchor?: string }> = [
    { id: 'home', label: 'Home', anchor: 'hero' },
    { id: 'images', label: 'Images' },
    { id: 'reels', label: 'Reels' },
  ];

  return (
    <header className="w-full pt-6 pb-4 px-4 sm:px-8 max-w-6xl mx-auto flex items-center justify-between text-neutral-900 text-sm">
      {/* Left: Navigation Pills matching website theme (frosted glass capsule with animated pill) */}
      <nav className="inline-flex items-center p-1 bg-white/70 backdrop-blur-md rounded-full border border-[#e8d5df] shadow-[0_2px_12px_-3px_rgba(220,198,213,0.35)]">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id, item.anchor)}
              className={`relative px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold tracking-wide transition-colors duration-200 cursor-pointer select-none whitespace-nowrap ${
                isActive
                  ? 'text-white font-bold'
                  : 'text-neutral-600 hover:text-neutral-900'
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
        onClick={() => handleNavClick('home')}
        className="cursor-pointer transition-transform hover:scale-105"
        title="Mindtrix Media"
      >
        <img
          src={mindtrixLogo}
          alt="Mindtrix Media"
          className="h-10 sm:h-12 w-auto object-contain shrink-0"
        />
      </button>
    </header>
  );
};
