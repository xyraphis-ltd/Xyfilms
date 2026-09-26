import { useNow } from '../../hooks/useNow';
import { formatClockDate, formatClockTime } from '../../utils/format';
import styles from './LiveClock.module.css';

/** Date / time strip under the header. */
export default function LiveClock() {
  const now = useNow(1000);
  return (
    <div className={styles.strip}>
      <div className={styles.row}>
        <time className={styles.date} dateTime={now.toISOString().slice(0, 10)}>
          {formatClockDate(now)}
        </time>
        <span className={styles.time} aria-hidden="true">
          {formatClockTime(now)}
        </span>
      </div>
    </div>
  );
}
