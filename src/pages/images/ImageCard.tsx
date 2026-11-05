import React from 'react';
import type { ShowcaseImageItem } from '@/data/images';

interface ImageCardProps {
  img: ShowcaseImageItem;
  catName: string;
  onSelectImage: (src: string) => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({ img, catName, onSelectImage }) => {
  return (
    <div
      onClick={() => onSelectImage(img.src)}
      className="group relative w-full rounded-[18px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden bg-neutral-900/60 shadow-sm hover:shadow-xl cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300"
    >
      <img
        src={img.src}
        alt={img.title || `${catName} AI Photography - Mindtrix Media`}
        className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 sm:p-3.5 md:p-4 flex flex-col justify-end pointer-events-none">
        <span className="text-[10px] font-bold tracking-wider uppercase text-[#eda970]">
          {img.category}
        </span>
        <p className="text-white text-xs sm:text-sm font-semibold line-clamp-2 leading-snug">
          {img.title}
        </p>
      </div>
    </div>
  );
};
