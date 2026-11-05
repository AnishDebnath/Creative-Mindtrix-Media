import React from 'react';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categoryTextOpacity: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  categoryTextOpacity,
}) => {
  return (
    <div
      className="sticky top-4 z-40 flex justify-center mb-4 sm:mb-5 px-2 pointer-events-none"
      style={{
        opacity: categoryTextOpacity,
        transform: `translateY(${(1 - categoryTextOpacity) * -10}px)`,
        transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
      }}
    >
      <div
        className="inline-flex items-center p-1 sm:p-1.5 bg-[#f5ecf2]/95 backdrop-blur-md rounded-full border border-[#e8d5df] shadow-[0_6px_24px_-4px_rgba(220,198,213,0.7)] max-w-full overflow-x-auto scrollbar-none"
        style={{ pointerEvents: categoryTextOpacity > 0.4 ? 'auto' : 'none' }}
      >
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-[13px] tracking-wide transition-colors duration-200 cursor-pointer select-none whitespace-nowrap ${
                isActive
                  ? 'text-neutral-900 font-bold'
                  : 'text-[#6b4c63] hover:text-neutral-900 font-medium'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeImageCategoryPill"
                  className="absolute inset-0 bg-[#eda970] rounded-full shadow-[0_2px_10px_rgba(237,169,112,0.45)]"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

