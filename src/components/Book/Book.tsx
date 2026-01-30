import HTMLFlipBook from "react-pageflip";
import Page from "../Pages/Pages";
import Tabs from "../Tabs/Tabs";
import { useRef, useState } from "react";

import rawPages from "../../assets/projectData.json";
import type { ProjectProps } from "../../projectData.types";
import { FrontPage1, FrontPage2 } from "../Pages/FrontPages/FrontPages";

import type { Section } from "../../sections";
import styles from "./Book.module.css";

const allProjectPages = rawPages as ProjectProps[];

function getSectionStartPages(pages: ProjectProps[]): Map<Section, number> {
  const map = new Map<Section, number>();

  pages.forEach((page, index) => {
    if (!map.has(page.section)) {
      map.set(page.section, index);
    }
  });

  return map;
}

function Book() {
  const bookRef = useRef<any>(null);
  const allPages = allProjectPages;
  const sectionStartPages = getSectionStartPages(allPages);

  const [activeSection, setActiveSection] = useState<Section>(
    allPages[0].section,
  );

  const flipTo = (pageIndex: number, section: Section) => {
    setActiveSection(section);
    bookRef.current?.pageFlip().turnToPage(pageIndex);
  };

  const onFlip = (e: { data: number }) => {
    const pageIndex = e.data;

    const section = [...sectionStartPages.entries()]
      .reverse()
      .find(([, startPage]) => pageIndex >= startPage)?.[0];

    if (section) {
      setActiveSection(section);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Tabs
        sectionStartPages={sectionStartPages}
        flipTo={flipTo}
        activeSection={activeSection}
      />

      <div className={styles.spread}>
        <HTMLFlipBook
          ref={bookRef}
          onFlip={onFlip}
          width={670}
          height={900}
          maxShadowOpacity={0.5}
          autoSize={true}
          className={styles.test}
          {...({} as any)}
        >
          <FrontPage1 />
          <FrontPage2 />

          {allPages.map((p, idx) => (
            <Page
              key={idx}
              title={p.name}
              content={p.summary}
              side={idx % 2 === 0 ? "left" : "right"}
            />
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default Book;
