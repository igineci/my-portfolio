"use client";

import { motion, type Easing } from "framer-motion";
import { GiStarShuriken } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { FactCell, SectionLabel } from "./project-specimen";

/**
 * NowSpecimen — the editorial spread that fills the expanded
 * "Current state" accordion at the top of /work.
 *
 * It is the front-matter sibling to ProjectSpecimen: same visual
 * vocabulary (year watermark, meta ribbon, big headline, hairline
 * subtitle, FactCell strip, manifesto with star markers, drop-cap
 * pull, hairline pill strip), but the content is about Andjela instead
 * of any single project. The intent is a one-screen "right now" status
 * for any visitor evaluating whether to reach out.
 *
 * All copy comes from i18n so the section stays bilingual and editable
 * without touching code. The structure of the content is:
 *
 *   1. Year watermark — current year, faint
 *   2. Meta ribbon — anchor hairline only
 *   3. Headline (role) + subtitle (one-line summary)
 *   4. FactCell strip — Shipping since · Role · Availability · Based in
 *   5. At-a-glance manifesto with star markers
 *   6. Practice — centered drop-cap pull
 *   7. Open to — hairline pill strip listing collaboration types
 */
const EASE: Easing = [0.22, 1, 0.36, 1];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: EASE, delay },
  } as const;
}

/**
 * The five manifesto bullets shown under "At a glance". Each entry
 * carries a localized i18n key + a fallback string so the section still
 * renders meaningful copy even before translations are filled in.
 */
const MANIFESTO_KEYS = [
  ["nowManifesto1", "Frontend engineering with a designer's eye"],
  ["nowManifesto2", "React, TypeScript, Angular — product UI at scale"],
  ["nowManifesto3", "Editorial design language, motion, performance"],
  ["nowManifesto4", "Currently maintaining GNOS Records as a living visual identity"],
] as const;

/**
 * Categories listed in the "Open to" hairline strip. Same i18n pattern
 * as the manifesto. Order matters — read like a sentence.
 */
const OPEN_TO_KEYS = [
  ["openToContract", "Contract"],
  ["openToFreelance", "Freelance"],
  ["openToDesignEng", "Design-engineering collaboration"],
  ["openToFullTime", "Full-time"],
] as const;

