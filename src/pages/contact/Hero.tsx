import React from 'react';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, rgba(235, 220, 231, 0.45) 0%, rgba(250, 237, 229, 0.35) 30%, rgba(234, 227, 251, 0.2) 60%, #ffffff 90%, #ffffff 100%)',
      }}
    >
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-r from-[#dcc6d5]/30 via-[#cfc1ee]/20 to-[#eda970]/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-l from-[#3d2035]/10 via-[#dcc6d5]/15 to-[#eda970]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-stretch">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

