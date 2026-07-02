import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px', amount: threshold })
  return { ref, inView }
}
