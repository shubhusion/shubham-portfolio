import { motion } from 'framer-motion'
import { DevicePair } from './DeviceFrame'
import Reveal from './Reveal'

type ClientStatus = {
  label: string
  tone: 'live' | 'beta'
}

type ClientCover = {
  src: string
  alt: string
  w: number
  h: number
}

type Client = {
  num: string
  client: string
  name: string
  url: string
  link: string
  highlights: string[]
  tags: string[]
  media?: { desktop: string; mobile: string }
  cover?: ClientCover
  caseStudy?: string
  status?: ClientStatus
  wide?: boolean
}

const clients: Client[] = [
  {
    num: '01',
    client: 'Transportvibes',
    name: "Safeed's Auto Transport",
    url: 'safeedsautotransport.com',
    link: 'https://safeedsautotransport.com',
    highlights: [
      'GoHighLevel CRM integration for lead capture',
      'Google Analytics for conversion tracking',
      'Custom REST APIs for internal integrations',
    ],
    tags: ['Frontend', 'REST APIs', 'VPS Deploy', 'GoHighLevel'],
    media: {
      desktop: '/images/projects/safeeds-auto-transport/desktop.webp',
      mobile: '/images/projects/safeeds-auto-transport/mobile.webp',
    },
  },
  {
    num: '02',
    client: 'Transportvibes',
    name: 'TransportVibe',
    url: 'transportvibe.com',
    link: 'https://transportvibe.com',
    highlights: [
      'GitHub Actions CI/CD for automatic deployments',
      'Secrets management and environment isolation',
      'Full-stack frontend + backend API layer',
    ],
    tags: ['Frontend', 'GitHub Actions', 'CI/CD', 'Backend APIs'],
    media: {
      desktop: '/images/projects/transportvibe/desktop.webp',
      mobile: '/images/projects/transportvibe/mobile.webp',
    },
  },
  {
    num: '03',
    client: 'Transportvibes',
    name: 'Broadway Auto Transport',
    url: 'broadwayautotransport.com',
    link: 'https://broadwayautotransport.com',
    highlights: [
      'Full VPS provisioning and environment config',
      'Third-party API integrations',
      'Google Analytics for data-driven decisions',
    ],
    tags: ['Frontend', 'VPS', 'REST APIs', 'Analytics'],
    media: {
      desktop: '/images/projects/broadway-auto-transport/desktop.webp',
      mobile: '/images/projects/broadway-auto-transport/mobile.webp',
    },
  },
  {
    num: '04',
    client: 'Transportvibes',
    name: 'Trustline Carriers',
    url: 'trustlinecarriers.com',
    link: 'https://trustlinecarriers.com',
    highlights: [
      'Repository migration to GitHub with access control',
      'GoHighLevel CRM for lead management',
      'API stability and scalable deployment',
    ],
    tags: ['Frontend', 'GoHighLevel', 'GitHub', 'VPS Deploy'],
    media: {
      desktop: '/images/projects/trustline-carriers/desktop.webp',
      mobile: '/images/projects/trustline-carriers/mobile.webp',
    },
  },
  {
    num: '05',
    client: 'Reclevo · Full Stack & AI',
    name: 'Roothscale — Constituency War Room OS',
    url: 'roothscale-web.azurewebsites.net',
    link: 'https://roothscale-web.azurewebsites.net/',
    highlights: [
      'Role-scoped CRUD across constituencies, wards, booths, voters, issues and tasks',
      '6 operational data domains under a single access model',
      'Configuration-driven Social & News Intelligence pipeline — Apify collection → validation gate → AI analysis → signal detection',
      'Automated daily briefings; 2 AI engines with deterministic fallback',
    ],
    tags: ['NestJS', 'Next.js', 'PostgreSQL', 'TypeORM', 'OpenRouter', 'Apify'],
    media: {
      desktop: '/images/projects/roothscale/desktop.webp',
      mobile: '/images/projects/roothscale/mobile.webp',
    },
    wide: true,
  },
  {
    num: '06',
    client: 'Reclevo · Technical Consultant',
    name: 'Rapid Waste Asset Management (RwAM)',
    url: 'reclevo.in/products/rwam',
    link: 'https://www.reclevo.in/products/rwam',
    highlights: [
      'Defined scalable architecture across frontend, backend, and cloud',
      'Advised on speed-vs-scalability trade-offs',
      'Established long-term engineering direction',
    ],
    tags: ['Architecture Advisory', 'System Design', 'Technical Consulting'],
    media: {
      desktop: '/images/projects/rwam/desktop.webp',
      mobile: '/images/projects/rwam/mobile.webp',
    },
    wide: true,
  },
  {
    num: '07',
    client: 'KEEL · AI Architect & Full Stack',
    name: 'KEEL Platform',
    url: 'usekeel.in',
    link: 'https://usekeel.in',
    highlights: [
      'Chrome Extension for LinkedIn Lead Discovery',
      'Multi-platform content engine with Vertex AI',
      'Eliminated ~66% duplicate LLM token usage',
      '50 backend tests passing end-to-end',
    ],
    tags: ['Chrome Extension', 'Cloud Run', 'Pub/Sub', 'Vertex AI', 'Python'],
    media: {
      desktop: '/images/projects/keel/desktop.webp',
      mobile: '/images/projects/keel/mobile.webp',
    },
    wide: true,
  },
  {
    num: '08',
    client: 'S2T AI · Full Stack Engineer',
    name: 'GoldenSpear — Deep Web Intelligence',
    url: 's2t.ai/goldenspear-deep-webint.html',
    link: 'https://s2t.ai/goldenspear-deep-webint.html',
    highlights: [
      'Distributed OSINT investigation platform',
      'Identity-resolution pipelines across 6+ sources',
      'SSE real-time tracking — 40% wait time reduction',
      '10K+ records per search processed reliably',
    ],
    tags: ['Python', 'PostgreSQL', 'React.js', 'SSE', 'Distributed Systems'],
    media: {
      desktop: '/images/projects/goldenspear/desktop.webp',
      mobile: '/images/projects/goldenspear/mobile.webp',
    },
    wide: true,
  },
  {
    num: '09',
    client: 'Suvok Systems LLP · Senior Engineer',
    name: 'Okuvu — AI Mental Wellness Companion',
    url: 'okuvu.in',
    link: 'https://okuvu.in',
    highlights: [
      'Therapist-led, invite-only model — a licensed therapist adds every client',
      'Five deployable services on one Prisma schema and shared TypeScript types',
      'Four-agent turn pipeline with safety checks on every message',
      'Clinical boundaries enforced in code — private journal, isolated therapist notes',
    ],
    tags: ['Flutter', 'Fastify', 'Next.js 14', 'PostgreSQL · Prisma', 'Redis'],
    cover: {
      src: '/images/projects/okuvu/cover.webp',
      alt: 'Okuvu brand cover — the tapered spiral mark on a dark violet field, with the line “The week between sessions.”',
      w: 1600,
      h: 900,
    },
    caseStudy: '/okuvu',
    status: { label: 'Beta', tone: 'beta' },
    wide: true,
  },
]

