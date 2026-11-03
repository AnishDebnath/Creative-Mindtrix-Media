import React, { useRef, useState, useEffect } from 'react';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src?: string;
  poster?: string;
  rootMargin?: string;
}

// ponytail: Native IntersectionObserver video lazy loader with off-screen pause to prevent GPU/decoder freezes
export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  rootMargin = '200px 0px',
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (videoRef.current && autoPlay) {
              videoRef.current.play().catch(() => {});
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { rootMargin, threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, autoPlay]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {/* Lightweight poster image shown until video can play */}
      {poster && (
        <img
          src={poster}
          alt=""
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {/* Video element only acquires source and decodes when near viewport */}
      <video
        ref={videoRef}
        src={inView ? src : undefined}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={inView ? 'metadata' : 'none'}
        onLoadedData={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
};
