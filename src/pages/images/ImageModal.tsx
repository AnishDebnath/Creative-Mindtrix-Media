import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ShowcaseImageItem } from '@/data/images';

interface ImageModalProps {
  selectedImage: string | null;
  filteredImages: ShowcaseImageItem[];
  onClose: () => void;
  onSelectImage: (src: string) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  selectedImage,
  filteredImages,
  onClose,
  onSelectImage,
}) => {
  return (
    <AnimatePresence>
      {selectedImage && (() => {
        const currentIndex = filteredImages.findIndex((img) => img.src === selectedImage);
        const currentItem = currentIndex !== -1 ? filteredImages[currentIndex] : null;

        const handlePrev = (e: React.MouseEvent) => {
          e.stopPropagation();
          if (currentIndex !== -1 && filteredImages.length > 0) {
            const prevIdx = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
            onSelectImage(filteredImages[prevIdx].src);
          }
        };
        const handleNext = (e: React.MouseEvent) => {
          e.stopPropagation();
          if (currentIndex !== -1 && filteredImages.length > 0) {
            const nextIdx = (currentIndex + 1) % filteredImages.length;
            onSelectImage(filteredImages[nextIdx].src);
          }
        };

        return (
          <motion.div
            key="image-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={onClose}
          >
            {/* Close Button top-right */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            {filteredImages.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-6 md:left-10 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105 active:scale-95"
                title="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Button */}
            {filteredImages.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-6 md:right-10 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105 active:scale-95"
                title="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            <motion.div
              key={`image-modal-container-${selectedImage}`}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ type: 'spring', damping: 28, stiffness: 350 }}
              className="relative max-w-[92vw] max-h-[90vh] my-auto overflow-hidden rounded-[24px] sm:rounded-[32px] shadow-2xl bg-black border border-white/10 flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-w-full max-h-[85vh] overflow-hidden flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt={currentItem?.title || 'Product Image Showcase'}
                  className="max-h-[85vh] max-w-[85vw] w-auto h-auto object-contain select-none"
                />
                {currentItem && (
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none">
                    <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-[#eda970]">
                      {currentItem.category}
                    </span>
                    <p className="text-white text-sm sm:text-base font-semibold leading-snug">
                      {currentItem.title}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        );
      })()}
    </AnimatePresence>
  );
};
