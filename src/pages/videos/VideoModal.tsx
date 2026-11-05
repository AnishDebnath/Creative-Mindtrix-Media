import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ShowcaseVideoItem as VideoItem } from '@/data/videos';

interface VideoModalProps {
  activeVideo: VideoItem | null;
  videos: VideoItem[];
  onClose: () => void;
  onSelectVideo: (video: VideoItem) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  activeVideo,
  videos,
  onClose,
  onSelectVideo,
}) => {
  return (
    <AnimatePresence>
      {activeVideo && (() => {
        const currentIndex = videos.findIndex((v) => v.id === activeVideo.id);
        const handlePrev = (e: React.MouseEvent) => {
          e.stopPropagation();
          if (currentIndex !== -1 && videos.length > 0) {
            const prevIdx = (currentIndex - 1 + videos.length) % videos.length;
            onSelectVideo(videos[prevIdx]);
          }
        };
        const handleNext = (e: React.MouseEvent) => {
          e.stopPropagation();
          if (currentIndex !== -1 && videos.length > 0) {
            const nextIdx = (currentIndex + 1) % videos.length;
            onSelectVideo(videos[nextIdx]);
          }
        };

        return (
          <motion.div
            key="video-modal-backdrop"
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
            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-6 md:left-10 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105 active:scale-95"
              title="Previous Video"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-6 md:right-10 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg hover:scale-105 active:scale-95"
              title="Next Video"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={`video-modal-container-${activeVideo.id}`}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ type: 'spring', damping: 28, stiffness: 350 }}
              className="relative max-w-sm sm:max-w-md w-full max-h-[90vh] my-auto overflow-hidden rounded-[28px] sm:rounded-[32px] shadow-2xl bg-black border border-white/10 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[9/16] w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-black flex items-center justify-center">
                <video
                  key={activeVideo.id}
                  src={activeVideo.highResSrc || activeVideo.videoSrc}
                  poster={activeVideo.image}
                  autoPlay
                  controls
                  controlsList="nofullscreen nodownload noremoteplayback"
                  disablePictureInPicture
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        );
      })()}
    </AnimatePresence>
  );
};

