import React from 'react';

interface SectionTagProps {
  label: string;
  className?: string;
}

// ponytail: reusable uniform brand section tag badge across the entire website
export const SectionTag: React.FC<SectionTagProps> = ({ label, className = '' }) => (
  <div
    className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase border border-white/20 shadow-sm shadow-[#3d2035]/20 select-none ${className}`}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-[#eda970] shrink-0" />
    <span>{label}</span>
  </div>
);

export default SectionTag;

