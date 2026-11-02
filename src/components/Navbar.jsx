import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ profile }) {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  // Highlight the link of the section currently in view.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    LINKS.forEach((l) => { const el = document.getElementById(l.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#hero" className="brand">
          <img src={profile.logo} alt="" />
          <span><strong>{profile.brandName}</strong><small>{profile.tagline}</small></span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-gold btn-sm">Let's Talk <i className="fas fa-arrow-up-right-from-square" /></a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>
    </header>
  );
}
