// Explorations Page Component
import Header from "../../components/header";
import Footer from "../../components/Footer";
import LayoutsContent from "./layouts/content";
import { useState } from "react";
import ExperimentsContent from "./experiments/content";
import ComponentsContent from "./components/content";
import TabDiagram from "../../components/tab-diagram";
import { useTranslation } from "react-i18next";
import ComingSoonCard from "./coming-soon";

export default function ExplorationsPage() {
  const [activeTab, setActiveTab] = useState<
    "layouts" | "components" | "experiments"
  >("components");
  const { t } = useTranslation();

  return (
    <div
      className="min-h-screen text-[#131313] overflow-hidden relative flex flex-col"
      style={{ backgroundColor: "#f2f0ea" }}
    >
      <div className="relative z-10 flex-grow">
        <Header />

        {/* Main content area */}
        <div className="pt-40 px-2 page-content-fade">
          <div className="relative flex flex-col items-center">
            <div className="absolute left-1/2  transform -translate-x-1/2 w-[150px] h-[150px] z-0">
              <img
                src="images/atom.svg"
                alt="Explorations background"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="relative mt-[50px] z-10 text-[40px] text-center font-light text-[#131313] leading-tight tracking-widest ">
              {t("uiLab", "UI LAB")}
            </h1>

            <TabDiagram activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Tab Content Section */}
            <div className="mt-16 px-4 max-w-6xl mx-auto">
              {activeTab === "layouts" && <LayoutsContent />}

              {activeTab === "components" && <ComponentsContent />}

              {activeTab === "experiments" && <ExperimentsContent />}
            </div>
          </div>
        </div>

        <ComingSoonCard />
        <div className="border-b border-[#131313] mx-18 mt-7 mb-8"> </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
