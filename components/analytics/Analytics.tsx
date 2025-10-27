"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// TypeScript declarations for gtag and fbq
declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag: (command: string, ...args: Array<unknown>) => void;
    fbq?: (command: string, eventName?: string, params?: Record<string, unknown>) => void;
  }
}

interface AnalyticsProps {
  gaId?: string;
  fbPixelId?: string;
}

/**
 * Comprehensive Analytics Component for Next.js App Router
 * Implements Google Analytics 4 and Meta Pixel with proper route tracking
 */
export function Analytics({ 
  gaId,
  fbPixelId
}: AnalyticsProps) {
  const pathname = usePathname();
  
  // Production tracking IDs
  const finalGaId = gaId || process.env.NEXT_PUBLIC_GA_ID || "G-NKY2VT7KBP";
  const finalFbPixelId = fbPixelId || process.env.NEXT_PUBLIC_FB_PIXEL_ID || "1552573849451841";

  // Track route changes for GA4
  useEffect(() => {
    if (!finalGaId || !pathname) return;

    const url = window.location.pathname;

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', finalGaId, {
        page_path: url,
        page_title: document?.title || '',
        page_location: window.location.href
      });
    }
  }, [pathname, finalGaId]);

  return (
    <>
      {/* Google Analytics - Exact match to official code */}
      {finalGaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${finalGaId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${finalGaId}');
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel - Exact match to official code */}
      {finalFbPixelId && (
        <>
          <Script id="fb-pixel-init" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${finalFbPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
          {/* Meta Pixel Noscript */}
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' } as React.CSSProperties}
              src={`https://www.facebook.com/tr?id=${finalFbPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
}

export default Analytics;
