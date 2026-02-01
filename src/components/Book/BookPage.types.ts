import type { ProjectProps } from "../../projectData.types";
import type { Section } from "../../sections";

export type BookPage =
  | {
      kind: "front";
      section: Section;
    }
  | {
      kind: "project";
      section: Section;
      project: ProjectProps;
    };
