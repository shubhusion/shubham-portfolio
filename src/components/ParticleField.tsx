import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  ox: number; oy: number
  vx: number; vy: number
  size: number; alpha: number
  speed: number
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -1000, y: -1000 })
  const raf = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let particles: Particle[] = []
    let W = 0, H = 0

    function resize() {
      W = canvas!.width = canvas!.offsetWidth
      H = canvas!.height = canvas!.offsetHeight
      init()
    }

    function init() {
      particles = []
      const count = Math.floor((W * H) / 8000)
      for (let i = 0; i < count; i++) {
        const x = Math.random() * W
        const y = Math.random() * H
        particles.push({
          x, y, ox: x, oy: y,
          vx: 0, vy: 0,
          size: Math.random() * 1.2 + 0.3,
          alpha: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 0.02 + 0.005,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      const mx = mouse.current.x
      const my = mouse.current.y

      particles.forEach((p, i) => {
        const dx = mx - p.x
        const dy = my - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const repelRadius = 120
        const attractRadius = 220

        if (dist < repelRadius && dist > 0) {
          const force = (repelRadius - dist) / repelRadius
          p.vx -= (dx / dist) * force * 2.5
          p.vy -= (dy / dist) * force * 2.5
        } else if (dist < attractRadius && dist > repelRadius) {
          const force = (attractRadius - dist) / attractRadius * 0.15
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        // Drift back to origin
        p.vx += (p.ox - p.x) * p.speed
        p.vy += (p.oy - p.y) * p.speed

        // Gentle ambient drift
        p.vx += (Math.random() - 0.5) * 0.02
        p.vy += (Math.random() - 0.5) * 0.02

        // Damping
        p.vx *= 0.92
        p.vy *= 0.92

        p.x += p.vx
        p.y += p.vy

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(167, 139, 250, ${p.alpha})`
        ctx.fill()

        // Draw connection lines to nearby particles
        for (let j = i + 1; j < Math.min(i + 8, particles.length); j++) {
          const p2 = particles[j]
          const ldx = p2.x - p.x
          const ldy = p2.y - p.y
          const ldist = Math.sqrt(ldx * ldx + ldy * ldy)
          if (ldist < 80) {
            const lineAlpha = (1 - ldist / 80) * 0.12
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(124, 58, 237, ${lineAlpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      raf.current = requestAnimationFrame(draw)
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onLeave = () => { mouse.current = { x: -1000, y: -1000 } }

    window.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    draw()

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  )
}
