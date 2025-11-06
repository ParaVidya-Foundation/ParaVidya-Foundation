"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = (): null => {
  const pathname = usePathname();

  useEffect(() => {
    // ✅ Fix hydration: Only run on client side
    if (typeof window === 'undefined') return;
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0; // Ensure full reset
      document.body.scrollTop = 0; // For Safari support
    }, 50); // Small delay to allow rendering

  }, [pathname]);

  return null;
};

export default ScrollToTop;
