export type Section =
  | "front"
  | "code"
  | "model"
  | "game"
  | "design"
  | "contact";

export interface PageData {
  section: Section;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export interface MediaData {
  type: "img" | "video" | "gif";
  src: string;
  alt?: string;
  keyDesc?: string;
}

export interface ShowcaseData {
  name: string;
  summary: string;
  mainMedia: MediaData[];
}

export type ProjectData<T> = T & {
  section: Section;
  fullDesc: string;
  completionDate: string;
  founder: string;
  href?: string;

  extraMedia?: MediaData[];
};

export type ProjectProps = ProjectData<ShowcaseData>;

export interface AboutData {
  section: "front";
  name: string;
  role: string;

  sections: {
    subtitle: string;
    summary?: string;

    list?: {
      label?: string;
      points?: string;
    }[];
  }[];
}
