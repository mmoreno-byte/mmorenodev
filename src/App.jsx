import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Divider() {
  return (
    <div className="divider">
      <span>// ——</span>
    </div>
  );
}

function App() {
  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <div id="hero"><Hero /></div>
      <Divider />
      <div id="about"><About /></div>
      <Divider />
      <div id="skills"><Skills /></div>
      <Divider />
      <div id="projects"><Projects /></div>
      <Divider />
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  )
}

export default App
