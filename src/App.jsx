import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Divider from './components/Divider'

function App() {
  return (
    <div style={{ backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <ThemeToggle />
      <div id="hero"><Hero /></div>
      <Divider />
      <div id="about"><About /></div>
      <Divider />
      <div id="skills"><Skills /></div>
      <Divider />
      <div id="projects"><Projects /></div>
      <Divider />
      <div id="contact"><Contact /></div>
      <Divider />
      <Footer />
    </div>
  )
}

export default App