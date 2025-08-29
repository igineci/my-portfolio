"use client";

// Work Page Component
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState } from "react";
import { GiStarShuriken } from "react-icons/gi";
import { BadgeGroup } from "../../components/ui/badge";
import { useTranslation } from "react-i18next";
import ReportifyCard from "../../components/ui/reportify-card";

export default function WorkPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { t } = useTranslation();

  const toggleSection = (sectionName: string) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
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
              <div className="relative w-[300px] h-[300px] hover:brightness-110">
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

          {/* Work page content */}
          <div className="px-10">
            <p className="text-[#131313] px-7 text-3xl mb-4 text-left">
              {t("workTitle", "Selected Projects & Portfolio")}
            </p>
            <p className="text-[#131313] px-7 text-lg mb-12 text-left w-[750px]">
              {t(
                "workDesc",
                "Explore a curated collection of my frontend and development work. Each project represents a unique challenge and creative solution, showcasing attention to detail and innovative thinking."
              )}
            </p>
            {/* Interactive Project sections with expandable drawers */}
            <div className="mt-16 px-7">
              {/* Featured Projects Section */}
              <div className="border-t border-[#131313] border-b mb-0">
                {/* Section Header - Clickable */}
                <button
                  onClick={() => toggleSection("featured")}
                  className={`section-header w-full flex justify-between items-center py-10 bg-transparent border-none cursor-pointer border-b border-[#131313] ${
                    expandedSection === "featured" ? "section-expanded" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <GiStarShuriken
                      className={`star-icon text-[#131313] text-[40px] ${
                        expandedSection === "featured" ? "expanded" : ""
                      }`}
                    />
                    <span className="text-[#131313] text-2xl font-light">
                      {t("fpTitle", "What I'm working on?")}
                    </span>
                  </div>
                  <span className="text-[#131313] text-[40px] font-light transition-transform duration-300">
                    {expandedSection === "featured" ? "−" : "+"}
                  </span>
                </button>

                {/* Expandable Content Drawer */}
                {expandedSection === "featured" && (
                  <div className="px-6 mb-10 animate-slideDown">
                    <div className="space-y-6">
                      {/* Two-row layout: SVG left, paragraph right */}
                      <div className="flex flex-col gap-8 my-8 px-4">
                        {/* Row 1: fp1.svg and first paragraph */}
                        <div className="flex items-center gap-8">
                          <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                            <img
                              src="images/fp/fp1.svg"
                              alt="Performance"
                              className="w-full h-full object-contain hover:scale-110 hover:brightness-110 transition-transform duration-300"
                            />
                          </div>
                          <p className="text-[#131313] text-xl leading-relaxed max-w-3xl">
                            {t(
                              "fpText1",
                              "Since early 2025, I've been working as a leading frontend developer in a product team, where I'm responsible for implementing responsive UI, building reusable components, and collaborating closely with design and backend teams. A curated selection of my most impactful architectural and design projects, showcasing innovative solutions and creative excellence."
                            )}
                          </p>
                        </div>
                        {/* Row 2: fp2.svg and second paragraph */}
                        <div className="flex items-center gap-8">
                          <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                            <img
                              src="images/fp/fp2.svg"
                              alt="AI Integration"
                              className="w-full h-full object-contain hover:scale-110 hover:brightness-110 transition-transform duration-300"
                            />
                          </div>
                          <p className="text-[#131313] text-xl leading-relaxed max-w-3xl">
                            {t(
                              "fpText2",
                              "The product is currently under development and not yet publicly disclosed, but it involves integrating technology with AI-driven analysis."
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
                        <div className="border border-[#dddbd4] p-6 rounded-lg">
                          <h2 className="text-[#131313] font-semibold text-center mb-5">
                            {t("techStack", "Tech Stack")}
                          </h2>
                          <BadgeGroup
                            items={[
                              "React",
                              "TypeScript",
                              "shadcn/ui",
                              "Tailwind CSS",
                              "Vite",
                              "Framer Motion",
                            ]}
                          />
                        </div>
                        <div className="border border-[#dddbd4] p-6 rounded-lg">
                          <h4 className="text-[#131313] font-semibold text-center mb-5">
                            {t("responsibilities", "Responsibilities")}
                          </h4>
                          <BadgeGroup
                            items={[
                              "UI",
                              "UX",
                              t("accessibility", "Accessibility"),
                              t("performance", "Performance"),
                              t("brainstorming", "Brainstorming"),
                              t("collaboration", "Collaboration"),
                              t("scalability", "Scalability"),
                              t("architecture", "Architecture"),
                              t("modularity", "Modularity"),
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Reportify Section */}
              <div className="mb-0">
                {/* Section Header - Clickable */}
                <button
                  onClick={() => toggleSection("reportify")}
                  className={`section-header w-full flex justify-between items-center py-10 bg-transparent border-none cursor-pointer border-b border-[#131313] ${
                    expandedSection === "reportify" ? "section-expanded" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <GiStarShuriken
                      className={`star-icon text-[40px] ${
                        expandedSection === "reportify" ? "expanded" : ""
                      }`}
                    />
                    <span className="text-[#131313] text-2xl font-light">
                      Reportify (2024)
                    </span>
                  </div>
                  <span className="text-[#131313] text-[40px] font-light transition-transform duration-300">
                    {expandedSection === "reportify" ? "−" : "+"}
                  </span>
                </button>

                {/* Expandable Content Drawer */}
                {expandedSection === "reportify" && (
                  <div className="px-6 mb-20 animate-slideDown">
                    <div className="space-y-6">
                      <p className="text-[#131313] text-xl leading-relaxed max-w-4xl">
                        Reportify is an automation tool that generates and
                        delivers business reports directly from a relational
                        database. It transforms raw customer, product, sales,
                        and stock data into structured JSON reports and sends
                        them to external services for further use.
                      </p>
                      {/* Symmetric 2-Text-2 layout for SVGs and text */}
                      <div className="flex items-center justify-center gap-8 my-12 px-4">
                        {/* Left column: 2 SVGs stacked vertically */}
                        <div className="flex flex-col gap-8">
                          <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                            <img
                              src="images/reportify/1.svg"
                              alt="Database Management"
                              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 filter hover:brightness-110"
                            />
                          </div>
                          <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                            <img
                              src="images/reportify/2.svg"
                              alt="Automation"
                              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 filter hover:brightness-110"
                            />
                          </div>
                        </div>
                        {/* Center column: text */}
                        <ReportifyCard />
                        {/* Right column: 2 SVGs stacked vertically */}
                        <div className="flex flex-col gap-8">
                          <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                            <img
                              src="images/reportify/4.svg"
                              alt="API Integration"
                              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 filter hover:brightness-110"
                            />
                          </div>
                          <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                            <img
                              src="images/reportify/5.svg"
                              alt="JSON Processing"
                              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 filter hover:brightness-110"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Design Studies Section */}
              <div className="mb-0 border-t border-[#131313]">
                {/* Section Header - Clickable */}
                <button
                  onClick={() => toggleSection("design")}
                  className={`section-header w-full flex justify-between items-center py-10 bg-transparent border-none cursor-pointer border-b border-[#131313] ${
                    expandedSection === "design" ? "section-expanded" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <GiStarShuriken
                      className={`star-icon text-[#131313] text-[40px] ${
                        expandedSection === "design" ? "expanded" : ""
                      }`}
                    />
                    <span className="text-[#131313] text-2xl font-light">
                      CER (2023)
                    </span>
                  </div>
                  <span className="text-[#131313] text-[40px] font-light transition-transform duration-300">
                    {expandedSection === "design" ? "−" : "+"}
                  </span>
                </button>

                {/* Expandable Content Drawer */}
                {expandedSection === "design" && (
                  <div className="border-b border-[#131313] px-6 py-8 animate-slideDown">
                    <div className="space-y-6">
                      <p className="text-[#131313] text-xl leading-relaxed max-w-4xl mb-6">
                        CER (Customer Experience Research) is a comprehensive
                        platform designed to analyze and improve customer
                        interactions across multiple touchpoints. This project
                        focused on creating intuitive data visualization and
                        user-friendly interfaces for complex analytics.
                      </p>
                      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 my-12 px-4">
                        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                          <img
                            src="images/cer/1.svg"
                            alt="Customer Research"
                            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 filter hover:brightness-110"
                          />
                        </div>
                        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                          <img
                            src="images/cer/2.svg"
                            alt="Data Visualization"
                            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 filter hover:brightness-110"
                          />
                        </div>
                        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                          <img
                            src="images/cer/3.svg"
                            alt="Interface Design"
                            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 filter hover:brightness-110"
                          />
                        </div>
                        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                          <img
                            src="images/cer/4.svg"
                            alt="Touchpoint Analysis"
                            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 filter hover:brightness-110"
                          />
                        </div>
                        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                          <img
                            src="images/cer/5.svg"
                            alt="Platform Integration"
                            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 filter hover:brightness-110"
                          />
                        </div>
                      </div>
                      <p className="text-[#131313] text-xl leading-relaxed max-w-4xl">
                        The platform provides real-time insights into customer
                        behavior patterns, satisfaction metrics, and engagement
                        levels. Through advanced analytics and intuitive
                        dashboards, businesses can make data-driven decisions to
                        enhance their customer experience strategy.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 border border-[#dddbd4] rounded-lg">
                          <h4 className="text-[#131313] font-semibold text-center mb-4">
                            Key Features
                          </h4>
                          <BadgeGroup
                            items={[
                              "Real-time Analytics",
                              "Customer Journey Mapping",
                              "Satisfaction Tracking",
                              "Interactive Dashboards",
                            ]}
                          />
                        </div>
                        <div className="p-6 border border-[#dddbd4] rounded-lg">
                          <h4 className="text-[#131313] font-semibold text-center mb-4">
                            Technologies
                          </h4>
                          <BadgeGroup
                            items={[
                              "React",
                              "D3.js",
                              "Chart.js",
                              "Material-UI",
                              "Node.js",
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
