import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export default function Cursor() {
  const prefersReducedMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const [hidden, setHidden] = useState(false)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 120, damping: 18 })
  const sy = useSpring(my, { stiffness: 120, damping: 18 })

  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY) }
    const enter = () => setHidden(false)
    const leave = () => setHidden(true)
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseenter', enter)
    document.addEventListener('mouseleave', leave)

    const addHover = () => {
      document.querySelectorAll('a, button, [data-cursor="hover"]').forEach(el => {
        el.addEventListener('mouseenter', () => setHovered(true))
        el.addEventListener('mouseleave', () => setHovered(false))
      })
    }
    addHover()
    const obs = new MutationObserver(addHover)
    obs.observe(document.body, { childList: true, subtree: true })
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseenter', enter)
      document.removeEventListener('mouseleave', leave)
      obs.disconnect()
    }
  }, [mx, my])

  if (prefersReducedMotion) return null
  if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{ x: mx, y: my, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: hovered ? 10 : 8, height: hovered ? 10 : 8, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-full h-full rounded-full bg-violet" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-violet/40"
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovered ? 44 : 32,
          height: hovered ? 44 : 32,
          opacity: hidden ? 0 : 1,
          borderColor: hovered ? 'rgba(124,58,237,0.8)' : 'rgba(124,58,237,0.4)',
          backgroundColor: hovered ? 'rgba(124,58,237,0.06)' : 'transparent',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
