/** Calls el.play() and swallows the autoplay-policy rejection browsers may throw. */
export function safePlay(el) {
  const p = el.play();
  if (p && p.catch) p.catch(() => {});
}
