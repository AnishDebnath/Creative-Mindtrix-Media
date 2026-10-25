import React, { useState } from 'react';
import mindtrixLogo from '@/assets/logo.png';
import {
  Mail,
  Phone,
  MapPin,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FooterProps {
  onOpenDownload?: (platform: 'ios' | 'android' | 'all') => void;
  onOpenLegal?: (title: string) => void;
  onNavigateToImages?: () => void;
  onNavigateToReels?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToImages,
  onNavigateToReels
}) => {
  const [activeLegal, setActiveLegal] = useState<'privacy' | 'terms' | null>(null);

  // Lock background scroll when legal modal is open
  React.useEffect(() => {
    if (activeLegal) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [activeLegal]);

  return (
    <>
      <footer className="w-full bg-gradient-to-b from-transparent via-[#faf4f8]/30 to-[#f7edf5]/60 pt-14 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#e8d5df]/70 items-start">
            
            {/* Column 1: Brand & Identity (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <img
                src={mindtrixLogo}
                alt="Mindtrix Media"
                className="h-9 sm:h-10 w-auto object-contain cursor-pointer self-start"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
              <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
                Mindtrix Media is an AI creative production studio helping brands produce high-converting product advertisements, commercial video reels, and studio-grade visuals at scale.
              </p>

              {/* Social Media Channels under About */}
              <div className="pt-1">
                <span className="text-[11px] font-black tracking-wider uppercase text-neutral-400 font-display block mb-2.5">
                  Follow Our Work
                </span>
                <div className="flex items-center gap-2.5">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/people/Mindtrix-Media/61579576556432/?rdid=dQqTQc6SOeyMFPh7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BqXRrzU6g%2F"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#1877f2]/10 border border-[#e8d5df] hover:border-[#1877f2]/50 shadow-xs flex items-center justify-center hover:scale-110 transition-all text-[#1877f2]"
                    title="Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* Instagram with signature colorful gradient */}
                  <a
                    href="https://www.instagram.com/mindtrixmedia"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#e1306c]/10 border border-[#e8d5df] hover:border-[#e1306c]/50 shadow-xs flex items-center justify-center hover:scale-110 transition-all text-[#e1306c]"
                    title="Instagram"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f09433" />
                          <stop offset="25%" stopColor="#e6683c" />
                          <stop offset="50%" stopColor="#dc2743" />
                          <stop offset="75%" stopColor="#cc2366" />
                          <stop offset="100%" stopColor="#bc1888" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@Mindtrixmediaindia"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#ff0000]/10 border border-[#e8d5df] hover:border-[#ff0000]/50 shadow-xs flex items-center justify-center hover:scale-110 transition-all text-[#ff0000]"
                    title="YouTube"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://x.com/Mindtrixmediain"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white hover:bg-black/10 border border-[#e8d5df] hover:border-black/50 shadow-xs flex items-center justify-center hover:scale-110 transition-all text-neutral-900"
                    title="X (Twitter)"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/mindtrix-media"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#0077b5]/10 border border-[#e8d5df] hover:border-[#0077b5]/50 shadow-xs flex items-center justify-center hover:scale-110 transition-all text-[#0077b5]"
                    title="LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links (lg:col-span-3) */}
            <div className="lg:col-span-3 flex flex-col gap-3.5">
              <span className="text-[11px] font-black tracking-wider uppercase text-neutral-400 font-display">
                Navigation
              </span>
              <ul className="space-y-2.5 text-sm font-medium text-neutral-700">
                <li>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="hover:text-black hover:translate-x-1 transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Home</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={onNavigateToImages}
                    className="hover:text-black hover:translate-x-1 transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>AI Product Images</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={onNavigateToReels}
                    className="hover:text-black hover:translate-x-1 transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Video Reels</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const el = document.getElementById('services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-black hover:translate-x-1 transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Creative Services</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const el = document.getElementById('stand-for');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-black hover:translate-x-1 transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>About Mindtrix</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const el = document.getElementById('testimonials');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-black hover:translate-x-1 transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Client Reviews</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Details (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="text-[11px] font-black tracking-wider uppercase text-neutral-400 font-display">
                Contact & Connect
              </span>

              <div className="space-y-3 text-sm text-neutral-800">
                {/* Email */}
                <a
                  href="mailto:mindtrixmediaindia@gmail.com"
                  className="flex items-center gap-3 text-neutral-800 hover:text-[#6566ee] transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-white border border-[#e8d5df] flex items-center justify-center shrink-0 shadow-xs group-hover:border-[#6566ee]/50 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#6566ee] transition-colors" />
                  </span>
                  <span className="font-semibold text-neutral-900 group-hover:text-[#6566ee] transition-colors break-all">
                    mindtrixmediaindia@gmail.com
                  </span>
                </a>

                {/* Phone Numbers */}
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white border border-[#e8d5df] flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-3.5 h-3.5 text-neutral-600" />
                  </span>
                  <div className="flex flex-wrap items-center gap-x-2 text-sm font-semibold text-neutral-900">
                    <a
                      href="tel:+918910092451"
                      className="hover:text-[#6566ee] transition-colors"
                    >
                      +91 89100 92451
                    </a>
                    <span className="text-neutral-400 font-normal">/</span>
                    <a
                      href="tel:+919073604457"
                      className="hover:text-[#6566ee] transition-colors"
                    >
                      +91 90736 04457
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 text-neutral-800">
                  <span className="w-8 h-8 rounded-full bg-white border border-[#e8d5df] flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-neutral-600" />
                  </span>
                  <span className="text-sm font-semibold text-neutral-900">
                    Kolkata, India
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Sub-Footer Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-medium">
            <p>
              © {new Date().getFullYear()} <span className="font-semibold text-neutral-800">Mindtrix Media</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveLegal('terms')}
                className="hover:text-neutral-900 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <span>·</span>
              <button
                onClick={() => setActiveLegal('privacy')}
                className="hover:text-neutral-900 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>

        </div>
      </footer>



      {/* Clean Legal Modal matching blur backdrop theme */}
      <AnimatePresence>
        {activeLegal && (
          <motion.div
            key="legal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveLegal(null)}
          >
            <motion.div
              key="legal-modal-card"
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: 'spring', damping: 28, stiffness: 350 }}
              className="relative max-w-lg w-full max-h-[82vh] overflow-hidden rounded-[28px] sm:rounded-[32px] bg-white shadow-2xl border border-[#e8d5df] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 sm:px-7 pt-6 pb-4 border-b border-neutral-100">
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-neutral-900">
                  {activeLegal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                </h3>
                <button
                  onClick={() => setActiveLegal(null)}
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-7 overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                {activeLegal === 'privacy' ? (
                  <>
                    <p>
                      <strong>1. Overview:</strong> Mindtrix Media is committed to protecting the privacy of our clients and site visitors. This Privacy Policy details how we handle information collected through our website, AI creative services, and automated advertising solutions.
                    </p>
                    <p>
                      <strong>2. Information Collection:</strong> When you submit an inquiry, waitlist request, or collaborate with us on advertising campaigns, we collect contact information such as name, email address, phone number, and brand specifications solely for business communication and campaign execution.
                    </p>
                    <p>
                      <strong>3. Media & Assets:</strong> Product photos, videos, and brand guidelines uploaded by clients are used strictly to generate requested AI advertising creatives and are never sold or shared with third parties.
                    </p>
                    <p>
                      <strong>4. Security:</strong> We deploy modern encryption and standard data protection practices to safeguard all client communication and campaign data.
                    </p>
                    <p className="text-neutral-400 text-xs pt-2">Last updated: 2026. For questions, reach out at privacy@mindtrixmedia.com.</p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>1. Agreement to Terms:</strong> By accessing Mindtrix Media or commissioning our AI product advertising, commercial video production, or creative services, you agree to comply with and be bound by these Terms of Service.
                    </p>
                    <p>
                      <strong>2. Creative Services:</strong> Mindtrix Media produces high-quality AI product visuals, 3D renderings, and video reels. Final deliverables are provided under exclusive commercial usage rights to the client upon full payment.
                    </p>
                    <p>
                      <strong>3. Client Responsibilities:</strong> Clients represent that they own or have obtained the necessary rights to all product assets, trademarks, and logos submitted for creative generation.
                    </p>
                    <p>
                      <strong>4. Limitation of Liability:</strong> Mindtrix Media provides services to optimize advertising performance. We do not guarantee specific numerical ad conversions or third-party platform algorithm performance.
                    </p>
                    <p className="text-neutral-400 text-xs pt-2">Last updated: 2026. For inquiries, contact legal@mindtrixmedia.com.</p>
                  </>
                )}
              </div>

              <div className="px-6 sm:px-7 py-4 bg-neutral-50 border-t border-neutral-100 flex justify-end">
                <button
                  onClick={() => setActiveLegal(null)}
                  className="px-5 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-bold rounded-full transition-all cursor-pointer"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
