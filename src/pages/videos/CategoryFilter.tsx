import React from 'react';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <motion.div
      id="video-category-filter"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15 }}
      className="relative z-20 flex justify-center mb-12 px-2 scroll-mt-24"
    >
      <div className="inline-flex items-center p-1 sm:p-1.5 bg-[#f5ecf2]/80 backdrop-blur-md rounded-full border border-[#e8d5df] shadow-[0_4px_20px_-4px_rgba(220,198,213,0.5)] max-w-full overflow-x-auto scrollbar-none">
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
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-[#eda970] rounded-full shadow-sm"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

