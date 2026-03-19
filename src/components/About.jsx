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
          ¡Hola! Soy <strong>Loli</strong>, desarrolladora web con formación en <strong>DAW</strong> y 
          experiencia en desarrollo de páginas web, análisis de ciberseguridad y desarrollo de software. 
          Llevo año y medio construyendo proyectos y cada día aprendo algo nuevo.
        </p>
        <p>
          Me metí en este mundo con una idea clara: crear soluciones digitales que sean 
          rápidas, accesibles y útiles para todos. Creo que la tecnología bien hecha 
          puede cambiar la forma en que las personas interactúan con el mundo.
        </p>
        <p>
          Actualmente estoy abierta a nuevas oportunidades y mi próxima meta es 
          especializarme en <strong>LLMs</strong> — porque el futuro del desarrollo 
          pasa por entender y construir con inteligencia artificial.
        </p>
        <p className="about-quote">
          "El código es mi lienzo y la lógica mi pincel."
        </p>
      </div>
    </section>
  );
}
