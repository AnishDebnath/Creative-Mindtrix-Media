import React from 'react';
import { Hero } from './Hero';
import { TermsAndConditionsContent } from './TermsAndConditionsContent';

export const TermsAndConditionsPage: React.FC = () => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(250,237,229,0.3) 30%, rgba(247,237,245,0.7) 60%, #f7edf5 100%)',
      }}
    >
      {/* Background Giant Watermark Typography: MINDTRIX */}
      <div className="absolute top-0 inset-x-0 flex items-start justify-center pointer-events-none select-none z-0 opacity-25 overflow-hidden">
        <svg
          viewBox="0 0 1000 200"
          className="w-full h-[200px] sm:h-[260px] md:h-[300px]"
          preserveAspectRatio="none"
        >
          <text
            x="0"
            y="50%"
            dominantBaseline="central"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="#dcc6d5"
            fontFamily="'Anton', 'Oswald', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="195"
          >
            MINDTRIX
          </text>
        </svg>
      </div>

      <div className="relative w-full pt-4 pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Hero />
        <TermsAndConditionsContent />
      </div>
    </div>
  );
};

export const TermsPage = TermsAndConditionsPage;

