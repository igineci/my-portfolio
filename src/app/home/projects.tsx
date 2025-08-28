"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { VscLinkExternal } from "react-icons/vsc";

export default function Projects() {
  const projects = [
    {
      title: "UI LAB",
      subtitle: "Interactive Components Gallery",
      description:
        "A living showcase of experimental layouts, components, and UI concepts. Designed as a creative playground where motion, interaction, and design meet.",
      year: "2025",
      image: "images/fp3.jpg",
    },
    {
      title: "REPORTIFY",
      subtitle: "Automated Reporting System",
      description:
        "A backend-driven solution for automating business reports. Fetches, processes, and transforms relational data into JSON reports, then delivers them seamlessly to external APIs for real-time insights.",
      year: "2024",
      image: "images/fp2.jpg",
    },
    {
      title: "CER",
      subtitle: "Exchange Rate Automation",
      description:
        "A scheduling-based system that retrieves and processes daily exchange rates from the National Bank of Serbia. Ensures accurate data synchronization, storage, and accessibility for downstream services.",
      year: "2023",
      image: "images/fp1.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleNext = () => {
    setIsRotating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setIsRotating(false);
    }, 300);
  };

  const handleProjectSelect = (index: number) => {
    if (index !== currentIndex) {
      setIsRotating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsRotating(false);
      }, 300);
    }
  };

  const currentProject = projects[currentIndex];

  // Handles click on the external link icon based on current project
  // Opens the target link in a new tab instead of redirecting
  const handleExternalLinkClick = () => {
    if (currentProject.title === "UI LAB") {
      // Open /explorations in a new tab
      window.open("/explorations", "_blank");
    } else if (currentProject.title === "REPORTIFY") {
      // Open REPORTIFY GitHub in a new tab
      window.open("https://github.com/igineci/reportify", "_blank");
    } else if (currentProject.title === "CER") {
      // Open CER GitHub in a new tab
      window.open("https://github.com/igineci/cer", "_blank");
    }
  };

  return (
    <div className="w-full px-18 relative mb-10">
      <h2 className="text-[70px] tracking-wider pb-6 font-light">PROJECTS</h2>

      <div className="relative border border-[#131313] p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid lg:grid-cols-12 gap-12 items-center"
          >
            {/* Project Image */}
            <div className="lg:col-span-8 relative group overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#dddbd4] to-[#131313] relative overflow-hidden">
                <img
                  src={currentProject.image || "/placeholder.svg"}
                  alt={currentProject.title}
                  className="w-full h-full object-cover opacity-10"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {/* External link icon is now clickable and context-aware */}
                  <motion.button
                    className="w-20 h-20 border border-[#f2f0ea]  flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    aria-label="Go to project link"
                    onClick={handleExternalLinkClick}
                  >
                    <VscLinkExternal className="w-6 h-6 text-[#f2f0ea]" />
                  </motion.button>
                </div>
                {/* Project Counter */}
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {projects.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-3 h-3 transition-colors duration-300 hover:scale-110 ${
                        index === currentIndex ? "bg-[#131313]" : "bg-[#f2f0ea]"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleProjectSelect(index)}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 ">
                <motion.button
                  onClick={handleNext}
                  className="relative w-32 h-32 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Gear Circle */}
                  <motion.div
                    className="absolute inset-0 bg-[#f2f0ea]  backdrop-blur-sm"
                    style={{
                      clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                    animate={{
                      rotate: isRotating ? 45 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />

                  {/* Next Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-[#131313] mr-4 text-sm tracking-[0.2em] "
                      style={{ transform: "rotate(270deg)" }}
                    >
                      NEXT
                    </span>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 group-hover:bg-white/5 transition-colors duration-300"
                    style={{
                      clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                    initial={false}
                  />
                </motion.button>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <motion.p
                  className="text-md tracking-[0.3em] text-[#131313]/50 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentProject.year}
                </motion.p>
                <motion.h3
                  className="text-[50px] text-[#131313] tracking-wider"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentProject.title}
                </motion.h3>
                <motion.p
                  className="text-md text-[#131313]/50 tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentProject.subtitle}
                </motion.p>
              </div>

              <motion.p
                className="text-[#131313] font-light leading-relaxed text-md px-15"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {currentProject.description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
