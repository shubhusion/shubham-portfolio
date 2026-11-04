import { motion } from 'framer-motion'
import { ReactNode } from 'react'
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
    src: '/images/projects/karum/gallery-01.webp',
    alt: 'Karum home — brand seed, city and a previous Austin run',
    w: 1800,
    h: 938,
    caption:
      'The landing page — a brand, a city and a previous run, with Austin, Brooklyn and Mumbai one click away.',
  },
  {
    src: '/images/projects/karum/gallery-02.webp',
    alt: 'New scout form with modes, city, radius, brand seed, vibe chips and SKUs',
    w: 1800,
    h: 927,
    caption:
      'A new scout — wholesale, flagship or collab mode; a brand seed or vibe chips; a city, radius and door category.',
  },
  {
    src: '/images/projects/karum/gallery-03.webp',
    alt: 'Brand page with the brand profile and four stored judge campaigns',
    w: 1800,
    h: 927,
    caption:
      'The brand page — the profile every pitch is written for, and the four stored campaigns attached to the judge account.',
  },
  {
    src: '/images/projects/karum/gallery-04.webp',
    alt: 'Campaign run with live trace, door map, ranked door board and evidence panel',
    w: 1800,
    h: 928,
    caption:
      'The campaign run — a live trace, 10 mapped doors, 18 skips, a ranked door board and an evidence panel for the selected stop.',
  },
  {
    src: '/images/projects/karum/gallery-05.webp',
    alt: 'How we know evidence drawer showing sub-scores and provenance labels',
    w: 1800,
    h: 928,
    caption:
      'How we know — every sub-score opens into its inputs, with Qloo facts, Google facts and model inference labelled separately.',
  },
  {
    src: '/images/projects/karum/gallery-06.webp',
    alt: 'Generated pitch script with opening, why this door, pitch, ask and close',
    w: 1800,
    h: 934,
    caption:
      'The pitch — opening, why this door, the product to lead with, the ask and the close, written for that store.',
  },
  {
    src: '/images/projects/karum/gallery-07.webp',
    alt: 'Store detail with scores, field route, menu grounding and send-pitch action',
    w: 1800,
    h: 935,
    caption:
      'The last mile — score sources, field route, menu grounding and a pitch that can leave by email.',
  },
]

const modes = [
  {
    n: '01',
    title: 'Wholesale doors',
    body: "Rank independent stores, bars and cafés whose customers share the brand's taste — with a score, evidence and a pitch for every stop.",
  },
  {
    n: '02',
    title: 'Flagship & pop-up',
    body: "Read Qloo heatmaps to find the blocks and neighbourhoods where the brand's audience concentrates, instead of guessing at a postcode.",
  },
  {
    n: '03',
    title: 'Brand collabs',
    body: 'Find non-competing shops with the same audience — galleries, bookstores, studios — for joint events and shared shelf space.',
  },
]

const capabilities = [
  {
    title: 'Doors to skip',
    body: 'Popular stores that fall below the tested score floor, or already carry four or more direct competitors, each with the reason attached.',
  },
  {
    title: 'Evidence, not vibes',
    body: 'Every field is labelled Qloo fact, Google fact, model inference or input. If the data is missing, the product says so.',
  },
  {
    title: 'Pitch and battlecard',
    body: 'A shopkeeper script, the SKU to lead with, a competitor battlecard and a PDF run-sheet for the field.',
  },
  {
    title: 'Route and field plan',
    body: 'Google Routes orders the qualified doors into a drive; each stop keeps its pitch, score and source trail.',
  },
]

const subScores = [
  {
    weight: '50%',
    title: 'Taste fit',
    source: 'Qloo',
    body: "How closely the store's customers match the seed — entity affinity, taste tags and rank inside the current list.",
  },
  {
    weight: '30%',
    title: 'Shelf opportunity',
    source: 'Gemini + Search',
    body: 'Whether the menu or shelf has room — competitors, complementary products and a citation for every claim.',
  },
  {
    weight: '20%',
    title: 'Demographic fit',
    source: 'Qloo',
    body: "How well the store's audience age groups line up with the brand's target customers.",
  },
]

