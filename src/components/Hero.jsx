import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiVite, SiJavascript } from 'react-icons/si';
import fotoPerfil from '../assets/perfil.jpg';
import MatrixBackground from './MatrixBackground';
import './Hero.css';

export default function Hero() {
  const iconStyle = { fontSize: '2.5rem', transition: 'transform 0.3s', cursor: 'pointer' };

  return (
    <header className="hero-container">
      <MatrixBackground />
      <div className="hero-content">
        <img
          src={fotoPerfil}
          alt="Foto de perfil"
          className="hero-avatar"
        />
        <h1 className="hero-title">mmoreno-byte</h1>
        <p className="hero-subtitle">
          Frontend Developer especializada en crear interfaces modernas y funcionales.
        </p>
        <div className="hero-icons">
          <FaReact style={{ ...iconStyle, color: '#61dafb' }} title="React" />
          <SiVite style={{ ...iconStyle, color: '#646cff' }} title="Vite" />
          <SiJavascript style={{ ...iconStyle, color: '#f7df1e' }} title="JavaScript" />
          <FaNodeJs style={{ ...iconStyle, color: '#339933' }} title="Node.js" />
          <FaHtml5 style={{ ...iconStyle, color: '#e34f26' }} title="HTML5" />
          <FaCss3Alt style={{ ...iconStyle, color: '#1572b6' }} title="CSS3" />
          <FaGithub style={{ ...iconStyle, color: '#fff' }} title="GitHub" />
        </div>
      </div>
    </header>
  );
}
