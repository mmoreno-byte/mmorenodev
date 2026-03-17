import { useEffect, useRef, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';
import './Skills.css';

const skills = [
  { name: 'HTML5',       icon: <FaHtml5 />,   color: '#e34f26', level: 85 },
  { name: 'CSS3',        icon: <FaCss3Alt />,  color: '#1572b6', level: 80 },
  { name: 'JavaScript',  icon: <FaJs />,       color: '#f7df1e', level: 70 },
  { name: 'Git/GitHub',  icon: <FaGithub />,   color: '#ffffff', level: 65 },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
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
