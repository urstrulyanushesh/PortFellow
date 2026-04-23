import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from "react";

const ScrollToTop = () => {
  // Access the current location (URL)
  const { pathname } = useLocation();

  useEffect(() => {
    // Whenever the pathname changes, scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;