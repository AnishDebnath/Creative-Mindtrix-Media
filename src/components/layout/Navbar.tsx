import React from 'react';
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

  return (
    <header className="w-full pt-6 pb-4 px-4 sm:px-8 max-w-6xl mx-auto flex items-center justify-between text-neutral-900 text-sm">
      {/* Navigation Links: Home, Images, Reels */}
      <nav className="flex items-center gap-6 sm:gap-10 md:gap-12 font-medium text-xs sm:text-[14px] text-neutral-800">
        <button
          onClick={() => handleNavClick('home', 'hero')}
          className={`transition-all cursor-pointer font-semibold ${
            currentPage === 'home'
              ? 'text-[#6566ee] font-extrabold border-b-2 border-[#6566ee] pb-0.5'
              : 'hover:text-[#6566ee] text-neutral-700'
          }`}
        >
          Home
        </button>

        <button
          onClick={() => handleNavClick('images')}
          className={`transition-all cursor-pointer font-semibold ${
            currentPage === 'images'
              ? 'text-[#6566ee] font-extrabold border-b-2 border-[#6566ee] pb-0.5'
              : 'hover:text-[#6566ee] text-neutral-700'
          }`}
        >
          Images
        </button>

        <button
          onClick={() => handleNavClick('reels')}
          className={`transition-all cursor-pointer font-semibold ${
            currentPage === 'reels'
              ? 'text-[#6566ee] font-extrabold border-b-2 border-[#6566ee] pb-0.5'
              : 'hover:text-[#6566ee] text-neutral-700'
          }`}
        >
          Reels
        </button>
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