const provenance = [
  { label: 'Qloo fact', desc: 'Taste, heatmaps, audience', color: '#A78BFA' },
  { label: 'Google fact', desc: 'Places, menus, routes', color: '#60A5FA' },
  { label: 'Model inference', desc: 'Shelf score, drafts', color: '#FCD34D' },
  { label: 'Input', desc: 'Brand seed and city', color: '#4ADE80' },
]

const services = [
  {
    n: '01',
    repo: 'karum-client',
    role: 'Flutter Web',
    body: 'The judge-facing product: brand seed, live run trace, map, door board, evidence drawer, pitch and PDF export.',
  },
  {
    n: '02',
    repo: 'karum-server',
    role: 'Go + Gin gateway',
    body: 'Geocoding, the scout job, gRPC calls to taste and AI, Places and Routes, score assembly, SSE and persistence.',
  },
  {
    n: '03',
    repo: 'karum-service-taste',
    role: 'Python + gRPC',
    body: 'The only service allowed to talk to Qloo: resolution, ranking, heatmaps, demographics, cache and fixture replay.',
  },
  {
    n: '04',
    repo: 'karum-service-ai',
    role: 'Python + gRPC',
    body: 'Vertex AI and Google Search grounding: menu audits, drafts, SKUs, battlecards, regeneration and the evidence allow-set.',
  },
  {
    n: '05',
    repo: 'karum-infra',
    role: 'Contracts + deploy',
    body: 'Shared protos and provenance markers, the contract test, locked presets, fixture pack, local run path, demo VM and Firebase deploy.',
  },
]

const ownership = [
  {
    repo: 'karum-service-taste',
    role: 'Taste engine · primary owner',
    commits: '24 commits',
    body: 'Typed Qloo client with fixture replay, pacing and metrics; seed and tag resolution with derived confidence; door scouting with explainability; heatmaps and audience comparison; relative-floored scoring and the skip list; Redis single-flight cache; gRPC surface and preset regression tests.',
  },
  {
    repo: 'karum-service-ai',
    role: 'AI engine · primary owner',
    commits: '21 commits',
    body: 'Vertex and Gemini client; grounded menu audit; drafts, SKUs and briefs; the evidence allow-set and draft provenance; regeneration with instructions and attachments; provider abstraction, fallbacks, usage and cost logging.',
  },
  {
    repo: 'karum-server',
    role: 'Coordinator',
    commits: '20 commits',
    body: 'Scout runner and degraded draft path; judge account, sessions and the prewarm target; Google Places gateway; SSE run states; pitch PDF export and regeneration; CockroachDB persistence; typed run failures and call retries.',
  },
  {
    repo: 'karum-client',
    role: 'Flutter client',
    commits: '25 commits',
    body: 'Brand-agent scout from seed to pitch; Google Maps markers, place detail and the door board; judge sign-in and focus ring; workspace panes; account and campaign screen; evidence rendering and score-source badges; 320px layout and accessibility fixes.',
  },
  {
    repo: 'karum-infra',
    role: 'Shared contracts + platform',
    commits: '72 commits',
    body: 'Frozen protos and a stub contract test; locked preset fixtures and the redacted replay pack; CI gates; local and demo scripts; environment contract; Qloo coverage spike and API catalogue; provider-switching docs.',
  },
]

