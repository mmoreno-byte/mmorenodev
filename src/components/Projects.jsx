export default function Projects() {
  const misProyectos = [
    {
      id: 1,
      titulo: "Mi primer Portfolio",
      desc: "Web profesional construida con React y Vite.",
      link: "https://github.com",
      tech: ["React", "Vite", "GitHub Actions"]
    },
    {
      id: 2,
      titulo: "Proyecto Futuro",
      desc: "Aquí irá tu siguiente gran idea.",
      link: "#",
      tech: ["JavaScript", "CSS"]
    }
  ];

  return (
    <section style={{ padding: '50px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#646cff' }}>Proyectos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '30px' }}>
        {misProyectos.map(project => (
          <div key={project.id} style={{ background: '#2a2a2a', padding: '20px', borderRadius: '15px', border: '1px solid #444' }}>
            <h3>{project.titulo}</h3>
            <p style={{ color: '#aaa' }}>{project.desc}</p>
            <div style={{ marginBottom: '15px' }}>
              {project.tech.map(t => (
                <small key={t} style={{ background: '#444', padding: '2px 8px', borderRadius: '5px', marginRight: '5px' }}>{t}</small>
              ))}
            </div>
            <a href={project.link} target="_blank" style={{ color: '#646cff', textDecoration: 'none', fontWeight: 'bold' }}>Ver código →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
