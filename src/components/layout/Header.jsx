import { Link, NavLink } from 'react-router-dom';
import { primaryNav, ROUTES } from '../../data/navigation';
import Logo from '../ui/Logo';
import PillButton from '../ui/PillButton';
import styles from './Header.module.css';

export default function Header({ menuOpen, onOpenMenu }) {
  return (
    <header className={styles.header}>
      <Link to={ROUTES.home} className={styles.brand} aria-label="XY Films — home">
        <Logo />
      </Link>

      <nav className={styles.ticker} aria-label="Primary">
        {primaryNav.map((item, i) => (
          <div key={item.to} className={styles.tickerItem}>
            {i > 0 && <span className={styles.dot} aria-hidden="true" />}
            <NavLink to={item.to} end className={styles.tickerLink}>
              {item.label}
            </NavLink>
          </div>
        ))}
      </nav>

      <PillButton variant="menu" onClick={onOpenMenu} aria-expanded={menuOpen} aria-controls="site-menu">
        Menu
        <span className={styles.burger} aria-hidden="true">
          <span />
          <span />
        </span>
      </PillButton>
    </header>
  );
}
