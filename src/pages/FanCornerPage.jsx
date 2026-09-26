import Logo from '../components/ui/Logo';
import { pages } from '../data/pages';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './FanCornerPage.module.css';

export default function FanCornerPage() {
  usePageMeta(pages.fan.seoTitle, pages.fan.description);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.row}>
          <div className={styles.copy}>
            <span className={styles.kicker}>Active campaign · swappable per release</span>
            <h1 className={styles.title}>Fan Corner</h1>
            <p className={styles.text}>
              Built for the window around a release. When a film is in theatres, this block becomes its home — poster
              art, drops, and the things worth keeping after the credits.
            </p>
            <div className={styles.actions}>
              {/* TODO: point at the live campaign once a release is on. */}
              <a href="#" className={styles.cta}>
                COMING SOON
              </a>
            </div>
          </div>
          <div className={styles.art}>
            <Logo size="large" />
          </div>
        </div>
      </section>
    </div>
  );
}
