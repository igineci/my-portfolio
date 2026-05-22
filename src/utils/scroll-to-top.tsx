// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "./smooth-scroll";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // When Lenis is active, ask it to jump immediately so its internal target
    // matches the new top position; otherwise fall back to the native scrollTo.
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
