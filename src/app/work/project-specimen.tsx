"use client";

import { useState } from "react";
import { motion, type Easing } from "framer-motion";
import { GiStarShuriken } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { BadgeGroup } from "../../components/ui/badge";
import { projectHighlightKey, projectKey } from "../../data/projects";
import type { Project, ProjectLink, ProjectStatus } from "../../data/projects";
import { trackProjectLinkClicked } from "@/lib/analytics";

/**
 * Returns the human-friendly destination label for a project link:
 *   - external  → bare host (e.g. "gnosrecords.com", "github.com/igineci/cer")
 *   - mailto    → "via email"
 *   - internal  → undefined (no URL to surface)
 *
 * Used by the meta-ribbon mini-link and the dome CTA so the same domain
 * shows up in both places, no ambiguity about where the click goes.
 */
function formatLinkDisplay(link: ProjectLink): string | undefined {
  if (link.type === "external") {
    try {
      const url = new URL(link.href);
      const host = url.host.replace(/^www\./, "");
      const path = url.pathname.replace(/\/$/, "");
      return path && path !== "/" ? `${host}${path}` : host;
    } catch {
      return link.href;
    }
  }
  if (link.type === "mailto") {
    return "via email";
  }
  return undefined;
}

/**
 * ProjectSpecimen — text-first editorial spread that fills an opened
 * accordion item on /work. The outer row + dividing line live in
 * `work/page.tsx` and stay intentionally untouched; this component only
 * renders the inside.
 */
interface ProjectSpecimenProps {
  project: Project;
  onOpen: (project: Project) => void;
}

const EASE: Easing = [0.22, 1, 0.36, 1];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: EASE, delay },
  } as const;
}

/** Maps the ProjectStatus enum onto the localized label key. */
const STATUS_LABEL_KEY: Record<ProjectStatus, string> = {
  live: "statusLive",
  production: "statusProduction",
  archived: "statusArchived",
  private: "statusPrivate",
};

