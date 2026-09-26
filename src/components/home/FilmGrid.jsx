import styles from './FilmGrid.module.css';

function FilmCard({ title, meta, poster, href }) {
  return (
    <a href={href} className={styles.card}>
      <div className={styles.poster}>
        <img src={poster} alt={`${title} poster`} className={styles.image} loading="lazy" decoding="async" />
      </div>
      <div className={styles.caption}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.meta}>{meta}</span>
      </div>
    </a>
  );
}

export default function FilmGrid({ films }) {
  return (
    <section className={styles.grid} aria-label="Films">
      {films.map((film) => (
        <FilmCard key={film.title} {...film} />
      ))}
    </section>
  );
}
