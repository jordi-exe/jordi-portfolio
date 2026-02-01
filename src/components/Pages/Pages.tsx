import React from "react";
import styles from "./Pages.module.css";

interface PageProps {
  title: string;
  content?: string | React.ReactNode;
  side: "left" | "right";
  ref?: React.Ref<HTMLDivElement>;
}

export function Page({ title, content, side, ref }: PageProps) {
  return (
    <div className={styles.page} ref={ref}>
      <div className={`${styles.pageInner} ${styles[side]}`}>
        <h2>{title}</h2>
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
    </div>
  );
}

Page.displayName = "Page";

export default Page;
