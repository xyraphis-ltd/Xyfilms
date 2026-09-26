import { Link } from 'react-router-dom';
import { primaryNav, ROUTES } from '../../data/navigation';
import { site } from '../../data/site';
import Logo from '../ui/Logo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <Logo size="large" />
        <span className={styles.location}>{site.location}</span>
      </div>

      <nav className={styles.col} aria-label="Footer">
        <span className={styles.heading}>Menu</span>
        {primaryNav.map((item) => (
          <Link key={item.to} to={item.to} className={styles.link}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className={styles.col}>
        <span className={styles.heading}>Social</span>
        {site.socials.map((s) => (
          <a key={s.label} href={s.href} className={styles.link}>
            {s.label}
          </a>
        ))}
        <Link to={ROUTES.tokens} className={styles.tokensLink}>
          Design tokens
        </Link>
      </div>

      <div className={styles.legal}>
        <span>{site.copyright}</span>
        <span>Scripts read under SWA registration</span>
      </div>
    </footer>
  );
}
