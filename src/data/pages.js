import { ROUTES } from './navigation';

/** Copy + SEO for every route. `kicker`/`title`/`body` drive the shared InfoPage layout. */
export const pages = {
  home: {
    seoTitle: 'XY Films — Film Production House, Mumbai',
    description:
      'XY Films is a Mumbai production house taking a small number of films a year from first draft to final mix.',
  },
  work: {
    kicker: 'Select Work',
    title: 'The slate, in reverse order of release.',
    body: 'Feature films, limited series and documentary work — each with its own case page: stills, credits, festival run, and where to watch.',
  },
  services: {
    kicker: 'Services',
    title: 'What we do, end to end.',
    body: 'Development, physical production, post and finishing, and distribution strategy for India and international markets.',
  },
  about: {
    kicker: 'About',
    title: 'A production house, not a pipeline.',
    body: 'Founded in Mumbai. We take a small number of films a year and stay on them from first draft to final mix.',
  },
  contact: {
    kicker: 'Contact',
    title: 'Come find us.',
    body: 'General enquiries, press, and partnership requests. Submissions go through Careers so nothing gets lost in an inbox.',
  },
  careers: {
    seoTitle: 'Careers · Open Call — XY Films',
    description:
      'Fresh actors, first-time directors and screenwriters can submit directly to XY Films. No agent required, no credits required.',
  },
  fan: {
    seoTitle: 'Fan Corner — XY Films',
    description: 'Poster art, drops, and the things worth keeping after the credits.',
  },
  tokens: {
    seoTitle: 'Design tokens — XY Films',
    description: 'Colour, type, spacing and motion tokens for the XY Films site.',
  },
};

/** Home-page callout tiles. */
export const callouts = [
  {
    kicker: 'Open Call',
    lines: ['Send us the script', 'nobody would make.'],
    cta: 'Actors · Directors · Screenwriters →',
    to: ROUTES.careers,
  },
  {
    kicker: 'Fan Corner',
    lines: ['The drop is live', 'for the release window.'],
    cta: 'Enter the corner →',
    to: ROUTES.fan,
  },
];
