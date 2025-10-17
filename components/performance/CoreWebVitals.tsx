"use client";

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

// Core Web Vitals Optimization Component
// Monitors and optimizes LCP, CLS, FID, and other performance metrics

interface CoreWebVitalsProps {
  enableReporting?: boolean;
  enableOptimizations?: boolean;
}

export function CoreWebVitals({ 
  enableReporting = true, 
  enableOptimizations = true 
}: CoreWebVitalsProps) {
  
  // Report Web Vitals to analytics
  useReportWebVitals((metric) => {
    if (enableReporting) {
      // Send to Google Analytics 4
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric);
      }
    }
  });

  // Performance optimizations
  useEffect(() => {
    if (!enableOptimizations) return;

    // Optimize font loading
    const optimizeFonts = () => {
      // Preload critical fonts
      const criticalFonts = [
        '/fonts/PlayfairDisplay-Regular.woff2',
        '/fonts/Manrope-Regular.woff2'
      ];

      criticalFonts.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = 'font/woff2';
        link.href = font;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      // Add loading="lazy" to images below the fold
      const images = document.querySelectorAll('img[loading="eager"]');
      images.forEach((img, index) => {
        if (index > 2) { // Keep first 3 images as eager loading
          img.setAttribute('loading', 'lazy');
        }
      });
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        const scriptElement = script as HTMLScriptElement;
        if (scriptElement.src.includes('analytics') || scriptElement.src.includes('gtag')) {
          scriptElement.setAttribute('async', 'true');
        }
      });
    };

    // Run optimizations after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        optimizeFonts();
        optimizeImages();
        optimizeThirdPartyScripts();
      });
    } else {
      optimizeFonts();
      optimizeImages();
      optimizeThirdPartyScripts();
    }
  }, [enableOptimizations]);

  return null;
}

// Performance monitoring hook
export function usePerformanceMonitoring() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEntry & { processingStart?: number };
          console.log('FID:', (fidEntry.processingStart || 0) - entry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as PerformanceEntry & { value?: number };
          console.log('CLS:', layoutShiftEntry.value);
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => observer.disconnect();
  }, []);
}

// Resource hints component for performance optimization
export function ResourceHints() {
  return (
    <>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//www.youtube.com" />
      <link rel="dns-prefetch" href="//maps.googleapis.com" />
      <link rel="dns-prefetch" href="//maps.gstatic.com" />
      
      {/* Preload critical resources */}
      <link 
        rel="preload" 
        href="/fonts/PlayfairDisplay-Regular.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous" 
      />
      <link 
        rel="preload" 
        href="/fonts/Manrope-Regular.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous" 
      />
      
      {/* Preload critical images */}
      <link rel="preload" href="/Logo.png" as="image" />
      <link rel="preload" href="/og-default.jpg" as="image" />
    </>
  );
}

// Critical CSS inlining component
export function CriticalCSS() {
  return (
    <style jsx global>{`
      /* Critical CSS for above-the-fold content */
      html {
        font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
      }
      
      body {
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        color: #111111;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      /* Prevent layout shift */
      img {
        max-width: 100%;
        height: auto;
      }
      
      /* Optimize font display */
      @font-face {
        font-family: 'Playfair Display';
        font-display: swap;
        src: url('/fonts/PlayfairDisplay-Regular.woff2') format('woff2');
      }
      
      @font-face {
        font-family: 'Manrope';
        font-display: swap;
        src: url('/fonts/Manrope-Regular.woff2') format('woff2');
      }
      
      /* Critical layout styles */
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      
      /* Smooth scrolling */
      html {
        scroll-behavior: smooth;
      }
      
      /* Focus styles for accessibility */
      *:focus {
        outline: 2px solid #f37021;
        outline-offset: 2px;
      }
    `}</style>
  );
}

// Performance budget monitoring
export function PerformanceBudget() {
  useEffect(() => {
    // Monitor bundle size
    const checkBundleSize = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          
          // Log performance metrics
          console.log('Page Load Time:', loadTime + 'ms');
          console.log('DOM Content Loaded:', domContentLoaded + 'ms');
          
          // Alert if performance is poor
          if (loadTime > 3000) {
            console.warn('⚠️ Slow page load detected:', loadTime + 'ms');
          }
          if (domContentLoaded > 1500) {
            console.warn('⚠️ Slow DOM content loaded:', domContentLoaded + 'ms');
          }
        }
      }
    };

    // Run check after page load
    window.addEventListener('load', checkBundleSize);
    
    return () => window.removeEventListener('load', checkBundleSize);
  }, []);

  return null;
}
