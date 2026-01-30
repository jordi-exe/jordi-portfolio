import type { Section } from "./sections";

export interface PageData {
  section: Section;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}
