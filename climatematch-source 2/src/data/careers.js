const plan = {
  w1: 'Learn the fundamentals and map your transferable skills.',
  w2: 'Build one portfolio project that proves your interest.',
  w3: 'Update your CV, LinkedIn, and target 10 relevant roles.',
  w4: 'Reach out to 5 people in the sector and apply strategically.',
}

const makeCareer = (id, title, sector, icon, color, salary, skills, interests, workStyle) => ({
  id, title, sector, icon, color, salary, skills, interests, workStyle,
  weekPlan: plan,
  getHeadline: (background) => `${background ? background + ' | ' : ''}${title} in progress | Climate & sustainability impact`,
  getCVSummary: (background, userSkills) => `A ${background || 'professional'} with strengths in ${userSkills.slice(0, 3).join(', ') || 'communication, research, and execution'}, now positioning for ${title} roles in the climate economy.`,
})

export const CAREERS = [
  makeCareer('sustainability-comms', 'Sustainability Communications Manager', 'Communications', '📣', 'from-green-400 to-emerald-600', '£32k–£55k+', ['Writing','Communications','Social media','Community building','Project management'], ['Climate education','Climate justice','Circular economy','Sustainable fashion'], ['Writing and storytelling','Designing campaigns','Working with people']),
  makeCareer('esg-analyst', 'ESG Analyst', 'Business & Reporting', '📊', 'from-emerald-400 to-teal-600', '£35k–£65k+', ['Research','Data analysis','Finance','Monitoring and evaluation','Project management'], ['ESG','Green finance','Carbon markets'], ['Analysing data','Researching','Managing projects']),
  makeCareer('climate-policy', 'Climate Policy Advisor', 'Policy', '🏛️', 'from-lime-400 to-green-700', '£35k–£70k+', ['Policy','Research','Writing','Communications','Monitoring and evaluation'], ['Climate policy','Climate justice','Sustainable cities','Water'], ['Influencing policy','Researching','Writing and storytelling']),
  makeCareer('circular-economy', 'Circular Economy Specialist', 'Circular Economy', '♻️', 'from-green-300 to-lime-600', '£32k–£60k+', ['Operations','Project management','Research','Design','Product management'], ['Circular economy','Waste management','Sustainable fashion'], ['Managing projects','Building businesses','Solving technical problems']),
  makeCareer('renewable-energy', 'Renewable Energy Project Coordinator', 'Energy', '⚡', 'from-yellow-300 to-green-600', '£30k–£58k+', ['Project management','Operations','Engineering','Research','Communications'], ['Renewable energy','Sustainable cities','Climate policy'], ['Managing projects','Solving technical problems','Working with people']),
  makeCareer('carbon-analyst', 'Carbon Analyst', 'Carbon & Data', '🌫️', 'from-slate-300 to-emerald-600', '£35k–£70k+', ['Data analysis','Research','Monitoring and evaluation','Finance','Software/tech'], ['Carbon markets','ESG','Green finance'], ['Analysing data','Researching','Solving technical problems']),
  makeCareer('green-finance', 'Green Finance Associate', 'Finance', '💷', 'from-emerald-300 to-green-700', '£40k–£80k+', ['Finance','Data analysis','Research','Writing','Project management'], ['Green finance','ESG','Carbon markets','Renewable energy'], ['Analysing data','Researching','Influencing policy']),
  makeCareer('climate-educator', 'Climate Educator', 'Education', '🎓', 'from-teal-300 to-green-600', '£28k–£52k+', ['Teaching/training','Communications','Writing','Community building','Research'], ['Climate education','Climate justice','Food systems','Biodiversity'], ['Teaching others','Working with people','Writing and storytelling']),
  makeCareer('sustainable-fashion', 'Sustainable Fashion Specialist', 'Fashion', '👖', 'from-blue-300 to-green-600', '£28k–£55k+', ['Design','Operations','Communications','Project management','Sales'], ['Sustainable fashion','Circular economy','Waste management','Climate justice'], ['Building businesses','Designing campaigns','Managing projects']),
  makeCareer('environmental-data', 'Environmental Data Analyst', 'Data', '🛰️', 'from-cyan-300 to-emerald-700', '£35k–£75k+', ['Data analysis','Software/tech','Research','Monitoring and evaluation'], ['Biodiversity','Water','Sustainable cities','Carbon markets'], ['Analysing data','Solving technical problems','Researching']),
]
