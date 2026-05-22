import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Site-wide smooth scrolling powered by Lenis (darkroomengineering/lenis).
 *
 * Why Lenis instead of a homemade RAF loop:
 *   - It cooperates with nested scrollable containers via `data-lenis-prevent`
 *     (e.g. the projects gallery's internal scroll surface) so inner content
 *     keeps its native scroll behaviour while the page glides smoothly.
 *   - Battle-tested easing/throttling — no "cutting" sensation from wheel
 *     events being preempted.
 *   - Respects `prefers-reduced-motion` and skips smoothing on touch by default
 *     (mobile already has native inertia scroll, double-smoothing feels off).
 *
 * Configuration choices are tuned for an elegant, slightly viscous feel:
 *   - `duration: 1.6`           ← longer than Lenis' 1.2 default for a slower glide
 *   - `easing: expo ease-out`   ← snappy initial response, gentle settle
 *   - `wheelMultiplier: 0.9`    ← a touch heavier per wheel tick
 */

let lenisInstance: Lenis | null = null;

/**
 * Returns the currently-mounted Lenis instance (or null when smooth-scroll is
 * not active, e.g. reduced motion / not yet mounted / between mounts).
 * Useful for programmatic navigation like `ScrollToTop` so it can jump
 * without fighting the smoothing engine.
 */
export function getLenis(): Lenis | null {
  return lenisInstance;
}

export default function SmoothScrollMount() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      gestureOrientation: "vertical",
    });

    lenisInstance = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
}
