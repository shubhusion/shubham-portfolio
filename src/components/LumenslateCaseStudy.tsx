import { motion } from 'framer-motion'
import Reveal from './Reveal'

const shots = [
  {
    src: '/images/projects/lumen-slate/gallery-01.webp',
    alt: 'Lumen Slate home — agent chat, question banks, classrooms and assignments',
    w: 1800,
    h: 946,
    caption:
      "The teacher's console — agent chat, question banks, classrooms and assignments on one home screen.",
  },
  {
    src: '/images/projects/lumen-slate/gallery-02.webp',
    alt: 'Question library with MCQ items, points and answer keys',
    w: 1800,
    h: 952,
    caption: 'Question library — every type from MCQ to subjective, with points and answer keys.',
  },
  {
    src: '/images/projects/lumen-slate/gallery-03.webp',
    alt: 'Variation generator modal producing unique MCQ variants',
    w: 1800,
    h: 958,
    caption: 'Variation generator — one question becomes a set of unique practice variants.',
  },
  {
    src: '/images/projects/lumen-slate/gallery-04.webp',
    alt: 'Context generation modal writing a story around a question',
    w: 1800,
    h: 948,
    caption: 'Context generation — bare questions become narrated, story-backed prompts.',
  },
  {
    src: '/images/projects/lumen-slate/gallery-05.webp',
    alt: 'Question banks list with topic, difficulty and class tags',
    w: 1800,
    h: 1026,
    caption: 'Question banks — searchable repositories tagged by topic, difficulty and class.',
  },
]

const teacherFeatures = [
  'Auto-assessment across every question type — MCQ, MSQ, NAT and subjective',
  'Per-student feedback written for that student, not a template',
  'Unique question variations that cut copying and feed extra practice',
  "Assignments customised to each student's level",
  'Voice submissions, with speech-to-text doing the typing',
  'Topic-wise progress reports and subject report cards',
]

const engineFeatures = [
  'A root agent (Google ADK) routing work to six specialist sub-agents',
  'Gemini and the Vertex AI RAG engine behind the workflows',
  'A Golang (Gin) backend serving the app',
  'A Python gRPC AI microservice, reached over HTTP/2',
  'An async task queue on Redis for long-running grading jobs',
  'Flutter front-end for web, Android and iOS',
]

const architecture = [
  {
    src: '/images/projects/lumen-slate/architecture.webp',
    alt: 'System architecture — Flutter, Golang (Gin) backend, Python gRPC AI microservice, Cloud SQL and GKE',
    w: 1800,
    h: 1304,
    caption:
      'System architecture — Flutter talks to a Golang (Gin) backend; the AI microservice sits behind gRPC on HTTP/2 and calls the Vertex AI RAG engine. Postgres on Cloud SQL on both sides, a Redis task queue for async jobs, everything shipping on GKE.',
  },
  {
    src: '/images/projects/lumen-slate/agents.webp',
    alt: 'Agent orchestration — root ADK agent with six specialist sub-agents',
    w: 1800,
    h: 1060,
    caption:
      'Agent orchestration — a root agent routes to specialists: conversation, summarisation, assessment, and general or tailored assignment generation.',
  },
]

const challenges = [
  {
    title: 'Feedback that teaches, not parrots',
    body: 'Keeping AI-generated feedback constructive and personal instead of generic was the hard part — it had to read like a teacher who knows the student, not a template engine.',
  },
  {
    title: 'Multimodal submissions, accessible by default',
    body: 'Text, voice and document answers all flow through the same assessment pipeline. Making that seamless took design work — the interface has to stay usable for every teacher who picks it up.',
  },
  {
    title: 'Deploying the polyglot stack',
    body: 'A Go backend and a Python gRPC microservice powered by Google ADK do not deploy themselves — most of the late-night fights were with deployment, not the models.',
  },
]

