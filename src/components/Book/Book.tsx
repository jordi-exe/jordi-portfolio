import styles from "./Book.module.css";
import { useContext, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "../Pages/Pages";
import Tabs from "../Tabs/Tabs";
import { FrontPage1, FrontPage2 } from "../Pages/FrontPages/FrontPages";
import { ProjectContext } from "../../context/dataContext";
import { getSectionStartPages } from "./Book.utils";
import { buildBookPages } from "./BookPage";

import type { ProjectProps } from "../../projectData.types";
import type { Section } from "../../sections";

function Book() {
  const bookRef = useRef<any>(null);
  const allPages = useContext(ProjectContext) as ProjectProps[];

  const bookPages = buildBookPages(allPages);

  const sectionStartPages = getSectionStartPages(bookPages);

  const [activeSection, setActiveSection] = useState<Section>(
    bookPages[0].section,
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
          {bookPages.map((page, idx) => {
            if (page.kind === "front") {
              return idx === 0 ? (
                <FrontPage1 key={idx} />
              ) : (
                <FrontPage2 key={idx} />
              );
            }

            return (
              <Page
                key={idx}
                title={page.project.name}
                content={page.project.summary}
                side={idx % 2 === 0 ? "left" : "right"}
              />
            );
          })}
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default Book;
