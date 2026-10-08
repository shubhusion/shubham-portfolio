import { motion } from 'framer-motion'
import Reveal from './Reveal'

const stats = [
  { v: '50K+', l: 'Lines of code' },
  { v: '5', l: 'Deployable services' },
  { v: '683', l: 'Line state machine' },
  { v: '82', l: 'Test files' },
]

export default function PrentlineTeaser() {
  return (
    <section id="prentline" className="py-24 scroll-mt-24" style={{ borderTop: '1px solid rgba(124,58,237,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-4 h-px bg-violet-light" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">Deep Dive · Prentline</span>
              </div>
              <h2 className="font-display font-bold tracking-[-0.03em] text-white"
                style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
                Deterministic coach. <span className="text-gradient">Probabilistic model.</span>
              </h2>
              <p className="mt-3 text-[14px] text-white/55 font-light max-w-2xl leading-relaxed">
                Gemini Live watches your hands and talks you through the procedure; a pure-Go state
                machine decides what is allowed to happen next. The architecture, the five repos and
                the engineering decisions behind it — in the case study.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}>
                {stats.map((s, i) => (
                  <div key={i} className="p-5" style={{ background: 'rgba(10,10,15,1)' }}>
                    <div className="font-display font-bold text-gradient leading-none"
                      style={{ fontSize: 'clamp(1.2rem,2vw,1.65rem)', letterSpacing: '-0.03em' }}>
                      {s.v}
                    </div>
                    <div className="font-mono text-[10px] text-white/50 mt-1.5">{s.l}</div>
                  </div>
                ))}
              </div>
              <motion.a
                href="/prentline.html"
                className="inline-flex items-center gap-2 mt-6 font-display text-[13px] font-semibold px-5 py-2.5 rounded-full text-white border-gradient hover:bg-violet/10 transition-colors duration-300"
                whileHover={{ x: 2 }}
              >
                Read the full case study <span>→</span>
              </motion.a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
