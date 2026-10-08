import { motion } from 'framer-motion'
import Reveal from './Reveal'

const services = [
  {
    name: 'Prentline-server',
    loc: '~18k LOC · Go 1.27 / Gin',
    role: 'API gateway & realtime AI proxy — the heart of the system.',
    bullets: [
      'Realtime layer: WebSocket bridge mapping client envelopes to Gemini Live requests, plus a URL-rewriting proxy',
      'internal/coach — a 683-line deterministic state machine owning step tracking, hint escalation and safety gates',
      'REST API: auth, orgs & invite codes, versioned SOP catalog, roster, scorecards, cohort analytics',
      'GORM + Atlas forward-only migrations — AutoMigrate deliberately banned',
    ],
    tags: ['Go', 'Gin', 'gorilla/websocket', 'GORM', 'Atlas', 'Prometheus'],
  },
  {
    name: 'Prentline-frontend',
    loc: '~30k LOC · Flutter Web',
    role: 'PWA client for trainees and supervisors.',
    bullets: [
      '13 screens: catalog, SOP editor, pre-flight lobby, live HUD, QR companion, co-pilot, scorecard, command center, shadow view',
      'flutter_bloc + equatable throughout — one BLoC per feature with dedicated reconnect logic',
      'On WebSocket drop the HUD locks read-only and shows the current step so the trainee can finish safely',
      'ARB localization shipped in English and Japanese',
    ],
    tags: ['Flutter', 'BLoC', 'go_router', 'dio', 'ARB i18n', 'wakelock_plus'],
  },
  {
    name: 'Prentline-notification',
    loc: '~900 LOC · FastAPI',
    role: 'Email microservice for resets and supervisor escalations.',
    bullets: [
      'One real endpoint — POST /notify — delivering via Brevo behind a thin async httpx wrapper',
      'Constant-time X-Notify-Secret comparison; refuses to boot in production without it',
      'A channel: "stub" escape hatch makes it impossible for a test to email a real person',
      'Unconfigured key logs instead of sends — a failed email never fails the reset that triggered it',
    ],
    tags: ['Python 3.12', 'FastAPI', 'httpx', 'pydantic-settings', 'pytest', 'respx'],
  },
  {
    name: 'Prentline-ai',
    loc: 'FastAPI · scaffold',
    role: 'Reserved home for stateless AI endpoints.',
    bullets: [
      'Implements the platform-wide shared service contract: structured JSON logging, pydantic-settings config',
      'Platform /health format — per-dependency status + latency, 503 on degraded, concurrent checks with timeouts',
      '"Unconfigured dependency is omitted, never reported failing"',
      'Already aggregated into the gateway health report',
    ],
    tags: ['FastAPI', 'uv', 'pydantic', 'Health checks'],
  },
  {
    name: 'Prentline-infra',
    loc: 'IaC · CI · DX',
    role: 'Deployment, pipelines and developer experience.',
    bullets: [
      'Render Blueprint wiring all three backend services with Render-generated secrets',
      'Validated in CI by check-jsonschema on every push',
      'make dev boots the Go gateway + both Python services with health polling and cross-platform cleanup',
      'Works on Windows Git Bash, WSL, Linux and macOS — CRLF and venv isolation handled',
    ],
    tags: ['Render', 'GitHub Actions', 'check-jsonschema', 'Make'],
  },
]

const highlights = [
  {
    title: 'Deterministic coach, probabilistic model',
    body: 'The Gemini model sees and speaks. A pure-Go state machine decides what is allowed to happen next. Every hint, gate and stop is unit-tested and reproducible — coach behavior is auditable and replayable, not vibes.',
  },
  {
    title: 'Database-enforced invariants',
    body: 'One active session per trainee+SOP via a partial unique index. Idempotent SOP creation via a partial unique index on optional idempotency keys. Sessions pin the SOP version they started on, so a mid-session edit cannot quietly change what a trainee is graded on.',
  },
  {
    title: 'Security as posture, not a feature',
    body: 'bcrypt + custom JWT with RBAC. Hashed single-use password-reset tokens, so a leaked database row cannot reset an account. Constant-time shared-secret comparison. Production boot-refusals on missing secrets. No AI credentials client-side. Append-only audit log.',
  },
  {
    title: 'Honest contracts between services',
    body: 'Uniform {error, message} shape across Go and Python, overriding FastAPI defaults. Unversioned /health mounted exactly as the gateway polls it. A committed end-to-end test that runs a real Gemini Live session through tools and scorecard generation.',
  },
]

