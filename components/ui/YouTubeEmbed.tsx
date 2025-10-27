"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  width?: string | number;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  start?: number;
  end?: number;
  className?: string;
  lazy?: boolean;
  thumbnailQuality?: 'default' | 'medium' | 'high' | 'standard' | 'maxres';
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title,
  width = '100%',
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  start,
  end,
  className = '',
  lazy = true,
  thumbnailQuality = 'maxres'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const containerRef = useRef<HTMLDivElement>(null);

  // Build YouTube embed URL
  const buildEmbedUrl = () => {
    const baseUrl = 'https://www.youtube.com/embed/';
    const params = new URLSearchParams();
    
    if (autoplay) params.append('autoplay', '1');
    if (!controls) params.append('controls', '0');
    if (loop) params.append('loop', '1');
    if (muted) params.append('mute', '1');
    if (start) params.append('start', start.toString());
    if (end) params.append('end', end.toString());
    params.append('rel', '0'); // Don't show related videos
    params.append('modestbranding', '1'); // Minimal YouTube branding
    params.append('playsinline', '1'); // Play inline on mobile
    
    return `${baseUrl}${videoId}?${params.toString()}`;
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}default.jpg`;

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-video ${className}`}
      style={{ width }}
    >
      {!isInView ? (
        // Thumbnail placeholder
        <div className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={!lazy}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        // Actual iframe
        <div className="relative w-full h-full">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
            </div>
          )}
          <iframe
            src={buildEmbedUrl()}
            title={title}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allow-same-origin"
            allowFullScreen
            className={`rounded-lg ${isLoaded ? 'block' : 'hidden'}`}
            onLoad={handleLoad}
            loading={lazy ? 'lazy' : 'eager'}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );
};

export default React.memo(YouTubeEmbed);