export function ProjectSpecimen({
  project,
  onOpen,
}: ProjectSpecimenProps) {
  const { t } = useTranslation();

  const ctaKey = (project.ctaKey ?? "exploreProject") as "exploreProject";

  const purposeUsage = t(projectKey(project.id, "purposeUsage"));
  const hasPurposeUsage =
    typeof purposeUsage === "string" &&
    purposeUsage.length > 0 &&
    !purposeUsage.startsWith("projects.");

  const aiUsage = t(projectKey(project.id, "aiUsage"));
  const hasAiUsage =
    project.aiUsage === true &&
    typeof aiUsage === "string" &&
    aiUsage.length > 0 &&
    !aiUsage.startsWith("projects.");

  // Fact-sheet values — `startDate` always falls back to the project's
  // year, `endDate` falls back to the localized "Ongoing" label so the
  // panel never renders an empty cell. Status is optional and only the
  // dot+label renders when set.
  const startedValue = project.startDate ?? project.year;
  const ongoingLabel = t("ongoing", "Ongoing");
  const deliveredValue = project.endDate ?? ongoingLabel;
  const isOngoing =
    deliveredValue === ongoingLabel || deliveredValue.toLowerCase() === "ongoing";
  const statusLabel = project.status
    ? t(STATUS_LABEL_KEY[project.status] as "statusLive")
    : null;

  // Visible destination label — surfaced both in the meta ribbon and in
  // the dome CTA's resting state so the reader sees the real URL without
  // hovering anything.
  const linkDisplay = formatLinkDisplay(project.link);
  const isExternal = project.link.type === "external";

  return (
    <div className="relative overflow-hidden pt-10 sm:pt-14 pb-14 sm:pb-16">
      {/* (1) Year watermark — huge, faint, anchored top-right. Now that
          the photograph is gone the watermark works harder to give the
          spread visual depth without competing with the copy. */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 1.4, ease: EASE }}
        className="pointer-events-none absolute inset-0 flex items-start justify-end overflow-hidden"
      >
        <span
          className="text-[#131313] font-light leading-[0.78] tracking-tighter select-none"
          style={{
            fontSize: "clamp(180px, 38vw, 460px)",
            transform: "translate(8%, -12%)",
          }}
        >
          {project.year}
        </span>
      </motion.div>

      {/* (2) Meta ribbon — anchored by a 32px hairline on the left, and
          a visible inline link to the project's destination on the right
          (when the project has an external URL or mailto). The same
          destination is also rendered inside the dome CTA at the bottom
          so it's reachable at both ends of the spread. */}
      <motion.div
        {...fadeUp(0)}
        className="relative z-10 mb-10 flex flex-wrap items-center justify-between gap-y-3 px-1 text-[#131313]"
      >
        <div className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.4em]">
          <span aria-hidden className="inline-block h-px w-8 bg-[#131313]" />
        </div>
        {linkDisplay && (
          <a
            href={project.link.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            onClick={() =>
              trackProjectLinkClicked(
                project.id,
                project.link.type,
                "work_specimen",
              )
            }
            className="group inline-flex items-center gap-2 text-[12px] sm:text-sm tracking-[0.04em] font-light text-[#131313]"
          >
            <span aria-hidden className="text-[#131313]">↗</span>
            <span className="underline decoration-[#131313]/40 decoration-1 underline-offset-[5px] group-hover:decoration-[#131313] group-focus:decoration-[#131313] transition-colors">
              {linkDisplay}
            </span>
          </a>
        )}
      </motion.div>

      {/* (3) Headline */}
      <motion.h3
        {...fadeUp(0.06)}
        className="relative z-10 break-words font-light uppercase leading-[0.92] tracking-[-0.015em] text-[#131313]"
        style={{ fontSize: "clamp(40px, 9vw, 132px)" }}
      >
        {t(projectKey(project.id, "title"))}
      </motion.h3>

      {/* (4) Subtitle  */}
      <motion.div
        {...fadeUp(0.12)}
        className="relative z-10 mt-6 mb-14 flex items-center gap-4"
      >
        <span aria-hidden className="hidden sm:inline-block h-px w-12 bg-[#131313]" />
        <p className="text-[#131313]/85 text-[11px] sm:text-sm uppercase tracking-[0.32em]">
          {t(projectKey(project.id, "subtitle"))}
        </p>
        <span aria-hidden className="h-px flex-1 bg-[#131313]/25" />
      </motion.div>

      {/* (5) FACT SHEET — replaces the old cinematic image card.
          A 3-up stat strip showing the credibility signals that matter
          most to a hiring reader: when it started, when it shipped, and
          whether it's running today. Big editorial type, hairline labels,
          hairline column dividers — reads as a typography specimen, not
          a card. */}
      <motion.div {...fadeUp(0.18)} className="relative z-10 mb-16">
        <SectionLabel>{t("timelineLabel", "Timeline")}</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-[#131313]">
          <FactCell label={t("startedLabel", "Started")} value={startedValue} />
          <FactCell
            label={t("deliveredLabel", "Delivered")}
            value={deliveredValue}
            emphasize={isOngoing}
            withLeftDivider
          />
          <FactCell
            label={t("statusLabel", "Status")}
            value={statusLabel ?? "—"}
            dotColor={
              project.status === "live"
                ? "#0f8f60"
                : project.status === "archived"
                  ? "#8a857a"
                  : "#131313"
            }
            withLeftDivider
          />
        </div>
      </motion.div>

      {/* (6) AT A GLANCE — manifesto of highlights, vertical timeline
          marked by the same shuriken icon used on the section row. */}
      {project.highlights && project.highlights.length > 0 && (
        <motion.div {...fadeUp(0.24)} className="relative z-10 mb-16">
          <SectionLabel>At a glance</SectionLabel>
          <ol className="relative space-y-5 pl-8">
            <span
              aria-hidden
              className="absolute left-[7px] top-2 bottom-2 w-px bg-[#131313]/35"
            />
            {project.highlights.map((highlight) => (
              <li key={highlight.key} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-8 top-[2px] inline-flex h-4 w-4 items-center justify-center bg-[#f2f0ea]"
                >
                  <GiStarShuriken className="text-[14px] text-[#131313]" />
                </span>
                <p className="text-base sm:text-lg leading-snug text-[#131313]">
                  {t(projectHighlightKey(project.id, highlight.key))}
                </p>
              </li>
            ))}
          </ol>
        </motion.div>
      )}

      {/* (7) THE WORK — drop-cap long-form prose, max-w-3xl + mx-auto so
          the column reads like a centered magazine article. Text stays
          left-aligned within the column for readability (centered long
          form is hard to scan; centered labels carry the "centered" feel). */}
      <motion.div
        {...fadeUp(0.3)}
        className="relative z-10 mb-14 max-w-3xl mx-auto"
      >
        <SectionLabel center>The work</SectionLabel>
        <p className="project-specimen-prose text-base sm:text-lg lg:text-xl leading-[1.75] text-[#131313]">
          {t(projectKey(project.id, "longDesc"))}
        </p>
      </motion.div>

      {/* (8) AI IN THE WORKFLOW — only renders when project.aiUsage is
          true AND a translation exists. Deliberately set off as its own
          block with a slim left rail so the reader notices it as a
          distinct credibility signal, not a tail of the long-form copy. */}
      {hasAiUsage && (
        <motion.div
          {...fadeUp(0.36)}
          className="relative z-10 mb-16 max-w-3xl mx-auto"
        >
          <SectionLabel center>
            {t("aiUsageLabel", "AI in the workflow")}
          </SectionLabel>
          <div className="relative border-l border-[#131313] pl-6 sm:pl-8">
            <span
              aria-hidden
              className="absolute -left-[6px] top-1 inline-flex h-3 w-3 items-center justify-center bg-[#131313]"
              style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }}
            />
            <p className="text-base sm:text-lg leading-relaxed text-[#131313]">
              {aiUsage}
            </p>
          </div>
        </motion.div>
      )}

      {/* (9) Purpose & Usage — secondary pull quote, hairline left rail. */}
      {hasPurposeUsage && (
        <motion.div
          {...fadeUp(0.42)}
          className="relative z-10 mb-16 max-w-3xl mx-auto"
        >
          <SectionLabel center>
            {t("purposeUsageLabel", "Purpose & Usage")}
          </SectionLabel>
          <blockquote className="relative border-l border-[#131313] pl-6 sm:pl-8 italic">
            <span
              aria-hidden
              className="absolute -left-[7px] top-0 inline-block h-3 w-3 -rotate-45 bg-[#131313]"
            />
            <p className="text-base sm:text-lg leading-relaxed text-[#131313]/85">
              {purposeUsage}
            </p>
          </blockquote>
        </motion.div>
      )}

      {/* (10) Stack & Responsibilities ribbons. */}
      <div className="relative z-10 mb-16 space-y-10">
        {project.stack && project.stack.length > 0 && (
          <motion.div {...fadeUp(0.48)}>
            <SectionLabel>{t("techStack", "Tech Stack")}</SectionLabel>
            <BadgeGroup items={[...project.stack]} className="max-w-full" />
          </motion.div>
        )}
        {project.responsibilities && project.responsibilities.length > 0 && (
          <motion.div {...fadeUp(0.54)}>
            <SectionLabel>
              {t("responsibilities", "Responsibilities")}
            </SectionLabel>
            <BadgeGroup
              items={project.responsibilities.map((item) => t(item as "home"))}
              className="max-w-full"
            />
          </motion.div>
        )}
      </div>

      {/* (11) CTA — half-dome reveal that mirrors the hero's inverse-T
          gesture at a contained scale. */}
      <motion.div
        {...fadeUp(0.6)}
        className="relative z-10 flex justify-center"
      >
        <DomeCta
          label={t(ctaKey, "Explore Project")}
          subLabel={linkDisplay}
          onClick={() => onOpen(project)}
        />
      </motion.div>
    </div>
  );
}