const stack = [
  { group: 'App', items: ['Flutter'] },
  { group: 'Services', items: ['Golang · Gin', 'Python gRPC', 'Redis'] },
  { group: 'AI', items: ['Google ADK', 'Gemini', 'Vertex AI RAG', 'Speech-to-text'] },
  { group: 'Data', items: ['PostgreSQL', 'Cloud SQL'] },
  { group: 'Platform', items: ['Docker', 'GKE'] },
]

const numbers = [
  { v: '6', l: 'Specialist agents orchestrated' },
  { v: '4', l: 'Question types auto-assessed' },
  { v: '40%', l: 'Teacher productivity ↑' },
  { v: '3', l: 'Platforms — web, Android, iOS' },
  { v: '2', l: 'Services — Go + Python' },
]

const links = [
  {
    kicker: 'Live product',
    label: 'lumen-slate.firebaseapp.com',
    href: 'https://lumen-slate.firebaseapp.com/',
    desc: 'The deployed Flutter Web build — the full product, running.',
  },
  {
    kicker: 'Hackathon submission',
    label: 'Devpost entry',
    href: 'https://devpost.com/software/lumen-slate',
    desc: 'The AI in Action submission — write-up, feature tour and the build story.',
  },
  {
    kicker: 'Architecture docs',
    label: 'GitHub — Lumen-Slate',
    href: 'https://github.com/Lumen-Slate/lumenslate.documentation',
    desc: 'The system and agent diagrams behind this page, kept in the project repo.',
  },
]

