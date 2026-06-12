/**
 * Climate career pathway definitions.
 * Each career includes matching weights, content, and action plans.
 * To add a new career, append an object following the same shape.
 */

export const CAREERS = [
  {
    id: 'comms',
    title: 'Sustainability Communications Manager',
    icon: '📣',
    sector: 'Communications',
    salary: '£35k–£65k',
    color: 'from-emerald-600 to-teal-700',
    tagline: 'Shape the narratives that drive climate action',
    description:
      'Craft campaigns, content, and strategies that help organisations communicate their climate commitments — and inspire action at scale.',
    // Matching weights
    skills:    ['Writing', 'Communications', 'Social media', 'Research', 'Project management'],
    interests: ['Climate policy', 'ESG', 'Climate justice', 'Climate education'],
    workStyle: ['Writing and storytelling', 'Designing campaigns', 'Working with people'],
    nextSteps: [
      "Build a portfolio of 3 climate writing samples",
      "Complete FutureLearn's Science Communication course (free)",
      "Volunteer for a climate NGO's communications team",
    ],
    weekPlan: {
      w1: 'Study 5 top climate communications campaigns (Patagonia, WWF, IKEA)',
      w2: 'Write 2 climate opinion pieces and publish on LinkedIn/Medium',
      w3: 'Apply to 3 comms roles at climate NGOs or sustainability consultancies',
      w4: 'Reframe your CV and LinkedIn around climate communications',
    },
    headline: (bg) =>
      `${bg ? bg + ' Professional → ' : ''}Climate Communications | Sustainability Storytelling | Driving Action Through Narrative`,
    cvSummary: (bg, skills) =>
      `A communications professional with expertise in ${skills.slice(0, 3).join(', ')}, transitioning into sustainability. Passionate about translating complex climate science into compelling narratives that inspire action. Currently building a focused portfolio in climate communications and stakeholder engagement.`,
  },
  {
    id: 'esg',
    title: 'ESG Analyst',
    icon: '📊',
    sector: 'Finance & ESG',
    salary: '£40k–£75k',
    color: 'from-blue-700 to-indigo-800',
    tagline: 'Make businesses accountable for their climate impact',
    description:
      'Assess, report, and improve corporate environmental, social, and governance performance — helping investors and companies align with a net-zero future.',
    skills:    ['Research', 'Data analysis', 'Finance', 'Writing', 'Policy'],
    interests: ['ESG', 'Green finance', 'Carbon markets', 'Climate policy'],
    workStyle: ['Analysing data', 'Researching', 'Influencing policy'],
    nextSteps: [
      'Study the CFA ESG Certificate (free Level 1 materials)',
      'Read one corporate ESG report using the GRI Standards checklist',
      'Follow ESG Today and Bloomberg Green daily',
    ],
    weekPlan: {
      w1: 'Read TCFD recommendations + study one corporate sustainability report',
      w2: "Complete CFA Institute's free ESG Certificate study materials",
      w3: 'Apply to ESG analyst graduate programmes at banks and consultancies',
      w4: 'Build an ESG-focused LinkedIn profile highlighting analytical skills',
    },
    headline: (bg) =>
      `${bg ? bg + ' Background | ' : ''}ESG & Sustainable Finance | Climate Risk Analysis | Net-Zero Transition`,
    cvSummary: (bg, skills) =>
      `A detail-oriented analyst with a background in ${bg || 'finance and research'}, pivoting into ESG and sustainable investment. Strong foundation in ${skills.slice(0, 2).join(' and ')}, with growing expertise in ESG frameworks, climate risk, and responsible investment principles.`,
  },
  {
    id: 'policy',
    title: 'Climate Policy Advisor',
    icon: '📜',
    sector: 'Policy & Government',
    salary: '£32k–£70k',
    color: 'from-purple-700 to-violet-800',
    tagline: 'Rewrite the rules of the global economy',
    description:
      'Research, design, and advocate for the climate laws and frameworks that translate ambition into real-world emissions reductions.',
    skills:    ['Research', 'Writing', 'Policy', 'Communications', 'Project management'],
    interests: ['Climate policy', 'Climate justice', 'Biodiversity', 'Water', 'Sustainable cities'],
    workStyle: ['Influencing policy', 'Researching', 'Writing and storytelling'],
    nextSteps: [
      'Read one IPCC Summary for Policymakers',
      'Write a 1-page policy brief on a local climate issue',
      'Apply to a think tank internship (E3G, Carbon Brief, ODI)',
    ],
    weekPlan: {
      w1: 'Read an IPCC report chapter + follow Carbon Brief and Climate Home News',
      w2: 'Write a mock policy brief on a climate issue in your country',
      w3: 'Apply to a policy fellowship or think-tank internship',
      w4: 'Network with policy professionals on LinkedIn and attend one webinar',
    },
    headline: (bg) =>
      `${bg ? bg + ' → ' : ''}Climate Policy | Evidence-Based Advocacy | Systems Change`,
    cvSummary: (bg, skills) =>
      `A research-oriented professional with a background in ${bg || 'policy and governance'}, committed to driving evidence-based climate action. Skilled in ${skills.slice(0, 3).join(', ')} with a growing specialisation in climate policy analysis, stakeholder engagement, and regulatory frameworks.`,
  },
  {
    id: 'circular',
    title: 'Circular Economy Specialist',
    icon: '♻️',
    sector: 'Sustainability',
    salary: '£35k–£60k',
    color: 'from-green-600 to-emerald-700',
    tagline: 'Redesign the systems that create waste',
    description:
      'Help businesses, governments, and communities transition to circular models — eliminating waste, regenerating nature, and keeping resources in use.',
    skills:    ['Project management', 'Research', 'Operations', 'Design', 'Communications'],
    interests: ['Circular economy', 'Sustainable fashion', 'Waste management', 'Food systems'],
    workStyle: ['Managing projects', 'Solving technical problems', 'Building businesses'],
    nextSteps: [
      'Complete the Ellen MacArthur Foundation free circular economy course',
      'Map one product as a linear vs. circular system',
      'Join the Circular Economy Club (free global network)',
    ],
    weekPlan: {
      w1: "Complete Ellen MacArthur Foundation's free Circular Economy introduction",
      w2: "Analyse one company's circular strategy and write a case study",
      w3: 'Apply to sustainability roles at companies with circular commitments',
      w4: 'Join circular economy communities and start sharing insights publicly',
    },
    headline: (bg) =>
      `${bg ? bg + ' → ' : ''}Circular Economy | Sustainable Systems Design | Waste Reduction`,
    cvSummary: (bg, skills) =>
      `A systems-thinking professional transitioning from ${bg || 'operations and design'} into the circular economy space. Bringing skills in ${skills.slice(0, 3).join(', ')} to help organisations design out waste and build regenerative business models.`,
  },
  {
    id: 'renewable',
    title: 'Renewable Energy Project Coordinator',
    icon: '⚡',
    sector: 'Energy',
    salary: '£30k–£55k',
    color: 'from-yellow-600 to-orange-700',
    tagline: 'Build the clean energy infrastructure of the future',
    description:
      'Coordinate the development, financing, and delivery of solar, wind, and storage projects that are replacing fossil fuels worldwide.',
    skills:    ['Project management', 'Engineering', 'Operations', 'Finance', 'Communications'],
    interests: ['Renewable energy', 'Sustainable cities', 'Climate policy'],
    workStyle: ['Managing projects', 'Solving technical problems', 'Working with people'],
    nextSteps: [
      "Read IRENA's free World Energy Transitions Outlook",
      'Learn the basics of solar project finance (CFI free course)',
      'Apply to project coordinator roles at renewable energy developers',
    ],
    weekPlan: {
      w1: "Read IRENA's World Energy Transitions Outlook + study project stages",
      w2: 'Complete a free intro to renewable energy project finance course',
      w3: 'Apply to project coordinator or analyst roles at energy developers',
      w4: 'Update profile with energy-focused skills and connect with the sector',
    },
    headline: (bg) =>
      `${bg ? bg + ' | ' : ''}Renewable Energy Project Coordination | Clean Infrastructure | Energy Transition`,
    cvSummary: (bg, skills) =>
      `An organised, delivery-focused professional with a background in ${bg || 'project management and operations'}, entering the renewable energy sector. Experienced in ${skills.slice(0, 3).join(', ')} with a passion for coordinating clean energy projects from development to operation.`,
  },
  {
    id: 'carbon',
    title: 'Carbon Analyst',
    icon: '📈',
    sector: 'Carbon Markets',
    salary: '£38k–£72k',
    color: 'from-slate-700 to-gray-800',
    tagline: 'Price carbon and make pollution pay',
    description:
      'Work at the intersection of finance, policy, and environment — analysing, trading, and developing the carbon instruments that accelerate decarbonisation.',
    skills:    ['Data analysis', 'Research', 'Finance', 'Policy', 'Writing'],
    interests: ['Carbon markets', 'Green finance', 'ESG', 'Climate policy'],
    workStyle: ['Analysing data', 'Researching', 'Solving technical problems'],
    nextSteps: [
      "Read IETA's free Beginner's Guide to Carbon Markets",
      'Study the Gold Standard and Verra VCS carbon credit standards',
      'Follow Carbon Pulse for market news',
    ],
    weekPlan: {
      w1: "Read IETA's Beginner's Guide and study voluntary vs. compliance markets",
      w2: 'Analyse a public carbon project design document on the Verra registry',
      w3: 'Apply to analyst roles at carbon project developers or consultancies',
      w4: 'Build your carbon markets knowledge network on LinkedIn',
    },
    headline: (bg) =>
      `${bg ? bg + ' | ' : ''}Carbon Markets Analyst | Climate Finance | Voluntary Carbon & Net-Zero`,
    cvSummary: (bg, skills) =>
      `An analytically sharp professional with expertise in ${skills.slice(0, 3).join(', ')}, specialising in carbon markets and climate finance. Combining a ${bg || 'research and finance'} background with deep interest in carbon accounting, MRV, and net-zero investment mechanisms.`,
  },
  {
    id: 'greenfinance',
    title: 'Green Finance Associate',
    icon: '💚',
    sector: 'Finance',
    salary: '£40k–£80k',
    color: 'from-teal-700 to-cyan-800',
    tagline: 'Direct the capital that funds the net-zero transition',
    description:
      'Structure green bonds, assess climate risk in investment portfolios, and help build the financial architecture needed for a sustainable economy.',
    skills:    ['Finance', 'Data analysis', 'Research', 'Writing', 'Project management'],
    interests: ['Green finance', 'ESG', 'Carbon markets', 'Sustainable cities'],
    workStyle: ['Analysing data', 'Managing projects', 'Researching'],
    nextSteps: [
      'Study the CFA ESG Certificate',
      'Read the TCFD recommendations (free)',
      'Apply to sustainable finance graduate programmes',
    ],
    weekPlan: {
      w1: 'Read TCFD recommendations and understand climate risk vs. transition risk',
      w2: 'Build a basic green project financial model using a free template',
      w3: 'Apply to sustainable finance roles at banks, DFIs, or asset managers',
      w4: 'Highlight finance + sustainability intersection prominently in your profile',
    },
    headline: (bg) =>
      `${bg ? bg + ' → ' : ''}Green Finance | Sustainable Investment | Climate Risk & Net-Zero Capital`,
    cvSummary: (bg, skills) =>
      `A finance professional with a background in ${bg || 'investment and analysis'}, pivoting into sustainable finance. Strong skills in ${skills.slice(0, 3).join(', ')}, with growing expertise in ESG analysis, green bond structuring, and climate risk assessment.`,
  },
  {
    id: 'educator',
    title: 'Climate Educator',
    icon: '🎓',
    sector: 'Education',
    salary: '£28k–£50k',
    color: 'from-rose-600 to-pink-700',
    tagline: 'Build the climate-literate generation',
    description:
      'Design and deliver the climate education that schools, organisations, and communities urgently need — across formal and informal settings.',
    skills:    ['Teaching/training', 'Communications', 'Writing', 'Research', 'Community building'],
    interests: ['Climate education', 'Climate justice', 'Biodiversity', 'Food systems'],
    workStyle: ['Teaching others', 'Working with people', 'Writing and storytelling'],
    nextSteps: [
      'Design a 2-hour climate workshop for a specific audience',
      'Reach out to 3 local schools or organisations to offer a free session',
      'Complete a facilitation skills course (INTRAC, free resources)',
    ],
    weekPlan: {
      w1: 'Map the climate education landscape in your area and identify gaps',
      w2: 'Design and pilot a climate workshop — document the outcome',
      w3: 'Apply to climate education roles at NGOs, schools, or corporates',
      w4: 'Build a portfolio of facilitated sessions and share impact publicly',
    },
    headline: (bg) =>
      `${bg ? bg + ' → ' : ''}Climate Educator | Capacity Building | Inspiring the Next Generation of Climate Leaders`,
    cvSummary: (bg, skills) =>
      `A passionate educator with a background in ${bg || 'teaching and training'}, dedicated to building climate literacy across communities. Skilled in ${skills.slice(0, 3).join(', ')}, with experience designing engaging learning experiences that drive real behaviour change.`,
  },
  {
    id: 'fashion',
    title: 'Sustainable Fashion Specialist',
    icon: '👗',
    sector: 'Fashion & Retail',
    salary: '£28k–£55k',
    color: 'from-fuchsia-600 to-purple-700',
    tagline: 'Transform how the world makes and wears clothes',
    description:
      "Drive sustainability strategy, supply chain reform, and circular design within fashion — one of the world's most polluting sectors.",
    skills:    ['Design', 'Communications', 'Product management', 'Research', 'Project management'],
    interests: ['Sustainable fashion', 'Circular economy', 'Waste management', 'Climate justice'],
    workStyle: ['Designing campaigns', 'Working with people', 'Building businesses'],
    nextSteps: [
      "Read the Ellen MacArthur Foundation's Fashion and the Circular Economy report",
      "Map one fashion brand's sustainability commitments vs. performance",
      'Apply to sustainability roles at fashion brands or consultancies',
    ],
    weekPlan: {
      w1: 'Research sustainable fashion leaders (Patagonia, Eileen Fisher, Stella McCartney)',
      w2: 'Complete a sustainability in fashion course (Coursera, FutureLearn)',
      w3: 'Apply to sustainability coordinator roles at fashion or retail brands',
      w4: 'Build a fashion sustainability portfolio with case studies',
    },
    headline: (bg) =>
      `${bg ? bg + ' | ' : ''}Sustainable Fashion | Circular Design | Supply Chain Sustainability`,
    cvSummary: (bg, skills) =>
      `A creative professional with a background in ${bg || 'fashion and design'}, committed to transforming the industry's impact on people and planet. Bringing expertise in ${skills.slice(0, 3).join(', ')} to drive circular fashion strategy, supply chain transparency, and sustainable product development.`,
  },
  {
    id: 'data',
    title: 'Environmental Data Analyst',
    icon: '🌍',
    sector: 'Data & Technology',
    salary: '£35k–£65k',
    color: 'from-cyan-700 to-blue-800',
    tagline: 'Map and model the climate crisis with data',
    description:
      'Use data science, GIS, and visualisation to understand climate risks, track environmental change, and power evidence-based decision-making.',
    skills:    ['Data analysis', 'Software/tech', 'Research', 'Monitoring and evaluation', 'Writing'],
    interests: ['Biodiversity', 'Water', 'Sustainable cities', 'Climate policy', 'Food systems'],
    workStyle: ['Analysing data', 'Solving technical problems', 'Researching'],
    nextSteps: [
      'Download QGIS (free) and complete the first 3 tutorials',
      'Access the Copernicus Climate Data Store (free datasets)',
      'Build one environmental data visualisation and share it',
    ],
    weekPlan: {
      w1: 'Complete QGIS basics + access and explore one climate dataset',
      w2: 'Build a simple environmental data visualisation and post it publicly',
      w3: 'Apply to data analyst roles at environmental consultancies or NGOs',
      w4: 'Create a data portfolio on GitHub and promote on LinkedIn',
    },
    headline: (bg) =>
      `${bg ? bg + ' → ' : ''}Environmental Data Analyst | GIS & Climate Risk | Turning Data Into Climate Action`,
    cvSummary: (bg, skills) =>
      `A data-driven professional with expertise in ${skills.slice(0, 3).join(', ')}, applying quantitative skills to environmental and climate challenges. Combines a ${bg || 'technical and analytical'} background with a growing portfolio of climate data projects, geospatial analysis, and evidence synthesis.`,
  },
];
