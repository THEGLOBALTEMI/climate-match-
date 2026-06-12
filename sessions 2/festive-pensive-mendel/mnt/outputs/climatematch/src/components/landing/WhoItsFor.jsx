const AUDIENCES = [
  { icon: '👩‍💼', title: 'Career changers',      body: "You have skills from another industry and want to redirect your expertise toward climate." },
  { icon: '🎓', title: 'Recent graduates',     body: "You've just finished studying and want your career to make a real difference from day one." },
  { icon: '💡', title: 'Working professionals', body: "You're mid-career and looking to transition into a role with more purpose and impact." },
  { icon: '🌍', title: 'Global talent',         body: "You're based in Africa, Asia, or anywhere else — and want to enter the global climate workforce." },
  { icon: '🚀', title: 'Entrepreneurs',         body: "You want to build a climate venture and need to understand where your skills fit in the ecosystem." },
];

export default function WhoItsFor({ onStart }) {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-leaf uppercase tracking-widest">Who it&apos;s for</span>
          <h2 className="text-3xl sm:text-4xl font-black text-forest mt-3 mb-4">
            ClimateMatch is for anyone
            <br />
            ready to make the move
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCES.map((a) => (
            <div key={a.title} className="flex gap-4 p-6 bg-cream rounded-2xl card-hover">
              <div className="text-3xl flex-shrink-0">{a.icon}</div>
              <div>
                <h3 className="font-bold text-forest mb-1">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onStart}
            className="bg-forest text-white font-bold px-8 py-4 rounded-full hover:bg-pine transition-all shadow-lg shadow-green-900/20 hover:-translate-y-0.5"
          >
            Find My Climate Path →
          </button>
        </div>
      </div>
    </section>
  );
}
