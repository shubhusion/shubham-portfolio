interface FrameProps {
  variant: 'desktop' | 'phone'
  src: string
  alt: string
  url?: string
  width?: number
  height?: number
  className?: string
}

/**
 * A flat device frame. Deliberately shadowless to respect the Flat-Console
 * Rule in DESIGN.md — depth comes from hairline borders and translucent
 * layering, matching the hero terminal block.
 */
export function DeviceFrame({ variant, src, alt, url, width, height, className = '' }: FrameProps) {
  if (variant === 'phone') {
    return (
      <div
        className={`rounded-[1.75rem] p-[6px] overflow-hidden ${className}`}
        style={{ background: 'rgba(14,14,24,0.9)', border: '1px solid rgba(124,58,237,0.25)' }}
      >
        <div
          className="rounded-[1.35rem] overflow-hidden"
          style={{ border: '1px solid rgba(124,58,237,0.15)' }}
        >
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className="block w-full h-auto"
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`rounded-xl overflow-hidden ${className}`}
      style={{ background: 'rgba(14,14,24,0.85)', border: '1px solid rgba(124,58,237,0.2)' }}
    >
      <div
        className="flex items-center gap-1.5 px-3 py-2"
        style={{ borderBottom: '1px solid rgba(124,58,237,0.1)' }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" aria-hidden="true" />
        {url && <span className="font-mono text-[10px] text-white/45 ml-2 truncate">{url}</span>}
      </div>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="block w-full h-auto"
      />
    </div>
  )
}

interface PairProps {
  desktop: string
  mobile: string
  alt: string
  url?: string
  className?: string
}

/**
 * Desktop and phone screenshots side by side, bottom-aligned. Laid out with
 * flex rather than overlap so it stays robust at every card width.
 */
export function DevicePair({ desktop, mobile, alt, url, className = '' }: PairProps) {
  return (
    <div className={`flex items-end gap-3 sm:gap-4 ${className}`}>
      <div className="flex-1 min-w-0">
        <DeviceFrame
          variant="desktop"
          src={desktop}
          alt={`${alt} — desktop view`}
          url={url}
          width={1280}
          height={800}
        />
      </div>
      <div className="w-14 sm:w-20 lg:w-24 flex-shrink-0">
        <DeviceFrame
          variant="phone"
          src={mobile}
          alt={`${alt} — mobile view`}
          width={780}
          height={1442}
        />
      </div>
    </div>
  )
}
