import { useTranslation } from "react-i18next";
import { type TabDiagramProps, type TabType } from "./types";

const tabs: { key: TabType }[] = [
  { key: "layouts" },
  { key: "components" },
  { key: "experiments" },
];

export default function TabDiagram({
  activeTab,
  onTabChange,
}: TabDiagramProps) {
  const { t } = useTranslation();

  return (
    <div className="w-full px-16 max-w-6xl mx-auto mt-10">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-10 bg-[#131313] top-37" />

      {/* Horizontal line container */}
      <div className="flex justify-between border-t border-[#131313] mt-8 relative">
        {tabs.map(({ key }) => (
          <div key={key} className="w-1/3 relative flex justify-center">
            {/* Vertical line down from horizontal */}
            <div className="absolute top-0 h-9 w-px bg-[#131313]" />
          </div>
        ))}
      </div>

      {/* Circles + Buttons */}
      <div className="grid grid-cols-3 pt-10">
        {tabs.map(({ key }) => (
          <div
            key={key}
            className="flex flex-col items-center text-center group"
          >
            {/* Circle */}
            <div
              className={`w-2 h-2 rounded-full mb-3 transition-colors duration-30 group-hover:bg-[#131313] ${
                activeTab === key ? "bg-[#131313]" : "bg-[#131313]/40"
              }`}
            />

            {/* Button */}
            <button
              onClick={() => onTabChange(key)}
              className={`text-[18px] text-[#131313] font-light tracking-wider uppercase bg-transparent border-none group-hover:text-[#131313] cursor-pointer ${
                activeTab === key ? "text-[#131313]" : "text-[#131313]/40"
              }`}
            >
              {t(key as any, key.charAt(0).toUpperCase() + key.slice(1))}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
