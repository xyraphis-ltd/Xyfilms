import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './CalloutGrid.module.css';

export default function CalloutGrid({ items }) {
  return (
    <section className={styles.grid}>
      {items.map((item) => (
        <Link key={item.to} to={item.to} className={styles.tile}>
          <span className={styles.kicker}>{item.kicker}</span>
          <span className={styles.headline}>
            {item.lines.map((line, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </span>
          <span className={styles.cta}>{item.cta}</span>
        </Link>
      ))}
    </section>
  );
}
