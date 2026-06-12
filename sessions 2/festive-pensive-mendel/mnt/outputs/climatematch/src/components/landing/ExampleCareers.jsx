import { CAREERS } from '../../data/careers.js';

export default function ExampleCareers({ onStart }) {
  return (
    <section id="careers" className="py-24 bg-cream px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-leaf uppercase tracking-widest">Example Careers</span>
          <h2 className="text-3xl sm:text-4xl font-black text-forest mt-3 mb-4">
            The climate economy is bigger
            <br />
            than you think
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From finance to fashion, policy to data — here are just some of the roles waiting for people like you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CAREERS.map((c) => (
            <button
              key={c.id}
              onClick={onStart}
              className="bg-white rounded-2xl p-5 shadow-sm card-hover border border-gray-50 group text-left"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-xl mb-3 shadow-sm`}
              >
                {c.icon}
              </div>
              <div className="text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">
                {c.sector}
              </div>
              <h3 className="font-bold text-forest text-sm leading-snug mb-2">{c.title}</h3>
              <div className="text-xs text-gray-400 font-medium">{c.salary}</div>
              <div className="mt-3 text-xs text-leaf font-semibold group-hover:text-forest transition-colors">
                Find my fit →
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
