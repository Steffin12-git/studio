export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const skillsData = {
  "Core Competencies": {
    "Web Development": ["React", "Next.js", "Node.js", "Express", "HTML5", "CSS3"],
    "Databases": ["MongoDB", "PostgreSQL", "Firebase"],
    "Cloud & DevOps": ["Docker", "AWS", "Vercel", "Git"],
  },
  "Programming Languages": {
    "Primary": ["JavaScript", "TypeScript", "Python"],
    "Familiar": ["Java", "C++"],
  },
  "Tools & Technologies": {
    "Development Tools": ["VS Code", "Postman", "Webpack"],
    "Design": ["Figma", "Adobe XD"],
  }
};

export const projectsData = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with features like product catalog, shopping cart, user authentication, and order management.',
    image: { id: "1", hint: "online shopping" },
    githubUrl: 'https://github.com/firebase/genkit',
    language: 'TypeScript',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application that helps teams organize, track, and manage their work efficiently.',
    image: { id: "2", hint: "team collaboration" },
    githubUrl: 'https://github.com/firebase/firebase-hosting-samples',
    language: 'JavaScript',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js to showcase projects, skills, and professional experience.',
    image: { id: "3", hint: "personal website" },
    githubUrl: 'https://github.com/google/generative-ai-docs',
    language: 'TypeScript',
  },
];

export const educationData = [
  {
    institution: 'University of Technology',
    degree: 'Master of Science in Computer Science',
    duration: '2020 - 2022',
    description: 'Focused on advanced algorithms, machine learning, and distributed systems. Thesis on scalable web architectures.',
  },
  {
    institution: 'State College',
    degree: 'Bachelor of Science in Software Engineering',
    duration: '2016 - 2020',
    description: 'Graduated with honors. Core curriculum included data structures, software design patterns, and database management.',
  },
];

export const experienceData = [
  {
    company: 'Innovatech Solutions',
    role: 'Senior Software Engineer',
    duration: '2022 - Present',
    responsibilities: [
      'Lead development of a new SaaS platform using Next.js, TypeScript, and PostgreSQL.',
      'Mentor junior developers and conduct code reviews to maintain high code quality.',
      'Design and implement scalable cloud infrastructure on AWS.',
    ],
  },
  {
    company: 'Digital Creations Inc.',
    role: 'Software Developer',
    duration: '2020 - 2022',
    responsibilities: [
      'Developed and maintained client websites using React and Node.js.',
      'Collaborated with designers to create responsive and user-friendly interfaces.',
      'Integrated third-party APIs for payment processing and analytics.',
    ],
  },
];
