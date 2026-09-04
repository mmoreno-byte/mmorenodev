import { useState } from 'react';
import useInView from '../hooks/useInView';
import './Projects.css';

const allProjects = [
  {
    id: 'web-studio',
    title: 'MM Web Studio',
    description: 'Mi propio estudio de desarrollo web: diseño, marca y código de principio a fin. Esto es lo que hago para mis clientes, desde la primera idea hasta el sitio en producción.',
    tags: ['Diseño web', 'Desarrollo a medida', 'Marca'],
    link: 'https://web-studio-19p.pages.dev',
    repo: null,
    featured: true,
  },
  {
    id: 1,
    title: "RAG Document Agent",
    description: "Agente conversacional que permite subir PDFs y hacerles preguntas en cualquier idioma. RAG con LangChain, ChromaDB, embeddings de Cohere y chat vía Groq, backend en FastAPI, historial en PostgreSQL.",
    tags: ["FastAPI", "PostgreSQL", "IA"],
    link: "https://mmoreno-byte.github.io/ai-portfolio-agent/",
    repo: "https://github.com/mmoreno-byte/ai-portfolio-agent"
  },
  {
    id: 2,
    title: "Videogames API + Frontend",
    description: "API REST completa de videojuegos con autenticación JWT, CRUD, filtros y documentación Swagger (Spring Boot), conectada a una aplicación web con login, registro y buscador (React).",
    tags: ["Java", "Spring Boot", "JWT", "React"],
    link: "https://mmoreno-byte.github.io/videogames-frontend/",
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
    id: 5,
    title: "Dev Docs Site",
    description: "Web de documentación técnica personal con proyectos, apuntes de prácticas profesionales y guías. Construida con VitePress y desplegada en Cloudflare.",
    tags: ["VitePress", "Cloudflare", "Markdown"],
    link: "https://mmoreno-docs.pages.dev/",
    repo: "https://github.com/mmoreno-byte/mmoreno-docs"
  },
  {
    id: 6,
    title: "Job Board TI (demo)",
    description: "Buscador de ofertas de trabajo en informática con filtros por ubicación, tipo y tecnología. Backend en FastAPI preparado para consumir la API de Jooble — en esta demo funciona con datos de ejemplo. Frontend en JavaScript.",
    tags: ["FastAPI", "JavaScript", "API REST"],
    link: "https://job-board-32q.pages.dev",
    repo: "https://github.com/mmoreno-byte/job-board"
  },
  {
    id: 7,
    title: "Sistema de Reservas",
    description: "API REST para gestionar reservas de un coworking (puestos, salas de reunión, oficinas privadas), con autenticación JWT, roles admin/cliente y validación de solapes de horario.",
    tags: ["FastAPI", "PostgreSQL", "JWT"],
    link: "https://sistema-reservas-wub2.onrender.com/docs",
    linkLabel: "Ver documentación",
    repo: "https://github.com/mmoreno-byte/sistema-reservas"
  },
  {
    id: 8,
    title: "SAP-Turismo (colaboración)",
    description: "Sistema de reservas turísticas construido con el patrón clean core de SAP: backend en ABAP Cloud/RAP (a cargo de mi compañero Jose) y mi capa de extensión de negocio en SAP CAP (validaciones, cálculo de precios, cupos y tests), con Fiori Elements como frontend.",
    tags: ["SAP", "CAP", "RAP", "Fiori"],
    link: "#",
    repo: "https://github.com/mmoreno-byte/SAP-Turismo"
  },
];

const filters = ["Todos", "React", "Java", "Python", "FastAPI", "IA", "SAP"];

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
          p.featured ? (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card project-card--featured"
            >
              <div className="featured-badge">Mi estudio</div>
              <h3>{p.title}</h3>
              <p style={{ color: '#a1a1aa', lineHeight: '1.6' }}>{p.description}</p>
              <div className="tech-tags" style={{ marginTop: '15px' }}>
                {p.tags.map(tag => (
                  <span key={tag} className="tech-tag tech-tag--accent">{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                <span className="project-link project-link--featured">
                  Visitar MM Web Studio →
                </span>
              </div>
            </a>
          ) : (
          <div key={p.id} className="project-card">
            <h3>{p.title}</h3>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>{p.description}</p>
            <div className="tech-tags" style={{ marginTop: '15px' }}>
              {p.tags.map(tag => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>

            <div className="project-actions">
              {p.link && p.link !== '#' && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  {p.linkLabel || 'Ver web'} →
                </a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="project-link project-link--secondary">
                  Ver código →
                </a>
              )}
            </div>
          </div>
          )
        )) : (
          <p className="no-results">No hay proyectos con esa tecnología aún. ¡Pronto! 🚀</p>
        )}
      </div>
</section>
  );
}