const POINTS = [
  { icon: '🌱', title: "You don't need a climate degree", body: 'The climate economy needs communicators, analysts, engineers, educators, and builders. Your existing skills are already valuable.' },
  { icon: '🍏', title: 'Personalised to you', body: 'Our matching engine maps your unique background to climate roles where you'll genuinely thrive.' },
  { icon: '🚀', title: 'From discovery to action', body: 'Every match comes with a tailored action plan, skills roadmap, and resources to help you move fast.' },
  { icon: '🌍', title: 'Built for global talent', body: 'Whether you're in Lagos, London, or Lahore, ClimateMatch surfaces opportunities globally.' },
]

export default function WhySection() {
  return (
    <section id="why" className="py-24 bg-cream px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-leaf uppercase tracking-widest">Why ClimateMatch</span>
          <h2 className="text-3xl sm:text-4xl font-black text-forest mt-3 mb-4">You don&apos;t need to be a climate scientist<br />to work in climate</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">The green economy is the fastest-growing sector in the world. And it needs people like you.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POINTS.map(p => (
            <div key={p.title} className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-green-50">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-bold text-forest text-lg mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
