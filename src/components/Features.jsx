import { Sparkles, PhoneCall, Headphones, BarChart3 } from 'lucide-react'

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
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">Build, launch, grow</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">Everything you need to sell AI voice agents — from demos to billing-ready plans.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition bg-white">
              <f.icon className="w-6 h-6 text-purple-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
