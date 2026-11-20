import React from 'react';
import { useStackedCards } from './useStackedCards';
import { awards } from '../../content';

export function AwardsSection() {
  const list = useStackedCards();
  return (
    <section id="awards" aria-labelledby="awards-heading" className="relative bg-black px-6 py-16 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 id="awards-heading" className="awards-heading">Awards &amp; recognition</h2>
        <div ref={list} className="award-list mt-6" aria-label="Achievements">
          {awards.map(([title, date, file, alt]) => <figure key={file} className="award-card">
            <img className="award-image" loading="lazy" src={'Assets/IMG/'+file} alt={alt}/>
            <figcaption className="award-caption">{title} · {date}</figcaption>
          </figure>)}
        </div>
      </div>
    </section>
  );
}