/* ──────────────────────────── helpers ─────────────────────────────────── */

/**
 * SectionLabel — tiny tracked uppercase header that opens each block.
 *
 * Default (left-anchored): label sits on the left, a hairline extends to
 * the right edge of the parent. Used for sections that lead into
 * left-aligned content (timeline, manifesto, ribbons).
 *
 * When `center` is true, the label is flanked by a hairline on each side
 * and centered horizontally. Used for the centered editorial blocks
 * (The work, AI in the workflow, Purpose & Usage).
 *
 * Exported so the "Current state" front-matter spread (`now-specimen.tsx`)
 * can reuse the exact same label treatment as the project spreads.
 */
export function SectionLabel({
  children,
  center,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      {center && <span aria-hidden className="h-px flex-1 bg-[#131313]" />}
      <span className="text-[10px] uppercase tracking-[0.4em] text-[#131313]">
        {children}
      </span>
      <span aria-hidden className="h-px flex-1 bg-[#131313]" />
    </div>
  );
}

/**
 * FactCell — one column in the timeline / status strip.
 *
 * Visual treatment:
 *   - Tiny uppercase tracked label on top, hairline above it (the row's
 *     border-t handles that part).
 *   - Big editorial value below, set in font-light to match the headline.
 *   - Optional status dot in front of the value when `dotColor` is set.
 *   - Optional left divider on sm+ so the columns are separated by
 *     vertical hairlines (mirrors the row's top border).
 *   - `emphasize` swaps to italic to distinguish "Ongoing" from a date.
 *
 * Exported so other work-surface spreads ("Current state") can render
 * the same fact strip with different labels.
 */
