import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaPython, FaDownload } from 'react-icons/fa';
import { SiVite, SiJavascript, SiSpringboot, SiMysql, SiPhp, SiOpenjdk } from 'react-icons/si';
import fotoPerfil from '../assets/perfil.jpg';
import useTypewriter from '../hooks/useTypewriter';
import MatrixBackground from './MatrixBackground';
import './Hero.css';

export default function Hero() {
  const displayed = useTypewriter('mmorenodev', 80, 600);
  const iconStyle = { fontSize: '2.2rem', cursor: 'pointer' };

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
          Full Stack Developer | Ciberseguridad
        </p>
        <div className="hero-icons">
          <FaHtml5 style={{ ...iconStyle, color: '#e34f26' }} title="HTML5" />
          <FaCss3Alt style={{ ...iconStyle, color: '#1572b6' }} title="CSS3" />
          <SiJavascript style={{ ...iconStyle, color: '#f7df1e' }} title="JavaScript" />
          <FaReact style={{ ...iconStyle, color: '#61dafb' }} title="React" />
          <SiVite style={{ ...iconStyle, color: '#646cff' }} title="Vite" />
          <FaGithub style={{ ...iconStyle, color: '#aaa' }} title="GitHub" />
          <SiPhp style={{ ...iconStyle, color: '#8892be' }} title="PHP" />
          <SiOpenjdk style={{ ...iconStyle, color: '#f89820' }} title="Java" />
          <SiMysql style={{ ...iconStyle, color: '#4479a1' }} title="MySQL" />
          <SiSpringboot style={{ ...iconStyle, color: '#6db33f' }} title="Spring Boot" />
          <FaPython style={{ ...iconStyle, color: '#3776ab' }} title="Python" />
        </div>

        {/* Botón Descargar CV */}
        <a href="/mmorenodev/cv-loli-moreno.pdf" download className="hero-cv-btn">
          <FaDownload /> Descargar CV
        </a>
      </div>
    </header>
  );
}