const challenges = [
  {
    title: 'Resolution, not invention',
    body: "Madre Mezcal did not exist in Qloo, and a search for “Blind Pig” resolved to a city in Ukraine. The seed builder resolves known entities locally, sends unknown brands as a search, and asks the user to confirm the exact point before a run.",
  },
  {
    title: 'Parameters that fail silently',
    body: 'A 200 response does not mean a filter was used. Some Qloo settings are ignored for certain search types, and a location search returns zero rows unless the WKT and radius are exact. Only tested spellings ship; the rest are documented as no-ops.',
  },
  {
    title: 'A 10,000-request month',
    body: 'The hackathon key allowed 10,000 Qloo requests a month. Responses are cached for a day, concurrent misses share one call through single-flight, a backup cache survives Redis loss, and a replay mode runs the whole product with no API keys.',
  },
  {
    title: 'Degrade, never lie',
    body: 'When the menu check fails, shelf is marked unknown and the score is recomputed without it. If the AI service is down, the door list still renders with a degraded label. A run keeps going if the browser closes.',
  },
]

const stack = [
  { group: 'Client', items: ['Flutter Web', 'Dart'] },
  { group: 'Services', items: ['Go · Gin', 'Python · gRPC', 'Redis'] },
  {
    group: 'AI & data',
    items: ['Qloo Taste Graph', 'Gemini · Vertex AI', 'Google Search', 'Places · Routes'],
  },
  {
    group: 'Platform',
    items: ['CockroachDB', 'Docker Compose', 'Caddy', 'Firebase Hosting', 'GitHub Actions'],
  },
]

const numbers = [
  { v: '5', l: 'Connected repositories' },
  { v: '2', l: 'Builders' },
  { v: '3', l: 'Scout modes' },
  { v: '4', l: 'Provenance labels' },
  { v: '50/30/20', l: 'Score weights' },
  { v: '4', l: 'Judge presets' },
]

