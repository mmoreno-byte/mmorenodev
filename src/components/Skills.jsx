import { useEffect, useRef, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaReact, FaPython } from 'react-icons/fa';
import { SiVite, SiSpringboot, SiMysql, SiPhp, SiOpenjdk } from 'react-icons/si';
import './Skills.css';

const skills = [
  { name: 'HTML5',       icon: <FaHtml5 />,       color: '#e34f26', level: 80 },
  { name: 'CSS3',        icon: <FaCss3Alt />,      color: '#1572b6', level: 75 },
  { name: 'JavaScript',  icon: <FaJs />,           color: '#f7df1e', level: 65 },
  { name: 'React',       icon: <FaReact />,        color: '#61dafb', level: 60 },
  { name: 'Git/GitHub',  icon: <FaGithub />,       color: '#aaaaaa', level: 65 },
  { name: 'PHP',         icon: <SiPhp />,          color: '#8892be', level: 50 },
  { name: 'MySQL',       icon: <SiMysql />,        color: '#4479a1', level: 55 },
  { name: 'Vite',        icon: <SiVite />,         color: '#646cff', level: 50 },
  { name: 'Java',        icon: <SiOpenjdk />,      color: '#f89820', level: 45 },
  { name: 'Spring Boot', icon: <SiSpringboot />,   color: '#6db33f', level: 40 },
  { name: 'Python',      icon: <FaPython />,       color: '#3776ab', level: 25 },
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
    <section className="skills-container" ref={ref}>
      <h2 className="skills-title">Habilidades</h2>
      <p className="skills-subtitle">Tecnologías con las que trabajo</p>

      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-header">
              <span className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar-bg">
              <div
                className="skill-bar-fill"
                style={{
                  width: visible ? `${skill.level}%` : '0%',
                  backgroundColor: skill.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}