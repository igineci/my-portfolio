// components/HeroSection.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [ctaHover, setCtaHover] = useState(false);
  return (
    <div className="w-full">
      <section className="flex items-center justify-center pt-20">
        {/* Hero section with background image and text overlay */}
        <div className="relative w-full flex justify-center items-center">
          {/* Background image */}
          <div className="absolute inset-0 w-full">
            <img
              src="images/heroina.jpg"
              alt="Hero background"
              className="w-full h-full mt-10 object-cover px-18"
            />
            {/* Vignette overlay - positioned to match image margins/padding and extended height */}
            <div
              className="absolute top-0 left-18 right-18 bottom-[-40px] pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, transparent 30%, rgba(242, 240, 234, 0.3) 60%, rgba(242, 240, 234, 0.8) 100%)`,
              }}
            ></div>
          </div>

          {/* Text overlay */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-4xl md:text-[60px] text-center text-[#f2f0ea] tracking-wide py-50 top-10"
          >
            {t("title", "Let's create")}
          </motion.h1>

          {/* Inverse T-shape overlay */}
          <div
            className={`absolute inset-0 flex justify-center items-end pointer-events-none transition-opacity duration-700 ease-out ${
              ctaHover ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Vertical line (over image) */}
            <div className="relative">
              <div className="w-px h-15 bg-[#f2f0ea] relative z-20 top-10 mb-0"></div>

              {/* Vertical line continues below */}
              <div className="w-px h-30 bg-[#131313] absolute left-0 top-20"></div>

              {/* Horizontal line */}
              <div className="w-151 h-px bg-[#131313] absolute top-50 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content section below hero (hover over the whole hero via group) */}
      <div
        className="flex flex-col items-center mt-25 relative group"
        onMouseEnter={() => setCtaHover(true)}
        onMouseLeave={() => setCtaHover(false)}
      >
        {/* Regular T-shape area */}
        <div className="relative flex flex-col items-center">
          {/* Stage for dome rising between lines */}
          <div className="relative w-151 h-[260px] sm:h-[300px] md:h-[340px] sm:-mt-[60px] md:-mt-[72px] overflow-hidden">
            {/* Centered uptime text between lines (visible until hover) */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none transition-opacity duration-200 ease-out group-hover:opacity-0">
              <span className="text-center text-[40px] md:text-[50px] font-medium text-[#131313] mt-25">
                {t("uptime", "Uptime since 2021")}
              </span>
            </div>

            {/* Black dome via SVG for perfect circle arc */}
            <div
              className={`absolute inset-x-0 bottom-0 flex justify-center transition-transform duration-700 ease-out will-change-transform z-20 pointer-events-none ${
                ctaHover ? "translate-y-0" : "translate-y-full"
              }`}
              aria-hidden
            >
              <svg
                className="w-[190%] h-[180px] sm:h-[280px] md:h-[320px]"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Large circle centered below the stage to show only the arc */}
                <circle cx="500" cy="900" r="800" fill="#131313" />
                {/* Small light cap */}
                <path
                  d="M470 650 A30 30 0 0 1 530 650 L530 650 A30 30 0 0 0 470 650 Z"
                  fill="#f2f0ea"
                />
              </svg>
            </div>

            {/* Simple link text inside the hovered dome */}
            <div
              className={`absolute inset-x-0 bottom-0 flex justify-center transition-transform duration-700 ease-out z-30 ${
                ctaHover ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <button
                onClick={() => navigate("/explorations")}
                className="nav-hover-circle-light mb-10 uppercase tracking-[0.08em] text-[#f2f0ea] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] py-6 px-8 cursor-pointer bg-transparent border-0"
                aria-label="Go to explorations"
              >
                Dive into my creative space
              </button>
            </div>

            {/* Horizontal line (top of T) - must sit above the dome */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-[#131313] z-40"></div>
          </div>

          {/* Vertical line (bottom of T) */}
          <div className="w-px h-40 bg-[#131313]"></div>
        </div>
      </div>
    </div>
  );
}
