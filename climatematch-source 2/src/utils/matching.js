import { CAREERS } from '../data/careers.js'

const EXP_BONUS = { 'None yet': 0, Beginner: 3, Intermediate: 6, Advanced: 10 }

export function computeMatches(answers) {
  const skills    = answers.skills    || []
  const interests = answers.interests || []
  const workStyle = answers.workStyle || []
  const expBonus  = EXP_BONUS[answers.experience] ?? 0

  return CAREERS
    .map(career => {
      const sHits = skills.filter(s => career.skills.includes(s)).length
      const iHits = interests.filter(i => career.interests.includes(i)).length
      const wHits = workStyle.filter(w => career.workStyle.includes(w)).length

      const sScore = career.skills.length    > 0 ? (sHits / career.skills.length)    * 42 : 0
      const iScore = career.interests.length > 0 ? (iHits / career.interests.length) * 36 : 0
      const wScore = career.workStyle.length > 0 ? (wHits / career.workStyle.length) * 22 : 0

      const pct = Math.min(98, Math.max(42, Math.round(sScore + iScore + wScore + expBonus)))

      return {
        ...career,
        pct,
        matchedSkills: skills.filter(s => career.skills.includes(s)),
        skillsToLearn: career.skills.filter(s => !skills.includes(s)).slice(0, 4),
      }
    })
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 5)
}

export function buildHeadline(matches, answers) {
  const top = matches[0]
  if (!top) return 'Climate Career Professional | Sustainability | Impact'
  return top.getHeadline(answers.background || '')
}

export function buildCVSummary(matches, answers) {
  const top = matches[0]
  if (!top) return 'A professional transitioning into the climate sector, bringing transferable skills to drive sustainability and environmental impact.'
  return top.getCVSummary(answers.background || '', answers.skills || [])
}

export function buildDirection(matches, answers) {
  const top    = matches[0]
  const second = matches[1]
  const bg     = answers.background ? `Your background in ${answers.background}` : 'Your experience'
  const skills = (answers.skills || []).slice(0, 3).join(', ')
  return (
    `${bg} positions you strongly for a career in ${top ? top.title : 'climate'}, ` +
    `where your skills in ${skills || 'research, communication, and analysis'} translate directly into value. ` +
    (second ? `You also show strong alignment with ${second.title}. ` : '') +
    `With the right upskilling, you could be working in climate within 3–6 months.`
  )
}

export function buildSkillsGap(matches) {
  const needed = new Set()
  matches.slice(0, 3).forEach(m => m.skillsToLearn.forEach(s => needed.add(s)))
  return [...needed].slice(0, 5)
}
