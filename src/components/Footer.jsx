import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>¿Hablamos?</h2>
      <p style={{ color: '#888' }}>Estoy abierta a nuevas oportunidades y colaboraciones.</p>

      <div className="footer-socials">
        <a href="https://github.com/mmoreno-byte" 
           target="_blank" 
           className="social-icon github" 
           title="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/maria-dolores-moreno-cabrera-194983151" 
           target="_blank" 
           className="social-icon linkedin" 
           title="LinkedIn">
          <FaLinkedin />
        </a>
      </div>

      <p className="copyright">
        © 2026 mmoreno-byte • Diseñado con ❤️ en Granada
      </p>
    </footer>
  );
}
