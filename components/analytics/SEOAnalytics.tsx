"use client";

import Script from "next/script";
import { useEffect } from 'react';

// SEO Analytics and Monitoring Component
// Integrates Google Search Console, GA4, and performance monitoring

interface SEOAnalyticsProps {
  gaId?: string;
  gtmId?: string;
  enablePerformanceMonitoring?: boolean;
}

export function SEOAnalytics({ 
  gaId = process.env.NEXT_PUBLIC_GA_ID,
  gtmId = process.env.NEXT_PUBLIC_GTM_ID,
  enablePerformanceMonitoring = true
}: SEOAnalyticsProps) {
  
  useEffect(() => {
    if (!enablePerformanceMonitoring) return;

    // Monitor Core Web Vitals - function defined but not used in this component
    // const reportWebVitals = (metric: { name: string; value: number; id: string }) => {
    //   // Send to GA4
    //   if (typeof window !== 'undefined' && window.gtag) {
    //     window.gtag('event', metric.name, {
    //       event_category: 'Web Vitals',
    //       value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    //       event_label: metric.id,
    //       non_interaction: true,
    //     });
    //   }
    // };

    // Monitor page performance
    const monitorPerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            'Page Load Time': navigation.loadEventEnd - navigation.fetchStart,
            'DOM Content Loaded': navigation.domContentLoadedEventEnd - navigation.fetchStart,
            'First Byte': navigation.responseStart - navigation.fetchStart,
            'DOM Interactive': navigation.domInteractive - navigation.fetchStart,
          };

          // Send performance metrics to analytics
          Object.entries(metrics).forEach(([name, value]) => {
            if (window.gtag) {
              window.gtag('event', 'performance_metric', {
                event_category: 'Performance',
                event_label: name,
                value: Math.round(value),
              });
            }
          });
        }
      }
    };

    // Monitor user interactions for SEO insights
    const monitorUserInteractions = () => {
      // Track scroll depth
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth;
          
          // Send scroll depth milestones
          if (maxScrollDepth >= 25 && maxScrollDepth % 25 === 0) {
            if (window.gtag) {
              window.gtag('event', 'scroll_depth', {
                event_category: 'Engagement',
                event_label: `${maxScrollDepth}%`,
                value: maxScrollDepth,
              });
            }
          }
        }
      };

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        if (window.gtag) {
          window.gtag('event', 'time_on_page', {
            event_category: 'Engagement',
            event_label: 'seconds',
            value: timeOnPage,
          });
        }
      };

      window.addEventListener('scroll', trackScrollDepth);
      window.addEventListener('beforeunload', trackTimeOnPage);

      return () => {
        window.removeEventListener('scroll', trackScrollDepth);
        window.removeEventListener('beforeunload', trackTimeOnPage);
      };
    };

    // Initialize monitoring
    const cleanup = monitorUserInteractions();
    
    // Monitor performance after page load
    window.addEventListener('load', monitorPerformance);

    return () => {
      cleanup();
      window.removeEventListener('load', monitorPerformance);
    };
  }, [enablePerformanceMonitoring]);

  return (
    <>
      {/* Google Analytics 4 */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_title: document.title,
                page_location: window.location.href,
                custom_map: {
                  'custom_parameter_1': 'page_category',
                  'custom_parameter_2': 'content_type'
                }
              });
            `}
          </Script>
        </>
      )}

      {/* Google Tag Manager */}
      {gtmId && (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        </>
      )}

      {/* SEO-specific event tracking */}
      <Script id="seo-analytics" strategy="afterInteractive">
        {`
          // Track SEO-related events
          function trackSEOEvent(eventName, eventData = {}) {
            if (typeof gtag !== 'undefined') {
              gtag('event', eventName, {
                event_category: 'SEO',
                ...eventData
              });
            }
          }

          // Track internal link clicks
          document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.hostname === window.location.hostname) {
              trackSEOEvent('internal_link_click', {
                event_label: link.href,
                link_url: link.href,
                link_text: link.textContent?.trim()
              });
            }
          });

          // Track external link clicks
          document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.hostname !== window.location.hostname) {
              trackSEOEvent('external_link_click', {
                event_label: link.hostname,
                link_url: link.href,
                link_text: link.textContent?.trim()
              });
            }
          });

          // Track search functionality
          document.addEventListener('submit', function(e) {
            const form = e.target;
            if (form.querySelector('input[type="search"], input[name*="search"]')) {
              const searchInput = form.querySelector('input[type="search"], input[name*="search"]');
              trackSEOEvent('search', {
                event_label: 'site_search',
                search_term: searchInput?.value
              });
            }
          });

          // Track newsletter signups
          document.addEventListener('submit', function(e) {
            const form = e.target;
            if (form.querySelector('input[type="email"]') && form.action.includes('newsletter')) {
              trackSEOEvent('newsletter_signup', {
                event_label: 'email_capture'
              });
            }
          });

          // Track contact form submissions
          document.addEventListener('submit', function(e) {
            const form = e.target;
            if (form.querySelector('input[name="name"], input[name="email"]')) {
              trackSEOEvent('contact_form_submit', {
                event_label: 'lead_generation'
              });
            }
          });
        `}
      </Script>
    </>
  );
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (command: string, ...args: Array<unknown>) => void;
    dataLayer: Array<Record<string, unknown>>;
  }
}

// SEO monitoring utilities
export function useSEOMonitoring() {
  useEffect(() => {
    // Monitor page visibility for engagement metrics
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        if (window.gtag) {
          window.gtag('event', 'page_visible', {
            event_category: 'Engagement',
            event_label: 'visibility',
          });
        }
      }
    };

    // Monitor page unload for exit intent
    const handleBeforeUnload = () => {
      if (window.gtag) {
        window.gtag('event', 'page_unload', {
          event_category: 'Engagement',
          event_label: 'exit',
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
}

// Performance monitoring for SEO
export function usePerformanceMonitoring() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (window.gtag) {
          switch (entry.entryType) {
            case 'largest-contentful-paint':
              window.gtag('event', 'web_vital', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(entry.startTime),
              });
              break;
            case 'first-input':
              const fidEntry = entry as PerformanceEntry & { processingStart?: number };
              const fid = (fidEntry.processingStart || 0) - entry.startTime;
              window.gtag('event', 'web_vital', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(fid),
              });
              break;
            case 'layout-shift':
              const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
              if (!layoutShiftEntry.hadRecentInput) {
                window.gtag('event', 'web_vital', {
                  event_category: 'Performance',
                  event_label: 'CLS',
                  value: Math.round((layoutShiftEntry.value || 0) * 1000),
                });
              }
              break;
          }
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => observer.disconnect();
  }, []);
}
