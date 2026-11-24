import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import Reveal from './Reveal'

const model = [
  {
    n: '01',
    title: 'A therapist adds the client',
    body: 'Okuvu is not a download-and-go app. A licensed therapist registers the client with the email they sign in with. No therapist, no account.',
  },
  {
    n: '02',
    title: 'The client talks between sessions',
    body: 'The AI replies in the moment, remembers what the client has already shared, and keeps a journal that is private by design.',
  },
  {
    n: '03',
    title: 'The therapist reads the week first',
    body: 'Summaries, shared mood check-ins and homework reach the portal before the next appointment. The therapist sees patterns, not a live transcript.',
  },
]

const agents = [
  {
    n: '01',
    title: 'Safety gate',
    body: 'Classifies risk before any other agent sees the turn. It runs on every message; there is no client-side bypass.',
  },
  {
    n: '02',
    title: 'Governance pre-check',
    body: 'Checks the turn against the clinical policy boundary. A blocked message never reaches the therapeutic model.',
  },
  {
    n: '03',
    title: 'Therapeutic response',
    body: 'The only agent that writes a reply on the normal path. It reflects and grounds; it does not diagnose, advise or prescribe.',
  },
  {
    n: '04',
    title: 'Output review',
    body: 'Reads the generated reply before it reaches the client and can block or replace it.',
  },
]

const branches = [
  {
    label: 'Crisis',
    detail: 'Fixed reply · never rate-limited',
    color: '#F87171',
  },
  {
    label: 'Grounding',
    detail: 'Fixed reply · no generation',
    color: '#FBBF24',
  },
  {
    label: 'Blocked',
    detail: 'Policy reply · no normal path',
    color: '#60A5FA',
  },
  {
    label: 'Normal',
    detail: 'Therapeutic agent → review',
    color: '#4ADE80',
  },
]

const principles = [
  {
    title: 'Every turn',
    body: 'No bypass, no skipped check.',
  },
  {
    title: 'Code, not a model',
    body: 'The router cannot be talked around.',
  },
  {
    title: 'Crisis never waits',
    body: 'Crisis paths bypass rate and session caps.',
  },
]

const services = [
  {
    n: '01',
    name: 'Mobile app',
    role: 'Flutter · Android-first',
    body: 'The client experience: chat, mood check-ins, a private journal, breathing and grounding exercises, homework and reminders.',
  },
  {
    n: '02',
    name: 'API',
    role: 'Fastify · WebSocket',
    body: 'Auth, sessions, the per-turn agent pipeline, persistence and the real-time chat transport.',
  },
  {
    n: '03',
    name: 'Background worker',
    role: 'Queue-driven worker',
    body: 'Runs after a session closes: structured summaries and memory extraction, so the next conversation starts with context.',
  },
  {
    n: '04',
    name: 'Therapist portal',
    role: 'Next.js 14 · tRPC',
    body: 'Caseload, client detail, summaries, mood check-ins, homework, appointments and notes, with role-scoped access.',
  },
  {
    n: '05',
    name: 'Test harness',
    role: 'Internal · Next.js',
    body: 'Replays pipeline scenarios against pinned prompt and model versions, tracks regressions and records gate sign-offs.',
  },
]

const boundaries = [
  {
    title: 'The journal is private',
    body: 'Journal entries are not shown to the therapist, not read by the AI, and not part of any summary.',
  },
  {
    title: 'Therapist notes stay out of the model',
    body: 'Notes written in the portal are never ingested into any agent. The therapist controls what informs the AI.',
  },
  {
    title: 'Summaries, not transcripts',
    body: 'The therapist reads summaries before the appointment, never a live transcript. Raw chat is not part of the portal.',
  },
  {
    title: 'Every record open is logged',
    body: 'When a therapist opens a client record, the access is written to an audit log.',
  },
  {
    title: 'Clinical limits are authored',
    body: 'A clinical psychologist writes and approves how the AI is allowed to respond. The limits are re-checked before every release.',
  },
  {
    title: 'No diagnosis, no emergency service',
    body: 'Okuvu reflects and grounds. It does not diagnose, advise or promise outcomes, and it cannot send help in an emergency.',
  },
]

