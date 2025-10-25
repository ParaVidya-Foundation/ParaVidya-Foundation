"use client"

import Script from "next/script"

/**
 * Google Analytics 4 Component
 * Production-ready GA4 implementation with proper TypeScript types
 */
export function GA() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  
  if (!gaId) {
    console.warn('Google Analytics ID not found. Please set NEXT_PUBLIC_GA_ID in .env.local');
    return null;
  }
  
  return (
    <>
      <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} 
        strategy="afterInteractive" 
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
        `}
      </Script>
    </>
  )
}
