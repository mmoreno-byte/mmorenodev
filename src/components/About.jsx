import useInView from '../hooks/useInView';
import './About.css';

export default function About() {
  const [ref, visible] = useInView(0.2);

  return (
    <section
      ref={ref}
      className={`about-container ${visible ? 'visible' : ''}`}
    >
      <h2 className="about-title">Sobre mí</h2>
      <div className="about-content">
        <p>
          ¡Hola! Soy <strong>Loli</strong>. Empecé en educación, enseñando a personas.
          Luego aprendí a construir código. Ahora llevo dos años creando proyectos reales,
          haciendo lo que se me da bien: explicar lo complejo de forma que se entienda.
        </p>
        <p>
          Llevo dos años desarrollando, he pasado por APIs, seguridad, rendimiento...
          y ahora estoy explorando cómo los <strong>LLMs</strong> pueden hacer que las aplicaciones sean
          realmente útiles, no solo algo estético. 
        </p>
      </div>
    </section>
  );
}