const portal = [
  {
    title: 'Caseload',
    body: 'Who is active, what they did between sessions, and what the therapist set.',
  },
  {
    title: 'Summaries',
    body: 'Structured summaries from the worker, ready before the appointment.',
  },
  {
    title: 'Homework & appointments',
    body: 'Assigned in the portal, visible in the app, with a reminder attached.',
  },
]

const hardening = [
  {
    title: 'Crisis path, made real',
    body: 'The crisis state persists a real turn and returns deterministic, reviewed helpline copy. The model is not asked to improvise.',
  },
  {
    title: 'Governance on the record',
    body: 'Pre- and post-generation decisions are written to an audit log; therapist record access is logged separately.',
  },
  {
    title: 'Limits that never block a crisis',
    body: 'Redis-backed global and per-user WebSocket rate limits protect cost. Crisis paths bypass every cap.',
  },
  {
    title: 'Invites, secrets, access',
    body: 'Invite tokens are stored as SHA-256 hashes; emergency contacts are encrypted at the application layer; therapist sessions are role-scoped.',
  },
]

const harness = [
  {
    title: 'Replay',
    body: 'The same scenario runs against a pinned prompt and model version.',
  },
  {
    title: 'Regression history',
    body: 'Changes are compared with the last known good run.',
  },
  {
    title: 'Blinded review',
    body: 'Reviewers rate outputs without knowing which version produced them.',
  },
  {
    title: 'Gate sign-offs',
    body: 'Each run records its gate sign-offs and budget.',
  },
]

const contribution = [
  {
    area: 'Safety & governance',
    body: 'Contributed the live prompt set and governance model across the four agents; added the persisted crisis reply and governance audit records.',
  },
  {
    area: 'Platform hardening',
    body: 'Redis-backed rate limits, hashed invite tokens, application-layer encryption for emergency contacts, and access logging.',
  },
  {
    area: 'Therapist portal',
    body: 'Reworked information architecture and accessibility for caseload, client detail and session review.',
  },
  {
    area: 'Mobile',
    body: 'Carried the rebrand through the Flutter app and the session surfaces.',
  },
  {
    area: 'Test harness',
    body: 'Built and extended the replay and regression workflow used to review pipeline changes.',
  },
  {
    area: 'Shared contracts',
    body: 'Worked in the Prisma schema and TypeScript types that keep the services aligned.',
  },
]

const stack = [
  {
    group: 'Client',
    items: ['Flutter', 'Dart'],
  },
  {
    group: 'Services',
    items: ['Node.js', 'TypeScript', 'Fastify', 'Next.js 14', 'tRPC', 'NextAuth'],
  },
  {
    group: 'Data & AI',
    items: ['PostgreSQL', 'Prisma', 'Redis', 'Managed LLM inference', 'Vector embeddings'],
  },
  {
    group: 'Platform',
    items: [
      'Managed containers',
      'Queue-driven jobs',
      'Managed secrets',
      'Vercel',
      'GitHub Actions',
    ],
  },
]

const numbers = [
  { v: '5', l: 'Deployable services' },
  { v: '4', l: 'Agents on every turn' },
  { v: '122', l: 'Commits authored' },
  { v: '2', l: 'Shared packages' },
  { v: '5', l: 'In-app tools' },
  { v: '18+', l: 'Adults only' },
]

