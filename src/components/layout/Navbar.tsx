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
      {/* Navigation Links with animated active underline indicator */}
      <nav className="flex items-center gap-6 sm:gap-10 md:gap-12 font-medium text-xs sm:text-[14px]">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id, item.anchor)}
              className={`relative py-1 transition-colors cursor-pointer font-semibold ${
                isActive ? 'text-[#6566ee] font-extrabold' : 'text-neutral-700 hover:text-[#6566ee]'
              }`}
            >
              <span>{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="navbarActiveIndicator"
                  className="absolute bottom-0 inset-x-0 h-[2px] bg-[#6566ee] rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
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
