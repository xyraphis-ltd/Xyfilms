import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useKeyPress } from '../../hooks/useKeyPress';
import CursorReticle from '../ui/CursorReticle';
import Footer from './Footer';
import Header from './Header';
import MenuOverlay from './MenuOverlay';
import styles from './Layout.module.css';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const { key } = useLocation();

  // Every navigation (including re-clicking the current page) closes the menu and returns to top.
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [key]);

  useKeyPress('Escape', closeMenu, menuOpen);

  return (
    <div className={styles.shell}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header menuOpen={menuOpen} onOpenMenu={openMenu} />
      {menuOpen && <MenuOverlay onClose={closeMenu} />}
      <main id="main" tabIndex={-1} className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <CursorReticle />
    </div>
  );
}
