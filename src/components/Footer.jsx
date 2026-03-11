export default function Footer() {
  return (
    <footer style={{ padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #333', marginTop: '50px' }}>
      <h3>Conecta conmigo</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '1.2rem', marginTop: '20px' }}>
        <a href="https://github.com" target="_blank" style={{ color: '#646cff', textDecoration: 'none' }}>GitHub</a>
        <a href="https://linkedin.com" target="_blank" style={{ color: '#646cff', textDecoration: 'none' }}>LinkedIn</a>
        <a href="mailto:mdmorenoinfor@gmail.com" style={{ color: '#646cff', textDecoration: 'none' }}>Email</a>
      </div>
      <p style={{ marginTop: '30px', color: '#666', fontSize: '0.9rem' }}>
        © 2026 mmoreno-byte • Hecho con Vite & React
      </p>
    </footer>
  )
}
