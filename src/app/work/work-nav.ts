/** Accordion id for the "Current state" block on /work (not a project id). */
export const WORK_SECTION_FEATURED = "featured" as const;

export type WorkNavState = {
  section: string;
};

export function workSectionDomId(section: string) {
  return `work-section-${section}`;
}

export function workSectionHash(section: string) {
  return `#${workSectionDomId(section)}`;
}

/** Reads section from router location state (CV → Work deep links). */
export function readWorkNavState(state: unknown): WorkNavState | null {
  if (!state || typeof state !== "object") return null;

  const value =
    "section" in state && typeof state.section === "string"
      ? state.section
      : "projectId" in state && typeof state.projectId === "string"
        ? state.projectId
        : null;

  return value ? { section: value } : null;
}

/** Reads section from the URL hash (`#work-section-juratech`). */
export function readWorkNavHash(hash: string): WorkNavState | null {
  const id = hash.replace(/^#/, "");
  const prefix = "work-section-";
  if (!id.startsWith(prefix)) return null;
  const section = id.slice(prefix.length);
  return section ? { section } : null;
}

/** State + hash — used by Work page and ScrollToTop. */
export function resolveWorkNavTarget(location: {
  state: unknown;
  hash: string;
}): WorkNavState | null {
  return readWorkNavState(location.state) ?? readWorkNavHash(location.hash);
}
