import { getLenis } from "../../utils/smooth-scroll";
import { workSectionDomId, workSectionHash } from "./work-nav";

/** Desired distance from viewport top (matches scroll-mt-28 / fixed header). */
const ANCHOR_MIN = 72;
const ANCHOR_MAX = 160;

export function isWorkSectionAligned(section: string): boolean {
  const el = document.getElementById(workSectionDomId(section));
  if (!el) return false;
  const top = el.getBoundingClientRect().top;
  return top >= ANCHOR_MIN && top <= ANCHOR_MAX;
}

export function scrollToWorkSection(
  section: string,
  options?: { immediate?: boolean },
): boolean {
  const id = workSectionDomId(section);
  const target = document.getElementById(id);
  if (!target) return false;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(workSectionHash(section), {
      duration: options?.immediate ? 0 : 1.2,
      immediate: options?.immediate ?? false,
      force: true,
    });
    return true;
  }

  target.scrollIntoView({
    behavior: options?.immediate ? "auto" : "smooth",
    block: "start",
  });
  return true;
}

/**
 * Scrolls to a work accordion after it opens. Retries while the route chunk
 * mounts and re-scrolls after expand animation shifts layout.
 */
export function scheduleWorkSectionScroll(section: string): () => void {
  let cancelled = false;
  const timeouts: number[] = [];
  const rafIds: number[] = [];

  const run = (immediate: boolean) => {
    if (cancelled) return;
    scrollToWorkSection(section, { immediate });
  };

  let attempts = 0;
  const retry = () => {
    if (cancelled) return;

    const el = document.getElementById(workSectionDomId(section));
    if (!el) {
      if (attempts++ < 80) {
        rafIds.push(requestAnimationFrame(retry));
      }
      return;
    }

    run(attempts === 0);

    if (!isWorkSectionAligned(section) && attempts++ < 24) {
      timeouts.push(window.setTimeout(retry, 80));
    }
  };

  rafIds.push(requestAnimationFrame(retry));
  timeouts.push(window.setTimeout(() => run(true), 450));
  timeouts.push(window.setTimeout(() => run(false), 900));

  return () => {
    cancelled = true;
    timeouts.forEach((id) => window.clearTimeout(id));
    rafIds.forEach((id) => cancelAnimationFrame(id));
  };
}
