export default function About() {
  return (
    <section style={{ 
      padding: '80px 20px', 
      maxWidth: '800px', 
      margin: '0 auto', 
      lineHeight: '1.8', 
      textAlign: 'center' 
    }}>
      <h2 style={{ fontSize: '2.5rem', color: '#646cff', marginBottom: '20px' }}>Sobre mí</h2>
      <div style={{ fontSize: '1.2rem', color: '#ccc' }}>
        <p>
          ¡Hola! Soy <strong>mmoreno-byte</strong>, un desarrollador apasionado por el ecosistema de 
          JavaScript y las interfaces modernas. Mi camino en la programación empezó por 
          curiosidad y se ha convertido en mi profesión.
        </p>
        <p style={{ marginTop: '20px' }}>
          Me encanta enfrentarme a retos lógicos y aprender nuevas tecnologías cada día. 
          Actualmente estoy enfocado en dominar <strong>React</strong> y <strong>Node.js</strong> para construir 
          aplicaciones completas y escalables.
        </p>
        <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#888' }}>
          "El código es mi lienzo y la lógica mi pincel."
        </p>
      </div>
    </section>
  );
}
