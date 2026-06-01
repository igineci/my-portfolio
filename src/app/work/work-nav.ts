/** Accordion id for the "Current state" block on /work (not a project id). */
export const WORK_SECTION_FEATURED = "featured" as const;

export type WorkNavState = {
  section: string;
};

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
