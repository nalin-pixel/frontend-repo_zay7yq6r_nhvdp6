import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.08]" />

      {/* Large radial glows */}
      <div className="absolute -top-40 -left-40 h-[60vh] w-[60vh] bg-purple-500/30 blur-[120px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 h-[60vh] w-[60vh] bg-blue-500/30 blur-[120px] rounded-full" />

      {/* Floating orbs */}
      <motion.div
        className="absolute left-10 top-24 h-40 w-40 rounded-full bg-white/6 backdrop-blur-xl border border-white/10 shadow-2xl"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-16 bottom-20 h-24 w-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Interactive spotlight following cursor */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: smoothX, top: smoothY }}
      >
        <div className="h-72 w-72 bg-spotlight" />
      </motion.div>

      {/* Film grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-overlay" />
    </div>
  )
}
