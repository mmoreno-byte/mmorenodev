import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const links = [
  { label: 'Inicio',      href: '#hero' },
  { label: 'Sobre mí',    href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos',   href: '#projects' },
  { label: 'Contacto',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <span className="navbar-logo">mmoreno-byte</span>

      <div className="navbar-right">
        <button className="navbar-theme" onClick={() => setDarkMode(!darkMode)} title="Cambiar tema">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button className="navbar-burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
