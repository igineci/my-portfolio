import { useTranslation } from "react-i18next";
import { type TabDiagramProps, type TabType } from "./types";

const tabs: { key: TabType }[] = [
  { key: "components" },
  { key: "casestudies" },
  { key: "experiments" },
];

export default function TabDiagram({
  activeTab,
  onTabChange,
}: TabDiagramProps) {
  const { t } = useTranslation();

  return (
    <div className="mx-auto mt-8 w-full max-w-6xl px-4 sm:mt-12 sm:px-8 md:px-16">
      <div
        className="relative mx-auto w-full max-w-[17rem] overflow-hidden sm:max-w-xs md:max-w-2xl"
        aria-label="UI Lab sections"
      >
        <div className="flex justify-center" aria-hidden>
          <div className="h-6 w-px bg-[#131313] sm:h-8 md:h-10" />
        </div>

        <div className="relative flex justify-between border-t border-[#131313]">
          {tabs.map(({ key }) => (
            <div key={key} className="relative flex w-1/3 justify-center">
              <div
                className="absolute top-0 h-5 w-px bg-[#131313] sm:h-7 md:h-9"
                aria-hidden
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 pt-6 sm:pt-8 md:pt-10">
          {tabs.map(({ key }) => (
            <div
              key={key}
              className="group flex flex-col items-center px-0.5 text-center sm:px-1"
            >
              <div
                className={`mb-2 h-1.5 w-1.5 rounded-full transition-colors duration-300 sm:mb-3 sm:h-2 sm:w-2 ${
                  activeTab === key
                    ? "bg-[#131313]"
                    : "bg-[#131313]/40 group-hover:bg-[#131313]/70"
                }`}
                aria-hidden
              />

              <button
                type="button"
                onClick={() => onTabChange(key)}
                className={`cursor-pointer border-none bg-transparent font-light uppercase tracking-[0.12em] transition-colors duration-300 sm:tracking-wider ${
                  activeTab === key
                    ? "text-[#131313]"
                    : "text-[#131313]/40 group-hover:text-[#131313]/70"
                } text-[10px] leading-tight sm:text-xs md:text-[18px] md:tracking-wider`}
              >
                {t(key as string, key.charAt(0).toUpperCase() + key.slice(1))}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
