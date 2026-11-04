import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import PrentlineTeaser from './components/PrentlineTeaser'
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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 focus:z-50 focus:px-6 focus:py-3 focus:text-white focus:bg-violet focus:rounded"
      >
        Skip to main content
      </a>
      <main id="main" tabIndex={-1}>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <PrentlineTeaser />
        <ClientWork />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
