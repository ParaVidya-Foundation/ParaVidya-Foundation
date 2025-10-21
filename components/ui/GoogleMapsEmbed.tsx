"use client";

import React, { useState, useRef, useEffect } from 'react';

interface GoogleMapsEmbedProps {
  src: string;
  title: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  lazy?: boolean;
  allowFullScreen?: boolean;
  loading?: 'lazy' | 'eager';
}

const GoogleMapsEmbed: React.FC<GoogleMapsEmbedProps> = ({
  src,
  title,
  width = '100%',
  height = '400px',
  className = '',
  lazy = true,
  allowFullScreen = true,
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ width, height }}
    >
      {!isInView ? (
        // Placeholder
        <div className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      ) : (
        // Actual iframe
        <div className="relative w-full h-full">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )}
          <iframe
            src={src}
            title={title}
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={allowFullScreen}
            loading={loading}
            referrerPolicy="no-referrer-when-downgrade"
            className={`rounded-lg ${isLoaded ? 'block' : 'hidden'}`}
            onLoad={handleLoad}
          />
        </div>
      )}
    </div>
  );
};

export default React.memo(GoogleMapsEmbed);
