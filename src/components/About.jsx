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
          ¡Hola! Soy <strong>mmoreno-byte</strong>, una desarrolladora apasionada por el ecosistema de
          JavaScript y las interfaces modernas. Mi camino en la programación empezó por
          curiosidad y se ha convertido en mi profesión.
        </p>
        <p>
          Me encanta enfrentarme a retos lógicos y aprender nuevas tecnologías cada día.
          Actualmente estoy enfocada en dominar <strong>React</strong> y <strong>Node.js</strong> para construir
          aplicaciones completas y escalables.
        </p>
        <p className="about-quote">
          "El código es mi lienzo y la lógica mi pincel."
        </p>
      </div>
    </section>
  );
}
