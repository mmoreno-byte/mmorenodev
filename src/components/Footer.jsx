import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-copy">© {currentYear} mmorenodev</p>

        <div className="footer-links">
          <a href="https://github.com/mmoreno-byte" target="_blank" rel="noopener noreferrer" title="GitHub">
            GitHub
          </a>
          <span className="separator">·</span>
          <a href="https://linkedin.com/in/maria-dolores-moreno-cabrera-194983151" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            LinkedIn
          </a>
          <span className="separator">·</span>
          <a href="/#contact" title="Contacto">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
