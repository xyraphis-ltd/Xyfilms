import styles from './PillButton.module.css';

/** Outlined pill used for the Menu / Close controls. `variant="menu"` has a tighter right pad. */
export default function PillButton({ children, variant, ...props }) {
  return (
    <button type="button" className={`${styles.pill} ${variant ? styles[variant] : ''}`} {...props}>
      {children}
    </button>
  );
}
