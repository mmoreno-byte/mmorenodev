import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>¿Hablamos?</h2>
      <p style={{ color: '#888' }}>Estoy abierto a nuevas oportunidades y colaboraciones.</p>

      <div className="footer-socials">
        <a href="https://github.com" 
           target="_blank" 
           className="social-icon github" 
           title="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" 
           target="_blank" 
           className="social-icon linkedin" 
           title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:mdmorenoinfor@gmail.com" 
           className="social-icon email" 
           title="Enviar Email">
          <FaEnvelope />
        </a>
      </div>

      <p className="copyright">
        © 2026 mmoreno-byte • Diseñado con ❤️ en Granada
      </p>
    </footer>
  );
}
