import React from 'react';
import { Instagram, Facebook, Globe, Sparkles } from 'lucide-react';
import mindtrixLogo from '@/assets/logo.png';

interface FooterProps {
  onOpenDownload?: (platform: 'ios' | 'android' | 'all') => void;
  onOpenLegal?: (title: string) => void;
  onNavigateToImages?: () => void;
  onNavigateToReels?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLegal,
  onNavigateToImages,
  onNavigateToReels
}) => {
  return (
    <footer className="w-full pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* Column 1 (Left): MINDTRIX Logo + Software & AI Creative Note */}
        <div className="md:col-span-4 flex flex-col justify-between min-h-[170px]">
          <div>
            <img
              src={mindtrixLogo}
              alt="Mindtrix Media"
              className="h-10 sm:h-12 w-auto object-contain shrink-0"
            />
            <p className="text-xs text-neutral-600 mt-3 max-w-xs leading-relaxed">
              Software development & AI product advertising systems helping businesses grow faster.
            </p>
          </div>
          <div className="text-xs sm:text-[13px] text-neutral-800 font-normal flex items-center gap-1.5 mt-6 md:mt-0">
            <span>ⓒ 2026 Mindtrix Media. All rights reserved.</span>
          </div>
        </div>

        {/* Column 2: AI SERVICES */}
        <div className="md:col-span-3">
          <h4 className="font-display text-lg sm:text-xl font-black uppercase tracking-normal text-neutral-900 mb-3.5">
            AI SERVICES
          </h4>
          <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-800 font-normal">
            <li>
              <button
                onClick={onNavigateToImages}
                className="hover:text-black transition-colors cursor-pointer text-left"
              >
                AI Product Advertising
              </button>
            </li>
            <li>
              <button
                onClick={onNavigateToReels}
                className="hover:text-black transition-colors cursor-pointer text-left"
              >
                AI Product Video Creation
              </button>
            </li>
            <li>
              <button
                onClick={onNavigateToReels}
                className="hover:text-[#6566ee] transition-colors cursor-pointer text-left"
              >
                AI Commercial Production
              </button>
            </li>
            <li>
              <button
                onClick={onNavigateToImages}
                className="hover:text-[#6566ee] transition-colors cursor-pointer text-left"
              >
                AI Creative Advertising
              </button>
            </li>
            <li>
              <button
                onClick={onNavigateToImages}
                className="hover:text-[#6566ee] transition-colors cursor-pointer text-left"
              >
                AI Product Content Creation
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: SOCIAL MEDIA */}
        <div className="md:col-span-2">
          <h4 className="font-display text-lg sm:text-xl font-black uppercase tracking-normal text-neutral-900 mb-3.5">
            SOCIAL MEDIA
          </h4>
          <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-800 font-normal">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#6566ee] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-neutral-800" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#6566ee] transition-colors"
              >
                <span className="font-bold text-xs text-neutral-800">𝕏</span> X.com
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#6566ee] transition-colors"
              >
                <span className="font-bold text-xs text-neutral-800">♪</span> TikTok
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#6566ee] transition-colors"
              >
                <Facebook className="w-3.5 h-3.5 text-neutral-800" /> Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: CREATIVE DOMAIN */}
        <div className="md:col-span-3">
          <h4 className="font-display text-lg sm:text-xl font-black uppercase tracking-normal text-neutral-900 mb-3.5">
            CREATIVE PORTAL
          </h4>
          <div className="flex flex-col gap-2 text-xs sm:text-[13px] text-neutral-800 font-normal">
            <div className="flex items-center gap-2 text-neutral-900 font-medium">
              <Globe className="w-4 h-4 text-[#6566ee]" />
              <span>creative.mindtrixmedia.com</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-600">
              <Sparkles className="w-4 h-4 text-[#eda970]" />
              <span>Systems & AI Advertising Hub</span>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onOpenLegal?.('Privacy & Terms')}
                className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Privacy Policy & Terms
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
