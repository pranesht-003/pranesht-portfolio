import { useLayoutEffect, useRef } from 'react';

export function useStackedCards() {
  const list = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const element = list.current!;
    const header = document.querySelector<HTMLElement>('.site-header')!;
    let frame = 0;
    function updateClip() {
      frame = 0;
      const inset = Math.max(0, header.offsetHeight - element.getBoundingClientRect().top);
      element.style.setProperty('--nav-clip', inset + 'px');
    }
    function scheduleClip() {
      if (!frame) frame = requestAnimationFrame(updateClip);
    }
    const observer = new ResizeObserver(entries => {
      scheduleClip();
      for (const { target } of entries) {
        if (target === header) continue;
        const card = target as HTMLElement;
        card.style.setProperty('--card-height', card.offsetHeight + 'px');
      }
    });
    for (const card of list.current!.children) observer.observe(card);
    observer.observe(header);
    updateClip();
    window.addEventListener('scroll', scheduleClip, { passive: true });
    return () => {
      window.removeEventListener('scroll', scheduleClip);
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);
  return list;
}
