/**
 * Assessment question configuration.
 * Each question maps to an answer key stored in the answers state object.
 */

export const SKILLS_LIST = [
  'Writing', 'Research', 'Data analysis', 'Project management',
  'Communications', 'Teaching/training', 'Design', 'Finance',
  'Policy', 'Engineering', 'Community building', 'Social media',
  'Operations', 'Sales', 'Product management', 'Software/tech',
  'Monitoring and evaluation',
];

export const INTERESTS_LIST = [
  'Renewable energy', 'Climate policy', 'Sustainable fashion', 'Circular economy',
  'Climate education', 'Green finance', 'Carbon markets', 'ESG',
  'Biodiversity', 'Waste management', 'Climate justice', 'Food systems',
  'Water', 'Sustainable cities',
];

export const WORKSTYLE_LIST = [
  'Working with people', 'Solving technical problems', 'Writing and storytelling',
  'Researching', 'Managing projects', 'Building businesses',
  'Analysing data', 'Teaching others', 'Designing campaigns', 'Influencing policy',
];

export const STEPS = [
  {
    key: 'role',
    type: 'single',
    label: 'Your Profile',
    question: 'What best describes you?',
    options: ['Student', 'Recent graduate', 'Career changer', 'Working professional', 'Entrepreneur', 'Freelancer', 'Other'],
  },
  {
    key: 'background',
    type: 'text',
    label: 'Background',
    question: 'What is your current field or background?',
    hint: 'E.g. "Marketing", "Engineering", "Teaching", "Finance"',
  },
  {
    key: 'skills',
    type: 'multi',
    label: 'Skills',
    question: 'What skills do you currently have?',
    hint: 'Select all that apply',
    options: SKILLS_LIST,
  },
  {
    key: 'interests',
    type: 'multi',
    label: 'Interests',
    question: 'What topics interest you most?',
    hint: 'Select all that apply',
    options: INTERESTS_LIST,
  },
  {
    key: 'workStyle',
    type: 'multi',
    label: 'Work Style',
    question: 'What kind of work do you enjoy?',
    hint: 'Select all that apply',
    options: WORKSTYLE_LIST,
  },
  {
    key: 'experience',
    type: 'single',
    label: 'Experience',
    question: 'How much climate experience do you currently have?',
    options: ['None yet', 'Beginner', 'Intermediate', 'Advanced'],
  },
  {
    key: 'goal',
    type: 'single',
    label: 'Goals',
    question: 'What is your biggest goal right now?',
    options: [
      'Find a climate job',
      'Transition into climate work',
      'Understand where I fit',
      'Build climate skills',
      'Start a climate business',
      'Improve my CV/profile',
    ],
  },
];
