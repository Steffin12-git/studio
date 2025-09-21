export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const skillsData = {
  "Frontend": {
    "Languages": ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
    "Frameworks": ["React", "Next.js", "Vue.js"],
    "Styling": ["Tailwind CSS", "Sass", "Styled Components"],
  },
  "Backend": {
    "Languages": ["Node.js", "Python"],
    "Frameworks": ["Express.js", "Django", "Genkit"],
    "Databases": ["PostgreSQL", "MongoDB", "Firebase"],
  },
  "Tools & DevOps": {
    "Tools": ["Git", "Docker", "Webpack", "Figma"],
    "Platforms": ["Vercel", "AWS", "Firebase Hosting"],
  }
};

export const projectsData = [
  {
    title: 'Creative Agency Website',
    description: 'A sleek, modern website for a creative agency, featuring smooth animations and a content management system.',
    image: { id: "1", hint: "creative agency" },
    githubUrl: 'https://github.com/firebase/genkit',
    liveUrl: '#',
    language: 'Next.js',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, built with React and D3.js for a seamless user experience.',
    image: { id: "2", hint: "data dashboard" },
    githubUrl: 'https://github.com/firebase/firebase-hosting-samples',
    liveUrl: '#',
    language: 'React',
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'A smart chatbot application using Genkit to provide intelligent, conversational responses to user queries.',
    image: { id: "3", hint: "ai chatbot" },
    githubUrl: 'https://github.com/google/generative-ai-docs',
    language: 'Genkit',
  },
];

export const educationData = [
  {
    institution: 'University of Innovation',
    degree: 'M.Sc. in Human-Computer Interaction',
    duration: '2021 - 2023',
    description: 'Specialized in user interface design, user experience research, and building intuitive digital products.',
  },
  {
    institution: 'Tech State University',
    degree: 'B.Sc. in Computer Science',
    duration: '2017 - 2021',
    description: 'Graduated with high honors. Focused on software development fundamentals, algorithms, and web technologies.',
  },
];

export const experienceData = [
  {
    company: 'Pixel Perfect Inc.',
    role: 'Frontend Developer',
    duration: '2023 - Present',
    responsibilities: [
      'Developed and maintained responsive user interfaces for high-traffic web applications using React and Next.js.',
      'Collaborated with UI/UX designers to translate wireframes into pixel-perfect, functional components.',
      'Improved website performance and loading speeds by over 20% through code optimization and best practices.',
    ],
  },
  {
    company: 'CodeCrafters LLC',
    role: 'Junior Web Developer',
    duration: '2021 - 2023',
    responsibilities: [
      'Assisted in building and deploying full-stack web applications for various clients.',
      'Wrote clean, maintainable code and participated in regular code reviews.',
      'Gained experience with modern web development tools and agile methodologies.',
    ],
  },
];
