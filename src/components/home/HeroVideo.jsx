import { hero } from '../../data/site';
import { useAutoplayAudio } from '../../hooks/useAutoplayAudio';
import styles from './HeroVideo.module.css';

const BAR_HEIGHTS = [5, 10, 7, 12, 6];

export default function HeroVideo() {
  const { videoRef, muted, toggleMute } = useAutoplayAudio();

  return (
    <section className={styles.hero} aria-label="Showreel">
      <video
        ref={videoRef}
        className={styles.video}
        style={{ objectFit: hero.videoFit }}
        src={hero.video}
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        aria-label="XY Films showreel"
      />
      <div className={styles.scrim} aria-hidden="true" />
      <button
        type="button"
        data-mute
        className={styles.mute}
        onClick={toggleMute}
        aria-pressed={!muted}
        aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
      >
        <span className={styles.bars} aria-hidden="true">
          {BAR_HEIGHTS.map((h, i) => (
            <span key={i} style={{ height: h }} />
          ))}
        </span>
        <span className={styles.label}>{muted ? 'Sound off' : 'Sound on'}</span>
      </button>
    </section>
  );
}
