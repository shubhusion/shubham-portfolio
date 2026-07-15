import { motion } from 'framer-motion'
import Reveal from './Reveal'

const projects = [
  {
    num: '01', cat: 'AI · Automation · Chrome Extension',
    name: 'LinkedIn Lead Discovery Platform',
    client: 'KEEL — 2026', span: 'lg:col-span-7',
    desc: 'Chrome Extension + backend for Sales Navigator scraping — full ICP scoring pipeline, Cloud Run + Pub/Sub task queue, multi-platform content engine with Vertex AI Imagen 3, 48-hour channel deduplication, and Playbooks feature end-to-end.',
    metrics: [{ v: '~66%', l: 'LLM token reduction', green: true }, { v: '50', l: 'Backend tests passing' }],
    tags: ['Chrome Extension', 'Cloud Run', 'Pub/Sub', 'Vertex AI', 'Python'],
    link: 'https://usekeel.in',
  },
  {
    num: '02', cat: 'Distributed · OSINT',
    name: 'OSINT Investigation Platform',
    client: 'S2T AI · 2025–2026', span: 'lg:col-span-5',
    desc: 'Profile-centric investigation system with identity-resolution pipelines, SSE real-time tracking, distributed crawler orchestration across 6+ data sources.',
    metrics: [{ v: '10K+', l: 'Records/search' }, { v: '40%', l: 'Wait time reduction', green: true }],
    tags: ['PostgreSQL', 'React.js', 'SSE', 'TanStack', 'Python'],
    link: 'https://s2t.ai/goldenspear-deep-webint.html',
  },
  {
    num: '03', cat: 'Full Stack · AI · Production',
    name: 'AI Ordering Platform',
    client: 'Platelink.ai · 2024–2025', span: 'lg:col-span-4',
    desc: 'Microservice ordering platform + AI nutrition tracking app. Sole backend founding engineer.',
    metrics: [{ v: '10K+', l: 'Orders/month' }, { v: '99.95%', l: 'Uptime', green: true }],
    tags: ['Golang', 'Flutter', 'AWS ECS'],
    link: '#',
  },
  {
    num: '04', cat: 'GenAI · RAG · Multi-Agent',
    name: 'Lumenslate',
    client: 'Personal Project · 2025', span: 'lg:col-span-4',
    desc: 'Multi-agent LLM-powered RAG system for question generation, automated grading, and performance analytics on Google Cloud.',
    metrics: [{ v: '40%', l: 'Teacher productivity ↑', green: true }],
    tags: ['RAG', 'Vertex AI', 'Golang', 'Firestore'],
    link: 'https://github.com/shubhusion',
  },
  {
    num: '05', cat: 'GenAI · Fintech · 🏆 Winner',
    name: 'AarthikSetu',
    client: 'Google GenAI Hackathon · 2024', span: 'lg:col-span-4',
    desc: 'GenAI financial platform for MSMEs — Golang APIs with Redis caching, multi-layer auth. Won 1st place Fintech Track among 100+ teams.',
    metrics: [{ v: '30%', l: 'API response time ↓', green: true }],
    tags: ['Golang', 'Redis', 'Cloud Run', 'Firebase'],
    link: 'https://github.com/shubhusion',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32" style={{ borderTop: '1px solid rgba(124,58,237,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-px bg-violet-light" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">Projects</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-bold tracking-[-0.03em] text-white"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
            Things I've <span className="text-gradient">built.</span>
          </h2>
          <p className="mt-3 text-[15px] text-white/55 font-light">Production systems and AI products — each one shipped and running.</p>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-px"
          style={{ background: 'rgba(124,58,237,0.08)', borderTop: '1px solid rgba(124,58,237,0.08)', borderBottom: '1px solid rgba(124,58,237,0.08)' }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className={`${p.span} flex flex-col gap-4 p-8 relative overflow-hidden group`}
              style={{ background: 'rgba(10,10,15,1)' }}
              whileHover={{ backgroundColor: 'rgba(14,14,24,1)' }}
              transition={{ duration: 0.25 }}
            >
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.06), rgba(96,165,250,0.04))' }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="flex justify-between items-start relative z-10">
                <div>
                  <div className="font-mono text-[10px] text-white/35 mb-1">{p.num}</div>
                  <div className="font-mono text-[10px] text-violet-light tracking-wider">{p.cat}</div>
                </div>
                <motion.a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 flex-shrink-0"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  whileHover={{ borderColor: '#A78BFA', color: '#A78BFA', rotate: -45 }}
                  transition={{ duration: 0.25 }}
                >
                  ↗
                </motion.a>
              </div>

              <div className="relative z-10">
                <div className="font-display font-bold text-white leading-tight mb-1"
                  style={{ fontSize: 'clamp(1.1rem,1.8vw,1.5rem)', letterSpacing: '-0.02em' }}>
                  {p.name}
                </div>
                  <div className="font-mono text-[10px] text-white/40">{p.client}</div>
              </div>

              <p className="text-[13px] text-white/45 leading-relaxed font-light flex-1 relative z-10">{p.desc}</p>

              <div className="flex gap-6 relative z-10">
                {p.metrics.map((m, j) => (
                  <div key={j}>
                    <div className="font-display font-bold leading-none mb-1"
                      style={{ fontSize: 'clamp(1.2rem,2vw,1.65rem)', letterSpacing: '-0.03em', color: m.green ? '#34d399' : undefined }}
                    >
                      {m.green ? m.v : <span className="text-gradient">{m.v}</span>}
                    </div>
                    <div className="font-mono text-[10px] text-white/40 tracking-wide">{m.l}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 relative z-10">
                {p.tags.map(t => (
                  <span key={t} className="font-mono text-[10px] px-2 py-1 rounded text-white/40"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
