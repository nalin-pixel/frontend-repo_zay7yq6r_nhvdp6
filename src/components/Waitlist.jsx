import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [interest, setInterest] = useState('')
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, company, interest })
      })
      const data = await res.json()
      setStatus(data.status === 'ok' ? 'success' : 'queued')
    } catch (e) {
      setStatus('queued')
    }
  }

  return (
    <section id="waitlist" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="rounded-2xl border border-gray-200 p-8 md:p-10 bg-gradient-to-br from-purple-50 to-blue-50">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Join the waitlist</h3>
          <p className="mt-2 text-gray-600">Be first to sell AI voice agents. We’ll reach out with early access.</p>
          <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-4 gap-3">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Work email" className="md:col-span-2 rounded-md border-gray-300 focus:border-purple-500 focus:ring-purple-500" />
            <input value={company} onChange={(e)=>setCompany(e.target.value)} type="text" placeholder="Company (optional)" className="rounded-md border-gray-300 focus:border-purple-500 focus:ring-purple-500" />
            <input value={interest} onChange={(e)=>setInterest(e.target.value)} type="text" placeholder="What will you build?" className="rounded-md border-gray-300 focus:border-purple-500 focus:ring-purple-500" />
            <button className="md:col-span-4 md:justify-self-start inline-flex items-center justify-center rounded-md bg-black text-white px-5 py-2.5 font-medium hover:bg-black/90 transition">Join</button>
          </form>
          {status === 'loading' && <p className="mt-3 text-sm text-gray-600">Submitting…</p>}
          {status === 'success' && <p className="mt-3 text-sm text-green-700">You’re in! We’ll be in touch soon.</p>}
          {status === 'queued' && <p className="mt-3 text-sm text-yellow-700">Saved for now. We’ll sync when the database is live.</p>}
        </div>
      </div>
    </section>
  )
}
