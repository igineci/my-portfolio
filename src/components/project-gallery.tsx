"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa6";
import { VscLinkExternal } from "react-icons/vsc";

interface Project {
  title: string;
  descriptionKey: string;
  year: string;
  backgroundImage: string;
  githubUrl: string;
  featured?: boolean;
}

export default function EnhancedProjectGallery() {
  const { t } = useTranslation();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "REPORTIFY",
      descriptionKey: "reportifyPGDesc",
      year: "2024",
      backgroundImage: "/images/reportify.png",
      githubUrl: "https://github.com/igineci/reportify",
      featured: true,
    },
    {
      title: "CER",
      descriptionKey: "cerPGDesc",
      year: "2023",
      backgroundImage: "/images/nbs.png",
      githubUrl: "https://github.com/igineci/cer",
    },
  ];

  const handleProjectClick = (githubUrl: string) => {
    window.open(githubUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 px-18">
      <div className=" mx-auto">
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              onHoverStart={() => setHoveredProject(project.title)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.githubUrl)}
            >
              {/* Project Image Container */}
              <div className="relative aspect-[13/6] overflow-hidden mb-6  bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                {/* Background Image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${project.backgroundImage})` }}
                  animate={{
                    scale: hoveredProject === project.title ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#131313]/100 via-[#131313]/40 to-transparent"
                  animate={{
                    opacity: hoveredProject === project.title ? 0.8 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hover Action */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredProject === project.title ? 1 : 0,
                    scale: hoveredProject === project.title ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 px-6 py-3 bg-[#131313] border-[0.5px] border-[#f2f0ea]">
                    <FaGithub className="w-5 h-5 text-[#f2f0ea]" />
                    <span className="text-[#f2f0ea] font-medium">
                      {t("viewCode", "View Code")}
                    </span>
                    <VscLinkExternal className="w-4 h-4 text-[#f2f0ea]" />
                  </div>
                </motion.div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-[#f2f0ea]/20 backdrop-blur-md text-[#f2f0ea] text-xs font-medium  border-[0.5px] border-[#f2f0ea] ">
                    {project.year}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                {/* Title and Subtitle */}
                <div>
                  <motion.h3
                    className="text-2xl font-bold font-sans tracking-tight mb-2 text-[#131313]"
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {t(project.descriptionKey as "home")}
                </p>

                {/* Action Link */}
                <motion.div
                  className="flex items-center gap-2 text-sm font-bold text-[#131313]"
                  animate={{
                    x: hoveredProject === project.title ? 4 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span>{t("exploreProject", "Explore Project")}</span>
                  <VscLinkExternal className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Projects Link */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#dddbd4] border-[0.5px] border-[#131313] text-[#131313] font-medium "
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              window.open("https://github.com/yourusername", "_blank")
            }
          >
            <FaGithub className="w-5 h-5" />
            {t("viewAllProjects", "View All Projects")}
            <VscLinkExternal className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
