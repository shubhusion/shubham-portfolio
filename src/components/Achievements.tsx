import { motion } from 'framer-motion'
import Reveal from './Reveal'

const achievements = [
  { n: '01', icon: '🏆', title: 'Google GenAI Exchange Hackathon', sub: '1st place · Fintech Track · 100+ teams · 2024' },
  { n: '02', icon: '🥉', title: 'IIT Madras GenAI Hackathon', sub: '3rd Prize · surpassed 50+ teams' },
  { n: '03', icon: '⚡', title: 'UnityHack Open Source Bounties', sub: 'Recipient 2024 & 2025 · 20+ repositories' },
  { n: '04', icon: '📊', title: 'Kaggle Expert', sub: 'Notebook Expert & Dataset Expert' },
  { n: '05', icon: '🎯', title: 'IIT Bombay Abyuday Finalist', sub: "Asia's largest student technical festival" },
  { n: '06', icon: '🎓', title: 'Head of Sponsorship — Tech: Paradox', sub: "IIT Madras · Asia's largest tech festival" },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 lg:px-12" style={{ borderTop: '1px solid rgba(124,58,237,0.08)' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-px bg-violet-light" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">Recognition</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-bold tracking-[-0.03em] text-white mb-12"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
            <span className="text-gradient">Achievements.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(124,58,237,0.1)', background: 'rgba(124,58,237,0.06)' }}>
          {achievements.map((a, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <motion.div
                className="p-7 relative overflow-hidden"
                style={{ background: 'rgba(10,10,15,1)' }}
                whileHover={{ backgroundColor: 'rgba(14,14,24,1)' }}
              >
                <motion.div
                  className="absolute bottom-0 left-4 right-4 h-px"
                  style={{ background: 'linear-gradient(to right, transparent, #7C3AED, transparent)' }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="font-mono text-[10px] text-white/35 mb-3">{a.n}</div>
                <div className="text-2xl mb-3">{a.icon}</div>
                <div className="font-display font-semibold text-white text-[14px] leading-snug mb-1.5">{a.title}</div>
                <div className="font-mono text-[11px] text-white/50 leading-relaxed">{a.sub}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
