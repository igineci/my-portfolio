export type TabType = "layouts" | "components" | "experiments";

export interface TabDiagramProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}
