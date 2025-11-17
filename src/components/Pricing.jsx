const tiers = [
  { name: 'Starter', price: 29, includes: ['1 agent', '100 minutes', 'Email support'] },
  { name: 'Growth', price: 79, includes: ['3 agents', '500 minutes', 'Priority support'] },
  { name: 'Scale', price: 199, includes: ['10 agents', '3000 minutes', 'SLA & SSO'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">Simple pricing</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">Transparent plans that scale with you. Start free, upgrade when you grow.</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">${t.price}</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                {t.includes.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-black text-white py-2.5 font-medium hover:bg-black/90 transition">Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
