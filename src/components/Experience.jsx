import './Experience.css';
import useInView from '../hooks/useInView';

const experience = [
  {
    title: 'Desarrollo de Aplicaciones Web',
    place: 'Personal Independiente · En remoto',
    date: 'May 2026 — Actualidad',
    description: 'Colaboración externa para modernizar la infraestructura e-learning de una entidad del sector educativo. Auditoría técnica de la plataforma Moodle y los servidores, y migración a Moodle LTS con actualización de PHP (7.4 → 8.x). Configuración de entornos de pruebas para validar plugins antes de producción. Rediseño UI/UX (imagen corporativa, responsive) y consultoría técnica sobre integración de temporizadores compatibles con FUNDAE.',
    tags: ['Moodle', 'PHP', 'E-learning', 'QA', 'UI/UX']
  },
  {
    title: 'Desarrollo de Aplicaciones Web',
    place: 'ANDWEBSOL SL · En remoto',
    date: 'Feb 2026 — May 2026',
    description: 'Gestión y optimización de contenidos web con Drupal. Desarrollo de scripts en Python para automatización de procesos. Diseño e implementación de APIs para comunicación entre servicios. Redacción de documentación técnica y funcional.',
    tags: ['Python', 'Drupal', 'APIs', 'Automatización', 'Documentación']
  },
  {
    title: 'Analista de Ciberseguridad',
    place: 'Ayuntamiento de Granada · Presencial',
    date: 'Dic 2024 — Jun 2025',
    description: 'Evaluación de vulnerabilidades en sistemas y redes municipales. Implementación de políticas y protocolos de seguridad informática. Análisis forense digital y respuesta ante incidentes. Formación interna en concienciación sobre ciberseguridad.',
    tags: ['Ciberseguridad', 'Análisis forense', 'Redes', 'Seguridad informática']
  },
  {
    title: 'Creadora de Páginas Web',
    place: 'Ayuntamiento de Granada · Presencial',
    date: 'Jun 2024 — Dic 2024',
    description: 'Diseño y desarrollo de ZEO Granada, un Mapa de Empleabilidad con recursos para búsqueda de empleo. Desarrollo con HTML5, CSS3, JavaScript, PHP y Java, con base de datos MySQL. Priorización de accesibilidad, usabilidad y rendimiento.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Java', 'MySQL']
  },
  {
    title: 'Docencia (Marketing Digital)',
    place: 'COTEME · Presencial',
    date: 'Sept 2025',
    description: 'Docencia para la mejora del empleo dirigido al mundo del Marketing y Redes Sociales',
    tags: ['Redes Sociales', 'Marketing digital', 'Innovación']
  },
];

const education = [
  {
    title: 'Curso de Especialización en IA y Big Data',
    place: 'IES Zaidín Vergeles · Granada',
    date: 'En proceso',
    description: 'Formación especializada en inteligencia artificial y big data: modelos de machine learning, procesamiento y análisis de grandes volúmenes de datos, y su aplicación a proyectos reales.',
    tags: ['IA', 'Big Data', 'Machine Learning']
  },
  {
    title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
    place: 'Formación Profesional · Granada',
    date: 'Sept 2024 — Mayo 2026',
    description: 'Formación completa en desarrollo web frontend y backend. Proyectos reales con React, Spring Boot, PHP, MySQL y despliegue en producción con GitHub Actions y Railway.',
    tags: ['React', 'Spring Boot', 'PHP', 'MySQL', 'Java', 'JavaScript', 'GitHub Actions']
  }
];

function Timeline({ items, visible, kind }) {
  return (
    <div className={`timeline timeline--${kind}`}>
      {items.map((item, index) => (
        <div key={item.title + item.place} className={`timeline-item ${visible ? 'visible' : ''}`} style={{ '--delay': `${index * 0.1}s` }}>
          <div className="timeline-dot" />
          <div className="timeline-content">
            <div className="timeline-header">
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
      ))}
    </div>
  );
}

export default function Experience() {
  const [ref, visible] = useInView(0.1);

  return (
    <section ref={ref} className={`experience-container ${visible ? 'visible' : ''}`}>
      <h2 className="experience-title">Experiencia y Formación</h2>
      <p className="experience-subtitle">Mi camino en el desarrollo web</p>

      <h3 className="timeline-group-title">Experiencia</h3>
      <Timeline items={experience} visible={visible} kind="experiencia" />

      <h3 className="timeline-group-title">Formación</h3>
      <Timeline items={education} visible={visible} kind="formacion" />
    </section>
  );
}
