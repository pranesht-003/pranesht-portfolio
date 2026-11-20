import React, { useEffect, useState } from 'react';
import { links } from '../../content';

const sections = [['About', 'about'], ['Projects', 'work'], ['Skills', 'skills'], ['Experience', 'experience'], ['Contact', 'contact']];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 4);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <header className="site-header" data-scrolled={scrolled}>
    <a className="site-brand" href="#home">Pranesh T.</a>
    <nav aria-label="Main navigation">{sections.map(([name,id]) => <a key={id} href={'#'+id}>{name}</a>)}</nav>
    <a className="site-email" href={links.email}>Let's talk &#8599;</a>
  </header>;
}
