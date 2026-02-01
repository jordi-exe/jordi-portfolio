//Maps all section's first page index for use with Tabs
import type { BookPage } from "./BookPage.types";
import type { Section } from "../../sections";

export function getSectionStartPages(pages: BookPage[]): Map<Section, number> {
  const map = new Map<Section, number>();

  pages.forEach((page, index) => {
    if (!map.has(page.section)) {
      map.set(page.section, index);
    }
  });

  return map;
}
