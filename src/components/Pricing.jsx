import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: 29, badge: 'Indie', includes: ['1 agent', '100 minutes', 'Email support'] },
  { name: 'Growth', price: 79, badge: 'Popular', includes: ['3 agents', '500 minutes', 'Priority support'] },
  { name: 'Scale', price: 199, badge: 'Teams', includes: ['10 agents', '3000 minutes', 'SLA & SSO'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Simple pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-white/70 max-w-2xl"
        >
          Transparent plans that scale with you. Start free, upgrade when you grow.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:bg-white/10 transition"
            >
              <div className="absolute -top-3 right-4 text-[11px] uppercase tracking-wider rounded-full bg-white/10 border border-white/10 px-2 py-1 text-white/80">{t.badge}</div>
              <h3 className="text-lg font-semibold text-white">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">${t.price}</span>
                <span className="text-white/60">/mo</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {t.includes.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white text-black py-2.5 font-medium hover:bg-white/90 transition">Get started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
