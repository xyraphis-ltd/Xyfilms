import styles from './InfoCard.module.css';

/**
 * Bordered card with a mono label.
 * tone="gold"    — gold hairline + tint (IP notice, contact block)
 * tone="neutral" — white hairline (careers contact)
 */
export default function InfoCard({ label, tone = 'gold', className = '', children }) {
  return (
    <div className={`${styles.card} ${styles[tone]} ${className}`}>
      <div className={styles.label}>{label}</div>
      {children}
    </div>
  );
}
