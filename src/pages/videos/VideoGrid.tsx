import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReelCard } from './ReelCard';
import type { ShowcaseVideoItem as VideoItem } from '@/data/videos';

interface VideoGridProps {
  videos: VideoItem[];
  onSelectVideo: (video: VideoItem) => void;
}

export const VideoGrid: React.FC<VideoGridProps> = ({ videos, onSelectVideo }) => {
  return (
    <div className="relative z-10 mb-4 sm:mb-6">
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {videos.map((vid) => (
            <motion.div
              key={vid.id}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ReelCard vid={vid} onSelect={onSelectVideo} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

