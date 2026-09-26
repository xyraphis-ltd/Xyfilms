import { site } from '../../data/site';
import styles from './Logo.module.css';

/** Brand mark. `size="small"` for header/menu, `"large"` for footer/feature slots. */
export default function Logo({ size = 'small' }) {
  return <img src={site.logo} alt={site.name} className={`${styles.logo} ${styles[size]}`} />;
}
