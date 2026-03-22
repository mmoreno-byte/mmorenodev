import { useRef } from 'react';
import useInView from '../hooks/useInView';
import './Experience.css';

const timeline = [
  {
    type: 'formacion',
    title: 'Técnico Superior en DAW',
    place: 'Formación Profesional',
    date: '2023 — Actualidad',
    description: 'Desarrollo de Aplicaciones Web. Formación en frontend, backend, bases de datos y despliegue de aplicaciones.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Java']
  },
  {
    type: 'experiencia',
    title: 'Prácticas de Desarrollo Web',
    place: 'Empresa de prácticas',
    date: '2025',
    description: 'Desarrollo y mantenimiento de aplicaciones web. Trabajo en equipo con metodologías ágiles y control de versiones con Git.',
    tags: ['React', 'Vite', 'Git', 'GitHub']
  },
  {
    type: 'proyecto',
    title: 'Videogames API — Proyecto personal',
    place: 'Proyecto propio',
    date: '2025',
    description: 'API REST completa con Spring Boot, autenticación JWT y base de datos PostgreSQL desplegada en Railway.',
    tags: ['Java', 'Spring Boot', 'JWT', 'PostgreSQL']
  },
  {
    type: 'proyecto',
    title: 'Portfolio personal',
    place: 'Proyecto propio',
    date: '2025',
    description: 'Portfolio profesional con React, Vite, efecto Matrix, animaciones y despliegue automático con GitHub Actions.',
    tags: ['React', 'Vite', 'CSS3', 'GitHub Actions']
  }
];

const typeConfig = {
  formacion: { label: 'Formación', color: '#646cff' },
  experiencia: { label: 'Experiencia', color: '#5eead4' },
  proyecto: { label: 'Proyecto', color: '#f7df1e' }
};

export default function Experience() {
  const [ref, visible] = useInView(0.1);

  return (
    <section ref={ref} className={`experience-container ${visible ? 'visible' : ''}`}>
      <h2 className="experience-title">Experiencia y Formación</h2>
      <p className="experience-subtitle">Mi camino en el desarrollo web</p>

      <div className="timeline">
        {timeline.map((item, index) => {
          const config = typeConfig[item.type];
          return (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" style={{ borderColor: config.color }} />
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-badge" style={{ color: config.color, borderColor: config.color }}>
                    {config.label}
                  </span>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-place">{item.place}</p>
                <p className="timeline-description">{item.description}</p>
                <div className="timeline-tags">
                  {item.tags.map(tag => (
                    <span key={tag} className="timeline-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}