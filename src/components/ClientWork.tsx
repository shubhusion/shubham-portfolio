import { motion } from 'framer-motion'
import Reveal from './Reveal'

const clients = [
  {
    num: '01', client: 'Transportvibes',
    name: 'Safeed\'s Auto Transport',
    url: 'safeedsautotransport.com',
    link: 'https://safeedsautotransport.com',
    highlights: ['GoHighLevel CRM integration for lead capture', 'Google Analytics for conversion tracking', 'Custom REST APIs for internal integrations'],
    tags: ['Frontend', 'REST APIs', 'VPS Deploy', 'GoHighLevel'],
  },
  {
    num: '02', client: 'Transportvibes',
    name: 'TransportVibe',
    url: 'transportvibe.com',
    link: 'https://transportvibe.com',
    highlights: ['GitHub Actions CI/CD for automatic deployments', 'Secrets management and environment isolation', 'Full-stack frontend + backend API layer'],
    tags: ['Frontend', 'GitHub Actions', 'CI/CD', 'Backend APIs'],
  },
  {
    num: '03', client: 'Transportvibes',
    name: 'Broadway Auto Transport',
    url: 'broadwayautotransport.com',
    link: 'https://broadwayautotransport.com',
    highlights: ['Full VPS provisioning and environment config', 'Third-party API integrations', 'Google Analytics for data-driven decisions'],
    tags: ['Frontend', 'VPS', 'REST APIs', 'Analytics'],
  },
  {
    num: '04', client: 'Transportvibes',
    name: 'Trustline Carriers',
    url: 'trustlinecarriers.com',
    link: 'https://trustlinecarriers.com',
    highlights: ['Repository migration to GitHub with access control', 'GoHighLevel CRM for lead management', 'API stability and scalable deployment'],
    tags: ['Frontend', 'GoHighLevel', 'GitHub', 'VPS Deploy'],
  },
  {
    num: '05', client: 'Reclevo · Technical Consultant',
    name: 'SmartOps 360',
    url: 'reclevo.in/products/smartops-360',
    link: 'https://www.reclevo.in/products/smartops-360',
    highlights: ['Defined scalable architecture across frontend, backend, and cloud', 'Advised on speed-vs-scalability trade-offs', 'Established long-term engineering direction'],
    tags: ['Architecture Advisory', 'System Design', 'Technical Consulting'],
    wide: true,
  },
  {
    num: '06', client: 'KEEL · AI Architect & Full Stack',
    name: 'KEEL Platform',
    url: 'usekeel.in',
    link: 'https://usekeel.in',
    highlights: ['Chrome Extension for LinkedIn Lead Discovery', 'Multi-platform content engine with Vertex AI', 'Eliminated ~66% duplicate LLM token usage', '50 backend tests passing end-to-end'],
    tags: ['Chrome Extension', 'Cloud Run', 'Pub/Sub', 'Vertex AI', 'Python'],
    wide: true,
  },
  {
    num: '07', client: 'S2T AI · Full Stack Engineer',
    name: 'GoldenSpear — Deep Web Intelligence',
    url: 's2t.ai/goldenspear-deep-webint.html',
    link: 'https://s2t.ai/goldenspear-deep-webint.html',
    highlights: ['Distributed OSINT investigation platform', 'Identity-resolution pipelines across 6+ sources', 'SSE real-time tracking — 40% wait time reduction', '10K+ records per search processed reliably'],
    tags: ['Python', 'PostgreSQL', 'React.js', 'SSE', 'Distributed Systems'],
    wide: true,
  },
]

export default function ClientWork() {
  const narrow = clients.filter(c => !c.wide)
  const wide = clients.filter(c => c.wide)

  return (
    <section id="client-work" className="py-32 px-6 lg:px-12" style={{ borderTop: '1px solid rgba(124,58,237,0.08)' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-px bg-violet-light" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">Client Work</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-bold tracking-[-0.03em] text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
            Live in <span className="text-gradient">production.</span>
          </h2>
          <p className="text-[15px] text-white/55 font-light mb-4">7 live products across 4 clients. Click any to see the work.</p>
        </Reveal>

        {/* Stats bar */}
        <Reveal delay={0.15}>
          <div className="flex gap-8 flex-wrap mb-16 py-6"
            style={{ borderTop: '1px solid rgba(124,58,237,0.1)', borderBottom: '1px solid rgba(124,58,237,0.1)' }}>
            {[
              { v: '7', l: 'Live products' },
              { v: 'CI/CD', l: 'GitHub Actions' },
              { v: 'VPS', l: 'Production infra' },
              { v: 'CRM', l: 'GoHighLevel' },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display font-bold text-gradient" style={{ fontSize: '1.4rem', letterSpacing: '-0.03em' }}>{s.v}</div>
                <div className="font-mono text-[10px] text-white/40 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 2-col narrow cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mb-px"
          style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.08)' }}>
          {narrow.map((c, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <ClientCard {...c} />
            </Reveal>
          ))}
        </div>

        {/* Full-width wide cards */}
        <div className="flex flex-col gap-px"
          style={{ background: 'rgba(124,58,237,0.08)', borderLeft: '1px solid rgba(124,58,237,0.08)', borderRight: '1px solid rgba(124,58,237,0.08)', borderBottom: '1px solid rgba(124,58,237,0.08)' }}>
          {wide.map((c, i) => (
            <Reveal key={i} delay={0.1}>
              <ClientCard {...c} fullWidth />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClientCard({ num, client, name, url, link, highlights, tags, fullWidth }: any) {
  return (
    <motion.div
      className={`flex flex-col gap-4 p-7 relative ${fullWidth ? 'grid grid-cols-1 lg:grid-cols-2 gap-8' : ''}`}
      style={{ background: 'rgba(10,10,15,1)' }}
      whileHover={{ backgroundColor: 'rgba(14,14,24,1)' }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{ background: 'linear-gradient(to right, #7C3AED, #60A5FA)' }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
      />

      <div className={fullWidth ? '' : ''}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="font-mono text-[10px] text-violet-light mb-1">{num} · {client}</div>
            <div className="font-display font-bold text-white leading-tight mb-0.5"
              style={{ fontSize: fullWidth ? 'clamp(1.2rem,2vw,1.5rem)' : '1.15rem', letterSpacing: '-0.02em' }}>
              {name}
            </div>
            <div className="font-mono text-[10px] text-white/40">{url}</div>
          </div>
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1.5 rounded-lg flex-shrink-0 ml-4"
            style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)' }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Live ↗
          </motion.a>
        </div>

        {!fullWidth && (
          <ul className="space-y-2 mb-4">
            {highlights.map((h: string, j: number) => (
              <li key={j} className="flex gap-2.5 text-[12px] text-white/55 leading-relaxed">
                <span className="mt-2 w-4 h-px bg-gradient-to-r from-violet to-blue-400 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5">
          {tags.map((t: string) => (
            <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded text-white/40"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {fullWidth && (
        <ul className="space-y-2.5">
          {highlights.map((h: string, j: number) => (
            <li key={j} className="flex gap-3 text-[13px] text-white/45 leading-relaxed">
              <span className="mt-2 w-4 h-px bg-gradient-to-r from-violet to-blue-400 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}
