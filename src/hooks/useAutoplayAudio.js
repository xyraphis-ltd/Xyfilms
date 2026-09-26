import { useCallback, useEffect, useRef, useState } from 'react';
import { safePlay } from '../utils/media';

const GESTURES = ['pointerdown', 'touchstart', 'keydown'];

/**
 * Autoplays a <video> muted (the only reliably allowed form), then unmutes it on the
 * first user gesture — unless the user has explicitly muted it, or the gesture was on
 * the mute toggle itself (marked with `data-mute`).
 */
export function useAutoplayAudio() {
  const videoRef = useRef(null);
  const userMuted = useRef(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    el.volume = 1;
    el.muted = true;
    safePlay(el);

    const onLoaded = () => safePlay(el);
    const onVolume = () => setMuted(el.muted);
    el.addEventListener('loadeddata', onLoaded, { once: true });
    el.addEventListener('volumechange', onVolume);

    const removeGestures = () => GESTURES.forEach((t) => window.removeEventListener(t, onGesture));
    function onGesture(e) {
      if (e.target?.closest?.('[data-mute]')) return;
      if (userMuted.current) return;
      el.muted = false;
      safePlay(el);
      removeGestures();
    }
    GESTURES.forEach((t) => window.addEventListener(t, onGesture));

    return () => {
      removeGestures();
      el.removeEventListener('loadeddata', onLoaded);
      el.removeEventListener('volumechange', onVolume);
    };
  }, []);

  const toggleMute = useCallback(() => {
    const el = videoRef.current;
    const next = el ? !el.muted : !muted;
    userMuted.current = next;
    if (el) {
      el.muted = next;
      if (!next && el.paused) safePlay(el);
    }
    setMuted(next);
  }, [muted]);

  return { videoRef, muted, toggleMute };
}
