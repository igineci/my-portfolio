// Work Page Component
import Header from "../../components/header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { GiStarShuriken } from "react-icons/gi";
import { BadgeGroup } from "../../components/ui/badge";
import { useTranslation } from "react-i18next";

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
              <div className="relative w-[300px] h-[300px]">
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
                      {t("fp", "Featured Projects")}
                    </span>
                  </div>
                  <span className="text-[#131313] text-[40px] font-light transition-transform duration-300">
                    {expandedSection === "featured" ? "−" : "+"}
                  </span>
                </button>

                {/* Expandable Content Drawer */}
                {expandedSection === "featured" && (
                  <div className=" px-6 mb-10 animate-slideDown ">
                    <div className="space-y-4">
                      <h3 className="text-[#131313] text-2xl font-semibold ">
                        {t("fpTitle", "Featured Projects")}
                      </h3>
                      <p className="text-[#131313] text-xl leading-relaxed mb-4 lg:max-w-[800px] sm:max-w-[400px]">
                        {t(
                          "fpText1",
                          "Since early 2025, I've been working as a leading frontend developer in a product team, where I'm responsible for implementing responsive UI, building reusable components, and collaborating closely with design and backend teams. A curated selection of my most impactful architectural and design projects, showcasing innovative solutions and creative excellence."
                        )}
                      </p>
                      <p className="text-[#131313] text-xl leading-relaxed lg:max-w-[800px] sm:max-w-[400px] mb-10">
                        {t(
                          "fpText2",
                          "The product is currently under development and not yet publicly disclosed, but it involves integrating technology with AI-driven analysis."
                        )}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div className=" border border-[#dddbd4] py-5">
                          <h2 className="text-[#131313] font-semibold  text-center  mb-5 ">
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
                        <div className="border border-[#dddbd4] py-5">
                          <h4 className="text-[#131313] font-semibold text-center mb-5 ">
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
                  <div className=" px-6 pb-20 animate-slideDown">
                    <div className="space-y-4">
                      <p className="text-[#131313] text-base leading-relaxed mb-4">
                        I built this project for Melany Software to automate the
                        process of sending sales reports to Asseco — the system
                        Coca-Cola used for monitoring distributor performance.
                        The reports covered sales, stock, and customer data for
                        a local beverage store that sold Coca-Cola products. I
                        designed and implemented the entire solution
                        independently, including communication with a Polish
                        developer from the receiving API team to ensure full
                        integration.
                      </p>
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
                  <div className="border-b border-[#131313] bg-[#f8f6f0] px-6 py-8 animate-slideDown">
                    <div className="space-y-4">
                      <h3 className="text-[#131313] text-xl font-light mb-4">
                        Conceptual & Experimental Work
                      </h3>
                      <p className="text-[#131313] text-base leading-relaxed mb-4">
                        Explorative design research and conceptual projects that
                        push the boundaries of traditional architectural
                        thinking.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="text-center p-3 bg-white rounded">
                          <div className="text-[#131313] text-2xl mb-2">○</div>
                          <span className="text-[#131313] text-sm">
                            Parametric Design
                          </span>
                        </div>
                        <div className="text-center p-3  bg-white rounded">
                          <div className="text-[#131313] text-2xl mb-2">△</div>
                          <span className="text-[#131313] text-sm">
                            Sustainable Materials
                          </span>
                        </div>
                        <div className="text-center p-3 bg-white rounded">
                          <div className="text-[#131313] text-2xl mb-2">□</div>
                          <span className="text-[#131313] text-sm">
                            Spatial Innovation
                          </span>
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