const links = [
  {
    kicker: 'Live beta',
    label: 'okuvu.in',
    href: 'https://okuvu.in',
    desc: 'The invite-only beta. A therapist adds each client; there is no self-signup.',
  },
  {
    kicker: 'For therapists',
    label: 'Book a walkthrough',
    href: 'https://okuvu.in/#for-therapists',
    desc: 'A 20-minute conversation with the team, not a signup form.',
  },
  {
    kicker: 'Privacy',
    label: 'Who sees what',
    href: 'https://okuvu.in/privacy',
    desc: "The product's plain-language privacy policy, including what it does not claim.",
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

export default function OkuvuCaseStudy() {
  return (
    <section id="okuvu" className="pt-12 pb-32 px-6 lg:px-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-px bg-violet-light" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
              Case Study · Okuvu
            </span>
            <img
              src="/images/projects/okuvu/mark.svg"
              alt=""
              width={18}
              height={18}
              className="w-[18px] h-[18px] opacity-80"
              aria-hidden="true"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            className="font-display font-bold tracking-[-0.03em] text-white"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}
          >
            The week
            <br className="sm:hidden" /> between
            <br />
            <span className="text-gradient">sessions.</span>
          </h1>
          <p className="mt-4 text-[15px] text-white/55 font-light max-w-3xl leading-relaxed">
            Okuvu is an AI mental wellness companion for adults in India, built around a
            therapist-led model. A licensed therapist adds every client; the AI holds the space
            between appointments; the therapist reads the week before the next one. Invite-only
            beta.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              'Suvok Systems LLP',
              'Senior Engineer · Jun–Sep 2026',
              'Invite-only beta',
              'Flutter · Fastify · Next.js 14',
              '122 commits',
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

        {/* Brand cover */}
        <div className="mt-14 mb-20">
          <Reveal delay={0.1}>
            <div
              className="overflow-hidden rounded-2xl"
              style={{ border: '1px solid rgba(124,58,237,0.2)', background: 'rgba(10,10,15,1)' }}
            >
              <img
                src="/images/projects/okuvu/cover.webp"
                alt="Okuvu brand cover — the tapered spiral mark on a dark violet field, with the line “The week between sessions.”"
                width={1600}
                height={900}
                loading="eager"
                decoding="async"
                className="w-full h-auto block"
              />
            </div>
            <p className="mt-3 font-mono text-[11px] text-white/50 leading-relaxed">
              Brand cover, not a product screenshot. Okuvu's mark is a tapered spiral that never
              closes — “always becoming.”
            </p>
          </Reveal>
        </div>

        {/* Problem → Response */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-px mb-20 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}
        >
          {[
            {
              kicker: 'The problem',
              body: 'Therapy is one hour a week. The other 167 are where the week actually happens — the argument, the flat Tuesday, the thing you did not say in the session. By the next appointment, the detail has blurred and the session starts from scratch. Most AI wellness apps make the opposite bet: download, sign up, talk to a model with no clinician in the loop.',
            },
            {
              kicker: 'The response',
              body: 'Okuvu is built the other way around. A licensed therapist registers each client. Between sessions, the client talks to an AI that reflects and grounds, remembers context, and keeps a private journal. Before the next appointment, the therapist reads summaries, shared mood check-ins and the homework they set - not a live transcript. The AI is not the therapist. It is the space between appointments.',
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

        {/* The model */}
        <div className="mt-24">
          <SectionHead kicker="The Model">
            The therapist is <span className="text-gradient">the front door.</span>
          </SectionHead>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(124,58,237,0.1)',
              background: 'rgba(124,58,237,0.06)',
            }}
          >
            {model.map((m, i) => (
              <Reveal key={m.n} delay={0.05 * i}>
                <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[10px] text-violet-light mb-3">{m.n}</div>
                  <div className="font-display font-semibold text-white text-[15px] leading-snug mb-2.5">
                    {m.title}
                  </div>
                  <p className="text-[12.5px] text-white/50 leading-relaxed font-light">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div
              className="mt-4 p-6 lg:p-7 rounded-xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(124,58,237,0.14) 0%, rgba(96,165,250,0.05) 100%)',
                border: '1px solid rgba(124,58,237,0.2)',
              }}
            >
              <p className="text-[14px] text-white/70 leading-relaxed font-light">
                There is no self-signup. A therapist adds every client — that is the model, not an
                onboarding step.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Per-turn pipeline */}
        <div className="mt-24">
          <SectionHead kicker="Every Turn">
            Safety runs <span className="text-gradient">before the reply.</span>
          </SectionHead>

          <Reveal delay={0.1}>
            <p className="text-[13.5px] text-white/50 leading-relaxed font-light max-w-3xl mb-6">
              Every user message goes through the same pipeline. The safety gate and governance
              pre-check run first; a deterministic router picks the path; the therapeutic agent
              writes only when the turn is safe; output review reads the reply before the client
              does.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div
              className="rounded-2xl overflow-hidden mb-4"
              style={{
                border: '1px solid rgba(124,58,237,0.16)',
                background: 'rgba(14,14,24,0.75)',
              }}
            >
              <div className="p-6 lg:p-8">
                <div className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-white/40 mb-4">
                  User turn
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {['Safety gate', 'Governance pre-check'].map((step) => (
                    <div
                      key={step}
                      className="rounded-lg px-4 py-3 font-mono text-[11px] text-white/70"
                      style={{
                        background: 'rgba(124,58,237,0.1)',
                        border: '1px solid rgba(124,58,237,0.22)',
                      }}
                    >
                      {step}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 my-3">
                  <span className="font-mono text-[10px] text-violet-light" aria-hidden="true">
                    ↓
                  </span>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-white/40">
                    Deterministic router · code, no model
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {branches.map((b) => (
                    <div
                      key={b.label}
                      className="rounded-lg px-4 py-3"
                      style={{
                        background: `${b.color}0D`,
                        border: `1px solid ${b.color}2E`,
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: b.color }}
                          aria-hidden="true"
                        />
                        <span className="font-mono text-[10px] text-white/80">{b.label}</span>
                      </div>
                      <div className="font-mono text-[9px] text-white/45 leading-relaxed">
                        {b.detail}
                      </div>
                    </div>
                  ))}
                </div>
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
            {agents.map((a, i) => (
              <Reveal key={a.n} delay={0.05 * i}>
                <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[10px] text-violet-light mb-3">{a.n}</div>
                  <div className="font-display font-semibold text-white text-[15px] leading-snug mb-2.5">
                    {a.title}
                  </div>
                  <p className="text-[12.5px] text-white/50 leading-relaxed font-light">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <div
                  className="p-5 h-full rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="font-display font-semibold text-white text-[13px] leading-snug mb-2">
                    {p.title}
                  </div>
                  <p className="text-[12px] text-white/50 leading-relaxed font-light">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div
              className="mt-4 p-6 lg:p-7 rounded-xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(248,113,113,0.1) 0%, rgba(124,58,237,0.06) 100%)',
                border: '1px solid rgba(248,113,113,0.2)',
              }}
            >
              <p className="text-[13.5px] text-white/65 leading-relaxed font-light">
                The crisis path returns fixed, reviewed helpline copy. The model is not asked to
                improvise in a crisis.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Five services */}
        <div className="mt-24">
          <SectionHead kicker="Five Services">
            One workspace, <span className="text-gradient">five deploys.</span>
          </SectionHead>

          <Reveal delay={0.1}>
            <p className="text-[13.5px] text-white/50 leading-relaxed font-light max-w-3xl mb-6">
              Okuvu ships as five independently deployable services. They share one Prisma schema
              and one set of TypeScript types, so a change to a safety boundary can land across the
              stack in one review.
            </p>
          </Reveal>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(124,58,237,0.1)',
              background: 'rgba(124,58,237,0.06)',
            }}
          >
            {services.map((s, i) => (
              <Reveal
                key={s.name}
                delay={0.05 * i}
                className={i === services.length - 1 ? 'md:col-span-2' : ''}
              >
                <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="font-mono text-[10px] text-violet-light mb-1.5">{s.n}</div>
                      <div className="font-mono text-[12px] text-white/85">{s.name}</div>
                    </div>
                    <div className="font-mono text-[9.5px] text-white/50 text-right pt-0.5">
                      {s.role}
                    </div>
                  </div>
                  <p className="text-[12.5px] text-white/50 leading-relaxed font-light">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div
              className="mt-4 rounded-xl px-5 py-4 overflow-x-auto"
              style={{
                border: '1px solid rgba(124,58,237,0.16)',
                background: 'rgba(14,14,24,0.75)',
              }}
            >
              <div className="font-mono text-[11px] text-white/55 leading-relaxed whitespace-normal sm:whitespace-nowrap">
                <span className="text-white/50">shared contract</span>
                <span className="text-violet-light"> → </span>
                Prisma schema
                <span className="text-violet-light"> · </span>
                TypeScript types
                <span className="text-violet-light"> · </span>
                one pnpm workspace
              </div>
            </div>
            <p className="mt-3 font-mono text-[11px] text-white/50 leading-relaxed">
              The portal and test harness deploy separately from the API and worker; mobile ships
              through its own app pipeline.
            </p>
          </Reveal>
        </div>

        {/* Clinical boundaries */}
        <div className="mt-24">
          <SectionHead kicker="Clinical Boundaries">
            The AI is not <span className="text-gradient">the therapist.</span>
          </SectionHead>

          <Reveal delay={0.1}>
            <p className="text-[13.5px] text-white/50 leading-relaxed font-light max-w-3xl mb-6">
              The boundaries are product rules, not footer copy. They are enforced in the service
              layer, the schema and the portal.
            </p>
          </Reveal>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(124,58,237,0.1)',
              background: 'rgba(124,58,237,0.06)',
            }}
          >
            {boundaries.map((b, i) => (
              <Reveal key={b.title} delay={0.04 * i}>
                <div className="p-6 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-display font-semibold text-white text-[14px] leading-snug mb-2.5">
                    {b.title}
                  </div>
                  <p className="text-[12px] text-white/50 leading-relaxed font-light">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div
              className="mt-4 p-6 lg:p-7 rounded-xl"
              style={{
                background: 'rgba(124,58,237,0.06)',
                border: '1px solid rgba(124,58,237,0.16)',
              }}
            >
              <p className="text-[13px] text-white/60 leading-relaxed font-light">
                Okuvu holds no clinical certification, audit attestation or compliance badge, and
                its public site claims none. It is for adults 18+ in India, and it is not an
                emergency service.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Therapist portal */}
        <div className="mt-24">
          <SectionHead kicker="The Therapist Portal">
            The week, <span className="text-gradient">before the session.</span>
          </SectionHead>

          <Reveal delay={0.1}>
            <p className="text-[13.5px] text-white/50 leading-relaxed font-light max-w-3xl mb-6">
              The portal is a clinical workspace, not an admin dashboard. The therapist sees the
              week between appointments — summaries, mood check-ins if shared, the homework they
              set, and their own notes. They do not read along while the client types.
            </p>
          </Reveal>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(124,58,237,0.1)',
              background: 'rgba(124,58,237,0.06)',
            }}
          >
            {[
              {
                kicker: 'The therapist sees',
                items: [
                  'Summaries of conversations',
                  'Mood check-ins, if the client shares them',
                  'Homework and reminders they set',
                  'Appointments',
                  'Notes they write',
                ],
                color: '#4ADE80',
              },
              {
                kicker: "The therapist doesn't see",
                items: [
                  'The journal, ever',
                  'Live chats',
                  'Raw messages — summaries only, never the chat',
                  'Anything written after consent is withdrawn',
                ],
                color: '#F87171',
              },
            ].map((col, i) => (
              <Reveal key={col.kicker} delay={0.05 * i}>
                <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: col.color }}
                      aria-hidden="true"
                    />
                    <div className="font-mono text-[10px] text-white/50 uppercase tracking-[0.12em]">
                      {col.kicker}
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[13px] text-white/55 leading-relaxed font-light"
                      >
                        <span
                          className="mt-2 w-3 h-px flex-shrink-0"
                          style={{ background: col.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {portal.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <div
                  className="p-5 h-full rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="font-display font-semibold text-white text-[13px] leading-snug mb-2">
                    {p.title}
                  </div>
                  <p className="text-[12px] text-white/50 leading-relaxed font-light">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-4 font-mono text-[11px] text-white/50 leading-relaxed">
              Summaries, not surveillance. Every record open is written to the access log.
            </p>
          </Reveal>
        </div>

        {/* Hardening */}
        <div className="mt-24">
          <SectionHead kicker="Hardening">
            The unglamorous <span className="text-gradient">safety work.</span>
          </SectionHead>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(124,58,237,0.1)',
              background: 'rgba(124,58,237,0.06)',
            }}
          >
            {hardening.map((h, i) => (
              <Reveal key={h.title} delay={0.05 * i}>
                <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[10px] text-violet-light mb-3">0{i + 1}</div>
                  <div className="font-display font-semibold text-white text-[15px] leading-snug mb-2.5">
                    {h.title}
                  </div>
                  <p className="text-[12.5px] text-white/50 leading-relaxed font-light">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-4 font-mono text-[11px] text-white/50 leading-relaxed">
              These are the parts that do not demo well and matter most.
            </p>
          </Reveal>
        </div>

        {/* Test harness */}
        <div className="mt-24">
          <SectionHead kicker="Test Harness">
            Safety behavior, <span className="text-gradient">tested like code.</span>
          </SectionHead>

          <Reveal delay={0.1}>
            <p className="text-[13.5px] text-white/50 leading-relaxed font-light max-w-3xl mb-6">
              The fifth service is internal. It replays pipeline scenarios against pinned prompt and
              model versions, records regressions and keeps the review trail for each gate. It is
              not part of the client experience.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {harness.map((h, i) => (
              <Reveal key={h.title} delay={0.05 * i}>
                <div
                  className="p-5 h-full rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="font-display font-semibold text-white text-[13px] leading-snug mb-2">
                    {h.title}
                  </div>
                  <p className="text-[12px] text-white/50 leading-relaxed font-light">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div
              className="mt-4 p-6 lg:p-7 rounded-xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(124,58,237,0.14) 0%, rgba(96,165,250,0.05) 100%)',
                border: '1px solid rgba(124,58,237,0.2)',
              }}
            >
              <p className="text-[13.5px] text-white/70 leading-relaxed font-light">
                A prompt change is a code change. It gets a diff, a replay and a review.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Contribution */}
        <div className="mt-24">
          <SectionHead kicker="My Contribution">
            122 commits, <span className="text-gradient">one system.</span>
          </SectionHead>

          <Reveal delay={0.1}>
            <div
              className="p-6 lg:p-8 rounded-xl mb-4"
              style={{
                background:
                  'linear-gradient(135deg, rgba(124,58,237,0.14) 0%, rgba(96,165,250,0.05) 100%)',
                border: '1px solid rgba(124,58,237,0.2)',
              }}
            >
              <p className="text-[14px] text-white/70 leading-relaxed font-light">
                Senior Engineer · Suvok Systems LLP · Jun–Sep 2026. I worked across the monorepo —
                safety and governance, platform hardening, the therapist portal, mobile, the test
                harness and the shared schema.
              </p>
            </div>
          </Reveal>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(124,58,237,0.1)',
              background: 'rgba(124,58,237,0.06)',
            }}
          >
            {contribution.map((c, i) => (
              <Reveal key={c.area} delay={0.04 * i}>
                <div className="p-6 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[11.5px] text-white/80 mb-2">{c.area}</div>
                  <p className="text-[12.5px] text-white/50 leading-relaxed font-light">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-4 font-mono text-[10.5px] text-white/50 leading-relaxed">
              122 commits authored by Shubham Sharma across the monorepo, verified from git history.
              Okuvu was built by a team; this page does not assign sole authorship.
            </p>
          </Reveal>
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

          <Reveal delay={0.15}>
            <p className="mt-4 font-mono text-[11px] text-white/50 leading-relaxed">
              One pnpm workspace, five independent deploys.
            </p>
          </Reveal>
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
          <SectionHead kicker="Status & Links">
            Live, and <span className="text-gradient">invite-only.</span>
          </SectionHead>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden"
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

          <Reveal delay={0.12}>
            <div
              className="mt-4 p-6 lg:p-7 rounded-xl"
              style={{
                background: 'rgba(124,58,237,0.06)',
                border: '1px solid rgba(124,58,237,0.16)',
              }}
            >
              <div className="font-mono text-[10px] text-violet-light tracking-[0.12em] uppercase mb-2">
                Status
              </div>
              <p className="text-[13px] text-white/60 leading-relaxed font-light">
                Invite-only beta. Okuvu is not therapy, not a person, and not an emergency service.
                If someone is in danger, call 112. To talk to someone now, call Tele-MANAS on 14416.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 font-mono text-[10.5px] text-white/50 leading-relaxed">
              Built at Suvok Systems LLP. The codebase is private; this page contains only public
              product information and high-level architecture. No user data, clinical content,
              credentials or internal links are shown.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
