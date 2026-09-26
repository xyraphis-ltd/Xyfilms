import EmailLink from '../components/ui/EmailLink';
import InfoCard from '../components/ui/InfoCard';
import PageIntro from '../components/ui/PageIntro';
import { pages } from '../data/pages';
import { site } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './InfoPage.module.css';

/** Shared layout for the Work / Services / About / Contact pages. */
export default function InfoPage({ pageKey, showContact = false }) {
  const { kicker, title, body } = pages[pageKey];
  usePageMeta(`${kicker} — ${site.name}`, `${title} ${body}`);

  return (
    <div className={styles.page}>
      <PageIntro kicker={kicker}>{title}</PageIntro>
      <section className={styles.body}>
        <p className={styles.text}>{body}</p>
        {showContact && (
          <InfoCard label="Contact us" className={styles.contact}>
            <EmailLink className={styles.email} />
            <p className={styles.note}>{site.location}</p>
          </InfoCard>
        )}
      </section>
    </div>
  );
}
