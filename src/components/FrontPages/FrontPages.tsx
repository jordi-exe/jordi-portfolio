import { useContext } from "react";
import { AboutContext } from "../../lib/context/dataContext";
import styles from "../Pages/Pages.module.css";

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

        <hr />

        <h2>{about[0].sections[0].subtitle}</h2>
        <p>{about[0].sections[0].summary}</p>

        <h2>{about[0].sections[1].subtitle}</h2>
        <div className={styles.columnList}>
          <ul>
            {about[0].sections[1].list?.map((item, idx) => (
              <li key={idx}>
                <b>{item.label}</b> - {item.points}
              </li>
            ))}
          </ul>
        </div>

        <h2>{about[0].sections[2].subtitle}</h2>
        <div>
          <ul>
            {about[0].sections[2].list?.map((item, idx) => (
              <li key={idx}>{item.points}</li>
            ))}
          </ul>
        </div>
        <h2>{about[0].sections[3].subtitle}</h2>
        <p>{about[0].sections[3].summary}</p>
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

        <hr />

        <p>{about[1].sections[0].summary}</p>
      </div>
    </div>
  );
}
