import { motion } from 'framer-motion'

const SKILLS = [
  'Python', 'Golang', 'React.js', 'TypeScript', 'Vertex AI',
  'Multi-Agent Systems', 'RAG Pipelines', 'LLM Orchestration',
  'AWS', 'Google Cloud', 'PostgreSQL', 'Redis', 'Docker',
  'Chrome Extensions', 'Distributed Systems', 'Playwright',
  'Cloud Run', 'Pub/Sub', 'Firestore', 'TanStack Router',
]

export default function Marquee() {
  const items = [...SKILLS, ...SKILLS]

  return (
    <div
      className="overflow-hidden py-3 relative"
      style={{
        background: 'rgba(14,14,24,0.8)',
        borderTop: '1px solid rgba(124,58,237,0.1)',
        borderBottom: '1px solid rgba(124,58,237,0.1)',
      }}
    >
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(10,10,15,1), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(10,10,15,1), transparent)' }} />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
      >
        {items.map((skill, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6 font-mono text-[11px] text-white/25 tracking-widest">
            {skill}
            <span className="text-violet/50 text-sm">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
