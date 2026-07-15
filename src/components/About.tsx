import { motion } from 'framer-motion'
import Reveal from './Reveal'

const badges = [
  { icon: '🏆', title: 'Google GenAI Hackathon Winner', sub: 'Fintech Track · 1st place · 100+ teams · 2024' },
  { icon: '🎓', title: 'IIT Madras + Jaypee Institute', sub: 'B.S. Data Science · B.Tech Information Technology' },
  { icon: '🤖', title: 'AI-Native Engineering', sub: 'RAG · Multi-Agent · LLM Orchestration · Vertex AI' },
  { icon: '🚀', title: 'Founding Engineer Experience', sub: 'Built and owned backend at two early-stage startups' },
  { icon: '📍', title: 'Ghaziabad, India · Remote-first', sub: 'Immediate availability · Open to competitive offers' },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <Reveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-4 h-px bg-violet-light" />
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">About me</span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2
          className="font-display font-bold leading-[1.02] tracking-[-0.03em] text-white mb-16"
          style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}
        >
          Building at the intersection<br />
          of <span className="text-gradient">AI</span> and production systems.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Photo + body */}
        <div className="flex flex-col gap-8">
          {/* Photo placeholder */}
          <Reveal delay={0.15}>
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              style={{ background: 'rgba(14,14,24,0.8)', border: '1px solid rgba(124,58,237,0.2)' }}
            >
              <img
                src="/images/shubham-headshot.png"
                alt="Shubham Sharma"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.9), transparent)' }}>
                <div className="font-display font-bold text-white text-lg tracking-tight">Shubham Sharma</div>
                <div className="font-mono text-[11px] text-violet-light mt-0.5">Full Stack & AI Engineer</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-4 text-[16px] text-white/55 leading-[1.85] font-light">
              <p>
                I'm a Full Stack Engineer based in Ghaziabad, India — with a B.Tech in IT from{' '}
                <strong className="text-white font-medium">Jaypee Institute</strong> and a B.S. in Data Science from{' '}
                <strong className="text-white font-medium">IIT Madras</strong>.
              </p>
              <p>
                My background spans founding-engineer roles at AI startups, distributed systems at scale, and independent consulting
                for four concurrent startup clients. I've built ordering platforms processing{' '}
                <strong className="text-white font-medium">10K+ orders/month</strong>, OSINT investigation systems,
                Chrome Extension automation pipelines, and multi-agent GenAI products.
              </p>
              <p>
                I use AI-assisted development as a daily practice — not as a shortcut, but as a force multiplier.{' '}
                <strong className="text-white font-medium">The output of a small team, as one engineer.</strong>
              </p>
              <div className="flex gap-6 pt-2">
                <a href="https://linkedin.com/in/shubhusion" target="_blank" rel="noopener noreferrer"
                  className="font-mono text-[13px] text-violet-light border-b border-violet/30 hover:border-violet-light transition-colors">
                  LinkedIn ↗
                </a>
                <a href="https://github.com/shubhusion" target="_blank" rel="noopener noreferrer"
                  className="font-mono text-[13px] text-violet-light border-b border-violet/30 hover:border-violet-light transition-colors">
                  GitHub ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Badges */}
        <div className="flex flex-col gap-px rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(124,58,237,0.1)' }}>
          {badges.map((b, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <motion.div
                className="flex items-center gap-4 p-5 transition-colors duration-200 relative group"
                style={{ background: 'rgba(14,14,24,0.6)', borderBottom: i < badges.length - 1 ? '1px solid rgba(124,58,237,0.08)' : 'none' }}
                whileHover={{ backgroundColor: 'rgba(20,20,32,0.8)' }}
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet to-blue-400"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}
                >
                  {b.icon}
                </div>
                <div>
                  <div className="font-display font-semibold text-[14px] text-white leading-snug">{b.title}</div>
                  <div className="font-mono text-[11px] text-white/50 mt-0.5">{b.sub}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
