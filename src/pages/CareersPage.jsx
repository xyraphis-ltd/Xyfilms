import EmailLink from '../components/ui/EmailLink';
import InfoCard from '../components/ui/InfoCard';
import PageIntro from '../components/ui/PageIntro';
import { pages } from '../data/pages';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './CareersPage.module.css';

export default function CareersPage() {
  usePageMeta(pages.careers.seoTitle, pages.careers.description);

  return (
    <div className={styles.page}>
      <PageIntro kicker="Careers · Open Call" spacing="compact">
        New faces,
        <br />
        new pages.
      </PageIntro>

      <section className={styles.body}>
        <p className={styles.lede}>
          XY Films reads everything that comes through this door. No agent required, no credits required. Fresh
          actors, first-time directors and screenwriters can submit directly.
        </p>

        <div className={styles.cards}>
          <InfoCard label="Your IP stays yours">
            <p className={styles.cardText}>
              Every script submitted here is treated as copyright-registered with the Screenwriters Association
              (SWA). We log receipt, date-stamp the file, and read it under confidence. Registration with SWA before
              you send is recommended and always honoured.
            </p>
          </InfoCard>

          <InfoCard label="Contact us" tone="neutral" className={styles.contactCard}>
            <EmailLink className={styles.email} />
            <p className={styles.note}>Scripts, reels and enquiries — one inbox, read by us</p>
          </InfoCard>
        </div>
      </section>
    </div>
  );
}
