import { useContext } from "react";
import { AboutContext } from "../../lib/context/dataContext";
import styles from "../Pages.module.css";

type FrontPageProps = {
  ref?: React.Ref<HTMLDivElement>;
};

export function FrontPage1({ ref }: FrontPageProps) {
  const about = useContext(AboutContext);
  return (
    <div className={styles.page} ref={ref}>
      <div className={`${styles.pageInner} ${styles.left}`}>
        <h2>{about[0].name}</h2>
        <h4>{about[0].role}</h4>
        {typeof about[0].sections[0].summary[0] === "string" ? (
          <p>{about[0].sections[0].summary[0]}</p>
        ) : (
          about[0].sections[0].summary[0]
        )}
      </div>
    </div>
  );
}

export function FrontPage2({ ref }: FrontPageProps) {
  const about = useContext(AboutContext);
  return (
    <div className={styles.page} ref={ref}>
      <div className={`${styles.pageInner} ${styles.right}`}>
        <h2>{about[1].name}</h2>
        <h4>{about[1].role}</h4>
        {typeof about[1].sections[0].summary[0] === "string" ? (
          <p>{about[1].sections[0].summary[0]}</p>
        ) : (
          about[1].sections[0].summary[0]
        )}
      </div>
    </div>
  );
}
