import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0; // Ensure full reset
      document.body.scrollTop = 0; // For Safari support
    }, 50); // Small delay to allow rendering

  }, [pathname]);

  return null;
};

export default ScrollToTop;
