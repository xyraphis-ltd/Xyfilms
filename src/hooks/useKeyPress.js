import { useEffect } from 'react';

/** Calls `handler` when `key` is pressed, while `active` is true. */
export function useKeyPress(key, handler, active = true) {
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === key) handler(e);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [key, handler, active]);
}
