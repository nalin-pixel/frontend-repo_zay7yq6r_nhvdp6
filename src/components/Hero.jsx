import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Layering: glass veil + scanlines for ultrarealistic vibe */}
      <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-scanlines opacity-[0.07] mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/80 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live voice agents for sales, support & booking
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mt-4 text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
          >
            Launch AI Voice Agents your customers love
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-5 text-lg md:text-xl text-white/80 max-w-xl"
          >
            A clean, modern platform to sell and manage production-ready voice agents with cinematic polish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">
              View pricing
            </a>
            <a href="/test" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition">
              Check backend
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
            className="mt-8 flex items-center gap-4 text-sm text-white/70"
          >
            <div className="flex -space-x-2">
              <span className="w-8 h-8 rounded-full bg-white/20 border border-white/30 inline-flex items-center justify-center">🗣️</span>
              <span className="w-8 h-8 rounded-full bg-white/20 border border-white/30 inline-flex items-center justify-center">✨</span>
              <span className="w-8 h-8 rounded-full bg-white/20 border border-white/30 inline-flex items-center justify-center">📞</span>
            </div>
            <span>Trusted by teams shipping AI voice experiences</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
