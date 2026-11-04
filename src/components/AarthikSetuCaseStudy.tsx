import { motion } from 'framer-motion'
import Reveal from './Reveal'

const shots = [
  {
    src: '/images/projects/aarthik-setu/gallery-01.webp',
    alt: 'Aarthik Setu borrower dashboard — loan categories, profile and pending applications',
    caption: 'The borrower dashboard — loan categories, pending applications and the assistant one tap away.',
  },
  {
    src: '/images/projects/aarthik-setu/gallery-02.webp',
    alt: 'Government scheme search powered by generative AI',
    caption: 'Government-scheme discovery — generative search over programmes like Mudra, in plain language.',
  },
  {
    src: '/images/projects/aarthik-setu/gallery-03.webp',
    alt: 'Aarthik Setu loan form in Hindi',
    caption: 'The loan application in Hindi — forms localised for the people the platform is built for.',
  },
  {
    src: '/images/projects/aarthik-setu/gallery-04.webp',
    alt: 'Bank details screen — bank statement upload for up to three accounts',
    caption: 'Bank-statement capture — up to three accounts feed the cash-flow assessment pipeline.',
  },
  {
    src: '/images/projects/aarthik-setu/gallery-05.webp',
    alt: 'ITR upload screen in Bengali',
    caption: 'ITR uploads in Bengali — the financial evidence the AI assessment runs on.',
  },
]

const borrowerFeatures = [
  'Loan applications across personal, business, home and auto categories',
  'Voice-to-text form filling — speak, and the form writes itself',
  'Document capture in-app: bank statements (up to 3 accounts) and ITRs',
  'An AI chatbot on every screen for process guidance',
  'A localised interface — the application works in Hindi, Bengali and English',
]

const platformFeatures = [
  'AI-driven credit assessment built on cash-flow signals, not just collateral',
  'Generative search over government schemes such as Mudra, with eligibility framing',
  'A financial-literacy assistant for first-time borrowers',
  'OCEN-standard credit rails, implemented backend-side',
  'A short-tenor, small-ticket focus — the segment traditional lenders underserve',
]

const challenges = [
  {
    title: 'Integrating a young OCEN framework',
    body: 'The standardised credit rails were still evolving while we built. We worked with the repository maintainer directly, then implemented most of the OCEN-related features on the backend so the product could speak in standard lending terms.',
  },
  {
    title: 'Voice capture, end to end',
    body: 'Voice-to-text is easy to mock and fiddly to ship: capture audio in the app, transcode it into a format the API accepts, then render the transcript back into live form fields without stepping on what the user already typed.',
  },
  {
    title: 'State that survives a voice pipeline',
    body: 'Screens that call APIs while a voice pipeline mutates the same form get unpredictable fast. BLoC gave every screen a strict event→state flow, so the form and the audio pipeline could not fight over it.',
  },
  {
    title: 'Vector search with a cache strategy',
    body: 'Scheme and literacy search needed to feel instant without burning a model call on every keystroke, so we designed caching around Google Vector Search instead of calling the model blindly.',
  },
  {
    title: 'CI/CD all the way to GKE',
    body: 'Google Cloud Build pipelines built the containers and rolled them to Google Kubernetes Engine — a merged change reached the cluster without anyone touching a shell.',
  },
  {
    title: 'Redis in front of the hot paths',
    body: 'Lending surfaces are read-heavy — schemes, eligibility, application status. Putting Redis in front of those paths is where the ~30% cut in API response times came from.',
  },
]

const stack = [
  { group: 'App', items: ['Flutter', 'BLoC'] },
  { group: 'Backend', items: ['Golang', 'Redis'] },
  { group: 'AI', items: ['Gemini', 'Google Vector Search'] },
  { group: 'Cloud', items: ['GCP', 'GKE', 'Docker', 'Cloud Build', 'Firebase', 'FCM'] },
  { group: 'Rails', items: ['OCEN'] },
]

const numbers = [
  { v: '1st', l: 'Fintech Track · 100+ teams' },
  { v: '30%', l: 'API response time ↓' },
  { v: '5', l: 'AI-driven features shipped' },
  { v: '13', l: 'Technologies across the stack' },
  { v: '4', l: 'Engineers — Team Hare&Tortoise' },
]

const links = [
  {
    kicker: 'Live product',
    label: 'aarthik-setu.web.app',
    href: 'https://aarthik-setu.web.app/',
    desc: 'The deployed product — a Flutter Web app behind a sign-in gate.',
  },
  {
    kicker: 'Pitch deck',
    label: 'Canva presentation',
    href: 'https://www.canva.com/design/DAGR2MOILCA/uXVC2dDGmAcNs6g18r7rZg/view',
    desc: 'The original hackathon pitch deck — problem framing and the product walkthrough.',
  },
  {
    kicker: 'Hackathon submission',
    label: 'Devfolio case',
    href: 'https://devfolio.co/projects/aarthiksetu-f3a4',
    desc: 'The original Gen AI Exchange Hackathon submission — write-up, features and the OCEN notes.',
  },
]

