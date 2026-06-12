/**
 * Career matching engine.
 *
 * This file contains all scoring and content-generation logic.
 * To connect an AI API in future, replace computeMatches() with
 * an async API call while keeping the same return shape.
 */

import { CAREERS } from '../data/careers.js';

const EXPERIENCE_BONUS = {
  'None yet':    0,
  Beginner:      3,
  Intermediate:  6,
  Advanced:      10,
};

/**
 * Score all careers against the user's answers and return top 5 sorted by match %.
 * @param {Object} answers - Collected from AssessmentPage state
 * @returns {Array} Ranked career objects with pct, matchedSkills, skillsToLearn
 */
export function computeMatches(answers) {
  const skills    = answers.skills    || [];
  const interests = answers.interests || [];
  const workStyle = answers.workStyle || [];
  const expBonus  = EXPERIENCE_BONUS[answers.experience] ?? 0;

  return CAREERS
    .map((career) => {
      const skillHits    = skills.filter((s) => career.skills.includes(s)).length;
      const interestHits = interests.filter((i) => career.interests.includes(i)).length;
      const workHits     = workStyle.filter((w) => career.workStyle.includes(w)).length;

      const skillPct    = career.skills.length    > 0 ? (skillHits    / career.skills.length)    * 42 : 0;
      const interestPct = career.interests.length > 0 ? (interestHits / career.interests.length) * 36 : 0;
      const workPct     = career.workStyle.length > 0 ? (workHits     / career.workStyle.length) * 22 : 0;

      const raw = Math.round(skillPct + interestPct + workPct + expBonus);
      const pct = Math.min(98, Math.max(42, raw));

      return {
        ...career,
        pct,
        matchedSkills:    skills.filter((s) => career.skills.includes(s)),
        skillsToLearn:    career.skills.filter((s) => !skills.includes(s)).slice(0, 4),
        matchedInterests: interests.filter((i) => career.interests.includes(i)),
      };
    })
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 5);
}

/**
 * Generate a personalised LinkedIn headline based on top match.
 */
export function buildLinkedInHeadline(matches, answers) {
  const top = matches[0];
  if (!top) return 'Climate Career Professional | Sustainability | Impact';
  return top.headline(answers.background || '');
}

/**
 * Generate a personalised CV summary paragraph.
 */
export function buildCVSummary(matches, answers) {
  const top = matches[0];
  if (!top) {
    return 'A professional transitioning into the climate sector, bringing transferable skills to drive sustainability and environmental impact.';
  }
  return top.cvSummary(answers.background || '', answers.skills || []);
}

/**
 * Generate a paragraph describing the user's overall climate direction.
 */
export function buildClimateDirection(matches, answers) {
  const top    = matches[0];
  const second = matches[1];
  const bg     = answers.background ? `Your background in ${answers.background}` : 'Your experience';
  const skills = (answers.skills || []).slice(0, 3).join(', ');

  return (
    `${bg} positions you strongly for a career in ${top ? top.title : 'climate'}, ` +
    `where your skills in ${skills || 'research, communication, and analysis'} translate directly into value. ` +
    (second
      ? `You also show strong alignment with ${second.title}, giving you two complementary directions to explore. `
      : '') +
    `With the right upskilling and a targeted application strategy, you could be working in climate within 3–6 months.`
  );
}

/**
 * Aggregate the most important skills to build across top 3 matches.
 */
export function buildSkillsGap(matches) {
  const needed = new Set();
  matches.slice(0, 3).forEach((m) => {
    m.skillsToLearn.forEach((s) => needed.add(s));
  });
  return [...needed].slice(0, 5);
}