export default function ClientWork() {
  const narrow = clients.filter((c) => !c.wide)
  const wide = clients.filter((c) => c.wide)

  return (
    <section
      id="client-work"
      className="py-32 px-6 lg:px-12"
      style={{ borderTop: '1px solid rgba(124,58,237,0.08)' }}
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-px bg-violet-light" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
              Client Work
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-display font-bold tracking-[-0.03em] text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}
          >
            Shipped for <span className="text-gradient">clients.</span>
          </h2>
          <p className="text-[15px] text-white/50 font-light mb-4">
            9 products across 5 clients — 8 live, 1 invite-only beta. Click any to see the work.
          </p>
        </Reveal>

        {/* Stats bar */}
        <Reveal delay={0.15}>
          <div
            className="flex gap-8 flex-wrap mb-16 py-6"
            style={{
              borderTop: '1px solid rgba(124,58,237,0.1)',
              borderBottom: '1px solid rgba(124,58,237,0.1)',
            }}
          >
            {[
              { v: '9', l: 'Products' },
              { v: '5', l: 'Clients' },
              { v: '1', l: 'Invite-only beta' },
              { v: 'CI/CD', l: 'GitHub Actions' },
            ].map((s, i) => (
              <div key={i}>
                <div
                  className="font-display font-bold text-gradient"
                  style={{ fontSize: 'clamp(1.2rem,2vw,1.65rem)', letterSpacing: '-0.03em' }}
                >
                  {s.v}
                </div>
                <div className="font-mono text-[10px] text-white/50 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 2-col narrow cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px mb-px"
          style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.08)' }}
        >
          {narrow.map((c, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <ClientCard {...c} />
            </Reveal>
          ))}
        </div>

        {/* Full-width wide cards */}
        <div
          className="flex flex-col gap-px"
          style={{
            background: 'rgba(124,58,237,0.08)',
            borderLeft: '1px solid rgba(124,58,237,0.08)',
            borderRight: '1px solid rgba(124,58,237,0.08)',
            borderBottom: '1px solid rgba(124,58,237,0.08)',
          }}
        >
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

type ClientCardProps = Omit<Client, 'wide'> & { fullWidth?: boolean }

function ClientCard({
  num,
  client,
  name,
  url,
  link,
  highlights,
  tags,
  media,
  cover,
  caseStudy,
  status,
  fullWidth,
}: ClientCardProps) {
  const isBeta = status?.tone === 'beta'
  const statusLabel = status?.label ?? 'Live'
  const statusColor = isBeta ? '#F59E0B' : '#10B981'
  const statusBackground = isBeta ? 'rgba(245,158,11,0.1)' : 'rgba(16,185,129,0.1)'
  const statusBorder = isBeta ? 'rgba(245,158,11,0.2)' : 'rgba(16,185,129,0.2)'

  const cardMedia = cover ? (
    <div
      className="overflow-hidden rounded-xl"
      style={{ border: '1px solid rgba(124,58,237,0.2)', background: 'rgba(10,10,15,1)' }}
    >
      <img
        src={cover.src}
        alt={cover.alt}
        width={cover.w}
        height={cover.h}
        loading="lazy"
        decoding="async"
        className="w-full h-auto block"
      />
    </div>
  ) : media ? (
    <DevicePair desktop={media.desktop} mobile={media.mobile} alt={name} url={url} />
  ) : null

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

      <div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="font-mono text-[10px] text-violet-light mb-1">
              {num} · {client}
            </div>
            <div
              className="font-display font-bold text-white leading-tight mb-0.5"
              style={{ fontSize: 'clamp(1.2rem,2vw,1.6rem)', letterSpacing: '-0.02em' }}
            >
              {name}
            </div>
            <div className="font-mono text-[10px] text-white/50">{url}</div>
          </div>
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${name} ${isBeta ? 'beta' : 'live site'}`}
            className="flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1.5 rounded-lg flex-shrink-0 ml-4"
            style={{
              background: statusBackground,
              color: statusColor,
              border: `1px solid ${statusBorder}`,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${isBeta ? '' : 'animate-pulse'}`}
              style={{ background: statusColor }}
              aria-hidden="true"
            />
            {statusLabel} <span aria-hidden="true">↗</span>
          </motion.a>
        </div>

        {!fullWidth && cardMedia && <div className="mb-4">{cardMedia}</div>}

        {!fullWidth && (
          <ul className="space-y-2 mb-4">
            {highlights.map((h: string, j: number) => (
              <li key={j} className="flex gap-2.5 text-[12px] text-white/50 leading-relaxed">
                <span className="mt-2 w-4 h-px bg-gradient-to-r from-violet to-blue-400 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5">
          {tags.map((t: string) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2 py-0.5 rounded text-white/50"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {caseStudy && (
          <a
            href={caseStudy}
            aria-label={`Read the ${name} case study`}
            className="inline-flex items-center gap-1.5 mt-4 font-mono text-[10px] tracking-[0.12em] uppercase text-violet-light hover:text-white transition-colors duration-200"
          >
            Read the case study <span aria-hidden="true">→</span>
          </a>
        )}
      </div>

      {fullWidth && (
        <div className="flex flex-col gap-6">
          {cardMedia}
          <ul className="space-y-2.5">
            {highlights.map((h: string, j: number) => (
              <li key={j} className="flex gap-3 text-[13px] text-white/45 leading-relaxed">
                <span className="mt-2 w-4 h-px bg-gradient-to-r from-violet to-blue-400 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  )
}
