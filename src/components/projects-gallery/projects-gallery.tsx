"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { VscLinkExternal } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

import {
  projectKey,
  projectHighlightKey,
  type Project,
} from "../../data/projects";

export interface ProjectsGalleryProps {
  /** Projects to render. Selection (e.g. by surface) is the caller's concern. */
  projects: readonly Project[];
  /** Optional gallery heading; defaults to the translated "projectsTitle". */
  heading?: string;
}

/**
 * How long the decorative rotation/registration animation should "appear"
 * rotating after a navigation. The content swap is NOT gated on this — the
 * cosmetic cue runs in parallel with the new card fade-in.
 */
const ROTATION_VISUAL_MS = 600;

const PANEL_EXIT = { duration: 0.18, ease: "easeIn" as const };
const PANEL_ENTER = { duration: 0.32, ease: "easeOut" as const };
const IMAGE_FADE = { duration: 0.4, ease: "easeOut" as const };

const pad2 = (n: number) => String(n).padStart(2, "0");

export default function ProjectsGallery({ projects, heading }: ProjectsGalleryProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const rotationTimerRef = useRef<number | null>(null);

  // Refs used to dynamically toggle `data-lenis-prevent` so that the
  // page-level Lenis smooth-scroll engine is bypassed in exactly the right
  // place per viewport — see effect below.
  const outerScrollRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLElement>(null);

  const total = projects.length;
  const safeIndex = total === 0 ? 0 : currentIndex % total;
  const currentProject = projects[safeIndex];

  const clearRotationTimer = useCallback(() => {
    if (rotationTimerRef.current !== null) {
      window.clearTimeout(rotationTimerRef.current);
      rotationTimerRef.current = null;
    }
  }, []);

  useEffect(() => clearRotationTimer, [clearRotationTimer]);

  const triggerRotationCue = useCallback(() => {
    setIsRotating(true);
    clearRotationTimer();
    rotationTimerRef.current = window.setTimeout(() => {
      setIsRotating(false);
      rotationTimerRef.current = null;
    }, ROTATION_VISUAL_MS);
  }, [clearRotationTimer]);

  const goTo = useCallback(
    (nextIndex: number) => {
      if (total === 0) return;
      const normalized = ((nextIndex % total) + total) % total;
      if (normalized === safeIndex) return;
      triggerRotationCue();
      setCurrentIndex(normalized);
    },
    [total, safeIndex, triggerRotationCue],
  );

  const handleProjectSelect = useCallback((index: number) => goTo(index), [goTo]);

  const handleExternalLinkClick = useCallback(() => {
    if (!currentProject) return;
    const { href, type } = currentProject.link;
    if (!href) return;
    if (type === "external") {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    if (type === "mailto") {
      // Trigger the OS mail client. Assigning to window.location.href is the
      // most reliable cross-browser way (window.open often gets blocked or
      // briefly flashes a blank tab before handing off to the mail handler).
      window.location.href = href;
      return;
    }
    navigate(href);
  }, [currentProject, navigate]);

  // On desktop (lg+) we want ONLY the right column (project content) to
  // capture wheel events — the left index list should let scroll wheel
  // bubble up to Lenis so the page advances. On smaller viewports the
  // grid stacks, so we fall back to a single scrollable outer container
  // (same behaviour as before).
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(min-width: 1024px)");

    const apply = () => {
      const isDesktop = mql.matches;
      const outer = outerScrollRef.current;
      const right = rightColumnRef.current;
      if (!outer || !right) return;

      if (isDesktop) {
        outer.removeAttribute("data-lenis-prevent");
        right.setAttribute("data-lenis-prevent", "");
      } else {
        outer.setAttribute("data-lenis-prevent", "");
        right.removeAttribute("data-lenis-prevent");
      }
    };

    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  // Preload the upcoming image so the next click renders instantly.
  useEffect(() => {
    if (projects.length < 2) return;
    const nextIndex = (safeIndex + 1) % projects.length;
    const upcoming = projects[nextIndex];
    if (!upcoming?.image) return;
    const img = new Image();
    img.decoding = "async";
    img.src = upcoming.image;
  }, [projects, safeIndex]);

  const titleText = useMemo(
    () => (currentProject ? t(projectKey(currentProject.id, "title")) : ""),
    [currentProject, t],
  );
  const subtitleText = useMemo(
    () => (currentProject ? t(projectKey(currentProject.id, "subtitle")) : ""),
    [currentProject, t],
  );
  const shortDescText = useMemo(
    () => (currentProject ? t(projectKey(currentProject.id, "shortDesc")) : ""),
    [currentProject, t],
  );
  // Falls back to "" when the project has no `purposeUsage` translation
  // (i18next returns the lookup key on miss, which would otherwise render
  // as visible junk). The Purpose & Usage block then renders nothing.
  const purposeUsageText = useMemo(() => {
    if (!currentProject) return "";
    const key = projectKey(currentProject.id, "purposeUsage");
    const value = t(key);
    return value === key ? "" : value;
  }, [currentProject, t]);

  // Per-project CTA label — drives both the specimen tag (top of the card)
  // and the bottom "Explore" button. Falls back to the generic
  // "Explore Project" copy when a project doesn't declare a `ctaKey`.
  const ctaText = useMemo(() => {
    const key = (currentProject?.ctaKey ?? "exploreProject") as "home";
    return t(key, "Explore Project");
  }, [currentProject, t]);

  if (!currentProject) {
    return null;
  }


  return (
    <section
      className="w-full px-4 sm:px-8 lg:px-18 relative flex flex-col h-dvh pt-[92px] md:pt-[136px] lg:pt-[140px] pb-4 sm:pb-6 lg:pb-8"
      aria-label={heading ?? t("projectsTitle", "Projects")}
    >
      {/* Heading — fixed at top of the section */}
      <div className="flex items-end justify-between flex-wrap gap-y-3 pb-4 sm:pb-5 lg:pb-6 flex-none">
        <h2 className="text-3xl sm:text-5xl lg:text-[70px] uppercase tracking-wider font-light text-[#131313] leading-none">
          {heading ?? t("projectsTitle", "Projects")}
        </h2>
      </div>

      {/* Bordered container — fills remaining viewport height, internal scroll */}
      <div className="relative border border-[#131313] bg-[#f2f0ea] flex-1 min-h-0 overflow-hidden">
        {/* Top + bottom scroll-fade hints — the site hides native scrollbars
            globally (index.css), so these soft cream fades indicate when more
            content exists above or below the visible area. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-6 z-10 bg-gradient-to-b from-[#f2f0ea] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-6 z-10 bg-gradient-to-t from-[#f2f0ea] to-transparent"
        />

        {/* Inner content surface.
            On mobile/tablet (stacked layout) this is the actual scroll
            container and carries `data-lenis-prevent` (added at runtime by
            the effect above) so the inner content scrolls natively.
            On desktop (lg+) this becomes a static, non-scrolling frame —
            only the right column scrolls (see below) so that wheel events
            over the left index list bubble up to the site-wide Lenis
            engine and advance the page. */}
        <div
          ref={outerScrollRef}
          className="absolute inset-0 overflow-y-auto lg:overflow-hidden overscroll-contain p-5 sm:p-7 lg:p-10 projects-scroll"
          style={{ scrollPaddingBlock: "1.25rem" }}
          data-lenis-prevent
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:h-full">
          {/* INDEX */}
          <section
            aria-label="Project index"
            className="lg:col-span-5 relative lg:overflow-hidden"
          >

            <ul className="mt-4" role="list">
              {projects.map((project, index) => {
                const isActive = index === safeIndex;
                const projectTitle = t(projectKey(project.id, "title"));
                return (
                  <li key={project.id}>
                    <button
                      type="button"
                      onClick={() => handleProjectSelect(index)}
                      aria-current={isActive ? "true" : undefined}
                      aria-label={`${projectTitle}, ${project.year}`}
                      className={`group relative w-full text-left py-3.5 lg:py-4 cursor-pointer focus:outline-none focus-visible:outline-1 focus-visible:outline-[#131313]/40 transition-colors ${
                        isActive ? "" : "hover:bg-[#131313]/[0.025]"
                      }`}
                    >
                      <div className="flex items-baseline gap-4 lg:gap-6">
                        <span
                          className={`text-[10px] tracking-[0.3em] tabular-nums w-7 shrink-0 transition-colors ${
                            isActive ? "text-[#131313]" : "text-[#131313]/40"
                          }`}
                        >
                          {pad2(index + 1)}
                        </span>

                        <motion.span
                          animate={{ x: isActive ? 4 : 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className={`flex-1 tracking-wider transition-colors leading-tight ${
                            isActive
                              ? "text-[#131313] text-lg lg:text-xl"
                              : "text-[#131313]/65 text-base group-hover:text-[#131313]"
                          }`}
                        >
                          {projectTitle}
                        </motion.span>

                        <span
                          className={`text-[10px] tracking-[0.3em] tabular-nums transition-colors ${
                            isActive ? "text-[#131313]" : "text-[#131313]/40"
                          }`}
                        >
                          {project.year}
                        </span>

                        <span className="w-2.5 h-2.5 shrink-0 relative">
                          {isActive && (
                            <span className="absolute inset-0 rounded-full bg-[#131313]" />
                          )}
                        </span>
                      </div>

                      <span
                        className={`absolute left-0 right-0 bottom-0 h-px transition-colors duration-300 ${
                          isActive ? "bg-[#131313]" : "bg-[#131313]/15"
                        }`}
                        aria-hidden
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* PROJECT CARD — on lg+ this is the sole scroll container.
              `data-lenis-prevent` is added at runtime by the effect above
              (only on desktop) so the inner content scrolls natively while
              Lenis still drives the page scroll everywhere else. */}
          <section
            ref={rightColumnRef}
            aria-label="Selected project"
            className="lg:col-span-7 relative lg:border-l lg:border-[#131313]/15 lg:pl-12 lg:overflow-y-auto lg:overscroll-contain lg:min-h-0 projects-scroll"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: PANEL_EXIT }}
                transition={PANEL_ENTER}
                style={{ willChange: "transform, opacity" }}
                className="space-y-7"
              >
      
                {/* Title + Subtitle + Specimen "Open Case" tag */}
                <header className="flex items-start justify-between gap-4 sm:gap-6">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-3xl sm:text-4xl lg:text-[50px] text-[#131313] tracking-wider font-light leading-[1.05]">
                      {titleText}
                    </h3>
                    <p className="text-sm sm:text-base text-[#131313]/55 tracking-wide mt-2">
                      {subtitleText}
                    </p>
                  </div>

                  {/* Specimen tag — secondary entry point to the live project.
                      Echoes the corner-bracket registration marks of the
                      ImageSpecimen so it reads as part of the catalog
                      language, not a generic button. */}
                  <motion.button
                    type="button"
                    onClick={handleExternalLinkClick}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
                    aria-label={ctaText}
                    className="group relative inline-flex shrink-0 items-center gap-2 self-start px-3.5 py-2 mt-1 uppercase tracking-[0.3em] text-[10px] text-[#131313] cursor-pointer bg-transparent overflow-hidden focus:outline-none focus-visible:outline-1 focus-visible:outline-[#131313]/40"
                  >
                    {/* Ink-fill wipe */}
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-[#131313] translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out"
                    />

                    {/* Corner brackets — match ImageSpecimen registration marks */}
                    <span
                      aria-hidden
                      className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#131313] group-hover:border-[#f2f0ea] transition-colors duration-300 z-10"
                    />
                    <span
                      aria-hidden
                      className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#131313] group-hover:border-[#f2f0ea] transition-colors duration-300 z-10"
                    />
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#131313] group-hover:border-[#f2f0ea] transition-colors duration-300 z-10"
                    />
                    <span
                      aria-hidden
                      className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#131313] group-hover:border-[#f2f0ea] transition-colors duration-300 z-10"
                    />

                    <span className="relative z-20 group-hover:text-[#f2f0ea] transition-colors duration-300">
                      {ctaText}
                    </span>
                    <VscLinkExternal
                      className="relative z-20 w-3 h-3 group-hover:text-[#f2f0ea] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </motion.button>
                </header>

                {/* Image specimen + short description */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 lg:gap-7 items-start">
                  <div className="sm:col-span-5">
                    <ImageSpecimen
                      src={currentProject.image}
                      alt={titleText}
                      isRotating={isRotating}
                      idKey={currentProject.id}
                    />
                  </div>

                  <p className="sm:col-span-7 text-[#131313] font-light leading-relaxed text-base">
                    {shortDescText}
                  </p>
                </div>

                {/* Purpose & Usage — production context for recruiters / clients.
                    Mirrors the Stack / Highlights spec-sheet rhythm but holds a
                    distilled "what it does + where it lives" pair so the value
                    of each project is legible at a glance. */}
                {purposeUsageText && (
                  <div>
                    <SectionLabel withRule>
                      {t("purposeUsageLabel", "Purpose & Usage")}
                    </SectionLabel>
                    <p className="mt-3 text-sm text-[#131313]/85 leading-relaxed tracking-wide">
                      {purposeUsageText}
                    </p>
                  </div>
                )}

                {/* Stack */}
                {currentProject.stack && currentProject.stack.length > 0 && (
                  <div>
                    <SectionLabel withRule>Stack</SectionLabel>
                    <p className="mt-3 text-sm text-[#131313]/85 leading-relaxed tracking-wide">
                      {currentProject.stack.map((entry, i) => (
                        <span key={entry} className="inline-block">
                          <span>{entry}</span>
                          {i < currentProject.stack!.length - 1 && (
                            <span className="mx-2 text-[#131313]/30">·</span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                )}

                {/* Highlights */}
                {currentProject.highlights &&
                  currentProject.highlights.length > 0 && (
                    <div>
                      <SectionLabel withRule>Highlights</SectionLabel>
                      <ul className="mt-3 space-y-1.5">
                        {currentProject.highlights.map((highlight) => (
                          <li
                            key={highlight.key}
                            className="flex items-start gap-3 text-sm text-[#131313]/85 tracking-wide"
                          >
                            <span
                              aria-hidden
                              className="mt-0.5 text-[#131313]/55 select-none"
                            >
                              →
                            </span>
                            <span>
                              {t(
                                projectHighlightKey(
                                  currentProject.id,
                                  highlight.key,
                                ),
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Explore CTA */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={handleExternalLinkClick}
                    className="group relative inline-flex items-center gap-3 border border-[#131313] text-[#131313] uppercase tracking-[0.22em] text-xs px-6 py-3.5 overflow-hidden cursor-pointer bg-transparent"
                    aria-label={ctaText}
                  >
                    <span className="absolute inset-0 bg-[#131313] translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" />
                    <span className="relative z-10 group-hover:text-[#f2f0ea] transition-colors duration-300">
                      {ctaText}
                    </span>
                    <VscLinkExternal className="relative z-10 w-3.5 h-3.5 group-hover:text-[#f2f0ea] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </section>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Helper sub-components ---------------------- */

interface SectionLabelProps {
  children: React.ReactNode;
  withRule?: boolean;
}

function SectionLabel({ children, withRule = false }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#131313]/55 whitespace-nowrap">
        {children}
      </span>
      {withRule && <span className="flex-1 h-px bg-[#131313]/15" />}
    </div>
  );
}

interface ImageSpecimenProps {
  src: string;
  alt: string;
  isRotating: boolean;
  idKey: string;
}

function ImageSpecimen({ src, alt, isRotating, idKey }: ImageSpecimenProps) {
  return (
    <div className="relative aspect-[4/3] border border-[#131313]/25 overflow-hidden bg-[#f2f0ea]">
      {/* Decorative rotating clip-path frame */}
      <motion.div
        className="absolute -inset-[18%] border border-[#131313]/15 pointer-events-none"
        animate={{ rotate: isRotating ? 180 : 0 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        style={{
          clipPath:
            "polygon(10% 0%, 90% 8%, 100% 60%, 78% 100%, 14% 86%, 0% 34%)",
          willChange: "transform",
        }}
      />

      <AnimatePresence initial={false}>
        <motion.img
          key={idKey}
          src={src || "/placeholder.svg"}
          alt={alt}
          loading="eager"
          decoding="async"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.92, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={IMAGE_FADE}
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
          style={{ willChange: "opacity, transform" }}
        />
      </AnimatePresence>

      {/* Cream wash to keep the image inside the editorial palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f2f0ea]/40 via-transparent to-[#131313]/10 pointer-events-none" />

      {/* Scan line */}
      <motion.div
        className="absolute inset-x-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(19,19,19,0.35), transparent)",
        }}
        initial={{ top: "0%" }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
      />

      {/* Specimen corner brackets */}
      <span className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#131313]/70" />
      <span className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#131313]/70" />
      <span className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#131313]/70" />
      <span className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#131313]/70" />
    </div>
  );
}

