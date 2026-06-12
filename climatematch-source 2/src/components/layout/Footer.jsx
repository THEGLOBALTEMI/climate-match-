export default function Footer() {
  return (
    <footer className="bg-forest text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">🌿</span>
              <span className="font-black text-xl">Climate<span className="text-mint">Match</span></span>
            </div>
            <p className="text-white/50 text-sm">Find your place in the climate economy.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <a href="#why"     className="hover:text-white transition-colors">About</a>
            <a href="#careers" className="hover:text-white transition-colors">Careers</a>
            <a href="#how"     className="hover:text-white transition-colors">How it works</a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>&copy; {new Date().getFullYear()} ClimateMatch. All rights reserved.</span>
          <span className="font-medium">climatematch.tech</span>
          <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full font-semibold">Currently in beta</span>
        </div>
      </div>
    </footer>
  )
}