export function NowSpecimen() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear().toString();

  return (
    <div className="relative overflow-hidden pt-10 sm:pt-14 pb-14 sm:pb-16">
      {/* (1) Year watermark — current year, faint. Mirrors the same
          decorative anchor used inside ProjectSpecimen so the front
          matter feels like part of the same magazine spread. */}
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
          {currentYear}
        </span>
      </motion.div>

      {/* (2) Meta ribbon — anchor hairline only. */}
      <motion.div
        {...fadeUp(0)}
        className="relative z-10 mb-10 flex items-center justify-between px-1 text-[#131313]"
      >
        <div className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.4em]">
          <span aria-hidden className="inline-block h-px w-8 bg-[#131313]" />
          <span>{t("nowMeta", "Andjela · now")}</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.4em]">
          <span>{currentYear}</span>
          <span aria-hidden className="inline-block h-px w-8 bg-[#131313]" />
        </div>
      </motion.div>

      {/* (3) Headline — role line. Same clamp() sizing as project
          spreads so the front matter shares the same vertical rhythm. */}
      <motion.h3
        {...fadeUp(0.06)}
        className="relative z-10 break-words font-light uppercase leading-[0.92] tracking-[-0.015em] text-[#131313]"
        style={{ fontSize: "clamp(40px, 9vw, 132px)" }}
      >
        {t("nowHeading", "Frontend Engineer")}
      </motion.h3>

      {/* (4) Subtitle — one-line summary, small-caps tracked, bracketed
          by hairlines. */}
      <motion.div
        {...fadeUp(0.12)}
        className="relative z-10 mt-6 mb-14 flex items-center gap-4"
      >
        <span aria-hidden className="hidden sm:inline-block h-px w-12 bg-[#131313]" />
        <p className="text-[#131313]/85 text-[11px] sm:text-sm uppercase tracking-[0.32em]">
          {t("nowSubtitle", "Shipping editorial product UI")}
        </p>
        <span aria-hidden className="h-px flex-1 bg-[#131313]/25" />
      </motion.div>

      {/* (5) FACT STRIP — four columns showing the credibility signals
          that matter most to a hiring reader. Same FactCell component
          used by the timeline strip on project spreads so the look is
          identical. */}
      <motion.div {...fadeUp(0.18)} className="relative z-10 mb-16">
        <SectionLabel>{t("nowFactsLabel", "Status report")}</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#131313]">
          <FactCell
            label={t("nowShippingLabel", "Shipping since")}
            value={t("nowShippingValue", "2021")}
          />
          <FactCell
            label={t("nowRoleLabel", "Role")}
            value={t("nowRoleValue", "Medior Frontend Engineer")}
            withLeftDivider
          />
          <FactCell
            label={t("nowAvailLabel", "Availability")}
            value={t("nowAvailValue", "Open to work")}
            dotColor="#0f8f60"
            withLeftDivider
          />
          <FactCell
            label={t("nowBasedLabel", "Based in")}
            value={t("nowBasedValue", "Belgrade")}
            withLeftDivider
          />
        </div>
      </motion.div>

      {/* (6) AT A GLANCE — manifesto of personal facts marked by the
          same shuriken used on the section rows. Mirrors the highlights
          list inside ProjectSpecimen. */}
      <motion.div {...fadeUp(0.24)} className="relative z-10 mb-16">
        <SectionLabel>{t("nowManifestoLabel", "At a glance")}</SectionLabel>
        <ol className="relative space-y-5 pl-8">
          <span
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-[#131313]/35"
          />
          {MANIFESTO_KEYS.map(([key, fallback]) => (
            <li key={key} className="relative">
              <span
                aria-hidden
                className="absolute -left-8 top-[2px] inline-flex h-4 w-4 items-center justify-center bg-[#f2f0ea]"
              >
                <GiStarShuriken className="text-[14px] text-[#131313]" />
              </span>
              <p className="text-base sm:text-lg leading-snug text-[#131313]">
                {t(key as "home", fallback)}
              </p>
            </li>
          ))}
        </ol>
      </motion.div>

      {/* (7) PRACTICE — centered drop-cap editorial pull, max-w-3xl +
          mx-auto, same treatment as "The work" inside project spreads. */}
      <motion.div
        {...fadeUp(0.3)}
        className="relative z-10 mb-14 max-w-3xl mx-auto"
      >
        <SectionLabel center>{t("nowPracticeLabel", "Practice")}</SectionLabel>
        <p className="project-specimen-prose text-base sm:text-lg lg:text-xl leading-[1.75] text-[#131313]">
          {t(
            "nowPractice",
            "I build frontend systems where expressive interaction, strong architecture, and maintainability coexist. Every case I take on is designed as a digital artifact: cinematic layers, abstract motion, and brutal typography that still remain readable and conversion-aware. The current portfolio wave maps product work, platform migration, and performance optimization into one coherent visual narrative.",
          )}
        </p>
      </motion.div>

      {/* (8) OPEN TO — collaboration types separated by middle dots,
          centered, hairline-flanked label. Reads as a sentence so the
          available work modes are obvious at a glance. */}
      <motion.div {...fadeUp(0.36)} className="relative z-10 max-w-3xl mx-auto">
        <SectionLabel center>{t("openToLabel", "Open to")}</SectionLabel>
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-base sm:text-lg text-[#131313] text-center">
          {OPEN_TO_KEYS.map(([key, fallback], index) => (
            <span key={key} className="inline-flex items-center gap-3">
              {index > 0 && (
                <span aria-hidden className="text-[#131313]/40 select-none">
                  ·
                </span>
              )}
              <span>{t(key as "home", fallback)}</span>
            </span>
          ))}
        </p>
      </motion.div>
    </div>
  );
}
