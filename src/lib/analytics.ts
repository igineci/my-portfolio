import { track } from "@vercel/analytics";

export type CvDownloadSource = "contact" | "about";

export type ContactFormSource = "home";

export type MailtoSource = "home_contact" | "contact_socials" | "footer";

export type SocialPlatform = "linkedin" | "github";

export type SocialSource = "home_contact" | "contact_socials";

export type ProjectLinkType = "external" | "internal" | "mailto";

export type ProjectSurface = "home_gallery" | "work_specimen";

export type WorkSectionAction = "open" | "close";

export type ExplorationsTab = "casestudies" | "components" | "experiments";

export type NavSource = "header" | "footer" | "mobile_menu";

export type NavDestination =
  | "home"
  | "work"
  | "explorations"
  | "about"
  | "contact";

export type AboutHeaderDestination = "portfolio" | "github" | "linkedin";

export function trackCvDownload(source: CvDownloadSource) {
  track("cv_downloaded", { source });
}

export function trackEngineeringStatementDownload() {
  track("engineering_statement_downloaded", { source: "contact" });
}

export function trackContactFormSubmitted(source: ContactFormSource) {
  track("contact_form_submitted", { source });
}

export function trackContactFormFailed(source: ContactFormSource) {
  track("contact_form_failed", { source });
}

export function trackMailtoClicked(source: MailtoSource) {
  track("mailto_clicked", { source, channel: "email" });
}

export function trackSocialLinkClicked(
  source: SocialSource,
  platform: SocialPlatform,
) {
  track("social_link_clicked", { source, platform });
}

export function trackProjectLinkClicked(
  projectId: string,
  linkType: ProjectLinkType,
  surface: ProjectSurface,
) {
  track("project_link_clicked", {
    project_id: projectId,
    link_type: linkType,
    surface,
  });
}

export function trackProjectSelected(projectId: string) {
  track("project_selected", {
    project_id: projectId,
    surface: "home_gallery",
  });
}

export function trackWorkSectionToggled(
  sectionId: string,
  action: WorkSectionAction,
) {
  track("work_section_toggled", { section_id: sectionId, action });
}

export function trackAboutToWorkNavigated(projectId: string) {
  track("about_to_work_navigated", { project_id: projectId });
}

export function trackAboutHeaderLinkClicked(
  destination: AboutHeaderDestination,
) {
  track("about_header_link_clicked", { destination });
}

export function trackExplorationsTabChanged(tab: ExplorationsTab) {
  track("explorations_tab_changed", { tab });
}

export function trackCaseStudyOpened(studyId: string) {
  track("case_study_opened", { study_id: studyId });
}

export function trackHeroExplorationsCtaClicked() {
  track("hero_explorations_cta_clicked");
}

export function trackUiLabCtaClicked() {
  track("ui_lab_cta_clicked", { source: "home" });
}

export function trackLanguageChanged(from: string, to: string) {
  track("language_changed", { from, to });
}

export function trackNavClicked(destination: NavDestination, source: NavSource) {
  track("nav_clicked", { destination, source });
}
