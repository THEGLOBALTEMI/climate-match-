export default function Hero({ onStart }) {
  return (
    <section className="gradient-hero min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 20% 30%, #52b788 0%, transparent 50%), radial-gradient(circle at 80% 70%, #a7f3d0 0%, transparent 50%)'}} />
      <div className="max-w-5xl mx-auto text-center relative z-10 py-20">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Now in beta &middot; 100M+ green jobs projected by 2030
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
          The world needs <span className="text-amber-300">climate talent.</span><br />
          Let&apos;s find where you belong.
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          ClimateMatch helps you discover climate careers that match your skills, experience, and interests &mdash; even if you don&apos;t have a climate background yet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onStart} className="bg-amber-400 hover:bg-amber-300 text-forest font-bold px-8 py-4 rounded-full text-base shadow-lg transition-all hover:-translate-y-0.5">
            Start My Climate Match →
          </button>
          <a href="#careers" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base transition-all">
            Explore Climate Careers
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-sm mx-auto text-center">
          {[['10+','Career pathways'],['5 min','To your results'],['Free','Always']].map(([n,l]) => (
            <div key={l}>
              <div className="text-2xl font-black text-amber-300">{n}</div>
              <div className="text-xs text-white/60 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
