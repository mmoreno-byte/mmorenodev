import './Projects.css'; // Importamos los estilos nuevos
import fotoProyecto from '../assets/proyecto1.jpg'; // <--- IMPORTA TU IMAGEN AQUÍ

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Developer Story",
      description: "Mi primer sitio profesional con React, Vite y despliegue automático con GitHub Actions.",
      tags: ["React", "Vite", "CSS3"],
      link: "https://github.com"
    },
    {
      id: 2,
      title: "Próximo Proyecto...",
      description: "Un espacio reservado para mi siguiente gran desarrollo con Node.js o APIs externas.",
      tags: ["Future", "Node.js"],
      link: "#"
    }
  ];

  return (
    <section className="projects-container">
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '10px' }}>Mis Proyectos</h2>
      <p style={{ textAlign: 'center', color: '#666' }}>Una selección de mis trabajos más recientes</p>
      
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            <h3>{p.title}</h3>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>{p.description}</p>
            <div style={{ marginTop: '15px' }}>
              {p.tags.map(tag => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
            <a href={p.link} target="_blank" className="project-link">Explorar Código →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
