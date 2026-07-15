import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ParticleField from './ParticleField'

const command = [
  { key: 'role', value: 'Full Stack & AI Engineer', color: '#A78BFA' },
  { key: 'stack', value: 'Golang · Python · React · Vertex AI', color: '#93C5FD' },
  { key: 'award', value: 'Google GenAI Hackathon Winner 🏆', color: '#86EFAC' },
  { key: 'status', value: 'open_to_work = true', color: '#FCD34D' },
]

function TypewriterLine({ text, delay }: { text: string; delay: number }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1))
        i++
        if (i >= text.length) { clearInterval(interval); setDone(true) }
      }, 22)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timer)
  }, [text, delay])

  return (
    <span>
      {displayed}
      {!done && <span className="animate-pulse">▌</span>}
    </span>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  }
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ paddingTop: '92px' }}>
      {/* Particle field — the wow moment */}
      <ParticleField />

      {/* Ambient glow */}
      <div className="absolute pointer-events-none" style={{
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
        filter: 'blur(80px)', top: -200, right: -100,
        animation: 'drift 18s ease-in-out infinite',
      }} />
      <div className="absolute pointer-events-none" style={{
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)', bottom: -100, left: -100,
        animation: 'drift 14s ease-in-out infinite reverse',
      }} />

      <style>{`
        @keyframes drift {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(40px,-30px) scale(1.08); }
          66% { transform: translate(-30px,40px) scale(0.94); }
        }
      `}</style>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12"
      >
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/60">
              Available for full-time · Immediate · India / Remote
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="font-display font-bold leading-[0.88] tracking-[-0.04em] mb-10"
            style={{ fontSize: 'clamp(4.5rem, 12vw, 10.5rem)' }}
          >
            <span className="block text-white">Shubham</span>
            <span className="block text-gradient">Sharma</span>
            <span className="block" style={{ color: 'transparent', WebkitTextStroke: '1px rgba(245,243,255,0.15)' }}>
              Engineer.
            </span>
          </motion.h1>

          {/* Terminal block */}
          <motion.div
            variants={item}
            className="mb-10 max-w-[520px] rounded-xl overflow-hidden"
            style={{ background: 'rgba(14,14,24,0.8)', backdropFilter: 'blur(16px)', border: '1px solid rgba(124,58,237,0.2)' }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(124,58,237,0.1)' }}>
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="font-mono text-[11px] text-white/45 ml-2">~/portfolio — zsh</span>
            </div>
            {/* Terminal lines */}
            <div className="px-4 py-4 space-y-2">
              {command.map((c, i) => (
                <div key={c.key} className="font-mono text-[13px] leading-relaxed flex gap-3">
                  <span className="text-violet-light flex-shrink-0">❯</span>
                  <span className="text-white/40 flex-shrink-0">{c.key.padEnd(8)}</span>
                  <span style={{ color: c.color }}>
                    <TypewriterLine text={c.value} delay={600 + i * 400} />
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom row */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-display font-semibold text-[15px] text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
                boxShadow: '0 0 0 0 rgba(124,58,237,0.3)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 40px rgba(124,58,237,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 0 rgba(124,58,237,0.3)')}
            >
              Let's build together
              <span className="text-lg">↗</span>
            </a>
            <a
              href="/Shubham_Sharma_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-display font-medium text-[14px] text-white/60 hover:text-white border-gradient transition-colors duration-300 hover:bg-white/4"
            >
              <span>↓</span> Download Resume
            </a>
            <a
              href="https://github.com/shubhusion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-display font-medium text-[14px] text-white/40 hover:text-white/80 transition-colors duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              GitHub →
            </a>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 pt-8 grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ borderTop: '1px solid rgba(124,58,237,0.12)' }}
        >
          {[
            { n: '10K+', l: 'Orders/month in production' },
            { n: '99.95%', l: 'Production uptime' },
            { n: '100+', l: 'Teams beaten at GenAI Hackathon' },
            { n: '7', l: 'Live products shipped' },
          ].map((s, i) => (
            <div key={i} className="pt-6 pr-6">
              <div className="font-display font-bold leading-none mb-2" style={{ fontSize: 'clamp(1.75rem,3.5vw,2.75rem)', letterSpacing: '-0.03em' }}>
                <span className="text-gradient">{s.n}</span>
              </div>
              <div className="font-mono text-[11px] text-white/50 tracking-wide leading-relaxed">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-4 h-4 border-r border-b border-white/30 rotate-45"
        />
      </motion.div>
    </section>
  )
}
