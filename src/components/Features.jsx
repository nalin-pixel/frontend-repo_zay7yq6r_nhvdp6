import { Sparkles, PhoneCall, Headphones, BarChart3, Cpu, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Sparkles,
    title: 'Prebuilt personas',
    desc: 'Launch with ready-made sales, support and booking agents tuned for conversion.'
  },
  {
    icon: PhoneCall,
    title: 'Native telephony',
    desc: 'Bring your own provider or use built-in calling with global reach.'
  },
  {
    icon: Headphones,
    title: 'Human handoff',
    desc: 'Seamless escalation to your team with context and recordings.'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'See transcripts, outcomes and ROI in a clean dashboard.'
  },
  {
    icon: Cpu,
    title: 'LLM routing',
    desc: 'Deterministic flows + model switching to keep quality high and costs low.'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance',
    desc: 'PII redaction, data residency, and enterprise controls.'
  },
]

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Build, launch, grow
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-white/70 max-w-2xl"
        >
          Everything you need to sell AI voice agents — from demos to billing-ready plans.
        </motion.p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition group"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-white/10 flex items-center justify-center">
                <f.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
