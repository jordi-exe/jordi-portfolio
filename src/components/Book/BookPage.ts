//Properly creates and orders the list of book pages
import type { BookPage } from "./BookPage.types";
import type { ProjectProps } from "../../projectData.types";

export function buildBookPages(projects: ProjectProps[]): BookPage[] {
  return [
    { kind: "front", section: "front" },
    { kind: "front", section: "front" },

    ...projects.map((p) => ({
      kind: "project" as const,
      section: p.section,
      project: p,
    })),
  ];
}
