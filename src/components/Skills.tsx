import { motion } from 'framer-motion'
import Reveal from './Reveal'

const groups = [
  { name: 'Languages', skills: ['Python', 'Golang', 'TypeScript / Node.js', 'Dart / Flutter'] },
  { name: 'AI / GenAI', skills: ['Multi-Agent Systems', 'RAG Pipelines', 'LLM Orchestration', 'Vertex AI · Imagen 3', 'Agentic Workflows'] },
  { name: 'Frontend', skills: ['React.js', 'TanStack Router', 'Tailwind CSS', 'Chrome Extensions', 'Framer Motion'] },
  { name: 'Infrastructure', skills: ['AWS — ECS, RDS, S3, SNS', 'Google Cloud — Cloud Run, Pub/Sub', 'Docker · Kubernetes', 'GitHub Actions · CI/CD'] },
  { name: 'Data & Systems', skills: ['PostgreSQL · MongoDB', 'Redis · Celery', 'SSE · Async Processing', 'Distributed Systems'] },
  { name: 'Tools', skills: ['Playwright · Selenium', 'Firebase · Firestore', 'Flask · FastAPI', 'REST API Design'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 lg:px-12" style={{ borderTop: '1px solid rgba(124,58,237,0.08)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 items-start">

          <div className="lg:sticky lg:top-24">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-4 h-px bg-violet-light" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">Skills</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold tracking-[-0.03em] text-white mb-4"
                style={{ fontSize: 'clamp(2.5rem,4.5vw,3.75rem)' }}>
                What I<br />work <span className="text-gradient">with.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-[15px] text-white/40 font-light leading-relaxed">
                Technologies used in production — not a list of things I've heard of.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}>
            {groups.map((g, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <motion.div
                  className="p-6 relative overflow-hidden"
                  style={{ background: 'rgba(10,10,15,1)' }}
                  whileHover={{ backgroundColor: 'rgba(14,14,24,1)' }}
                >
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-px origin-left"
                    style={{ background: 'linear-gradient(to right, #7C3AED, #60A5FA)' }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="font-mono text-[10px] text-violet-light tracking-[0.12em] uppercase mb-4">{g.name}</div>
                  <ul className="space-y-2">
                    {g.skills.map((s, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-[13px] text-white/50">
                        <span className="w-1 h-1 rounded-full bg-violet/60 flex-shrink-0" />
                        <span className="font-medium text-white/70">{s}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
