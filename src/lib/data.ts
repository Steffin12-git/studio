import { Github, Linkedin } from "lucide-react";

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Steffin12-git',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/steffin-thomas-b85549260/',
    icon: Linkedin,
  },
];

export const about = {
  bio: 'Results-driven Data Analyst with expertise in SQL, Python, Power BI, and BigQuery. Skilled in building ETL pipelines, predictive models, and interactive dashboards that turn raw data into actionable business insights. Transitioning from frontend development, bringing a strong foundation in automation, data storytelling, and visualization.',
};

export const skillsData = {
  'Data Analysis': ['SQL (CTEs, Window Functions)', 'Python (Pandas, NumPy, scikit-learn)', 'Excel', 'Statistical Analysis', 'A/B Testing'],
  'Data Engineering': ['ETL Automation', 'Pipelines', 'Anomaly Detection', 'API Data Ingestion'],
  'Visualization & BI': ['Power BI (DAX, modeling)', 'Tableau', 'Looker Studio', 'Excel Dashboards'],
  'Tools': ['BigQuery', 'GitHub', 'REST APIs', 'PyCaret', 'SQLite', 'SSMS'],
};


export const projectsData = [
  {
    title: 'Hospitality Revenue Analysis – AtliQ Grands',
    description: 'Automated ETL pipelines with optimized SQL queries, reducing reporting cycle by 40%. Built KPI dashboards (ADR, RevPAR, occupancy) to optimize pricing and revenue decisions.',
    tags: ['Power BI', 'SQL', 'Excel'],
    image: { id: "1", hint: "hospitality revenue" },
    githubUrl: 'https://github.com/Steffin12-git/hospitality-revenue-analysis',
    language: 'Power BI',
  },
  {
    title: 'Employee Churn Prediction – HR Analytics',
    description: 'Processed 15,000+ HR records in BigQuery, ensuring high-quality datasets. Developed churn prediction model with Random Forest, flagging high-risk employees 25% earlier, helping reduce attrition costs. Interactive Looker Studio dashboard visualizing churn risk by department and employee segments.',
    tags: ['BigQuery', 'PyCaret', 'Looker Studio'],
    image: { id: "2", hint: "churn prediction" },
    githubUrl: 'https://github.com/Steffin12-git/Employee-Churn-Analysis',
    language: 'BigQuery',
  },
  {
    title: 'EV Market Entry Strategy – Automotive Sector',
    description: 'Forecasted EV adoption and sales scenarios using SQL + CAGR/DAX, improving forecast accuracy by 30%. Created dashboards comparing state-wise penetration, competitor performance, and market trends. Delivered data-driven recommendations for a multimillion-dollar investment strategy.',
    tags: ['Power BI', 'Excel', 'DAX'],
    image: { id: "3", hint: "ev market" },
    githubUrl: 'https://github.com/Steffin12-git/Automotive_project',
    language: 'Power BI',
  },
    {
    title: 'Epidemiological Data Pipeline & Dashboard – COVID-19 Project',
    description: 'Designed a real-time ETL pipeline with anomaly detection for clean COVID data ingestion. Built dashboards tracking infections, recoveries, and death trends across regions. Enabled early detection of spikes and trends for public health monitoring.',
    tags: ['Python', 'SQLite', 'Power BI'],
    image: { id: "4", hint: "covid dashboard" },
    githubUrl: 'https://github.com/Steffin12-git/Live-Covid19-Project',
    language: 'Python',
  },
];

export const educationData = [
    {
    institution: 'MCA, MACFAST, Mahatma Gandhi University',
    duration: 'Sep 2024',
  },
  {
    institution: 'BCA, Catholicate College, Pathanamthitta',
    duration: 'June 2022',
  },
];

export const certificationsData = [
    {
    title: 'Google Advanced Data Analytics',
    issuer: 'Coursera',
    date: 'In Progress – Expected Oct 2025',
    credentialId: '',
    link: '#',
    subCourses: [
      { title: 'Foundations of Data Science by Google', credentialId: '74A181Q36TFM' },
      { title: 'Get Started with Python by Google', credentialId: 'RXQKAZHPG167' },
    ]
  },
  {
    title: 'Tata – GenAI Powered Data Analytics Job Simulation',
    issuer: 'Forage',
    date: 'Jul 2024',
    credentialId: 'NuHRWm9P9qb79BuPH',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_Gh9rGJRanLRb9Tir8_1752503272153_completion_certificate.pdf',
    subCourses: []
  },
  {
    title: 'Data Visualization: Storytelling',
    issuer: 'LinkedIn Learning',
    date: 'Aug 2025',
    credentialId: '4d359ab5c27883832a425b809216472c29e5b4be6074fa93db9b6388907612cc',
    link: 'https://www.linkedin.com/learning/certificates/4d359ab5c27883832a425b809216472c29e5b4be6074fa93db9b6388907612cc?trk=share_certificate',
    subCourses: []
  },
  {
    title: 'Data Science Foundations',
    issuer: 'Cisco Networking Academy',
    date: '',
    credentialId: '',
    link: 'https://www.credly.com/badges/5c310977-2322-4a27-a7ea-cd439edf6375/public_url',
    subCourses: []
  }
];


export const experienceData = [
  {
    company: 'Webyfy IoT Pvt. Ltd.',
    role: 'Frontend Developer',
    duration: 'Oct 2024 – Apr 2025',
    description: 'Leveraging strong frontend expertise to build robust API integrations and scalable UI components. Proactively handled complex data structures and contributed to the development of intuitive interfaces, demonstrating a keen eye for data flow and visualization.',
  },
];
