import { useState } from 'react';
import useInView from '../hooks/useInView';
import './Projects.css';

const allProjects = [
  {
    id: 1,
    title: "RAG Document Agent",
    description: "Agente conversacional que permite subir PDFs y hacerles preguntas en cualquier idioma. RAG con LangChain, ChromaDB y Ollama, backend en FastAPI, historial en PostgreSQL, todo dockerizado.",
    tags: ["FastAPI", "Docker", "PostgreSQL", "IA"],
    link: "#",
    repo: "https://github.com/mmoreno-byte/ai-portfolio-agent"
  },
  {
    id: 2,
    title: "Videogames API + Frontend",
    description: "API REST completa de videojuegos con autenticación JWT, CRUD, filtros y documentación Swagger (Spring Boot), conectada a una aplicación web con login, registro y buscador (React).",
    tags: ["Java", "Spring Boot", "JWT", "React"],
    link: "#",
    repo: "https://github.com/mmoreno-byte/videogames-api"
  },
  {
    id: 3,
    title: "Data Dashboard",
    description: "Aplicación web de análisis de datos. Sube CSV o Excel y visualiza estadísticas descriptivas y gráficos interactivos (barras, líneas, tarta) con React y FastAPI.",
    tags: ["React", "Python", "FastAPI", "Pandas"],
    link: "#",
    repo: "https://github.com/mmoreno-byte/data-dashboard"
  },
  {
    id: 4,
    title: "Claude Chat",
    description: "Chat con IA usando Llama 3.3 a través de Groq API. Backend con Python y Flask, frontend con React. Historial de conversaciones, renderizado Markdown y diseño tipo ChatGPT.",
    tags: ["React", "Python", "Flask", "IA"],
    link: "#",
    repo: "https://github.com/mmoreno-byte/claude-chat"
  },
  {
    id: 5,
    title: "Dev Docs Site",
    description: "Web de documentación técnica personal con proyectos, apuntes de prácticas profesionales y guías. Construida con VitePress y desplegada en Cloudflare.",
    tags: ["VitePress", "Cloudflare", "Markdown"],
    link: "https://mmoreno-docs.mdmorenoinfor.workers.dev/",
    repo: "https://github.com/mmoreno-byte/mmoreno-docs"
  },
];

const filters = ["Todos", "React", "Java", "Python", "FastAPI", "Flask", "IA", "Docker"];

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
            </div>
          </div>
        )) : (
          <p className="no-results">No hay proyectos con esa tecnología aún. ¡Pronto! 🚀</p>
        )}
      </div>

      <div className="projects-more">
        <p>¿Quieres ver el resto de proyectos, apuntes y guías?</p>
        <a href="https://mmoreno-docs.mdmorenoinfor.workers.dev/" target="_blank" rel="noopener noreferrer" className="project-link">
          Ver toda mi documentación técnica →
        </a>
      </div>
</section>
  );
}