import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', color: 'white' }}>
      <Hero />
      <Projects />
      <footer style={{ padding: '40px', textAlign: 'center', color: '#666', borderTop: '1px solid #333' }}>
        <p>© 2026 mmoreno-byte | Construido con React + Vite</p>
      </footer>
    </div>
  )
}

export default App
