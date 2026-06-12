const T = [
  { name: 'Amara O.', role: 'Marketing Manager → Sustainability Comms', quote: 'ClimateMatch showed me that my communications skills were exactly what the climate sector needed. Within 6 months I had a new job.', avatar: 'AO' },
  { name: 'James T.', role: 'Finance Analyst → ESG Specialist',          quote: "I always thought I needed a science background to work in climate. ClimateMatch proved me wrong and gave me a clear path.", avatar: 'JT' },
  { name: 'Priya K.', role: 'Teacher → Climate Educator',               quote: 'The action plan was genuinely useful. Week by week, I went from curious to employed. ClimateMatch is the tool I wish I had years ago.', avatar: 'PK' },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-forest px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-mint uppercase tracking-widest">What people say</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">Real people, real climate careers</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {T.map(p => (
            <div key={p.name} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
              <p className="text-white/80 text-sm leading-relaxed mb-6">&ldquo;{p.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-leaf flex items-center justify-center text-white font-bold text-sm">{p.avatar}</div>
                <div>
                  <div className="font-bold text-white text-sm">{p.name}</div>
                  <div className="text-white/50 text-xs">{p.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-white/30 text-xs mt-6">* Testimonials are illustrative placeholders for beta launch</p>
      </div>
    </section>
  )
}