const traineeFeatures = [
  'Live hands-free coaching — continuous camera + mic streamed to Gemini Live over WebSocket, with barge-in',
  'SOP-grounded guardrails — the coach refuses to drift into general chatbot territory',
  'Graduated hints L1–L5 — Socratic questions escalate to full corrections only as needed',
  'Destructive-step gating — irreversible actions halt the session pending visual confirmation',
  'PPE overwatch — safety-gear violations stop the session until cleared',
  'Cross-device resumption — a dead battery on step 6 is a resume on step 6 from any device',
  'Five modes — Teaching, Assessment, Expert Mode, Co-Pilot error lookup, Speed Drill',
  'Computable scorecard — error taxonomy, hints used, duration, AI summary, next steps to practice',
  'Multilingual coach — converses in the trainee’s language while grading against the English SOP',
]

const supervisorFeatures = [
  'Command center — live roster of active sessions with auto-updating per-trainee step progress',
  'Automated escalation — sessions flag red on repeated max-level hints or step stalls, email via the notification service',
  'Shadow mode — silently watch the workspace video and hear the AI conversation',
  'Audio takeover — pause the AI and speak directly to the trainee',
  'Cohort analytics — "40% of trainees fail at step 4", queried from an indexed session_events table',
  'Content tooling — create and edit SOPs with full version history; Expert Mode generation as an idempotent background job',
  'Audit trail — every admin and content action lands in an append-only log',
]

const numbers = [
  { v: '50K+', l: 'Lines of code' },
  { v: '5', l: 'Independently deployable services' },
  { v: '82', l: 'Test files' },
  { v: '14', l: 'Atlas migrations' },
  { v: '10', l: 'Table multi-tenant schema' },
  { v: '2', l: 'AI models orchestrated' },
  { v: '2', l: 'Spoken languages' },
  { v: '~210', l: 'Commits' },
]

const tiers = [
  { nodes: [{ label: 'Prentline-frontend', sub: 'Flutter Web · PWA · BLoC' }] },
  {
    nodes: [{ label: 'Prentline-server', sub: 'Go / Gin — JWT auth, RBAC, WebSocket hub, coach state machine' }],
  },
  {
    nodes: [
      { label: 'Gemini Live API', sub: 'wss proxy via google ADK v2' },
      { label: 'Prentline-notification', sub: 'FastAPI · Brevo email' },
      { label: 'Prentline-ai', sub: 'FastAPI · reserved' },
    ],
  },
  { nodes: [{ label: 'PostgreSQL', sub: 'GORM · Atlas versioned migrations · partial unique indexes' }] },
]

