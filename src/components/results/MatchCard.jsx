import { useState } from 'react'

const RANKS = [
  { badge: 'bg-amber-400 text-amber-900',   label: '🥇 Best Match' },
  { badge: 'bg-gray-200 text-gray-700',     label: '🥈 Strong Fit' },
  { badge: 'bg-orange-200 text-orange-800', label: '🥉 Good Fit' },
]

export default function MatchCard({ match, rank }) {
  const [open, setOpen] = useState(rank === 0)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover">
      <div className="p-5 sm:p-6 cursor-pointer" onClick={() => setOpen(o => !o)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${match.color} flex items-center justify-center text-xl shadow-sm flex-shrink-0`}>{match.icon}</div>
            <div>
              {rank < 3 && <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-1 ${RANKS[rank].badge}`}>{RANKS[rank].label}</span>}
              <h3 className="font-black text-forest text-base sm:text-lg leading-tight">{match.title}</h3>
              <div className="text-xs text-gray-400 font-medium mt-0.5">{match.sector} · {match.salary}</div>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-3xl font-black text-forest">{match.pct}%</div>
            <div className="text-xs text-gray-400">match</div>
          </div>
        </div>
        <div className="mt-4 bg-gray-100 rounded-full h-2 overflow-hidden">
          <div className={`h-full rounded-full bg-gradient-to-r ${match.color} transition-all duration-1000`} style={{ width: `${match.pct}%` }} />
        </div>
        <p className="text-sm text-gray-500 mt-4 leading-relaxed">{match.description}</p>
        {match.matchedSkills.length > 0 && (
          <div className="mt-4">
            <div className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Skills you already have</div>
            <div className="flex flex-wrap gap-1.5">
              {match.matchedSkills.map(s => <span key={s} className="text-xs bg-green-50 text-leaf border border-green-100 px-2.5 py-1 rounded-full font-medium">✓ {s}</span>)}
            </div>
          </div>
        )}
      </div>

      {open && (
        <div className="border-t border-gray-100 p-5 sm:p-6 bg-cream/60">
          {match.skillsToLearn.length > 0 && (
            <div className="mb-5">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Skills to build</div>
              <div className="flex flex-wrap gap-1.5">
                {match.skillsToLearn.map(s => <span key={s} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full font-medium">+ {s}</span>)}
              </div>
            </div>
          )}
          <div className="mb-5">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Suggested next steps</div>
            <div className="flex flex-col gap-2">
              {match.nextSteps.map((s, i) => (
                <div key={i} className="flex gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 bg-leaf/20 text-leaf rounded-full text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">30-day action plan</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.entries(match.weekPlan).map(([wk, action]) => (
                <div key={wk} className="bg-white rounded-xl p-3 border border-gray-100">
                  <div className="text-xs font-black text-forest uppercase mb-1">{wk.replace('w1','Week 1').replace('w2','Week 2').replace('w3','Week 3').replace('w4','Week 4')}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{action}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="px-5 sm:px-6 pb-4">
        <button onClick={() => setOpen(o => !o)} className="text-xs font-semibold text-leaf hover:text-forest transition-colors">
          {open ? '▲ Less detail' : '▼ See full action plan'}
        </button>
      </div>
    </div>
  )
}
