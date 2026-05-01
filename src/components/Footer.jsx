import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer-name">mmorenodev</p>
      <div className="footer-socials">
        <a href="https://github.com/mmoreno-byte" target="_blank" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/maria-dolores-moreno-cabrera-194983151" target="_blank" title="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-copy">© 2026 · Diseñado por mmorenodev</p>
    </footer>
  );
}
