import { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiVite, SiJavascript } from 'react-icons/si';
import fotoPerfil from '../assets/perfil.jpg';
import MatrixBackground from './MatrixBackground';
import './Hero.css';

const FULL_TEXT = 'mmorenodev';

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const iconStyle = { fontSize: '2.2rem', cursor: 'pointer' };

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(FULL_TEXT.slice(0, i + 1));
        i++;
        if (i >= FULL_TEXT.length) clearInterval(interval);
      }, 80);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <header className="hero-container">
      <MatrixBackground />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Disponible para trabajar
        </div>
        <img src={fotoPerfil} alt="Foto de perfil" className="hero-avatar" />
        <h1 className="hero-title">
          {displayed}<span className="cursor" />
        </h1>
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
          <FaGithub style={{ ...iconStyle, color: '#aaa' }} title="GitHub" />
        </div>
      </div>
    </header>
  );
}
