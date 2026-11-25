import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import Reveal from './Reveal'

type Shot = {
  src: string
  alt: string
  w: number
  h: number
  caption: string
}

const shots: Shot[] = [
  {
    src: '/images/projects/maintix/gallery-01.webp',
    alt: 'Maintix manager dashboard with property counts, open tickets, volume chart and ticket distribution',
    w: 1800,
    h: 1125,
    caption:
      'The manager dashboard — every property, live ticket counts, ticket volume and the current distribution in one view.',
  },
  {
    src: '/images/projects/maintix/gallery-02.webp',
    alt: 'Maintix ticket queue filtered by property, status, priority and assignee',
    w: 1800,
    h: 1125,
    caption:
      'The ticket queue — property, status, priority, assignee and age, with a list view for triage and a board view for flow.',
  },
  {
    src: '/images/projects/maintix/gallery-03.webp',
    alt: 'Maintix Kanban board with Open, Assigned, In Progress, Awaiting Approval, Done and Cancelled columns',
    w: 1800,
    h: 859,
    caption:
      'The board — six columns from Open to Cancelled. Every card moves through the same validated state machine.',
  },
  {
    src: '/images/projects/maintix/gallery-04.webp',
    alt: 'Maintix ticket detail with status, category, priority, assignee, version and activity timeline',
    w: 1800,
    h: 1125,
    caption:
      'A ticket — description, property, priority, assignee, attachment slots, permitted actions and the immutable activity trail.',
  },
]

const roles = [
  {
    n: '01 · Tenant',
    title: 'Reports the issue',
    body: 'Files a ticket with a title, description, category, priority and up to five attachments. Sees only their own property, and can cancel while the ticket is still Open or Assigned.',
  },
  {
    n: '02 · Manager',
    title: 'Owns the queue',
    body: 'Assigns or reassigns a technician, sets priority, cancels work and approves completed jobs. Sees every ticket across the properties they belong to, plus the dashboard and audit trail.',
  },
  {
    n: '03 · Technician',
    title: 'Does the work',
    body: 'Starts an assigned job, attaches completion evidence and submits it for approval. Only the technician on the ticket can make those two transitions.',
  },
]

const statuses = [
  { name: 'Open', color: '#9CA3AF' },
  { name: 'Assigned', color: '#60A5FA' },
  { name: 'In Progress', color: '#FCD34D' },
  { name: 'Awaiting Approval', color: '#A78BFA' },
  { name: 'Done', color: '#4ADE80' },
  { name: 'Cancelled', color: '#F87171' },
]

const transitions = [
  {
    from: 'Open',
    color: '#9CA3AF',
    to: ['Assigned', 'Cancelled'],
    guard: 'Manager assigns · Tenant cancels',
  },
  {
    from: 'Assigned',
    color: '#60A5FA',
    to: ['In Progress', 'Assigned', 'Cancelled'],
    guard: 'Technician starts · Manager reassigns · Tenant cancels',
  },
  {
    from: 'In Progress',
    color: '#FCD34D',
    to: ['Awaiting Approval', 'Assigned'],
    guard: 'Technician submits · Manager reassigns (resets to Assigned)',
  },
  {
    from: 'Awaiting Approval',
    color: '#A78BFA',
    to: ['Done'],
    guard: 'Manager approves',
  },
  {
    from: 'Done',
    color: '#4ADE80',
    to: [],
    guard: 'Terminal — no outgoing transitions',
  },
  {
    from: 'Cancelled',
    color: '#F87171',
    to: [],
    guard: 'Terminal — history stays readable',
  },
]

const guardrails = [
  {
    n: '01',
    title: 'Property-scoped access',
    body: 'A global JWT guard authenticates, a roles guard narrows by role, and PropertyGuard verifies membership before any property route runs. A valid token is not authorization.',
  },
  {
    n: '02',
    title: 'Versioned writes',
    body: 'Every mutation sends the ticket version it last read. The update is filtered by id and version, then increments the counter; a stale client gets 409 instead of overwriting someone else.',
  },
  {
    n: '03',
    title: 'Append-only audit trail',
    body: 'Ticket state is never edited directly. Each transition writes a TicketActivity row with actor, action and timestamp, so the timeline reconstructs exactly how a ticket reached its current state.',
  },
  {
    n: '04',
    title: 'One shared contract',
    body: 'Roles, statuses, priorities, activity actions, notification types and error codes live in a shared-types package that both the API and the web app compile against. The client and server cannot drift on the vocabulary of the workflow.',
  },
  {
    n: '05',
    title: 'Validated input, shaped errors',
    body: 'DTOs run through class-validator with whitelist and forbidNonWhitelisted, a global filter returns one error shape, and a request-id middleware tags every log line.',
  },
  {
    n: '06',
    title: 'Upload limits that hold',
    body: 'MIME allowlist, 5MB ceiling, five attachments per ticket and a Sharp pass that resizes images to 1920×1080 before they reach storage. Deleting is limited to the uploader.',
  },
]