export function FactCell({
  label,
  value,
  dotColor,
  emphasize,
  withLeftDivider,
}: {
  label: string;
  value: string;
  dotColor?: string;
  emphasize?: boolean;
  withLeftDivider?: boolean;
}) {
  return (
    <div
      className={`relative px-2 py-6 sm:px-6 sm:py-8 ${
        withLeftDivider
          ? "border-t sm:border-t-0 sm:border-l border-[#131313]"
          : ""
      }`}
    >
      <span className="block text-[10px] uppercase tracking-[0.4em] text-[#131313]/75 mb-3">
        {label}
      </span>
      <span
        className={`flex items-center gap-3 text-[#131313] font-light tracking-tight ${
          emphasize ? "italic" : ""
        }`}
        style={{ fontSize: "clamp(28px, 4.5vw, 48px)", lineHeight: 1 }}
      >
        {dotColor && (
          <span
            aria-hidden
            className="inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: dotColor }}
          />
        )}
        <span>{value}</span>
      </span>
    </div>
  );
}

/**
 * DomeCta — self-contained reveal modeled on the hero's inverse-T.
 *
 *   |        ← stem
 * ──┴──      ← bottom cap of the inverse-T
 *   stage    ← hover here to raise the dome
 *
 * Resting state now shows BOTH the action label (e.g. "Open website")
 * and the destination domain (e.g. "gnosrecords.com") so the click
 * target reads as a real link without hovering. On hover/focus the
 * dark dome rises, the resting block fades, and the same label + domain
 * slide into the dome from below in cream-on-dark.
 *
 * Note: this button is a real `<a>` so right-click "Open in new tab",
 * keyboard activation, and the browser status bar URL preview all work
 * the way users expect from a website link.
 */
function DomeCta({
  label,
  subLabel,
  onClick,
}: {
  label: string;
  subLabel?: string;
  onClick: () => void;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="flex w-full max-w-[420px] flex-col items-center">
      <div
        className={`w-px bg-[#131313] transition-opacity duration-500 ease-out h-12 sm:h-16 ${
          active ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden
      />
      <div
        className={`h-px w-full max-w-[360px] bg-[#131313] transition-opacity duration-500 ease-out ${
          active ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden
      />

      <button
        type="button"
        onClick={onClick}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        aria-label={subLabel ? `${label} — ${subLabel}` : label}
        className="relative h-[170px] sm:h-[200px] w-full max-w-[360px] cursor-pointer overflow-hidden bg-transparent"
      >
        {/* Resting state — clear two-line CTA: action on top, destination
            underneath. Sized large enough to read as a real link, not as
            a hint. */}
        <span
          className={`absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 transition-opacity duration-300 ${
            active ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="text-[#131313] uppercase tracking-[0.22em] text-sm sm:text-base font-light">
            {label}&nbsp;<span aria-hidden>→</span>
          </span>
          {subLabel && (
            <span className="text-[#131313]/70 text-xs sm:text-sm tracking-[0.04em] font-light">
              {subLabel}
            </span>
          )}
        </span>

        <svg
          viewBox="0 0 100 56"
          preserveAspectRatio="xMidYMid meet"
          className={`absolute inset-x-0 bottom-0 w-full transition-transform duration-700 ease-out ${
            active ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ height: "100%" }}
          aria-hidden
        >
          <circle cx="50" cy="50" r="50" fill="#131313" />
        </svg>

        {/* CTA inside the rising dome — mirrors the resting state in
            cream-on-dark so the destination stays visible at every
            stage of the interaction. */}
        <span
          className={`absolute inset-x-0 bottom-5 sm:bottom-7 flex flex-col items-center gap-1.5 px-4 transition-transform duration-700 ease-out ${
            active ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <span className="text-[#f2f0ea] uppercase tracking-[0.2em] text-sm sm:text-base">
            {label}&nbsp;<span aria-hidden>→</span>
          </span>
          {subLabel && (
            <span className="text-[#f2f0ea]/75 text-xs sm:text-sm tracking-[0.04em] font-light">
              {subLabel}
            </span>
          )}
        </span>
      </button>
    </div>
  );
}
