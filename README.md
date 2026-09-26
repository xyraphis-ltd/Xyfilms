# XY Films — Website

Marketing site for **XY Films**, a film production house in Mumbai.
Built with **React 19 + Vite 6** and **React Router 7**. No UI framework, no CSS framework: plain CSS Modules on top of a small set of design tokens.

## Quick start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

Requires Node 18+ (tested on Node 24).

## Project structure

```
xy-films-web/
├── index.html                  # HTML shell: SEO/OG meta, favicon, Google Fonts
├── public/                     # Copied as-is to dist/ (favicon, touch icon, robots.txt)
└── src/
    ├── main.jsx                # Entry: global styles, BrowserRouter, <App/>
    ├── App.jsx                 # Route table (+ legacy ?page= redirect)
    ├── assets/
    │   ├── images/             # Logo + film posters (hashed on build)
    │   └── video/              # Hero showreel
    ├── components/
    │   ├── layout/             # Layout shell, Header, MenuOverlay, Footer
    │   ├── home/               # LiveClock, HeroVideo, FilmGrid, Marquee, CalloutGrid
    │   └── ui/                 # Logo, PillButton, PageIntro, InfoCard, EmailLink, CursorReticle
    ├── pages/                  # One component per route
    ├── data/                   # All copy, nav, films, divisions, tokens: edit content here
    ├── hooks/                  # useAutoplayAudio, useCustomCursor, useNow, useKeyPress, usePageMeta
    ├── utils/                  # Small pure helpers (date formatting, safe video play)
    └── styles/
        ├── tokens.css          # Colour / type / spacing custom properties
        └── global.css          # Reset, element defaults, a11y helpers
```

Each component keeps its styles next to it in a `*.module.css` file.

## Routes

| Path        | Page                                  |
| ----------- | ------------------------------------- |
| `/`         | Home (clock strip, showreel, films, marquee, callouts) |
| `/work`     | Select Work                           |
| `/services` | Services                              |
| `/about`    | About                                 |
| `/contact`  | Contact (with email card)             |
| `/careers`  | Careers · Open Call                   |
| `/fan`      | Fan Corner                            |
| `/tokens`   | Design tokens reference               |

Unknown paths redirect to `/`. Old prototype deep links such as `/?page=careers` redirect to the matching route.

## Editing content

Most content changes happen in `src/data/`:

- `site.js`: email, location, social links, hero video and fit, marquee text
- `navigation.js`: menu items, route paths, divisions list
- `films.js`: film cards (title, meta, poster, link)
- `pages.js`: copy and SEO titles/descriptions per page, home callouts
- `tokens.js`: content of the `/tokens` page

To add a film, drop the poster into `src/assets/images/` and add an entry to `films.js`.

## Design notes

- **Fluid, no breakpoints.** Layouts use `clamp()`, `flex-wrap` and `grid auto-fit minmax(min(100%, X), 1fr)`, so they reflow continuously from phone to desktop.
- **Custom cursor.** On fine pointers the system cursor is hidden and the reticle (`CursorReticle`) follows the mouse. It is hidden on touch devices.
- **Hero audio.** The showreel autoplays muted, which browsers allow, and unmutes on the first user gesture unless the visitor has used the Sound toggle.
- **Accessibility.** Skip link, `<main>` landmark, labelled navs, a dialog role on the menu with focus moved in and restored, Esc to close, `aria-pressed` on the sound toggle, visible `:focus-visible` ring and `prefers-reduced-motion` support.

## Deployment

`npm run build` outputs a static site to `dist/`. Because the site uses client-side routing (`BrowserRouter`), the host must serve `index.html` for unknown paths:

- **Netlify:** add `public/_redirects` containing `/*  /index.html  200`
- **Vercel:** works out of the box for Vite projects (or add a rewrite to `/index.html`)
- **Nginx:** `try_files $uri /index.html;`

## Known TODOs

- Instagram / LinkedIn URLs are placeholders (`#`) in `src/data/site.js`.
- Film cards, division tiles and the Fan Corner "Coming soon" button link to `#` until their pages exist.
- `xy-films-logo.png` is 1.5 MB and the showreel is 11 MB. Exporting a smaller logo (WebP/SVG) and a compressed or streamed video would improve load time noticeably.