const links = [
  {
    kicker: 'Live product',
    label: 'karum-512016.web.app',
    href: 'https://karum-512016.web.app/',
    desc: 'The deployed Flutter Web build — no login required.',
  },
  {
    kicker: 'Hackathon submission',
    label: 'Devpost entry',
    href: 'https://devpost.com/software/karum',
    desc: 'The Qloo Agentic Hackathon write-up, gallery and build story.',
  },
  {
    kicker: 'Source',
    label: 'GitHub — karum-labs',
    href: 'https://github.com/karum-labs',
    desc: 'All five repositories, MIT licensed, with the shared contracts in the open.',
  },
  {
    kicker: 'Demo',
    label: 'Watch on Vimeo',
    href: 'https://vimeo.com/1241448615',
    desc: 'The walkthrough, from a brand seed to a ranked field route.',
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

export default function KarumCaseStudy() {
  return (
    <section id="karum" className="pt-12 pb-32 px-6 lg:px-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-px bg-violet-light" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
              Case Study · Karum
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            className="font-display font-bold tracking-[-0.03em] text-white"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}
          >
            Knock on the
            <br />
            <span className="text-gradient">right doors.</span>
          </h1>
          <p className="mt-4 text-[15px] text-white/55 font-light max-w-3xl leading-relaxed">
            Karum turns a brand and a city into a ranked field plan — which stores to pitch, where
            to open a pop-up, who to partner with, which doors to skip, and the route between them.
            Qloo ranks cultural fit, Gemini reads live menus through Google Search, and every number
            carries a source label.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              'Qloo Agentic Hackathon',
              '2026',
              'Built with Aadarsh Verma',
              'Team of 2',
              'Flutter Web · Go · Python',
            ].map(c => (
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
              body: 'A field rep can walk ten stores in a day and still knock on the wrong doors. Popularity is not fit — a famous bar can be a terrible account for a brand whose customers never go there. The brand burns the trip, and the shelf goes to someone else.',
            },
            {
              kicker: 'The response',
              body: 'Karum is a brand-operated expansion agent. Give it a brand seed — or a mix of reference brands, genres and lifestyle tags — plus a city. It ranks wholesale doors, flagship corridors and collab partners, checks live menus, writes the pitch, plans the drive, and names the doors to skip.',
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
              style={{
                border: '1px solid rgba(124,58,237,0.2)',
                background: 'rgba(10,10,15,1)',
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/1241448615?title=0&byline=0&portrait=0&dnt=1"
                title="Karum — product demo"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="mt-3 font-mono text-[11px] text-white/50">
              Product demo — the full run, from a brand seed to a field route
            </p>
          </Reveal>
        </div>

        {/* The product */}
        <div className="mb-20">
          <SectionHead kicker="The Product">
            Seven screens from <span className="text-gradient">the live build.</span>
          </SectionHead>

          <GalleryShot shot={shots[0]} delay={0.15} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <GalleryShot shot={shots[1]} delay={0.1} />
            <GalleryShot shot={shots[2]} delay={0.15} />
          </div>

          <div className="mt-8">
            <GalleryShot shot={shots[3]} delay={0.1} />
          </div>

          <div className="mt-8">
            <GalleryShot shot={shots[4]} delay={0.1} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <GalleryShot shot={shots[5]} delay={0.1} />
            <GalleryShot shot={shots[6]} delay={0.15} />
          </div>
        </div>

        {/* What it does */}
        <div className="mt-24">
          <SectionHead kicker="What It Does">
            Three ways to <span className="text-gradient">find a door.</span>
          </SectionHead>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}
          >
            {modes.map((m, i) => (
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={0.05 * i}>
                <div
                  className="p-5 h-full rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="font-display font-semibold text-white text-[13px] leading-snug mb-2">
                    {c.title}
                  </div>
                  <p className="text-[12px] text-white/50 leading-relaxed font-light">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Score model */}
        <div className="mt-24">
          <SectionHead kicker="The Score">
            One number, <span className="text-gradient">three receipts.</span>
          </SectionHead>

          <Reveal delay={0.1}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(124,58,237,0.16)', background: 'rgba(124,58,237,0.06)' }}
            >
              <div
                className="p-7 lg:p-10"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(14,14,24,1) 0%, rgba(19,15,34,1) 100%)',
                }}
              >
                <div className="font-mono text-[10px] text-white/50 uppercase tracking-[0.14em] mb-4">
                  Store score
                </div>
                <div
                  className="font-display font-bold tracking-[-0.03em] flex flex-wrap items-baseline gap-x-2.5 gap-y-1"
                  style={{ fontSize: 'clamp(1.45rem,2.8vw,2.2rem)' }}
                >
                  <span className="text-gradient">50%</span>
                  <span className="text-white/50">taste fit</span>
                  <span className="text-white/20">+</span>
                  <span className="text-gradient">30%</span>
                  <span className="text-white/50">shelf opportunity</span>
                  <span className="text-white/20">+</span>
                  <span className="text-gradient">20%</span>
                  <span className="text-white/50">demographic fit</span>
                </div>
                <p className="mt-5 text-[13px] text-white/50 leading-relaxed font-light max-w-3xl">
                  Raw Qloo match scores move with the brand and the city, so Karum never presents one
                  as an absolute. Each store is ranked inside the current list, and the skip floor
                  comes from tested runs, not a guessed number. If the menu check is unavailable, the
                  shelf term is marked unknown and the score is recalculated from the other two.
                </p>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-px"
                style={{ background: 'rgba(124,58,237,0.1)' }}
              >
                {subScores.map((s, i) => (
                  <Reveal key={s.title} delay={0.05 * i}>
                    <div className="p-6 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <div className="font-display font-semibold text-white text-[14px]">
                          {s.title}
                        </div>
                        <div className="font-mono text-[11px] text-violet-light">{s.weight}</div>
                      </div>
                      <div className="font-mono text-[9.5px] text-white/50 uppercase tracking-[0.12em] mb-2.5">
                        {s.source}
                      </div>
                      <p className="text-[12px] text-white/50 leading-relaxed font-light">
                        {s.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden mt-4"
            style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}
          >
            {provenance.map((p, i) => (
              <Reveal key={p.label} delay={0.05 * i}>
                <div className="p-5 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: p.color }}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[10px] text-white/70">{p.label}</span>
                  </div>
                  <div className="font-mono text-[9.5px] text-white/50 tracking-wide">{p.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <p className="mt-3 font-mono text-[11px] text-white/50 leading-relaxed">
              Four labels, enforced in the shared protos — no number ships without its source.
            </p>
          </Reveal>
        </div>

        {/* Architecture */}
        <div className="mt-24">
          <SectionHead kicker="Under The Hood">
            Five repos, <span className="text-gradient">one contract.</span>
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
                <span className="text-white/50">client</span>
                <span className="text-violet-light"> → </span>
                go gateway
                <span className="text-violet-light"> → </span>
                taste · ai · places · routes
                <span className="text-violet-light"> → </span>
                ranked doors + evidence
              </div>
            </div>
          </Reveal>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}
          >
            {services.map((s, i) => (
              <Reveal
                key={s.repo}
                delay={0.05 * i}
                className={i === services.length - 1 ? 'md:col-span-2' : ''}
              >
                <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="font-mono text-[10px] text-violet-light mb-1.5">{s.n}</div>
                      <div className="font-mono text-[12px] text-white/85">{s.repo}</div>
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
        </div>

        {/* What I owned */}
        <div className="mt-24">
          <SectionHead kicker="My Contribution">
            What I <span className="text-gradient">owned.</span>
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
                Karum was built by two people. Aadarsh Verma started the project and led the product
                surface and deployment path. I co-built across all five repositories, with primary
                ownership of the taste and AI engines.
              </p>
            </div>
          </Reveal>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}
          >
            {ownership.map((o, i) => (
              <Reveal key={o.repo} delay={0.04 * i}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 p-6 lg:p-7"
                  style={{
                    background: 'rgba(10,10,15,1)',
                    borderTop: i === 0 ? 'none' : '1px solid rgba(124,58,237,0.1)',
                  }}
                >
                  <div className="lg:col-span-4">
                    <div className="font-mono text-[11.5px] text-white/80">{o.repo}</div>
                    <div className="font-mono text-[9.5px] text-white/50 mt-1.5 tracking-wide">
                      {o.role}
                    </div>
                    <div className="inline-flex mt-2 font-mono text-[9px] text-violet-light/80 px-1.5 py-0.5 rounded"
                      style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.18)' }}>
                      {o.commits}
                    </div>
                  </div>
                  <p className="lg:col-span-8 text-[12.5px] text-white/50 leading-relaxed font-light">
                    {o.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-4 font-mono text-[10.5px] text-white/50 leading-relaxed">
              Non-merge commits authored by Shubham Sharma across the five repositories, verified
              from git history. Aadarsh built the original client and coordinator flows; the product
              shipped as one system.
            </p>
          </Reveal>
        </div>

        {/* Challenges */}
        <div className="mt-24">
          <SectionHead kicker="What Was Hard">
            Challenges, and <span className="text-gradient">how they fell.</span>
          </SectionHead>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}
          >
            {challenges.map((c, i) => (
              <Reveal key={c.title} delay={0.05 * i}>
                <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[10px] text-violet-light mb-3">
                    0{i + 1}
                  </div>
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
            style={{ border: '1px solid rgba(124,58,237,0.08)', background: 'rgba(124,58,237,0.08)' }}
          >
            {stack.map((s, i) => (
              <Reveal key={s.group} delay={0.05 * i}>
                <div className="h-full p-6" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[10px] text-violet-light tracking-[0.12em] uppercase mb-4">
                    {s.group}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map(t => (
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
            Live, and <span className="text-gradient">on the record.</span>
          </SectionHead>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}
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
                    <span className="text-white/50 text-[13px]" aria-hidden="true">↗</span>
                  </div>
                  <p className="text-[12.5px] text-white/50 leading-relaxed font-light">{l.desc}</p>
                </motion.a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-6 font-mono text-[11px] text-white/50 leading-relaxed">
              Built with Aadarsh Verma for the Qloo Agentic Hackathon, 2026. MIT licensed.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
