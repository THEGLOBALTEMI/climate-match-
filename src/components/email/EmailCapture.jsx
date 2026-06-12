import { useState } from 'react'

export default function EmailCapture({ onContinue }) {
  const [email, setEmail] = useState('')
  const [name,  setName]  = useState('')
  const [err,   setErr]   = useState('')

  const submit = () => {
    if (!email || !email.includes('@')) { setErr('Please enter a valid email address.'); return }
    onContinue({ email, name })
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 pt-16">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-sm p-8 border border-gray-50 text-center">
        <div className="text-5xl mb-4">🎯</div>
        <h2 className="text-2xl font-black text-forest mb-2">Your results are ready!</h2>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">Enter your email to unlock your personalised career matches, action plan, and resources.</p>
        <div className="flex flex-col gap-3 text-left mb-4">
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">First name (optional)</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your first name" className="w-full border-2 border-gray-200 focus:border-leaf rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-leaf/20" />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">Email address *</label>
            <input type="email" value={email} onChange={e => { setEmail(e.target.value); setErr('') }} onKeyDown={e => e.key === 'Enter' && submit()} placeholder="you@email.com" className="w-full border-2 border-gray-200 focus:border-leaf rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-leaf/20" />
          </div>
        </div>
        {err && <p className="text-red-500 text-xs mb-3">{err}</p>}
        <button onClick={submit} className="w-full bg-forest text-white font-bold py-4 rounded-full hover:bg-pine transition-all shadow-md hover:-translate-y-0.5">Unlock My Results →</button>
        <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe any time.</p>
      </div>
    </div>
  )
}
