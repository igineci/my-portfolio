import { useEffect } from "react";

// Lightweight smooth scroll with inertia for wheel/trackpad input.
// Respects prefers-reduced-motion and disables on touch devices.

function isTouchDevice() {
  return (
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  );
}

export function useSmoothScroll(options?: { ease?: number; multiplier?: number }) {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches || isTouchDevice()) {
      return; // Respect user preference and avoid interfering on touch
    }

    let ease = options?.ease ?? 0.08; // lower = slower
    let multiplier = options?.multiplier ?? 1.0; // wheel delta scale

    // Ensure CSS doesn't force smooth behavior while JS drives scrolling
    const root = document.documentElement;
    const prevScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    let current = window.scrollY || window.pageYOffset;
    let target = current;
    let rafId = 0;
    let ticking = false;

    const maxScroll = () =>
      Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY * multiplier;
      target = Math.min(Math.max(0, target + delta), maxScroll());
      requestTick();
    };

    const isEditableTarget = (t: EventTarget | null) => {
      if (!(t instanceof HTMLElement)) return false;
      const tag = t.tagName;
      if (t.isContentEditable) return true;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
      // Also treat elements with role textbox as editable
      if (t.getAttribute("role") === "textbox") return true;
      return false;
    };

    const onKeyDown = (e: KeyboardEvent) => {
      // Do not hijack keys while typing or when modifiers are used
      if (e.metaKey || e.ctrlKey || e.altKey || isEditableTarget(e.target)) {
        return;
      }
      const line = 40; // typical line height
      const page = window.innerHeight * 0.9;
      let used = false;
      switch (e.key) {
        case "ArrowDown":
          target = Math.min(maxScroll(), target + line);
          used = true;
          break;
        case "ArrowUp":
          target = Math.max(0, target - line);
          used = true;
          break;
        case "PageDown":
        case " ":
          target = Math.min(maxScroll(), target + page);
          used = true;
          break;
        case "PageUp":
          target = Math.max(0, target - page);
          used = true;
          break;
        case "Home":
          target = 0;
          used = true;
          break;
        case "End":
          target = maxScroll();
          used = true;
          break;
      }
      if (used) {
        e.preventDefault();
        requestTick();
      }
    };

    const onResize = () => {
      // Keep target within bounds after resize
      target = Math.min(target, maxScroll());
      current = Math.min(current, maxScroll());
    };

    const step = () => {
      const diff = target - current;
      const delta = diff * ease;
      // Snap when very close to target
      if (Math.abs(diff) < 0.5) {
        current = target;
      } else {
        current += delta;
      }
      // Explicitly request immediate scroll to avoid CSS smooth interfering
      window.scrollTo({ top: current, behavior: "auto" });

      if (current !== target) {
        rafId = requestAnimationFrame(step);
      } else {
        ticking = false;
        rafId = 0;
      }
    };

    const requestTick = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(step);
      }
    };

    // Keep internal state in sync if user scrolls programmatically
    const onNativeScroll = () => {
      if (!ticking) {
        current = target = window.scrollY || window.pageYOffset;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown, { passive: false });
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onNativeScroll, { passive: true });

    return () => {
      // Restore previous CSS scroll-behavior
      root.style.scrollBehavior = prevScrollBehavior;
      window.removeEventListener("wheel", onWheel as EventListener);
      window.removeEventListener("keydown", onKeyDown as EventListener);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onNativeScroll as EventListener);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [options?.ease, options?.multiplier]);
}

export default function SmoothScrollMount() {
  useSmoothScroll({ ease: 0.06, multiplier: 1 }); // slower and smoother
  return null;
}
