type ArchifyEmbedProps = {
  src: string
  title: string
  width: number
  height: number
  minWidth?: number
  caption?: string
}

export default function ArchifyEmbed({
  src,
  title,
  width,
  height,
  minWidth = 0,
  caption,
}: ArchifyEmbedProps) {
  return (
    <div>
      <div
        className="overflow-x-auto rounded-xl"
        style={{ border: '1px solid rgba(124,58,237,0.2)', background: 'rgba(10,10,15,1)' }}
      >
        <div
          className="relative"
          style={{ width: '100%', minWidth, aspectRatio: `${width} / ${height}` }}
        >
          <iframe
            src={src}
            title={title}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allow="fullscreen"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-downloads allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
        {caption ? (
          <p className="font-mono text-[11px] text-white/50 leading-relaxed min-w-[240px] flex-1">
            {caption}
          </p>
        ) : (
          <span />
        )}
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] tracking-[0.12em] uppercase text-violet-light hover:text-white transition-colors duration-200 whitespace-nowrap"
        >
          Open standalone <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  )
}
