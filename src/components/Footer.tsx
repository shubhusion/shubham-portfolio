export default function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-8 flex items-center justify-between flex-wrap gap-4"
      style={{ borderTop: '1px solid rgba(124,58,237,0.08)' }}>
      <div className="font-mono text-[11px] text-white/35">
        © 2026 Shubham Sharma · Ghaziabad, India
      </div>
      <div className="flex gap-6">
        {['About', 'Experience', 'Projects', 'Client Work', 'Skills', 'Contact'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
            className="font-mono text-[11px] text-white/35 hover:text-white/60 transition-colors">
            {l}
          </a>
        ))}
      </div>
    </footer>
  )
}
