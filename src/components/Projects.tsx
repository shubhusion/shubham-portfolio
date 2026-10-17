import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { DeviceFrame, DevicePair } from './DeviceFrame'

const projects = [
  {
    num: '01', cat: 'Multimodal AI · Realtime · Multi-Tenant SaaS',
    name: 'Prentline — AI Hands-Free Training Platform',
    client: 'Personal Project · 2026', span: 'lg:col-span-12',
    desc: 'Five-service SaaS that turns SOPs into live AI-coached training sessions — Gemini Live (voice + video over WebSocket) watches the workspace while a deterministic 683-line Go state machine owns step tracking, L1–L5 hint escalation and destructive-step gating, then emits a computable scorecard. Supervisors get a live command center with shadow mode, one-click audio takeover and cohort error analytics.',
    metrics: [{ v: '50K+', l: 'LOC across 5 services' }, { v: '82', l: 'Test files', green: true }],
    tags: ['Go · Gin', 'Flutter Web', 'Gemini Live API', 'PostgreSQL · Atlas', 'FastAPI', 'WebSocket'],
    link: '/prentline',
    media: null,
  },
  {
    num: '02', cat: 'GovTech · AI · Full Stack',
    name: 'Roothscale — Constituency War Room OS',
    client: 'Reclevo · 2026', span: 'lg:col-span-12',
    desc: 'NestJS + Next.js platform for political campaign operations — role-scoped CRUD across constituencies, wards, booths, voters, issues and tasks, plus a configuration-driven Social & News Intelligence pipeline (Apify collection → validation gate → AI analysis → signal detection) with automated daily briefings.',
    metrics: [{ v: '6', l: 'Data domains covered' }, { v: '2', l: 'AI engines w/ deterministic fallback', green: true }],
    tags: ['NestJS', 'Next.js', 'PostgreSQL', 'TypeORM', 'OpenRouter'],
    link: 'https://roothscale-web.azurewebsites.net/',
    media: { desktop: '/images/projects/roothscale/desktop.webp', mobile: '/images/projects/roothscale/mobile.webp', url: 'roothscale-web.azurewebsites.net' },
  },
  {
    num: '03', cat: 'AI · Automation · Chrome Extension',
    name: 'LinkedIn Lead Discovery Platform',
    client: 'KEEL — 2026', span: 'lg:col-span-7',
    desc: 'Chrome Extension + backend for Sales Navigator scraping — full ICP scoring pipeline, Cloud Run + Pub/Sub task queue, multi-platform content engine with Vertex AI Imagen 3, 48-hour channel deduplication, and Playbooks feature end-to-end.',
    metrics: [{ v: '~66%', l: 'LLM token reduction', green: true }, { v: '50', l: 'Backend tests passing' }],
    tags: ['Chrome Extension', 'Cloud Run', 'Pub/Sub', 'Vertex AI', 'Python'],
    link: 'https://usekeel.in',
    media: { desktop: '/images/projects/keel/desktop.webp', mobile: '/images/projects/keel/mobile.webp', url: 'usekeel.in' },
  },
  {
    num: '04', cat: 'Distributed · OSINT',
    name: 'OSINT Investigation Platform',
    client: 'S2T AI · 2025–2026', span: 'lg:col-span-5',
    desc: 'Profile-centric investigation system with identity-resolution pipelines, SSE real-time tracking, distributed crawler orchestration across 6+ data sources.',
    metrics: [{ v: '10K+', l: 'Records/search' }, { v: '40%', l: 'Wait time reduction', green: true }],
    tags: ['PostgreSQL', 'React.js', 'SSE', 'TanStack', 'Python'],
    link: 'https://s2t.ai/goldenspear-deep-webint.html',
    media: { desktop: '/images/projects/goldenspear/desktop.webp', mobile: '/images/projects/goldenspear/mobile.webp', url: 's2t.ai' },
  },
  {
    num: '05', cat: 'Full Stack · AI · Production',
    name: 'AI Ordering Platform',
    client: 'Platelink.ai · 2024–2025', span: 'lg:col-span-4',
    desc: 'Microservice ordering platform + AI nutrition tracking app. Sole backend founding engineer.',
    metrics: [{ v: '10K+', l: 'Orders/month' }, { v: '99.95%', l: 'Uptime', green: true }],
    tags: ['Golang', 'Flutter', 'AWS ECS'],
    link: '',
    media: null,
  },
  {
    num: '06', cat: 'GenAI · RAG · Multi-Agent',
    name: 'Lumenslate',
    client: 'Personal Project · 2025', span: 'lg:col-span-4',
    desc: 'Multi-agent LLM-powered RAG system for question generation, automated grading, and performance analytics on Google Cloud.',
    metrics: [{ v: '40%', l: 'Teacher productivity ↑', green: true }],
    tags: ['RAG', 'Vertex AI', 'Golang', 'Firestore'],
    link: 'https://github.com/shubhusion',
    media: null,
  },
  {
    num: '07', cat: 'GenAI · Fintech · 🏆 Winner',
    name: 'Aarthik Setu',
    client: 'Google GenAI Exchange Hackathon · 2024', span: 'lg:col-span-4',
    desc: 'GenAI credit platform connecting underserved MSMEs to lenders, investors and schemes like Mudra — AI-driven cash-flow assessment, voice-to-text applications and OCEN-standard rails. Won 1st place, Fintech Track, among 100+ teams.',
    metrics: [{ v: '30%', l: 'API response time ↓', green: true }],
    tags: ['Golang', 'Flutter · BLoC', 'Gemini', 'Firebase'],
    link: '/aarthik-setu',
    media: null,
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

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal delay={0.15}>
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-px"
            style={{ background: 'rgba(124,58,237,0.08)', borderTop: '1px solid rgba(124,58,237,0.08)', borderBottom: '1px solid rgba(124,58,237,0.08)' }}
          >
            {projects.map((p, i) => {
              const isExternal = p.link.startsWith('http')
              const hasLink = p.link.length > 0
              return (
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
                    <div className="font-mono text-[10px] text-white/45 mb-1">{p.num}</div>
                    <div className="font-mono text-[10px] text-violet-light tracking-wider">{p.cat}</div>
                  </div>
                  {hasLink && (
                    <motion.a
                      href={p.link}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      aria-label={`Open ${p.name}`}
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white/50 flex-shrink-0"
                      style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                      whileHover={{ borderColor: '#A78BFA', color: '#A78BFA', rotate: -45 }}
                      transition={{ duration: 0.25 }}
                    >
                      <span aria-hidden="true">↗</span>
                    </motion.a>
                  )}
                </div>

                <div className="relative z-10">
                  <div className="font-display font-bold text-white leading-tight mb-1"
                    style={{ fontSize: 'clamp(1.2rem,2vw,1.6rem)', letterSpacing: '-0.02em' }}>
                    {p.name}
                  </div>
                    <div className="font-mono text-[10px] text-white/50">{p.client}</div>
                </div>

                {p.media && (
                  <div className="relative z-10">
                    {p.span === 'lg:col-span-12' ? (
                      <DevicePair desktop={p.media.desktop} mobile={p.media.mobile} alt={p.name} url={p.media.url} />
                    ) : (
                      <DeviceFrame variant="desktop" src={p.media.desktop} alt={`${p.name} — desktop view`} url={p.media.url} width={1280} height={800} />
                    )}
                  </div>
                )}

                <p className="text-[13px] text-white/45 leading-relaxed font-light flex-1 relative z-10">{p.desc}</p>

                <div className="flex gap-6 relative z-10">
                  {p.metrics.map((m, j) => (
                    <div key={j}>
                      <div className="font-display font-bold leading-none mb-1"
                        style={{ fontSize: 'clamp(1.2rem,2vw,1.65rem)', letterSpacing: '-0.03em', color: m.green ? '#10b981' : undefined }}
                      >
                        {m.green ? m.v : <span className="text-gradient">{m.v}</span>}
                      </div>
                      <div className="font-mono text-[10px] text-white/50 tracking-wide">{m.l}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {p.tags.map(t => (
                    <span key={t} className="font-mono text-[10px] px-2 py-1 rounded text-white/50"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
