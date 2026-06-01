import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { resolveWorkNavTarget } from "../app/work/work-nav";
import { getLenis } from "./smooth-scroll";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/work" && resolveWorkNavTarget(location)) {
      return;
    }

    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.state, location.hash, location.key]);

  return null;
}
