"use client";

import Header from "../../components/header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GiStarShuriken } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { getProjectsForSurface, projectKey } from "../../data/projects";
import { ProjectSpecimen } from "./project-specimen";
import { NowSpecimen } from "./now-specimen";
import { readWorkNavState, WORK_SECTION_FEATURED } from "./work-nav";

const projects = getProjectsForSurface("work");

function workSectionDomId(section: string) {
  return `work-section-${section}`;
}

export default function WorkPage() {
  const location = useLocation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const nav = readWorkNavState(location.state);
    if (!nav) return;

    setExpandedSection(nav.section);

    const frame = requestAnimationFrame(() => {
      document
        .getElementById(workSectionDomId(nav.section))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.state, location.key]);

  const toggleSection = (sectionName: string) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
  };

  const handleProjectClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="min-h-screen text-[#131313] overflow-hidden relative flex flex-col"
      style={{ backgroundColor: "#f2f0ea" }}
    >
      {/* Content container with same structure as other pages */}
      <div className="relative z-10 flex-grow">
        {/* Header component - consistent across all pages */}
        <Header />

        {/* Main content area with proper spacing for fixed header */}
        <div className="pt-50 px-2 page-content-fade">
          {/* Work page title section with custom background */}
          <div className="relative flex justify-center items-center mb-8 h-[300px]">
            {/* Custom background element with vignette effect */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="relative w-[300px] h-[300px] brightness-110">
                <img
                  src="images/w3.png"
                  alt="Work background"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* WORK text overlay */}
            <h1 className="relative z-10 text-[80px] text-center md:text-[100px] uppercase font-light text-[#333333] leading-tight tracking-wider">
              {t("work", "Work")}
            </h1>
          </div>

          <div className="px-4 sm:px-10">
            <p className="text-[#131313] px-3 sm:px-7 text-2xl sm:text-3xl mb-4 text-left">
              {t("workTitle", "Selected Projects & Portfolio")}
            </p>
            <p className="text-[#131313] px-3 sm:px-7 text-base sm:text-lg mb-10 sm:mb-12 text-left max-w-3xl">
              {t(
                "workDesc",
                "Explore a curated collection of my frontend and development work. Each project represents a unique challenge and creative solution, showcasing attention to detail and innovative thinking."
              )}
            </p>

            <div className="mt-16 px-3 sm:px-7">
              <div
                id={workSectionDomId(WORK_SECTION_FEATURED)}
                className="border-t border-[#131313] mb-0 scroll-mt-28"
              >
                <button
                  onClick={() => toggleSection(WORK_SECTION_FEATURED)}
                  className={`section-header w-full flex justify-between items-center py-10 bg-transparent cursor-pointer ${
                    expandedSection === WORK_SECTION_FEATURED
                      ? "section-expanded"
                      : "border-b border-[#131313]"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <GiStarShuriken
                      className={`star-icon text-[#131313] text-[40px] ${
                        expandedSection === WORK_SECTION_FEATURED
                          ? "expanded"
                          : ""
                      }`}
                    />
                    <span className="text-[#131313] text-2xl font-light">
                      {t("fpTitle", "Current state")}
                    </span>
                  </div>
                  <span className="text-[#131313] text-[40px] font-light transition-transform duration-300">
                    {expandedSection === WORK_SECTION_FEATURED ? "−" : "+"}
                  </span>
                </button>

                {expandedSection === WORK_SECTION_FEATURED && (
                  <div className="px-4 sm:px-8 border-b border-[#131313] animate-slideDown">
                    <NowSpecimen />
                  </div>
                )}
              </div>

              {projects.map((project) => (
                <div
                  key={project.id}
                  id={workSectionDomId(project.id)}
                  className="mb-0 scroll-mt-28"
                >
                  <button
                    onClick={() => toggleSection(project.id)}
                    className={`section-header w-full flex justify-between items-center py-10 bg-transparent cursor-pointer ${
                      expandedSection === project.id
                        ? "section-expanded"
                        : "border-b border-[#131313]"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <GiStarShuriken
                        className={`star-icon text-[40px] ${
                          expandedSection === project.id ? "expanded" : ""
                        }`}
                      />
                      <span className="text-[#131313] text-2xl font-light">
                        {t(projectKey(project.id, "title"))}
                      </span>
                    </div>
                    <span className="text-[#131313] text-[40px] font-light transition-transform duration-300">
                      {expandedSection === project.id ? "−" : "+"}
                    </span>
                  </button>

                  {expandedSection === project.id && (
                    <div className="px-4 sm:px-8 border-b border-[#131313] animate-slideDown">
                      <ProjectSpecimen
                        project={project}
                        onOpen={handleProjectClick}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
