// components/HeroSection.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────────────────
 * HERO IMAGE HEIGHT — single knob
 *
 * Change these values to make the hero photograph taller or shorter.
 * Width stays fluid (w-full inside cream margins); only the vertical
 * dimension is controlled here. Tailwind responsive classes apply per
 * breakpoint, so you can dial each viewport independently.
 *
 *   mobile <640px  →  h-[…]
 *   sm    ≥640px   →  sm:h-[…]
 *   md    ≥768px   →  md:h-[…]
 *   lg    ≥1024px  →  lg:h-[…]
 *
 * Tip: pixel values (e.g. h-[640px]) feel the most predictable here.
 * ───────────────────────────────────────────────────────────────────────── */
const HERO_HEIGHT = "h-[420px] sm:h-[420px] md:h-[400px] lg:h-[420px]";

export default function HeroSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [ctaHover, setCtaHover] = useState(false);

  return (
    <div className="w-full pt-[88px] md:pt-[120px]">
      {/* ─────────────────────────── Hero image card ───────────────────────────
          Height is controlled by the HERO_HEIGHT constant at the top of the
          file — the headline no longer drives the section height, it just
          centers itself inside the flex parent. */}
      <section className="flex items-center justify-center">
        <div
          className={`relative w-full flex justify-center items-center ${HERO_HEIGHT}`}
        >
          {/* Background image + treatment stack.
              Keeps the original cream side margins (px-4 / sm:px-8 / lg:px-18)
              so the photograph sits inside the same responsive frame as the
              header / work surfaces — only the section height grows. */}
          <div className="absolute inset-0 w-full px-4 sm:px-8 lg:px-18">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="images/andjela.png"
                alt="Andjela"
                loading="eager"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{
                  // Slight downward bias keeps the face well-anchored when the
                  // image gets cropped into a wide letterbox on desktop.
                  willChange: "transform",
                }}
              />

              {/* (1) Beige soft-light wash — pushes the photograph's
                  midtones firmly into the warm beige palette. Higher
                  opacity = stronger beige cast without going muddy. */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[#e8d4ac] opacity-5 mix-blend-soft-light pointer-events-none"
              />

              {/* (1b) Beige screen wash — adds bright warm light over the
                  whole frame using mix-blend-screen, which can only
                  lighten. This is what turns the photograph from "tinted"
                  into "sunlit", and pairs with (1) to deliver the
                  "brighter + beiger" feel. */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[#f0dcae] opacity-0 mix-blend-screen pointer-events-none"
              />

              {/* (1c) Direct beige veil — a subtle additive tint on top of
                  the blend layers so the cast stays consistent in deep
                  shadows where soft-light/screen have less to work with. */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[#e8d4ac] opacity-12 pointer-events-none"
              />

              {/* (2) Cream radial fade at corners — sunlit-Polaroid feel,
                  dissolves the photograph's hard edges into the cream page. */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 90% at 50% 55%, transparent 45%, rgba(242,240,234,0.22) 82%, rgba(242,240,234,0.4) 100%)",
                }}
              />

              {/* (3) Soft top/bottom cream fade — extra softness on top and
                  bottom edges so the image floats inside the page. */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(242,240,234,0.25) 0%, transparent 10%, transparent 86%, rgba(242,240,234,0.3) 100%)",
                }}
              />

              {/* (4) Focal headline halo — a small, contained dark cloud that
                  lives ONLY behind the "Let's create" text so the cream
                  headline stays readable against the bright beige scene.
                  Everything outside this ellipse stays fully bright. */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 42% 26% at 50% 50%, rgba(19,19,19,0.32), rgba(19,19,19,0.12) 55%, transparent 75%)",
                }}
              />
            </div>
          </div>

          {/* Headline — centered inside the flex parent. Height is now
              owned by HERO_HEIGHT (top of file), so the headline only
              needs to worry about typography, not vertical sizing. */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative z-10 text-3xl sm:text-5xl md:text-[36px] lg:text-[44px] text-center text-[#f2f0ea] tracking-[0.04em] font-light"
            style={{
              willChange: "transform, opacity",
            }}
          >
            {t("title", "Let's create")}
          </motion.h1>

          {/* Cream stem — sits ENTIRELY over the image, ending exactly at the
              image's bottom edge. Fades out on hover so it doesn't compete
              with the rising dome's reveal moment. */}
          <div
            className={`absolute inset-x-0 bottom-0 flex justify-center pointer-events-none transition-opacity duration-500 ease-out ${
              ctaHover ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden
          >
            <div className="w-px h-[60px] bg-[#f2f0ea]" />
          </div>
        </div>
      </section>

      {/* ───────────────── Lines + Uptime stage + dome reveal ─────────────────
          Plain flex column so each piece sits exactly where its siblings put
          it — no absolute T-overlay, no math to misalign.

          Visual reading top → bottom:
              |        dark stem (starts right under image) — fades on hover
            ──┴──      bottom cap of upside-down T (⊥)       — fades on hover
            Uptime    centered inside the stage
            ──┬──      top cap of regular T
              |        trail stem continuing into the page

          Hover behaviour:
          The hover handlers live on the STAGE only, not the outer column —
          so only the uptime area triggers the dome. When the cursor enters
          the stage, three things happen simultaneously:
            1. The upper upside-down T (dark stem + ⊥ cap) fades out.
            2. The uptime text fades out.
            3. The black dome rises from below and exposes the CTA, holding
               at "a bit more than half a circle" (dome height ≈ stage height
               and the geometry shows ~56% of the circle's diameter range). */}
      <div className="flex flex-col items-center relative">
        {/* Dark stem — fades out so the rising dome owns the upper space */}
        <div
          className={`w-px h-12 sm:h-16 md:h-20 bg-[#131313] transition-opacity duration-500 ease-out ${
            ctaHover ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden
        />

        {/* Bottom cap of the upside-down T (⊥) — fades with the stem */}
        <div
          className={`w-151 max-w-full h-px bg-[#131313] transition-opacity duration-500 ease-out ${
            ctaHover ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden
        />

        {/* Stage — the ONLY hover trigger. Size matches the dome so the dome
            fits without being clipped at the top. */}
        <div
          className="relative w-151 max-w-full h-[200px] sm:h-[245px] md:h-[280px] lg:h-[310px] overflow-hidden"
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
        >
          {/* Uptime text — centered in the stage, fades on hover */}
          <div
            className={`absolute inset-0 flex items-center justify-center z-30 pointer-events-none transition-opacity duration-200 ease-out ${
              ctaHover ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-center text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] font-medium text-[#131313]">
              {t("uptime", "Uptime since 2021")}
            </span>
          </div>

          {/* Black dome — rises like a sun on hover. The viewBox shows the
              upper ~56% of a perfect circle (apex at top center, chord just
              past the equator at the bottom), so the rendered shape reads
              as "a bit more than half a circle". The element's width is
              tuned to comfortably contain the CTA text inside. */}
          <div
            className={`absolute inset-x-0 bottom-0 flex justify-center transition-transform duration-700 ease-out will-change-transform z-20 pointer-events-none ${
              ctaHover ? "translate-y-0" : "translate-y-full"
            }`}
            aria-hidden
          >
            <svg
              className="w-[360px] h-[200px] sm:w-[440px] sm:h-[245px] md:w-[500px] md:h-[280px] lg:w-[560px] lg:h-[310px]"
              viewBox="0 0 100 56"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="50" cy="50" r="50" fill="#131313" />
            </svg>
          </div>

          {/* CTA inside the revealed dome — sits in the lower portion of the
              dome where it's at its widest. */}
          <div
            className={`absolute inset-x-0 bottom-0 flex justify-center transition-transform duration-700 ease-out z-30 ${
              ctaHover ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <button
              onClick={() => navigate("/explorations")}
              className="nav-hover-circle-light mb-5 sm:mb-7 md:mb-9 uppercase tracking-[0.08em] text-[#f2f0ea] text-[14px] sm:text-[18px] md:text-[22px] lg:text-[24px] py-4 sm:py-5 px-6 sm:px-8 cursor-pointer bg-transparent border-0"
              aria-label="Go to explorations"
            >
              Dive into my creative space
            </button>
          </div>
        </div>

        {/* Top cap of the regular T — stays put, even on hover */}
        <div className="w-151 max-w-full h-px bg-[#131313]" />

        {/* Trail stem — continues into the page, intentionally extends past
            the viewport fold on shorter screens to invite scrolling */}
        <div className="w-px h-24 sm:h-32 md:h-40 bg-[#131313]" />
      </div>
    </div>
  );
}
