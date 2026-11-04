import { motion } from 'framer-motion'
import Cursor from '../components/Cursor'
import Footer from '../components/Footer'
import KarumCaseStudy from '../components/KarumCaseStudy'
import Nav from '../components/Nav'

export default function KarumPage() {
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
        <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ paddingTop: '9.5rem' }}>
          <motion.a
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-200"
            whileHover={{ x: -3 }}
          >
            <span className="text-violet-light">←</span> Back to all projects
          </motion.a>
        </div>
        <KarumCaseStudy />
      </main>
      <Footer />
    </div>
  )
}
