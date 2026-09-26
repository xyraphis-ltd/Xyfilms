import { useEffect, useRef } from 'react';

const INTERACTIVE = 'a,button,input,textarea,label';
const SIZE_IDLE = 22;
const SIZE_HOVER = 34;

/**
 * Drives the reticle cursor: follows the pointer (one write per frame, no smoothing),
 * grows over interactive elements, and hides when the pointer leaves the window.
 * Returns a ref to attach to the reticle element.
 */
export function useCustomCursor() {
  const ref = useRef(null);

  useEffect(() => {
    let raf = 0;
    let x = 0;
    let y = 0;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = ref.current;
        if (!el) return;
        el.style.opacity = '1';
        el.style.transform = `translate3d(${x}px,${y}px,0)`;
      });
    };

    const onOver = (e) => {
      const el = ref.current;
      if (!el) return;
      const s = e.target.closest?.(INTERACTIVE) ? SIZE_HOVER : SIZE_IDLE;
      el.style.width = `${s}px`;
      el.style.height = `${s}px`;
      el.style.margin = `${-s / 2}px 0 0 ${-s / 2}px`;
    };

    const onLeave = () => {
      if (ref.current) ref.current.style.opacity = '0';
    };

    document.addEventListener('mouseleave', onLeave);
    window.addEventListener('blur', onLeave);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    return () => {
      document.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('blur', onLeave);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}
