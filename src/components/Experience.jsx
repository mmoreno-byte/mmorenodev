import './Experience.css';
import useInView from '../hooks/useInView';

const timeline = [
  {
    type: 'experiencia',
    title: 'Prácticas — Desarrollo de Aplicaciones Web',
    place: 'ANDWEBSOL SL · En remoto',
    date: 'Feb 2026 — Actualidad',
    description: 'Gestión y optimización de contenidos web con Drupal. Desarrollo de scripts en Python para automatización de procesos. Diseño e implementación de APIs para comunicación entre servicios. Redacción de documentación técnica y funcional.',
    tags: ['Python', 'Drupal', 'APIs', 'Automatización', 'Documentación']
  },
  {
    type: 'experiencia',
    title: 'Analista de Ciberseguridad',
    place: 'Ayuntamiento de Granada · Presencial',
    date: 'Dic 2024 — Jun 2025',
    description: 'Evaluación de vulnerabilidades en sistemas y redes municipales. Implementación de políticas y protocolos de seguridad informática. Análisis forense digital y respuesta ante incidentes. Formación interna en concienciación sobre ciberseguridad.',
    tags: ['Ciberseguridad', 'Análisis forense', 'Redes', 'Seguridad informática']
  },
  {
    type: 'experiencia',
    title: 'Creadora de Páginas Web',
    place: 'Ayuntamiento de Granada · Presencial',
    date: 'Jun 2024 — Dic 2024',
    description: 'Diseño y desarrollo de ZEO Granada, un Mapa de Empleabilidad con recursos para búsqueda de empleo. Desarrollo con HTML5, CSS3, JavaScript, PHP y Java, con base de datos MySQL. Priorización de accesibilidad, usabilidad y rendimiento.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Java', 'MySQL']
  },
  {
    type: 'experiencia',
    title: 'Agente del Cambio — Transformación Digital',
    place: 'Escuela de Organización Industrial · Presencial',
    date: 'Mar 2024 — Abr 2024',
    description: 'Programa Generación Digital centrado en la digitalización de PYMEs. Formación en estrategias de innovación, marketing digital y adopción tecnológica. Diseño de estrategias de posicionamiento online y mejora de procesos internos.',
    tags: ['Transformación digital', 'Marketing digital', 'Innovación', 'PYMEs']
  },
  {
    type: 'formacion',
    title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
    place: 'Formación Profesional · Granada',
    date: 'Sept 2024 — Mayo 2026',
    description: 'Formación completa en desarrollo web frontend y backend. Proyectos reales con React, Spring Boot, PHP, MySQL y despliegue en producción con GitHub Actions y Railway.',
    tags: ['React', 'Spring Boot', 'PHP', 'MySQL', 'Java', 'JavaScript', 'GitHub Actions']
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