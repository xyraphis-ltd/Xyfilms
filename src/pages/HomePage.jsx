import CalloutGrid from '../components/home/CalloutGrid';
import FilmGrid from '../components/home/FilmGrid';
import HeroVideo from '../components/home/HeroVideo';
import LiveClock from '../components/home/LiveClock';
import Marquee from '../components/home/Marquee';
import { films } from '../data/films';
import { callouts, pages } from '../data/pages';
import { marqueeText } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';

export default function HomePage() {
  usePageMeta(pages.home.seoTitle, pages.home.description);

  return (
    <>
      <h1 className="visually-hidden">XY Films — film production house, Mumbai</h1>
      <LiveClock />
      <HeroVideo />
      <FilmGrid films={films} />
      <Marquee text={marqueeText} />
      <CalloutGrid items={callouts} />
    </>
  );
}
