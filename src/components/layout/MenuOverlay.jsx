import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { divisions, primaryNav } from '../../data/navigation';
import { site } from '../../data/site';
import Logo from '../ui/Logo';
import PillButton from '../ui/PillButton';
import styles from './MenuOverlay.module.css';

export default function MenuOverlay({ onClose }) {
  const closeRef = useRef(null);

  // Move focus into the dialog on open and hand it back on close.
  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus({ preventScroll: true });
    return () => previous?.focus?.({ preventScroll: true });
  }, []);

  return (
    <div id="site-menu" className={styles.overlay} role="dialog" aria-modal="true" aria-label="Site menu">
      <div className={styles.bar}>
        <Logo />
        <PillButton ref={closeRef} onClick={onClose} aria-label="Close menu">
          Close ✕
        </PillButton>
      </div>

      <div className={styles.body}>
        <nav className={styles.nav} aria-label="Menu">
          {primaryNav.map((item) => (
            <Link key={item.to} to={item.to} className={styles.navLink}>
              <span className={styles.navNum}>{item.num}</span>
              {item.label}
            </Link>
          ))}
          <div className={styles.socials}>
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} className={styles.social}>
                {s.label}
              </a>
            ))}
          </div>
        </nav>

        <div className={styles.divisions}>
          <div className={styles.divisionsHead}>
            <h2 className={styles.divisionsTitle}>Divisions</h2>
            <span className={styles.divisionsNote}>{divisions.length} · draft scaffold</span>
          </div>
          <div className={styles.grid}>
            {divisions.map((d) => (
              <a key={d.num} href="#" className={styles.division}>
                <span className={styles.divisionNum}>{d.num}</span>
                <span className={styles.divisionName}>{d.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
