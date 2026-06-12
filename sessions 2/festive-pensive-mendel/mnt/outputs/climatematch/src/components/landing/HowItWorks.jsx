const STEPS = [
  {
    n: '01',
    icon: '📋',
    title: 'Tell us about you',
    body: 'A quick 7-question assessment covering your background, skills, interests, and goals. Takes 5 minutes.',
  },
  {
    n: '02',
    icon: '🔍',
    title: 'We match you instantly',
    body: 'Our engine maps your profile to 10+ climate career pathways and surfaces your top matches with detailed scoring.',
  },
  {
    n: '03',
    icon: '🎯',
    title: 'Get your action plan',
    body: 'Every result includes a personalised roadmap, skills gap analysis, LinkedIn headline, and 30-day plan.',
  },
];

export default function HowItWorks({ onStart }) {
  return (
    <section id="how" className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-leaf uppercase tracking-widest">How it works</span>
          <h2 className="text-3xl sm:text-4xl font-black text-forest mt-3 mb-4">
            From your skills to your climate career
            <br />
            in three steps
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-12">
          {STEPS.map((s) => (
            <div key={s.n} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cream rounded-2xl text-3xl mb-4 shadow-sm">
                {s.icon}
              </div>
              <div className="text-xs font-black text-leaf mb-2 uppercase tracking-widest">{s.n}</div>
              <h3 className="font-bold text-forest text-xl mb-2">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onStart}
            className="bg-forest hover:bg-pine text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-lg shadow-green-900/20 hover:-translate-y-0.5"
          >
            Start My Climate Match →
          </button>
        </div>
      </div>
    </section>
  );
}