const apps = [
  {
    n: 'apps/web',
    role: 'Next.js 15 · React 19',
    body: 'App Router client with a protected dashboard layout, role-aware navigation, TanStack Query caching and cursor-based infinite lists. Forms are React Hook Form plus Zod; tables are TanStack Table; charts are Recharts.',
    tags: ['TanStack Query', 'TanStack Table', 'Radix · shadcn/ui', 'Tailwind CSS 4', 'Recharts'],
  },
  {
    n: 'apps/api',
    role: 'NestJS 10 · Prisma 6',
    body: 'Layered REST API: controllers, services, Prisma and the TicketStateMachine. JWT auth, global validation, throttling and Swagger, with Supabase Storage behind the uploads service.',
    tags: ['NestJS', 'Prisma 6', 'JWT · Passport', 'class-validator', 'Supabase Storage'],
  },
]

const models = [
  'User',
  'Property',
  'PropertyMember',
  'Category',
  'Ticket',
  'TicketAttachment',
  'TicketActivity',
  'Notification',
]

const challenges = [
  {
    title: 'Authorization that follows the record',
    body: 'Ticket routes are nested under properties, but ticket-scoped routes only carry a ticket id. The guard resolves the property from the route where it exists, and the service re-checks membership from the ticket itself. Getting that split wrong would have made a valid login a skeleton key.',
  },
  {
    title: 'Two people, one ticket, one winner',
    body: 'Concurrent assignments are the classic lost update: two managers open the same ticket, both assign, the second silently replaces the first. The version column turns the second write into a 409, and the state machine still validates the transition on its own.',
  },
  {
    title: 'Three roles without three systems',
    body: 'Tenants, managers and technicians see different screens and actions, but they share one ticket record and one transition table. Role filtering happens on read; permissions are enforced per action, so the state can never fork by role.',
  },
  {
    title: 'A seed that tells the truth',
    body: 'A dashboard full of zeroes proves nothing. The seed creates seven users, three properties, twelve categories and twenty tickets with activity logs, so the board, charts and timelines show the product doing its job from the first login.',
  },
]

const stack = [
  {
    group: 'Frontend',
    items: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'shadcn/ui · Radix',
      'TanStack Query',
      'React Hook Form · Zod',
    ],
  },
  {
    group: 'Backend',
    items: [
      'NestJS 10',
      'Prisma 6',
      'PostgreSQL',
      'JWT · Passport',
      'class-validator',
      'EventEmitter2',
      'Swagger',
    ],
  },
  {
    group: 'Platform',
    items: ['pnpm workspaces', 'Turborepo', 'Docker', 'Supabase', 'Cloud Run', 'Vercel'],
  },
  {
    group: 'Quality',
    items: [
      'Jest',
      '43 tests · 9 suites',
      'Helmet',
      'Throttler',
      'Joi env validation',
      'GitHub Actions',
    ],
  },
]

const numbers = [
  { v: '6', l: 'Ticket states' },
  { v: '3', l: 'Roles, one record' },
  { v: '8', l: 'Prisma models' },
  { v: '41', l: 'REST handlers' },
  { v: '43', l: 'Tests across 9 suites' },
  { v: '~17K', l: 'Lines across web + API' },
]

const links = [
  {
    kicker: 'Source',
    label: 'GitHub — shubhusion/Maintix',
    href: 'https://github.com/shubhusion/Maintix',
    desc: 'The full pnpm monorepo — Next.js app, NestJS API, Prisma schema, seed and docs.',
  },
  {
    kicker: 'Site preview',
    label: 'maintix-web.vercel.app',
    href: 'https://maintix-web.vercel.app/',
    desc: 'The deployed landing page and UI shell. The hosted API is offline, so sign-in does not complete.',
  },
  {
    kicker: 'Architecture',
    label: 'Read the system notes',
    href: 'https://github.com/shubhusion/Maintix/blob/main/docs/architecture.md',
    desc: 'Request path, auth flow, state machine, concurrency model and the data model in one document.',
  },
]

