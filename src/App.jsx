import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh' }}>
      <Hero />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
