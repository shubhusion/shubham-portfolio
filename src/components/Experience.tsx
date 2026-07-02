import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
  {
    period: 'Oct 2025 — Present',
    company: 'Independent',
    type: 'Freelance · Multiple clients',
    badge: { label: '● Active', color: '#10b981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)' },
    role: 'Freelance Full Stack Engineer & Technical Consultant',
    desc: 'Independent practice delivering full-stack development and AI systems for four concurrent early-stage startup clients.',
    bullets: [
      'Built Chrome Extension + backend platform for LinkedIn Lead Discovery (KEEL) — Sales Navigator scraping, ICP scoring, Cloud Run + Pub/Sub task queue, rate limiting; eliminated ~66% duplicate LLM token usage; verified with 50 backend tests',
      'Built multi-platform content engine with Vertex AI Imagen 3 carousels, 48-hour channel deduplication, and Playbooks feature end-to-end (KEEL)',
      'Designed GitHub Actions CI/CD pipelines, migrated production repos, managed VPS deployments with GoHighLevel CRM integration (Transportvibes)',
      'Served as architecture lead for an early-stage startup — defined scalable frontend, backend, and cloud architecture (Reclevo)',
    ],
    tech: ['Python', 'Golang', 'React', 'Vertex AI', 'Cloud Run', 'Pub/Sub', 'Playwright', 'Chrome Extension', 'GitHub Actions'],
  },
  {
    period: 'Nov 2025 — Mar 2026',
    company: 'S2T AI',
    type: 'Full-time · Singapore (Remote)',
    badge: { label: 'Nov 2025 – Mar 2026', color: '#A78BFA', bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.2)' },
    role: 'Full Stack Engineer',
    desc: 'Engineered a scalable, profile-centric OSINT investigation platform with distributed backend and React.js micro-frontends across 6+ data sources.',
    link: { label: 'GoldenSpear ↗', url: 'https://s2t.ai/goldenspear-deep-webint.html' },
    bullets: [
      'Architected distributed backend with identity-resolution pipelines — keyword search, username expansion, evidence correlation',
      'Implemented SSE-based real-time progress tracking with TanStack Router, reducing perceived wait time by 40%',
      'Optimized backend aggregation reliably processing 10K+ records per search without frontend degradation',
      'Refactored crawler orchestration, reducing failed executions and broken data links by 30%',
    ],
    tech: ['Python', 'PostgreSQL', 'React.js', 'SSE', 'TanStack Router', 'Tailwind CSS'],
  },
  {
    period: 'Nov 2024 — Oct 2025',
    company: 'Platelink.ai',
    type: 'Full-time · London (Remote)',
    badge: { label: 'Founding Eng', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)' },
    role: 'Founding Full Stack Engineer',
    desc: 'Sole backend founding engineer — designed and deployed a microservice-based online ordering platform live with 15+ partner restaurants.',
    bullets: [
      'Owned entire backend architecture — Golang + Python microservices on AWS ECS (ALB, RDS, S3, SNS); 10K+ orders/month at 99.95% uptime',
      'Integrated Nash for delivery automation and Twilio/SendGrid for multi-channel communications across ordering, loyalty, and payments',
      'Built AI-powered food & nutrition tracking app (Flutter + Golang + Python) — reduced tracking time by 60%, boosted DAUs by 45%, 92% meal-log accuracy in pilot',
    ],
    tech: ['Golang', 'Python', 'Flutter', 'AWS ECS', 'Docker', 'Redis', 'MongoDB'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 lg:px-12" style={{ borderTop: '1px solid rgba(124,58,237,0.08)' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-px bg-violet-light" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">Experience</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-bold tracking-[-0.03em] text-white mb-16"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', letterSpacing: '-0.03em' }}>
            Where I've <span className="text-gradient">shipped.</span>
          </h2>
        </Reveal>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <Reveal key={i} delay={0.1}>
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-16 py-12 relative"
                style={{ borderBottom: '1px solid rgba(124,58,237,0.08)' }}
                whileHover={{ backgroundColor: 'rgba(124,58,237,0.02)' }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover left accent */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 origin-top"
                  style={{ background: 'linear-gradient(to bottom, #7C3AED, #60A5FA)' }}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Meta */}
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <div className="font-mono text-[10px] text-white/25 tracking-widest uppercase mb-3">{exp.period}</div>
                  <div className="font-display font-bold text-white text-[1.1rem] tracking-tight mb-1">{exp.company}</div>
                  <div className="font-mono text-[11px] text-white/35 mb-3">{exp.type}</div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 rounded-md"
                    style={{ background: exp.badge.bg, color: exp.badge.color, border: `1px solid ${exp.badge.border}` }}>
                    {exp.badge.label}
                  </span>
                  {exp.link && (
                    <a href={exp.link.url} target="_blank" rel="noopener noreferrer"
                      className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-violet-light hover:text-white transition-colors">
                      {exp.link.label}
                    </a>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display font-bold text-white mb-3 leading-tight"
                    style={{ fontSize: 'clamp(1.2rem,2vw,1.6rem)', letterSpacing: '-0.02em' }}>
                    {exp.role}
                  </h3>
                  <p className="text-[14px] text-white/45 leading-relaxed mb-5 font-light">{exp.desc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-[13.5px] text-white/50 leading-relaxed">
                        <span className="mt-2 w-1.5 h-px bg-gradient-to-r from-violet to-blue-400 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: b.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <motion.span
                        key={t}
                        className="font-mono text-[10px] px-2.5 py-1 rounded-md text-white/30 transition-all duration-200 cursor-default"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                        whileHover={{ borderColor: 'rgba(124,58,237,0.5)', color: '#A78BFA' }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
