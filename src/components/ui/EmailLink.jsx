import { site } from '../../data/site';
import styles from './EmailLink.module.css';

/** Large display-type mailto link. */
export default function EmailLink({ className = '' }) {
  return (
    <a href={`mailto:${site.email}`} className={`${styles.email} ${className}`}>
      {site.email}
    </a>
  );
}
