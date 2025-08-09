// components/HeroSection.tsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <section className="flex items-center justify-center pt-20">
        {/* Hero section with background image and text overlay */}
        <div className="relative w-full flex justify-center items-center">
          {/* Background image */}
          <div className="absolute inset-0 w-full">
            <img
              src="images/heroina.HEIC"
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
            className="relative z-10 text-[70px] text-center text-[#f2f0ea] tracking-wide py-50 top-10"
          >
            {t("title", "Let's create")}
          </motion.h1>

          {/* Inverse T-shape overlay */}
          <div className="absolute inset-0 flex justify-center items-end pointer-events-none">
            {/* Vertical line (over image) */}
            <div className="relative">
              <div className="w-px h-15 bg-[#f2f0ea] relative z-20 top-10 mb-0"></div>

              {/* Vertical line continues below */}
              <div className="w-px h-30 bg-[#131313] absolute left-0 top-20"></div>

              {/* Horizontal line */}
              <div className="w-180 h-px bg-[#131313] absolute top-50 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content section below hero */}
      <div className="flex flex-col items-center mt-40 ">
        {/* Paragraph section */}
        <p className="text-center text-[50px] font-medium text-[#131313] max-w-2xl leading-relaxed">
          {t("uptime", "Uptime since 2021")}
        </p>

        <p className="text-center text-[20px] font-light text-[#131313] leading-relaxed max-w-xl mb-15">
          {t(
            "uptimeDesc",
            "Dedicated to building beautiful user experiences through consistency, thoughtful interfaces, and clean code."
          )}
        </p>

        {/* Regular T-shape */}
        <div className="relative flex flex-col items-center">
          {/* Horizontal line (top of T) */}
          <div className="w-180 h-px bg-[#131313] mb-0"></div>

          {/* Vertical line (bottom of T) */}
          <div className="w-px h-40 bg-[#131313]"></div>
        </div>
      </div>
    </div>
  );
}
