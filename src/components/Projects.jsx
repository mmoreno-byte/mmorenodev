import { useState } from 'react';
import useInView from '../hooks/useInView';
import './Projects.css';

const allProjects = [
    {
    id: 1,
    title: "DoFocus",
    description: "Aplicación web de gestión de tareas con gamificación, temporizador Pomodoro y modo oscuro. Desarrollada con PHP, MySQL, HTML, CSS y JavaScript.",
    tags: ["PHP", "MySQL", "JavaScript", "CSS3"],
    link: "https://github.com/mmoreno-byte/dofocus"
  },
  {
    id: 2,
    title: "Portfolio Ana Moreno",
    description: "Portfolio profesional para fotógrafa de conciertos y diseñadora gráfica.",
    tags: ["React", "Vite", "CSS3"],
    link: "https://mmoreno-byte.github.io/ana-moreno-portfolio/",   // ← ponla cuando esté publicada
    repo: "https://github.com/mmoreno-byte/ana-moreno-portfolio",   // ← cuando esté subido
  },
  {
    id: 3,
    title: "Próximo Proyecto...",
    description: "Un espacio reservado para mi siguiente gran desarrollo con Node.js o APIs externas.",
    tags: ["Node.js"],
    link: "#",
    repo: null,   // ← null = no muestra el botón de código
  }
];

const filters = ["Todos", "React", "Vite", "CSS3", "Node.js", "JavaScript"];

export default function Projects() {
  const [ref, visible] = useInView(0.1);
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos"
    ? allProjects
    : allProjects.filter(p => p.tags.includes(active));

  return (
    <section ref={ref} className={`projects-container ${visible ? 'visible' : ''}`}>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '10px' }}>Mis Proyectos</h2>
      <p style={{ textAlign: 'center', color: '#666' }}>Una selección de mis trabajos más recientes</p>

      {/* Filtros */}
      <div className="projects-filters">
        {filters.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${active === filter ? 'active' : ''}`}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.length > 0 ? filtered.map((p) => (
          <div key={p.id} className="project-card">
            <h3>{p.title}</h3>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>{p.description}</p>
            <div style={{ marginTop: '15px' }}>
              {p.tags.map(tag => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>

            {/* Botones */}
            <div className="project-actions">
              {p.link && p.link !== '#' && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  Ver web →
                </a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="project-link project-link--secondary">
                  Ver código →
                </a>
              )}
              {p.link === '#' && (
                <span className="project-link project-link--disabled">Próximamente...</span>
              )}
            </div>
          </div>
        )) : (
          <p className="no-results">No hay proyectos con esa tecnología aún. ¡Pronto! 🚀</p>
        )}
      </div>
    </section>
  );
}
