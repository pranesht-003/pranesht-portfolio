import { useLayoutEffect, useRef } from 'react';

export function useStackedCards() {
  const list = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (const { target } of entries) {
        const card = target as HTMLElement;
        card.style.setProperty('--card-height', card.offsetHeight + 'px');
      }
    });
    for (const card of list.current!.children) observer.observe(card);
    return () => observer.disconnect();
  }, []);
  return list;
}