export default function AarthikSetuCaseStudy() {
  return (
    <section
      id="aarthik-setu"
      className="pt-12 pb-32 px-6 lg:px-12 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-px bg-violet-light" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
              Case Study · Aarthik Setu
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            className="font-display font-bold tracking-[-0.03em] text-white"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
            Innovative credit access.<br />
            <span className="text-gradient">For a better tomorrow.</span>
          </h1>
          <p className="mt-4 text-[15px] text-white/55 font-light max-w-3xl leading-relaxed">
            A GenAI-powered platform that connects underserved MSMEs to lenders, investors
            and government schemes like Mudra — AI-driven credit assessment, cash-flow-based
            lending and standardised OCEN rails for short-tenor, small-ticket loans. Built in
            October 2024 at the Gen AI Exchange Hackathon by Google; 1st place, Fintech Track,
            among 100+ teams.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap gap-2">
            {['🏆 1st — Fintech Track', 'Google Gen AI Exchange Hackathon', 'October 2024', 'Team Hare&Tortoise'].map(c => (
              <span key={c} className="font-mono text-[10px] px-2 py-1 rounded text-white/50"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Problem → Response */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px mt-16 mb-20 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}>
          {[
            {
              kicker: 'The problem',
              body: "India's MSMEs run on cash flow, not collateral. Traditional underwriting cannot read a business from a bank statement and an ITR alone, so millions of small enterprises stay locked out of the short-tenor, small-ticket credit that keeps them moving.",
            },
            {
              kicker: 'The response',
              body: 'Aarthik Setu puts AI between the MSME and the credit market: applications in Indian languages, bank statements and ITRs captured in-app, an assessment that reads cash flow, and a curated path to lenders, investors and government schemes — over OCEN rails where the ecosystem allows.',
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
            <div className="relative w-full aspect-video overflow-hidden rounded-xl"
              style={{ border: '1px solid rgba(124,58,237,0.2)', background: 'rgba(10,10,15,1)' }}>
              <iframe
                src="https://drive.google.com/file/d/1neZgRz0oCR-sccCiUR7YKXx13afZZLGh/preview"
                title="Aarthik Setu — product demo"
                allow="autoplay; fullscreen"
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
            <h3 className="font-display font-bold tracking-[-0.03em] text-white mb-10"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
              Screens from <span className="text-gradient">the live build.</span>
            </h3>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-xl"
              style={{ border: '1px solid rgba(124,58,237,0.2)', background: 'rgba(10,10,15,1)' }}>
              <img
                src={shots[0].src}
                alt={shots[0].alt}
                width={1800}
                height={960}
                className="w-full h-auto block"
              />
            </div>
            <p className="mt-3 font-mono text-[11px] text-white/50">{shots[0].caption}</p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {shots.slice(1).map((s, i) => (
              <Reveal key={i} delay={0.1 + 0.05 * i}>
                <div className="overflow-hidden rounded-xl"
                  style={{ border: '1px solid rgba(124,58,237,0.2)', background: 'rgba(10,10,15,1)' }}>
                  <img
                    src={s.src}
                    alt={s.alt}
                    width={1800}
                    height={960}
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
            <h3 className="font-display font-bold tracking-[-0.03em] text-white mb-10"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
              Two sides of <span className="text-gradient">the journey.</span>
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.08)' }}>
            {[
              { title: 'For the MSME', items: borrowerFeatures },
              { title: 'The platform underneath', items: platformFeatures },
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

        {/* Challenges & solutions */}
        <div className="mt-24">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-4 h-px bg-violet-light" />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
                What Was Hard
              </span>
            </div>
            <h3 className="font-display font-bold tracking-[-0.03em] text-white mb-10"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
              Challenges, and <span className="text-gradient">how they fell.</span>
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}>
            {challenges.map((h, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div className="p-7 h-full" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[10px] text-violet-light mb-3">
                    0{i + 1}
                  </div>
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
            <h3 className="font-display font-bold tracking-[-0.03em] text-white mb-10"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
              The stack, <span className="text-gradient">end to end.</span>
            </h3>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.08)' }}>
            {stack.map((s, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div className="h-full p-6" style={{ background: 'rgba(10,10,15,1)' }}>
                  <div className="font-mono text-[10px] text-violet-light tracking-[0.12em] uppercase mb-4">
                    {s.group}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map(t => (
                      <span key={t} className="font-mono text-[10px] px-2 py-1 rounded text-white/50"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
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

        {/* Links */}
        <div className="mt-24">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-4 h-px bg-violet-light" />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">
                Links
              </span>
            </div>
            <h3 className="font-display font-bold tracking-[-0.03em] text-white mb-10"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
              Live, and <span className="text-gradient">on the record.</span>
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}>
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
                    <span className="text-white/50 text-[13px]" aria-hidden="true">↗</span>
                  </div>
                  <p className="text-[12.5px] text-white/50 leading-relaxed font-light">{l.desc}</p>
                </motion.a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-6 font-mono text-[11px] text-white/50 leading-relaxed">
              Built with team Hare&Tortoise — Shubham Sharma · Varun Vilvadrinath · Aadarsh Verma · Harish Sahadev M.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
