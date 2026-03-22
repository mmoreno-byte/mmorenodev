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
          Llevo año y medio construyendo proyectos y cada día aprendo algo nuevo.
        </p>
        <p>
          Me apasiona crear soluciones digitales rápidas, accesibles 
          y útiles. Y mi próxima meta es clara: especializarme en <strong>LLMs</strong>, 
          porque creo que el futuro del desarrollo pasa por entender 
          y construir con inteligencia artificial.
        </p>
        <p className="about-quote">
          "El código es mi lienzo y la lógica mi pincel."
        </p>
      </div>
    </section>
  );
}