export default function PrentlineCaseStudy() {
  return (
    <section
      id="prentline"
      className="pt-12 pb-32 px-6 lg:px-12 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-px bg-violet-light" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
              Case Study · Prentline
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-bold tracking-[-0.03em] text-white"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
            Deterministic coach.<br />
            <span className="text-gradient">Probabilistic model.</span>
          </h2>
          <p className="mt-4 text-[15px] text-white/55 font-light max-w-3xl leading-relaxed">
            A multimodal AI coach that watches your hands, talks you through a physical
            procedure, grades your work, and tells your supervisor before you get stuck.
            Five independently deployable services, ~50,000 lines of code.
          </p>
        </Reveal>

        {/* Problem → Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px mt-16 mb-20 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}>
          {[
            {
              kicker: 'The problem',
              body: 'Vocational training is bottlenecked on human attention. One supervisor can shadow one trainee at a time, paper SOPs cannot detect mistakes, and "how did the cohort do this month?" gets answered by gut feel.',
            },
            {
              kicker: 'The response',
              body: 'Prentline replaces the hovering supervisor with an always-available AI coach while keeping the human in the loop. Supervisors see every live session, get flagged when a trainee is struggling, and can take over the audio channel at any moment.',
            },
          ].map((b, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                <div className="font-mono text-[10px] text-white/45 uppercase tracking-[0.12em] mb-3">
                  {b.kicker}
                </div>
                <p className="text-[13.5px] text-white/50 leading-relaxed font-light">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Architecture */}
        <Reveal delay={0.1}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-px bg-violet-light" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
              Architecture
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[640px] flex flex-col items-center" role="img"
              aria-label="Architecture: Flutter Web client to Go gateway, fanning out to Gemini Live, notification and AI services, all over PostgreSQL">
              {tiers.map((tier, i) => (
                <div key={i} className="flex flex-col items-center w-full">
                  {i > 0 && (
                    <div className="flex flex-col items-center h-10">
                      <div className="w-px flex-1" style={{ background: 'rgba(124,58,237,0.35)' }} />
                      <div className="text-violet/60 text-[9px] leading-none">↓</div>
                    </div>
                  )}
                  <div className={`grid gap-3 w-full ${tier.nodes.length > 1 ? 'grid-cols-3' : 'grid-cols-1 max-w-sm mx-auto'}`}>
                    {tier.nodes.map((n, j) => (
                      <motion.div
                        key={j}
                        className="p-4 text-center relative overflow-hidden rounded-xl"
                        style={{
                          background: 'rgba(10,10,15,1)',
                          border: '1px solid rgba(124,58,237,0.18)',
                        }}
                        whileHover={{ borderColor: 'rgba(167,139,250,0.5)', backgroundColor: 'rgba(14,14,24,1)' }}
                        transition={{ duration: 0.25 }}
                      >
                        <motion.div
                          className="absolute top-0 left-0 right-0 h-px origin-left"
                          style={{ background: 'linear-gradient(to right, #7C3AED, #60A5FA)' }}
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.4 }}
                        />
                        <div className="font-mono text-[11px] text-white font-medium mb-1">{n.label}</div>
                        <div className="font-mono text-[10px] text-white/40 leading-relaxed">{n.sub}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3">
            <span className="mt-2.5 w-4 h-px bg-gradient-to-r from-violet to-blue-400 flex-shrink-0" />
            <p className="text-[12.5px] text-white/50 leading-relaxed font-light">
              <span className="text-white/75 font-medium">Trust model:</span> Gemini
              credentials never leave the server. The Flutter app authenticates to the Go
              gateway with a custom JWT; the gateway validates the user, then brokers the
              Gemini Live WebSocket server-side. Service-to-service calls authenticate with
              generated shared secrets compared in constant time, enforced in production.
            </p>
          </div>
        </Reveal>

        {/* Five services */}
        <div className="mt-24">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-4 h-px bg-violet-light" />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
                The Five Repos
              </span>
            </div>
            <h3 className="font-display font-bold tracking-[-0.03em] text-white mb-10"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
              Five services, <span className="text-gradient">independently deployable.</span>
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.08)' }}>
            {services.map((s, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <motion.div
                  className="h-full flex flex-col gap-3 p-6 relative overflow-hidden"
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
                    <div className="font-display font-semibold text-white text-[15px] leading-tight mb-1">
                      {s.name}
                    </div>
                    <div className="font-mono text-[10px] text-violet-light">{s.loc}</div>
                  </div>
                  <p className="text-[12.5px] text-white/50 leading-relaxed font-light">{s.role}</p>
                  <ul className="space-y-2 flex-1">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-[12px] text-white/45 leading-relaxed">
                        <span className="mt-2 w-3 h-px bg-gradient-to-r from-violet to-blue-400 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map(t => (
                      <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded text-white/45"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Engineering highlights */}
        <div className="mt-24">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-4 h-px bg-violet-light" />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
                Engineering Highlights
              </span>
            </div>
            <h3 className="font-display font-bold tracking-[-0.03em] text-white mb-10"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
                What makes it <span className="text-gradient">hold up.</span>
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}>
            {highlights.map((h, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[10px] text-violet-light mb-3">
                    0{i + 1}
                  </div>
                  <div className="font-display font-semibold text-white text-[14px] leading-snug mb-2.5">
                    {h.title}
                  </div>
                  <p className="text-[12.5px] text-white/45 leading-relaxed font-light">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Feature surface */}
        <div className="mt-24">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-4 h-px bg-violet-light" />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
                What It Does
              </span>
            </div>
            <h3 className="font-display font-bold tracking-[-0.03em] text-white mb-10"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
              Two sides of <span className="text-gradient">the same session.</span>
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.08)' }}>
            {[
              { title: 'For the trainee', items: traineeFeatures },
              { title: 'For the supervisor', items: supervisorFeatures },
            ].map((col, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div className="h-full p-7" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[10px] text-violet-light tracking-[0.12em] uppercase mb-5">
                    {col.title}
                  </div>
                  <ul className="space-y-3">
                    {col.items.map((f, j) => (
                      <li key={j} className="flex gap-3 text-[12.5px] text-white/50 leading-relaxed font-light">
                        <span className="mt-2.5 w-4 h-px bg-gradient-to-r from-violet to-blue-400 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* By the numbers */}
        <Reveal delay={0.1}>
          <div className="flex gap-8 flex-wrap mt-24 py-6"
            style={{ borderTop: '1px solid rgba(124,58,237,0.1)', borderBottom: '1px solid rgba(124,58,237,0.1)' }}>
            {numbers.map((n, i) => (
              <div key={i}>
                <div className="font-display font-bold text-gradient"
                  style={{ fontSize: 'clamp(1.2rem,2vw,1.65rem)', letterSpacing: '-0.03em' }}>
                  {n.v}
                </div>
                <div className="font-mono text-[10px] text-white/50 mt-0.5">{n.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}