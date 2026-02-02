import type { Section } from "../../lib/types";
import Front from "./tab_about.svg?react";
import Code from "./tab_code.svg?react";
import Models from "./tab_models.svg?react";
import Game from "./tab_games.svg?react";
import Design from "./tab_art.svg?react";
import Contact from "./tab_contact.svg?react";
import styles from "./Tabs.module.css";

interface TabsProps {
  sectionStartPages: Map<Section, number>;
  flipTo: (page: number, section: Section) => void;
  activeSection: Section;
}

const sectionIcons: Record<Section, React.FC<React.SVGProps<SVGSVGElement>>> = {
  front: Front,
  code: Code,
  model: Models,
  game: Game,
  design: Design,
  contact: Contact,
};

export default function Tabs({
  sectionStartPages,
  flipTo,
  activeSection,
}: TabsProps) {
  return (
    <div className={styles.tabs}>
      {[...sectionStartPages.entries()].map(([section, pageIndex]) => {
        const isActive = section === activeSection;
        const Icon = sectionIcons[section];

        return (
          <button
            key={section}
            onClick={() => flipTo(pageIndex, section)}
            className={`${styles.tab} ${isActive ? styles.active : ""}`}
          >
            <Icon className={styles.icons} width={105} height={41} />
          </button>
        );
      })}
    </div>
  );
}
