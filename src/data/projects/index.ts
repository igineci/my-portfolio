import type { Project, ProjectSurface } from "./types";
import { gnos } from "./gnos";
import { juratech } from "./juratech";
import { uiLab } from "./ui-lab";
import { reportify } from "./reportify";
import { cer } from "./cer";

/**
 * Single source of truth for all projects across the site.
 * Add new projects by:
 *   1. Creating src/data/projects/<id>.ts exporting an `as const satisfies Project` object.
 *   2. Adding projects.<id>.{title,subtitle,shortDesc,longDesc} to both locales.
 *   3. Appending the import here.
 */
export const PROJECTS = [
  gnos,
  juratech,
  uiLab,
  reportify,
  cer,
] as const satisfies readonly Project[];

export type {
  Project,
  ProjectSurface,
  ProjectLink,
  ProjectLinkType,
  ProjectStatus,
} from "./types";

const byYearDesc = (a: Project, b: Project): number =>
  Number(b.year) - Number(a.year) || a.id.localeCompare(b.id);

/** Returns all projects that opt-in to the given surface, sorted by year desc. */
export function getProjectsForSurface(surface: ProjectSurface): Project[] {
  return PROJECTS.filter((project) =>
    (project.surfaces as readonly ProjectSurface[]).includes(surface),
  ).sort(byYearDesc);
}

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}

export type ProjectCopyField =
  | "title"
  | "subtitle"
  | "shortDesc"
  | "longDesc"
  | "purposeUsage"
  | "aiUsage";

/**
 * Convention-based i18n key builder.
 * Keeps key strings out of project files so adding a project means only:
 * declaring data + filling translations under projects.<id>.*
 *
 * Return type is cast to a flat i18next key literal so it satisfies the
 * strict `TFunction` signature generated from the JSON resources. At runtime
 * i18next resolves the dotted path via its default keySeparator.
 */
export function projectKey(id: string, field: ProjectCopyField): "home" {
  return `projects.${id}.${field}` as unknown as "home";
}

/**
 * i18n key for a single highlight inside `projects.<id>.highlights.<key>`.
 * Same cast trick as `projectKey` to satisfy the strict TFunction signature.
 */
export function projectHighlightKey(id: string, key: string): "home" {
  return `projects.${id}.highlights.${key}` as unknown as "home";
}
