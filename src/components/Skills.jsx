import { useEffect, useRef, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaReact, FaPython, FaShieldHalved, FaMagnifyingGlass, FaNetworkWired } from 'react-icons/fa6';
import { SiVite, SiSpringboot, SiMysql, SiPhp, SiOpenjdk, SiDocker, SiGithubactions, SiLangchain, SiFastapi, SiOllama } from 'react-icons/si';
import './Skills.css';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
      { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
      { name: 'React', icon: <FaReact />, color: '#61dafb' },
      { name: 'Vite', icon: <SiVite />, color: '#646cff' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Java', icon: <SiOpenjdk />, color: '#f89820' },
      { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
      { name: 'PHP', icon: <SiPhp />, color: '#8892be' },
      { name: 'Python', icon: <FaPython />, color: '#3776ab' },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
    ],
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'Git / GitHub', icon: <FaGithub />, color: '#aaaaaa' },
      { name: 'Docker', icon: <SiDocker />, color: '#2496ed' },
      { name: 'GitHub Actions', icon: <SiGithubactions />, color: '#2088ff' },
    ],
  },
  {
    category: 'IA / ML',
    skills: [
      { name: 'LangChain', icon: <SiLangchain />, color: '#5eead4' },
      { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
      { name: 'Ollama', icon: <SiOllama />, color: '#f4f4f5' },
    ],
  },
  {
    category: 'Ciberseguridad',
    skills: [
      { name: 'Análisis de vulnerabilidades', icon: <FaShieldHalved />, color: '#5eead4' },
      { name: 'Análisis forense digital', icon: <FaMagnifyingGlass />, color: '#5eead4' },
      { name: 'Seguridad de redes', icon: <FaNetworkWired />, color: '#5eead4' },
    ],
  },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`skills-container ${visible ? 'visible' : ''}`} ref={ref}>
      <h2 className="skills-title">Habilidades</h2>
      <p className="skills-subtitle">Tecnologías con las que trabajo</p>

      <div className="skills-groups">
        {skillCategories.map((group) => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-group-title">{group.category}</h3>
            <div className="skill-chips">
              {group.skills.map((skill) => (
                <span key={skill.name} className="skill-chip">
                  <span className="skill-chip-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
