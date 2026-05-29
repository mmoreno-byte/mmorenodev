import { useState } from 'react';
import useInView from '../hooks/useInView';
import './Projects.css';

const allProjects = [
  {
    id: 1,
    title: "DoFocus",
    description: "Aplicación web de gestión de tareas con gamificación, temporizador Pomodoro y modo oscuro. Desarrollada con PHP, MySQL, HTML, CSS y JavaScript.",
    tags: ["PHP", "MySQL", "JavaScript", "CSS3"],
    link: "#",
    repo: "https://github.com/mmoreno-byte/dofocus",
    images: null
  },
  {
    id: 2,
    title: "Portfolio Ana Moreno",
    description: "Portfolio profesional para fotógrafa de conciertos y diseñadora gráfica. Desarrollado con React y Vite.",
    tags: ["React", "Vite", "CSS3"],
    link: "https://mmoreno-byte.github.io/ana-moreno-portfolio/",
    repo: "https://github.com/mmoreno-byte/ana-moreno-portfolio",
    images: ["/mmorenodev/images/anamoreno.png", "/mmorenodev/images/anamoreno2.png", "/mmorenodev/images/anamoreno3.png"]
  },
  {
    id: 3,
    title: "Videogames API",
    description: "API REST completa de videojuegos con autenticación JWT, CRUD, filtros y documentación Swagger. Backend con Spring Boot para ejecutar localmente.",
    tags: ["Java", "Spring Boot", "JWT"],
    link: "#",
    repo: "https://github.com/mmoreno-byte/videogames-api",
    images: null
  },
  {
    id: 4,
    title: "Videogames Frontend",
    description: "Aplicación web para gestionar videojuegos conectada a la API REST. Login, registro, buscador y filtros. Ejecutar localmente con la API.",
    tags: ["React", "Vite", "CSS3", "Axios"],
    link: "#",
    repo: "https://github.com/mmoreno-byte/videogames-frontend",
    images: null
  },
  {
    id: 5,
    title: "Claude Chat",
    description: "Chat con IA usando Llama 3.3 a través de Groq API. Backend con Python y Flask, frontend con React. Historial de conversaciones, renderizado Markdown y diseño tipo ChatGPT.",
    tags: ["React", "Python", "Flask", "IA"],
    link: "#",
    repo: "https://github.com/mmoreno-byte/claude-chat",
    images: null
  },
  {
    id: 6,
    title: "Data Dashboard",
    description: "Aplicación web de análisis de datos. Sube CSV o Excel y visualiza estadísticas descriptivas y gráficos interactivos (barras, líneas, tarta) con React y FastAPI.",
    tags: ["React", "Python", "FastAPI", "Pandas"],
    link: "#",
    repo: "https://github.com/mmoreno-byte/data-dashboard",
    images: null
  },
  {
    id: 7,
    title: "Dev Docs Site",
    description: "Web de documentación técnica personal con proyectos, apuntes de prácticas profesionales y guías. Construida con VitePress y desplegada en Cloudflare.",
    tags: ["VitePress", "Cloudflare", "Markdown"],
    link: "https://mmoreno-docs.mdmorenoinfor.workers.dev/",
    images: null
  },
];

const filters = ["Todos", "React", "JavaScript", "Java", "PHP", "CSS3", "Python", "FastAPI", "Flask", "IA"];

function ProjectCard({ p }) {
  const [imageIndex, setImageIndex] = useState(0);
  const hasImages = p.images && p.images.length > 0;
  const currentImage = hasImages ? p.images[imageIndex] : null;

  const nextImage = () => {
    if (hasImages) setImageIndex((imageIndex + 1) % p.images.length);
  };

  const prevImage = () => {
    if (hasImages) setImageIndex((imageIndex - 1 + p.images.length) % p.images.length);
  };

  return (
    <div className="project-card">
      {currentImage && (
        <div className="project-image-wrapper">
          <img src={currentImage} alt={p.title} className="project-image" />
          {hasImages && p.images.length > 1 && (
            <>
              <button className="carousel-btn carousel-btn--prev" onClick={prevImage} aria-label="Imagen anterior">
                ‹
              </button>
              <button className="carousel-btn carousel-btn--next" onClick={nextImage} aria-label="Siguiente imagen">
                ›
              </button>
              <div className="carousel-dots">
                {p.images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`dot ${idx === imageIndex ? 'active' : ''}`}
                    onClick={() => setImageIndex(idx)}
                    aria-label={`Ir a imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
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
  );
}

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
          <ProjectCard key={p.id} p={p} />
        )) : (
          <p className="no-results">No hay proyectos con esa tecnología aún. ¡Pronto! 🚀</p>
        )}
      </div>
    </section>
  );
}
