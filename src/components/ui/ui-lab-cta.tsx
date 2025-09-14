"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function UiLabCta() {
  const navigate = useNavigate();

  return (
    <section className="w-full px-18 my-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="group relative w-full border border-[#131313] bg-[#dddbd4] overflow-hidden cursor-pointer"
        onClick={() => navigate("/explorations")}
        role="link"
        aria-label="Check out my UI LAB"
      >
        {/* Subtle sheen animation */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex items-center justify-between px-8 md:px-12 py-10 md:py-14">
          <p className="text-xl md:text-2xl lg:text-3xl text-[#131313] tracking-wide">
            Curious about how I experiment with UI?{' '}
            <span className="underline underline-offset-4 decoration-[#131313]/50">
              Check out my UI LAB
            </span>{' '}
            <motion.span
              aria-hidden
              className="inline-block align-middle text-2xl md:text-3xl lg:text-4xl text-[#131313]"
              whileHover={{ x: 6 }}
            >
              →
            </motion.span>
          </p>
        </div>

        {/* Bottom border accent that expands on hover */}
        <motion.div
          className="absolute left-0 bottom-0 h-[2px] bg-[#131313]"
          initial={{ width: "20%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </motion.div>
    </section>
  );
}
