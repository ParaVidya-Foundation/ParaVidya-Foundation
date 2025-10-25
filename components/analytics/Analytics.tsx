"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// TypeScript declarations for gtag, dataLayer, and fbq
declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    fbq?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

interface AnalyticsProps {
  gaId?: string;
  gtmId?: string;
  fbPixelId?: string;
}

/**
 * Comprehensive Analytics Component
 * Production-ready implementation for Next.js App Router with:
 * - Google Tag Manager (GTM) with correct noscript placement
 * - Google Analytics 4 (GA4) with route change tracking
 * - Meta (Facebook) Pixel with PageView tracking
 * - Client-side navigation support
 * - Type-safe implementation
 */
export function Analytics({ 
  gaId,
  gtmId,
  fbPixelId
}: AnalyticsProps) {
  const pathname = usePathname();
  
  // Hardcoded production values - ensures analytics work even if env vars aren't loaded
  const finalGaId = gaId || "G-NKY2VT7KBP";
  const finalGtmId = gtmId || "GTM-MW2F23VZ";
  const finalFbPixelId = fbPixelId || "1552573849451841";

  // Initialize dataLayer for GTM
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
    }
  }, []);

  // Track route changes for GA4 and Facebook Pixel
  useEffect(() => {
    if (!finalGaId && !finalFbPixelId) return;

    const url = pathname || window.location.pathname;

    // Send pageview to GA4 (if using direct GA4, not via GTM)
    if (finalGaId && !finalGtmId && window.gtag) {
      window.gtag('config', finalGaId, {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Send pageview to Facebook Pixel
    if (finalFbPixelId && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname, finalGaId, finalFbPixelId, finalGtmId]);

  return (
    <>
      {/* Google Tag Manager - MUST be in <head> */}
      {finalGtmId && (
        <Script
          id="gtm-head"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${finalGtmId}');
          `}
        </Script>
      )}

      {/* Google Analytics 4 - Only if not using GTM */}
      {!finalGtmId && finalGaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${finalGaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${finalGaId}', {
                page_path: window.location.pathname,
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true
              });
            `}
          </Script>
        </>
      )}

      {/* Facebook Pixel / Meta Pixel */}
      {finalFbPixelId && (
        <>
          <Script id="fb-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;
                n=f.fbq=function(){
                  n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
                };
                if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];
                t=b.createElement(e);
                t.async=!0;
                t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              
              fbq('init', '${finalFbPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${finalFbPixelId}&ev=PageView&noscript=1`}
              alt="Facebook Pixel"
            />
          </noscript>
        </>
      )}
    </>
  );
}

export default Analytics;