function SectionHead({ kicker, children }: { kicker: string; children: ReactNode }) {
  return (
    <>
      <Reveal delay={0.1}>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-4 h-px bg-violet-light" />
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
            {kicker}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <h3
          className="font-display font-bold tracking-[-0.03em] text-white mb-10"
          style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}
        >
          {children}
        </h3>
      </Reveal>
    </>
  )
}

function GalleryShot({ shot, delay = 0.1 }: { shot: Shot; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div
        className="overflow-hidden rounded-xl"
        style={{ border: '1px solid rgba(124,58,237,0.2)', background: 'rgba(10,10,15,1)' }}
      >
        <img
          src={shot.src}
          alt={shot.alt}
          width={shot.w}
          height={shot.h}
          loading="lazy"
          decoding="async"
          className="w-full h-auto block"
        />
      </div>
      <p className="mt-3 font-mono text-[11px] text-white/50 leading-relaxed">{shot.caption}</p>
    </Reveal>
  )
}

function StatusChip({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 font-mono text-[10px] px-2 py-1 rounded whitespace-nowrap"
      style={{
        color,
        background: `${color}12`,
        border: `1px solid ${color}2E`,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: color }}
        aria-hidden="true"
      />
      {name}
    </span>
  )
}

export default function MaintixCaseStudy() {
  return (
    <section id="maintix" className="pt-12 pb-32 px-6 lg:px-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-px bg-violet-light" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
              Case Study · Maintix
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            className="font-display font-bold tracking-[-0.03em] text-white"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}
          >
            Every ticket.
            <br />
            <span className="text-gradient">One workflow.</span>
          </h1>
          <p className="mt-4 text-[15px] text-white/55 font-light max-w-3xl leading-relaxed">
            Maintix is a multi-property maintenance workflow platform. Tenants report, managers
            assign, technicians close — and every move between those roles is a validated transition
            on the same ticket, scoped to one property and written to an append-only audit trail.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              'Property Management Automation Challenge 2026',
              'Solo build',
              'Next.js 15 · NestJS 10',
              '6-stage workflow',
              '43 tests',
            ].map((c) => (
              <span
                key={c}
                className="font-mono text-[10px] px-2 py-1 rounded text-white/50"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Problem → Response */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-px mt-16 mb-20 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}
        >
          {[
            {
              kicker: 'The problem',
              body: 'Maintenance coordination breaks at the handoff. A tenant texts a photo, a manager copies it into a spreadsheet, a technician calls for the door code, and the approval lives in an inbox. Nobody can say which ticket is waiting on whom — or whether work already happened twice.',
            },
            {
              kicker: 'The response',
              body: 'One ticket, three role-specific views, six explicit states. Maintix makes the workflow the source of truth: a ticket can only move where the state machine allows, only by a role allowed to move it, and only if the client is looking at the current version. Every transition writes an activity row.',
            },
          ].map((b, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                <div className="font-mono text-[10px] text-white/50 uppercase tracking-[0.12em] mb-3">
                  {b.kicker}
                </div>
                <p className="text-[13.5px] text-white/50 leading-relaxed font-light">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The product */}
        <div className="mb-20">
          <SectionHead kicker="The Product">
            Four screens from <span className="text-gradient">the running build.</span>
          </SectionHead>

          <GalleryShot shot={shots[0]} delay={0.15} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <GalleryShot shot={shots[1]} delay={0.1} />
            <GalleryShot shot={shots[3]} delay={0.15} />
          </div>

          <div className="mt-8">
            <GalleryShot shot={shots[2]} delay={0.1} />
          </div>
        </div>

        {/* Roles */}
        <div className="mt-24">
          <SectionHead kicker="Three Roles">
            One record, <span className="text-gradient">three points of view.</span>
          </SectionHead>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(124,58,237,0.1)',
              background: 'rgba(124,58,237,0.06)',
            }}
          >
            {roles.map((r, i) => (
              <Reveal key={r.n} delay={0.05 * i}>
                <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[10px] text-violet-light mb-3">{r.n}</div>
                  <div className="font-display font-semibold text-white text-[15px] leading-snug mb-2.5">
                    {r.title}
                  </div>
                  <p className="text-[12.5px] text-white/50 leading-relaxed font-light">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-24">
          <SectionHead kicker="The Workflow">
            Six states, <span className="text-gradient">no side doors.</span>
          </SectionHead>

          <Reveal delay={0.1}>
            <div
              className="rounded-xl p-5 mb-4 overflow-x-auto"
              style={{
                border: '1px solid rgba(124,58,237,0.16)',
                background: 'rgba(14,14,24,0.75)',
              }}
            >
              <div className="flex flex-wrap items-center gap-2">
                {statuses
                  .filter((s) => s.name !== 'Cancelled')
                  .map((s, i, arr) => (
                    <div key={s.name} className="flex items-center gap-2">
                      <StatusChip name={s.name} color={s.color} />
                      {i < arr.length - 1 && (
                        <span
                          className="hidden sm:inline text-white/20 text-[12px]"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      )}
                    </div>
                  ))}
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] text-white/35" aria-hidden="true">
                  ↳
                </span>
                <StatusChip name="Cancelled" color="#F87171" />
                <span className="font-mono text-[10px] text-white/35">
                  from Open or Assigned — Done and Cancelled are terminal
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div
              className="overflow-x-auto rounded-xl mb-3"
              style={{
                border: '1px solid rgba(124,58,237,0.2)',
                background: 'rgba(10,10,15,1)',
              }}
            >
              <img
                src="/images/diagrams/maintix-ticket-lifecycle.svg"
                alt="Maintix ticket lifecycle — Open, Assigned, In Progress, Awaiting Approval and Done, with Cancelled branching from Open or Assigned"
                width={1388}
                height={368}
                loading="lazy"
                className="w-full h-auto min-w-[720px] block"
              />
            </div>
            <p className="font-mono text-[11px] text-white/50 leading-relaxed">
              The lifecycle at a glance — five ordered states, one reassign path and two terminal
              exits. The transition table below lists who can move each ticket.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(124,58,237,0.1)',
                background: 'rgba(124,58,237,0.06)',
              }}
            >
              <div
                className="hidden md:grid grid-cols-12 gap-6 px-6 py-4 font-mono text-[9.5px] uppercase tracking-[0.14em] text-white/40"
                style={{ background: 'rgba(10,10,15,1)' }}
              >
                <div className="col-span-3">From</div>
                <div className="col-span-5">Allowed next</div>
                <div className="col-span-4">Who can move it</div>
              </div>
              {transitions.map((t) => (
                <div
                  key={t.from}
                  className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 p-6"
                  style={{
                    background: 'rgba(10,10,15,1)',
                    borderTop: '1px solid rgba(124,58,237,0.1)',
                  }}
                >
                  <div className="md:col-span-3">
                    <StatusChip name={t.from} color={t.color} />
                  </div>
                  <div className="md:col-span-5 flex flex-wrap items-center gap-1.5">
                    {t.to.length === 0 ? (
                      <span className="font-mono text-[10px] text-white/30">—</span>
                    ) : (
                      t.to.map((name) => (
                        <span
                          key={name}
                          className="font-mono text-[10px] px-2 py-1 rounded text-white/60"
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.07)',
                          }}
                        >
                          {name}
                        </span>
                      ))
                    )}
                  </div>
                  <div className="md:col-span-4 font-mono text-[10.5px] text-white/45 leading-relaxed">
                    {t.guard}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 font-mono text-[11px] text-white/50 leading-relaxed">
              The transition table lives in one class on the API — the UI reads the current status
              and offers only the actions that status and role allow.
            </p>
          </Reveal>
        </div>

        {/* Guardrails */}
        <div className="mt-24">
          <SectionHead kicker="Guardrails">
            The rules <span className="text-gradient">are the product.</span>
          </SectionHead>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(124,58,237,0.1)',
              background: 'rgba(124,58,237,0.06)',
            }}
          >
            {guardrails.map((g, i) => (
              <Reveal key={g.n} delay={0.05 * i}>
                <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[10px] text-violet-light mb-3">{g.n}</div>
                  <div className="font-display font-semibold text-white text-[14px] leading-snug mb-2.5">
                    {g.title}
                  </div>
                  <p className="text-[12.5px] text-white/50 leading-relaxed font-light">{g.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="mt-24">
          <SectionHead kicker="Under The Hood">
            Two apps, <span className="text-gradient">one contract.</span>
          </SectionHead>

          <Reveal delay={0.1}>
            <div
              className="rounded-xl px-5 py-4 mb-4 overflow-x-auto"
              style={{
                border: '1px solid rgba(124,58,237,0.16)',
                background: 'rgba(14,14,24,0.75)',
              }}
            >
              <div className="font-mono text-[11px] text-white/55 leading-relaxed whitespace-normal sm:whitespace-nowrap">
                <span className="text-white/50">browser</span>
                <span className="text-violet-light"> → </span>
                Next.js 15
                <span className="text-violet-light"> → </span>
                REST /api/v1
                <span className="text-violet-light"> → </span>
                auth · roles · property guard
                <span className="text-violet-light"> → </span>
                state machine · Prisma 6<span className="text-violet-light"> → </span>
                PostgreSQL + Storage
              </div>
            </div>
          </Reveal>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(124,58,237,0.1)',
              background: 'rgba(124,58,237,0.06)',
            }}
          >
            {apps.map((a, i) => (
              <Reveal key={a.n} delay={0.05 * i}>
                <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="font-mono text-[12px] text-white/85">{a.n}</div>
                    <div className="font-mono text-[9.5px] text-white/50 text-right pt-0.5">
                      {a.role}
                    </div>
                  </div>
                  <p className="text-[12.5px] text-white/50 leading-relaxed font-light mb-4">
                    {a.body}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {a.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9.5px] px-2 py-1 rounded text-white/50"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div
              className="rounded-xl p-5 mt-4"
              style={{
                border: '1px solid rgba(124,58,237,0.1)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <div className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-white/40 mb-3">
                Eight Prisma models
              </div>
              <div className="flex flex-wrap gap-1.5">
                {models.map((m) => (
                  <span
                    key={m}
                    className="font-mono text-[10px] px-2 py-1 rounded text-white/55"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Challenges */}
        <div className="mt-24">
          <SectionHead kicker="What Was Hard">
            Challenges, and <span className="text-gradient">how they fell.</span>
          </SectionHead>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(124,58,237,0.1)',
              background: 'rgba(124,58,237,0.06)',
            }}
          >
            {challenges.map((c, i) => (
              <Reveal key={c.title} delay={0.05 * i}>
                <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[10px] text-violet-light mb-3">0{i + 1}</div>
                  <div className="font-display font-semibold text-white text-[14px] leading-snug mb-2.5">
                    {c.title}
                  </div>
                  <p className="text-[12.5px] text-white/50 leading-relaxed font-light">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="mt-24">
          <SectionHead kicker="Stack">
            The stack, <span className="text-gradient">end to end.</span>
          </SectionHead>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{
              border: '1px solid rgba(124,58,237,0.08)',
              background: 'rgba(124,58,237,0.08)',
            }}
          >
            {stack.map((s, i) => (
              <Reveal key={s.group} delay={0.05 * i}>
                <div className="h-full p-6" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[10px] text-violet-light tracking-[0.12em] uppercase mb-4">
                    {s.group}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-1 rounded text-white/50"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* By the numbers */}
        <Reveal delay={0.1}>
          <div
            className="flex gap-8 flex-wrap mt-24 py-6"
            style={{
              borderTop: '1px solid rgba(124,58,237,0.1)',
              borderBottom: '1px solid rgba(124,58,237,0.1)',
            }}
          >
            {numbers.map((n, i) => (
              <div key={i}>
                <div
                  className="font-display font-bold text-gradient"
                  style={{ fontSize: 'clamp(1.2rem,2vw,1.65rem)', letterSpacing: '-0.03em' }}
                >
                  {n.v}
                </div>
                <div className="font-mono text-[10px] text-white/50 mt-0.5">{n.l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Links */}
        <div className="mt-24">
          <SectionHead kicker="Links">
            The source, <span className="text-gradient">and the preview.</span>
          </SectionHead>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(124,58,237,0.1)',
              background: 'rgba(124,58,237,0.06)',
            }}
          >
            {links.map((l, i) => (
              <Reveal key={l.href} delay={0.05 * i}>
                <motion.a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-7 h-full block relative overflow-hidden"
                  style={{ background: 'rgba(10,10,15,1)' }}
                  whileHover={{ backgroundColor: 'rgba(14,14,24,1)' }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="font-mono text-[10px] text-violet-light tracking-[0.12em] uppercase mb-2">
                    {l.kicker}
                  </div>
                  <div className="font-display font-semibold text-white text-[15px] leading-snug mb-2 flex items-center gap-2">
                    {l.label}
                    <span className="text-white/50 text-[13px]" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <p className="text-[12.5px] text-white/50 leading-relaxed font-light">{l.desc}</p>
                </motion.a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div
              className="mt-4 rounded-xl p-5"
              style={{
                border: '1px solid rgba(124,58,237,0.16)',
                background: 'rgba(124,58,237,0.05)',
              }}
            >
              <p className="font-mono text-[10.5px] text-white/50 leading-relaxed">
                <span className="text-violet-light">Status note.</span> The hosted API is currently
                unhealthy, so the deployed site cannot finish a sign-in. Every screenshot above was
                captured from the monorepo running against a seeded local Postgres database — not
                from the marketing page.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 font-mono text-[11px] text-white/50 leading-relaxed">
              Built for the Property Management Automation Challenge 2026. Next.js web app + NestJS
              API in one Turborepo.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
