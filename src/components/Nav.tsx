import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Client Work', href: '#client-work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const dh = document.documentElement.scrollHeight - window.innerHeight
      setProgress(dh > 0 ? (window.scrollY / dh) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] z-[200] pointer-events-none"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(to right, #7C3AED, #60A5FA)',
        }}
      />

      {/* Currently building ticker */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-[150] h-8 overflow-hidden"
        style={{ background: 'rgba(14,14,24,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(124,58,237,0.15)' }}
      >
        <div className="flex items-center h-full">
          <div className="flex items-center gap-2 px-4 border-r border-violet/20 h-full flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] animate-pulse" />
            <span className="font-mono text-[10px] text-violet-light tracking-widest uppercase">Now</span>
          </div>
          <div className="overflow-hidden flex-1">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
            >
              {[0, 1].map(i => (
                <span key={i} className="font-mono text-[11px] text-white/30 px-8">
                  Building AI-powered GTM automation at{' '}
                  <span className="text-violet-light">KEEL</span> · Chrome Extension + LLM pipelines ·{' '}
                  <span className="text-violet-light">Vertex AI Imagen 3</span> · Pub/Sub task queues &nbsp;✦&nbsp;
                  Open to full-time <span className="text-violet-light">Founding Engineer</span> /{' '}
                  <span className="text-violet-light">AI Engineer</span> roles · Immediate availability · India / Remote &nbsp;✦&nbsp;
                  Latest: <span className="text-violet-light">LinkedIn Lead Discovery</span> pipeline shipped · 50 backend tests · ~66% LLM token reduction &nbsp;✦&nbsp;
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 z-[100] flex items-center justify-between px-6 lg:px-12 transition-all duration-500"
        style={{
          top: '32px',
          height: '60px',
          background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(124,58,237,0.1)' : '1px solid transparent',
        }}
      >
        <a href="#" className="font-mono text-[13px] text-violet-light flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] animate-pulse" />
          shubham.dev
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-violet-light group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/Shubham_Sharma_Resume.pdf"
            download
            className="hidden md:flex items-center gap-2 font-display text-[13px] font-semibold px-4 py-2 rounded-full text-white border-gradient transition-colors duration-300 hover:bg-violet/10"
          >
            <span>↓</span> Resume
          </a>
          <a
            href="mailto:shubham27.sharma03@gmail.com"
            className="hidden md:flex items-center font-display text-[13px] font-semibold px-5 py-2 rounded-full bg-violet text-white hover:bg-violet/80 transition-colors duration-300"
          >
            Hire me
          </a>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(24px)' }}
          >
            <button onClick={close} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X size={24} />
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={close}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.05 }}
                className="font-display text-4xl font-bold text-white/60 hover:text-white transition-colors tracking-tight"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:shubham27.sharma03@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: links.length * 0.05 }}
              className="mt-4 px-8 py-3 rounded-full bg-violet text-white font-display font-semibold"
            >
              Hire me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
