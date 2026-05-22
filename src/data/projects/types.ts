export type ProjectSurface = "home" | "work";
/**
 * - `internal`  → react-router navigation
 * - `external`  → opens in a new tab (window.open with noopener)
 * - `mailto`    → triggers the OS default mail client; use this for
 *                 private/NDA projects so prospects can request more info
 */
export type ProjectLinkType = "internal" | "external" | "mailto";

export interface ProjectLink {
  href: string;
  type: ProjectLinkType;
}

/**
 * A short, scannable fact about a project (e.g. duration, scope, role).
 * `icon` is a language-agnostic glyph (emoji or short string) stored in the data file.
 * `key` is the trailing segment for the i18n lookup `projects.<id>.highlights.<key>`.
 */
export interface ProjectHighlight {
  icon: string;
  key: string;
}

/**
 * Production status of a project — drives the badge in the work-surface
 * fact sheet. Each value is rendered through an i18n label
 * (`statusLive`, `statusProduction`, …) so display strings stay localized.
 */
export type ProjectStatus = "live" | "production" | "archived" | "private";

export interface Project {
  /** Stable id; used to derive i18n keys: projects.<id>.{title,subtitle,shortDesc,longDesc} */
  id: string;
  year: string;
  image: string;
  link: ProjectLink;
  /** Which page surfaces this project should appear on. */
  surfaces: readonly ProjectSurface[];
  /** Work-surface only fields; safe to omit for non-work projects. */
  stack?: readonly string[];
  /** Translation keys (kept in common.json under the existing flat namespace). */
  responsibilities?: readonly string[];
  /** Scannable headline facts rendered on the work surface. */
  highlights?: readonly ProjectHighlight[];
  /**
   * Translation key for the per-project CTA label rendered on both the
   * specimen tag (top of the project card) and the bottom "Explore" button.
   * Defaults to "exploreProject" when omitted. Use cases:
   *   - "openWebsite"  → live public site
   *   - "openCase"     → public repo / case file
   *   - "askMore"      → private project — pair with link.type = "mailto"
   */
  ctaKey?: string;

  /* ─────────────────── Fact sheet (work surface) ────────────────────────
   * The opened project view on /work renders a 3-up stat block at the top:
   *     Started      Delivered           Status
   *     Mar 2025     Ongoing             ● Live
   *
   * `startDate` / `endDate` are free-form short strings ("Mar 2025",
   * "2024", "Ongoing") — kept as strings rather than Date so authoring
   * stays human-friendly and i18n-safe. If `endDate` is omitted the
   * specimen renders the localized "Ongoing" label automatically.
   * ──────────────────────────────────────────────────────────────────── */
  startDate?: string;
  endDate?: string;
  status?: ProjectStatus;

  /**
   * When `true`, the work specimen renders the "AI in the workflow"
   * block, pulling copy from `projects.<id>.aiUsage`. Omit / false for
   * projects that pre-date the AI workflow.
   */
  aiUsage?: boolean;
}
