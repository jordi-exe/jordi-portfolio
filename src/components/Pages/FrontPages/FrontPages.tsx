import React from "react";
import styles from "../Pages.module.css";
import about from "../../../assets/aboutData.json";

export const FrontPage1 = React.forwardRef<HTMLDivElement>(() => {
  return (
    <div className={styles.page}>
      <div className={`${styles.pageInner} ${styles.left}`}>
        <h2>{about.name}</h2>
        {typeof about.sections[0].summary[0] === "string" ? (
          <p>{about.sections[0].summary[0]}</p>
        ) : (
          about.sections[0].summary[0]
        )}
      </div>
    </div>
  );
});

export const FrontPage2 = React.forwardRef<HTMLDivElement>(() => {
  return (
    <div className={styles.page}>
      <div className={`${styles.pageInner} ${styles.right}`}>
        <h2>{about.name}</h2>
        {typeof about.sections[0].summary[0] === "string" ? (
          <p>{about.sections[0].summary[0]}</p>
        ) : (
          about.sections[0].summary[0]
        )}
      </div>
    </div>
  );
});
