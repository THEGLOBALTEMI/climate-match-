import { useState } from 'react'

export default function Navbar({ onStart }) {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-black text-forest text-xl">Climate<span className="text-leaf">Match</span></span>
          <span className="ml-1 text-xs bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full">Beta</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#why"     className="hover:text-forest transition-colors">Why us</a>
          <a href="#how"     className="hover:text-forest transition-colors">How it works</a>
          <a href="#careers" className="hover:text-forest transition-colors">Careers</a>
        </div>
        <button onClick={onStart} className="hidden md:block bg-forest text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-pine transition-colors">
          Start My Match →
        </button>
        <button className="md:hidden p-2" onClick={() => setOpen(o => !o)}>
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 pt-2 border-t border-gray-100 flex flex-col gap-3">
          <a href="#why"     className="text-sm font-medium text-gray-700" onClick={() => setOpen(false)}>Why us</a>
          <a href="#how"     className="text-sm font-medium text-gray-700" onClick={() => setOpen(false)}>How it works</a>
          <a href="#careers" className="text-sm font-medium text-gray-700" onClick={() => setOpen(false)}>Careers</a>
          <button onClick={() => { setOpen(false); onStart() }} className="bg-forest text-white py-2.5 rounded-full font-semibold text-sm">Start My Match →</button>
        </div>
      )}
    </nav>
  )
}
