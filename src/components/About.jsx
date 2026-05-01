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
          ¡Hola! Soy <strong>Loli</strong>, desarrolladora web con formación en <strong>DAW</strong>.
          Llevo año y medio construyendo proyectos. Vengo del mundo de la educación, y esa experiencia
          me enseñó a explicar lo complejo de forma simple, algo que aplico tanto al código como a la
          documentación técnica.
        </p>
        <p>
          Me especializo en desarrollo Full Stack y estoy dando el salto hacia los <strong>LLMs</strong>,
          porque creo que el futuro del desarrollo pasa por entender
          y construir con inteligencia artificial.
        </p>
      </div>
    </section>
  );
}
