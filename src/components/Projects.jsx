import { useState } from 'react';
import useInView from '../hooks/useInView';
import './Projects.css';

const allProjects = [
  {
    id: 1,
    title: "DoFocus",
    description: "Aplicación web de gestión de tareas con gamificación, temporizador Pomodoro y modo oscuro. Desarrollada con PHP, MySQL, HTML, CSS y JavaScript.",
    tags: ["PHP", "MySQL", "JavaScript", "CSS3"],
    link: "https://github.com/mmoreno-byte/dofocus",
    repo: "https://github.com/mmoreno-byte/dofocus"
  },
  {
    id: 2,
    title: "Portfolio Ana Moreno",
    description: "Portfolio profesional para fotógrafa de conciertos y diseñadora gráfica. Desarrollado con React y Vite.",
    tags: ["React", "Vite", "CSS3"],
    link: "https://mmoreno-byte.github.io/ana-moreno-portfolio/",
    repo: "https://github.com/mmoreno-byte/ana-moreno-portfolio",
  },
  {
    id: 3,
    title: "Videogames API",
    description: "API REST completa de videojuegos con autenticación JWT, CRUD, filtros y documentación Swagger. Backend con Spring Boot desplegado en Railway.",
    tags: ["Java", "Spring Boot", "JWT"],
    link: "https://videogames-api-production-16b1.up.railway.app/swagger-ui.html",
    repo: "https://github.com/mmoreno-byte/videogames-api",
  },
  {
    id: 4,
    title: "Videogames Frontend",
    description: "Aplicación web para gestionar videojuegos conectada a la API REST. Login, registro, buscador y filtros. Desplegada en GitHub Pages.",
    tags: ["React", "Vite", "CSS3", "Axios"],
    link: "https://mmoreno-byte.github.io/videogames-frontend/",
    repo: "https://github.com/mmoreno-byte/videogames-frontend",
  },
  {
  id: 5,
  title: "Claude Chat",
  description: "Chat con IA usando Llama 3.3 a través de Groq API. Backend con Python y Flask, frontend con React. Historial de conversaciones, renderizado Markdown y diseño tipo ChatGPT.",
  tags: ["React", "Python", "Flask", "IA"],
  link: "https://github.com/mmoreno-byte/claude-chat",
  repo: "https://github.com/mmoreno-byte/claude-chat",
  },
  {
    id: 6,
    title: "Data Dashboard",
    description: "Aplicacion web de analisis de datos. Sube CSV o Excel y visualiza estadisticas descriptivas y graficos interactivos (barras, lineas, tarta) con React y FastAPI.",
    tags: ["React", "Python", "FastAPI", "Pandas"],
    link: "https://github.com/mmoreno-byte/data-dashboard",
    repo: "https://github.com/mmoreno-byte/data-dashboard",
  }
];

const filters = ["Todos", "React", "JavaScript", "Java", "PHP", "CSS3", "Python", "FastAPI", "IA"];

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
