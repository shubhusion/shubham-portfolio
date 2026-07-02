import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import ClientWork from './components/ClientWork'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="noise-overlay min-h-screen" style={{ background: '#0A0A0F' }}>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <ClientWork />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
