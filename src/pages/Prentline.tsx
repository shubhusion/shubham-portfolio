import { motion } from 'framer-motion'
import Cursor from '../components/Cursor'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PrentlineCaseStudy from '../components/PrentlineCaseStudy'

export default function PrentlinePage() {
  return (
    <div className="noise-overlay min-h-screen" style={{ background: '#0A0A0F' }}>
      <Cursor />
      <Nav />
      <main>
        <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ paddingTop: '9.5rem' }}>
          <motion.a
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-200"
            whileHover={{ x: -3 }}
          >
            <span className="text-violet-light">←</span> Back to all projects
          </motion.a>
        </div>
        <PrentlineCaseStudy />
      </main>
      <Footer />
    </div>
  )
}
