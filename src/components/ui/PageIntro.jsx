import styles from './PageIntro.module.css';

/** Kicker + large heading band at the top of inner pages. */
export default function PageIntro({ kicker, children, spacing = 'default' }) {
  return (
    <section className={`${styles.intro} ${styles[spacing]}`}>
      <span className={styles.kicker}>{kicker}</span>
      <h1 className={styles.title}>{children}</h1>
    </section>
  );
}
