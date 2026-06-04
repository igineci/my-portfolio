export type TabType = "components" | "casestudies" | "experiments";

export interface TabDiagramProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}
