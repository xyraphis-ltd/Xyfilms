/** Content for the /tokens reference page. The live values are in src/styles/tokens.css. */
export const designTokens = [
  {
    group: 'Color',
    body: 'bg          #0A0908\nsurface     #080706\ngold        #E9C877\nbronze      #C8A24A\nsilver      #C9CDD2\ntext        #EDEAE4\nrule        rgba(255,255,255,.07)',
  },
  {
    group: 'Type',
    body: "display   'Bodoni Moda' serif\nui        'Jost' 300/400\nmono      'JetBrains Mono'\nh1        clamp(34px,7vw,84px)/1.06\nh2        clamp(22px,3.4vw,42px)\nbody      16px/1.72\nlabel     10-11px, .28em tracking, uppercase",
  },
  {
    group: 'Space',
    body: 'unit        2px grid\nsection     clamp(56px,9vw,110px)\ngutter      clamp(20px,5vw,56px)\nstack       12 / 18 / 24 / 36\nhairline    1px rgba(255,255,255,.07)',
  },
  {
    group: 'Responsive',
    body: 'no breakpoints — fluid only\ngrids       auto-fit minmax(min(100%,X))\ncolumns     flex-wrap + flex-basis\nhero        100svh − ticker\ntap target  44px minimum',
  },
  {
    group: 'Hero video',
    body: 'source      src/assets/video/showreel.mp4\nplayback    autoplay, loop, sound on, inline\nfit         object-fit cover\noverlay     radial + vertical scrim\naudio       mute toggle, bottom right',
  },
  {
    group: 'Motion',
    body: 'nav ticker  30s linear (prop)\nmarquee     34s linear\nglint       9s linear\nhover       .18-.5s ease\nreveal      fadeUp 14px .35s',
  },
];
