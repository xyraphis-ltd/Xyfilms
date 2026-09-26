import { pages } from '../data/pages';
import { designTokens } from '../data/tokens';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './TokensPage.module.css';

export default function TokensPage() {
  usePageMeta(pages.tokens.seoTitle, pages.tokens.description);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Design tokens</h1>
      <div className={styles.grid}>
        {designTokens.map((t) => (
          <div key={t.group} className={styles.cell}>
            <h2 className={styles.group}>{t.group}</h2>
            <span className={styles.body}>{t.body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
