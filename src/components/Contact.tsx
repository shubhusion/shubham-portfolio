import { motion } from 'framer-motion'
import Reveal from './Reveal'

const links = [
  { icon: '✉', label: 'Email', value: 'shubham27.sharma03@gmail.com', href: 'mailto:shubham27.sharma03@gmail.com' },
  { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/shubhusion', href: 'https://linkedin.com/in/shubhusion' },
  { icon: '⌥', label: 'GitHub', value: 'github.com/shubhusion', href: 'https://github.com/shubhusion' },
  { icon: '☏', label: 'Phone', value: '+91 9958538871', href: 'tel:+919958538871' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12" style={{ borderTop: '1px solid rgba(124,58,237,0.08)' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden p-12 lg:p-16"
            style={{ background: 'rgba(14,14,24,0.6)', border: '1px solid rgba(124,58,237,0.15)' }}>

            {/* Ambient glow */}
            <div className="absolute pointer-events-none" style={{
              width: 600, height: 600, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
              filter: 'blur(60px)', top: -200, right: -200,
              animation: 'drift 14s ease-in-out infinite',
            }} />
            <div className="absolute pointer-events-none" style={{
              width: 400, height: 400, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)',
              filter: 'blur(60px)', bottom: -150, left: -100,
              animation: 'drift 10s ease-in-out infinite reverse',
            }} />
            <style>{`@keyframes drift{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(40px,-30px) scale(1.08)}66%{transform:translate(-30px,40px) scale(.94)}}`}</style>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-4 h-px bg-violet-light" />
                  <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-violet-light">Get in touch</span>
                </div>
                <h2 className="font-display font-bold tracking-[-0.03em] text-white mb-4 leading-[1.05]"
                  style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
                  Let's build<br />something <span className="text-gradient">great.</span>
                </h2>
                <p className="text-[15px] text-white/45 font-light leading-relaxed mb-8 max-w-md">
                  Open to full-time roles as a Full Stack, AI, or Founding Engineer. Also selectively available for technical consulting and architecture advisory.
                </p>
                <motion.a
                  href="mailto:shubham27.sharma03@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-display font-semibold text-white text-[15px]"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #6D28D9)' }}
                  whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(124,58,237,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Send me an email ↗
                </motion.a>
              </div>

              <div className="flex flex-col gap-3">
                {links.map((l, i) => (
                  <motion.a
                    key={i}
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl relative overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(124,58,237,0.12)' }}
                    whileHover={{ x: 5, borderColor: 'rgba(124,58,237,0.4)', backgroundColor: 'rgba(124,58,237,0.06)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm flex-shrink-0 font-display font-bold"
                      style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.2)', color: '#A78BFA' }}>
                      {l.icon}
                    </div>
                    <div>
                      <div className="font-mono text-[9px] text-white/30 tracking-widest uppercase mb-0.5">{l.label}</div>
                      <div className="font-display text-[13px] font-medium text-white">{l.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
