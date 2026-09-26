export const ROUTES = {
  home: '/',
  work: '/work',
  services: '/services',
  about: '/about',
  careers: '/careers',
  contact: '/contact',
  fan: '/fan',
  tokens: '/tokens',
};

/** Primary navigation — used by the header ticker, the menu overlay and the footer. */
export const primaryNav = [
  { num: '01', label: 'Home', to: ROUTES.home },
  { num: '02', label: 'Select Work', to: ROUTES.work },
  { num: '03', label: 'Services', to: ROUTES.services },
  { num: '04', label: 'About', to: ROUTES.about },
  { num: '05', label: 'Careers', to: ROUTES.careers },
  { num: '06', label: 'Contact', to: ROUTES.contact },
];

export const divisions = [
  'Film Production',
  'Film Distribution (India)',
  'Film Distribution (International)',
  'Studios',
  'Entertainment',
  'Marketing',
  'Merchandising',
  'Licensing',
  'Digital & New Media',
  'Talent',
  'Brand Partnerships',
  'Communications',
  'Technical',
  'Live Events',
  'Foundation',
].map((name, i) => ({ name, num: String(i + 1).padStart(2, '0') }));
