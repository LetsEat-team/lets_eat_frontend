import { useEffect } from "react";

export function useMinHeightRealScreen() {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);
}

export function useMinHeightRealScreenMinusHeader(headerHeightPx = 51) {
  useEffect(() => {
    const setVhMinusHeader = () => {
      const vh = window.innerHeight;
      const vhMinusHeader = vh - headerHeightPx;
      document.documentElement.style.setProperty('--vh', `${vhMinusHeader * 0.01}px`);
    };
    setVhMinusHeader();
    window.addEventListener('resize', setVhMinusHeader);
    return () => window.removeEventListener('resize', setVhMinusHeader);
  }, [headerHeightPx]);
}