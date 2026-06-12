export default function MatchCard({ match, rank }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${match.color} flex items-center justify-center text-2xl shadow-sm`}>
            {match.icon}
          </div>
          <div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Match #{rank + 1} · {match.sector}</div>
            <h3 className="text-lg font-black text-forest mt-1">{match.title}</h3>
            <p className="text-xs text-gray-400 mt-1">Typical range: {match.salary}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black text-leaf">{match.pct}%</div>
          <div className="text-xs text-gray-400 font-medium">match</div>
        </div>
      </div>

      <div className="mt-4 grid sm:grid-cols-2 gap-3">
        <div className="bg-green-50 border border-green-100 rounded-xl p-4">
          <div className="text-xs font-bold text-green-800 uppercase tracking-wide mb-2">Skills you already have</div>
          <div className="flex flex-wrap gap-2">
            {(match.matchedSkills.length ? match.matchedSkills : ['Transferable experience']).map(skill => (
              <span key={skill} className="text-xs bg-white text-green-800 border border-green-100 rounded-full px-3 py-1">{skill}</span>
            ))}
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-2">Skills to build</div>
          <div className="flex flex-wrap gap-2">
            {match.skillsToLearn.map(skill => (
              <span key={skill} className="text-xs bg-white text-amber-800 border border-amber-100 rounded-full px-3 py-1">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
