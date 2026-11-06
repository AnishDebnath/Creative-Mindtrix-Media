import React from 'react';
import { motion } from 'framer-motion';
import { SectionTag } from '@/components/ui/SectionTag';
import { ShieldCheck, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative z-10 pt-8 sm:pt-12 mb-10 sm:mb-14"
    >
      {/* 2-Column Section Header matching website signature style */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10 pb-8 sm:pb-10 border-b border-[#ebdce7]/70">
        {/* Left Column: SectionTag + Big 2-Line Headline */}
        <div className="flex-1 min-w-0">
          <SectionTag label="Terms & Conditions" className="mb-3.5 sm:mb-4" />

          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-black tracking-normal text-neutral-900 uppercase leading-tight sm:leading-[1.1]">
            <span>TERMS &amp;</span>
            <br />
            {/* Signature rotated highlight pill */}
            <span className="inline-block relative mt-1 sm:mt-1.5">
              <span className="relative z-10 px-4 sm:px-6 py-0.5 sm:py-1 rounded-[18px] sm:rounded-[24px] bg-gradient-to-r from-[#faede5] via-[#f7edf5] to-[#eae3fb] shadow-sm inline-block transform -rotate-1 border border-[#ebdce7]">
                <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
                  CONDITIONS.
                </span>
              </span>
            </span>
          </h1>
        </div>

        {/* Right Column: Description + Metadata Badges */}
        <div className="max-w-md lg:max-w-lg flex flex-col items-start lg:items-end gap-4 shrink-0">
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-normal lg:text-right">
            Please review the terms and policies governing client engagements, commercial usage rights, AI production deliverables, and retainer services with Mindtrix Media.
          </p>

          <div className="flex items-center gap-2.5 flex-wrap text-xs font-semibold text-neutral-700">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-[#ebdce7] shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-[#3d2035]" />
              <span>Effective: Jan 1, 2026</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-[#ebdce7] shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full Commercial Rights</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

