import { useState } from 'react';

export default function Navbar({ onStart }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="font-black text-forest text-xl tracking-tight">
              Climate<span className="text-leaf">Match</span>
            </span>
            <span className="ml-2 text-xs bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full">
              Beta
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#why"     className="hover:text-forest transition-colors">Why ClimateMatch</a>
            <a href="#how"     className="hover:text-forest transition-colors">How it works</a>
            <a href="#careers" className="hover:text-forest transition-colors">Careers</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <button
              onClick={onStart}
              className="bg-forest text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-pine transition-colors shadow-sm"
            >
              Start My Match →
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-4 text-sm">
            <a href="#why"     className="text-gray-700 font-medium" onClick={() => setOpen(false)}>Why ClimateMatch</a>
            <a href="#how"     className="text-gray-700 font-medium" onClick={() => setOpen(false)}>How it works</a>
            <a href="#careers" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>Careers</a>
            <button
              onClick={() => { setOpen(false); onStart(); }}
              className="bg-forest text-white px-5 py-2.5 rounded-full font-semibold w-full"
            >
              Start My Match →
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
