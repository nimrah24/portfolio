/**
 * All portfolio content lives here so it can be updated without touching components.
 * Fill in any `TODO` placeholders (e.g. project repository links) when available.
 */

export const profile = {
  fullName: 'S. Nimrah Shifa',
  name: 'Nimrah Shifa',
  tagline: ['AI/ML Student', 'Software Developer', 'Problem Solver'],
  intro:
    "I'm passionate about building intelligent applications and practical software solutions using AI, machine learning, and modern development technologies.",
  degree: 'B.E. Artificial Intelligence and Machine Learning',
  college: 'St Joseph Engineering College',
  location: 'Mangaluru, Karnataka',
  year: 'Final Year',
  cgpa: 9.08,
  email: 'nimrashifa407@gmail.com',
  phone: '+91-7259138277',
  phoneHref: 'tel:+917259138277',
  linkedin: 'https://linkedin.com/in/s-nimrah-shifa-26b8ba380',
  github: 'https://github.com/nimrah24',
  /** Replace public/resume.pdf with the real resume. */
  resumeFile: 'resume.pdf',
  resumeDownloadName: 'S_Nimrah_Shifa_Resume.pdf',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const;

export const aboutHighlights = [
  {
    icon: 'code',
    title: 'Strong Foundations',
    text: 'Solid grounding in programming and software engineering principles.',
  },
  {
    icon: 'brain',
    title: 'AI, ML & Vision',
    text: 'Deep interest in Artificial Intelligence, Machine Learning and Computer Vision.',
  },
  {
    icon: 'rocket',
    title: 'Practical Builder',
    text: 'Experience developing practical, real-world applications end to end.',
  },
  {
    icon: 'bulb',
    title: 'Curious Learner',
    text: 'Passionate about learning new technologies and solving real problems.',
  },
] as const;

export const skillGroups = [
  {
    icon: 'code',
    title: 'Programming',
    accent: 'from-violet-500 to-fuchsia-500',
    skills: ['Java', 'Python', 'C++', 'C', 'JavaScript', 'SQL'],
  },
  {
    icon: 'brain',
    title: 'AI / ML',
    accent: 'from-fuchsia-500 to-sky-500',
    skills: ['Machine Learning', 'Deep Learning', 'Generative AI', 'LangChain', 'LLMs', 'Computer Vision', 'NLP'],
  },
  {
    icon: 'database',
    title: 'Database',
    accent: 'from-sky-500 to-blue-600',
    skills: ['MySQL', 'RDBMS'],
  },
  {
    icon: 'layers',
    title: 'Core Concepts',
    accent: 'from-indigo-500 to-violet-500',
    skills: ['OOPs', 'DSA', 'SDLC', 'Operating Systems'],
  },
  {
    icon: 'wrench',
    title: 'Tools',
    accent: 'from-blue-500 to-indigo-500',
    skills: ['VS Code', 'Jupyter Notebook', 'Git', 'GitHub'],
  },
] as const;

export type Project = {
  title: string;
  subtitle: string;
  date: string;
  team?: string;
  icon: 'shield' | 'eye' | 'file' | 'calendar';
  points: string[];
  tech: string[];
  /** Repository URL. Leave empty to link to the GitHub profile instead. */
  github: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    title: 'SafeHop',
    subtitle: 'Intelligent Anomaly Detection Framework',
    date: 'May 2026',
    team: 'Team of 4',
    icon: 'shield',
    points: [
      'Co-developed a computer vision and deep learning safety application to detect anomalies in app-based taxi services.',
      'Implemented asynchronous system logic for real-time monitoring and automated emergency alerts.',
      'Architected modular, reusable software components to support maintainability and future extension.',
    ],
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
    github: '', // TODO: add repository link
    badge: '2nd Prize · TECHNOVA 2026',
  },
  {
    title: 'Vision Guard',
    subtitle: 'Collision Avoidance System',
    date: 'Jan 2026',
    icon: 'eye',
    points: [
      'Engineered a collision avoidance system that monitors heavy-vehicle blind spots using real-time image processing.',
      'Built event-driven logic that automatically triggers audio and visual warnings when distance thresholds are crossed.',
    ],
    tech: ['Python', 'OpenCV', 'Digital Image Processing'],
    github: '', // TODO: add repository link
  },
  {
    title: 'Fraudulent Document & Signature Verification',
    subtitle: 'Automated Verification Tool',
    date: 'Nov 2025',
    icon: 'file',
    points: [
      'Developed an ML solution that automates document and signature verification, a traditionally manual workflow.',
      'Applied feature extraction techniques to support ML-based identification of fraudulent documents and signatures.',
      'Designed the solution to reduce manual verification effort and improve processing efficiency.',
    ],
    tech: ['Python', 'Machine Learning', 'Feature Extraction'],
    github: '', // TODO: add repository link
  },
  {
    title: 'Event Management Application',
    subtitle: 'Relational Database Backend',
    date: 'Jan 2024',
    icon: 'calendar',
    points: [
      'Designed a relational backend schema with primary and foreign key constraints to enforce data integrity.',
      'Developed SQL queries to create, update and retrieve participant and event records efficiently.',
      'Applied normalization and functional dependency analysis to eliminate redundancy and keep data consistent.',
    ],
    tech: ['MySQL', 'SQL', 'DBMS', 'Database Design'],
    github: '', // TODO: add repository link
  },
];

export const experience = [
  {
    role: 'Machine Learning & Software Intern',
    company: 'InternPe',
    period: 'May 2026 – June 2026',
    mode: 'Remote',
    points: [
      'Developed Python scripts for data preprocessing and exploratory data analysis (EDA) to prepare datasets for modeling.',
      'Designed, trained and evaluated predictive machine learning models using analytical, data-driven reasoning.',
      'Implemented data-driven application modules, applying algorithmic problem-solving techniques.',
      'Documented technical workflows and communicated project progress to stakeholders.',
    ],
    tags: ['Python', 'EDA', 'Machine Learning', 'Documentation'],
  },
];

export const achievement = {
  title: 'Second Prize – TECHNOVA 2026',
  event: 'B.E. Project Work Exhibition, St Joseph Engineering College',
  date: '30 Oct 2026',
  team: 'Team of 4 · AIML',
  description:
    'Awarded for SafeHop: An Intelligent Anomaly Detection Framework for Passenger Safety in App-Based Taxi Services.',
};

export const education = [
  {
    title: 'B.E. Artificial Intelligence & Machine Learning',
    school: 'St Joseph Engineering College, Mangaluru',
    period: '2023 – Present',
    score: 'CGPA 9.08',
  },
  {
    title: 'Senior Secondary (Class XII)',
    school: 'R.N Shetty Composite PU College, Kundapura',
    period: '2021 – 2023',
    score: '96.82%',
  },
  {
    title: 'Secondary School Certificate (SSLC)',
    school: 'Govt High School, Basrur',
    period: '2020 – 2021',
    score: '98.72%',
  },
];

export const certifications = [
  { title: 'Java Full Stack Development', issuer: 'Wipro', year: '2026' },
  { title: 'Develop Generative AI Applications: Get Started', issuer: 'Coursera' },
  { title: 'GenAI Powered Data Analytics Job Simulation', issuer: 'Forage (Tata)' },
  { title: 'Data Science & Analytics', issuer: 'HP Life' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy' },
];
