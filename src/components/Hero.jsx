export default function Hero() {
  return (
    <header style={{ padding: '100px 20px', textAlign: 'center', background: '#1a1a1a', color: 'white' }}>
      <img 
        src="https://github.com" 
        alt="Foto de perfil" 
        style={{ borderRadius: '50%', width: '150px', border: '4px solid #646cff' }} 
      />
      <h1 style={{ fontSize: '3rem', margin: '20px 0' }}>mmoreno-byte</h1>
      <p style={{ fontSize: '1.5rem', color: '#888' }}>Frontend Developer | Apasionado por el Código</p>
      <div style={{ marginTop: '20px' }}>
        <span style={{ background: '#333', padding: '5px 15px', borderRadius: '20px', margin: '0 5px' }}>React</span>
        <span style={{ background: '#333', padding: '5px 15px', borderRadius: '20px', margin: '0 5px' }}>Vite</span>
        <span style={{ background: '#333', padding: '5px 15px', borderRadius: '20px', margin: '0 5px' }}>Node.js</span>
      </div>
    </header>
  )
}
