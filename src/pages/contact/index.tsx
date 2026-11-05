import React from 'react';
import { Hero } from './Hero';
import { Faq } from '@/components/sections/Faq';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-0 pb-0">
      {/* 1. Hero Section (Contact Info + Form) */}
      <Hero />

      {/* 2. FAQ Section */}
      <div className="w-full">
        <Faq onContactUs={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </div>
    </div>
  );
};
