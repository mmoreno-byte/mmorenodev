import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">mmorenodev</h3>
          <p className="footer-description">Full Stack Developer | Ciberseguridad</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul className="footer-links">
            <li><a href="/#projects">Proyectos</a></li>
            <li><a href="/#contact">Contacto</a></li>
            <li><a href="https://mmoreno-docs.mdmorenoinfor.workers.dev/" target="_blank" rel="noopener noreferrer">Documentación</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Redes</h4>
          <div className="footer-socials">
            <a href="https://github.com/mmoreno-byte" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/maria-moreno-dev" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/mmoreno_dev" target="_blank" rel="noopener noreferrer" title="Twitter">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>
      <p className="footer-copy">© {currentYear} mmorenodev · Todos los derechos reservados</p>
    </footer>
  );
}
