import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiVite, SiJavascript } from 'react-icons/si';

export default function Hero() {
  const iconStyle = { fontSize: '2.5rem', transition: 'transform 0.3s', cursor: 'pointer' };

  return (
    <header style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)', color: 'white' }}>
      <img 
        src="https://github.com" 
        alt="Foto de perfil" 
        style={{ borderRadius: '50%', width: '140px', border: '3px solid #646cff', boxShadow: '0 0 20px rgba(100, 108, 255, 0.4)' }} 
      />
      <h1 style={{ fontSize: '3.5rem', margin: '20px 0', letterSpacing: '-1px' }}>mmoreno-byte</h1>
      <p style={{ fontSize: '1.2rem', color: '#aaa', maxWidth: '600px', margin: '0 auto 30px' }}>
        Frontend Developer especializado en crear interfaces modernas y funcionales.
      </p>

      {/* Grid de Tecnologías */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap', marginTop: '40px' }}>
        <FaReact style={{ ...iconStyle, color: '#61dafb' }} title="React" />
        <SiVite style={{ ...iconStyle, color: '#646cff' }} title="Vite" />
        <SiJavascript style={{ ...iconStyle, color: '#f7df1e' }} title="JavaScript" />
        <FaNodeJs style={{ ...iconStyle, color: '#339933' }} title="Node.js" />
        <FaHtml5 style={{ ...iconStyle, color: '#e34f26' }} title="HTML5" />
        <FaCss3Alt style={{ ...iconStyle, color: '#1572b6' }} title="CSS3" />
      </div>
    </header>
  );
}