export default function LumenslateCaseStudy() {
  return (
    <section id="lumen-slate" className="pt-12 pb-32 px-6 lg:px-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-px bg-violet-light" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
              Case Study · Lumen Slate
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            className="font-display font-bold tracking-[-0.03em] text-white"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}
          >
            Less paperwork.
            <br />
            <span className="text-gradient">More teaching.</span>
          </h1>
          <p className="mt-4 text-[15px] text-white/55 font-light max-w-3xl leading-relaxed">
            An AI teaching assistant that assesses every question type, writes per-student feedback,
            generates unique question variations and assembles tailored assignments — an agentic
            Google ADK workflow over a Go + Python service stack. Submitted to the AI in Action
            hackathon in 2025.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap gap-2">
            {['AI in Action Hackathon', '2025', 'Gemini · Google ADK', 'Team of 3'].map((c) => (
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
              body: 'In classrooms with high student-teacher ratios, grading and individual feedback eat the hours that should go to mentorship. Generic AI output does not close that gap — students get templates, not teaching.',
            },
            {
              kicker: 'The response',
              body: 'Lumen Slate puts an agentic workflow between the teacher and the paperwork. Text, voice and document submissions go in; structured assessments, per-student feedback, unique question variations and subject report cards come out — with the teacher steering the loop.',
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

        {/* Demo video */}
        <div className="mb-20">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-4 h-px bg-violet-light" />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
                See It Running
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              className="relative w-full aspect-video overflow-hidden rounded-xl"
              style={{ border: '1px solid rgba(124,58,237,0.2)', background: 'rgba(10,10,15,1)' }}
            >
              <iframe
                src="https://player.vimeo.com/video/1094177673?title=0&byline=0&portrait=0&dnt=1"
                title="Lumen Slate — product demo"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="mt-3 font-mono text-[11px] text-white/50">
              Product demo — click play in the player
            </p>
          </Reveal>
        </div>

        {/* The product */}
        <div className="mb-20">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-4 h-px bg-violet-light" />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
                The Product
              </span>
            </div>
            <h3
              className="font-display font-bold tracking-[-0.03em] text-white mb-10"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}
            >
              Screens from <span className="text-gradient">the live build.</span>
            </h3>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              className="overflow-hidden rounded-xl"
              style={{ border: '1px solid rgba(124,58,237,0.2)', background: 'rgba(10,10,15,1)' }}
            >
              <img
                src={shots[0].src}
                alt={shots[0].alt}
                width={shots[0].w}
                height={shots[0].h}
                className="w-full h-auto block"
              />
            </div>
            <p className="mt-3 font-mono text-[11px] text-white/50">{shots[0].caption}</p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {shots.slice(1).map((s, i) => (
              <Reveal key={i} delay={0.1 + 0.05 * i}>
                <div
                  className="overflow-hidden rounded-xl"
                  style={{
                    border: '1px solid rgba(124,58,237,0.2)',
                    background: 'rgba(10,10,15,1)',
                  }}
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    width={s.w}
                    height={s.h}
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </div>
                <p className="mt-3 font-mono text-[11px] text-white/50">{s.caption}</p>
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
            <h3
              className="font-display font-bold tracking-[-0.03em] text-white mb-10"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}
            >
              Two sides of <span className="text-gradient">the workflow.</span>
            </h3>
          </Reveal>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-px"
            style={{
              background: 'rgba(124,58,237,0.08)',
              border: '1px solid rgba(124,58,237,0.08)',
            }}
          >
            {[
              { title: 'For the teacher', items: teacherFeatures },
              { title: 'The agentic core', items: engineFeatures },
            ].map((col, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div className="h-full p-7" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[10px] text-violet-light tracking-[0.12em] uppercase mb-5">
                    {col.title}
                  </div>
                  <ul className="space-y-3">
                    {col.items.map((f, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-[12.5px] text-white/50 leading-relaxed font-light"
                      >
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

        {/* Architecture */}
        <div className="mt-24">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-4 h-px bg-violet-light" />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
                Under The Hood
              </span>
            </div>
            <h3
              className="font-display font-bold tracking-[-0.03em] text-white mb-10"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}
            >
              How the pieces <span className="text-gradient">fit together.</span>
            </h3>
          </Reveal>

          <div className="space-y-8">
            {architecture.map((a, i) => (
              <Reveal key={i} delay={0.1 + 0.05 * i}>
                <div
                  className="overflow-hidden rounded-xl"
                  style={{
                    border: '1px solid rgba(124,58,237,0.2)',
                    background: 'rgba(10,10,15,1)',
                  }}
                >
                  <img
                    src={a.src}
                    alt={a.alt}
                    width={a.w}
                    height={a.h}
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </div>
                <p className="mt-3 font-mono text-[11px] text-white/50">{a.caption}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Challenges & solutions */}
        <div className="mt-24">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-4 h-px bg-violet-light" />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
                What Was Hard
              </span>
            </div>
            <h3
              className="font-display font-bold tracking-[-0.03em] text-white mb-10"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}
            >
              Challenges, and <span className="text-gradient">how they fell.</span>
            </h3>
          </Reveal>

          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(124,58,237,0.1)',
              background: 'rgba(124,58,237,0.06)',
            }}
          >
            {challenges.map((h, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[10px] text-violet-light mb-3">0{i + 1}</div>
                  <div className="font-display font-semibold text-white text-[14px] leading-snug mb-2.5">
                    {h.title}
                  </div>
                  <p className="text-[12.5px] text-white/50 leading-relaxed font-light">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="mt-24">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-4 h-px bg-violet-light" />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
                Stack
              </span>
            </div>
            <h3
              className="font-display font-bold tracking-[-0.03em] text-white mb-10"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}
            >
              The stack, <span className="text-gradient">end to end.</span>
            </h3>
          </Reveal>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px"
            style={{
              background: 'rgba(124,58,237,0.08)',
              border: '1px solid rgba(124,58,237,0.08)',
            }}
          >
            {stack.map((s, i) => (
              <Reveal key={i} delay={0.05 * i}>
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
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-4 h-px bg-violet-light" />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
                Links
              </span>
            </div>
            <h3
              className="font-display font-bold tracking-[-0.03em] text-white mb-10"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}
            >
              Live, and <span className="text-gradient">on the record.</span>
            </h3>
          </Reveal>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(124,58,237,0.1)',
              background: 'rgba(124,58,237,0.06)',
            }}
          >
            {links.map((l, i) => (
              <Reveal key={i} delay={0.05 * i}>
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
            <p className="mt-6 font-mono text-[11px] text-white/50 leading-relaxed">
              Built with Kartikey Singh and Aadarsh Verma — submitted to the AI in Action hackathon,
              2025.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
