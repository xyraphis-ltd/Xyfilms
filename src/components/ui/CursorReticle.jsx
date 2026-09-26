import { useCustomCursor } from '../../hooks/useCustomCursor';
import styles from './CursorReticle.module.css';

/** Film-viewfinder style cursor (desktop / fine pointers only). */
export default function CursorReticle() {
  const ref = useCustomCursor();
  return (
    <div ref={ref} className={styles.reticle} aria-hidden="true">
      <div className={styles.frame}>
        <div className={`${styles.corner} ${styles.tl}`} />
        <div className={`${styles.corner} ${styles.tr}`} />
        <div className={`${styles.corner} ${styles.bl}`} />
        <div className={`${styles.corner} ${styles.br}`} />
        <div className={styles.dot} />
      </div>
    </div>
  );
}
