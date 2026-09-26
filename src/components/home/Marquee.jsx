import styles from './Marquee.module.css';

/** Infinite horizontal text loop. The text is rendered twice so the -50% translate loops seamlessly. */
export default function Marquee({ text }) {
  return (
    <section className={styles.band} aria-label={text.replace(/\s*·\s*$/, '')}>
      <div className={styles.track} aria-hidden="true">
        <span className={styles.item}>{text}</span>
        <span className={styles.item}>{text}</span>
      </div>
    </section>
  );
}
