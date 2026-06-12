import { useMemo }  from 'react'
import { computeMatches, buildHeadline, buildCVSummary, buildDirection, buildSkillsGap } from '../../utils/matching.js'
import MatchCard   from './MatchCard.jsx'
import Footer      from '../layout/Footer.jsx'

export default function ResultsPage({ answers, user, onRestart }) {
  const matches   = useMemo(() => computeMatches(answers),              [answers])
  const skillsGap = useMemo(() => buildSkillsGap(matches),             [matches])
  const headline  = useMemo(() => buildHeadline(matches, answers),     [matches, answers])
  const cvSummary = useMemo(() => buildCVSummary(matches, answers),    [matches, answers])
  const direction = useMemo(() => buildDirection(matches, answers),    [matches, answers])
  const name = user?.name

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="gradient-hero py-12 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-4">🎉</div>
          <h1 className="text-2xl sm:text-4xl font-black text-white mb-3">
            {name ? `${name}, here are your` : 'Here are your'} climate career matches
          </h1>
          <p className="text-white/70 text-base sm:text-lg">Based on your skills, experience, and interests.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
          <div className="text-xs font-bold text-leaf uppercase tracking-widest mb-3">Your Climate Career Direction</div>
          <p className="text-gray-700 leading-relaxed">{direction}</p>
        </div>

        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Your Top Matches</div>
        <div className="flex flex-col gap-4 mb-8">
          {matches.map((m, i) => <MatchCard key={m.id} match={m} rank={i} />)}
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
          <div className="text-xs font-bold text-leaf uppercase tracking-widest mb-3">Your Skills Gap</div>
          <p className="text-sm text-gray-500 mb-4">Build these skills to unlock your top matches:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {skillsGap.map((s, i) => (
              <div key={s} className="flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                <span className="w-6 h-6 bg-amber-200 text-amber-800 rounded-full text-xs font-black flex items-center justify-center">{i + 1}</span>
                <span className="font-medium text-gray-700 text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
          <div className="text-xs font-bold text-leaf uppercase tracking-widest mb-3">Suggested LinkedIn Headline</div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 font-medium text-blue-900 text-sm leading-relaxed">💼 {headline}</div>
          <p className="text-xs text-gray-400 mt-2">Copy this to your LinkedIn profile to attract climate recruiters.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="text-xs font-bold text-leaf uppercase tracking-widest mb-3">Suggested CV Summary</div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-gray-700 text-sm leading-relaxed italic">&ldquo;{cvSummary}&rdquo;</div>
          <p className="text-xs text-gray-400 mt-2">Adapt this for your cover letters and professional bio.</p>
        </div>

        {matches[0] && (
          <div className="gradient-card rounded-2xl p-6 mb-8 text-white">
            <div className="text-xs font-bold text-mint uppercase tracking-widest mb-4">Your 30-Day Action Plan — {matches[0].title}</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Object.entries(matches[0].weekPlan).map(([wk, action]) => (
                <div key={wk} className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="text-xs font-black text-amber-300 uppercase mb-2">{wk.replace('w1','Week 1').replace('w2','Week 2').replace('w3','Week 3').replace('w4','Week 4')}</div>
                  <div className="text-xs text-white/80 leading-relaxed">{action}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-8 text-center">
          <div className="text-2xl mb-3">🚀</div>
          <h3 className="font-black text-forest text-xl mb-2">Want personalised 1:1 climate career guidance?</h3>
          <p className="text-gray-500 text-sm mb-5">Join the waitlist for ClimateMatch Pro — personalised guidance, live coaching, and application support.</p>
          <button className="bg-forest text-white font-bold px-8 py-3 rounded-full hover:bg-pine transition-all shadow-md">Join the Waitlist →</button>
        </div>

        <div className="text-center">
          <button onClick={onRestart} className="text-sm text-gray-400 hover:text-gray-600 underline underline-offset-2">↺ Start over with different answers</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
